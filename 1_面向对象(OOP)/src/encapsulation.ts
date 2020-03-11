// function greetings(user:string){
 
//     return 'hello' + user;
// }
// let username = '席小超'
// console.log(greetings(username));

/**
 *  public:
 *  protected:
 *  private:
 */
class Person{
    public name:string; // 公有属性， 自己，自己的子类和其他类都可以访问
    protected age:number; // 受保护的属性 自己 自己的子类能访问，其他类不能访问
    private money:number; // 私有的， 自己能访问，自己的子类和其他类都不能访问
    constructor(name,age,money){
        this.name = name;
        this.age = age;
        this.money = money;
    }
}

class Student extends Person{
    public num : number;
    constructor(name,age,money,num){
        super(name,age,money);
        this.num = num;
    }
    getName(){
        // 在子类中可以访问父类的公有属性
        console.log(`我的名字叫 ${this.name}`);
    }
    getAge(){
        console.log(`我今年 ${this.age} 了`);
    }
    // getMoney(){
    //     console.log(`我的私房钱是 ${this.money}`);
    // }
}
let s1 = new Student('zfpx',10,100,1);
// 在其他类中可以访问父类的公有属性
console.log(s1.name);
// 属性“age”受保护，只能在类“Person”及其子类中访问。
//console.log(s1.age);
// 属性“money”为私有属性，只能在类“Person”中访问。
//console.log(s1.money);