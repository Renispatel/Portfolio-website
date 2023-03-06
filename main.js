// const progressBar = document.querySelector(".progressbar");
var app = document.body;
var nav = document.querySelector(".navbar");
var html = document.documentElement;
var body = document.body;
var scrolltop = "scrollTop";
var scrollhight = "scrollHeight";
var progressBar = document.getElementsByClassName("progressbar");

// app.onscroll = function () {
//   getScrollPercent();
//   getBlurAndProgressBar();
// };

// function getScrollPercent() {
//   let ScrolledHeight =
//     ((html[scrolltop] || body[scrolltop]) /
//       ((html[scrollhight] || body[scrollhight]) - html.clientHeight)) *
//     100;
//   // progressBar.style.background = "blue";
//   let scrolled = Math.floor(ScrolledHeight);
//   console.log(scrolled, "scrolled.....");
//   // progressBar.style.background = "red";
//   return Math.floor(ScrolledHeight);
// }

// function getBlurAndProgressBar() {
//   if (getScrollPercent() > 1) {
//     // console.log("scroll");
//     nav.style.backdropFilter = "blur(" + 4 + "px)";
//   } else {
//     nav.style.backdropFilter = "blur(" + 0 + "px)";
//   }
// }

// ....................................

app.onscroll = async function () {
  let ScrolledHeight =
    ((html[scrolltop] || body[scrolltop]) /
      ((html[scrollhight] || body[scrollhight]) - html.clientHeight)) *
    100;
  let ScrollHeight = Math.round(ScrolledHeight);
  console.log(ScrollHeight, "round height");
  document.getElementsByClassName("progressbar")[0].style.width =
    ScrollHeight + "%";

  if (ScrollHeight > 5) {
    nav.style.backdropFilter = "blur(" + 4 + "px)";
  } else {
    nav.style.backdropFilter = "blur(" + 0 + "px)";
  }
};

// async function ProgressBar() {
//   setTimeout(() => {
//     progressBar.style.width = getScrollPercent() + "%";
//   }),
//     500;
// }

// function ProgressBar() {
//   let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   console.log(app.scrollTop, "scrolled top");
//   let height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   // let scrolled = (winScroll / height) * 100;
//   let scrolled = app.scrollTop;
//   console.log(scrolled);
//   progressBar.style.width = scrolled + "%";

//   // let blur = "backdrop-filter = blur(3+'px');"
//   var bac = document.querySelector(".navbar");
//   // console.log(scrolled, "scrolled in %");
//   if (scrolled > 250) {
//     // console.log("scroll");
//     bac.style.backdropFilter = "blur(" + 3 + "px)";
//   } else {
//     bac.style.backdropFilter = "blur(" + 0 + "px)";
//   }
// }

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
