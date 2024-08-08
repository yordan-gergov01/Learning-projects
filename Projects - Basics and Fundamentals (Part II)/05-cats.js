function parseCats(catsAsString){
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats = [];

    for(let catAsString of catsAsString){
        let tokens = catAsString.split(" ");
        let cat = new Cat(tokens[0], Number(tokens[1]));
        cats.push(cat);
    }

    for(let cat of cats){
        cat.meow();
    }
}
parseCats(["Meow 2", "Tom 5"]);
