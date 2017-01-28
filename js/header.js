; "use strict";

var headerStatus = 0;
var mobileMenuButton = document.querySelectorAll(".mobileMenuButton");


document.querySelectorAll(".headerButton")[0].onclick = function () {
  if (headerStatus == 0) {
    document.querySelector(".headerForSmallDevices").style.WebkitTransform = "translate3d(0, 300px, 0)";
    document.querySelector(".headerForSmallDevices").style.msTransform = "translate3d(0, 300px, 0)";
    document.querySelector(".headerForSmallDevices").style.Transform = "translate3d(0, 300px, 0)";
    document.querySelector(".contentWrapper").style.WebkitTransform = "translate3d(0, 300px, 0)";
    document.querySelector(".contentWrapper").style.msTransform = "translate3d(0, 300px, 0)";
    document.querySelector(".contentWrapper").style.Transform = "translate3d(0, 300px, 0)";
    headerStatus = 1;
  } else {
    document.querySelector(".headerForSmallDevices").style.WebkitTransform = "translate3d(0, 0, 0)";
    document.querySelector(".headerForSmallDevices").style.msTransform = "translate3d(0, 0, 0)";
    document.querySelector(".headerForSmallDevices").style.Transform = "translate3d(0, 0, 0)";
    document.querySelector(".contentWrapper").style.WebkitTransform = "translate3d(0, 0, 0)";
    document.querySelector(".contentWrapper").style.msTransform = "translate3d(0, 0, 0)";
    document.querySelector(".contentWrapper").style.Transform = "translate3d(0, 0, 0)";
    headerStatus = 0;
  }
};

for (var i = 0; i < mobileMenuButton.length; i++) {
  document.querySelectorAll(".mobileMenuButton")[i].onclick = function () {
    document.querySelector(".headerForSmallDevices").style.WebkitTransform = "translate3d(0, 0, 0)";
    document.querySelector(".headerForSmallDevices").style.msTransform = "translate3d(0, 0, 0)";
    document.querySelector(".headerForSmallDevices").style.Transform = "translate3d(0, 0, 0)";
    document.querySelector(".contentWrapper").style.WebkitTransform = "translate3d(0, 0, 0)";
    document.querySelector(".contentWrapper").style.msTransform = "translate3d(0, 0, 0)";
    document.querySelector(".contentWrapper").style.Transform = "translate3d(0, 0, 0)";
    headerStatus = 0;
  }
};
