function getPDF() {
    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const validCodes = ["20303125", "20464525", "20404925", "20558125", "20702425", "20784125", "20030925", "20338925" ,"20593425", "20217925", "20315925", "20598225", "20848225", "20831125", "20147725", "20991325", "20660925", "20061525", "20641125", "20735925", "20010125", "20941125", "20771425", "20651125"]; // Add more as needed
  
    if (validCodes.includes(code)) {
      // Open the correct pre-made PDF file
      window.open(`pdf/${code}.pdf`, "_blank");
    } else {
      alert("RESULTS NOT FOUND: **You might have some outstanding fees. **Or comfirm your ROLL NUMBER.");
    }
  }
  