
let title = 'Jack and Jill Went Up the Hill';

// Start With
console.log(title.startsWith('Jack'));
console.log(title.startsWith('jack'));
console.log(title.startsWith('Jill', 10));

console.log();

// End With
console.log(title.endsWith('Hill'));
console.log(title.endsWith('hill'));
console.log(title.endsWith('Up', 21));

console.log();

// Include
let email = 'admin@example.com';
console.log(email.includes('@'));

let str = 'JavaScript String';
console.log(str.includes('Script'));
console.log(str.includes('script'));
console.log(str.includes('Script', 5));