let bar = document.querySelector("#bar");
let ball = document.querySelector("#ball");
let general = document.querySelector("#general");
let text = document.querySelector("#text");

let barX = 300;
let ballY = 0;
let ballX = 0;
let x = 5;
let y = 5;
let point = 0;

onkeydown = barMove;
let set = setInterval(ballMove, 40);

function barMove(e) {
  if (e.keyCode == 39) {
    if (barX < 500) {
      barX += 25;
    }
  }

  if (e.keyCode == 37) {
    if (barX > 0) {
      barX -= 25;
    }
  }
  bar.style.left = barX + "px";
}

function ballMove() {
  if (ballX > 550 || ballX < 0) {
    x *= -1;
  }

  if (ballY < 0) {
    y *= -1;
  } else if (ballY > 450 && ballX >= barX - 25 && ballX <= barX + 100) {
    x += 1;
    y += 1;
    point++;
    text.innerHTML = `Sizin xaliniz : ${point}`;
    ball.style.backgroundColor = "#" + RandomColor();
    bar.style.backgroundColor = "#" + RandomColor();
    general.style.backgroundColor = "#" + RandomColor();
    y *= -1;
  } else if (ballY > 450) {
    clearInterval(set);
    general.innerHTML = "Uduzdunuz" + point;
  }

  ballX += x;
  ballY -= y;

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
}

function RandomColor() {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let data = "";
  for (let i = 0; i < 6; i++) {
    data += arr[Math.round(Math.random() * arr.length)];
  }
  return data;
}
