"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculations = require("./calculations");
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
}
//# sourceMappingURL=main.js.map