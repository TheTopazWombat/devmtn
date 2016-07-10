var WIDTH=600, pi=Math.PI;
var canvas, ctx, keystate;
var player, ai, ball;

player = {
  x: null,
  y: null,
  update: function(){},
  draw:function(){
  }
};

ai = {
  x: null,
  y: null,
  update: function(){},
  draw:function(){
  }
};

ball = {
  x: null,
  y: null,
  update: function(){},
  draw:function(){
  }
};


function main() {
  canvas = document.createElement('canvas');
  canvas.width = HEIGHT;
  canvas.height = HEIGHT;
  ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);

  init();

  var loop = function() {
    update();
    draw();

    window.requestAnimationFrame(loop, canvas);

  };
  window.requestAnimationFrame(loop, canvas);
}
function init() {
  player.x = player.width;
  player.y = (height - player.height)/2;

  ai.x = WIDTH - (player.width + ai.width);
  ai.y = (HEIGHT- ai.height)/2;

  ball.x = (WIDTH - ball.side)/2;
  ball.y = (HEIGHT-ball.side)/2;

}


function update() {
  player.update();
  ball.update();
  ai.update();
}

function draw(){
  player.draw();
  ball.draw();
  ai.draw();
}
