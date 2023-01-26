// Class - ES5

// var Person = function() {

// }

// Class - ES6

class Person {
    constructor(name = 'Guest', year = 1900) {
        this.name = name;
        this.year = year;
        console.log('constructor çalıştı.');
    }

    calculateAge() {
        return new Date().getFullYear() - this.year;
    }

    greeting(text) {
        return `${text}, My name is ${this.name} `;
    }
}

// Nesne - Object

const p1 = new Person("Sadık", 1983);
const p2 = new Person("Çınar", 2017);
const p3 = new Person();

console.log(p1.greeting('Hello'));
console.log(p2.greeting('Good morning'));
console.log(p3.greeting('Hello'));

console.log(p1.calculateAge());
console.log(p2.calculateAge());
console.log(p3.calculateAge());

console.log(p1);
console.log(p2);

