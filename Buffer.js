const buffer = new Buffer(8);
console.log(buffer);

const i1 = new Buffer("Hello");
const i2 = new Buffer(" ");
const i3 = new Buffer("World");
const res = Buffer.concat([i1, i2, i3]).toString();

console.log(Buffer.from(res));
