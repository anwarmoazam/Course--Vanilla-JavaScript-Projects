const today = new Date();

console.log(today.toDateString()); //Sat Jul 13 2024

console.log(today.toLocaleDateString()); //13/7/2024

console.log(Date.now());

const start = Date.now();

function longRunningOperation(){
    for(let i=0; i<10000; i++){
        // console.log(i+1);
    }
}

// longRunningOperation();

const end = Date.now();

const elapsed = end-start;
// console.log(`that took ${elapsed/1000} seconds`);

console.time('stopwatch');

longRunningOperation();

console.timeLog('stopwatch'); //700.34ms

console.time('lap');

longRunningOperation();

console.timeEnd('lap');

longRunningOperation();
console.timeEnd('stopwatch');