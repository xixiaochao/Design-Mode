namespace Validation{

}
class Persont{
    private money : number = 100; // 私有的， 自己能访问，自己的子类和其他类都不能访问
    getMoney(){
        console.log(`${this.money}`);
    }
}
let p3 = new Persont();
//console.log(p3.money);
