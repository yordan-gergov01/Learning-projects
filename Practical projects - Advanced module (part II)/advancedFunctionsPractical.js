//call(), apply(), bind();

let book1 = {
    title: 'Book1',
    author: 'John',
     describe(){
        return `The book ${this.title} was written by ${this.author}.`;
    }
};

let book2 = {
    title: 'Book2',
    author: 'David',
     describe(){
        return `The book ${this.title} was written by ${this.author}.`;
    }
};

function printBookInfo (prefix, suffix){
    return `${prefix} The book ${this.title} was written by ${this.author}. ${suffix}`;
}

console.log(printBookInfo.call(book1, '-->', '!!!'));
console.log(printBookInfo.call(book2, '-->', '!!!'));

let bindMetod = printBookInfo.bind(book1, '-->');
console.log(bindMetod('!!!'));

//Closure

function createCounter (){
    let counter = 0;
    return function (){
        return counter++;
    }
}
let newCounter = createCounter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

//Currying

function multiply (a){
    return(b) =>{
        return(c) =>{
            return a * b * c;
        }
    }
    
}
console.log(multiply(2)(3)(4));

//Higher-Order 

let numbers = [1, 2, 3, 4, 5, 6];

function filterEvens (numbers){
    return numbers.filter((num) => num % 2 === 0);
    
}
let evens = filterEvens(numbers);
console.log(evens);

function squareNumbers (evens){
    return evens.map((x) => x * x);
}
let mapped = squareNumbers(evens);
console.log(mapped);

//Explicit Binding

let calculator = {
    a: 5,
    b: 3,
    add: function() {
        return this.a + this.b;
    }
};

let calculator2 = { a: 10, b: 7 };

let called = calculator.add.call(calculator2);
console.log(called);

let applied = calculator.add.apply(calculator2);
console.log(applied);

let binded = calculator.add.bind(calculator2);
console.log(binded());