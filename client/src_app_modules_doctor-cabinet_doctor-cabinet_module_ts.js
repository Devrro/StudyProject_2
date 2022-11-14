"use strict";
(self["webpackChunkhealth_care_frontend"] = self["webpackChunkhealth_care_frontend"] || []).push([["src_app_modules_doctor-cabinet_doctor-cabinet_module_ts"],{

/***/ 7439:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/doctor-cabinet/doctor-cabinet-components/doctor-appointments/doctor-appointments.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorAppointmentsComponent": () => (/* binding */ DoctorAppointmentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DoctorAppointmentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DoctorAppointmentsComponent.ɵfac = function DoctorAppointmentsComponent_Factory(t) { return new (t || DoctorAppointmentsComponent)(); };
DoctorAppointmentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorAppointmentsComponent, selectors: [["app-doctor-appointments"]], decls: 2, vars: 0, template: function DoctorAppointmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "doctor-appointments works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3ItYXBwb2ludG1lbnRzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 4825:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/doctor-cabinet/doctor-cabinet-components/doctors-patients/doctors-patients.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorsPatientsComponent": () => (/* binding */ DoctorsPatientsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/auth.service */ 2567);
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/doctor.service */ 96);



class DoctorsPatientsComponent {
    constructor(authService, doctorService) {
        this.authService = authService;
        this.doctorService = doctorService;
    }
    ngOnInit() {
        const user = this.authService.getUser();
        if (user) {
            this._doctorInfo = user;
        }
        this.getPatients(this._doctorInfo.id);
    }
    getPatients(docId, page = 0, count = 10) {
        this.doctorService.getPatients(docId).subscribe({
            next: (value) => {
                this._patients = value.results;
            },
            error: err => {
                console.log(err);
            }
        });
    }
}
DoctorsPatientsComponent.ɵfac = function DoctorsPatientsComponent_Factory(t) { return new (t || DoctorsPatientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__.DoctorService)); };
DoctorsPatientsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DoctorsPatientsComponent, selectors: [["app-doctors-patients"]], decls: 2, vars: 0, template: function DoctorsPatientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "doctors-patients works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3JzLXBhdGllbnRzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 5264:
/*!*************************************************************************!*\
  !*** ./src/app/modules/doctor-cabinet/doctor-cabinet-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDoctorCabinetRoutingModule": () => (/* binding */ AppDoctorCabinetRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _doctor_cabinet_components_doctors_patients_doctors_patients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-cabinet-components/doctors-patients/doctors-patients.component */ 4825);
/* harmony import */ var _doctor_cabinet_components_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-cabinet-components/doctor-appointments/doctor-appointments.component */ 7439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        redirectTo: 'patients', pathMatch: 'full',
    },
    { path: 'patients', component: _doctor_cabinet_components_doctors_patients_doctors_patients_component__WEBPACK_IMPORTED_MODULE_0__.DoctorsPatientsComponent },
    { path: 'appointments', component: _doctor_cabinet_components_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_1__.DoctorAppointmentsComponent }
];
class AppDoctorCabinetRoutingModule {
}
AppDoctorCabinetRoutingModule.ɵfac = function AppDoctorCabinetRoutingModule_Factory(t) { return new (t || AppDoctorCabinetRoutingModule)(); };
AppDoctorCabinetRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppDoctorCabinetRoutingModule });
AppDoctorCabinetRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppDoctorCabinetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 7516:
/*!********************************************************************!*\
  !*** ./src/app/modules/doctor-cabinet/doctor-cabinet.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorCabinetComponent": () => (/* binding */ DoctorCabinetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class DoctorCabinetComponent {
    constructor() { }
    ngOnInit() {
    }
}
DoctorCabinetComponent.ɵfac = function DoctorCabinetComponent_Factory(t) { return new (t || DoctorCabinetComponent)(); };
DoctorCabinetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorCabinetComponent, selectors: [["app-doctor-cabinet"]], decls: 3, vars: 0, template: function DoctorCabinetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cabinet works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3ItY2FiaW5ldC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 1643:
/*!*****************************************************************!*\
  !*** ./src/app/modules/doctor-cabinet/doctor-cabinet.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorCabinetModule": () => (/* binding */ DoctorCabinetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _doctor_cabinet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-cabinet-routing.module */ 5264);
/* harmony import */ var _doctor_cabinet_components_doctors_patients_doctors_patients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-cabinet-components/doctors-patients/doctors-patients.component */ 4825);
/* harmony import */ var _doctor_cabinet_components_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doctor-cabinet-components/doctor-appointments/doctor-appointments.component */ 7439);
/* harmony import */ var _doctor_cabinet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor-cabinet.component */ 7516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class DoctorCabinetModule {
}
DoctorCabinetModule.ɵfac = function DoctorCabinetModule_Factory(t) { return new (t || DoctorCabinetModule)(); };
DoctorCabinetModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DoctorCabinetModule });
DoctorCabinetModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _doctor_cabinet_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppDoctorCabinetRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DoctorCabinetModule, { declarations: [_doctor_cabinet_components_doctors_patients_doctors_patients_component__WEBPACK_IMPORTED_MODULE_1__.DoctorsPatientsComponent,
        _doctor_cabinet_components_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_2__.DoctorAppointmentsComponent,
        _doctor_cabinet_component__WEBPACK_IMPORTED_MODULE_3__.DoctorCabinetComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _doctor_cabinet_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppDoctorCabinetRoutingModule] }); })();


/***/ }),

/***/ 96:
/*!****************************************!*\
  !*** ./src/services/doctor.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorService": () => (/* binding */ DoctorService)
/* harmony export */ });
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/url.constants */ 263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class DoctorService {
    constructor(http) {
        this.http = http;
    }
    getPatients(doctorID, page = 0, count = 10) {
        return this.http.get(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.doctors_urls}/${doctorID}/patients`, {
            params: {
                page,
                count
            }
        });
    }
}
DoctorService.ɵfac = function DoctorService_Factory(t) { return new (t || DoctorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DoctorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DoctorService, factory: DoctorService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_doctor-cabinet_doctor-cabinet_module_ts.js.map