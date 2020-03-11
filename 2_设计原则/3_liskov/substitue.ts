class Person {
    constructor(){
        
    }
    buy(){

    }
}
class Man extends Person{
    constructor(gender,name) {
        super();
        this.gender = gender;
        this.name = name;
    }
    buy() {
        console.log('买车');
    }
}
class Women extends Person{
    constructor(gender,name){
        super();
        this.gender = gender;
        this.name = name;
    }
    buy() {
        console.log('买包');
    }
}
let p = new Person();
let man = new Man('男');
let woman = new Women('女');
p.buy();
man.buy();
woman.buy();

let chen = {
    marry(p:Person){
        console.log(`李晨和${p.name}Dating`);
        
    }
};
//chen.marry(new Women('女','范冰冰'));
chen.marry(new Man('男','范丞丞'));

/**
 * React 虚拟DOM
 *  React.render(<Hello/>);
 *  React.render(<h1/>);
 */