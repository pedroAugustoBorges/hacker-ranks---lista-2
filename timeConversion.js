'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
   let hora = s.slice(0, 2);
   let  minuto = s.slice(3, 5)
   let  segundo = s.slice(6, 8)
   let time = s.slice (8, 10)
   
   let horaParse = parseInt (hora);
   
   if (time == "AM" && horaParse == 12) {
    horaParse = 0;
    hora = "0" + horaParse
   }else if (time == "PM" && horaParse < 12){
    horaParse += 12;
    hora = String(horaParse).padStart (2, "0")
   }
   
   return hora + ":" + minuto+ ":" + segundo;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
