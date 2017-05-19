"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.theval = 'red';
        this.custstyle = '.navbar {background - color:' + this.theval + '}';
        this.my_Class = 'custstyle';
        console.log(this.test);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log(this.test);
    };
    return HeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "test", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "brandingmodel", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: 'app/common/header.html',
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.js.map