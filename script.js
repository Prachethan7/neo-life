document.getElementById("analyzeBtn").addEventListener("click", () => {
  const symptom = document.getElementById("symptom").value.trim();
  const output = document.getElementById("output");
  const reasoning = document.getElementById("reasoning");
  const interventions = document.getElementById("interventions");

  if (!symptom) {
    alert("Please enter a symptom description!");
    return;
  }

  // Simulated reasoning (you can expand this)
  const reasoningSteps = [
    "Gene ATP2A1 mutation → abnormal calcium handling",
    "↓",
    "Reduced muscle relaxation speed → fatigue accumulation",
    "↓",
    "Possible disorder: Brody myopathy",
  ];

  const interventionList = [
    { name: "Dantrolene sodium", confidence: 0.89 },
    { name: "Calcium-channel modulation therapy", confidence: 0.73 },
  ];

  reasoning.textContent = reasoningSteps.join("\n");
  interventions.innerHTML = interventionList
    .map(
      (i) =>
        `<li>${i.name} <span class="conf">${(i.confidence * 100).toFixed(0)}%</span></li>`
    )
    .join("");

  output.classList.remove("hidden");
});
