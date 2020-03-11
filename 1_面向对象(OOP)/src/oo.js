// 类、对象(实例)
// 父类是公共的
class Animal {
    constructor(name){
        this.name = name;
    }
    eat(foot){
        console.log(`${this.name} 吃 ${foot}`);
    }
}

// 子类继承父类
// 继承可以把公共方法抽离出来，提高复用，减少冗余
class Cat extends Animal{
    constructor(){
        super('猫');
    }
    speak(){
        console.log('~喵喵喵');
        
    }
}
class Dog extends Animal{
    constructor(){
        super('狗');
    }
    speak(){
        console.log('~汪汪汪');
        
    }
}

let cat = new Cat();
cat.eat('鱼');
cat.speak();

let dog = new Dog();
dog.eat('肉');
dog.speak();