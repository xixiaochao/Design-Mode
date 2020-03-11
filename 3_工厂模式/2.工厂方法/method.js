class Plant {
  constructor(name) {
    this.name = name;
  }

}
class Apple extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}
class Orange extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}
// 工厂一般是接口，规定子类必须实现的方法
// 依赖抽象，而不依赖实现
// 接口只有方法定义，没有具体实现，如果一个类要实现该接口，就必须实现该接口中的所有方法
class Factory {
  create() {

  }
}
class AppleFactory extends Factory {
  static create() {
    return new Apple('苹果','甜');
  }
}
class OrangeFactory extends Factory {
  static create() {
    return new Orange('橘子','酸');
  }
}
// 一般会跟配置对象配合
let settings = {
  'apple':AppleFactory,
  'orange':OrangeFactory
}
let apple = settings['apple'].create();
console.log(apple);
let orange = OrangeFactory.create();
console.log(orange);
