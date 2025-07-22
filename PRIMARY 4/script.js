function getPDF() {
    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const validCodes = ["20165925", "20311125", "20018925", "20559225", "20052325", "20543425", "20115925", "20105425" ,"20684125", "20404925", "20454525", "20494225", "20035225", "20042025", "20622525", "20648525", "20418125" ,"20498525", "20415325", "20119425", "20051125", "20142225", "20939925", "20441125", "20528925", "20558225" ,"20418825", "20320825", "20415525", "20455925", "20735925", "20608225", "20608925"]; // Add more as needed
  
    if (validCodes.includes(code)) {
      // Open the correct pre-made PDF file
      window.open(`pdf/${code}.pdf`, "_blank");
    } else {
      alert("RESULTS NOT FOUND: **You might have some outstanding fees. **Or comfirm your ROLL NUMBER.");
    }
  }
  