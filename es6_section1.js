// let keyword
let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script

for (var i = 0; i < 5; i++) {

    console.log(i);

}

for (var i = 0; i < 5; i++) {
    (function (j) {
        console.log(j);
    })(i);
}

// var keyword

var v = 'v from global scope'
let l = 'l from global scope'

if (true) {
    var v = 'v from local scope'
    let l = 'l from local scope'

    console.log(`local v: ${v}`);
    console.log(`local l: ${l}`)
}
console.log(`global l: ${l}`);
console.log(`global v: ${v}`);

