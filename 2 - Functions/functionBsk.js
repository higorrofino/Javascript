function bskResolution(a, b, c) {
  const delta = b ** 2 - 4 * a * c;
  const x1 = (-b + sqRootResolution(delta)) / (2 * a);
  const x2 = (-b - sqRootResolution(delta)) / (2 * a);

  console.log(`The two values of X are ${x1} and ${x2}`);
}

function sqRootResolution(base) {
  return base ** (1 / 2);
}

bskResolution(2, 3, -2);
