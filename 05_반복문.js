// 8393 (합)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let summary = 0;

// for (let i = 1; i <= n; i++) {
//   summary += i; 
// }

// console.log(summary);


// 2739 (구구단)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let testCase = Number(input[0]);
// let answer = '';

// for (let t = 1; t <= testCase; t++) {
//    let data = input[t].split(' ');
//    let a = Number(data[0]);
//    let b = Number(data[1]);
//    answer += a + b + '\n'; 
// }

// console.log(answer);


// 25314 (코딩은 체육과목입니다.)
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let temp = Number(input[0]);
// let res = "";

// for (let i = 0; i < parseInt(temp/4); i++) {
//     res += "long ";
// }

// console.log(res + "int");

// 11021 (A+B - 7) 
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let testCase = Number(input[0]);

// for (let i = 1; i <= testCase; i++) {
//    let data = input[i].split(' ');
//    let a = Number(data[0]);
//    let b = Number(data[1]);

//    console.log("Case #" + i + ": " + (a + b));
// }


// 2439 (별 찍기 - 2)
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let temp = parseInt(input.shift());
// let answer = "";

// for (let enter = 1; enter <= temp; enter++) {
//   for (let blank = 0; blank < temp - enter; blank++) {
//     answer += " ";
//   }
//   for (let star = 0; star < enter; star++) {
//     answer += "*";
//   }
//   answer += "\n";
// }

// console.log(answer);


// 10952 (A + B -5)
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let anwer = "";

// while(input[0] !== "0 0") {
//    let data = input.shift().split(' ').map(Number);
//    answer += data[0] + data[1] + "\n";
// }

// console.log(answer);

// 10951 (A + B - 4)
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let answer = "";

// for (let i = 0; i < input.length; i++) {
//    let data = input[i].split(' ').map(Number);
//    answer += data[0] + data[1] + '\n';
// }

// console.log(answer);