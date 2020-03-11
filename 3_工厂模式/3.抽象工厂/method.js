class Icon {}
class AppleIcon extends Icon {
  render() {
    console.log('绘制苹果图标');

  }
}
class WindowIcon extends Icon {
  render() {
    console.log('绘制windows图标');

  }
}

class Button {}
class AppleButton extends Button {
  render() {
    console.log('绘制苹果按钮');

  }
}
class WindowButton extends Button {
  render() {
    console.log('绘制windows按钮');

  }
}

class Factory {
  createButton() { // 创建按钮

  }
  createIcon() { //创建图标

  }
}
class AppleFactory extends Factory {
  createButton() { // 创建按钮
    return new AppleButton();
  }
  createIcon() { //创建图标
    return new AppleIcon();
  }

}
class WindowFactory extends Factory {
  createButton() { // 创建按钮
    return new WindowButton();
  }
  createIcon() { //创建图标
    return new WindowIcon();
  }
}

/**
 * Java是跨平台的
 * 1、画一个图标
 * 2、画一个按钮
 */

let windowFactory = new WindowFactory();
windowFactory.createIcon().render();
windowFactory.createButton().render();
//=======================================
let appleFactory = new AppleFactory();
appleFactory.createIcon().render();
appleFactory.createButton().render();

/**
 * 1、简单工厂 一般就是一个函数返回类的实例
 * 2、工厂方法 多了工厂类，要想创建产品，需要先创建此工厂的实例，在通过此工厂来创建产品。
 * 3、在抽象工厂中，一个工厂可以创建多种产品
 */