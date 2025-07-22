function getPDF() {
    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const validCodes = ["20193525", "20442125", "20558125", "20699825", "20621825", "20774425", "20008425", "20071525", "20339225", "20992225", "20994925", "20238925", "20303925", "20194325", "20611925", "20691525", "20720925", "20065125", "20114925",  "20365125", "20305125", "20895925", "20805925", "20865625", "20898225", "20054125", "20241125", "20456525", "20123425"]; // Add more as needed
  
    if (validCodes.includes(code)) {
      // Open the correct pre-made PDF file
      window.open(`pdf/${code}.pdf`, "_blank");
    } else {
      alert("RESULTS NOT FOUND: **You might have some outstanding fees. **Or comfirm your ROLL NUMBER.");
    }
  }
  