webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_character_create_character_component__ = __webpack_require__("../../../../../src/app/create-character/create-character.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'characters', component: __WEBPACK_IMPORTED_MODULE_2__tabs_tabs_component__["a" /* TabsComponent */], children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: ':chosenSide', component: __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */] }
        ]
    },
    { path: 'new-character', component: __WEBPACK_IMPORTED_MODULE_4__create_character_create_character_component__["a" /* CreateCharacterComponent */] },
    { path: '**', redirectTo: '/characters' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    padding: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-6\">\n      <!-- <app-create-character></app-create-character> -->\n      <app-header></app-header>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <!-- <app-tabs></app-tabs> -->\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_star_wars_service__ = __webpack_require__("../../../../../src/app/services/star-wars.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(starWarsService) {
        this.starWarsService = starWarsService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.starWarsService.fetchCharacters();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_star_wars_service__["a" /* StarWarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_star_wars_service__["a" /* StarWarsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_item_component__ = __webpack_require__("../../../../../src/app/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_star_wars_service__ = __webpack_require__("../../../../../src/app/services/star-wars.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_character_create_character_component__ = __webpack_require__("../../../../../src/app/create-character/create-character.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__tabs_tabs_component__["a" /* TabsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_9__create_character_create_character_component__["a" /* CreateCharacterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_star_wars_service__["a" /* StarWarsService */], __WEBPACK_IMPORTED_MODULE_8__services_log_service__["a" /* LogService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/create-character/create-character.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ng-invalid and ng-touched are angular css classes:\r\n    1. ng-invalid is assigned when the required field is empty\r\n    2. ng-touched is assigned when ng-untouched field is being clicked on \r\n*/\r\ninput.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n\r\nselect.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n\r\n.help-block {\r\n    color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-character/create-character.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onFormSubmit(testFormControl)\" #testFormControl=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"name\">Character Name</label>\n    <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" ngModel required #testNameControl=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"testNameControl.invalid && testNameControl.touched\">Please enter character's\n      name</span>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"side\">Choose Side</label>\n    <select name=\"side\" id=\"side\" class=\"form-control\" ngModel required #testSideControl=\"ngModel\">\n      <option *ngFor=\"let i of availableSides\" [value]=\"i.value\">\n        {{i.display}}</option>\n    </select>\n    <span class=\"help-block\" *ngIf=\"testSideControl.invalid && testSideControl.touched\">Please choose character's\n      side</span>\n  </div>\n  <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"testFormControl.invalid\">Add Character</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/create-character/create-character.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_star_wars_service__ = __webpack_require__("../../../../../src/app/services/star-wars.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCharacterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateCharacterComponent = (function () {
    function CreateCharacterComponent(starWarsService) {
        this.starWarsService = starWarsService;
        this.availableSides = [{ display: 'None', value: '' }, { display: 'Light', value: 'light' }, { display: 'Dark', value: 'dark' }];
    }
    CreateCharacterComponent.prototype.ngOnInit = function () {
    };
    CreateCharacterComponent.prototype.onFormSubmit = function (submittedForm) {
        // required parameter provided in HTML sets .invalid property to true if field is empty
        if (submittedForm.invalid) {
            return;
        }
        console.log(submittedForm.value);
        var name = submittedForm.value.name;
        var side = submittedForm.value.side;
        this.starWarsService.addCharacter(name, side);
    };
    return CreateCharacterComponent;
}());
CreateCharacterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-create-character',
        template: __webpack_require__("../../../../../src/app/create-character/create-character.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-character/create-character.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_star_wars_service__["a" /* StarWarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_star_wars_service__["a" /* StarWarsService */]) === "function" && _a || Object])
], CreateCharacterComponent);

var _a;
//# sourceMappingURL=create-character.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills\">\n  <li class=\"nav-item\" routerLinkActive=\"active\">\n    <a class=\"nav-link active\" aria-current=\"page\" routerLink=\"/characters\">Star Wars Characters</a>\n  </li>\n  <li class=\"nav-item\" routerLinkActive=\"active\">\n    <a class=\"nav-link\" routerLink=\"new-character\">New Character</a>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"list-group-item\">\n  <h4 class=\"list-group-item-heading\">{{character.name}}</h4>\n  <div>\n    <button class=\"btn btn-primary\" (click)=\"onAssign('light')\">Light</button>\n    <button class=\"btn btn-danger\" (click)=\"onAssign('dark')\">Dark</button>\n  </div>\n</a>"

/***/ }),

