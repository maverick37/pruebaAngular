"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angular2_1 = require("angular2/angular2");
//Protected-Content Component
var ProtectedComponent = (function () {
    function ProtectedComponent() {
    }
    return ProtectedComponent;
}());
ProtectedComponent = __decorate([
    angular2_1.Component({
        selector: ' protected-component'
    }),
    angular2_1.View({
        templateUrl: 'app/views/protected-component.html'
    })
], ProtectedComponent);
//Main Component
var Main = (function () {
    function Main() {
        this.isLogged = false;
    }
    Main.prototype.login = function (username, password) {
        if (username.value == "test" && password.value == "test") {
            this.isLogged = true;
        }
    };
    Main.prototype.logout = function () {
        this.isLogged = false;
    };
    return Main;
}());
Main = __decorate([
    angular2_1.Component({
        selector: 'main'
    }),
    angular2_1.View({
        templateUrl: 'app/views/main.html',
        directives: [ProtectedComponent, angular2_1.NgIf]
    })
], Main);
angular2_1.bootstrap(Main);
