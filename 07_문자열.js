// 11720 (숫자의 합)
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let string = input[1];
// let answer = 0;
// for (let x of string) {
//    answer += Number(x);
// }

// console.log(answer);


// 2675 (문자열 반복)
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let testCase = Number(input[0]);

// for (let i = 1; i <= testCase; i++) {
//    let [r, s] = input[i].split(" ");
//    let result = "";

//    for (let j = 0; j <= s.length; j++) {
//       result += s.charAt(j).repeat(r);
//    }

//    console.log(result);
// }


// 2908 (상수)
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let a = input[0].split(' ')[0];
// let b = input[0].split(' ')[1];

// let newA = a[2] + a[1] + a[0];
// let newB = b[2] + b[1] + b[0];

// console.log(Math.max(Number(newA), Number(newB)));


// 1316 (그룹 단어 체커)
// function isGroup(data) {
//    let arr = [];
//    for (let i = 0; i < data.length; i++) {
//       if (!arr.includes(data[i])) arr.push(data[i]);
//       if (data[i-1] === data[i]) arr.push(data[i]);
//    }

//    return arr;
// }

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let testCase = Number(input[0]);
// let cnt = 0;

// for (let i = 1; i <= testCase; i++) {
//    if (input[i] === isGroup(input[i]).join("")) cnt++;
// }

// console.log(cnt);


// 1152 (단어의 개수)
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let str = input[0].trim().split(' ');

// if (str == "") {
//   console.log(0);
// }
// else {
//   console.log(str.length);
// }
