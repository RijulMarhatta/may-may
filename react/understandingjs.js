// let const //

var mydob = 'june';
console.log(mydob);
// still works//
let mydob2 = 'jan';
console.log(mydob2);
// let const //

//arrow functions

function printmysol(sol) {
    console.log(sol);
}
printmysol('sol22');

const printmynewsol = newsol => {
    console.log(newsol);
}
printmynewsol('sol245');

const printmynewsol_2 = () => {
    console.log('sol909');
}
printmynewsol_2();


const printmynewsolwithplanet = (sol, planet) => {
    console.log(sol, planet);
}
printmynewsolwithplanet(723, 'mars');


const multiply = (number) => {
    return number * 2;
}
console.log(multiply(2989834));

const multiplynew = number => number * 219;
console.log(multiplynew(8729))
    //arrow functions


// inheritance  and classes //
class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }
}
class Person extends Human {
    constructor() {
        super();
        this.name = 'max';
        this.gender = 'female';
    }
    printmyName() {
        console.log(this.name);
    }
}
const person = new Person();
person.printmyName();
person.printGender();

// inheritance//

const number = [1, 2, 3, 4];
const newn = [...number, 5];
// const newn = [number, 5]; 

// spread operators 

console.log(newn);
// console.log(newn.length);


const xa = {
    naam: 'mahani'
};
const xaa = {
    gender: 'male'
}

const xax = {
    ...xa,
    ...xaa,
    age: 28
}
console.log(xax);

const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));


// array destructing // 
[a, b] = ['hello', 'max']

console.log(a);
console.log(b)


const numbers = [1, 2, 3, 4];
[num1, , num3] = number;
console.log(num1, num3)

// array destructing //

// object destructing // 
// { names } = { names: 'max', age: 28 }
// console.log(names) // max
// console.log(age) // undefined
// object destructing //



// Reference and Primitive Types Refresher


const personn = {
    namess: 'maxx'
};

const secperson = personn;

//personn.namess = 'manu';

console.log(secperson)

// Reference and Primitive Types Refresher


// refresh array function//

const numberss = [1, 2, 3];

const doublenumbers = numberss.map((num) => {
    return num * 2;
});

console.log(numberss);
console.log(doublenumbers);

// refresh array function//
