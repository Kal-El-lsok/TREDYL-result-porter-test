function getPDF() {
    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const validCodes = ["20115920", "20464120", "20021025", "20001825", "20559225", "20198425", "20592025", "20423125" ,"20591525","20400925", "20312525", "20979125", "20495125", "20940425", "20941225", "20139125", "20404125" ,"20963525","20375925", "20404825", "20518225", "20609225", "20901425", "20943125", "20524925", "20525925" ,"20865425","20905425", "20668925", "20501825", "20705825", "20191525"]; // Add more as needed
  
    if (validCodes.includes(code)) {
      // Open the correct pre-made PDF file
      window.open(`pdf/${code}.pdf`, "_blank");
    } else {
      alert("RESULTS NOT FOUND: **You might have some outstanding fees. **Or comfirm your ROLL NUMBER.");
    }
  }
  