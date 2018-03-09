webpackJsonp(["main"],{

/***/ "../../../../../resources/assets/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../resources/assets/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../resources/assets/src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_provider_1 = __webpack_require__("../../../../../resources/assets/src/app/app.provider.ts");
var login_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/login.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/dashboard.component.ts");
var user_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/user.component.ts");
var manage_users_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/manage-users.component.ts");
var form_control_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/form-control.component.ts");
var role_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/role.component.ts");
var manage_role_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/manage-role.component.ts");
var department_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/department.component.ts");
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'department', component: department_component_1.DepartmentComponent },
    { path: 'users', component: user_component_1.UserComponent },
    { path: 'users/add', component: manage_users_component_1.ManageUsersComponent },
    { path: 'users/edit/:id', component: manage_users_component_1.ManageUsersComponent },
    { path: 'form-control-manager', component: form_control_component_1.FormControlComponent },
    { path: 'role-manager', component: role_component_1.RoleComponent },
    { path: 'role-manager/add', component: manage_role_component_1.ManageRoleComponent },
    { path: 'role-manager/edit/:id', component: manage_role_component_1.ManageRoleComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule(service) {
        this.service = service;
    }
    AppRoutingModule.prototype.ngOnInit = function () {
        console.log('sadas');
        // this.service.checkRoute()
    };
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule]
        }),
        __metadata("design:paramtypes", [app_provider_1.AppProvider])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "../../../../../resources/assets/src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var global_1 = __webpack_require__("../../../../../resources/assets/src/app/global.ts");
var app_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/app.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
//import 'rxjs/add/operator/pairwise';
var io = __webpack_require__("../../../../socket.io-client/lib/index.js");
var loader_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/loader.service.ts");
var sweetalert2_1 = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
var AppComponent = /** @class */ (function () {
    //constructor
    function AppComponent(router, activatedRoute, appService, loaderService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.loaderService = loaderService;
        this.controluser = {};
        this.title = 'app';
        this.BASE_API_URL = global_1.GlobalVariable.BASE_API_URL;
        this.socket = io(global_1.GlobalVariable.SOCKET_URL);
        this.changePassword = {};
        this.siteUrl = global_1.GlobalVariable.BASE_API_URL;
        this.appService.setSocket(this.socket);
        this.userNameLabel = window.localStorage.getItem('user-name');
        this.userId = window.localStorage.getItem('user-credential');
    }
    AppComponent.prototype.ngOnInit = function () {
        var that = this;
        this.loaderService.status.subscribe(function (val) {
            that.showLoader = val;
        });
        //if login credential is correct
        this.socket.on('success-login', function (data) {
            window.localStorage.setItem('user-token', data.remember_token);
            window.localStorage.setItem('user-credential', data.id);
            that.userId = window.localStorage.getItem('user-credential');
            window.localStorage.setItem('user-name', data.contact_username);
            that.userNameLabel = window.localStorage.getItem('user-name');
            that.router.navigate(['/dashboard']);
        });
        //if something went wrong during login 
        this.socket.on('stop-login', function (data) {
            if (data.data === 'incorrectCredential') {
                console.log('incorrectCredential');
                var x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
            }
            else {
                var x = document.getElementById("snackbares");
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
            }
        });
        //if the user request for edit and someone is already editing 
        this.socket.on('fail-editmode', function (data) {
            var x = document.getElementById("editError");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
        });
        //if the user simply tries to swap menu and doesnot have edit form  
        this.socket.on('endEditMode', function () {
            localStorage.setItem('editingModeID', '');
        });
    };
    AppComponent.prototype.signout = function () {
        var userid = window.localStorage.getItem('user-credential');
        window.localStorage.setItem('user-token', '');
        window.localStorage.setItem('user-credential', '');
        this.socket.emit('logoutRequest', userid);
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.profileEdit = function () {
        var that = this;
        this.router.navigate(['/manage-users/edit', that.userId]);
    };
    AppComponent.prototype.changeOfRoutes = function () {
        var _this = this;
        // alert('change menu');
        var param1 = window.location.href;
        var substring = localStorage.getItem('editingModeID');
        if (param1.indexOf(substring) !== -1) {
            this.socket.emit('editmode', { userid: this.userId, editid: substring });
            // alert('you reloaded page');  
        }
        else {
            //      alert('you are not editing any form');
            this.socket.emit('editmode', { userid: this.userId });
        }
        //get dynamic validation credential
        if (this.userId) {
            this.appService.getUserFormControls().subscribe(function (res) {
                _this.controluser = res.data;
            }, function (err) { console.log(err); });
        }
        if (!window.localStorage.getItem('user-token')) {
            this.router.navigate(['/login']);
        }
    };
    AppComponent.prototype.openPasswordModal = function (f) {
        $('#passwordModal').modal('show');
    };
    AppComponent.prototype.updatePassword = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Enter Remark',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: function (text) {
                return new Promise(function (resolve) {
                    _this.changePassword['remark'] = text;
                    _this.appService.updatePassword(_this.changePassword).subscribe(function (res) {
                        if (res === 'Incorrect Credential') {
                            var x = document.getElementById("snackbar");
                            x.className = "show";
                            setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
                        }
                        else {
                            $('#passwordModal').modal('hide');
                            var x = document.getElementById("updatePass");
                            x.className = "show";
                            setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
                        }
                    }, function (err) {
                        console.log(err);
                        sweetalert2_1.default({
                            type: 'warning',
                            title: 'Request Failed!',
                            html: 'Try Again'
                        });
                    });
                    resolve();
                });
            },
            allowOutsideClick: function () { return !sweetalert2_1.default.isLoading(); }
        });
    };
    AppComponent.prototype._keyPress = function (event) {
        var Specialdata = event.target.value.match(/[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || [];
        if (Specialdata && Specialdata.length <= this.controluser['password_specialChar']) {
            this.contactpasswordInvalid = true;
        }
        else {
            this.contactpasswordInvalid = false;
        }
        var Numberdata = event.target.value.match(/\d/g) || [];
        if (Numberdata && Numberdata.length <= this.controluser['password_numeric']) {
            this.contactpasswordNumeric = true;
        }
        else {
            this.contactpasswordNumeric = false;
        }
        var rx = /[a-z]/gi;
        var AlphabetData = event.target.value.match(rx);
        if (AlphabetData && AlphabetData.lebgth <= this.controluser['password_alphabets']) {
            this.contactpasswordAlphabet = true;
        }
        else {
            this.contactpasswordAlphabet = false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../resources/assets/src/app/template/app.component.html"),
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            app_service_1.AppService, loader_service_1.LoaderService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../resources/assets/src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("../../../../../resources/assets/src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../resources/assets/src/app/app.component.ts");
var login_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/login.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/dashboard.component.ts");
var user_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/user.component.ts");
var app_provider_1 = __webpack_require__("../../../../../resources/assets/src/app/app.provider.ts");
var app_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/app.service.ts");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var angular_datatables_1 = __webpack_require__("../../../../angular-datatables/index.js");
var manage_users_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/manage-users.component.ts");
var loader_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/loader.service.ts");
var form_control_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/form-control.component.ts");
var role_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/role.component.ts");
var manage_role_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/manage-role.component.ts");
var department_component_1 = __webpack_require__("../../../../../resources/assets/src/app/component/department.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                user_component_1.UserComponent,
                manage_users_component_1.ManageUsersComponent,
                form_control_component_1.FormControlComponent,
                role_component_1.RoleComponent,
                manage_role_component_1.ManageRoleComponent,
                department_component_1.DepartmentComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                angular_datatables_1.DataTablesModule
            ],
            providers: [app_provider_1.AppProvider, app_service_1.AppService, loader_service_1.LoaderService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../resources/assets/src/app/app.provider.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var io = __webpack_require__("../../../../socket.io-client/lib/index.js");
var global_1 = __webpack_require__("../../../../../resources/assets/src/app/global.ts");
var AppProvider = /** @class */ (function () {
    function AppProvider() {
        this.socket = io(global_1.GlobalVariable.SOCKET_URL);
        console.log('Provider');
        var userid = window.localStorage.getItem('user-credential');
        if (typeof userid === "string") {
            this.socket.emit('addRemovedUser', { data: userid });
        }
    }
    AppProvider.prototype.checkRoute = function () {
        console.info('check Route');
    };
    AppProvider = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AppProvider);
    return AppProvider;
}());
exports.AppProvider = AppProvider;


/***/ }),

/***/ "../../../../../resources/assets/src/app/component/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var global_1 = __webpack_require__("../../../../../resources/assets/src/app/global.ts");
var app_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/app.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, appService) {
        this.router = router;
        this.appService = appService;
        $("#navigation").show();
        document.querySelector('body').classList.remove('login');
        this.BASE_API_URL = global_1.GlobalVariable.BASE_API_URL;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log('Dashboard Component');
    };
    DashboardComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../resources/assets/src/app/template/dashboard.html")
        }),
        __metadata("design:paramtypes", [router_1.Router, app_service_1.AppService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../resources/assets/src/app/component/department.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var global_1 = __webpack_require__("../../../../../resources/assets/src/app/global.ts");
var app_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/app.service.ts");
var loader_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/loader.service.ts");
var sweetalert2_1 = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(appService, router, loaderService) {
        this.appService = appService;
        this.router = router;
        this.loaderService = loaderService;
        this.departments = [];
        this.userIds = [];
        this.departmentForm = {};
        this.loaderService.display(true);
        this.socket = this.appService.getSocket();
        $("#navigation").show();
        this.departmentList();
        this.BASE_API_URL = global_1.GlobalVariable.BASE_API_URL;
        this.loggedUser = window.localStorage.getItem('user-credential');
        this.loaderService.display(true);
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.loaderService.display(true);
        var that = this;
        this.socket.on('success-editmode', function (data) {
            that.router.navigate(['/manage-users/edit', data]);
        });
        this.socket.on('fail-editmode', function (data) {
            var x = document.getElementById("editError");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
        });
        this.loaderService.display(false);
    };
    DepartmentComponent.prototype.departmentList = function () {
        var _this = this;
        this.appService.getDepartments().subscribe(function (res) {
            _this.departments = res.data;
        }, function (err) {
            console.log(err);
        });
    };
    DepartmentComponent.prototype.manageDepartment = function (f) {
        var _this = this;
        var that = this;
        if (this.departmentForm) {
            sweetalert2_1.default({
                title: 'Manage Department',
                text: 'Please enter the Reason',
                input: 'textarea',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                preConfirm: function (text) {
                    return new Promise(function (resolve) {
                        if (text === '') {
                            sweetalert2_1.default.showValidationError('Please Enter Remark To Continue.');
                        }
                        resolve();
                    });
                },
                allowOutsideClick: function () { return !sweetalert2_1.default.isLoading(); }
            }).then(function (result) {
                if (result.value) {
                    var text = result.value;
                    that.departmentForm['remark'] = text;
                    _this.appService.manageDepartments(_this.departmentForm).subscribe(function (res) {
                        $('#departmentModal').modal('hide');
                        _this.departmentForm = {};
                        _this.departmentList();
                    }, function (err) {
                        console.log(err);
                        sweetalert2_1.default({
                            type: 'warning',
                            title: 'Request Failed!',
                            html: 'Try Again'
                        });
                    });
                }
            });
        }
    };
    DepartmentComponent.prototype.newDepartment = function (data) {
        var _this = this;
        if (data === void 0) { data = null; }
        this.departmentForm = {};
        if (data) {
            this.departmentEdit = data;
            var datas = {
                'data': data
            };
            this.appService.getDepartmentInfo(datas).subscribe(function (res) {
                _this.departmentForm = res.data;
            }, function (err) {
                console.log(err);
            });
        }
        $('#departmentModal').modal('show');
    };
    DepartmentComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../resources/assets/src/app/template/department.html")
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router, loader_service_1.LoaderService])
    ], DepartmentComponent);
    return DepartmentComponent;
}());
exports.DepartmentComponent = DepartmentComponent;


