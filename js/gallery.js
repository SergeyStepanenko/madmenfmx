; "use strict";

var allImgs = document.querySelectorAll(".smallImage");
var gall = document.querySelector(".gallery");
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

  gall.addEventListener("wheel", function onWheel(e) {
    e = e || window.event;
    var delta = e.deltaY || e.detail || e.wheelDelta;
    delta == 100 ? moveForward() : moveBackward();
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  });



  gall.onkeydown = gall.onkeyup = gall.onkeypress = handle;

  var lastTime = Date.now();

  function handle(e) {
    if (form.elements[e.type + 'Ignore'].checked) return;

    var text = e.type +
      ' keyCode=' + e.keyCode +
      ' which=' + e.which +
      ' charCode=' + e.charCode +
      ' char=' + String.fromCharCode(e.keyCode || e.charCode) +
      (e.shiftKey ? ' +shift' : '') +
      (e.ctrlKey ? ' +ctrl' : '') +
      (e.altKey ? ' +alt' : '') +
      (e.metaKey ? ' +meta' : '') + "\n";

    if (area.value && Date.now() - lastTime > 250) {
      console.log(area.value += new Array(81).join('-') + '\n');;
    }
    lastTime = Date.now();

    console.log(area.value += text);;

    if (form.elements[e.type + 'Stop'].checked) {
      e.preventDefault();
    }
  }













  gall.addEventListener("keydown", function(event) {
    console.log('hi');
        }, false);





  function onWheel(e) {
    e = e || window.event;
    var delta = e.deltaY || e.detail || e.wheelDelta;
    delta == 100 ? moveForward() : moveBackward();
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  };



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
