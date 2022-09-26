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

