import * as Calculations from "./calculations";
import { Scene } from "./scene";
import "normalize.css";
import "./styles/main.scss";

let btn = document.getElementById("calc");
btn.addEventListener("click", calc_radius);

function calc_radius() {
  const L = parseFloat(
    (document.getElementById("length") as HTMLInputElement).value
  );
  const S = parseFloat(
    (document.getElementById("string-length") as HTMLInputElement).value
  );
  const DL = parseFloat(
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
    const root = Calculations.find_root(DL, L, S);
    const p = Calculations.calc_p(root, t);
    document.getElementById("radius").innerText =
      "R (in cm) : " + root.toString();
    document.getElementById("p").innerText = "P (in cm) : " + p.toString();
  }
}