/***/ "../../../../../src/app/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_star_wars_service__ = __webpack_require__("../../../../../src/app/services/star-wars.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = (function () {
    function ItemComponent(starWarsService) {
        this.starWarsService = starWarsService;
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.onAssign = function (side) {
        this.starWarsService.onSideChosen({ name: this.character.name, side: side });
    };
    return ItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ItemComponent.prototype, "character", void 0);
ItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-item',
        template: __webpack_require__("../../../../../src/app/item/item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/item/item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_star_wars_service__["a" /* StarWarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_star_wars_service__["a" /* StarWarsService */]) === "function" && _a || Object])
], ItemComponent);

var _a;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <app-item *ngFor=\"let char of characters\" [character]=\"char\"></app-item>\n</div>"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_star_wars_service__ = __webpack_require__("../../../../../src/app/services/star-wars.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = (function () {
    function ListComponent(activatedRoute, starWarsService) {
        this.activatedRoute = activatedRoute;
        this.starWarsService = starWarsService;
        this.characters = [];
        this.loadedSide = 'all';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this.characters = _this.starWarsService.getCharacters(param.chosenSide);
            _this.loadedSide = param.chosenSide;
        });
        this.subscription = this.starWarsService.charactersChanged.subscribe(function () {
            _this.characters = _this.starWarsService.getCharacters(_this.loadedSide);
        });
    };
    ListComponent.prototype.ngOnDestroy = function () {
        // as soon as the updated character triggers, remove subscription from memory, to avoid memory pollution
        this.subscription.unsubscribe();
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_star_wars_service__["a" /* StarWarsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_star_wars_service__["a" /* StarWarsService */]) === "function" && _b || Object])
], ListComponent);

var _a, _b;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/log.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogService = (function () {
    function LogService() {
    }
    LogService.prototype.logText = function (text) {
        console.log(text);
    };
    return LogService;
}());
LogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LogService);

//# sourceMappingURL=log.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/star-wars.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarWarsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StarWarsService = (function () {
    function StarWarsService(logService, http) {
        this.logService = logService;
        this.http = http;
        this.characters = [
            { name: 'Luke Skywalker', side: '' },
            { name: 'Darth Vader', side: '' },
        ];
        this.charactersChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    StarWarsService.prototype.getCharacters = function (chosenList) {
        if (chosenList === 'all') {
            return this.characters.slice();
        }
        return this.characters.filter(function (i) {
            return i.side === chosenList;
        });
    };
    StarWarsService.prototype.fetchCharacters = function () {
        var _this = this;
        this.http.get("https://swapi.dev/api/people")
            .map(function (response) {
            var data = response.json();
            var extractedCharacters = data.results;
            var chars = extractedCharacters.map(function (i) {
                return { name: i.name, side: '' };
            });
            return chars;
        })
            .subscribe(function (data) {
            console.log("TEST 2", data);
            _this.characters = data;
            _this.charactersChanged.next();
        });
    };
    // example of POST request
    StarWarsService.prototype.updateCharacters = function () {
        this.postData = { description: 'Data I want to pass, could be any kind of data/ object' };
        this.http.post('https://my-api.com/endpoint', this.postData)
            .map(function (response) {
            // map() is totally optional, just subscribe() without it!
            return response.json(); // fetch the body of the response - this of course also works for post requests
        })
            .subscribe(function (transformedData) {
            // Use your response data here
            console.log(transformedData);
        });
    };
    StarWarsService.prototype.onSideChosen = function (passedCharacterInfo) {
        var pos = this.characters.findIndex(function (char) {
            return char.name === passedCharacterInfo.name;
        });
        this.characters[pos].side = passedCharacterInfo.side;
        this.charactersChanged.next();
        this.logService.logText("Changed side of " + passedCharacterInfo.name + ", the chosen side now is: " + passedCharacterInfo.side);
    };
    StarWarsService.prototype.addCharacter = function (name, side) {
        var pos = this.characters.findIndex(function (i) {
            return i.name === name;
        });
        console.log("POSITION", pos);
        if (pos !== -1) {
            return;
        }
        var newChar = { name: name, side: side };
        this.characters.push(newChar);
    };
    return StarWarsService;
}());
StarWarsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__log_service__["a" /* LogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object])
], StarWarsService);

var _a, _b;
//# sourceMappingURL=star-wars.service.js.map

/***/ }),

/***/ "../../../../../src/app/tabs/tabs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"nav nav-tabs\">\n    <li role=\"presentation\" routerLinkActive=\"active\">\n      <!-- <a (click)=\"onChoose('all')\" style=\"cursor: pointer\">All</a> -->\n      <a routerLink=\"/characters/all\">All</a>\n    </li>\n    <li role=\"presentation\" routerLinkActive=\"active\">\n      <!-- <a (click)=\"onChoose('light')\" style=\"cursor: pointer\">Light</a> -->\n      <a routerLink=\"/characters/light\">Light</a>\n    </li>\n    <li role=\"presentation\" routerLinkActive=\"active\">\n      <!-- <a (click)=\"onChoose('dark')\" style=\"cursor: pointer\">Dark</a> -->\n      <a routerLink=\"/characters/dark\">Dark</a>\n    </li>\n  </nav>\n  <!-- <app-list [characters]=\"getCharacters()\"></app-list> -->\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsComponent = (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    return TabsComponent;
}());
TabsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-tabs',
        template: __webpack_require__("../../../../../src/app/tabs/tabs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tabs/tabs.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TabsComponent);

//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map