# Card data format

Each file in data/ is plain JS (no modules) that appends to a global array:

```js
window.CARDS = (window.CARDS || []).concat([
  {
    id: "ch13-carbidopa-levodopa",      // unique, kebab-case, prefixed with set key
    set: "ch13",                        // set key given in your task
    group: "Parkinson's disease",       // sub-heading within the set
    drug: "Carbidopa/levodopa",         // prototype generic name (ATI prototype where one exists)
    brand: "Sinemet",                   // common brand, or "" if none worth knowing
    cls: "Dopamine replacement (dopaminergic)",   // class / category
    others: "—",                        // other meds in the same class ATI lists, comma list, or ""
    moa: "Levodopa crosses BBB → converted to dopamine; carbidopa blocks peripheral conversion so more reaches brain, fewer peripheral side effects.",  // ONE line, plain words
    ind: ["Parkinson's disease"],
    se:  ["Nausea/vomiting, anorexia", "..."],   // common/mild side effects
    ae:  ["Dyskinesias (abnormal involuntary movements)", "..."], // serious adverse effects + what nurse does, brief
    ci:  ["Narrow-angle glaucoma", "..."],       // contraindications AND precautions (prefix "Caution:" for precautions)
    ix:  ["MAOIs (nonselective) → hypertensive crisis; stop MAOI 2 wk before", "..."], // "X → effect; action"
    warn:["On-off phenomenon / wearing off — ...", "..."],   // special warnings: black box (prefix "BLACK BOX:"), key nursing considerations, monitoring, labs, high-alert
    edu: ["High-protein meals reduce absorption — spread protein through the day", "..."], // client education, client's-eye phrasing
    antidote: "",                       // antidote/reversal agent, or "" (UI shows "None — treat symptoms")
    tip: "Pyridoxine (B6) speeds peripheral levodopa breakdown — avoid B6 supplements (less of an issue with carbidopa)."  // ONE memory hook / testable pearl, or ""
  },
]);
```

Rules
- Content = ATI RN Pharmacology for Nursing 9.0 emphasis: prototype drugs, NCLEX-testable facts. Accuracy over volume. No invented facts; if unsure, leave it out.
- Bullets are short (aim ≤ 14 words). 2–6 bullets per field. Empty array if truly nothing.
- Spell out abbreviations on first use inside each card, e.g. "ACE (angiotensin-converting enzyme) inhibitors" — cards are shuffled.
- Include therapeutic drug levels where tested (e.g. phenytoin 10–20 mcg/mL, digoxin 0.5–2 ng/mL, theophylline 10–20 mcg/mL).
- Antidotes: only real reversal agents (naloxone, flumazenil, digoxin immune fab, protamine, vitamin K, idarucizumab, atropine for cholinergic crisis, etc.). Otherwise "".
- American spelling. Plain ASCII-friendly punctuation is fine; "→" allowed.
- One card per prototype drug or tightly-grouped class (e.g. "Statins" with atorvastatin as prototype is fine).
