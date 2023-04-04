var player = "X";
var boxes = document.querySelectorAll(".box");

boxes.forEach(function(box) {
  box.addEventListener("click", function() {
    if (box.innerHTML === "") {
        box.innerHTML = player;
        checkWin();
        changePlayer();
    }
  });
});

function changePlayer() {
  if (player === "X") {
      player = "O";
  } else {
      player = "X";
  }
}

function checkWin() {
  var box1 = document.getElementById("box1").innerHTML;
  var box2 = document.getElementById("box2").innerHTML;
  var box3 = document.getElementById("box3").innerHTML;
  var box4 = document.getElementById("box4").innerHTML;
  var box5 = document.getElementById("box5").innerHTML;
  var box6 = document.getElementById("box6").innerHTML;
  var box7 = document.getElementById("box7").innerHTML;
  var box8 = document.getElementById("box8").innerHTML;
  var box9 = document.getElementById("box9").innerHTML;

  if (box1 !== "" && box1 === box2 && box2 === box3) {
      alert(player + " wins!");
  } else if (box4 !== "" && box4 === box5 && box5 === box6) {
      alert(player + " wins!");
  } else if (box7 !== "" && box7 === box8 && box8 === box9) {
      alert(player + " wins!");
  } else if (box1 !== "" && box1 === box4 && box4 === box7) {
      alert(player + " wins!");
  } else if (box2 !== "" && box2 === box5 && box5 === box8) {
      alert(player + " wins!");
  } else if (box3 !== "" && box3 === box6 && box6 === box9) {
      alert(player + " wins!");
  } else if (box1 !== "" && box1 === box5 && box5 === box9) {
      alert(player + " wins!");
  } else if (box3 !== "" && box3 === box5 && box5 === box7) {
      alert(player + " wins!");
  }
}

function resetGame() {
  for (var i = 1; i < 10; i++) {
    document.getElementById("box" + i).innerHTML = "";
  }
}
