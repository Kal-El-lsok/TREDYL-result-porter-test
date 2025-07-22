function getPDF() {
    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const validCodes = ["20761325", "20581325", "20851325", "20871525", "20671325", "20651125", "20813525", "20841225" ,"20583125"]; // Add more as needed
  
    if (validCodes.includes(code)) {
      // Open the correct pre-made PDF file
      window.open(`pdf/${code}.pdf`, "_blank");
    } else {
      alert("RESULTS NOT FOUND: **You might have some outstanding fees. **Or comfirm your ROLL NUMBER.");
    }
  }
  