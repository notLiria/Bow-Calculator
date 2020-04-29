export function check_values(drawLength: number, length: number, stringLength: number): boolean {
  return (drawLength * drawLength + ((length * length) / 4) - ((stringLength * stringLength) / 4)) > 0;
}

export function find_root(drawLength: number, length: number, stringLength: number) {
  // Rename variables to the way they appear in the equation
  // Return the value of r that is reasonably close to being a root
  const DL = drawLength;
  const S = stringLength;
  const L = length;
  const allowableErr = 0.01;
  let r = DL;
  let currValue = calc_value(DL, S, L, r);

  while (Math.abs(currValue) > allowableErr && r < 5000) {
    r = r + allowableErr;
    currValue = calc_value(DL, S, L, r);
  }
  return r;
}

export function calc_value(dl: number, s: number, l: number, r: number) {
  // Returns the value of this function
  return (r ** 2) + ((r - dl) ** 2) - 2 * r * (r - dl) * Math.cos(l / (2 * r)) - ((s / 2) ** 2);
}

export function calc_p(r: number, t: number){
  return r - Math.sqrt((r ** 2) - (t ** 2))
}


