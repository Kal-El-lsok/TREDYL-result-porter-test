function getPDF() {
    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const validCodes = ["12561198", "15881612", "20781512", "26771410", "23661222", "27561198", "12710495", "10771435", "22651189", "19452043", "20891748", "24861432", "23551095", "26591499", "22571295", "24671305", "21461014", "27581389", "20761320", "24671319", "27651184", "44661212", "23761312", "16781551", "12116589", "19651155", "23681485", "28461055", "28581309", "21791628", "26771424", "15681495", "24571251", "28107391", "33651129"]; // Add more as needed
  
    if (validCodes.includes(code)) {
      // Open the correct pre-made PDF file
      window.open(`pdf/${code}.pdf`, "_blank");
    } else {
      alert("RESULTS NOT FOUND: **You might have some outstanding fees. **Or comfirm your ROLL NUMBER.");
    }
  }
  