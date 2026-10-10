window.CARDS = (window.CARDS || []).concat([
  // ===================== ANTIDYSRHYTHMICS =====================
  {
    id: "ch22-procainamide",
    set: "ch22",
    group: "Antidysrhythmics",
    drug: "Procainamide",
    brand: "",
    cls: "Class IA antidysrhythmic (sodium channel blocker)",
    others: "quinidine, disopyramide",
    moa: "Blocks sodium channels → slows conduction and prolongs repolarization in atria and ventricles.",
    ind: ["Atrial and ventricular dysrhythmias", "Life-threatening ventricular tachycardia"],
    se: ["Nausea, vomiting, diarrhea", "Hypotension (especially IV)"],
    ae: [
      "Lupus-like syndrome (SLE, systemic lupus erythematosus) — joint pain, fever, rash; positive ANA (antinuclear antibody); report",
      "Blood dyscrasias (agranulocytosis, thrombocytopenia) — monitor CBC (complete blood count); report fever, sore throat, bleeding",
      "QRS widening and QT prolongation → new dysrhythmias (torsades de pointes)"
    ],
    ci: ["Complete heart block", "Systemic lupus erythematosus", "Torsades de pointes", "Caution: heart failure, renal or hepatic impairment"],
    ix: ["Other QT-prolonging drugs → additive QT prolongation, torsades; monitor ECG (electrocardiogram)"],
    warn: [
      "BLACK BOX: positive ANA / lupus-like syndrome; blood dyscrasias",
      "Continuous ECG monitoring with IV — report QRS or QT widening",
      "Monitor blood pressure (hypotension with IV)",
      "Monitor CBC regularly"
    ],
    edu: [
      "Report joint pain, fever, or rash (lupus-like symptoms)",
      "Report sore throat, fever, unusual bruising or bleeding"
    ],
    antidote: "",
    tip: "Procainamide = \"pro-lupus\": lupus-like syndrome and blood dyscrasias are the classic tested adverse effects."
  },
  {
    id: "ch22-lidocaine",
    set: "ch22",
    group: "Antidysrhythmics",
    drug: "Lidocaine (IV)",
    brand: "Xylocaine",
    cls: "Class IB antidysrhythmic (sodium channel blocker)",
    others: "mexiletine",
    moa: "Blocks sodium channels in ventricles → slows conduction, decreases ventricular automaticity.",
    ind: ["Ventricular dysrhythmias (ventricular tachycardia, ventricular fibrillation)"],
    se: ["Drowsiness", "Mild confusion", "Numbness/paresthesias"],
    ae: [
      "CNS (central nervous system) toxicity — drowsiness, confusion, paresthesias, tinnitus → seizures; stop infusion, notify provider",
      "Bradycardia, heart block, hypotension"
    ],
    ci: ["Severe heart block (second- or third-degree) without pacemaker", "Caution: hepatic impairment, heart failure (slower clearance)"],
    ix: ["Cimetidine, beta blockers → increased lidocaine levels/toxicity; monitor for CNS effects"],
    warn: [
      "Given IV only for dysrhythmias (poor oral bioavailability — first-pass liver metabolism)",
      "Continuous ECG (electrocardiogram) monitoring; use infusion pump",
      "Assess neuro status often — early CNS changes signal toxicity",
      "Seizure precautions"
    ],
    edu: ["Tell the nurse right away about ringing in ears, numbness, confusion, or feeling drowsy"],
    antidote: "",
    tip: "Lidocaine toxicity = CNS first: drowsy, confused, tinnitus, tingling → seizures."
  },
  {
    id: "ch22-flecainide",
    set: "ch22",
    group: "Antidysrhythmics",
    drug: "Flecainide",
    brand: "",
    cls: "Class IC antidysrhythmic (sodium channel blocker)",
    others: "propafenone",
    moa: "Strongly blocks sodium channels → markedly slows conduction through the heart.",
    ind: ["Paroxysmal atrial fibrillation/flutter and PSVT (paroxysmal supraventricular tachycardia) without structural heart disease", "Life-threatening ventricular dysrhythmias"],
    se: ["Dizziness", "Blurred vision", "Nausea"],
    ae: ["Proarrhythmic — can cause new or worse dysrhythmias", "Heart failure (negative inotrope)"],
    ci: ["Recent MI (myocardial infarction) or structural heart disease", "Cardiogenic shock", "Second- or third-degree heart block without pacemaker"],
    ix: [],
    warn: [
      "BLACK BOX: proarrhythmic effects; increased mortality in post-MI clients (CAST trial)",
      "Start under ECG (electrocardiogram) monitoring"
    ],
    edu: ["Report palpitations, fainting, shortness of breath, or swelling"],
    antidote: "",
    tip: "Class IC = strongest sodium block; never in post-MI or structural heart disease."
  },
  {
    id: "ch22-beta-blockers",
    set: "ch22",
    group: "Antidysrhythmics",
    drug: "Propranolol / esmolol",
    brand: "Inderal / Brevibloc",
    cls: "Class II antidysrhythmic (beta-adrenergic blocker)",
    others: "acebutolol, metoprolol",
    moa: "Blocks beta-1 receptors in the heart → slows heart rate, slows AV (atrioventricular) conduction, decreases automaticity.",
    ind: ["Rate control in atrial fibrillation/flutter", "SVT (supraventricular tachycardia)", "Esmolol: short-acting IV for rapid, titratable rate control"],
    se: ["Fatigue", "Dizziness"],
    ae: [
      "Bradycardia, AV block — hold and notify for low heart rate",
      "Hypotension",
      "Bronchospasm (propranolol is nonselective; esmolol is cardioselective)",
      "Heart failure worsening"
    ],
    ci: ["Sinus bradycardia, second- or third-degree AV block", "Cardiogenic shock", "Propranolol: asthma/COPD (chronic obstructive pulmonary disease)", "Caution: diabetes (masks hypoglycemia)"],
    ix: ["Verapamil/diltiazem → additive bradycardia, heart block, hypotension; monitor ECG (electrocardiogram)"],
    warn: ["Check apical pulse and BP (blood pressure) before each dose", "Do not stop abruptly (rebound tachycardia, dysrhythmias)"],
    edu: ["Do not stop suddenly", "Check pulse daily; report slow pulse or dizziness", "If diabetic: tachycardia warning sign of low glucose may be masked"],
    antidote: "",
    tip: "Esmolol = IV, very short half-life — turn it off and effects fade within minutes."
  },
  {
    id: "ch22-amiodarone",
    set: "ch22",
    group: "Antidysrhythmics",
    drug: "Amiodarone",
    brand: "Pacerone, Nexterone",
    cls: "Class III antidysrhythmic (potassium channel blocker)",
    others: "dronedarone, sotalol, dofetilide, ibutilide",
    moa: "Blocks potassium channels → prolongs repolarization and refractory period; also slows heart rate and AV (atrioventricular) conduction.",
    ind: ["Life-threatening ventricular dysrhythmias (recurrent ventricular fibrillation, unstable ventricular tachycardia)", "Atrial fibrillation (off-label)"],
    se: ["Nausea, anorexia, constipation", "Photosensitivity; blue-gray skin discoloration", "Corneal microdeposits — halos, photophobia, blurred vision", "Bradycardia, hypotension"],
    ae: [
      "Pulmonary toxicity — cough, dyspnea, crackles; baseline chest x-ray and PFTs (pulmonary function tests)",
      "Hepatotoxicity — monitor LFTs (liver function tests)",
      "Worsened dysrhythmias, heart block, QT prolongation",
      "Hypothyroidism or hyperthyroidism — monitor thyroid function",
      "Optic neuropathy — vision loss; regular eye exams"
    ],
    ci: ["Sinus bradycardia, second- or third-degree heart block without pacemaker", "Cardiogenic shock", "Pregnancy, breastfeeding", "Caution: thyroid disease, liver disease, lung disease"],
    ix: [
      "Digoxin → increased digoxin levels/toxicity; reduce digoxin dose, monitor level",
      "Warfarin → increased INR (international normalized ratio)/bleeding; reduce warfarin dose, monitor INR",
      "Grapefruit juice → increased amiodarone levels/toxicity; avoid",
      "Other QT-prolonging drugs → torsades de pointes",
      "Beta blockers, verapamil, diltiazem → bradycardia, AV block, hypotension"
    ],
    warn: [
      "BLACK BOX: pulmonary toxicity, hepatotoxicity, worsened dysrhythmias",
      "Very long half-life (weeks to months) — effects and toxicity persist after stopping",
      "Continuous ECG (electrocardiogram) monitoring during IV loading",
      "Baseline + periodic chest x-ray, PFTs, LFTs, thyroid tests, eye exams"
    ],
    edu: [
      "Report cough, shortness of breath, or chest pain right away",
      "Use sunscreen and protective clothing; skin may turn blue-gray",
      "Avoid grapefruit juice",
      "Report vision changes, yellow skin/eyes, dark urine",
      "Get regular eye exams and lab tests"
    ],
    antidote: "",
    tip: "Amiodarone hits lungs, liver, thyroid, eyes, skin — and raises digoxin and warfarin levels."
  },
  {
    id: "ch22-sotalol",
    set: "ch22",
    group: "Antidysrhythmics",
    drug: "Sotalol",
    brand: "Betapace",
    cls: "Class III antidysrhythmic (potassium channel blocker) with beta-blocking (Class II) activity",
    others: "",
    moa: "Blocks potassium channels → prolongs repolarization; also nonselective beta blocker → slows heart rate.",
    ind: ["Life-threatening ventricular dysrhythmias", "Maintenance of normal sinus rhythm in atrial fibrillation/flutter"],
    se: ["Fatigue, dizziness", "Bradycardia"],
    ae: [
      "QT prolongation → torsades de pointes; monitor ECG (electrocardiogram)",
      "Bradycardia, AV (atrioventricular) block, hypotension",
      "Bronchospasm (nonselective beta blockade)"
    ],
    ci: ["Baseline QT prolongation", "Asthma", "Sinus bradycardia, second- or third-degree heart block without pacemaker", "Severe renal impairment; Caution: renal impairment (dose by creatinine clearance)"],
    ix: ["Other QT-prolonging drugs → torsades", "Calcium channel blockers → additive bradycardia/hypotension"],
    warn: [
      "BLACK BOX: start (or restart) in a facility with continuous ECG monitoring for at least 3 days; calculate creatinine clearance",
      "Keep potassium and magnesium normal (low levels raise torsades risk)"
    ],
    edu: ["Report fainting, palpitations, or dizziness", "Do not stop suddenly"],
    antidote: "",
    tip: "Sotalol = beta blocker + Class III — start in the hospital on a monitor because of torsades."
  },
  {
    id: "ch22-dofetilide",
    set: "ch22",
    group: "Antidysrhythmics",
    drug: "Dofetilide",
    brand: "Tikosyn",
    cls: "Class III antidysrhythmic (potassium channel blocker)",
    others: "",
    moa: "Blocks potassium channels → prolongs repolarization and refractory period.",
    ind: ["Convert atrial fibrillation/flutter and maintain normal sinus rhythm"],
    se: ["Headache", "Dizziness"],
    ae: ["QT prolongation → torsades de pointes"],
    ci: ["Baseline QT prolongation", "Severe renal impairment", "Hydrochlorothiazide, verapamil, cimetidine, ketoconazole, trimethoprim (raise dofetilide levels)"],
    ix: ["Drugs that raise dofetilide levels (verapamil, cimetidine, ketoconazole) → torsades; contraindicated together"],
    warn: ["BLACK BOX: start in a facility with continuous ECG (electrocardiogram) monitoring for at least 3 days; dose by creatinine clearance"],
    edu: ["Report fainting or fast/irregular heartbeat", "Check with provider before starting any new medicine"],
    antidote: "",
    tip: ""
  },
  {
    id: "ch22-ccb-rate-control",
    set: "ch22",
    group: "Antidysrhythmics",
    drug: "Verapamil / diltiazem",
    brand: "Calan / Cardizem",
    cls: "Class IV antidysrhythmic (calcium channel blocker)",
    others: "",
    moa: "Blocks calcium channels in SA (sinoatrial) and AV (atrioventricular) nodes → slows heart rate and AV conduction.",
    ind: ["Rate control in atrial fibrillation/flutter", "SVT (supraventricular tachycardia)"],
    se: ["Constipation (especially verapamil)", "Dizziness, headache", "Peripheral edema"],
    ae: ["Bradycardia, AV block", "Hypotension", "Heart failure worsening"],
    ci: ["Heart failure (reduced ejection fraction)", "Second- or third-degree AV block, sick sinus syndrome without pacemaker", "Severe hypotension"],
    ix: [
      "Beta blockers → additive bradycardia, AV block, hypotension; monitor",
      "Digoxin → verapamil raises digoxin levels; monitor level",
      "Grapefruit juice → increased drug levels; avoid"
    ],
    warn: ["Check heart rate and BP (blood pressure) before dosing", "IV: continuous ECG (electrocardiogram) and BP monitoring"],
    edu: ["Increase fiber and fluids to prevent constipation", "Report dizziness, slow pulse, swelling, or shortness of breath", "Avoid grapefruit juice"],
    antidote: "",
    tip: "Only the non-dihydropyridine CCBs (verapamil, diltiazem) slow the heart — nifedipine does not."
  },
  {
    id: "ch22-adenosine",
    set: "ch22",
    group: "Antidysrhythmics",
    drug: "Adenosine",
    brand: "Adenocard",
    cls: "Other antidysrhythmic",
    others: "",
    moa: "Slows conduction through the AV (atrioventricular) node → interrupts reentry; half-life under 10 seconds.",
    ind: ["Convert PSVT (paroxysmal supraventricular tachycardia) to sinus rhythm"],
    se: ["Facial flushing", "Shortness of breath, chest pressure", "Headache, dizziness"],
    ae: ["Brief asystole/pause for a few seconds — expected", "Bronchospasm", "Transient bradycardia, hypotension"],
    ci: ["Second- or third-degree AV block or sick sinus syndrome without pacemaker", "Caution: asthma (bronchospasm)"],
    ix: [
      "Methylxanthines (theophylline, caffeine) → block adenosine, reduce effect; may need higher dose",
      "Dipyridamole → increases adenosine effect; lower dose",
      "Carbamazepine → increased risk of heart block"
    ],
    warn: [
      "Give rapid IV push over 1–2 seconds, then rapid normal saline flush",
      "Use port closest to the heart",
      "Continuous ECG (electrocardiogram) monitoring; crash cart available"
    ],
    edu: ["You may briefly feel flushing, chest pressure, or a pause — it passes in seconds"],
    antidote: "",
    tip: "Rapid push + flush, then expect a brief flat line — that's the drug working."
  },
  {
    id: "ch22-digoxin-afib",
    set: "ch22",
    group: "Antidysrhythmics",
    drug: "Digoxin",
    brand: "Lanoxin",
    cls: "Cardiac glycoside (used as antidysrhythmic)",
    others: "",
    moa: "Slows conduction through the AV (atrioventricular) node → slows ventricular rate; also increases contraction strength.",
    ind: ["Ventricular rate control in atrial fibrillation/flutter", "Heart failure"],
    se: ["Nausea, anorexia"],
    ae: [
      "Digoxin toxicity — anorexia, nausea/vomiting, blurred vision, yellow-green halos, dysrhythmias",
      "Bradycardia — hold if apical pulse below 60 in adults and notify provider"
    ],
    ci: ["Ventricular fibrillation", "Caution: hypokalemia, renal impairment, older adults"],
    ix: [
      "Potassium-wasting diuretics → hypokalemia → digoxin toxicity; monitor potassium",
      "Amiodarone, verapamil → increased digoxin levels; monitor level"
    ],
    warn: ["Therapeutic level 0.5–2 ng/mL", "Take apical pulse for 1 full minute before giving", "Monitor potassium — hypokalemia increases toxicity"],
    edu: ["Check pulse before each dose; report slow pulse", "Report loss of appetite, nausea, or vision changes"],
    antidote: "Digoxin immune fab (Digifab)",
    tip: "Low potassium = digoxin toxicity risk. Full card in the heart failure chapter."
  },
  {
    id: "ch22-atropine",
    set: "ch22",
    group: "Antidysrhythmics",
    drug: "Atropine",
    brand: "",
    cls: "Anticholinergic (muscarinic antagonist)",
    others: "",
    moa: "Blocks vagal (parasympathetic) effects on SA (sinoatrial) and AV (atrioventricular) nodes → increases heart rate.",
    ind: ["Symptomatic bradycardia"],
    se: ["Dry mouth", "Blurred vision, photophobia", "Urinary retention", "Constipation"],
    ae: ["Tachycardia", "Anticholinergic toxicity — hot, dry, flushed skin, confusion, delirium"],
    ci: ["Angle-closure glaucoma", "Caution: BPH (benign prostatic hyperplasia)/urinary retention, myocardial ischemia"],
    ix: ["Other anticholinergic drugs (antihistamines, tricyclic antidepressants) → additive anticholinergic effects"],
    warn: ["Continuous ECG (electrocardiogram) and vital sign monitoring", "Monitor urine output"],
    edu: ["Report trouble urinating, fast heartbeat, or eye pain"],
    antidote: "",
    tip: "Atropine speeds the heart by blocking the vagus nerve."
  },

  // ===================== CHOLESTEROL (ANTILIPEMICS) =====================
  {
    id: "ch22-statins",
    set: "ch22",
    group: "Cholesterol (antilipemics)",
    drug: "Atorvastatin",
    brand: "Lipitor",
    cls: "HMG-CoA reductase inhibitor (statin)",
    others: "simvastatin, lovastatin, pravastatin, rosuvastatin",
    moa: "Blocks HMG-CoA reductase → liver makes less cholesterol and removes more LDL (low-density lipoprotein) from blood.",
    ind: ["Lower LDL and total cholesterol; modestly raise HDL (high-density lipoprotein)", "Prevent MI (myocardial infarction), stroke in at-risk clients"],
    se: ["Headache", "GI upset — abdominal pain, constipation, diarrhea", "Rash"],
    ae: [
      "Myopathy/rhabdomyolysis — muscle pain, tenderness, weakness; check CK (creatine kinase), stop drug if elevated",
      "Hepatotoxicity — baseline and periodic LFTs (liver function tests)"
    ],
    ci: ["Pregnancy (stop before conceiving) and breastfeeding", "Active liver disease", "Caution: alcohol use disorder, renal impairment"],
    ix: [
      "Gemfibrozil and other fibrates → increased myopathy/rhabdomyolysis risk; monitor CK, report muscle pain",
      "Grapefruit juice → increased statin levels; avoid large amounts",
      "Macrolides, azole antifungals, cyclosporine, HIV protease inhibitors → increased statin levels/myopathy",
      "Some statins + warfarin → increased bleeding; monitor INR (international normalized ratio)"
    ],
    warn: ["Monitor LFTs and lipid levels", "Monitor CK if muscle symptoms occur"],
    edu: [
      "Report unexplained muscle pain, tenderness, or weakness right away",
      "Take simvastatin and lovastatin in the evening (lovastatin with evening meal); atorvastatin any time",
      "Avoid grapefruit juice",
      "Use reliable contraception; stop drug if pregnant",
      "Continue low-fat diet and exercise"
    ],
    antidote: "",
    tip: "Muscle pain on a statin = check CK; statin + gemfibrozil = rhabdo risk."
  },
  {
    id: "ch22-ezetimibe",
    set: "ch22",
    group: "Cholesterol (antilipemics)",
    drug: "Ezetimibe",
    brand: "Zetia",
    cls: "Cholesterol absorption inhibitor",
    others: "",
    moa: "Blocks cholesterol absorption in the small intestine → less cholesterol reaches the liver → lower LDL (low-density lipoprotein).",
    ind: ["Lower LDL — alone or added to a statin"],
    se: ["Diarrhea", "Joint pain, muscle aches", "Upper respiratory infection symptoms"],
    ae: ["Hepatotoxicity when combined with a statin — monitor LFTs (liver function tests)", "Myopathy (rare) — report muscle pain"],
    ci: ["With a statin: active liver disease, pregnancy, breastfeeding"],
    ix: [
      "Bile acid sequestrants → reduced ezetimibe absorption; take ezetimibe 2 h before or 4 h after",
      "Cyclosporine → increased ezetimibe levels; monitor"
    ],
    warn: ["Monitor lipid levels; LFTs if combined with a statin"],
    edu: ["Take once daily, with or without food", "Report muscle pain or weakness", "Continue low-fat diet and exercise"],
    antidote: "",
    tip: "Ezetimibe works in the gut (absorption); statins work in the liver (synthesis) — that's why they pair well."
  },
  {
    id: "ch22-bile-acid-sequestrants",
    set: "ch22",
    group: "Cholesterol (antilipemics)",
    drug: "Cholestyramine",
    brand: "Questran",
    cls: "Bile acid sequestrant",
    others: "colesevelam, colestipol",
    moa: "Binds bile acids in the intestine → excreted in stool → liver uses cholesterol to make new bile acids → lower LDL (low-density lipoprotein).",
    ind: ["Lower LDL (often with a statin)", "Cholestyramine: itching from partial biliary obstruction"],
    se: ["Constipation", "Bloating, flatulence, nausea"],
    ae: ["Fat-soluble vitamin (A, D, E, K) deficiency", "Severe constipation/bowel obstruction (rare)"],
    ci: ["Complete biliary obstruction", "Bowel obstruction", "Caution: chronic constipation, high triglycerides (can raise triglycerides)"],
    ix: [
      "Binds many oral drugs (warfarin, digoxin, thiazides, thyroid hormone) → reduced absorption; take other drugs 1 h before or 4 h after",
      "Fat-soluble vitamins → reduced absorption; may need supplements"
    ],
    warn: ["Not absorbed systemically — main problems are GI and drug binding", "Monitor lipid levels and bowel function"],
    edu: [
      "Mix cholestyramine powder with fluid (water, juice) — never take it dry",
      "Take other medicines 1 hour before or 4 hours after",
      "Increase fluids and fiber to prevent constipation",
      "Colesevelam tablets: take with a meal and a drink"
    ],
    antidote: "",
    tip: "Sequestrants \"sequester\" other drugs too — 1 hour before or 4 hours after."
  },
  {
    id: "ch22-niacin",
    set: "ch22",
    group: "Cholesterol (antilipemics)",
    drug: "Niacin (nicotinic acid)",
    brand: "Niaspan",
    cls: "Vitamin B3 (antilipemic)",
    others: "",
    moa: "Decreases liver production of VLDL (very-low-density lipoprotein) → lowers LDL (low-density lipoprotein) and triglycerides; raises HDL (high-density lipoprotein).",
    ind: ["Hyperlipidemia — high triglycerides, high LDL, low HDL"],
    se: ["Flushing of face and neck, itching, warmth", "GI upset — nausea, abdominal pain"],
    ae: [
      "Hepatotoxicity (higher risk with sustained-release) — monitor LFTs (liver function tests)",
      "Hyperglycemia — monitor glucose in diabetes",
      "Hyperuricemia/gout — monitor uric acid",
      "Myopathy when combined with a statin"
    ],
    ci: ["Liver disease", "Active peptic ulcer disease", "Arterial bleeding", "Caution: diabetes, gout"],
    ix: ["Statins → increased myopathy/rhabdomyolysis risk; report muscle pain"],
    warn: ["Monitor LFTs, blood glucose, uric acid"],
    edu: [
      "Take aspirin (325 mg) 30 minutes before dose to reduce flushing",
      "Flushing usually decreases after 1–2 weeks",
      "Avoid alcohol and hot drinks around dose (worsen flushing)",
      "Report yellow skin/eyes or dark urine"
    ],
    antidote: "",
    tip: "Niacin: flushing (aspirin 30 min before), liver, high glucose, gout."
  },
  {
    id: "ch22-fibrates",
    set: "ch22",
    group: "Cholesterol (antilipemics)",
    drug: "Gemfibrozil",
    brand: "Lopid",
    cls: "Fibric acid derivative (fibrate)",
    others: "fenofibrate",
    moa: "Increases breakdown of VLDL (very-low-density lipoprotein) → mainly lowers triglycerides; raises HDL (high-density lipoprotein).",
    ind: ["High triglycerides"],
    se: ["GI upset — dyspepsia, abdominal pain, diarrhea"],
    ae: [
      "Gallstones (cholelithiasis) — report right upper quadrant pain",
      "Myopathy/rhabdomyolysis, especially with statins — check CK (creatine kinase)",
      "Hepatotoxicity — monitor LFTs (liver function tests)"
    ],
    ci: ["Gallbladder disease", "Severe liver or kidney impairment"],
    ix: [
      "Warfarin → increased anticoagulant effect/bleeding; monitor INR (international normalized ratio), may lower warfarin dose",
      "Statins → increased myopathy/rhabdomyolysis risk; monitor CK"
    ],
    warn: ["Monitor lipids, LFTs, CBC (complete blood count), and INR if on warfarin"],
    edu: [
      "Take gemfibrozil 30 minutes before breakfast and dinner",
      "Report muscle pain, abdominal pain (right side), or unusual bleeding"
    ],
    antidote: "",
    tip: "Fibrates: gallstones, myopathy, and they boost warfarin."
  },
  {
    id: "ch22-pcsk9-inhibitors",
    set: "ch22",
    group: "Cholesterol (antilipemics)",
    drug: "Evolocumab",
    brand: "Repatha",
    cls: "PCSK9 inhibitor (monoclonal antibody)",
    others: "alirocumab",
    moa: "Blocks PCSK9 protein → liver keeps more LDL (low-density lipoprotein) receptors → more LDL cleared from blood.",
    ind: ["Lower LDL in familial hypercholesterolemia or atherosclerotic heart disease, added to diet ± statin"],
    se: ["Injection-site reactions — redness, pain, bruising", "Nasopharyngitis, flu-like symptoms", "Back pain"],
    ae: ["Hypersensitivity reactions — rash, hives; stop and notify provider"],
    ci: ["History of serious hypersensitivity to the drug"],
    ix: [],
    warn: ["Subcutaneous only (every 2 weeks or monthly)", "Monitor lipid levels"],
    edu: [
      "Inject subcutaneously into abdomen, thigh, or upper arm; rotate sites",
      "Store in refrigerator; let warm to room temperature about 30 minutes before injecting",
      "Report rash, hives, or swelling"
    ],
    antidote: "",
    tip: "PCSK9 inhibitors are injectable (subQ) — teach injection technique and site reactions."
  },
]);
