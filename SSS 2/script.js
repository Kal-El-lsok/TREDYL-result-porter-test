function getPDF() {
    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const validCodes = ["20088888", "36127549", "20881684", "18452059", "32751298", "18551055", "37491388", "39481251" ,"19871589", "19651189", "35861455", "18971685", "23551019", "38991814", "14961519", "17871591", "11871552" ,"25591459", "95841248", "21871512", "31771492", "18542041", "19531545", "35861492", "25661225", "32871511" ,"14551019", "20681454", "30651184", "24551031", "12751239", "26542052", "14471151", "20671323", "38561398", "36771419", "23761321", "42671391", "23651185"]; // Add more as needed
  
    if (validCodes.includes(code)) {
      // Open the correct pre-made PDF file
      window.open(`pdf/${code}.pdf`, "_blank");
    } else {
      alert("RESULTS NOT FOUND: **You might have some outstanding fees. **Or comfirm your ROLL NUMBER.");
    }
  }
  
