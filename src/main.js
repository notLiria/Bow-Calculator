"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculations = require("./calculations");
var btn = document.getElementById("calc");
btn.addEventListener("click", calc_radius);
function calc_radius() {
    var L = parseFloat(document.getElementById("length").value);
    var S = parseFloat(document.getElementById("string-length").value);
    var DL = parseFloat(document.getElementById("draw-length").value);
    var t = parseFloat(document.getElementById("tillering-gizmo").value);
    // Check if the values make sense
    var valid = Calculations.check_values(DL, L, S);
    if (valid === false) {
        document.getElementById("error").innerText = "ERROR YOU HAVE AN INVALID COMBINATION OF VALUES";
    }
    else {
        document.getElementById("error").innerText = "";
        var root = Calculations.find_root(DL, L, S);
        var p = Calculations.calc_p(root, t);
        document.getElementById("radius").innerText = "R (in cm) : " + root.toString();
        document.getElementById("p").innerText = "P (in cm) : " + p.toString();
    }
}
//# sourceMappingURL=main.js.map