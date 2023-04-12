// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// data = Number(input[0]);

// function check(a) {
//    if (90 <= a && a <= 100) console.log('A');
//    else if (80 <= a && a <= 89) console.log('B');
//    else if (70 <= a && a <= 79) console.log('C');
//    else if (60 <= a && a <= 69) console.log('D');
//    else console.log('E');
// }

// check(data);


// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// let h = Number(input[0]);
// let m = Number(input[1] - 45);

// if (m < 0) {
//    h -= 1;
//    m += 60;
//    if (h < 0) {
//       h = 23;
//    }
//    console.log(`${h} ${m}`);
// }
// else {
//    console.log(`${h} ${m}`);
// }


// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let hour = Number(input[0].split(' ')[0]);
// let minute = Number(input[0].split(' ')[1]);

// if (minute < 45 ) {
//    hour -= 1;
//    minute += 15;
//    if (hour < 0) hour = 23;
// }
// else minute -= 45;

// console.log(hour + " " + minute);
