import * as p5 from 'p5'

console.log("hello world");
const s = function(p: p5){
  p.setup = () => {
    const canvas = p.createCanvas(100, 200);
    canvas.parent("dynamic");
    p.background("black");
  }
}

new p5(s);
