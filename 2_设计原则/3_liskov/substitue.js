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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.buy = function () {
    };
    return Person;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(gender, name) {
        var _this = _super.call(this) || this;
        _this.gender = gender;
        _this.name = name;
        return _this;
    }
    Man.prototype.buy = function () {
        console.log('买车');
    };
    return Man;
}(Person));
var Women = /** @class */ (function (_super) {
    __extends(Women, _super);
    function Women(gender, name) {
        var _this = _super.call(this) || this;
        _this.gender = gender;
        _this.name = name;
        return _this;
    }
    Women.prototype.buy = function () {
        console.log('买包');
    };
    return Women;
}(Person));
var p = new Person();
var man = new Man('男');
var woman = new Women('女');
p.buy();
man.buy();
woman.buy();
var chen = {
    marry: function (p) {
        console.log("\u674E\u6668\u548C" + p.name + "Dating");
    }
};
//chen.marry(new Women('女','范冰冰'));
chen.marry(new Man('男', '范丞丞'));
/**
 * React 虚拟DOM
 *  React.render(<Hello/>);
 *  React.render(<h1/>);
 */ 
