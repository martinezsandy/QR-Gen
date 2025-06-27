document.getElementById('gen').addEventListener('click',generateQRCode);
function generateQRCode() {
      const url = document.getElementById("url").value.trim();
      const qrCodeContainer = document.getElementById("imgdiv");
      qrCodeContainer.innerHTML = "";
      
      if (url === "") {
        alert("Please enter a URL");
        return;
      }

    const qr = new QRCode(qrCodeContainer, {
        text: url,
        width: 200,
        height: 200,
        colorDark : "#819A91",
        colorLight : "#D1D8BE",
        correctLevel : QRCode.CorrectLevel.H
        });
    }

document.getElementById('gen').addEventListener('click',cc);
function cc(){
  document.getElementById('title').style.backgroundColor = "#D1D8BE";
}