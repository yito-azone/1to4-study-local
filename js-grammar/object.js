let game = {
  startTime: null,
  stopTime: null,
  seconds: null,
  displayArea: document.getElementById("display-area"),
  start: function () {
    game.startTime = Date.now();
  },
  stop: function () {
    document.body.onkeydown = game.retry;

    game.stopTime = Date.now();
    game.seconds = (game.stopTime - game.startTime) / 1000;

    if (9.5 <= game.seconds && game.seconds <= 10.5) {
      game.displayArea.innerText = game.seconds + "秒でした。すごい！";
    } else {
      game.displayArea.innerText = game.seconds + "秒でした。残念！";
    }
  },
  //ここに retry 関数を追加する
  retry: function () {
    if (confirm("OKを押して10秒だと思ったら何かキーを押して下さい")) {
      game.displayArea.innerHTML = null;
      game.start();
      document.body.onkeydown = game.stop;
    }
  },
};

if (confirm("OKを押して10秒だと思ったら何かキーを押して下さい")) {
  game.start();
  document.body.onkeydown = game.stop;
}
