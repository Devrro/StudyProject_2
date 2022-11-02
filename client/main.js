"use strict";
(self["webpackChunkhealth_care_frontend"] = self["webpackChunkhealth_care_frontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ 3412);
/* harmony import */ var _components_board_user_board_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/board-user/board-user.component */ 7189);
/* harmony import */ var _services_guards_user_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/guards/user.guard */ 803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, canActivate: [_services_guards_user_guard__WEBPACK_IMPORTED_MODULE_4__.UserGuard] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, canActivate: [_services_guards_user_guard__WEBPACK_IMPORTED_MODULE_4__.UserGuard] },
    { path: 'user', component: _components_board_user_board_user_component__WEBPACK_IMPORTED_MODULE_3__.BoardUserComponent },
    { path: 'patient', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'admin', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/token-storage.service */ 2913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function AppComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Admin Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AppComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Moderator Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AppComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 13)(1, "li", 4)(2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4)(5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function AppComponent_ul_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 13)(1, "li", 4)(2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4)(5, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ul_13_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.logOut()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "LogOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.username);
} }
class AppComponent {
    constructor(tokenStorageService) {
        this.tokenStorageService = tokenStorageService;
        this.title = 'health_care_frontend';
        this.roles = [];
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
    }
    ngOnInit() {
        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            // this.roles = user.roles
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            if (user) {
                if ("profile" in user) {
                    this.username = user.profile.first_name;
                }
            }
        }
    }
    logOut() {
        this.tokenStorageService.signOut();
        window.location.reload();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 5, consts: [["id", "app"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], [1, "navbar-brand", "noselect"], ["routerLinkActive", "active", 1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "/home", "routerLink", "home", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], ["href", "/user", "class", "nav-link", "routerLink", "user", 4, "ngIf"], ["class", "navbar-nav ml-auto", 4, "ngIf"], [1, "container"], ["href", "/admin", "routerLink", "admin", 1, "nav-link"], ["href", "/mod", "routerLink", "mod", 1, "nav-link"], ["href", "/user", "routerLink", "user", 1, "nav-link"], [1, "navbar-nav", "ml-auto"], ["href", "/register", "routerLink", "register", 1, "nav-link"], ["href", "/login", "routerLink", "login", 1, "nav-link"], ["href", "/profile", "routerLink", "profile", 1, "nav-link"], ["href", "", 1, "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "DocHealth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3)(5, "li", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_li_8_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppComponent_li_9_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_a_11_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_ul_12_Template, 7, 0, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_ul_13_Template, 7, 1, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAdminBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showModeratorBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavbar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ 3412);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ 7094);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/board-admin/board-admin.component */ 2926);
/* harmony import */ var _components_board_user_board_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/board-user/board-user.component */ 7189);
/* harmony import */ var _components_board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/board-moderator/board-moderator.component */ 4436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/interceptors/auth.interceptor */ 3323);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__.AuthServiceProvider, imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent,
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent,
        _components_board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_6__.BoardAdminComponent,
        _components_board_user_board_user_component__WEBPACK_IMPORTED_MODULE_7__.BoardUserComponent,
        _components_board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_8__.BoardModeratorComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 2926:
/*!*****************************************************************!*\
  !*** ./src/app/components/board-admin/board-admin.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardAdminComponent": () => (/* binding */ BoardAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BoardAdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
BoardAdminComponent.ɵfac = function BoardAdminComponent_Factory(t) { return new (t || BoardAdminComponent)(); };
BoardAdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardAdminComponent, selectors: [["app-board-admin"]], decls: 2, vars: 0, consts: [[1, "container"], [1, "jumbotron"]], template: function BoardAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2FyZC1hZG1pbi5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 4436:
/*!*************************************************************************!*\
  !*** ./src/app/components/board-moderator/board-moderator.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardModeratorComponent": () => (/* binding */ BoardModeratorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BoardModeratorComponent {
    constructor() { }
    ngOnInit() {
    }
}
BoardModeratorComponent.ɵfac = function BoardModeratorComponent_Factory(t) { return new (t || BoardModeratorComponent)(); };
BoardModeratorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardModeratorComponent, selectors: [["app-board-moderator"]], decls: 2, vars: 0, template: function BoardModeratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "board-moderator works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2FyZC1tb2RlcmF0b3IuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 7189:
/*!***************************************************************!*\
  !*** ./src/app/components/board-user/board-user.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardUserComponent": () => (/* binding */ BoardUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function BoardUserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5)(6, "li", 6)(7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6)(12, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Second name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6)(17, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Last name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9)(22, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Age: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div")(27, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "USER PROFILE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.profile.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.profile.second_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.profile.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.profile.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "#");
} }
class BoardUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
BoardUserComponent.ɵfac = function BoardUserComponent_Factory(t) { return new (t || BoardUserComponent)(); };
BoardUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardUserComponent, selectors: [["app-board-user"]], inputs: { user: "user" }, decls: 1, vars: 1, consts: [["class", "card", "style", "width: 18rem;", 4, "ngIf"], [1, "card", 2, "width", "18rem"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "list-group"], [1, "list-group-item", "text-capitalize"], [1, "d-flex", "justify-content-between"], [1, "fw-bold"], [1, "list-group-item"], [1, "btn", "btn-primary", "mt-2", 3, "routerLink"]], template: function BoardUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BoardUserComponent_div_0_Template, 29, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2FyZC11c2VyLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/user.service */ 2996);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board-user/board-user.component */ 7189);




