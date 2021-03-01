var rs = require('readline-sync');

var fNum1 = parseInt(rs.question('1st Number: '));
var fNum2 = parseInt(rs.question('2nd Number: '));
var fNum3 = parseInt(rs.question('3rd Number: '));
var fNum4 = parseInt(rs.question('4th Number: '));

// For fNum1
var result1 = fNum1
fNum1--;

for (var i = fNum1; i > 0; i--) {
  result1 = result1 * i;
}

// for fNum2
var result2 = 0;
fNum2 = fNum2.toString();
for (var i = 0; i < fNum2.length; i++) {
  result2 += Number(fNum2[i]);
}

// for fNum3
var result3 = '';
fNum3 = fNum3.toString();
for (var i = fNum3.length - 1; i >= 0; i--) {
  result3 = result3 + fNum3.charAt(i);
}

// for fNum4

var result4, i, j, index;
fNum4 = fNum4.toString();
result4 = true;
for (i = 0, j = fNum4.length - 1, index = 0; index < Math.floor(fNum4.length / 2); index++, i++, j--) {
  if (fNum4[i] != fNum4[j]) {
    result4 = false;
    break;
  } 
}

console.log('Factorial of the 1st number is = ' + result1);
console.log('The sum of all digits of the 2nd number is = ' + result2);
console.log('The reverse of the 3rd number is = ' + result3);
console.log('Is the 4th number a palindrome (True/False)? = ' + result4);

