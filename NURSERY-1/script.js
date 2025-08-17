function getPDF() {
    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const validCodes = ["20791625", "20651125", "Non20641025", "20891725", "20771425", "20119225", "20951425", "20610425", "20716125", "20751225", "20713625", "20661225", "20561125", "20761325", "20461025", "20591425", "20671325"]; // Add more as needed
  
    if (validCodes.includes(code)) {
      // Open the correct pre-made PDF file
      window.open(`pdf/${code}.pdf`, "_blank");
    } else {
      alert("RESULTS NOT FOUND: **You might have some outstanding fees. **Or comfirm your ROLL NUMBER.");
    }
  }
  