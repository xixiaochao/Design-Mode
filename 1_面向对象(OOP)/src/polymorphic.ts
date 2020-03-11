//动的作类
class Animals{
    name:string;
    constructor(name){
        this.name = name;
    }
    eat(food){

    }
}
class Dog extends Animals{
    eat(food){
        console.log(`${this.name}吃 ${food}`);
    }
}
class Persons extends Animals{
    eat(food){
        console.log(`${this.name}吃 ${food}`);
    }
}
let d = new Dog('狗');
d.eat('肉');
let p = new Persons('人');
p.eat('烧饼');