/***/ }),

/***/ "../../../../../resources/assets/src/app/component/form-control.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/app.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var loader_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/loader.service.ts");
var FormControlComponent = /** @class */ (function () {
    function FormControlComponent(appService, loaderService, route, router) {
        var _this = this;
        this.appService = appService;
        this.loaderService = loaderService;
        this.route = route;
        this.router = router;
        this.loaderService.display(true);
        this.controluser = {};
        this.controluser['controltype'] = 'user';
        this.appService.getUserFormControls().subscribe(function (res) {
            _this.controluser['controltype'] = 'user';
            _this.controluser = res.data;
        }, function (err) {
            console.log(err);
        });
        this.loaderService.display(false);
    }
    FormControlComponent.prototype.ngOnInit = function () {
    };
    FormControlComponent.prototype.ngOnDestroy = function () {
    };
    FormControlComponent.prototype.formControlSubmit = function (f) {
        if (this.controluser) {
            this.appService.manageFormControl(this.controluser).subscribe(function (res) {
                console.log(res.data);
                //            if(this.id){
                //                    this.socket.emit('end-editmode',this.id);
                //            }
                //     this.router.navigate(['/users']);
            }, function (err) {
                console.log(err);
            });
        }
    };
    FormControlComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../resources/assets/src/app/template/manage-form-control.html")
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, loader_service_1.LoaderService, router_2.ActivatedRoute, router_1.Router])
    ], FormControlComponent);
    return FormControlComponent;
}());
exports.FormControlComponent = FormControlComponent;


/***/ }),

/***/ "../../../../../resources/assets/src/app/component/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var global_1 = __webpack_require__("../../../../../resources/assets/src/app/global.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/app.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.socket = this.appService.getSocket();
        this.login = {};
        $("#navigation").hide();
        $('#main').removeAttr('id');
        document.querySelector('body').classList.add('login');
        this.BASE_API_URL = global_1.GlobalVariable.BASE_API_URL;
        if (window.localStorage.getItem('user-token')) {
            var userid = window.localStorage.getItem('user-credential');
            this.socket.emit('logoutRequest', userid);
            window.localStorage.clear();
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('Login Component');
    };
    LoginComponent.prototype.loginContact = function (f) {
        if (this.login) {
            this.socket.emit('login-request', { data: this.login });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../resources/assets/src/app/template/more-login.html")
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../resources/assets/src/app/component/manage-role.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var global_1 = __webpack_require__("../../../../../resources/assets/src/app/global.ts");
var app_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/app.service.ts");
var io = __webpack_require__("../../../../socket.io-client/lib/index.js");
var loader_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/loader.service.ts");
var ManageRoleComponent = /** @class */ (function () {
    function ManageRoleComponent(appService, route, router, loaderService) {
        var _this = this;
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.loaderService = loaderService;
        this.rolesModel = {};
        this.socket = io(global_1.GlobalVariable.SOCKET_URL);
        this.loaderService.display(true);
        this.appService.setSocket(this.socket);
        $("#navigation").show();
        document.querySelector('body').classList.remove('login');
        this.BASE_API_URL = global_1.GlobalVariable.BASE_API_URL;
        this.loaderService.display(true);
        var that = this;
        //get dynamic validation credential
        that.appService.getRoleControls('dataneed').subscribe(function (res) {
            console.log(res.data);
            _this.roleControl = res.data;
            that.route.params.subscribe(function (params) {
                that.id = params['id']; // (+) converts string 'id' to a number
                var editid = that.id;
                if (editid) {
                    that.appService.getRoleInfo(editid).subscribe(function (res) {
                        console.log(res.data);
                        that.rolePermission = res.message['role_name'];
                        that.permissonValues = res.data;
                        that.permissonValues.forEach(function (item) {
                            that.rolesModel[item.permission_name] = item.permission_value;
                        });
                    }, function (err) {
                        console.log(err);
                    });
                }
                that.loaderService.display(false);
            });
        }, function (err) {
            console.log(err);
        });
        this.loaderService.display(false);
    }
    ManageRoleComponent.prototype.ngOnInit = function () {
        this.loaderService.display(false);
    };
    ManageRoleComponent.prototype.roleFormSubmit = function (f) {
        var _this = this;
        console.log(this.rolesModel);
        console.log(this.rolePermission);
        this.rolesModel['rolename'] = this.rolePermission;
        if (this.id) {
            this.rolesModel['id'] = this.id;
        }
        this.appService.manageRole(this.rolesModel).subscribe(function (res) {
            _this.router.navigate(['/role-manager']);
        }, function (err) {
            console.log(err);
        });
    };
    ManageRoleComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../resources/assets/src/app/template/manage-role.html")
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, router_1.ActivatedRoute, router_1.Router, loader_service_1.LoaderService])
    ], ManageRoleComponent);
    return ManageRoleComponent;
}());
exports.ManageRoleComponent = ManageRoleComponent;


/***/ }),

/***/ "../../../../../resources/assets/src/app/component/manage-users.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var global_1 = __webpack_require__("../../../../../resources/assets/src/app/global.ts");
var app_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/app.service.ts");
var io = __webpack_require__("../../../../socket.io-client/lib/index.js");
var loader_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/loader.service.ts");
var sweetalert2_1 = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
var ManageUsersComponent = /** @class */ (function () {
    function ManageUsersComponent(appService, route, router, loaderService) {
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.loaderService = loaderService;
        this.departments = {};
        this.managingUser = {};
        this.controlRole = {};
        this.user = {};
        this.socket = io(global_1.GlobalVariable.SOCKET_URL);
        this.loaderService.display(true);
        this.controluser = {};
        this.appService.setSocket(this.socket);
        $("#navigation").show();
        document.querySelector('body').classList.remove('login');
        this.BASE_API_URL = global_1.GlobalVariable.BASE_API_URL;
        this.loaderService.display(true);
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('app component');
        this.loaderService.display(true);
        var that = this;
        //get dynamic department name
        this.appService.getDepartments().subscribe(function (res) {
            _this.departments = res.data;
        }, function (err) {
            console.log(err);
        });
        //get dynamic role names
        that.appService.getRole().subscribe(function (res) {
            that.controlRole = res.data;
        }, function (err) {
            console.log(err);
        });
        //get dynamic validation credential
        that.appService.getUserFormControls().subscribe(function (res) {
            that.controluser = res.data;
        }, function (err) {
            console.log(err);
        });
        this.route.params.subscribe(function (params) {
            that.id = params['id']; // (+) converts string 'id' to a number
            var editid = that.id;
            if (editid) {
                that.loaderService.display(true);
                that.appService.getUserInfo(editid).subscribe(function (res) {
                    that.user = res;
                    that.formType = 'edit';
                }, function (err) {
                    console.log(err);
                });
                that.loaderService.display(false);
            }
        });
        this.loaderService.display(false);
    };
    ManageUsersComponent.prototype.userFormSubmit = function (f) {
        var _this = this;
        var that = this;
        if (this.id && this.user['contact_password']) {
            //  alert('a');
            if (this.contactpasswordInvalid || this.contactpasswordNumeric || this.contactpasswordAlphabet) {
                return false;
            }
        }
        else if (this.user['contact_password']) {
            // alert('b');
            if (this.contactpasswordInvalid || this.contactpasswordNumeric || this.contactpasswordAlphabet) {
                return false;
            }
        }
        if (this.user['confirm_password'] != this.user['contact_password'] && this.user['contact_password']) {
            // alert('c');
            return false;
        }
        else {
            sweetalert2_1.default({
                title: 'Manage User',
                text: 'Please enter the Reason',
                input: 'textarea',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                preConfirm: function (text) {
                    return new Promise(function (resolve) {
                        if (text === '') {
                            sweetalert2_1.default.showValidationError('Please Enter Remark To Continue.');
                        }
                        resolve();
                    });
                },
                allowOutsideClick: function () { return !sweetalert2_1.default.isLoading(); }
            }).then(function (result) {
                if (result.value) {
                    var text = result.value;
                    that.user['remark'] = text;
                    that.appService.manageUsers(_this.user).subscribe(function (res) {
                        that.router.navigate(['/users']);
                    }, function (err) {
                        sweetalert2_1.default({
                            type: 'warning',
                            title: 'Request Failed!',
                            html: 'Try Again'
                        });
                    });
                }
            });
        }
    };
    ManageUsersComponent.prototype.cancelForm = function () {
        this.router.navigate(['/users']);
    };
    //    userFormSubmit(f: NgForm){
    //        if(this.contactpasswordInvalid || this.contactpasswordNumeric || this.contactpasswordAlphabet){
    //            return false;
    //        }else{
    //            this.appService.manageUsers(this.user).subscribe(res => {
    //                if(this.id){
    //                        this.socket.emit('end-editmode',this.id);
    //                }
    //                this.router.navigate(['/users']);
    //            },err => {
    //                console.log(err);
    //            });
    //        }        
    //        
    //    }
    ManageUsersComponent.prototype.passwordType = function (event) {
        $('#contactpassword').prop('type', 'text');
    };
    ManageUsersComponent.prototype._keyPress = function (event) {
        var Specialdata = event.target.value.match(/[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || [];
        if (Specialdata && Specialdata.length <= this.controluser['password_specialChar']) {
            this.contactpasswordInvalid = true;
        }
        else {
            this.contactpasswordInvalid = false;
        }
        var Numberdata = event.target.value.match(/\d/g) || [];
        if (Numberdata && Numberdata.length <= this.controluser['password_numeric']) {
            this.contactpasswordNumeric = true;
        }
        else {
            this.contactpasswordNumeric = false;
        }
        var rx = /[a-z]/gi;
        var AlphabetData = event.target.value.match(rx);
        if (AlphabetData && AlphabetData.lebgth <= this.controluser['password_alphabets']) {
            this.contactpasswordAlphabet = true;
        }
        else {
            this.contactpasswordAlphabet = false;
        }
    };
    ManageUsersComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../resources/assets/src/app/template/manage-users.html")
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, router_1.ActivatedRoute, router_1.Router, loader_service_1.LoaderService])
    ], ManageUsersComponent);
    return ManageUsersComponent;
}());
exports.ManageUsersComponent = ManageUsersComponent;


/***/ }),

/***/ "../../../../../resources/assets/src/app/component/role.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var global_1 = __webpack_require__("../../../../../resources/assets/src/app/global.ts");
var app_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/app.service.ts");
var loader_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/loader.service.ts");
var RoleComponent = /** @class */ (function () {
    function RoleComponent(appService, router, loaderService) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.loaderService = loaderService;
        this.roles = [];
        this.userIds = [];
        this.loaderService.display(true);
        this.socket = this.appService.getSocket();
        $("#navigation").show();
        this.appService.getRoles('data').subscribe(function (res) {
            console.log(res.data);
            _this.roles = res.data;
        }, function (err) {
            console.log(err);
        });
        this.BASE_API_URL = global_1.GlobalVariable.BASE_API_URL;
        this.loggedUser = window.localStorage.getItem('user-credential');
        this.loaderService.display(true);
    }
    RoleComponent.prototype.ngOnInit = function () {
        this.loaderService.display(true);
        var that = this;
        this.socket.on('success-editmode', function (data) {
            that.router.navigate(['/manage-users/edit', data]);
        });
        this.socket.on('fail-editmode', function (data) {
            var x = document.getElementById("editError");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
        });
        this.loaderService.display(false);
    };
    RoleComponent.prototype.manageRolePermissions = function (data) {
        this.router.navigate(['/role-manager/edit', data]);
    };
    RoleComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../resources/assets/src/app/template/role.html")
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router, loader_service_1.LoaderService])
    ], RoleComponent);
    return RoleComponent;
}());
exports.RoleComponent = RoleComponent;


