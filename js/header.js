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







// HEADER OLD VER

// var menuStatus = 0;
// var header = document.getElementById('headerForSmallDevices');
// var i = 0;
// var delay = 1;
// var speedOfAnimation = 10;
//
// document.querySelectorAll(".headerButton")[0].onclick = function () {
//   if (menuStatus == 0) {
//     header.style.display = 'flex';
//     (function () {
//       function startTimer () {
//         if (i < 301) {
//           header.style.height = i + 'px';
//           setTimeout(startTimer, delay);
//         };
//       i += speedOfAnimation;
//       };
//     startTimer ();
//   }());
//
//     menuStatus = 1;
//
//   } else {
//     (function () {
//       function startTimer () {
//         if (i > -1) {
//           header.style.height = i + 'px';
//           setTimeout(startTimer, delay);
//         };
//       i -= speedOfAnimation;
//       };
//     startTimer ();
//   }());
//
//     menuStatus = 0;
//
//   };
// };