function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function HomeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Hello");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function HomeComponent_ng_template_5_app_board_user_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-board-user", 6);
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", user_r7);
} }
function HomeComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "List of users");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HomeComponent_ng_template_5_app_board_user_4_Template, 1, 1, "app-board-user", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.list_of_users);
} }
class HomeComponent {
    constructor(UserService) {
        this.UserService = UserService;
    }
    ngOnInit() {
        this.UserService.getUsers().subscribe({
            next: (data) => {
                this.list_of_users = data.results;
            },
            error: (err) => {
                this.list_of_users = JSON.parse(err.error.message);
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 4, consts: [[1, "container"], [4, "ngIf", "ngIfElse"], ["welcome_screen", ""], ["users_screen", ""], [1, "container", "d-flex", "flex-wrap", "gap-1", "justify-content-start", 2, "margin-top", "120px"], [3, "user", 4, "ngFor", "ngForOf"], [3, "user"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_ng_template_3_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HomeComponent_ng_template_5_Template, 5, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.list_of_users)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.list_of_users)("ngIfElse", _r4);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_1__.BoardUserComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ 2996);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/token-storage.service */ 2913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function LoginComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.formLogin.valid && ctx_r3.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6)(3, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.formLogin);
} }
function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Logged in as ", ctx_r1.user.profile.first_name, " ", ctx_r1.user.profile.last_name, "");
} }
class LoginComponent {
    constructor(authService, userService, tokenStorage) {
        this.authService = authService;
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('111@gmail.com'),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('1111')
        });
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errMsg = '';
        this.roles = [];
    }
    ngOnInit() {
        if (this.tokenStorage.getAccessToken()) {
            const user = this.tokenStorage.getUser();
            if (user) {
                this.user = user;
            }
            this.isLoggedIn = true;
        }
    }
    onSubmit() {
        const { email, password } = this.formLogin.getRawValue();
        this.authService.login(email, password).subscribe({
            next: (value) => {
                this.tokenStorage.SaveTokens(value);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.userService.getMeUser().subscribe({
                    next: (value) => {
                        let user = value.results[0];
                        this.tokenStorage.saveUser(user);
                        this.user = user;
                    },
                    error: (err) => {
                        this.errMsg = err.error.message;
                        this.isLoginFailed = true;
                    }
                });
            },
            error: (err) => {
                this.errMsg = err.error.message;
                this.isLoginFailed = true;
            },
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 4, vars: 2, consts: [[1, "col-md-12"], [1, "card", "card-container"], ["name", "form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "text", "name", "username", "formControlName", "email", "required", "", 1, "form-control"], ["for", "password"], ["id", "password", "type", "password", "name", "password", "formControlName", "password", "required", "", "minlength", "4", 1, "form-control"], [1, "btn", "btn-primary", "btn-block"], [1, "alert", "alert-success"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LoginComponent_form_2_Template, 13, 1, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && ctx.user);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 7094:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/user.service */ 2996);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/token-storage.service */ 2913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "header", 3)(2, "h3")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p")(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.currentUser.profile.first_name, " ", ctx_r0.currentUser.profile.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.email, " ");
} }
function ProfileComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Please login. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class ProfileComponent {
    constructor(userService, tokenStorageService) {
        this.userService = userService;
        this.tokenStorageService = tokenStorageService;
    }
    ngOnInit() {
        this.userService.getMeUser().subscribe({
            next: (value) => {
                const user = value.results[0];
                this.tokenStorageService.saveUser(user);
            },
            error: (value) => { }
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 3, vars: 2, consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["loggedOut", ""], [1, "container"], [1, "jumbotron"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 10, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 3412:
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function RegisterComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4)(2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Second name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4)(21, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.registerForm);
} }
class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('118@gmail.com'),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('111111'),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('serhiy'),
            second_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('terlotskiy'),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('andriy'),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('18'),
        });
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.errMsg = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        let user = this.registerForm.getRawValue();
        let user_formatted = {
            email: user.email,
            password: user.password,
            profile: {
                first_name: user.first_name,
                second_name: user.second_name,
                last_name: user.last_name,
                age: user.age,
            }
        };
        console.log(user_formatted);
        this.authService.register(user_formatted).subscribe({
            next: (value) => {
                console.log(user_formatted);
                console.log(value);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
            },
            error: (err) => {
                console.log(err);
                this.errMsg = err.error.message;
                this.isSignUpFailed = true;
            }
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 3, vars: 1, consts: [[1, "col-md-12"], [1, "card"], ["novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "text", "id", "email", "required", "", "email", "", "formControlName", "email", 1, "form-control"], ["for", "password"], ["type", "text", "id", "password", "required", "", "formControlName", "password", 1, "form-control"], ["for", "age"], ["type", "text", "id", "age", "required", "", "formControlName", "age", 1, "form-control"], ["for", "first_name"], ["type", "text", "id", "first_name", "required", "", "formControlName", "first_name", 1, "form-control"], ["for", "second_name"], ["type", "text", "id", "second_name", "required", "", "formControlName", "second_name", 1, "form-control"], ["for", "last_name"], ["type", "text", "id", "last_name", "required", "", "formControlName", "last_name", 1, "form-control"], [1, "btn", "btn-primary", "btn-block"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_form_2_Template, 23, 1, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSuccessful);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 263:
/*!****************************************!*\
  !*** ./src/constants/url.constants.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boards_url": () => (/* binding */ boards_url),
/* harmony export */   "user_urls": () => (/* binding */ user_urls)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);

const { URL } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
const user_urls = {
    register: `${URL}/users`,
    login: `${URL}/auth/token`,
    refresh: `${URL}/auth/token/refresh`
};
const boards_url = {
    me: `${URL}/users/me`,
    all_users: `${URL}/users/all`,
    all_doctors: `${URL}/doctors`,
    all_patients: `${URL}/patient`,
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    URL: 'http://localhost:8000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 2567:
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/url.constants */ 263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(email, password) {
        return this.http.post(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.user_urls.login}`, { email: email, password: password });
    }
    register(user) {
        return this.http.post(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.user_urls.register}`, { ...user });
    }
    refreshToken(token) {
        return this.http.post(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.user_urls.refresh}`, token);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 803:
/*!*******************************************!*\
  !*** ./src/services/guards/user.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserGuard": () => (/* binding */ UserGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class UserGuard {
    canActivate(route, state) {
        return true;
    }
}
UserGuard.ɵfac = function UserGuard_Factory(t) { return new (t || UserGuard)(); };
UserGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserGuard, factory: UserGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3323:
/*!*******************************************************!*\
  !*** ./src/services/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor),
/* harmony export */   "AuthServiceProvider": () => (/* binding */ AuthServiceProvider)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../token-storage.service */ 2913);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ 2567);





const TOKEN_HEADER_TYPE = 'Authorization';
class AuthInterceptor {
    constructor(tokenStorage, authService) {
        this.tokenStorage = tokenStorage;
        this.authService = authService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    intercept(request, next) {
        let authReq = request;
        const token = this.tokenStorage.getAccessToken();
        if (token != null) {
            authReq = this.AddTokenHeader(request, token);
        }
        return next.handle(authReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse && !authReq.url.includes('register') && error.status === 401) {
                return this.handle401error(authReq, next);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }));
    }
    AddTokenHeader(request, token) {
        return request.clone({ headers: request.headers.set(TOKEN_HEADER_TYPE, 'Bearer ' + token) });
    }
    handle401error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            const refresh_token = this.tokenStorage.getRefreshToken();
            if (refresh_token) {
                return this.authService.refreshToken(refresh_token).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)((tokens) => {
                    this.isRefreshing = false;
                    this.tokenStorage.SaveTokens(tokens);
                    this.refreshTokenSubject.next(tokens.refresh);
                    return next.handle(this.AddTokenHeader(request, tokens.access));
                }));
            }
            else {
                (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)((err) => {
                    this.isRefreshing = false;
                    this.tokenStorage.signOut();
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
                });
            }
        }
        return this.refreshTokenSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(token => token !== null), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)((token) => next.handle(this.AddTokenHeader(request, token))));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
const AuthServiceProvider = [
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    }
];


/***/ }),

/***/ 2913:
/*!***********************************************!*\
  !*** ./src/services/token-storage.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenStorageService": () => (/* binding */ TokenStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const TOKEN_KEY = 'auth_token';
const REFRESH_KEY = 'refresh_token';
const USER_KEY = 'auth_user';
class TokenStorageService {
    constructor() {
    }
    signOut() {
        window.sessionStorage.clear();
    }
    SaveTokens(tokens) {
        window.sessionStorage.setItem(TOKEN_KEY, tokens.access);
        window.sessionStorage.setItem(REFRESH_KEY, tokens.refresh);
    }
    getAccessToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
    getRefreshToken() {
        return window.sessionStorage.getItem(REFRESH_KEY);
    }
    saveUser(user) {
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2996:
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/url.constants */ 263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class UserService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.boards_url.all_users}`);
    }
    getMeUser() {
        return this.http.get(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.boards_url.me}`);
    }
    getUserById(id) {
        return this.http.get(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.boards_url.all_users}/id`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map