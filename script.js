var player1 = true;
var playing = true;
var round = 0;
var hue = 0;

const tictactoe = document.getElementById("tictactoe");
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");
const i4 = document.getElementById("i4");
const i5 = document.getElementById("i5");
const i6 = document.getElementById("i6");
const i7 = document.getElementById("i7");
const i8 = document.getElementById("i8");
const i9 = document.getElementById("i9");

i1.addEventListener("click", setSign);
i2.addEventListener("click", setSign);
i3.addEventListener("click", setSign);
i4.addEventListener("click", setSign);
i5.addEventListener("click", setSign);
i6.addEventListener("click", setSign);
i7.addEventListener("click", setSign);
i8.addEventListener("click", setSign);
i9.addEventListener("click", setSign);

function setSign(e) {
  round += 1;

  if (playing == false || round > 9) {
    reset();
  } else {
    var element = e.target || e.srcElement;

    if (document.getElementById(element.id).classList.length < 2 && playing) {
      hue += 13;
      if (hue > 360) {
        hue -= 360;
      }
      document.body.style.background = `hsl(${hue}, 25%, 16%)`;

      if (player1) {
        document.getElementById(element.id).classList.add("p1");
        player1 = false;
      } else {
        document.getElementById(element.id).classList.add("p2");
        player1 = true;
      }

      checkWin();
    }
  }
}

function checkWin() {
  if (
    i1.classList[1] != undefined &&
    i1.classList[1] == i2.classList[1] &&
    i1.classList[1] == i3.classList[1]
  ) {
    i1.classList.add("win");
    i2.classList.add("win");
    i3.classList.add("win");

    playing = false;
  }

  if (
    i4.classList[1] != undefined &&
    i4.classList[1] == i5.classList[1] &&
    i4.classList[1] == i6.classList[1]
  ) {
    i4.classList.add("win");
    i5.classList.add("win");
    i6.classList.add("win");

    playing = false;
  }

  if (
    i7.classList[1] != undefined &&
    i7.classList[1] == i8.classList[1] &&
    i7.classList[1] == i9.classList[1]
  ) {
    i7.classList.add("win");
    i8.classList.add("win");
    i9.classList.add("win");

    playing = false;
  }

  if (
    i1.classList[1] != undefined &&
    i1.classList[1] == i4.classList[1] &&
    i1.classList[1] == i7.classList[1]
  ) {
    i1.classList.add("win");
    i4.classList.add("win");
    i7.classList.add("win");

    playing = false;
  }

  if (
    i2.classList[1] != undefined &&
    i2.classList[1] == i5.classList[1] &&
    i2.classList[1] == i8.classList[1]
  ) {
    i5.classList.add("win");
    i2.classList.add("win");
    i8.classList.add("win");
    playing = false;
  }

  if (
    i3.classList[1] != undefined &&
    i3.classList[1] == i6.classList[1] &&
    i3.classList[1] == i9.classList[1]
  ) {
    i9.classList.add("win");
    i6.classList.add("win");
    i3.classList.add("win");

    playing = false;
  }

  if (
    i1.classList[1] != undefined &&
    i1.classList[1] == i5.classList[1] &&
    i1.classList[1] == i9.classList[1]
  ) {
    i1.classList.add("win");
    i5.classList.add("win");
    i9.classList.add("win");

    playing = false;
  }

  if (
    i3.classList[1] != undefined &&
    i3.classList[1] == i5.classList[1] &&
    i3.classList[1] == i7.classList[1]
  ) {
    i5.classList.add("win");
    i7.classList.add("win");
    i3.classList.add("win");

    playing = false;
  }
}

function newSize() {
  if (window.innerHeight > window.innerWidth) {
    tictactoe.style.width = "90vw";
    tictactoe.style.height = "90vw";
  } else {
    tictactoe.style.width = "90vh";
    tictactoe.style.height = "90vh";
  }
}

newSize();
window.addEventListener("resize", newSize);

// reset
function reset() {
  i1.classList = "gitem";
  i2.classList = "gitem";
  i3.classList = "gitem";
  i4.classList = "gitem";
  i5.classList = "gitem";
  i6.classList = "gitem";
  i7.classList = "gitem";
  i8.classList = "gitem";
  i9.classList = "gitem";

  playing = true;
  player1 = true;
  round = 0;
}
