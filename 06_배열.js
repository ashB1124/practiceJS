// 10818 (최소 최대) - 1
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let arr = input[1].split(' ').map(Number);

// let minValue = 1000001;
// let maxValue = -1000001;
// for (let i = 0; i < n; i++) {
//    if(minValue > arr[i]) minValue = arr[i];
//    if(maxValue < arr[i]) maxValue = arr[i];
// }
// console.log(minValue, maxValue);


// 10818 (최소 최대) - 2
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let data = input[1].split(' ').map(Number);

// let minValue = data.reduce((a, b) => Math.min(a, b));
// let maxValue = data.reduce((a, b) => Math.max(a, b));

// console.log(minValue + " " + maxValue);


// 2562 (최댓값) - 1
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let maxValue = 0;
// let maxIndex = 0;
// for (let i = 0; i < 9; i++) {
//    let data = Number(input[i]);
//    if (maxValue < data) {
//       maxValue = data;
//       maxIndex = i;
//    }
// }
// console.log(maxValue);
// console.log(maxIndex + 1);


// 2562 (최댓값) - 2
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let data = input.map(x => Number(x));
// let max = Math.max(...data);

// console.log(max);
// console.log(input.indexOf(max) + 1);  // 중복이 없는 경우에만 가능


// 3052 (나머지)
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let data = input.map(Number);
// let mySet = new Set();

// for (let i = 0; i < 10; i++) {
//    mySet.add(data[i] % 42);
// }

// console.log(mySet.size);


// 4344 (평균은 넘겠지)
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let testCase = Number(input[0]);
// for ( let i = 1; i <= testCase; i++) {
//    let data = input[i].split(' ').map(Number);
//    let n = data[0];
//    let sum = 0;

//    for( let j = 1; j <= n; j++) {
//       sum += data[j];
//    }

//    let average = sum / n;
//    let cnt = 0;

//    for (let j = 1; j <= n; j++) {
//       if (average < data[j]) cnt++;
//    }
//    console.log(`${(cnt/n*100).toFixed(3)}`);
// }


// 1546 (평균)
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let testCase = Number(input[0]);
// let data = input[1].split(' ').map(Number);

// let max = data.reduce((a, b) => Math.max(a,b));
// let updated = [];

// for (let i = 0; i < testCase; i++) {
//    updated.push(data[i] / max*100);
// }

// console.log(updated.reduce((a,b) => a+b)/testCase);

