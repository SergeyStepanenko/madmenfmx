; "use strict";

var headerStatus = 0;

document.querySelectorAll(".headerButton")[0].onclick = function () {
  if (headerStatus == 0) {
    document.querySelectorAll(".headerForSmallDevices")[0].style.WebkitTransform = "translate(0, 300px)";
    document.querySelectorAll(".headerForSmallDevices")[0].style.msTransform = "translate(0, 300px)";
    document.querySelectorAll(".headerForSmallDevices")[0].style.Transform = "translate(0, 300px)";
    headerStatus = 1;
  } else {
    document.querySelectorAll(".headerForSmallDevices")[0].style.WebkitTransform = "translate(0, 0)";
    document.querySelectorAll(".headerForSmallDevices")[0].style.msTransform = "translate(0, 0)";
    document.querySelectorAll(".headerForSmallDevices")[0].style.Transform = "translate(0, 0)";
    headerStatus = 0;
  }
}
