const canvas = document.getElementById("pong"):

const ctx  = canvas.getContext('2d');

dunction drawRect(x, y, h, w, color){
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);

}
