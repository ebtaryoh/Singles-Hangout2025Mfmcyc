// const canvas = document.getElementById("posterCanvas");
// const ctx = canvas.getContext("2d");
// const uploadImage = document.getElementById("uploadImage");
// const nameInput = document.getElementById("nameInput");
// const downloadBtn = document.getElementById("downloadBtn");

// // Load base background poster (your uploaded PNG)
// const baseImage = new Image();
// baseImage.src = "Blue and Green Webinar Instagram Post.png"; // put in same folder

// baseImage.onload = function() {
//   ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
// };

// // ===== Editable Settings =====
// let circleX = 220;      // center X of circle
// let circleY = 520;      // center Y of circle
// let circleRadius = 190; // radius (540px diameter)

// let nameX = 95;        // text X position
// let nameY = 230;        // text Y position
// let nameFont = "bold 40px Arial";
// let nameColor = "green";

// // Function to redraw canvas with uploaded image and name
// function updatePoster() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

//   if (uploadedImg) {
//     ctx.save();

//     // Create circular mask
//     ctx.beginPath();
//     ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
//     ctx.closePath();
//     ctx.clip();

//     // Calculate scaling to fit image inside circle without stretching
//     let scale = Math.max(
//       (circleRadius * 2) / uploadedImg.width,
//       (circleRadius * 2) / uploadedImg.height
//     );

//     let newWidth = uploadedImg.width * scale;
//     let newHeight = uploadedImg.height * scale;

//     // Center image inside circle
//     let imgX = circleX - newWidth / 2;
//     let imgY = circleY - newHeight / 2;

//     ctx.drawImage(uploadedImg, imgX, imgY, newWidth, newHeight);
//     ctx.restore();
//   }

//   // Draw name
//   ctx.fillStyle = nameColor;
//   ctx.font = nameFont;
//   ctx.fillText(nameInput.value, nameX, nameY);
// }

// let uploadedImg = null;

// // Handle image upload
// uploadImage.addEventListener("change", (e) => {
//   const reader = new FileReader();
//   reader.onload = function(event) {
//     uploadedImg = new Image();
//     uploadedImg.src = event.target.result;
//     uploadedImg.onload = updatePoster;
//   };
//   reader.readAsDataURL(e.target.files[0]);
// });

// // Handle name input
// nameInput.addEventListener("input", updatePoster);

// // Download poster
// downloadBtn.addEventListener("click", () => {
//   const link = document.createElement("a");
//   link.download = "my_poster.png";
//   link.href = canvas.toDataURL("image/png");
//   link.click();
// });

const canvas = document.getElementById("posterCanvas");
const ctx = canvas.getContext("2d");
const uploadImage = document.getElementById("uploadImage");
const nameInput = document.getElementById("nameInput");
const downloadBtn = document.getElementById("downloadBtn");

// Load base background poster (your uploaded PNG)
const baseImage = new Image();
baseImage.src = "singleshangout02.png";

baseImage.onload = function () {
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
};

// ===== Editable Settings =====
let circleX = 364; // center X of circle
let circleY = 484; // center Y of circle
let circleRadius = 170; // radius (380px diameter)

// Default text position
let nameX = 194;
let nameY = 200;
let nameColor = "orange";

// Function to get responsive font size
function getResponsiveFont() {
  if (window.innerWidth < 500) {
    return "bold 32px Arial"; // smaller font for phones
  } else if (window.innerWidth < 900) {
    return "bold 40px Arial"; // medium for tablets
  } else {
    return "bold 44px Arial"; // full size for desktops
  }
}

// Function to redraw canvas with uploaded image and name
function updatePoster() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

  if (uploadedImg) {
    ctx.save();

    // Create circular mask
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    // Calculate scaling to fit image inside circle without stretching
    let scale = Math.max(
      (circleRadius * 2) / uploadedImg.width,
      (circleRadius * 2) / uploadedImg.height
    );

    let newWidth = uploadedImg.width * scale;
    let newHeight = uploadedImg.height * scale;

    // Center image inside circle
    let imgX = circleX - newWidth / 2;
    let imgY = circleY - newHeight / 2;

    ctx.drawImage(uploadedImg, imgX, imgY, newWidth, newHeight);
    ctx.restore();
  }

  ctx.fillStyle = nameColor;
  ctx.font = getResponsiveFont();
  ctx.fillText(nameInput.value, nameX, nameY);
}

let uploadedImg = null;

// Handle image upload
uploadImage.addEventListener("change", (e) => {
  const reader = new FileReader();
  reader.onload = function (event) {
    uploadedImg = new Image();
    uploadedImg.src = event.target.result;
    uploadedImg.onload = updatePoster;
  };
  reader.readAsDataURL(e.target.files[0]);
});

// Handle name input
nameInput.addEventListener("input", updatePoster);

// Handle window resize (auto update font size)
window.addEventListener("resize", updatePoster);

// Download poster
downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "my_poster.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
