function getPDF() {
    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const validCodes = ["20119425", "20123425", "20434025", "20551425", "20004025", "20085125", "20085525", "20342525" ,"20902125", "20378225", "20039925", "20914525", "20501525", "20501825", "20934925", "20852125", "20542225" ,"20119125", "20171025", "20159825", "20195125", "20409125", "20675425", "20702525", "20014125", "20658125" ,"20511225", "20943025", "20901525", "20429025", "20644425", "20541125", "20119120", "20414925"]; // Add more as needed
  
    if (validCodes.includes(code)) {
      // Open the correct pre-made PDF file
      window.open(`pdf/${code}.pdf`, "_blank");
    } else {
      alert("RESULTS NOT FOUND: **You might have some outstanding fees. **Or comfirm your ROLL NUMBER.");
    }
  }
  