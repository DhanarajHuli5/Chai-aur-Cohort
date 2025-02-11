let fname = "Hitesh"
let fname2 = fname
console.log(fname);

fname = "Piyush"
console.log(fname);
console.log(fname2);


let p1 = {
    fname: 'Hitesh'
}

let p2 = p1;
p2.fname = 'Piyush'

console.log(p2);
console.log(p1);


// deep copy of objects 

let p3 = {
    fname: 'Hitesh'
}

let p4 = JSON.parse(JSON.stringify(p3))
p4.fname = 'Piyush'
console.log(p4);
console.log(p3);

console.log(1);
console.log();
