# 设计模式

JavaScript设计模式

## old

### 1_面向对象

#### 什么是面向对象(OO)
- 把客观对象抽象成属性数据和对数据的相关操作，把内部细节和不相关的信息隐藏起来
- 把同一个类型的客观对象的属性数据和操作绑定在一起，封装成类
- 并且允许分成不同层次进行抽象，通过集成实现属性和操作的共享
- + 面向对象的分析 OOA
- + 面向对象的设计 OOD
- + 面向对象的编程 OOP

#### 概念
- 类、对象（实例）
- 父类是公共的
```
class Animal{
  constructor(name){
    this.name = name;
  }
  eat(){
    console.log(`${this.name} eat`);
  }
}
let animal = new Person('动物');
animal.eat();
```

#### 封装(encapsulation)
- 把数据封装起来
- 减少耦合，不该外部访问的不要让外部访问
- 利于数据的接口权限管理
- ES6目前不支持，一般认为_开头的都会私有的，不要使用
- 实现
- + public：公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符
- + protected：受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为
- + private：私有修饰符，只可以在类内使用private修饰的属性和行为

```
npm i typescript -g   执行命令：(tsx 文件名)
mspaint 画图cmd命令
```

#### 继承(inherit)
- 子类继承父类
- 继承可以把公共方法抽离出来，提高复用，减少冗余

#### 多态(polymorphic)
- 同一个接口可以不同实现
- 保持子类的开放性和灵活性
- 面向接口编程

`在java里，方法名相同、参数的数量不同，或者说数量相同但是类型不同也是不同的方法`

### 2_设计原则

#### 什么是设计

- 按哪一种思路或者标志来实现功能
- 功能相同，可以有不同设计的方式
- 需求如果不断变化，设计的作用才能体现出来

#### SOLID五大设计原则

##### S 单一职责原则
`概念`: 单一功能原则认为对象应该仅具又一种单一功能的概念
- Single responsibility principle
- 一个程序只做好一件事
- 如果功能特别负责就进行拆分

##### O 开放封闭原则
`概念`: 开闭原则认为"软件体应该是对于扩展开发的，但是对于修改封闭" 的概念
- Open Closed Principle
- 对扩展开放，对修改关闭
- 增加需求时，扩展新代码，而非修改已有代码
- 这是软件设计的终极目标

##### L 里氏替换原则
`概念`: 里氏替换原则认为"程序中的对象应该是可以在不改变程序正确性的前提下被它的子类所替换" 的概念。参考契约式设计
- Liskov Substitution Principle
- 子类能覆盖父类
- 父类能出现的地方子类就能出现
- JS使用比较少

##### I 接口隔离原则
`概念`: 接口隔离原则认为 "多个特定客户端接口要好于一个宽泛用途的接口"的概念
- Interface Segregation Principle
- 保持接口的单一独立，避免出现胖接口
- JS中没有接口，使用较少
- 类似于单一职责原则，更关注接口

##### D 依赖倒置原则
`概念`: 依赖反转原则认为一个方法应该遵从"依赖于抽象而不是一个实例"的概念。依赖注意是该原则的一种实现方式
- Dependence Inversion Principle
- 面向接口编程，依赖于抽象而不依赖具体实现
- 使用方只关注接口而不关注具体类的实现
- JS中使用较少（没有接口，弱类型）

### 3_工厂模式

#### 简单工厂模式

- 简单工厂模式是由一个工厂对象决定创建出哪一种产品类的实例

jQuery

```javascript
class jQuery {
  constructor(selector) {
    let elements = Array.from(document.querySelectorAll(selector));
    let length = elements ? elements.length : 0;
    for (let i = 0;i<length;i++) {
      this[i] = elements[i];
    }
    this.length = length;
  }
}
window.$ = function(selector){
  return new jQuery(selector);
}
```

React

```javascript
class Vnode{
  constructor(tag,attrs,children){
    this.tag = tag;
    this.attrs = attrs;
    this.children = children;
  }
}
React.createElement = function(tag,attrs,children){
  return new Vnode(tag,attrs,children)
}
```

#### 工厂方法模式

- 工厂方法模式Factory Method，又称多态性工厂模式
- 在工厂方法模式中，核心的工厂类不在负责所有的产品的创建，而是将具体创建的工作交给子类去做

#### 抽象工厂模式

- 抽象工厂模式是指当又多个抽象角色时，使用的一种工厂模式
- 抽象工厂模式可以向客户端提供一个接口，使客户端在不必指定产品的具体的情况下，创建多个产品族中的产品对象

-------------待完善-------------

### 4_单例模式

### 5_适配器模式

### 6_装饰器模式

### 7_代理模式

### 8_外观模式&观察者模式

### 9_状态和策略模式

### 10_原型模式

### 11_桥接模式

### 12_组合模式

### 13_命令模式

### 14_亨元模式

### 15_模板方法模式

## new

### 16_类图

### 17_时序图

### 18_设计原则

### 19_工厂模式

### 20_单例模式

### 21_适配器模式

### 22_装饰器模式

### 23_代理模式

### 24_观察者模式

### 25_门面模式

### 26_迭代器模式
