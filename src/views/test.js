async function async1() {
    console.log('async1 start');
}
async function async2() {
    await async1();
    console.log('async2');
}
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0)
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
    console.log('promise2');
}).then(async function () {
    await async2();
    console.log('promise3');
});
console.log('script end');


/*
* start
* p1
* p2
* end
* a1
* a2
* p3
* settimeout
* */