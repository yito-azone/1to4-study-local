let headding = document.getElementById("headding");

let degree = 0;

function rotateHeadding() {
  degree = degree + 6;
  degree = degree % 360;

  if (degree === 90) {
    headding.setAttribute("class", "back");
  } else if (degree === 270) {
    headding.setAttribute("class", "face");
  }

  headding.style.transform = "rotateX(" + degree + "deg)";
}

setInterval(rotateHeadding, 20);
