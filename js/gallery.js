; "use strict";

var allImgs = document.querySelectorAll(".smallImage");
var maxImgNumber = allImgs.length;
var sliderImgNum;
var width = document.body.clientWidth;

if (width >= 768) {
  function getImgPath(img) {
    var imgPath = img.src;
    var img = document.getElementById("img");
    var path = imgPath.substr(imgPath.length - 10);
    sliderImgNum = +path.replace(/\D/g,'');

    img.setAttribute("src", "images/big/" + sliderImgNum + ".jpg");

    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('gallery').style.display = 'flex';
    document.getElementById('header').style.display = 'none';
    document.getElementById('homeButtonForSmallDevices').style.display = 'none';

    return false;
  };
}

document.querySelectorAll(".closePopup")[0].onclick = function() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('gallery').style.display = 'none';
  document.getElementById('header').style.display = 'flex';
  document.getElementById('homeButtonForSmallDevices').style.display = 'flex';
};

(function gallery (){
  var leftArrow = document.getElementById("leftArrow"),
      rightArrow = document.getElementById('rightArrow');

  leftArrow.addEventListener("click", moveBackward);
  rightArrow.addEventListener("click", moveForward);

  function moveBackward (){
    var img = document.getElementById("img");
    sliderImgNum--;
      if (sliderImgNum == 0) {
        sliderImgNum = maxImgNumber;
        img.setAttribute("src", "images/big/" + sliderImgNum + ".jpg");
      } else {
        img.setAttribute("src", "images/big/" + sliderImgNum + ".jpg");
      }
  };

  function moveForward () {
    var img = document.getElementById("img");
    sliderImgNum++;
      if (sliderImgNum > maxImgNumber) {
        sliderImgNum = 1;
        img.setAttribute("src", "images/big/" + sliderImgNum + ".jpg");
      }else {
        img.setAttribute("src", "images/big/" + sliderImgNum + ".jpg");
      }
};
}());
