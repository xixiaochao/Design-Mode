class Plant {
  constructor(name) {
    this.name = name;
  }
  grow() {
    console.log('我正在生长～～～');
  }
}

class Apple extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour
  }
}

class Orange extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour
  }
}

//直接new有什么缺点
//1、耦合 2、依赖具体的实现
//简单工厂
// 1、开闭原则（对修改关闭，对扩展开放）
class Factory {
  static create(type) {
    switch (type) {
      case 'apple':
        return new Apple('苹果', '甜');
      case 'orange':
        return new Orange('橙子', '酸');
      default:
        throw new Error('你要的东西俺没有');
    }
  }
}

let apple = Factory.create('apple');
console.log(apple.flavour);
let orange = Factory.create('orange');
console.log(orange.flavour);