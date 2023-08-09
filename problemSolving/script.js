
//Q1:
const getMaxNum = (num1, num2, num3) => {
  if (num1 > num2 && num2 > num3) {
    console.log(`${num1} is the maximum `);
  }else if (num1 > num2 && num3 > num2) {
    console.log(`${num1} is the maximum `);
  } else if (num2 > num1 && num1 > num3) {
    console.log(`${num2} is the max `);
  } else if (num3 > num2 && num2 > num1) {
    console.log(`${num3} is the maximum `);
  } else if (num1 > num2 && num3 > num2) {
    console.log(`${num1} is the maximum `);
  } else {
    console.log("all numbers are equal");
  }
};

getMaxNum(6,5,3);
