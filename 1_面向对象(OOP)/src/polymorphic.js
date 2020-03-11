var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//动的作类
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    Animals.prototype.eat = function (food) {
    };
    return Animals;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function (food) {
        console.log(this.name + "\u5403 " + food);
    };
    return Dog;
}(Animals));
var Persons = /** @class */ (function (_super) {
    __extends(Persons, _super);
    function Persons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Persons.prototype.eat = function (food) {
        console.log(this.name + "\u5403 " + food);
    };
    return Persons;
}(Animals));
var d = new Dog('狗');
d.eat('肉');
var p = new Persons('人');
p.eat('烧饼');
