function createContext() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  return [canvas, context];
}

function resizeCanvas(canvas) {
  const { innerWidth, innerHeight } = window;
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
const [canvas, context] = createContext();
resizeCanvas(canvas);
class Walker {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  update() {
    const rand = Math.random();
    if (rand <= 0.25) {
      this.x += 5;
    } else if (rand <= 0.5) {
      this.y += 5;
    } else if (rand <= 0.75) {
      this.x -= 5;
    } else {
      this.y -= 5;
    }
    this.draw();
  }
  draw() {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, 2, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  }
}
const walkerLimit = 500;
const walkers = [];
for (let i = 1; i <= walkerLimit; i += 1) {
  const { innerWidth, innerHeight } = window;
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  const newWalker = new Walker(
    Math.random() * innerWidth,
    Math.random() * innerHeight,
    `rgb(${red}, ${green}, ${blue})`
  );
  walkers.push(newWalker);
}
window.setInterval(function () {
  walkers.forEach(function (w) {
    w.update();
  });
}, 20);