"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Demo = /** @class */ (function () {
    function Demo(fiestName, lastName) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    Demo.prototype.greeter = function () {
        return "欢迎来到我的世界" + this.firstName + " " + this.lastName;
    };
    return Demo;
}());
exports.default = Demo;
//# sourceMappingURL=index.js.map