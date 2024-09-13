const qrtext = document.getElementById('qr-text');
const size = document.getElementById("sizes");
const generatebtn = document.getElementById("generatebtn");
const downloadbtn = document.getElementById("Downloadbtn");

const qrcontainer = document.querySelector(".qr-body");

generatebtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (qrtext.value.length > 0) {
        generateqrcode();
    }else{
        alert("Enter the text or Url to generate your Qr code");
    }
    
});

size.addEventListener("change", (e) => {
    size = e.target.value;
   isEmptyInput()  // Regenerate the QR code when the size changes
});

function isEmptyInput(){
    // if (qrtext.value.length > 0) {
    //     generateqrcode();
    // }else{
    //     alert("Enter the text or Url to generate your Qr code");
    // }

    qrtext.value.length > 0 ? generateqrcode(): alert("Enter the text or Url to generate your Qr code");   //single line use expression
}

function generateqrcode() {
    qrcontainer.innerHTML = "";  // Clear previous QR code
    new QRCode(qrcontainer, {
        text: qrtext.value,  // The text from the input field
        height: size.value,  // Get selected size
        width: size.value,   // Get selected size
        colorDark: "#000",   // Set color for QR code
        colorLight: "#fff"   // Background color
    });
}


// downloadbtn.addEventListener("click", () =>{
//     let img = document.querySelector('.qr-body img');
//     if (img !== null) {
//         let imgAtrr = img.getAttribute("src");
//         downloadbtn.setAttribute("href", imgAtrr);
//     }
//     else{
//         downloadbtn.setAttribute("herf",`${document.querySelector("canvas").toDataUrl()}`)
//     }
// })

downloadbtn.addEventListener("click", (e) => {
    let img = document.querySelector('.qr-body img');  // Select the image inside .qr-body
    let qrtext = document.getElementById('qr-text').value;  // Get the QR text input value

    // Check if the input text is empty or if there's no generated QR code
    if (qrtext.trim() === "" || (img === null && document.querySelector("canvas") === null)) {
        e.preventDefault();  // Prevent the download
        alert("QR Code is not generated. Please enter some text to generate the QR code.");  // Show an alert
    } else if (img !== null) {
        // If image exists, allow download of the image
        let imgAtrr = img.getAttribute("src");
        downloadbtn.setAttribute("href", imgAtrr);
    } else {
        // If no image, allow download from canvas
        downloadbtn.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
    }
});

