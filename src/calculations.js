"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function check_values(drawLength, length, stringLength) {
    return (drawLength * drawLength + ((length * length) / 4) - ((stringLength * stringLength) / 4)) > 0;
}
exports.check_values = check_values;
function find_root(drawLength, length, stringLength) {
    // Rename variables to the way they appear in the equation
    // Return the value of r that is reasonably close to being a root
    var DL = drawLength;
    var S = stringLength;
    var L = length;
    var allowableErr = 0.01;
    var r = DL;
    var currValue = calc_value(DL, S, L, r);
    while (Math.abs(currValue) > allowableErr && r < 5000) {
        r = r + allowableErr;
        currValue = calc_value(DL, S, L, r);
    }
    return r;
}
exports.find_root = find_root;
function calc_value(dl, s, l, r) {
    // Returns the value of this function
    return (Math.pow(r, 2)) + (Math.pow((r - dl), 2)) - 2 * r * (r - dl) * Math.cos(l / (2 * r)) - (Math.pow((s / 2), 2));
}
exports.calc_value = calc_value;
function calc_p(r, t) {
    return r - Math.sqrt((Math.pow(r, 2)) - (Math.pow(t, 2)));
}
exports.calc_p = calc_p;
//# sourceMappingURL=calculations.js.map