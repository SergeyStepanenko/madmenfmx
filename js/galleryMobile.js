; "use strict";
var startPoint = {};
var nowPoint;
var img = document.querySelector(".galleryForMobile");
var leng = document.querySelectorAll(".imageMobileGallery").length * -100 + 100;
var translatePosition = 0;
var transformPart1 = "translate3d(";
var transformPart2 = "%, 0, 0)";
var transformPart3 = "%,";
var transformPart4 = "%, 0)";
var counter;
var sliderPosition = 0;
var sliderPosition_Y;
var currentFingerPositionInPercent_X;
var currentFingerPositionInPercent_Y;
var currentFingerPosition;
var otk = {};
var initialPosition;
var animationOn = 'document.querySelector(".galleryForMobile").style.transition = "all 0.2s cubic-bezier(0.47, 0.48, 0.5, 0.67)"';
var screenWidth;
var screenHeight;
var backgroundFadeOutPart1 = "rgba(0, 0, 0, "
var backgroundFadeOutPart2 = ")"
var backgroundOpacityChange = backgroundFadeOutPart1 + (sliderPosition_Y / 10) + backgroundFadeOutPart2;
var sliderImgNum;
var firstOpenTransformPositionSet = transformPart1 + sliderImgNum + transformPart2;
var width = document.body.clientWidth;

var numOfImgsInGallery = document.querySelectorAll(".smallImage");
console.log(numOfImgsInGallery.length);

// (function appendGalleryPopUp () {
//   if (width < 768) {
//     for (var i = 0; i < numOfImgsInGallery.length; i++) {
//       console.log(numOfImgsInGallery[i].src);
//       document.querySelectorAll(".smallImage")[i].onclick = function() {
//         document.querySelector(".galleryForMobileWrapper").style.display = "flex";
//         // document.querySelector(".galleryForMobile").style.transform = "translate3d(-100%, 0, 0)";
//       }
//     }
//   }
//
// }());



if (width < 768) {
  function getImgPath(img) {
      var imgPath = img.src;
      var img = document.getElementById("img");
      var path = imgPath.substr(imgPath.length - 10);
      sliderImgNum = +path.replace(/\D/g,'');
      sliderImgNum = (sliderImgNum - 1) * -100;
      console.log(sliderImgNum);
      var firstOpenTransformPositionSet = transformPart1 + sliderImgNum + transformPart2;
      console.log(firstOpenTransformPositionSet);
      document.querySelector(".galleryForMobile").style.transform = firstOpenTransformPositionSet;
      document.querySelector(".galleryForMobileWrapper").style.display = "flex";
      translatePosition = sliderImgNum;
      return false;
    };
}














// console.log(width);

window.onload = function () {
  screenWidth = document.querySelector(".imageMobileGallery").width;
  screenHeight = document.querySelector(".imageMobileGallery").height;
}

img.addEventListener('touchstart', function (event) {
  event.preventDefault();
  event.stopPropagation();

  startPoint.x = event.changedTouches[0].pageX || event.changedTouches[0].clientX;
  startPoint.y = event.changedTouches[0].pageY || event.changedTouches[0].clientY;
}, false);

img.addEventListener('touchmove', function(event) {
  nowPoint = event.changedTouches[0];
  otk.x = nowPoint.pageX - startPoint.x;
  otk.y = nowPoint.pageY - startPoint.y;

  currentFingerPosition = otk.x / screenWidth * 100;                                           //получаем позицию пальца в реальном времени БЕЗ УЧЕТА ПРОКРУТКИ в %
  currentFingerPositionInPercent_X = otk.x.toFixed(0) / screenWidth * 100 + translatePosition; //получаем позицию пальца в реальном времени С УЧЕТОМ ПРОКРУТКИ в %
  currentFingerPositionInPercent_X = currentFingerPositionInPercent_X.toFixed(0);
  sliderPosition = transformPart1 + currentFingerPositionInPercent_X + transformPart2;


  sliderPosition_Y = transformPart1 + translatePosition + transformPart3 + currentFingerPositionInPercent_Y / 2 + transformPart4;

  currentFingerPositionInPercent_Y = otk.y / screenWidth * 100;     //получаем позицию пальца в реальном времени С УЧЕТОМ ПРОКРУТКИ в %
  currentFingerPositionInPercent_Y = currentFingerPositionInPercent_Y.toFixed(0);


  (function toDragimageMobileGalleryInRealTime () {
    if (Math.abs(currentFingerPosition) > 5) {
      document.querySelector(".galleryForMobile").style.transition = "all 0.0s ease-in-out";
      document.querySelector(".galleryForMobile").style.transform = sliderPosition; // текущий сдвиг по подсчету translate в реальном времени
    };

  (function swipeUpOrDownToCloseGallery () {
    if (currentFingerPositionInPercent_Y > 12 || currentFingerPositionInPercent_Y < -12) {
      document.querySelector(".galleryForMobile").style.transition = "all 0.0s ease-in-out";
      document.querySelector(".galleryForMobile").style.transform = sliderPosition_Y;
      var fadeOut = backgroundFadeOutPart1 + (1 - Math.abs(currentFingerPositionInPercent_Y) / 100) + backgroundFadeOutPart2;
      document.querySelector(".galleryForMobileWrapper").style.background = fadeOut;
    }
  })();


  }());
}, false);

function returnimageMobileGalleryToItsIntendedPosition () {
  initialPosition = transformPart1 + translatePosition + transformPart2;
  document.querySelector(".galleryForMobile").style.transform = initialPosition;
};

img.addEventListener('touchend', function(event) {
  document.querySelector(".galleryForMobileWrapper").style.background = "rgba(0, 0, 0, 1)";
  eval (animationOn);

  (function ifDraggedUpOrDownForMoreThen20Percent () {
    if (Math.abs(currentFingerPositionInPercent_Y) > 20) {
      document.querySelector(".galleryForMobileWrapper").style.display = "none";
    }
  }());

  (function ifDraggedLessThan20Percent () {
    if (Math.abs(currentFingerPosition) < 30) {
      initialPosition = transformPart1 + translatePosition + transformPart2;
      document.querySelector(".galleryForMobile").style.transform = initialPosition;
    }
  }());

  (function toShowNextOrPreviousimageMobileGalleryOrNot () {
    if (currentFingerPosition < -7) { //если перетащил БОЛЬШЕ чем на 20% ВЛЕВО или это последняя картинка - тогда картинка ПЕРЕКЛЮЧАЕТСЯ ВЛЕВО

      translatePosition += -100;
      returnimageMobileGalleryToItsIntendedPosition ();
    } else if (currentFingerPosition > 7 & translatePosition != 0) { //если перетащил БОЛЬШЕ чем на 20% ВПРАВО - тогда картинка ПЕРЕКЛЮЧАЕТСЯ ВПРАВО
      translatePosition += 100;
      returnimageMobileGalleryToItsIntendedPosition ();
    } else if (translatePosition == 0) { //если перетащил первую картинку ВЛЕВО более чем на 20% вправо, то НЕ ПЕРЕКЛЮЧАТЬ
      returnimageMobileGalleryToItsIntendedPosition ();
    }
    else if (translatePosition > leng) {
      document.querySelector(".galleryForMobile").style.transform = initialPosition;
    }
    if (translatePosition == leng + -100) {
      document.querySelector(".galleryForMobile").style.transform = transformPart1 + 0 + transformPart2;
      document.querySelector(".galleryForMobile").style.transition = "all 0.5s cubic-bezier(0.47, 0.48, 0.5, 0.67)"
      translatePosition = 0;


    }
  })();
}, false);
