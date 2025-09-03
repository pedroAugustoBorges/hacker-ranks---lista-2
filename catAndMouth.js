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

function catAndMouse(x, y, z) {
    let distA, distB;

    if (x > z) {
        distA = x - z;
    } else {
        distA = z - x;
    }

    if (y > z) {
        distB = y - z;
    } else {
        distB = z - y;
    }

    if (distA < distB) {
        return "Cat A";
    } else if (distB < distA) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const xyz = readLine().replace(/\s+$/g, '').split(' ');

        const x = parseInt(xyz[0], 10);
        const y = parseInt(xyz[1], 10);
        const z = parseInt(xyz[2], 10);

        const result = catAndMouse(x, y, z);

        ws.write(result + '\n');
    }

    ws.end();
}
