"use strict";

let iterationCount = 5;
while(iterationCount > 0){
    console.log(iterationCount);
    --iterationCount;
}

do {
    console.log(iterationCount * 2);
    iterationCount++;
} while (iterationCount < 5);

for(let i = 1; i <= iterationCount; i++){
    console.log(iterationCount);
    console.log(i);
}

