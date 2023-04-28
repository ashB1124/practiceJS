let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = parseInt(input.shift());
let cnt = 0;

for (let i = 0; i < n; i++) {
   let char = input[i];
   let used = [];
   for (let j = 0; j < char.length; j++) {
      if (!char[j].includes) {
         used.push(char[j]);
      } else if (char[j] != char[j-1]) {
         break;
      }
   }
   cnt++;
}

console.log(cnt);