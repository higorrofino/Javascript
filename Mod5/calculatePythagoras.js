function sqRootResolution(radicand) {
  return radicand ** (1 / 2);
}

function calculatePythagoras(side1, side2) {
  const sum = side1 ** 2 + side2 ** 2;
  return sqRootResolution(sum);
}

console.log(
  `The hypotenuse of a triangle with sides 3 and 4 is: ${calculatePythagoras(
    3,
    4
  )}`
);
