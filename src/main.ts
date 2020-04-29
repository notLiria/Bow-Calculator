import * as Calculations from "./calculations";
import "normalize.css";
import "./styles/main.scss";
import p5 from "p5"

let btn = document.getElementById("calc");
btn.addEventListener("click", calc_radius);



let DL = 0;
let L = 0;
let R = 0;

const canvasHeight = 600;
const canvasWidth = 600;

const Scene = (p: p5) => {
  p.setup = () => {
    const canvas = p.createCanvas(canvasHeight, canvasWidth);
    canvas.parent("dynamic-reference");
    p.background("black");
    p.noLoop();
  };

  p.draw = () => {
    p.background(255);
    p.translate(0.25 * canvasWidth, 0.5 * canvasHeight);
    const theta = L / (2 * R);
    const widthScale =  0.5 * canvasWidth;
    const heightScale = 0.5 * canvasHeight;
    const {
      arcBottom,
      arcMiddle,
      arcTop,
      bowDraw,
      origin,
    } = calculatePoints(DL, R, theta, widthScale, heightScale);

    p.strokeWeight(2);
    p.textStyle(p.NORMAL);
    p.textSize(20);

    // Draw Midline
    p.stroke(120);
    p.line(0, 0, ...arcMiddle);

    // Draw draw Length
    p.stroke(0);
    p.line(...bowDraw, ...arcMiddle);
    p.text("d", 0.85 * widthScale, -0.025 * heightScale);

    // Draw String Lines;
    p.stroke(255, 0, 0);
    p.line(...bowDraw, ...arcTop);
    p.line(...bowDraw, ...arcBottom);

    // Label String Lines
    const xMid = (bowDraw[0] + arcBottom[0]) / 2;
    const yMid = (bowDraw[1] + arcBottom[1]) / 2;
    const scaleSOver2Lol = (x, y) => ['S / 2', x + 0.025 * widthScale, y + 0.025 * heightScale];
    p.text(...scaleSOver2Lol(xMid, yMid));
    p.text(...scaleSOver2Lol(xMid, -yMid));


    // Draw Radial Lines
    p.stroke(150);
    p.line(0, 0, ...arcTop);
    p.line(0, 0, ...arcBottom);

    // Arbitrarily Label r at the Top
    p.fill(150);
    p.text("r", arcBottom[0] / 2 - 0.03 * widthScale, arcBottom[1] / 2);

    // Draw Arc
    p.stroke(0, 128, 0);
    p.noFill();
    p.arc(0, 0, 2 * widthScale, 2 * heightScale, -theta, theta);

    // Arbitrarily Label Arc at the Bottom
    const xHalfArc = Math.cos(theta / 2) * widthScale;
    const yHalfArc = Math.sin(theta / 2) * heightScale;
    p.text("L", xHalfArc + 0.05 * widthScale, yHalfArc);
  }

};
const scene = new p5(Scene)

function calculatePoints(d, r, theta, widthScale, heightScale) {
  const scaleValues = (x, y) => [x * widthScale, y * heightScale];

  return {
    origin: [0, 0],
    arcMiddle: scaleValues(1, 0),
    arcTop: scaleValues(Math.cos(theta), Math.sin(theta)),
    arcBottom: scaleValues(Math.cos(theta), -Math.sin(theta)),
    bowDraw: scaleValues((r - d) / r, 0),
  };
}


function calc_radius() {
  L = parseFloat(
    (document.getElementById("length") as HTMLInputElement).value
  );
  const S = parseFloat(
    (document.getElementById("string-length") as HTMLInputElement).value
  );
  DL = parseFloat(
    (document.getElementById("draw-length") as HTMLInputElement).value
  );
  const t = parseFloat(
    (document.getElementById("tillering-gizmo") as HTMLInputElement).value
  );

  // Check if the values make sense
  const valid = Calculations.check_values(DL, L, S);
  if (valid === false) {
    document.getElementById("error").innerText =
      "ERROR YOU HAVE AN INVALID COMBINATION OF VALUES";
  } else {
    document.getElementById("error").innerText = "";
    R = Calculations.find_root(DL, L, S);
    const p = Calculations.calc_p(R, t);
    document.getElementById("radius").innerText =
      "R (in cm) : " + R.toString();
    document.getElementById("p").innerText = "P (in cm) : " + p.toString();
    scene.redraw();
  }
}


