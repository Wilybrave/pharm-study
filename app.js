(function(){
  "use strict";
  const CARDS = window.CARDS || [], SETS = window.SETS;
  const FIELDS = [
    {k:"ind",  label:"Indications",                     ask:"Indications?"},
    {k:"se",   label:"Main side effects",               ask:"Main side effects?"},
    {k:"ae",   label:"Adverse effects",                 ask:"Adverse effects (serious)?"},
    {k:"ci",   label:"Contraindications & precautions", ask:"Contraindications?"},
    {k:"ix",   label:"Interactions",                    ask:"Interactions?"},
    {k:"warn", label:"Special warnings",                ask:"Special warnings / nursing considerations?"},
    {k:"edu",  label:"Client education",                ask:"Client education?"},
    {k:"anti", label:"Antidote",                        ask:"Antidote?"},
  ];
  const $ = id => document.getElementById(id);
  const store = {
    get(k, d){ try{ const v = localStorage.getItem("ps."+k); return v == null ? d : JSON.parse(v); }catch(e){ return d; } },
    set(k, v){ try{ localStorage.setItem("ps."+k, JSON.stringify(v)); }catch(e){} }
  };

  let mode = store.get("mode", "cards");
  let on = new Set(store.get("sets3", SETS.filter(s => !s.hedge).map(s => s.key)));
  let known = new Set(store.get("known", []));
  let field = store.get("field", "mix");
  let queue = [], idx = 0, flipped = false, missed = new Set();

  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const fmt = s => esc(s).replace(/^(BLACK BOX:)/i, '<span class="bb">$1</span>');
  const setOf = k => SETS.find(s => s.key === k) || {ch:"", title:k};
  const has = (c, k) => k === "anti" ? !!(c.antidote && c.antidote.trim()) : (c[k] && c[k].length);

  // ---------- set chips ----------
  function drawChips(){
    $("chips").innerHTML = SETS.map(s => {
      const n = CARDS.filter(c => c.set === s.key).length;
      return `<button class="chip${on.has(s.key) ? " on" : ""}${s.hedge ? " hedge" : ""}" data-k="${s.key}">
        <b>${esc(s.ch)}</b> ${esc(s.title)}<small>${n} cards${s.hedge ? " · extra, not on the test list" : ""}</small></button>`;
    }).join("");
    const n = CARDS.filter(c => on.has(c.set)).length;
    $("setCount").textContent = `${on.size} of ${SETS.length} chapters · ${n} cards`;
  }
  $("chips").addEventListener("click", e => {
    const b = e.target.closest(".chip"); if(!b) return;
    const k = b.dataset.k; on.has(k) ? on.delete(k) : on.add(k);
    store.set("sets3", [...on]); drawChips(); rebuild();
  });
  $("allOn").onclick = () => { on = new Set(SETS.map(s => s.key)); store.set("sets3", [...on]); drawChips(); rebuild(); };
  $("allOff").onclick = () => { on = new Set(); store.set("sets3", []); drawChips(); rebuild(); };

  // ---------- options ----------
  $("field").innerHTML += FIELDS.map(f => `<option value="${f.k}">${f.label} only</option>`).join("");
  $("field").value = field;
  $("field").onchange = e => { field = e.target.value; store.set("field", field); rebuild(); };
  $("shuffle").checked = store.get("shuffle", true);
  $("shuffle").onchange = e => { store.set("shuffle", e.target.checked); rebuild(); };
  $("hideKnown").checked = store.get("hideKnown", false);
  $("hideKnown").onchange = e => { store.set("hideKnown", e.target.checked); rebuild(); };
  $("resetKnown").onclick = () => {
    if(!confirm("Clear all “Got it” marks?")) return;
    known = new Set(); store.set("known", []); rebuild();
  };

  // ---------- deck ----------
  const keyOf = it => it.f ? it.c.id + "|" + it.f : it.c.id;
  function rebuild(only){
    let items = [];
    const pool = CARDS.filter(c => on.has(c.set));
    // keep book order: by set order, then file order
    const order = Object.fromEntries(SETS.map((s, i) => [s.key, i]));
    pool.sort((a, b) => order[a.set] - order[b.set]);
    for(const c of pool){
      if(mode === "drill"){
        let fs = field === "mix" ? FIELDS.filter(f => has(c, f.k)) : FIELDS.filter(f => f.k === field && has(c, f.k));
        if(field === "mix" && fs.length){ fs = [fs[Math.floor(Math.random() * fs.length)]]; }
        fs.forEach(f => items.push({c, f:f.k}));
      } else items.push({c});
    }
    if(only) items = items.filter(it => only.has(keyOf(it)));
    if($("hideKnown").checked && !only) items = items.filter(it => !known.has(keyOf(it)));
    if($("shuffle").checked){
      for(let i = items.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [items[i], items[j]] = [items[j], items[i]]; }
    }
    queue = items; idx = 0; flipped = false; missed = new Set();
    render();
  }

  // ---------- render a card ----------
  function list(k, c){
    if(k === "anti"){
      return c.antidote && c.antidote.trim()
        ? `<ul><li>${fmt(c.antidote)}</li></ul>`
        : `<div class="anti-none">None specific: stop the drug and treat symptoms</div>`;
    }
    return `<ul>${(c[k] || []).map(x => `<li>${fmt(x)}</li>`).join("")}</ul>`;
  }
  function sec(f, c){
    if(f.k !== "anti" && !has(c, f.k)) return "";
    return `<div class="sec ${f.k}"><h4>${f.label}</h4>${list(f.k, c)}</div>`;
  }
  function fullBack(c){
    const s = setOf(c.set);
    return `<div class="back">
      <div class="head"><b>${esc(c.drug)}${c.brand ? ` <span style="font-weight:400;color:var(--muted);font-style:italic">(${esc(c.brand)})</span>` : ""}</b>
        <span>${esc(s.ch)} · ${esc(c.group || "")}</span></div>
      ${c.cls ? `<div class="others"><b>${esc(c.cls)}</b>${c.others && c.others !== "—" ? ` · also: ${esc(c.others)}` : ""}</div>` : ""}
      ${c.moa ? `<p class="moa">How it works: ${esc(c.moa)}</p>` : ""}
      ${FIELDS.map(f => sec(f, c)).join("")}
      ${c.tip ? `<div class="tip"><b>Remember:</b> ${esc(c.tip)}</div>` : ""}
    </div>`;
  }
  function front(c, f){
    const s = setOf(c.set);
    return `<div class="front">
      <div class="tag">${esc(s.ch)} · ${esc(c.group || s.title)}</div>
      <div class="drug">${esc(c.drug)}</div>
      ${c.brand ? `<div class="brand">${esc(c.brand)}</div>` : ""}
      ${c.cls ? `<div class="cls">${esc(c.cls)}</div>` : ""}
      ${f ? `<div class="ask">${FIELDS.find(x => x.k === f).ask}</div>` : ""}
      <div class="hint">tap to flip</div>
    </div>`;
  }
  function render(){
    if(mode === "browse") return;
    const card = $("card");
    const total = queue.length;
    if(!total){
      card.innerHTML = `<div class="done"><h2>No cards</h2><p>Pick at least one chapter above${$("hideKnown").checked ? ", or untick “Skip cards I've marked”" : ""}.</p></div>`;
      $("pos").textContent = ""; $("barFill").style.width = "0"; updKnown(); ctrl(false); return;
    }
    if(idx >= total){
      card.innerHTML = `<div class="done"><h2>Deck done 🎉</h2>
        <p>${missed.size ? `${missed.size} card${missed.size > 1 ? "s" : ""} marked “Again”.` : "Nothing marked “Again”."}</p>
        ${missed.size ? `<button id="redoMissed">Redo the ${missed.size} I missed</button>` : ""}
        <button id="redoAll">Start over</button></div>`;
      $("pos").textContent = `${total} / ${total}`; $("barFill").style.width = "100%";
      const m = new Set(missed);
      if($("redoMissed")) $("redoMissed").onclick = () => rebuild(m);
      $("redoAll").onclick = () => rebuild();
      updKnown(); ctrl(false); return;
    }
    const it = queue[idx];
    if(!flipped) card.innerHTML = front(it.c, it.f);
    else if(it.f){
      const f = FIELDS.find(x => x.k === it.f);
      card.innerHTML = `<div class="back drillback">
        <div class="head"><b>${esc(it.c.drug)}</b><span>${esc(f.label)}</span></div>
        ${sec(f, it.c)}
      </div>`;
    } else card.innerHTML = fullBack(it.c);
    $("pos").textContent = `Card ${idx + 1} of ${total}`;
    $("barFill").style.width = (idx / total * 100) + "%";
    $("flipBtn").textContent = flipped ? "Front" : "Flip";
    updKnown(); ctrl(true);
  }
  function updKnown(){
    const all = CARDS.filter(c => on.has(c.set));
    const k = mode === "drill" ? [...known].filter(x => x.includes("|") && on.has((CARDS.find(c => c.id === x.split("|")[0]) || {}).set)).length
                               : all.filter(c => known.has(c.id)).length;
    $("knownCt").textContent = mode === "drill" ? `${k} drill answers marked Got it` : `${k} of ${all.length} marked Got it`;
  }
  function ctrl(show){ $("ctrl").style.visibility = show ? "visible" : "hidden"; }

  // ---------- actions ----------
  function flip(){ if(idx < queue.length){ flipped = !flipped; render(); } }
  function next(){ idx++; flipped = false; render(); window.scrollTo({top:0}); }
  function prev(){ if(idx > 0){ idx--; flipped = false; render(); } }
  function again(){
    const it = queue[idx]; if(!it) return;
    missed.add(keyOf(it));
    known.delete(keyOf(it)); store.set("known", [...known]);
    // see it again a few cards later
    const at = Math.min(queue.length, idx + 4 + Math.floor(Math.random() * 3));
    queue.splice(at, 0, it);
    next();
  }
  function got(){
    const it = queue[idx]; if(!it) return;
    known.add(keyOf(it)); store.set("known", [...known]);
    next();
  }
  $("card").addEventListener("click", e => { if(e.target.closest("button")) return; flip(); });
  $("flipBtn").onclick = flip; $("prev").onclick = prev; $("again").onclick = again; $("got").onclick = got;
  document.addEventListener("keydown", e => {
    if(mode === "browse" || e.target.matches("input,select")) return;
    if(e.key === " " || e.key === "Enter"){ e.preventDefault(); flip(); }
    else if(e.key === "ArrowLeft") prev();
    else if(e.key === "ArrowRight") next();
    else if(e.key === "1") again();
    else if(e.key === "2") got();
  });
  let tx = null, ty = null;
  $("card").addEventListener("touchstart", e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, {passive:true});
  $("card").addEventListener("touchend", e => {
    if(tx == null) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    tx = null;
    if(Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5){ dx < 0 ? next() : prev(); }
  });

  // ---------- browse ----------
  function drawBrowse(){
    const q = $("q").value.trim().toLowerCase();
    let html = "";
    for(const s of SETS){
      if(!on.has(s.key)) continue;
      let cs = CARDS.filter(c => c.set === s.key);
      if(q) cs = cs.filter(c => JSON.stringify(c).toLowerCase().includes(q));
      if(!cs.length) continue;
      html += `<div class="bset"><h2>${esc(s.ch)} · ${esc(s.title)}</h2>`;
      let g = null;
      for(const c of cs){
        if(c.group !== g){ g = c.group; if(g) html += `<h3>${esc(g)}</h3>`; }
        html += `<div class="bcard">${fullBack(c)}</div>`;
      }
      html += `</div>`;
    }
    $("blist").innerHTML = html || `<p class="note">Nothing matches.</p>`;
  }
  $("q").addEventListener("input", drawBrowse);

  // ---------- mode ----------
  function setMode(m){
    mode = m; store.set("mode", m);
    document.querySelectorAll("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.mode === m));
    $("drillOpts").hidden = m !== "drill";
    $("study").hidden = m === "browse";
    $("browse").hidden = m !== "browse";
    if(m === "browse"){ ctrl(false); $("ctrl").hidden = true; drawBrowse(); }
    else { $("ctrl").hidden = false; rebuild(); }
  }
  $("tabs").addEventListener("click", e => { const b = e.target.closest("button"); if(b) setMode(b.dataset.mode); });
  const _rebuild = rebuild;
  rebuild = function(o){ if(mode === "browse") drawBrowse(); else _rebuild(o); };

  drawChips();
  setMode(location.hash === "#browse" ? "browse" : mode);
})();
