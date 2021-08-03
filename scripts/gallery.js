let lastClickedImage;
let allImages = document.querySelectorAll(".gallery-image");
let imagePaths = [];
let imageCount = allImages.length;
for (let i=0; i<imageCount; i++) {
  let imgSrc = allImages[i].getAttribute("src");
  imagePaths.push(imgSrc);
}

let showImage = function(imageName) {
  lastClickedImage = imageName;
  //let div = document.querySelector('#big-gallery-image');
  let div = document.createElement('div');
  div.setAttribute('id' , 'big-gallery-image');
  //div.style.backgroundImage = "url("+imageName+")";
  let img = document.createElement("img");
  img.setAttribute("src" , imageName);
  img.setAttribute("alt" , "image");
  img.setAttribute("class" , "full-gallery-image");
  img.style.maxWidth = "80%";
  img.style.maxHeight = "80%";

  let closeImg = document.createElement("img");
  closeImg.setAttribute("src", "icons/close-icon.png");
  closeImg.setAttribute("alt", "close");
  closeImg.setAttribute("class", "close-icon");
  closeImg.setAttribute("onclick" , "closeImage()");

  let currentImageIndex = imagePaths.indexOf(lastClickedImage);

  if (currentImageIndex < imageCount-1) {
    let nextImg = document.createElement("img");
    nextImg.setAttribute("src", "icons/next-icon.png");
    nextImg.setAttribute("alt", "next");
    nextImg.setAttribute("class", "next-icon");
    nextImg.setAttribute("onclick", "showNextImage()");
    div.appendChild(nextImg);
  }

  if (currentImageIndex > 0) {
    let prevImg = document.createElement("img");
    prevImg.setAttribute("src", "icons/prev-icon.png");
    prevImg.setAttribute("alt", "previous");
    prevImg.setAttribute("class", "prev-icon");
    prevImg.setAttribute("onclick", "showPrevImage()");
    div.appendChild(prevImg);
  }

  div.appendChild(img);
  div.appendChild(closeImg);
  document.body.appendChild(div);
}

let closeImage = function() {
  let divToClose = document.getElementById("big-gallery-image");
  divToClose.remove();
}

let showNextImage = function() {
  currentImage = lastClickedImage;
  if (currentImage) {
    currentImageIndex = imagePaths.indexOf(currentImage);
    if (currentImageIndex < imageCount - 1) {
      let divToClose = document.getElementById("big-gallery-image");
      divToClose.remove();
      showImage(imagePaths[currentImageIndex+1]);
    }
  }
}

let showPrevImage = function() {
  currentImage = lastClickedImage;
  if (currentImage) {
    currentImageIndex = imagePaths.indexOf(currentImage);
    if (currentImageIndex > 0) {
      let divToClose = document.getElementById("big-gallery-image");
      divToClose.remove();
      showImage(imagePaths[currentImageIndex-1]);
    }
  }
}
