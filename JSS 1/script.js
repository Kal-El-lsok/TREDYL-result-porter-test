function getPDF() {
    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const validCodes = ["45781512", "627611981", "23661281", "20861448", "24561182", "29671314", "15452012", "20581394", "20851345", "20561144", "20671349", "16771495", "20561190", "39571205", "45651126", "29671388", "26651165", "22116582", "21871584", "30661215", "14671385", "21461011", "30661217", "14661242", "31741141", "18542095", "19571284", "17561118", "36551088", "35681449", "41841298", "27681437", "27751241", "22741118", "13561158", "15461045", "20123425"]; // Add more as needed
  
    if (validCodes.includes(code)) {
      // Open the correct pre-made PDF file
      window.open(`pdf/${code}.pdf`, "_blank");
    } else {
      alert("RESULTS NOT FOUND: **You might have some outstanding fees. **Or comfirm your ROLL NUMBER.");
    }
  }
  