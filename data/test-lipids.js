// Week 6 practice test: Antilipemic Drugs (Lilley Ch 27 / ATI Pharm Ch 21 per the lecture slides).
// Each option is [text, why]. ans = indexes of correct options (more than one = select all that apply).
// Written only from the week 6 lecture slides.
window.TEST = {
  title: "Week 6 Test: Antilipemic Drugs",
  sub: "Lecture Ch 27 (ATI Pharm Ch 21): cholesterol, statins, bile acid sequestrants, niacin, fibrates, ezetimibe, herbals",
  qs: [
  // ---------- Cholesterol basics ----------
  { topic: "Cholesterol basics",
    q: "Which lipoprotein is known as the \"good\" cholesterol because it carries cholesterol away from the arteries back to the liver?",
    opts: [
      ["HDL (high-density lipoprotein)", "Correct. HDL is the scavenger: it \"recycles\" cholesterol by taking it back to the liver to be metabolized."],
      ["LDL (low-density lipoprotein)", "LDL is the \"bad\" cholesterol. It builds up in artery walls (atherosclerosis)."],
      ["VLDL (very-low-density lipoprotein)", "VLDL is made by the liver and carries endogenous lipids OUT to the cells, not back to the liver."],
      ["Triglycerides", "Triglycerides are not a lipoprotein. They are the most common fat in the body and store excess energy."]
    ], ans: [0] },

  { topic: "Cholesterol basics",
    q: "Which lipoprotein is produced by the liver and transports endogenous lipids to the cells?",
    opts: [
      ["VLDL", "Correct. VLDL is produced by the liver and carries the body's own (endogenous) lipids to the cells."],
      ["HDL", "HDL moves cholesterol the other way, from the arteries back to the liver."],
      ["LDL", "LDL is the \"bad\" cholesterol that deposits in arteries. The slides list VLDL as the one the liver makes to carry endogenous lipids."],
      ["Chylomicrons", "Not covered on the slides. The answer they want is VLDL."]
    ], ans: [0] },

  { topic: "Cholesterol basics",
    q: "Compared with a client whose cholesterol is under 200 mg/dL, a client with a cholesterol level of 300 mg/dL has what risk of coronary heart disease?",
    opts: [
      ["3 to 4 times greater", "Correct. The slides state the risk is three to four times greater at 300 mg/dL than under 200 mg/dL."],
      ["About the same", "No. Higher cholesterol clearly raises coronary heart disease risk."],
      ["1.5 times greater", "Too low. The number on the slide is 3 to 4 times."],
      ["10 times greater", "Too high. The number on the slide is 3 to 4 times."]
    ], ans: [0] },

  { topic: "Cholesterol basics",
    q: "A client has high LDL. Before drug therapy is started, how long should diet and exercise be tried?",
    opts: [
      ["At least 6 months", "Correct. All reasonable nondrug measures (diet, exercise) should be tried for at least 6 months and fail before drugs are considered."],
      ["2 weeks", "Far too short. Lifestyle changes need months to show an effect."],
      ["6 weeks", "Too short. The guideline on the slides is at least 6 months."],
      ["Drugs should be started right away with no lifestyle trial", "Antilipemics are an ADJUNCT to diet therapy. Nondrug measures come first."]
    ], ans: [0] },

  { topic: "Cholesterol basics",
    q: "Select all the functions of cholesterol in the body.",
    opts: [
      ["Helps form the outer coating (membrane) of cells", "Correct. Cholesterol is part of every cell membrane."],
      ["Helps the body make vitamin D", "Correct. Cholesterol is used to make vitamin D."],
      ["Helps the body make certain hormones", "Correct. Steroid hormones are made from cholesterol."],
      ["Breaks down fats as an enzyme", "Cholesterol is not an enzyme. (Lipase breaks down lipids; niacin increases lipase activity.)"],
      ["Is made by the liver", "Correct. The liver makes cholesterol, which is why statins work in the liver."]
    ], ans: [0, 1, 2, 4] },

  // ---------- Statins ----------
  { topic: "Statins",
    q: "Which class of antilipemic drug is the most potent at lowering LDL and is first-line therapy for hypercholesterolemia?",
    opts: [
      ["HMG-CoA reductase inhibitors (statins)", "Correct. Statins are the most potent LDL reducers and first-line drug therapy."],
      ["Bile acid sequestrants", "Sequestrants are NOT first-line. They are often added to a statin."],
      ["Fibric acid derivatives", "Fibrates mainly lower triglycerides and raise HDL. They are not the strongest LDL drug."],
      ["Niacin", "Niacin lowers LDL and triglycerides and raises HDL, but statins are the most potent LDL reducers."]
    ], ans: [0] },

  { topic: "Statins",
    q: "How do statins lower cholesterol?",
    opts: [
      ["They inhibit HMG-CoA reductase, the enzyme the liver uses to make cholesterol", "Correct. Blocking this enzyme lowers the rate of cholesterol production in the liver."],
      ["They bind bile acids in the intestine", "That is how bile acid sequestrants (cholestyramine, colestipol, colesevelam) work."],
      ["They block cholesterol absorption from the small intestine", "That is ezetimibe (Zetia)."],
      ["They increase lipase activity to break down lipids", "That is how niacin is thought to work."]
    ], ans: [0] },

  { topic: "Statins",
    q: "Which drug is a statin?",
    opts: [
      ["Atorvastatin (Lipitor)", "Correct. The \"-statin\" ending marks it as an HMG-CoA reductase inhibitor."],
      ["Colesevelam (Welchol)", "Bile acid sequestrant (\"cole\" prefix)."],
      ["Gemfibrozil (Lopid)", "Fibric acid derivative (\"fib\" in the name)."],
      ["Ezetimibe (Zetia)", "Cholesterol absorption inhibitor."]
    ], ans: [0] },

  { topic: "Statins",
    q: "A client with a new prescription for a statin asks why it must be taken with the evening meal or at bedtime. The nurse's best answer is that this timing:",
    opts: [
      ["Matches the body's natural daily (diurnal) rhythm of cholesterol production", "Correct. Most cholesterol is made at night when dietary intake is lowest, so statins work best in the evening."],
      ["Helps the medication absorb better", "Absorption is not the reason. The reason is when the liver makes cholesterol."],
      ["Causes fewer adverse effects than a morning dose", "Timing does not reduce adverse effects. It is about the cholesterol production rhythm."],
      ["Reduces the risk of myopathy", "Timing does not prevent myopathy. The client still has to report muscle pain."]
    ], ans: [0] },

  { topic: "Statins",
    q: "A client taking simvastatin reports muscle pain and dark, cola-colored urine. What is the nurse's priority concern?",
    opts: [
      ["Rhabdomyolysis", "Correct. Muscle breakdown releases myoglobin into the urine (dark urine), which can clog the kidneys and cause acute renal failure."],
      ["Mild GI upset", "GI upset is a common, mild side effect. Muscle pain plus dark urine is a serious adverse effect."],
      ["Dehydration", "Dark urine here comes from myoglobin, not concentration. With muscle pain on a statin, think rhabdo."],
      ["Urinary tract infection", "Muscle pain does not fit a UTI. The statin + muscle pain + dark urine pattern is rhabdomyolysis."]
    ], ans: [0] },

  { topic: "Statins",
    q: "Which lab value should the nurse monitor when a client on a statin reports muscle pain?",
    opts: [
      ["CK (creatine kinase)", "Correct. CK rises when muscle breaks down. Monitor it for myopathy and rhabdomyolysis."],
      ["Potassium", "Not the lab the slides tie to statin muscle pain. CK is."],
      ["Hemoglobin A1C", "A1C tracks blood sugar, not muscle damage."],
      ["TSH", "Thyroid labs are not the statin muscle-pain lab. CK is."]
    ], ans: [0] },

  { topic: "Statins",
    q: "Select all the adverse effects of statins the nurse should teach the client to watch for.",
    opts: [
      ["Muscle pain or soreness (myopathy)", "Correct. Myopathy can progress to rhabdomyolysis. Report it right away."],
      ["Dark urine", "Correct. Dark urine (myoglobinuria) is a sign of rhabdomyolysis."],
      ["Signs of liver damage (raised AST/ALT)", "Correct. Statins can raise liver enzymes and cause hepatotoxicity."],
      ["Flushing of the face and neck", "Flushing is the classic side effect of NIACIN, not statins."],
      ["Severe constipation", "Constipation is the classic side effect of BILE ACID SEQUESTRANTS, not statins."]
    ], ans: [0, 1, 2] },

  { topic: "Statins",
    q: "What happens to rhabdomyolysis from a statin when it is recognized early?",
    opts: [
      ["It is usually reversible when the statin is stopped", "Correct. Caught early, rhabdo usually reverses after the statin is discontinued."],
      ["It is always permanent", "No. Early recognition plus stopping the statin usually reverses it."],
      ["It goes away if the dose is moved to the morning", "Timing has nothing to do with it. The statin must be stopped."],
      ["It is treated by adding niacin", "No. Adding other lipid drugs (fibrates especially) can raise the risk of muscle damage."]
    ], ans: [0] },

  { topic: "Statins",
    q: "Which should a client taking atorvastatin avoid?",
    opts: [
      ["Grapefruit juice", "Correct. Grapefruit juice interacts with statins and raises drug levels (more risk of toxicity)."],
      ["Orange juice", "Not a listed interaction. Grapefruit juice is the one to avoid."],
      ["Dairy products", "Not a listed statin interaction."],
      ["Leafy green vegetables", "Leafy greens (vitamin K) matter for warfarin, not statins."]
    ], ans: [0] },

  { topic: "Statins",
    q: "A client takes warfarin and is starting a statin. What should the nurse expect?",
    opts: [
      ["The anticoagulant effect may increase, so watch for bleeding", "Correct. Statins increase the effects of oral anticoagulants."],
      ["The anticoagulant effect will decrease", "The opposite. Statins INCREASE the effect of oral anticoagulants."],
      ["There is no interaction", "Oral anticoagulants are the first interaction listed for statins."],
      ["The statin will stop working", "Warfarin does not cancel the statin. The concern is more bleeding."]
    ], ans: [0] },

  // ---------- Bile acid sequestrants ----------
  { topic: "Bile acid sequestrants",
    q: "Which drug is a bile acid sequestrant?",
    opts: [
      ["Cholestyramine (Questran)", "Correct. Sequestrants have the \"cole\" prefix: cholestyramine, colestipol, colesevelam."],
      ["Rosuvastatin (Crestor)", "Statin (\"-statin\")."],
      ["Fenofibrate (Tricor)", "Fibric acid derivative (\"fib\")."],
      ["Ezetimibe (Zetia)", "Cholesterol absorption inhibitor."]
    ], ans: [0] },

  { topic: "Bile acid sequestrants",
    q: "A client has been ordered the powdered form of colestipol. Which statement is true?",
    opts: [
      ["Give colestipol 1 hour before or 4 to 6 hours after any other oral medication", "Correct. Sequestrants bind other drugs and block their absorption, so space them out."],
      ["Have the client swallow the powder one teaspoonful at a time", "Never take the powder dry. It must be mixed with liquid."],
      ["Dissolve the powder and give it immediately", "The powder should be dissolved for 1 full minute before giving it."],
      ["Give colestipol with meals", "The slide answer: give it 1 hour before or 4 to 6 hours after other oral meds and meals because of drug-food interactions."]
    ], ans: [0] },

  { topic: "Bile acid sequestrants",
    q: "What is the most common side effect of bile acid sequestrants?",
    opts: [
      ["Constipation", "Correct. Also heartburn, nausea, belching and bloating. These tend to fade over time."],
      ["Flushing", "That is niacin."],
      ["Muscle pain", "That is statins (myopathy)."],
      ["Diarrhea", "Sequestrants cause the opposite: constipation."]
    ], ans: [0] },

  { topic: "Bile acid sequestrants",
    q: "A client taking cholestyramine reports constipation and bloating. What should the nurse suggest?",
    opts: [
      ["Increase fluids and dietary fiber, or take a fiber supplement such as psyllium (Metamucil)", "Correct. More fiber and fluid relieves sequestrant constipation and bloating."],
      ["Take the powder dry so less fluid is in the gut", "Never take the powder dry. That makes obstruction more likely."],
      ["Cut back on fluids", "Less fluid makes constipation worse."],
      ["Stop the drug without telling the provider", "These effects usually fade with time and can be managed. The client should not stop meds on their own."]
    ], ans: [0] },

  { topic: "Bile acid sequestrants",
    q: "A client on long-term, high-dose cholestyramine may need supplements of which vitamins?",
    opts: [
      ["Fat-soluble vitamins A, D, E and K", "Correct. Sequestrants bind fat and lower absorption of the fat-soluble vitamins."],
      ["Vitamin C", "Vitamin C is water-soluble and is not affected the same way."],
      ["B vitamins", "B vitamins are water-soluble."],
      ["No vitamins are affected", "High doses decrease absorption of vitamins A, D, E and K."]
    ], ans: [0] },

  { topic: "Bile acid sequestrants",
    q: "Select all the contraindications for cholestyramine (Questran).",
    opts: [
      ["Bowel obstruction", "Correct. The drug is not absorbed and can cause or worsen an obstruction."],
      ["Bile duct obstruction", "Correct. Listed contraindication."],
      ["Allergy to the drug", "Correct. Listed contraindication."],
      ["High LDL", "High LDL is the reason to give it, not a contraindication."],
      ["Itching from partial biliary obstruction", "Cholestyramine is actually USED to relieve this itching (pruritus)."]
    ], ans: [0, 1, 2] },

  { topic: "Bile acid sequestrants",
    q: "Which is a disadvantage of bile acid sequestrants?",
    opts: [
      ["They may cause a mild increase in triglycerides", "Correct. Listed on the slides as a disadvantage."],
      ["They cause rhabdomyolysis", "That is a statin risk (higher with fibrates added)."],
      ["They cause flushing", "That is niacin."],
      ["They are absorbed into the blood and damage the liver", "Sequestrants are NOT absorbed. That is why overdose can cause obstruction."]
    ], ans: [0] },

  { topic: "Bile acid sequestrants",
    q: "Why can an overdose of a bile acid sequestrant cause a bowel obstruction?",
    opts: [
      ["The drug is not absorbed and stays in the gut", "Correct. Treatment of overdose is restoring gut motility."],
      ["It causes severe diarrhea", "It causes constipation, not diarrhea."],
      ["It is toxic to the liver", "Not the mechanism. It stays in the GI tract because it isn't absorbed."],
      ["It raises triglycerides", "True that it can mildly raise TGs, but that does not cause obstruction."]
    ], ans: [0] },

  // ---------- Niacin ----------
  { topic: "Niacin",
    q: "A client is taking niacin for high cholesterol. What is the best way to avoid flushing and itching?",
    opts: [
      ["Start with a low dose and increase it gradually", "Correct. Starting low and going slow minimizes flushing. Taking it with meals and aspirin 30 min before also help."],
      ["Take it at bedtime", "Bedtime dosing is the statin rule, not the niacin fix."],
      ["Take it with a small dose of a steroid", "Not a steroid. A small dose of ASPIRIN or an NSAID 30 minutes before helps."],
      ["Take it with a full glass of water on an empty stomach", "Niacin should be taken WITH meals to reduce side effects."]
    ], ans: [0] },

  { topic: "Niacin",
    q: "What causes the flushing that clients get with niacin?",
    opts: [
      ["Histamine release", "Correct. That is why aspirin or an NSAID beforehand can reduce it."],
      ["Liver damage", "Liver disease is a contraindication, but flushing comes from histamine release."],
      ["Low blood sugar", "Not the cause."],
      ["An allergic reaction to the drug", "Flushing is an expected side effect from histamine release, not a true allergy."]
    ], ans: [0] },

  { topic: "Niacin",
    q: "What can the client take 30 minutes before niacin to reduce flushing?",
    opts: [
      ["A small dose of aspirin or an NSAID", "Correct. Premedicating with aspirin or an NSAID 30 minutes before reduces cutaneous flushing."],
      ["An antacid", "Not listed. Aspirin or an NSAID is the answer."],
      ["A statin", "Statins do not prevent niacin flushing."],
      ["Diphenhydramine", "Not what the slides teach. Aspirin or an NSAID is the answer."]
    ], ans: [0] },

  { topic: "Niacin",
    q: "Select all the conditions that are contraindications to niacin.",
    opts: [
      ["Liver disease", "Correct."],
      ["Peptic ulcer disease", "Correct."],
      ["Gout", "Correct."],
      ["Hypertension", "Correct. (Listed on the \"study this slide\" slide.)"],
      ["Active bleeding", "Correct."],
      ["Low HDL", "Low HDL is a reason to USE niacin, since niacin raises HDL."]
    ], ans: [0, 1, 2, 3, 4] },

  { topic: "Niacin",
    q: "Which effect on the lipid panel would the nurse expect from niacin?",
    opts: [
      ["Lower triglycerides, total cholesterol and LDL, and higher HDL", "Correct. Niacin improves every part of the panel."],
      ["Lower HDL", "Niacin RAISES HDL."],
      ["Only lower triglycerides, with no effect on LDL", "Niacin lowers LDL and total cholesterol too."],
      ["Higher triglycerides", "Niacin LOWERS triglycerides. (A mild TG increase is a sequestrant disadvantage.)"]
    ], ans: [0] },

  { topic: "Niacin",
    q: "Niacin used to lower lipids is which vitamin, and how is the dose different?",
    opts: [
      ["Vitamin B3, given at much higher doses than when used as a vitamin", "Correct. Lipid-lowering needs much higher doses."],
      ["Vitamin B12, at the same dose", "Niacin is B3 (nicotinic acid), and the lipid dose is much higher."],
      ["Vitamin D, at lower doses", "Niacin is B3."],
      ["Vitamin B3, at the same dose as a daily vitamin", "Right vitamin, wrong dose. Lipid-lowering doses are much higher."]
    ], ans: [0] },

  // ---------- Fibrates ----------
  { topic: "Fibrates",
    q: "What is the main lipid effect of fibric acid derivatives such as gemfibrozil (Lopid)?",
    opts: [
      ["Lower triglycerides and raise HDL by as much as 25%", "Correct. Fibrates are mainly triglyceride drugs."],
      ["They are the most potent LDL reducers", "That is statins."],
      ["They block cholesterol absorption in the small intestine", "That is ezetimibe."],
      ["They bind bile acids", "That is the bile acid sequestrants."]
    ], ans: [0] },

  { topic: "Fibrates",
    q: "A client takes atorvastatin and is prescribed gemfibrozil. What is the nurse's main concern?",
    opts: [
      ["Higher risk of myositis, muscle pain and rhabdomyolysis", "Correct. Fibrates + statins increase the risk of muscle damage."],
      ["Severe constipation", "That is a sequestrant side effect."],
      ["Flushing", "That is niacin."],
      ["The statin will stop working", "Not the concern. The risk is muscle toxicity."]
    ], ans: [0] },

  { topic: "Fibrates",
    q: "Select all the contraindications for fibric acid derivatives.",
    opts: [
      ["Gallbladder disease", "Correct. Fibrates raise the risk of gallstones."],
      ["Severe liver disease", "Correct."],
      ["Severe kidney disease", "Correct."],
      ["Cirrhosis", "Correct."],
      ["High triglycerides", "High triglycerides are the reason to GIVE a fibrate."]
    ], ans: [0, 1, 2, 3] },

  { topic: "Fibrates",
    q: "A client on fenofibrate (Tricor) is also on warfarin. What lab should the nurse watch closely?",
    opts: [
      ["Prothrombin time (PT/INR)", "Correct. Fibrates can prolong PT and interact with oral anticoagulants, so watch for bleeding."],
      ["Serum potassium", "Not the fibrate-warfarin concern."],
      ["Blood glucose", "Not the fibrate-warfarin concern."],
      ["Serum sodium", "Not the fibrate-warfarin concern."]
    ], ans: [0] },

  { topic: "Fibrates",
    q: "Which is a side effect of fibric acid derivatives?",
    opts: [
      ["Increased risk of gallstones", "Correct. Also abdominal discomfort, diarrhea, nausea, blurred vision, headache, prolonged PT and raised liver enzymes."],
      ["Flushing", "That is niacin."],
      ["Severe constipation", "That is a sequestrant. Fibrates more often cause diarrhea."],
      ["Low triglycerides", "Lowering triglycerides is the therapeutic effect, not a side effect."]
    ], ans: [0] },

  // ---------- Ezetimibe ----------
  { topic: "Ezetimibe",
    q: "How does ezetimibe (Zetia) work?",
    opts: [
      ["It blocks absorption of cholesterol from the small intestine", "Correct. This lowers total cholesterol, LDL and triglycerides and raises HDL."],
      ["It blocks HMG-CoA reductase in the liver", "That is statins."],
      ["It binds bile acids", "That is bile acid sequestrants."],
      ["It increases lipase activity", "That is niacin."]
    ], ans: [0] },

  { topic: "Ezetimibe",
    q: "Vytorin is a combination drug. What is in it?",
    opts: [
      ["Ezetimibe plus a statin (simvastatin)", "Correct. Ezetimibe is often combined with a statin, and Vytorin is that combination."],
      ["Niacin plus a statin", "Not Vytorin."],
      ["Two bile acid sequestrants", "Not Vytorin."],
      ["Fenofibrate plus gemfibrozil", "Not Vytorin, and two fibrates are not combined."]
    ], ans: [0] },

  // ---------- Herbals ----------
  { topic: "Herbal products",
    q: "A client wants to take garlic tablets to lower his cholesterol. Which condition is a contraindication?",
    opts: [
      ["Scheduled surgery", "Correct. Garlic has antiplatelet activity, so it is contraindicated within 2 weeks of surgery."],
      ["Hypertension", "Garlic is used for blood pressure (a very small drop). It is not a contraindication."],
      ["Bowel obstruction", "That is a contraindication for bile acid sequestrants, not garlic."],
      ["Sinus infection", "Not a contraindication for garlic."]
    ], ans: [0] },

  { topic: "Herbal products",
    q: "Select all the drugs that can interact with garlic.",
    opts: [
      ["Warfarin", "Correct. Garlic's antiplatelet effect adds to bleeding risk."],
      ["Diazepam", "Correct. Listed as a possible interaction."],
      ["NSAIDs", "Correct. Garlic + NSAIDs may increase bleeding."],
      ["Acetaminophen", "Not listed as a garlic interaction."]
    ], ans: [0, 1, 2] },

  { topic: "Herbal products",
    q: "Fish oil (omega-3 fatty acids) is mainly used to lower which lipid, and what drug class does it interact with?",
    opts: [
      ["Triglycerides; anticoagulants", "Correct. Omega-3s lower triglycerides and can interact with anticoagulants. Side effects: rash, belching, allergic reactions."],
      ["HDL; antibiotics", "Omega-3s lower triglycerides, not HDL. The interaction is with anticoagulants."],
      ["LDL only; statins", "Omega-3s mainly target triglycerides, and the listed interaction is anticoagulants."],
      ["Triglycerides; antacids", "Right lipid, wrong interaction. It's anticoagulants."]
    ], ans: [0] },

  { topic: "Herbal products",
    q: "A client with diabetes asks about taking flax for cholesterol. What should the nurse tell them?",
    opts: [
      ["Flax may interact with antidiabetic drugs and anticoagulants, so check with the provider", "Correct. Those are the two interactions listed for flax. It may also cause diarrhea and allergic reactions."],
      ["Flax has no interactions", "Flax may interact with antidiabetic drugs and anticoagulants."],
      ["Flax causes severe constipation", "The listed GI effect of flax is diarrhea."],
      ["Flax should only be taken right before surgery", "Not true for any herbal here. Garlic in particular must be stopped before surgery."]
    ], ans: [0] },

  // ---------- Nursing implications ----------
  { topic: "Nursing implications",
    q: "Before a client starts an antilipemic drug, which baseline lab should the nurse make sure is done?",
    opts: [
      ["Liver function studies", "Correct. Liver dysfunction and active liver disease are contraindications, and several of these drugs raise liver enzymes."],
      ["Urine culture", "Not a baseline lab for antilipemics."],
      ["Thyroid panel", "Not the baseline lab on the slides."],
      ["Arterial blood gas", "Not related."]
    ], ans: [0] },

  { topic: "Nursing implications",
    q: "A client started a statin 1 week ago and says, \"My cholesterol is still high. This pill doesn't work.\" What is the nurse's best response?",
    opts: [
      ["\"All cholesterol drugs take several weeks to show their full effect.\"", "Correct. Teach that antilipemics take several weeks to work."],
      ["\"You should double the dose.\"", "Never tell a client to change the dose on their own."],
      ["\"Stop taking it and try fish oil instead.\"", "Not appropriate. One week is too early to judge."],
      ["\"Take it in the morning so it works faster.\"", "Statins work best in the evening, and timing won't speed up results."]
    ], ans: [0] },

  { topic: "Nursing implications",
    q: "Select all the findings a client on antilipemic therapy should report to the provider.",
    opts: [
      ["Yellow discoloration of the skin (jaundice)", "Correct. Can mean liver damage."],
      ["Unusual or abnormal bleeding", "Correct."],
      ["Persistent GI upset", "Correct."],
      ["Ongoing constipation", "Correct."],
      ["Lower cholesterol on the next lab draw", "That is the therapeutic effect you WANT, not something to report as a problem."]
    ], ans: [0, 1, 2, 3] },

  { topic: "Nursing implications",
    q: "How should the nurse teach a client to take a powdered antilipemic such as cholestyramine?",
    opts: [
      ["Mix it with liquid; never take it dry", "Correct. Powder forms must be taken with a liquid and mixed thoroughly but not stirred (dissolved for 1 full minute)."],
      ["Sprinkle it dry on the tongue", "Never take it dry."],
      ["Swallow it with the other morning pills", "Other meds must be taken 1 hour before or 4 to 6 hours after a sequestrant."],
      ["Take it right after the statin dose", "Space it from other oral meds: 1 hour before or 4 to 6 hours after."]
    ], ans: [0] },

  { topic: "Nursing implications",
    q: "Which finding shows the nurse that antilipemic therapy is working?",
    opts: [
      ["Lower cholesterol and triglyceride levels", "Correct. That is the therapeutic effect to monitor."],
      ["Higher liver enzymes", "Higher liver enzymes are an ADVERSE effect."],
      ["Lower HDL", "Lower HDL is bad. Good therapy keeps or raises HDL."],
      ["Higher CK", "Higher CK points to muscle damage, an adverse effect."]
    ], ans: [0] },

  // ---------- Mix / compare ----------
  { topic: "Compare the classes",
    q: "Match the side effect to the drug: which class is known for FLUSHING?",
    opts: [
      ["Niacin", "Correct. Flushing from histamine release, plus itching and GI distress."],
      ["Statins", "Statins: GI upset, rash, headache, myopathy, raised liver enzymes."],
      ["Bile acid sequestrants", "Sequestrants: constipation, heartburn, bloating."],
      ["Fibrates", "Fibrates: GI upset, gallstones, blurred vision, prolonged PT."]
    ], ans: [0] },

  { topic: "Compare the classes",
    q: "Which drug would the nurse expect for a client with itching (pruritus) from a partial biliary obstruction?",
    opts: [
      ["Cholestyramine (Questran)", "Correct. Cholestyramine relieves pruritus from partial biliary obstruction."],
      ["Niacin", "Niacin CAUSES itching."],
      ["Gemfibrozil", "Not used for this. Fibrates are contraindicated in gallbladder disease."],
      ["Lovastatin", "Not used for biliary itching."]
    ], ans: [0] }
  ]
};