/***/ }),

/***/ "../../../../../resources/assets/src/app/component/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var angular_datatables_1 = __webpack_require__("../../../../angular-datatables/index.js");
var global_1 = __webpack_require__("../../../../../resources/assets/src/app/global.ts");
var app_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/app.service.ts");
var Rx_1 = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var loader_service_1 = __webpack_require__("../../../../../resources/assets/src/app/services/loader.service.ts");
var sweetalert2_1 = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
var UserComponent = /** @class */ (function () {
    function UserComponent(appService, router, loaderService) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.loaderService = loaderService;
        this.controluser = {};
        this.dtOptions = {};
        this.dtTrigger = new Rx_1.Subject();
        this.userIds = [];
        this.passwordModel = {};
        this.loaderService.display(true);
        this.socket = this.appService.getSocket();
        $("#navigation").show();
        document.querySelector('body').classList.remove('login');
        this.BASE_API_URL = global_1.GlobalVariable.BASE_API_URL;
        this.search = {};
        this.filterOpen = false;
        console.log('users component');
        this.usersList(this.search);
        this.loggedUser = window.localStorage.getItem('user-credential');
        this.loaderService.display(true);
        //get dynamic validation credential
        this.appService.getUserFormControls().subscribe(function (res) {
            _this.controluser = res.data;
        }, function (err) {
            console.log(err);
        });
        //get dynamic role names
        this.appService.getRole().subscribe(function (res) {
            _this.controlRole = res.data;
        }, function (err) {
            console.log(err);
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        var that = this;
        this.loaderService.display(true);
        this.usersList(this.search);
        this.socket.on('success-editmode', function (data) {
            if (data.type == 'formRequest') {
                localStorage.setItem("editingModeID", data.editid);
                that.router.navigate(['/users/edit', data.editid]);
            }
            else if (data.type == 'statusRequest') {
                that.updateStatus(data.editid);
            }
        });
    };
    UserComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    //get users lists
    UserComponent.prototype.usersList = function (data) {
        var _this = this;
        var that = this;
        data['user_token'] = window.localStorage.getItem('user-token');
        this.dtOptions = {
            searching: false,
            "dom": '<"top"f>rt<"bottom"ilp><"clear">',
            "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
            "processing": true,
            "language": { processing: 'Loading...' },
            "serverSide": true,
            "order": [[1, "desc"]],
            ajax: { url: global_1.GlobalVariable.API_URL + '/get-all-users', type: 'get', data: data },
            columns: [
                {
                    title: 'Username',
                    data: 'contact_username'
                },
                {
                    title: 'Email',
                    data: 'contact_email'
                },
                {
                    title: 'Status',
                    data: 'contact_status',
                    orderable: false,
                    render: function (a, b, c) {
                        if (c.contact_status == 'enable') {
                            return '<a href="javascript:void(0);"><label class="status statusLabelEnabled">Enabled</label></a>';
                        }
                        else {
                            return '<label class="status statusLabelDisabled">Disabled</label>';
                        }
                    },
                }, {
                    title: 'Department',
                    data: 'department_name',
                    orderable: false,
                },
                {
                    title: 'Role',
                    data: 'role_name',
                    orderable: false,
                }, {
                    title: 'Action',
                    data: 'id',
                    render: function (a, b, c) {
                        if (c.id != that.loggedUser) {
                            return "<button class='btn btn--icon edit' title='Edit User'><i class='fa fa-edit '></i>Edit</button>";
                            //<button class='btn btn--icon password' title='Change Password'><i class='fa fa-key '></i>Password</button>";
                        }
                        else {
                            return "<button style='cursor: no-drop;' class='btn btn--icon' title='You Can Update Your Profile From My Profile'><i class='fa fa-edit '></i>Edit</button>";
                            //                                            <button style='cursor: no-drop;' class='btn btn--icon' title='You Can Update Your Password From My Profile'><i class='fa fa-key '></i>Password</button>";
                        }
                    },
                    orderable: false
                }
            ],
            rowCallback: function (row, data, index) {
                var self = _this;
                $(row).find('td:last').each(function () {
                    $(this).find('.edit').click(function () {
                        self.editUser(data.id);
                    });
                    $(this).find('.password').click(function () {
                        self.changePassword(data.id, data.contact_username);
                    });
                });
                $(row).find('td:nth-child(3)').each(function () {
                    $(this).find('.status').click(function () {
                        self.changeStatus(data.id);
                    });
                });
                self.loaderService.display(false);
            }
        };
        //end of datatable 
    };
    UserComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    UserComponent.prototype.reloadTable = function () {
        this.search = {};
        console.log(this.search);
        this.rerender();
        this.usersList(this.search);
    };
    UserComponent.prototype.showFilter = function () {
        if (this.filterOpen) {
            this.filterOpen = false;
        }
        else {
            this.filterOpen = true;
        }
    };
    UserComponent.prototype.hideFilter = function () {
        this.filterOpen = false;
    };
    UserComponent.prototype.filterUsers = function () {
        this.filterOpen = false;
        this.rerender();
        this.usersList(this.search);
    };
    //for editing we send a request to node and check whether its already in editing
    UserComponent.prototype.editUser = function (data) {
        this.socket.emit('editmode', { userid: this.loggedUser, editid: data, type: 'formRequest' });
        // this.socket.emit('checking-editmode', {data: data}); 
    };
    UserComponent.prototype.changePassword = function (data, name) {
        this.passwordModel['edit-user'] = data;
        this.passwordModel['username'] = name;
        $('#userPassword').modal('show');
    };
    UserComponent.prototype.savePassword = function () {
        var _this = this;
        //        console.log(this.passwordModel);
        var that = this;
        sweetalert2_1.default({
            title: 'Change Password',
            text: 'Please enter the reason for Changing Password',
            input: 'textarea',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: function (text) {
                return new Promise(function (resolve) {
                    if (text === '') {
                        sweetalert2_1.default.showValidationError('Please Enter Remark To Continue.');
                    }
                    resolve();
                });
            },
            allowOutsideClick: function () { return !sweetalert2_1.default.isLoading(); }
        }).then(function (result) {
            if (result.value) {
                var text = result.value;
                _this.passwordModel['remark'] = text;
                _this.appService.updatePassword(_this.passwordModel).subscribe(function (res) {
                    $('#passwordModal').modal('hide');
                    var x = document.getElementById("updatePass");
                    x.className = "show";
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
                    $('#userPassword').modal('hide');
                }, function (err) {
                    console.log(err);
                    sweetalert2_1.default({
                        type: 'warning',
                        title: 'Request Failed!',
                        html: 'Try Again'
                    });
                });
            }
        });
    };
    UserComponent.prototype.updateStatus = function (data) {
        var that = this;
        sweetalert2_1.default({
            title: 'Update Status',
            text: 'Please enter the reason for Updating Status',
            input: 'textarea',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: function (text) {
                return new Promise(function (resolve) {
                    if (text === '') {
                        sweetalert2_1.default.showValidationError('Please Enter Remark To Continue.');
                    }
                    resolve();
                });
            },
            allowOutsideClick: function () { return !sweetalert2_1.default.isLoading(); }
        }).then(function (result) {
            if (result.value) {
                var text = result.value;
                that.appService.changeStatus(data, text).subscribe(function (res) {
                    that.rerender();
                    that.usersList(that.search);
                }, function (err) {
                    sweetalert2_1.default({
                        type: 'warning',
                        title: 'Request Failed!',
                        html: 'Try Again'
                    });
                });
            }
        });
    };
    UserComponent.prototype.changeStatus = function (data) {
        this.socket.emit('editmode', { userid: this.loggedUser, editid: data, type: 'statusRequest' });
    };
    UserComponent.prototype.deleteMultiple = function () {
        this.deleteUsers();
    };
    UserComponent.prototype.deleteUsers = function (id) {
        if (id === void 0) { id = null; }
        var that = this;
        bootbox.confirm("Are You Sure", function (result) {
            if (result) {
                var data = {};
                data['ids'] = [];
                if (id != null) {
                    data['ids'].push(id);
                }
                else {
                    data['ids'] = that.userIds;
                }
                that.appService.deleteUsers(data).subscribe(function (res) {
                    that.rerender();
                    that.usersList(that.search);
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    UserComponent.prototype._keyPress = function (event) {
        var Specialdata = event.target.value.match(/[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || [];
        if (Specialdata && Specialdata.length <= this.controluser['password_specialChar']) {
            this.contactpasswordInvalid = true;
        }
        else {
            this.contactpasswordInvalid = false;
        }
        var Numberdata = event.target.value.match(/\d/g) || [];
        if (Numberdata && Numberdata.length <= this.controluser['password_numeric']) {
            this.contactpasswordNumeric = true;
        }
        else {
            this.contactpasswordNumeric = false;
        }
        var rx = /[a-z]/gi;
        var AlphabetData = event.target.value.match(rx);
        if (AlphabetData && AlphabetData.lebgth <= this.controluser['password_alphabets']) {
            this.contactpasswordAlphabet = true;
        }
        else {
            this.contactpasswordAlphabet = false;
        }
    };
    __decorate([
        core_1.ViewChild(angular_datatables_1.DataTableDirective),
        __metadata("design:type", angular_datatables_1.DataTableDirective)
    ], UserComponent.prototype, "dtElement", void 0);
    UserComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../resources/assets/src/app/template/users.html")
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router, loader_service_1.LoaderService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "../../../../../resources/assets/src/app/global.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalVariable = Object.freeze({
    BASE_API_URL: 'http://192.168.1.107/tSoft',
    LoginClass: 'login',
    API_URL: 'http://192.168.1.107/tSoft/api/v1',
    SOCKET_URL: 'http://192.168.1.107:4000',
});


/***/ }),

/***/ "../../../../../resources/assets/src/app/services/app.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var global_1 = __webpack_require__("../../../../../resources/assets/src/app/global.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/Rx.js");
var AppService = /** @class */ (function () {
    // manageUserId: any={};
    function AppService(http) {
        this.http = http;
        this.socket = {};
        this.apiUrl = global_1.GlobalVariable.API_URL;
    }
    AppService.prototype.setSocket = function (value) {
        this.socket = value;
    };
    AppService.prototype.getSocket = function () {
        return this.socket;
    };
    AppService.prototype.loginContact = function (login) {
        var param = this.addDefaultParam('post', login);
        return this.http.post(this.apiUrl + '/get-user-login', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.manageUsers = function (userData) {
        var param = this.addDefaultParam('post', userData);
        return this.http.post(this.apiUrl + '/manage-users', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.manageFormControl = function (formData) {
        var param = this.addDefaultParam('post', formData);
        return this.http.post(this.apiUrl + '/manage-form-control', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.getUserFormControls = function () {
        var param = this.addDefaultParam('post');
        return this.http.post(this.apiUrl + '/get-user-formControls', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.getRole = function () {
        var param = this.addDefaultParam('post');
        return this.http.post(this.apiUrl + '/get-role4select', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.getDepartments = function () {
        var param = this.addDefaultParam('post');
        return this.http.post(this.apiUrl + '/get-departments', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.manageDepartments = function (formData) {
        var param = this.addDefaultParam('post', formData);
        return this.http.post(this.apiUrl + '/manage-departments', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.getDepartmentInfo = function (requestData) {
        var param = this.addDefaultParam('post', requestData);
        return this.http.post(this.apiUrl + '/get-department-info', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.deleteUsers = function (id) {
        var param = this.addDefaultParam('post', id);
        return this.http.post(this.apiUrl + '/users/delete', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.changeStatus = function (data, remark) {
        var param = this.addDefaultParam('post', { data: data, status: status, remark: remark });
        return this.http.post(this.apiUrl + '/users-status', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.getUserInfo = function (userid) {
        var param = this.addDefaultParam('post', { id: userid });
        return this.http.post(this.apiUrl + '/get-user-info', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.getRoleControls = function (datas) {
        var param = this.addDefaultParam('post', { datas: datas });
        return this.http.post(this.apiUrl + '/get-role-controls', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.manageRole = function (formData) {
        var param = this.addDefaultParam('post', formData);
        return this.http.post(this.apiUrl + '/manage-role', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.getRoleInfo = function (data) {
        var param = this.addDefaultParam('post', { info: data });
        return this.http.post(this.apiUrl + '/get-role-info', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.getRoles = function (data) {
        var param = this.addDefaultParam('post', { info: data });
        return this.http.post(this.apiUrl + '/get-roles', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.updatePassword = function (data) {
        var param = this.addDefaultParam('post', data);
        return this.http.post(this.apiUrl + '/update-password', param).map(function (res) { return res.json(); });
    };
    AppService.prototype.addDefaultParam = function (method, data) {
        if (method === void 0) { method = 'post'; }
        if (data === void 0) { data = {}; }
        data['user_token'] = window.localStorage.getItem('user-token');
        data['user_credential'] = window.localStorage.getItem('user-credential');
        if (method == 'post') {
            return data;
        }
        else {
            return typeof data == 'string' ? data : Object.keys(data).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]); }).join('&');
        }
    };
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;


/***/ }),

/***/ "../../../../../resources/assets/src/app/services/loader.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.status = new BehaviorSubject_1.BehaviorSubject(false);
    }
    LoaderService.prototype.display = function (value) {
        // console.log('service');
        //  console.log(value);
        this.status.next(value);
    };
    LoaderService = __decorate([
        core_1.Injectable()
    ], LoaderService);
    return LoaderService;
}());
exports.LoaderService = LoaderService;


/***/ }),

/***/ "../../../../../resources/assets/src/app/template/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"navigation\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<a href=\"#\" id=\"brand\">TantraSoft</a>\n\t\t\t\n                        <ul class='main-nav'>\n\t\t\t\t<li routerLink=\"/login\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"/login\" title=\"Login\" routerLinkActive=\"active\">\n\t\t\t\t\t\t<span>Login</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n                                <li routerLink=\"/dashboard\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"/dashboard\" title=\"Dashboard\" routerLinkActive=\"active\">\n\t\t\t\t\t\t<span>Dashboard</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n                                <li routerLink=\"/department\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"/department\" title=\"Department\">\n\t\t\t\t\t\t<span>Department</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n                                <li routerLink=\"/users\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"/users\" title=\"Users\">\n\t\t\t\t\t\t<span>Users</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n                                \n                                <li routerLink=\"/form-control-manager\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"/form-control-manager\" title=\"Form Control Manager\">\n\t\t\t\t\t\t<span>Form Control Manager</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n                                <li routerLink=\"/role-manager\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"/role-manager\" title=\"Role Manager\">\n\t\t\t\t\t\t<span>Role Manager</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t\n\t\t\t<div class=\"user\">\n\t\t\t\t\n\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t<a href=\"#\" class='dropdown-toggle' data-toggle=\"dropdown\">{{userNameLabel}}\n\t\t\t\t\t\t<img src=\"{{BASE_API_URL}}/public/assets/img/demo/user-avatar.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t\t<ul class=\"dropdown-menu pull-right\">\n\t\t\t\t\t\t<li><a href=\"javascript:void(0);\" (click)=\"profileEdit();\">Edit profile</a></li>\n                                                <li><a href=\"javascript:void(0);\" (click)=\"openPasswordModal();\">Change Password</a></li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" (click)=\"signout();\">Sign out</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n<div class=\"container-fluid\" style=\"padding: 2%; margin-left: -2%;\" id=\"content\">\n\t\t\n\t\t<div id=\"main\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"box\">\n\t\t\t\t\t\t\t\n                                        <div id=\"box-content\">\n                                            <router-outlet (activate)=\"changeOfRoutes()\">\n                                                <div  *ngIf=\"showLoader\">\n                                                    <div style=\"margin-top: 110px; text-align: center; font-size: 18px; font-weight: 700;\">\n                                                        Please wait...\n                                                        <img src=\"{{siteUrl}}/public/assets/img/du.gif\" class=\"img-circle\" alt=\"\">\n                                                    </div>\n                                                </div>\n                                            </router-outlet>\n                                       </div>\n                                                  \n                                                    <div id=\"snackbar\">Please Enter Valid Credentials</div>\n                                                    <div  id=\"snackbares\">You Are Already Logged From Some Place</div>\n                                                    <div  id=\"editError\">Already In Editing Mode</div>\n                                                    <div id=\"updatePass\">Password Updated Successfully</div>\n                                                    <div id=\"somethingWrong\">Something Went Wrong !!</div>\n                                                    \n                                                    \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n<div id=\"passwordModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Update Password</h4>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"portlet-body form\">\n                <form  #passwordForm=\"ngForm\"  role=\"form\" novalidate (ngSubmit) = \"updatePassword(passwordForm);\" name=\"passwordForm\">\n                  <div class=\"form-body\">\n                    <div class=\"form-group\">\n                      <label>Current Password</label>\n                      <input class=\"form-control\" name=\"current_password\"  placeholder=\"Current Password\" type=\"password\" [(ngModel)]=\"changePassword.current_password\" #current_password=\"ngModel\" required>\n                     <div *ngIf=\"current_password.invalid && (current_password.dirty || current_password.touched||passwordForm.submitted)\">\n                        <p class=\"text text-danger\" *ngIf=\"current_password.errors.required\">\n                          Current Password is required.\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label>New password</label>\n                      \n                        \n                                <input id=\"contactpassword\"\n                               type=\"password\"    minlength=\"{{controluser.password_length}}\" (keyup)=\"_keyPress($event)\"           \n                                #contactpassword=\"ngModel\"\n                                [(ngModel)]=\"changePassword.new_password\"\n                                required class='form-control'  placeholder=\"Password\" [ngModelOptions]=\"{standalone: true}\">\n                        \n                        <div *ngIf=\"contactpassword.invalid && (contactpassword.dirty || contactpassword.touched||passwordForm.submitted)\">\n                                        <p class=\"text text-danger\" *ngIf=\"contactpassword.errors.required\">\n                                          Password is required.\n                                        </p>\n                                        <p class=\"text text-danger\" *ngIf=\"contactpassword.errors.minlength\">\n                                             Password Should Be Minimum {{controluser.password_length}} Character Long.\n                                        </p>\n                        </div>\n                        <div *ngIf=\"contactpasswordInvalid || contactpasswordNumeric || contactpasswordAlphabet\">\n                                    <p class=\"text text-danger\" *ngIf=\"contactpasswordInvalid || contactpasswordNumeric || contactpasswordAlphabet\">\n                                      Password Should Contain atleast {{controluser.password_specialChar}} Special Character ,{{controluser.password_numeric}} Numeric Character ,{{controluser.password_alphabets}} Alphabetic Character.\n                                    </p>\n                        </div>\n                      \n<!--                      <input class=\"form-control\" name=\"new_password\" minlength=\"6\" placeholder=\"New password\" type=\"password\" [(ngModel)]=\"changePassword.new_password\" #new_password=\"ngModel\" required>\n                      <div *ngIf=\"new_password.invalid && (new_password.dirty || new_password.touched||passwordForm.submitted)\">\n                        <p class=\"text text-danger\" *ngIf=\"new_password.errors.required\">\n                          New Password is required.\n                        </p>\n                        <p class=\"text text-danger\" *ngIf=\"passwordForm.submitted&&new_password.errors.minlength\">\n                          New Password should not be 8 characters long.\n                        </p>\n                      </div>-->\n                    </div>\n                      \n                      \n                     <div class=\"form-group\">\n                      <label>Confirm password</label>\n                      <input class=\"form-control\" name=\"confirm_password\"  placeholder=\"Confirm password\" type=\"password\" [(ngModel)]=\"changePassword.confirm_password\" #confirm_password=\"ngModel\" required validateEqual=\"new_password\">\n<!--                       <div *ngIf=\"confirm_password.invalid && (confirm_password.dirty || confirm_password.touched||passwordForm.submitted)\">-->\n                        <p class=\"text text-danger\" *ngIf=\"confirm_password.invalid && (confirm_password.dirty || confirm_password.touched||passwordForm.submitted) && confirm_password.errors.required\">\n                          Confirm Password is required.\n                        </p>\n<!--                       </div>-->\n                     \n                        <p class=\"text text-danger\" *ngIf=\"changePassword.new_password != changePassword.confirm_password && changePassword.confirm_password != null\">\n                            Password does not match\n                        </p>\n                    </div>\n                  </div>\n                  <div class=\"form-actions\">\n                    <button type=\"submit\" [disabled]=\"changePassword.new_password != changePassword.confirm_password && changePassword.confirm_password != null\"  class=\"btn default\">Save</button>\n                    <button type=\"button\" class=\"btn default\" data-dismiss=\"modal\">Cancel</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "../../../../../resources/assets/src/app/template/dashboard.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t\t\n\t\t<div class=\"login-body\">\n\t\t\t<h2>Dashboard</h2>\n\t\t\t{{logged}}\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "../../../../../resources/assets/src/app/template/department.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-12\">\n\t\t<div class=\"box\">\n\t\t\t<div class=\"box-title\">\n\t\t\t\t<h3>\n\t\t\t\t\t<i class=\"fa fa-home\"></i>\n\t\t\t\t\t Departments\n\t\t\t\t</h3>\n                            <div class=\"pull-right\">\n                                <a href=\"javascript:void(0);\" (click)=\"newDepartment()\"><button class=\"btn btn--icon\" title=\"Add Department\"><i class=\"fa fa-plus-circle\"></i>Add</button></a>\n                            </div>\n                        </div>\n\t\t\t<div class=\"box-content nopadding\">\n\t\t\t\t\n                            <div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"box\">\n\t\t\t\t\t\t\t<div class=\"box-title\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"box-content nopadding\">\n\t\t\t\t\t\t\t\t<table class=\"table table-hover table-nomargin table-colored-header\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Department Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let data of departments\">\n                                                                                    <td>{{data.department_name}}</td>\n                                                                                    <td>\n                                                                                        <a href=\"javascript:void(0);\" (click)=\"newDepartment(data.id)\"><button class=\"btn btn--icon\" title=\"Edit Department\"><i class=\"fa fa-edit\"></i>Edit</button></a>\n                                                                                       \n                                                                                    </td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div><div id=\"departmentModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Manage Department</h4>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"portlet-body form\">\n                <form  #aForm=\"ngForm\"  role=\"form\" novalidate (ngSubmit) = \"manageDepartment(aForm);\" name=\"aForm\">\n                  <div class=\"form-body\">\n                    <div class=\"form-group\">\n                      <label>Department Name</label>\n                      <input class=\"form-control\" name=\"department_name\"  placeholder=\"Department Name\" type=\"text\" [(ngModel)]=\"departmentForm.department_name\" #department_name=\"ngModel\" required>\n                     <div *ngIf=\"department_name.invalid && (department_name.dirty || department_name.touched||aForm.submitted)\">\n                        <p class=\"text text-danger\" *ngIf=\"department_name.errors.required\">\n                          Department Name is required.\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-actions\">\n                    <button type=\"submit\"  class=\"btn default\">Save</button>\n                    <button type=\"button\" class=\"btn default\" data-dismiss=\"modal\">Cancel</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "../../../../../resources/assets/src/app/template/manage-form-control.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12\">\r\n                                            <form #aForm=\"ngForm\"  class='form-horizontal form-bordered'  role=\"form\" novalidate (ngSubmit) = \"aForm.valid&&formControlSubmit(aForm);\">\r\n\t\t\t\t\t\t<div class=\"box box-bordered box-color\">\r\n\t\t\t\t\t\t\t<div class=\"box-title\">\r\n\t\t\t\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-bars\"></i>\r\n\t\t\t\t\t\t\t\t\tManage Form Control\r\n\t\t\t\t\t\t\t\t</h3>\r\n                                                                <div  class=\"pull-right\" style=\"margin-right: 16px;\">\r\n                                                                    <a routerLink=\"/dashboard\" title=\"Dashboard\"><button  class=\"btn default\"><i class=\"fa fa-home\"></i></button></a> \r\n                                                                        <a href=\"javascript:void(0);\" title=\"Save\" (click)=\"formControlSubmit()\"><button  class=\"btn default\"><i class=\"fa fa-save\"></i></button></a> \r\n                                                                </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"box-content nopadding\">\r\n\t\t\t\t\t\t\t\t<div class=\"tabs-container\">\r\n\t\t\t\t\t\t\t\t\t<ul class=\"tabs tabs-inline tabs-left\">\r\n\t\t\t\t\t\t\t\t\t\t<li class='active'>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#first\" data-toggle='tab'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user-circle-o\"></i>User</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#second\" data-toggle='tab'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>Account</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#thirds\" data-toggle='tab'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>Social</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n                                                            \t\r\n\t\t\t\t\t\t\t\t<div class=\"tab-content padding tab-content-inline\" style=\"min-height:100px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"first\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-group panel-widget\" id=\"ac4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n                                                                                        <div class=\"form-group row\">\r\n                                                                                                <label for=\"textfield\"  title=\"Username Length\" class=\"control-label col-sm-2\">User ID Length</label>\r\n                                                                                                <div class=\"col-sm-10\">\r\n                                                                                                        <input style=\"    margin-left: 11px;\" name=\"controluseridLength\"\r\n                                                                                                                type=\"text\"                \r\n                                                                                                                required \r\n                                                                                                                class='complexify-me form-control' \r\n                                                                                                                maxlength=\"20\"  \r\n                                                                                                                placeholder=\"User ID Length\"\r\n                                                                                                                #controluseridLength=\"ngModel\" \r\n                                                                                                                [(ngModel)]=\"controluser.userid_length\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                                                                        <div *ngIf=\"controluseridLength.invalid && (controluseridLength.dirty || controluseridLength.touched||aForm.submitted)\">\r\n                                                                                                            <p class=\"text text-danger\" *ngIf=\"controluseridLength.errors.required\">\r\n                                                                                                              Please Enter Username Length.\r\n                                                                                                            </p>\r\n                                                                                                        </div>\r\n                                                                                                </div>\r\n                                                                                        </div>\r\n                                                                                    \r\n                                                                                    \r\n                                                                                        <div class=\"form-group row\">\r\n                                                                                                <label for=\"textfield\"  title=\"Username Length\" class=\"control-label col-sm-2\">Username Length</label>\r\n                                                                                                <div class=\"col-sm-10\">\r\n                                                                                                        <input style=\"    margin-left: 11px;\" name=\"controlusernameLength\"\r\n                                                                                                                type=\"text\"                \r\n                                                                                                                required \r\n                                                                                                                class='complexify-me form-control' \r\n                                                                                                                maxlength=\"20\"  \r\n                                                                                                                placeholder=\"Username Length\"\r\n                                                                                                                #controlusernameLength=\"ngModel\" \r\n                                                                                                                [(ngModel)]=\"controluser.username_length\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                                                                        <div *ngIf=\"controlusernameLength.invalid && (controlusernameLength.dirty || controlusernameLength.touched||aForm.submitted)\">\r\n                                                                                                            <p class=\"text text-danger\" *ngIf=\"controlusernameLength.errors.required\">\r\n                                                                                                              Please Enter Username Length.\r\n                                                                                                            </p>\r\n                                                                                                        </div>\r\n                                                                                                </div>\r\n                                                                                        </div>\r\n                                                                                    \r\n                                                                                        <div class=\"form-group row\">\r\n                                                                                                <label for=\"textfield\"  title=\"Username Length\" class=\"control-label col-sm-2\">User Initial Length</label>\r\n                                                                                                <div class=\"col-sm-10\">\r\n                                                                                                        <input style=\"margin-left: 11px;\" name=\"controluserInitialLength\"\r\n                                                                                                                type=\"text\"                \r\n                                                                                                                required \r\n                                                                                                                class='complexify-me form-control' \r\n                                                                                                                maxlength=\"20\"  \r\n                                                                                                                placeholder=\"User Initial Length\"\r\n                                                                                                                #controluserInitialLength=\"ngModel\" \r\n                                                                                                                [(ngModel)]=\"controluser.userInitial_length\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                                                                        <div *ngIf=\"controluserInitialLength.invalid && (controluserInitialLength.dirty || controluserInitialLength.touched||aForm.submitted)\">\r\n                                                                                                            <p class=\"text text-danger\" *ngIf=\"controluserInitialLength.errors.required\">\r\n                                                                                                              Please Enter User Initial Length.\r\n                                                                                                            </p>\r\n                                                                                                        </div>\r\n                                                                                                </div>\r\n                                                                                        </div>\r\n                                                                       \r\n                                                                                     <input [(ngModel)]=\"controluser.controltype\"  type=\"hidden\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                                                        <div class=\"form-group row\">\r\n                                                                                                        <label for=\"textfield\" class=\"control-label col-sm-2\">Password</label>\r\n                                                                                                        <div class=\"col-sm-10\">\r\n                                                                                                                <div class=\"col-sm-2\">\r\n                                                                                                                        <label class='inline' title=\"Password Length\" for=\"c7\">Length</label>\r\n                                                                                                                </div>\r\n                                                                                                                <div class=\"col-sm-8\">\r\n                                                                                                                    <input required\r\n                                                                                                                            #controlpasswordLength=\"ngModel\" \r\n                                                                                                                            [(ngModel)]=\"controluser.password_length\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                                                                                            style=\"margin: 1px;\" type=\"text\" id=\"c7\" class='form-control'>\r\n                                                                                                                             <div *ngIf=\"controlpasswordLength.invalid && (controlpasswordLength.dirty || controlpasswordLength.touched||aForm.submitted)\">\r\n                                                                                                                                <p class=\"text text-danger\" *ngIf=\"controlpasswordLength.errors.required\">\r\n                                                                                                                                  Please Enter Password Length.\r\n                                                                                                                                </p>\r\n                                                                                                                            </div>\r\n                                                                                                                </div>\r\n\r\n                                                                                                        </div>\r\n\r\n                                                                                                        <label for=\"textfield\" class=\"control-label col-sm-2\"></label>\r\n                                                                                                        <div class=\"col-sm-10\">\r\n                                                                                                                <div class=\"col-sm-2\">\r\n                                                                                                                        <label class='inline' title=\"Special Character Count In Password\" for=\"c7\">Special Character</label>\r\n                                                                                                                </div>\r\n                                                                                                                <div class=\"col-sm-8\">\r\n                                                                                                                        <input required\r\n                                                                                                                             #controlpasswordSpecialChar=\"ngModel\" \r\n                                                                                                                            [(ngModel)]=\"controluser.password_specialChar\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                                                                                            style=\"margin: 1px;\" type=\"text\" id=\"c7\" class='form-control' name=\"same3\">\r\n                                                                                                                             <div *ngIf=\"controlpasswordSpecialChar.invalid && (controlpasswordSpecialChar.dirty || controlpasswordSpecialChar.touched||aForm.submitted)\">\r\n                                                                                                                                <p class=\"text text-danger\" *ngIf=\"controlpasswordSpecialChar.errors.required\">\r\n                                                                                                                                  Please Enter Special Character Length.\r\n                                                                                                                                </p>\r\n                                                                                                                            </div>\r\n                                                                                                                </div>\r\n\r\n                                                                                                        </div>\r\n\r\n                                                                                                        <label for=\"textfield\" class=\"control-label col-sm-2\"></label>\r\n                                                                                                        <div class=\"col-sm-10\">\r\n                                                                                                                <div class=\"col-sm-2\">\r\n                                                                                                                        <label class='inline'  title=\"Numeric Count In Password\" for=\"c7\">Numeric</label>\r\n                                                                                                                </div>\r\n                                                                                                                <div class=\"col-sm-8\">\r\n                                                                                                                        <input required\r\n                                                                                                                             #controlpasswordNumeric=\"ngModel\" \r\n                                                                                                                            [(ngModel)]=\"controluser.password_numeric\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                                                                                            style=\"margin: 1px;\" type=\"text\" id=\"c7\" class='form-control' name=\"same3\">\r\n                                                                                                                             <div *ngIf=\"controlpasswordNumeric.invalid && (controlpasswordNumeric.dirty || controlpasswordNumeric.touched||aForm.submitted)\">\r\n                                                                                                                                <p class=\"text text-danger\" *ngIf=\"controlpasswordNumeric.errors.required\">\r\n                                                                                                                                  Please Enter Numeric Character Length.\r\n                                                                                                                                </p>\r\n                                                                                                                            </div>\r\n                                                                                                                </div>\r\n\r\n                                                                                                        </div>\r\n                                                                                                        <label for=\"textfield\" class=\"control-label col-sm-2\"></label>\r\n                                                                                                        <div class=\"col-sm-10\">\r\n                                                                                                                <div class=\"col-sm-2\">\r\n                                                                                                                    \r\n                                                                                                                        <label class='inline' title=\"Alphabet Count In Password\" for=\"c7\">Alphabets</label>\r\n                                                                                                                </div>\r\n                                                                                                                <div class=\"col-sm-8\">\r\n                                                                                                                        <input required\r\n                                                                                                                             #controlpasswordAlphabets=\"ngModel\" \r\n                                                                                                                            [(ngModel)]=\"controluser.password_alphabets\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                                                                                            style=\"margin: 1px;\" type=\"text\" id=\"c7\" class='form-control' name=\"same3\">\r\n                                                                                                                            <div *ngIf=\"controlpasswordAlphabets.invalid && (controlpasswordAlphabets.dirty || controlpasswordAlphabets.touched||aForm.submitted)\">\r\n                                                                                                                                <p class=\"text text-danger\" *ngIf=\"controlpasswordAlphabets.errors.required\">\r\n                                                                                                                                  Please Enter Alphabets Character Length.\r\n                                                                                                                                </p>\r\n                                                                                                                            </div>\r\n                                                                                                                </div>\r\n\r\n                                                                                                        </div>\r\n\r\n                                                                                        </div>\r\n                                                                                    \r\n                                                                                    \r\n                                                                                       \r\n                                                                                        \r\n                                                                                    <div class=\"form-group row\">\r\n                                                                                        <label for=\"textfield\" title=\"Role Visibility\" class=\"control-label col-sm-2\">Role</label>\r\n                                                                                                <div class=\"col-sm-10\">\r\n                                                                                                        <div class=\"col-sm-2\">\r\n                                                                                                                        <input [(ngModel)]=\"controluser.role\" value='show'\r\n                                                                                                                            type=\"radio\" id=\"c7\" class='icheck-me' name=\"role\" data-skin=\"square\" data-color=\"blue\">\r\n                                                                                                                        <label class='inline' for=\"c7\">Yes</label>\r\n                                                                                                        </div>\r\n                                                                                                        <div class=\"col-sm-2\">\r\n                                                                                                                        <input [(ngModel)]=\"controluser.role\" value=\"hide\"\r\n                                                                                                                            type=\"radio\" id=\"c7\" class='icheck-me' name=\"role\" data-skin=\"square\" data-color=\"blue\">\r\n                                                                                                                        <label class='inline' for=\"c7\">No</label>\r\n                                                                                                        </div>\r\n                                                                                                </div>\r\n                                                                                        </div>\r\n                                                                                    \r\n                                                                                    <div class=\"form-group row\">\r\n                                                                                        <label for=\"textfield\" class=\"control-label col-sm-2\" title=\"Status Visibility\">Status</label>\r\n                                                                                                <div class=\"col-sm-10\">\r\n                                                                                                        <div class=\"col-sm-2\">\r\n                                                                                                                        <input [(ngModel)]=\"controluser.status\" value=\"show\" type=\"radio\" id=\"c7\" class='icheck-me' name=\"status\" data-skin=\"square\" data-color=\"blue\">\r\n                                                                                                                        <label class='inline' for=\"c7\">Yes</label>\r\n                                                                                                        </div>\r\n                                                                                                        <div class=\"col-sm-2\">\r\n                                                                                                                        <input [(ngModel)]=\"controluser.status\" value=\"hide\" type=\"radio\" id=\"c7\" class='icheck-me' name=\"status\" data-skin=\"square\" data-color=\"blue\">\r\n                                                                                                                        <label class='inline' for=\"c7\">No</label>\r\n                                                                                                        </div>\r\n                                                                                                </div>\r\n                                                                                        </div>\r\n                                                                                         \r\n                                                                                        <div class=\"form-group row\">\r\n                                                                                        <label for=\"textfield\" title=\"Email Visibility\" class=\"control-label col-sm-2\">Email</label>\r\n                                                                                                <div class=\"col-sm-10\">\r\n                                                                                                        <div class=\"col-sm-2\">\r\n                                                                                                                        <input [(ngModel)]=\"controluser.email\" value='show'\r\n                                                                                                                            type=\"radio\" id=\"c7\" class='icheck-me' name=\"email\" data-skin=\"square\" data-color=\"blue\">\r\n                                                                                                                        <label class='inline' for=\"c7\">Yes</label>\r\n                                                                                                        </div>\r\n                                                                                                        <div class=\"col-sm-2\">\r\n                                                                                                                        <input [(ngModel)]=\"controluser.email\" value=\"hide\"\r\n                                                                                                                            type=\"radio\" id=\"c7\" class='icheck-me' name=\"email\" data-skin=\"square\" data-color=\"blue\">\r\n                                                                                                                        <label class='inline' for=\"c7\">No</label>\r\n                                                                                                        </div>\r\n                                                                                                </div>\r\n                                                                                        </div>\r\n                                                                                         \r\n                                                                                        <div class=\"form-group row\">\r\n                                                                                        <label for=\"textfield\" title=\"Email Visibility\" class=\"control-label col-sm-2\">Department</label>\r\n                                                                                                <div class=\"col-sm-10\">\r\n                                                                                                        <div class=\"col-sm-2\">\r\n                                                                                                                        <input [(ngModel)]=\"controluser.department\" value='show'\r\n                                                                                                                            type=\"radio\" id=\"c7\" class='icheck-me' name=\"department\" data-skin=\"square\" data-color=\"blue\">\r\n                                                                                                                        <label class='inline' for=\"c7\">Yes</label>\r\n                                                                                                        </div>\r\n                                                                                                        <div class=\"col-sm-2\">\r\n                                                                                                                        <input [(ngModel)]=\"controluser.department\" value=\"hide\"\r\n                                                                                                                            type=\"radio\" id=\"c7\" class='icheck-me' name=\"department\" data-skin=\"square\" data-color=\"blue\">\r\n                                                                                                                        <label class='inline' for=\"c7\">No</label>\r\n                                                                                                        </div>\r\n                                                                                                </div>\r\n                                                                                        </div>\r\n                                                                                    \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- /.panel-group -->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"second\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-group panel-widget\" id=\"ac5\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#c7\" data-toggle=\"collapse\" data-parent=\"#ac5\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTab #2 Question #1\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-title -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-heading -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"c7\" class=\"panel-collapse collapse in\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo eos doloribus dicta tempore magni. Dolores, obcaecati neque provident facere fugiat.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-body -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /#c1.panel-collapse collapse in -->\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel panel-default -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#c8\" data-toggle=\"collapse\" data-parent=\"#ac5\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTab #2 Lorem ipsum dolor sit amet ?\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-title -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-heading -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"c8\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum pariatur laudantium nisi quae commodi nihil officia reiciendis voluptatum placeat distinctio tempore incidunt quasi perspiciatis ducimus in at iure qui voluptatem animi delectus deleniti\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tadipisci facilis sapiente ad repellat excepturi.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-body -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /#c1.panel-collapse collapse in -->\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel panel-default -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#c9\" data-toggle=\"collapse\" data-parent=\"#ac5\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTab #2 Question #3\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-title -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-heading -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"c9\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, nobis, nihil, repellat, adipisci quia soluta sit repellendus eos recusandae esse eveniet accusantium maiores a natus explicabo deserunt nostrum eaque nesciunt numquam aut! Nulla, aspernatur,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceat, quam nobis inventore temporibus animi laudantium vero commodi cupiditate officia rerum quis perspiciatis debitis repellendus laboriosam sapiente. Eos, suscipit, quasi voluptate sapiente eveniet amet ipsum.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-body -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /#c1.panel-collapse collapse in -->\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel panel-default -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- /.panel-group -->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"thirds\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-group panel-widget\" id=\"ac6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#c10\" data-toggle=\"collapse\" data-parent=\"#ac6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTab #3 Lorem ipsum dolor sit?\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-title -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-heading -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"c10\" class=\"panel-collapse collapse in\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illo eos doloribus dicta tempore magni. Dolores, obcaecati neque provident facere fugiat.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-body -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /#c1.panel-collapse collapse in -->\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel panel-default -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#c11\" data-toggle=\"collapse\" data-parent=\"#ac6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTab #3 Lorem ipsum ?\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-title -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-heading -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"c11\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum pariatur laudantium nisi quae commodi nihil officia reiciendis voluptatum placeat distinctio tempore incidunt quasi perspiciatis ducimus in at iure qui voluptatem animi delectus deleniti\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tadipisci facilis sapiente ad repellat excepturi.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-body -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /#c1.panel-collapse collapse in -->\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel panel-default -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#c12\" data-toggle=\"collapse\" data-parent=\"#ac6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTab #3 Question #3\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-title -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-heading -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"c12\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, nobis, nihil, repellat, adipisci quia soluta sit repellendus eos recusandae esse eveniet accusantium maiores a natus explicabo deserunt nostrum eaque nesciunt numquam aut! Nulla, aspernatur,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceat, quam nobis inventore temporibus animi laudantium vero commodi cupiditate officia rerum quis perspiciatis debitis repellendus laboriosam sapiente. Eos, suscipit, quasi voluptate sapiente eveniet amet ipsum.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel-body -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /#c1.panel-collapse collapse in -->\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- /.panel panel-default -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- /.panel-group -->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n                                                              \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n                                                \r\n                                            </form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>"

/***/ }),

/***/ "../../../../../resources/assets/src/app/template/manage-role.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12\">\r\n                                            <form #aForm=\"ngForm\"  class='form-horizontal form-bordered'  role=\"form\" novalidate (ngSubmit) = \"aForm.valid&&roleFormSubmit(aForm);\"  name=\"userFormForm\">\r\n\t\t\t\t\t\t<div class=\"box box-color box-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"box-title\">\r\n\t\t\t\t\t\t\t\t<h3><i class=\"fa fa-edit\"></i>Manage Role & Permission</h3>\r\n                                                                <div *ngIf=\"!id\" class=\"pull-right\" style=\"margin-right: 16px;\">\r\n                                                                    <a routerLink=\"/role-manager\"><button  class=\"btn default\"><i class=\"fa fa-arrow-left\"></i></button></a>\r\n                                                                    <button  class=\"btn default\"><i class=\"fa fa-save\"></i></button>\r\n                                                                </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"box-content nopadding\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"rolename\" class=\"control-label col-sm-2\">Role Name</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n                                                                                        <input id=\"rolename\"\r\n                                                                                                type=\"text\"                \r\n                                                                                                #rolename=\"ngModel\"\r\n                                                                                                [(ngModel)]=\"rolePermission\"\r\n                                                                                                required class='complexify-me form-control'  placeholder=\"Role Name\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                                                                <div *ngIf=\"rolename.invalid && (rolename.dirty || rolename.touched||aForm.submitted)\">\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"rolename.errors.required\">\r\n                                                                                                      Role Name is required.\r\n                                                                                                    </p>\r\n                                                                                                </div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n                                                                        <div class=\"form-group\">\r\n                                                                            <label style=\"margin-left: 40%;\" class=\"control-label\">Permissions:</label>\r\n                                                                        </div>                    \r\n                                    \r\n                                       \r\n                                                            \r\n<div class=\"form-group\">\r\n    <div *ngFor=\"let data of roleControl\">\t\t\t\t\t\t\t\t\t\r\n        <label title=\"{{data.title}}\" for=\"{{data.title}}\" class=\"control-label col-sm-2\">{{data.title}}</label>\r\n        <div class=\"col-sm-4\">\r\n                <div class=\"col-sm-5\">\r\n                                                   <label style=\"text-transform: capitalize;\" class=\"containerradio\">\r\n                                                     <input value='{{data.first}}' [(ngModel)]=\"rolesModel[data.right_name]\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                                    type=\"radio\"  name=\"{{data.right_name}}\" >\r\n                                                       <span class=\"checkmarkradio\"></span>{{data.first}}\r\n                                                   </label>\r\n                                                </div>\r\n                                                <div class=\"col-sm-5\">\r\n                                                    <label class=\"containerradio\" style=\"text-transform: capitalize;\" >\r\n                                                           \r\n                                                           <input value='{{data.last}}' [(ngModel)]=\"rolesModel[data.right_name]\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                                        type=\"radio\"  name=\"{{data.right_name}}\" >\r\n                                                           <span class=\"checkmarkradio\"></span>{{data.last}}\r\n                                                       </label>\r\n                                                </div>\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                            \r\n                                                           \r\n                                    \r\n                                    \r\n\t\t\t\t\t\t\t\t\t<div class=\"form-actions\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n                                                </form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>"

/***/ }),

/***/ "../../../../../resources/assets/src/app/template/manage-users.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t<div class=\"box box-color box-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"box-title\">\r\n\t\t\t\t\t\t\t\t<h3><i class=\"fa fa-edit\"></i>Manage Users</h3>\r\n                                                                <div class=\"pull-right\" style=\"margin-right: 16px;\">\r\n                                     <a routerLink=\"/users\"><button  class=\"btn default\"><i class=\"fa fa-arrow-left\"></i></button></a> \r\n\r\n                                                                </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"box-content nopadding\">\r\n\t\t\t\t\t\t\t\t<form #aForm=\"ngForm\"  class='form-horizontal form-bordered'  role=\"form\" novalidate (ngSubmit) = \"aForm.valid&&userFormSubmit(aForm);\"  name=\"userFormForm\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"textfield\" class=\"control-label col-sm-2\">User ID</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n                                                                                    \r\n                                                                                        <input id=\"contactuserid\"\r\n                                                                                                type=\"text\"                \r\n                                                                                                #contactuserid=\"ngModel\"\r\n                                                                                                [(ngModel)]=\"user.contact_userid\"\r\n                                                                                                required class='complexify-me form-control' minlength=\"{{controluser.userid_length}}\"  placeholder=\"User ID\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                                                                <div *ngIf=\"contactuserid.invalid && (contactuserid.dirty || contactuserid.touched||aForm.submitted)\">\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"contactuserid.errors.required\">\r\n                                                                                                      User ID is required.\r\n                                                                                                    </p>\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"contactuserid.errors.minlength\">\r\n                                                                                                      User ID Should Be Minimum {{controluser.userid_length}} Character Long\r\n                                                                                                    </p>\r\n                                                                                                </div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n                                                                    \r\n                                                                        <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"textfield\" class=\"control-label col-sm-2\">Username</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n                                                                                    \r\n                                                                                        <input id=\"contactusername\"\r\n                                                                                                type=\"text\"                \r\n                                                                                                #contactusername=\"ngModel\"\r\n                                                                                                [(ngModel)]=\"user.contact_username\"\r\n                                                                                                required class='complexify-me form-control' minlength=\"{{controluser.username_length}}\"  placeholder=\"Username\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                                                                <div *ngIf=\"contactusername.invalid && (contactusername.dirty || contactusername.touched||aForm.submitted)\">\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"contactusername.errors.required\">\r\n                                                                                                      Username is required.\r\n                                                                                                    </p>\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"contactusername.errors.minlength\">\r\n                                                                                                      Username Should Be Minimum {{controluser.username_length}} Character Long\r\n                                                                                                    </p>\r\n                                                                                                </div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n                                                                    \r\n                                                                        <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"textfield\" class=\"control-label col-sm-2\">User Initials</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n                                                                                    \r\n                                                                                        <input id=\"contactuserInitial\"\r\n                                                                                                type=\"text\"                \r\n                                                                                                #contactuserInitial=\"ngModel\"\r\n                                                                                                [(ngModel)]=\"user.contact_userinitial\"\r\n                                                                                                required class='complexify-me form-control' minlength=\"{{controluser.userInitial_length}}\"  placeholder=\"User Initials\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                                                                <div *ngIf=\"contactuserInitial.invalid && (contactuserInitial.dirty || contactuserInitial.touched||aForm.submitted)\">\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"contactuserInitial.errors.required\">\r\n                                                                                                      User Initial is required.\r\n                                                                                                    </p>\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"contactuserInitial.errors.minlength\">\r\n                                                                                                      User Initial Should Be Minimum {{controluser.userInitial_length}} Character Long\r\n                                                                                                    </p>\r\n                                                                                                </div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n                                                                    \r\n                                                                    <div class=\"form-group\" *ngIf=\"controluser.department==='show'\">\r\n                                                                            <label for=\"textfield\" class=\"control-label col-sm-2\">Department</label>\r\n                                                                            <div class=\"col-sm-10\">\r\n                                                                                    \r\n                                                                                <select class=\"form-control\" name=\"contact_userdepartment\" [(ngModel)]=\"user.contact_userdepartment\" #contactuserdepartment=\"ngModel\">\r\n                                                                                    <option value=\"\">---Select</option>\r\n                                                                                    <option *ngFor=\"let item of departments\" value=\"{{item.id}}\">{{item.department_name}}</option>\r\n                                                                                  </select>\r\n                                                                                <div *ngIf=\"contactuserdepartment.invalid && (contactuserdepartment.dirty || contactuserdepartment.touched||aForm.submitted)\">\r\n                                                                                    <p class=\"text text-danger\" *ngIf=\"contactuserdepartment.errors.required\">\r\n                                                                                      Department is required.\r\n                                                                                    </p>\r\n                                                                                </div>\r\n                                                                                    \r\n                                                                            </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n                                                                    \r\n                                                                        \r\n                                                                    \r\n                                                                        <div  *ngIf=\"!id\" class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"textfield\" class=\"control-label col-sm-2\">Passworad</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div  class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"contactpassword\" (keyup)=\"_keyPress($event)\"\r\n                                                                                               type=\"password\"    minlength=\"{{controluser.password_length}}\"            \r\n                                                                                                #contactpassword=\"ngModel\"\r\n                                                                                                [(ngModel)]=\"user.contact_password\"\r\n                                                                                                required class='complexify-me form-control'  placeholder=\"Password\" [ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"passwordType($event);\" class=\"input-group-addon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-key\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                                        </div>\r\n                                                                                    <div *ngIf=\"contactpassword.invalid && (contactpassword.dirty || contactpassword.touched||aForm.submitted)\">\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"contactpassword.errors.required\">\r\n                                                                                                      Password is required.\r\n                                                                                                    </p>\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"contactpassword.errors.minlength\">\r\n                                                                                                         Password Should Be Minimum {{controluser.password_length}} Character Long.\r\n                                                                                                    </p>\r\n                                                                                    </div>\r\n                                                                                    <div *ngIf=\"contactpasswordInvalid || contactpasswordNumeric || contactpasswordAlphabet\">\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"contactpasswordInvalid || contactpasswordNumeric || contactpasswordAlphabet\">\r\n                                                                                                      Password Should Contain atleast {{controluser.password_specialChar}} Special Character ,{{controluser.password_numeric}} Numeric Character ,{{controluser.password_alphabets}} Alphabetic Character.\r\n                                                                                                    </p>\r\n                                                                                    </div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n                                                                        </div>\r\n                                                                    \r\n                                                                    \r\n                                                                        <div  *ngIf=\"id\" class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"textfield\" class=\"control-label col-sm-2\">Password</label>\r\n\t\t\t\t\t\t\t\t\t\t<div  class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"contactpassword\" (keyup)=\"_keyPress($event)\"\r\n                                                                                               type=\"password\"    minlength=\"{{controluser.password_length}}\"            \r\n                                                                                                #contactpassword=\"ngModel\"\r\n                                                                                                [(ngModel)]=\"user.contact_password\"\r\n                                                                                                class='complexify-me form-control'  placeholder=\"Password\" [ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n                                                                                    <div *ngIf=\"user.contact_password\">\r\n                                                                                                    \r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"user.contact_password < controluser.password_length\">\r\n                                                                                                         Password Should Be Minimum {{controluser.password_length}} Character Long.\r\n                                                                                                    </p>\r\n                                                                                    </div>\r\n                                                                                    <div *ngIf=\"user.contact_password && (contactpasswordInvalid || contactpasswordNumeric || contactpasswordAlphabet)\">\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"contactpasswordInvalid || contactpasswordNumeric || contactpasswordAlphabet\">\r\n                                                                                                      Password Should Contain atleast {{controluser.password_specialChar}} Special Character ,{{controluser.password_numeric}} Numeric Character ,{{controluser.password_alphabets}} Alphabetic Character.\r\n                                                                                                    </p>\r\n                                                                                    </div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n                                                                        </div>\r\n                                                                    \r\n                                                                        <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"textfield\" class=\"control-label col-sm-2\">Confirm Password</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"confirmpassword\" \r\n                                                                                               type=\"password\"         \r\n                                                                                                #confirmpassword=\"ngModel\"\r\n                                                                                                [(ngModel)]=\"user.confirm_password\"\r\n                                                                                                required class='complexify-me form-control'  placeholder=\"Confirm Password\" [ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n                                                                                        </div>\r\n                                                                                    <div *ngIf=\"user.confirm_password != user.contact_password && user.contact_password\">\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"user.confirm_password == null\">\r\n                                                                                                      Confirm Password is required.\r\n                                                                                                    </p>\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"user.confirm_password != user.contact_password && user.confirm_password != null\">\r\n                                                                                                         Password and Confirm Password Does Not Match.\r\n                                                                                                    </p>\r\n                                                                                    </div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n                                                                    \r\n                                                                        \r\n                                                                    \r\n                                                                    \r\n                                                                    \r\n                                                                        <div class=\"form-group\" *ngIf=\"controluser.email==='show'\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"textfield\" class=\"control-label col-sm-2\">Email</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n                                                                                        <input id=\"contactemail\"\r\n                                                                                                type=\"text\"                \r\n                                                                                                #contactemail=\"ngModel\"\r\n                                                                                                [(ngModel)]=\"user.contact_email\"\r\n                                                                                                required class='complexify-me form-control' placeholder=\"Email\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                                                                pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n                                                                                                <div *ngIf=\"contactemail.invalid && (contactemail.dirty || contactemail.touched||aForm.submitted)\">\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"contactemail.errors.required\">\r\n                                                                                                      Email is required.\r\n                                                                                                    </p>\r\n                                                                                                    <p class=\"text text-danger\" *ngIf=\"contactemail.errors.pattern\">\r\n                                                                                                      Enter Correct Email\r\n                                                                                                    </p>\r\n                                                                                                </div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n                                                                    \r\n                                                                         <div class=\"form-group\" *ngIf=\"controluser.role==='show'\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"textfield\" class=\"control-label col-sm-2\">Role</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n                                                                                    \r\n                                                                                    <select class=\"form-control\" name=\"f_website\" [(ngModel)]=\"user.contact_role\" #contactrole=\"ngModel\">\r\n                                                                                        <option value=\"\">---Select</option>\r\n                                                                                        <option *ngFor=\"let item of controlRole\" value=\"{{item.id}}\">{{item.role_name}}</option>\r\n                                                                                      </select>\r\n                                                                                    <div *ngIf=\"contactrole.invalid && (contactrole.dirty || contactrole.touched||aForm.submitted)\">\r\n                                                                                        <p class=\"text text-danger\" *ngIf=\"contactrole.errors.required\">\r\n                                                                                          Role is required.\r\n                                                                                        </p>\r\n                                                                                    </div>\r\n                                                                                    \r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n                                                                    \r\n\r\n                                                                    \r\n                                                                    <div class=\"form-group\" *ngIf=\"controluser.status==='show'\">\r\n                                                                            <label for=\"textfield\" class=\"control-label col-sm-2\">Status</label>\r\n                                                                            <div class=\"select col-sm-10\">\r\n                                                                            <select class=\"form-control\" name=\"mstatus\" [(ngModel)]=\"user.contact_status\" #mstatus=\"ngModel\" required>\r\n                                                                                <option value=\"enable\">Enabled</option>\r\n                                                                                <option value=\"disable\">Disabled</option>\r\n                                                                            </select>\r\n                                                                            <div class=\"select__arrow\"></div>\r\n                                                                            <div *ngIf=\"mstatus.invalid && (mstatus.dirty || mstatus.touched||aForm.submitted)\">\r\n                                                                              <p class=\"text text-danger\" *ngIf=\"mstatus.errors.required\">\r\n                                                                                Status is required.\r\n                                                                              </p>\r\n                                                                            </div>\r\n                                                                            </div>\r\n                                                                            \r\n                                                                          </div>\r\n                                                                    \r\n                                                                    \r\n                                                                    \r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-actions\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                                                                                <button type=\"button\" (click)=\"cancelForm()\" class=\"btn btn-default\">Cancel</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>"

/***/ }),

/***/ "../../../../../resources/assets/src/app/template/more-login.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"wrapper\">\n\t\t<h1>\n\t\t\t<a href=\"javascript:void(0);\">\n\t\t\t\t<img src=\"{{BASE_API_URL}}/public/assets/img/tantrasoft-logo.jpg\" alt=\"Logo\" class='retina-ready' width=\"59\" height=\"49\">TantraSoft</a>\n\t\t</h1>\n\t\t<div class=\"login-body\">\n\t\t\t<h2>SIGN IN</h2>\n\t\t\t<form #aForm=\"ngForm\"  role=\"form\" novalidate (ngSubmit) = \"aForm.valid&&loginContact(aForm);\"  name=\"agentForm\">\n\t\t\t\t\n                            \n                            \n                            <div class=\"form-group\">\n                                    <input id=\"contactusername\"\n                                                type=\"text\"                \n                                                #contactemail=\"ngModel\"\n                                                [(ngModel)]=\"login.contactemail\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                                                required class='complexify-me form-control' maxlength=\"20\"  placeholder=\"Email address\" [ngModelOptions]=\"{standalone: true}\">\n\n                                <div *ngIf=\"contactemail.invalid && (contactemail.dirty || contactemail.touched||aForm.submitted)\">\n                                                    <p class=\"text text-danger\" *ngIf=\"contactemail.errors.required\">\n                                                      Email is required.\n                                                    </p>\n                                                    <div  *ngIf=\"contactemail.errors && contactemail.errors.pattern\">\n                                                        Email is invalid\n                                                    </div>\n                                                    <p class=\"text text-danger\" *ngIf=\"contactemail.errors.maxlength\">\n                                                      Email shoud not be 20 characters long.\n                                                    </p>\n                                                </div>\n                            </div>\n                            \n                            <div class=\"form-group\">\n                                    <input\n                                        id=\"contactPassword\"\n                                        type=\"password\"                \n                                        #contactPassword=\"ngModel\"\n                                        [(ngModel)]=\"login.contactPassword\"\n                                        required class='form-control' placeholder=\"Password\" [ngModelOptions]=\"{standalone: true}\">\n\n                                        <div *ngIf=\"contactPassword.invalid && (contactPassword.dirty || contactPassword.touched||aForm.submitted)\">\n                                                     <p class=\"text text-danger\"  *ngIf=\"contactPassword.errors && contactPassword.errors.required\">\n                                                        Password is required\n                                                         </p>\n                                                </div>\n                                \n                            </div>\n                            \n                            \n\t\t\t\t\n\t\t\t\t<div class=\"submit\">\n\t\t\t\t\t\n\t\t\t\t\t<input type=\"submit\" value=\"Sign In\" class='btn btn-primary'>\n\t\t\t\t</div>\n\t\t\t</form>\n                        \n                         <div id=\"page-content-wrapper\">\n             \n        </div>\n                        \n\t\t\t<div class=\"forget\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<span>Forgot password?</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../resources/assets/src/app/template/role.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-12\">\n\t\t<div class=\"box\">\n\t\t\t<div class=\"box-title\">\n\t\t\t\t<h3>\n\t\t\t\t\t<i class=\"fa fa-rouble\"></i>\n\t\t\t\t\t Role Manager\n\t\t\t\t</h3>\n                            <div class=\"pull-right\">\n                                \n                                <a routerLink=\"/role-manager/add\"><button class=\"btn default\" title=\"Add Role\"> <i class=\"fa fa-rouble\"></i></button></a>\n                            \n                           \n                                    \n                            </div>\n                        </div>\n\t\t\t<div class=\"box-content nopadding\">\n\t\t\t\t\n                            <div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"box\">\n\t\t\t\t\t\t\t<div class=\"box-title\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"box-content nopadding\">\n\t\t\t\t\t\t\t\t<table class=\"table table-hover table-nomargin table-colored-header\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Role Name</th>\n<!--\t\t\t\t\t\t\t\t\t\t\t<th>Permission</th>-->\n\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let data of roles\">\n                                                                                    <td>{{data.role_name}}</td>\n<!--                                                                                    <td (click)=\"manageRolePermissions(data.id)\" style=\"cursor: pointer;\">Manage</td>-->\n                                                                                    <td>\n                                                                                        <a href='javascript:void(0);' (click)=\"manageRolePermissions(data.id)\" class=\"btn btn-blue\"><i class=\"fa fa-cogs\">&nbsp;Manage</i></a>\n                                                                                       \n                                                                                    </td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../resources/assets/src/app/template/users.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"box\">\r\n\t\t\t<div class=\"box-title\">\r\n\t\t\t\t<h3>\r\n\t\t\t\t\t<i class=\"fa fa-address-book-o\"></i>\r\n\t\t\t\t\t Users\r\n\t\t\t\t</h3>\r\n                            <div class=\"pull-right\">\r\n<!--                                <button class=\"btn default\" title=\"Delete\" (click)=\"deleteMultiple()\" [disabled]=\"userIds.length ==0\"> <i class=\"fa fa-trash\"></i> </button>-->\r\n                                <a routerLink=\"/users/add\"><button class=\"btn default\" title=\"Add Users\"> <i class=\"fa fa-user-o\"></i></button></a>\r\n                            <button class=\"btn default\" title=\"Reload table\" (click)=\"reloadTable()\"> <i class=\"fa fa-refresh\"></i></button>\r\n                           \r\n                                    <div class=\"btn-group filter-btn\" [ngClass]=\"{'open':filterOpen}\">\r\n                                <button class=\"btn default dropdown-toggle\" id=\"menu1\" type=\"button\" (click)=\"showFilter()\" ><i class=\"fa fa-filter\"></i></button>\r\n                                 <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\" >\r\n                                        <div class=\"filter-option2\">\r\n            <div class=\"portlet-sub-title\"> Filters </div>\r\n            <div class=\"portlet-body form\">\r\n              <form  (ngSubmit) = \"filterUsers()\" role=\"form\" name=\"search_form\">\r\n                <div class=\"form-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                      <label>Username</label>\r\n                      <input class=\"form-control\" placeholder=\"Username\" name=\"f_username\" [(ngModel)]=\"search.username\"  type=\"text\"  >\r\n                    </div>\r\n                      <div class=\"form-group col-md-6\">\r\n                      <label>Email</label>\r\n                      <input class=\"form-control\" placeholder=\"Email\" name=\"f_username\" [(ngModel)]=\"search.email\"  type=\"text\"  >\r\n                    </div>\r\n                </div>\r\n                    \r\n                     <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                      <label>Status</label>\r\n                      <select class=\"form-control\" name=\"mstatus\" [(ngModel)]=\"search.status\">\r\n                            <option value=\"enable\">Enabled</option>\r\n                            <option value=\"disable\">Disabled</option>\r\n                        </select>\r\n                        <div class=\"select__arrow\"></div>\r\n                    </div>\r\n                      <div class=\"form-group col-md-6\">\r\n                      <label>Role</label>\r\n                      <select class=\"form-control\" name=\"f_website\" [(ngModel)]=\"search.contact_role\">\r\n                        <option value=\"\">---Select</option>\r\n                        <option *ngFor=\"let item of controlRole\" value=\"{{item.id}}\">{{item.role_name}}</option>\r\n                      </select>\r\n                      \r\n                    </div>\r\n                </div>\r\n                    \r\n                  </div>\r\n                <div class=\"form-actions\">\r\n                  <button type=\"submit\" class=\"btn default  dropdown-toggle\"   >Submit</button>\r\n                  <button type=\"button\" class=\"btn default  dropdown-togglet\" (click)=\"hideFilter()\">Cancel</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n                            </div>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n\t\t\t<div class=\"box-content nopadding\">\r\n\t\t\t\t\r\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-hover table-nomargin table-colored-header table-striped table-bordered\" width=\"100%\" cellspacing=\"0\"></table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div id=\"userPassword\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n              <h4 class=\"modal-title\">Change Password</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"portlet-body form\">\r\n                <form  #passwordForm=\"ngForm\"  role=\"form\" novalidate (ngSubmit) = \"savePassword(passwordForm);\" name=\"passwordForm\">\r\n                  <div class=\"form-body\">\r\n                    <div class=\"form-group\">\r\n                      <label>Username</label>\r\n                      <input class=\"form-control\" name=\"username\" type=\"text\" disabled=\"\" [(ngModel)]=\"passwordModel.username\">\r\n                    </div>\r\n                      \r\n                    <div class=\"form-group\">\r\n                      <label>New password</label>\r\n                      \r\n                        \r\n                                <input id=\"contactpasswords\"\r\n                               type=\"password\"    minlength=\"{{controluser.password_length}}\"            \r\n                                #contactpassword=\"ngModel\"\r\n                                [(ngModel)]=\"passwordModel.new_password\" (keyup)=\"_keyPress($event)\"\r\n                                required class='form-control'  placeholder=\"Password\" [ngModelOptions]=\"{standalone: true}\">\r\n                        \r\n                        <div *ngIf=\"contactpassword.invalid && (contactpassword.dirty || contactpassword.touched||passwordForm.submitted)\">\r\n                                        <p class=\"text text-danger\" *ngIf=\"contactpassword.errors.required\">\r\n                                          Password is required.\r\n                                        </p>\r\n                                        <p class=\"text text-danger\" *ngIf=\"contactpassword.errors.minlength\">\r\n                                             Password Should Be Minimum {{controluser.password_length}} Character Long.\r\n                                        </p>\r\n                        </div>\r\n                        <div *ngIf=\"contactpasswordInvalid || contactpasswordNumeric || contactpasswordAlphabet\">\r\n                                    <p class=\"text text-danger\" *ngIf=\"contactpasswordInvalid || contactpasswordNumeric || contactpasswordAlphabet\">\r\n                                      Password Should Contain atleast {{controluser.password_specialChar}} Special Character ,{{controluser.password_numeric}} Numeric Character ,{{controluser.password_alphabets}} Alphabetic Character.\r\n                                    </p>\r\n                        </div>\r\n                     \r\n                    </div>\r\n                      \r\n                      \r\n                     <div class=\"form-group\">\r\n                      <label>Confirm password</label>\r\n                      <input class=\"form-control\" name=\"confirm_password\"  placeholder=\"Confirm password\" type=\"password\" [(ngModel)]=\"passwordModel.confirm_password\" #confirm_password=\"ngModel\" required validateEqual=\"new_password\">\r\n                        <p class=\"text text-danger\" *ngIf=\"confirm_password.invalid && (confirm_password.dirty || confirm_password.touched||passwordForm.submitted) && confirm_password.errors.required\">\r\n                          Confirm Password is required.\r\n                        </p>\r\n                     \r\n                        <p class=\"text text-danger\" *ngIf=\"passwordModel.new_password != passwordModel.confirm_password && passwordModel.confirm_password != null\">\r\n                            Password does not match\r\n                        </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-actions\">\r\n                    <button type=\"submit\" [disabled]=\"passwordModel.new_password != passwordModel.confirm_password && passwordModel.confirm_password != null\"  class=\"btn default\">Save</button>\r\n                    <button type=\"button\" class=\"btn default\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "../../../../../resources/assets/src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../resources/assets/src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../resources/assets/src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../resources/assets/src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../resources/assets/src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map