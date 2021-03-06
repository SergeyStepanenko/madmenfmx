; "use strict";
var startPoint = {},
    nowPoint,
    img = document.querySelector(".galleryForMobile"),
    leng = document.querySelectorAll(".imageMobileGallery").length * -100 + 100,
    translatePosition = 0,
    transformPart1 = "translate3d(",
    transformPart2 = "%, 0, 0)",
    transformPart3 = "%,",
    transformPart4 = "%, 0)",
    counter,
    sliderPosition = 0,
    sliderPosition_Y,
    currentFingerPositionInPercent_X,
    currentFingerPositionInPercent_Y,
    currentFingerPosition,
    otk = {},
    initialPosition,
    screenWidth,
    screenHeight,
    backgroundFadeOutPart1 = "rgba(0, 0, 0, ",
    backgroundFadeOutPart2 = ")",
    backgroundOpacityChange = backgroundFadeOutPart1 + (sliderPosition_Y / 10) + backgroundFadeOutPart2,
    sliderImgNum,
    firstOpenTransformPositionSet = transformPart1 + sliderImgNum + transformPart2,
    width = document.body.clientWidth,
    numOfImgsInGallery = document.querySelectorAll(".smallImage");

if (width < 768) {
  function getImgPath(img) {
      var imgPath = img.src;
      var img = document.getElementById("img");
      var path = imgPath.substr(imgPath.length - 10);
      sliderImgNum = +path.replace(/\D/g,'');
      sliderImgNum = (sliderImgNum - 1) * -100;
      var firstOpenTransformPositionSet = transformPart1 + sliderImgNum + transformPart2;
      document.querySelector(".galleryForMobile").style.transform = firstOpenTransformPositionSet;
      // document.querySelector(".galleryForMobile").style.Webkittransform = firstOpenTransformPositionSet;
      // document.querySelector(".galleryForMobile").style.mstransform = firstOpenTransformPositionSet;
      document.querySelector(".galleryForMobileWrapper").style.display = "flex";
      translatePosition = sliderImgNum;
      return false;
    };
};

window.onload = function () {
  screenWidth = document.querySelector(".imageMobileGallery").width;
  screenHeight = document.querySelector(".imageMobileGallery").height;
}

img.addEventListener('touchstart', function (event) {
  event.preventDefault();
  event.stopPropagation();
  event.preventDefault = false;

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
  currentFingerPositionInPercent_Y = otk.y / screenWidth * 100;     //получаем позицию пальца в реальном времени С УЧЕТОМ ПРОКРУТКИ в %
  currentFingerPositionInPercent_Y = currentFingerPositionInPercent_Y.toFixed(0);

  (function toDragimageMobileGalleryInRealTime () {
    event.preventDefault();
    event.stopPropagation();
    if (Math.abs(currentFingerPositionInPercent_Y) < 15) {
      if (Math.abs(currentFingerPosition) > 1) {
        currentFingerPositionInPercent_Y = 0;
        document.querySelector(".galleryForMobile").style.transition = "all 0.0s ease-in-out";
        document.querySelector(".galleryForMobile").style.transform = sliderPosition; // текущий сдвиг по подсчету translate в реальном времени
      };
    }
  }());

  (function swipeUpOrDownToCloseGallery () {
    event.preventDefault();
    event.stopPropagation();
    if (Math.abs(currentFingerPosition) < 30) {
      if (currentFingerPositionInPercent_Y > 5 || currentFingerPositionInPercent_Y < -5) {
        sliderPosition_Y = transformPart1 + translatePosition + transformPart3 + currentFingerPositionInPercent_Y / 2 + transformPart4;
        document.querySelector(".galleryForMobile").style.transition = "all 0.0s ease-in-out";
        document.querySelector(".galleryForMobile").style.transform = sliderPosition_Y;
        var fadeOut = backgroundFadeOutPart1 + (1 - Math.abs(currentFingerPositionInPercent_Y) / 100) + backgroundFadeOutPart2;
        document.querySelector(".galleryForMobileWrapper").style.background = fadeOut;
      }
    }
  })();
}, false);

  function returnimageMobileGalleryToItsIntendedPosition () {
    event.preventDefault();
    event.stopPropagation();
    initialPosition = transformPart1 + translatePosition + transformPart2;
    document.querySelector(".galleryForMobile").style.transform = initialPosition;
  };

img.addEventListener('touchend', function(event) {
  event.preventDefault();
  event.stopPropagation();
  document.querySelector(".galleryForMobileWrapper").style.background = "rgba(0, 0, 0, 1)";
  document.querySelector(".galleryForMobile").style.transition = "all 0.2s cubic-bezier(0.47, 0.48, 0.5, 0.67)";

  (function ifDraggedUpOrDownForMoreThen20Percent () {
    event.preventDefault();
    event.stopPropagation();
    if (Math.abs(currentFingerPositionInPercent_Y) > 20) {
      document.querySelector(".galleryForMobileWrapper").style.display = "none";
    }
  }());

  (function ifDraggedLessThan20Percent () {
    event.preventDefault();
    event.stopPropagation();
    if (Math.abs(currentFingerPosition) < 30) {
      initialPosition = transformPart1 + translatePosition + transformPart2;
      document.querySelector(".galleryForMobile").style.transform = initialPosition;
    }
  }());

  (function toShowNextOrPreviousimageMobileGalleryOrNot () {
    event.preventDefault();
    event.stopPropagation();
    if (currentFingerPosition < -7 && leng != translatePosition) { //если перетащил БОЛЬШЕ чем на 20% ВЛЕВО или это последняя картинка - тогда картинка ПЕРЕКЛЮЧАЕТСЯ ВЛЕВО
      translatePosition += -100;
      returnimageMobileGalleryToItsIntendedPosition ();
    } else if (currentFingerPosition > 7 & translatePosition != 0) { //если перетащил БОЛЬШЕ чем на 20% ВПРАВО - тогда картинка ПЕРЕКЛЮЧАЕТСЯ ВПРАВО
      translatePosition += 100;
      returnimageMobileGalleryToItsIntendedPosition ();
    } else if (translatePosition == 0) { //если перетащил первую картинку ВЛЕВО более чем на 20% вправо, то НЕ ПЕРЕКЛЮЧАТЬ
      returnimageMobileGalleryToItsIntendedPosition ();
    }
    else if (translatePosition == leng) {
      event.preventDefault();
      event.stopPropagation();
      document.querySelector(".galleryForMobile").style.transform = initialPosition;
    }
    // if (translatePosition == leng + -100) {
    //   document.querySelector(".galleryForMobile").style.transform = transformPart1 + 0 + transformPart2;
    //   document.querySelector(".galleryForMobile").style.transition = "all 0.5s cubic-bezier(0.47, 0.48, 0.5, 0.67)"
    //   translatePosition = 0;
    // }
  })();
}, false);
