// 1
function average(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
  // console.log(`The average of this student is ${avg}`);
}

// 2
function finalGrade(n1, n2, n3, nf) {
  const befAvg = average(n1, n2, n3);
  const final = (befAvg + nf) / 2;
  console.log(`The final grade is ${final}`);
}

finalGrade(10, 10, 10, 5);

// 3
function convertToFarenheit(celsius) {
  const farenheit = (9 / 5) * celsius + 32;
  console.log(`The corresponding temperature in Farenheit is ${farenheit}F`);
}

convertToFarenheit(10);

// 4
function taxCalculator(price) {
  const totalAmt = price + price * 0.0875;
  console.log(`The total amount, including taxes, is $${totalAmt}`);
}

taxCalculator(10);
