const process = require('process');
// EXEMPLO 7: ADD TIMEOUT
setTimeout(() => console.log("timeout 1"), 0);
setTimeout(() => console.log("timeout 2"), 0);
setTimeout(() => console.log("timeout 3"), 0);

// EXEMPLO 6: E QUANDO PROMISES DISPARAM CALLBACKS DA MICROTASK QUEUE?
process.nextTick(() => {
    console.log("process next tick 1");
})
process.nextTick(() => {
    process.nextTick(() => {
        console.log("process next tick 3 (dentro de 2)");
    })
    console.log("process next tick 2");
})
process.nextTick(() => {
    console.log("process next tick 4");
})

Promise.resolve().then(() => {
    console.log("promise callback 1");
});
Promise.resolve().then(() => {
    process.nextTick(() => {
        console.log("process next tick 5 (dentro de promise 2)");
    })
    console.log("promise callback 2");
});
Promise.resolve().then(() => {
    console.log("promise callback 3");
});


// EXEMPLO 5: NEXT TICK >>> PROMISES
// Promise.resolve().then(() => {
//     console.log("promise callback 1");
// });
// process.nextTick(() => {
//     console.log("process next tick 1");
// })

// EXEMPLO 4: ORDEM DE AVALIAÇÃO
// console.log("console.log 1");
// process.nextTick(() => {
//     console.log("process next tick 1");
// })
// console.log("console.log 2");

// // EXEMPLO 2: EVENT QUEUE
// setTimeout(() => {
//     console.log("console.log 4");
// }, 3000);

// // EXEMPLO 1: CALL STACK

// console.log("console.log 1");
// console.log("console.log 2");
// console.log("console.log 3");

// // EXEMPLO 3: BLOCKING CODE
// while (1) {}