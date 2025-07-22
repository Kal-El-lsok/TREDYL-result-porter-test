function getPDF() {
    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const validCodes = ["20117425", "20851325", "20751225", "20761325", "20781525", "20561125", "20671325", "20871525", "20571225", "20104625", "20613725", "20641025", "20651125", "20571225", "20137625", "20551025", "20531525", "20861425", "20542025"]; // Add more as needed
  
    if (validCodes.includes(code)) {
      // Open the correct pre-made PDF file
      window.open(`pdf/${code}.pdf`, "_blank");
    } else {
      alert("RESULTS NOT FOUND: **You might have some outstanding fees. **Or comfirm your ROLL NUMBER.");
    }
  }
  