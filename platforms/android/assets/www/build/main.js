webpackJsonp([9],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preference_preference__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InvestmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InvestmentPage = /** @class */ (function () {
    function InvestmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InvestmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvestmentPage');
    };
    InvestmentPage.prototype.goToPreferencePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__preference_preference__["a" /* PreferencePage */]);
    };
    InvestmentPage.prototype.goToHistoryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__history_history__["a" /* HistoryPage */]);
    };
    InvestmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-investment',template:/*ion-inline-start:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\investment\investment.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n\n\n    <ion-buttons left>\n\n        <button ion-button icon-only menuToggle>\n\n          <ion-icon name="md-menu"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n      \n\n    <ion-title>Investment</ion-title>\n\n\n\n    <!--<ion-buttons right>\n\n      <span>\n\n        <img class="padding-right" src="assets/images/viet.png" alt="vietnam_flag">\n\n        <img src="assets/images/uk.png" alt="uk_flag">\n\n      </span>\n\n    </ion-buttons>-->\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <img class="loginicon" src="assets/images/investment-icon.png" alt="investment">\n\n  <p class="logintitle">Investment</p>\n\n  <img class="blueline" src="assets/images/blueline.jpg" alt="blueline">\n\n\n\n  <div class="container">\n\n    <button ion-button icon-left block color="danger" class="paddingbtn" (click)="goToPreferencePage()">\n\n    <ion-icon name="md-checkmark-circle-outline"></ion-icon>  \n\n      <strong>INVESTMENT PREFERENCE</strong>\n\n    </button>\n\n    <button ion-button icon-left block color="danger" class="marginbtn" (click)="goToHistoryPage()">\n\n    <ion-icon name="md-checkmark-circle-outline"></ion-icon>  \n\n      <strong>INVESTMENT HISTORY</strong>\n\n    </button>\n\n  </div>\n\n\n\n</ion-content> '/*ion-inline-end:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\investment\investment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InvestmentPage);
    return InvestmentPage;
}());

//# sourceMappingURL=investment.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_confirm__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PreferencePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PreferencePage = /** @class */ (function () {
    function PreferencePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PreferencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreferencePage');
    };
    PreferencePage.prototype.goToConfirmPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_confirm__["a" /* ConfirmPage */]);
    };
    PreferencePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PreferencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-preference',template:/*ion-inline-start:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\preference\preference.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n\n\n    <ion-buttons left (click)="goBack();">\n\n        <button ion-button icon-only>\n\n          <ion-icon name="ios-arrow-back-outline"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n      \n\n    <ion-title>Investment Preference</ion-title>\n\n\n\n    <!--<ion-buttons right>\n\n      <span>\n\n        <img class="padding-right" src="assets/images/viet.png" alt="vietnam_flag">\n\n        <img src="assets/images/uk.png" alt="uk_flag">\n\n      </span>\n\n    </ion-buttons>-->\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <img class="loginicon" src="assets/images/preference-icon.png" alt="investment">\n\n  <p class="logintitle">Investment Preference</p>\n\n  <img class="blueline" src="assets/images/blueline.jpg" alt="blueline">\n\n\n\n  <div class="container">\n\n    <ion-list>\n\n    <ion-item>\n\n      <ion-label>Deposit Type</ion-label>\n\n      <ion-select >\n\n        <ion-option value="nes">Investment</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Street</ion-label>\n\n        <ion-input type="text">Amount</ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">City</ion-label>\n\n        <ion-input type="text">Tenure</ion-input>\n\n      </ion-item>     \n\n  </ion-list> \n\n\n\n  <ion-list>\n\n    <ion-item class="custom-margin-top">\n\n      <ion-label>Expected Rate</ion-label>\n\n      <ion-select>\n\n        <ion-option value="from">From</ion-option>\n\n      </ion-select>\n\n      <ion-select>\n\n        <ion-option value="to">to</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <button ion-button icon-left block color="danger" class="marginbtn" (click)="goToConfirmPage();"><strong>SUBMIT</strong></button>\n\n\n\n  </div>\n\n\n\n</ion-content> '/*ion-inline-end:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\preference\preference.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PreferencePage);
    return PreferencePage;
}());

//# sourceMappingURL=preference.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ConfirmPage = /** @class */ (function () {
    function ConfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPage');
    };
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-confirm',template:/*ion-inline-start:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\confirm\confirm.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n\n\n    <ion-buttons left>\n\n        <button ion-button icon-only menuToggle>\n\n          <ion-icon name="md-menu"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n      \n\n    <ion-title>Confirmed</ion-title>\n\n\n\n    <!--<ion-buttons right>\n\n      <span>\n\n        <img class="padding-right" src="assets/images/viet.png" alt="vietnam_flag">\n\n        <img src="assets/images/uk.png" alt="uk_flag">\n\n      </span>\n\n    </ion-buttons>-->\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <img class="loginicon" src="assets/images/confirm.png" alt="investment">\n\n  <p class="logintitle">Confirmed</p>\n\n  <img class="blueline" src="assets/images/blueline.jpg" alt="blueline">\n\n\n\n  <div class="container">\n\n    <p class="logintitle">Acknowledgement Number</p>\n\n    <button ion-button color="danger" block outline><strong>ACK1234</strong></button>\n\n  </div>\n\n\n\n</ion-content> '/*ion-inline-end:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\confirm\confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage.prototype.goToHomePage = function () {
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    HistoryPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\history\history.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n\n\n    <ion-buttons left (click)="goBack();">\n\n        <button ion-button icon-only>\n\n          <ion-icon name="ios-arrow-back-outline"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n      \n\n    <ion-title>Investment History</ion-title>\n\n\n\n    <!--<ion-buttons right>\n\n      <span>\n\n        <img class="padding-right" src="assets/images/viet.png" alt="vietnam_flag">\n\n        <img src="assets/images/uk.png" alt="uk_flag">\n\n      </span>\n\n    </ion-buttons>-->\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <img class="loginicon" src="assets/images/investment-icon.png" alt="investment">\n\n  <p class="logintitle">Investment History</p>\n\n  <img class="blueline" src="assets/images/blueline.jpg" alt="blueline">\n\n\n\n  <div class="container">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col padding col-6 class="custom-border">Acknowledge</ion-col>\n\n      <ion-col padding col-6 class="custom-border1">ACK1234</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col padding col-6 class="custom-border">Amount</ion-col>\n\n      <ion-col padding col-6 class="custom-border1">10,000</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col padding col-6 class="custom-border">Tenure</ion-col>\n\n      <ion-col padding col-6 class="custom-border1">5 Years</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col padding col-6 class="custom-border">Interest</ion-col>\n\n      <ion-col padding col-6 class="custom-border1">1.6%</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col padding col-6 class="custom-border">Status</ion-col>\n\n      <ion-col padding col-6 class="custom-border1">Pending Verification</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <button ion-button icon-left block color="danger" class="marginbtn"> <strong>SHOW DETAILS</strong></button>\n\n  </div>\n\n\n\n  <div class="container">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col padding col-6 class="custom-border">Acknowledge</ion-col>\n\n      <ion-col padding col-6 class="custom-border1">ACK1234</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col padding col-6 class="custom-border">Amount</ion-col>\n\n      <ion-col padding col-6 class="custom-border1">10,000</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col padding col-6 class="custom-border">Tenure</ion-col>\n\n      <ion-col padding col-6 class="custom-border1">5 Years</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col padding col-6 class="custom-border">Interest</ion-col>\n\n      <ion-col padding col-6 class="custom-border1">1.6%</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col padding col-6 class="custom-border">Status</ion-col>\n\n      <ion-col padding col-6 class="custom-border1">Pending Verification</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <button ion-button icon-left block color="danger" class="marginbtn"> <strong>SHOW DETAILS</strong></button>\n\n  </div>\n\n\n\n</ion-content> '/*ion-inline-end:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForgotPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForgotPage = /** @class */ (function () {
    function ForgotPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPage');
    };
    ForgotPage.prototype.goToHomePage = function () {
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgot',template:/*ion-inline-start:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\forgot\forgot.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n\n\n    <ion-buttons left (click)="goToHomePage();">\n\n        <button ion-button icon-only>\n\n          <ion-icon name="ios-arrow-back-outline"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n      \n\n    <ion-title>Forgot Password</ion-title>\n\n\n\n    <!--<ion-buttons right>\n\n      <span>\n\n        <img class="padding-right" src="assets/images/viet.png" alt="vietnam_flag">\n\n        <img src="assets/images/uk.png" alt="uk_flag">\n\n      </span>\n\n    </ion-buttons>-->\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="container">\n\n  <img class="loginicon" src="assets/images/forgot-icon.png" alt="investment">\n\n  <p class="logintitle">Forgot Password</p>\n\n  <img class="blueline" src="assets/images/blueline.jpg" alt="blueline">\n\n\n\n  <ion-list>\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">User Id</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Confirm Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n  </ion-list>\n\n\n\n  <button ion-button icon-left block color="danger" class="marginbtn"><strong>SUBMIT</strong></button>\n\n\n\n  </div>\n\n\n\n</ion-content> '/*ion-inline-end:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\forgot\forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/confirm/confirm.module": [
		278,
		8
	],
	"../pages/forgot/forgot.module": [
		282,
		7
	],
	"../pages/history/history.module": [
		280,
		6
	],
	"../pages/home/home.module": [
		283,
		5
	],
	"../pages/investment/investment.module": [
		281,
		4
	],
	"../pages/login/login.module": [
		285,
		3
	],
	"../pages/preference/preference.module": [
		279,
		2
	],
	"../pages/register/register.module": [
		277,
		1
	],
	"../pages/settings/settings.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registerPage = __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\login\login.html"*/'\n\n<ion-content class="customback">\n\n\n\n  <div class="redline"></div>\n\n\n\n  <img class="loginicon" src="assets/images/loginicon.png" alt="login">\n\n  <p class="logintitle">User Login</p>\n\n  <img class="blueline" src="assets/images/blueline.jpg" alt="blueline">\n\n\n\n  <div class="container">\n\n    <ion-list>\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Username</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button block color="danger" class="paddingbtn">Login</button>\n\n    <div class="linktext"><span [navPush]="registerPage">Register</span> | <span>Forgot Password</span></div>\n\n    <div class="login_flag_container"><span><img class="flag_login" src="assets/images/viet.jpg" alt="vietnam"></span><span><img class="flag_login" src="assets/images/uk.jpg" alt="vietnam"></span></div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_investment_investment__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_confirm_confirm__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_history_history__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_preference_preference__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_forgot_forgot__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_web_service_web_service__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Import HttpClientModule from @angular/common/http












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_investment_investment__["a" /* InvestmentPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_preference_preference__["a" /* PreferencePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forgot_forgot__["a" /* ForgotPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preference/preference.module#PreferencePageModule', name: 'PreferencePage', segment: 'preference', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/investment/investment.module#InvestmentPageModule', name: 'InvestmentPage', segment: 'investment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_investment_investment__["a" /* InvestmentPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_preference_preference__["a" /* PreferencePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forgot_forgot__["a" /* ForgotPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_web_service_web_service__["a" /* WebServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */] }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\SAIKAT\Desktop\rbinvapp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\SAIKAT\Desktop\rbinvapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_web_service_web_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__investment_investment__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_forgot__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        //registerPage = RegisterPage;
        this.user = { "password": "", "loginID": "" };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.goToInvestmentPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__investment_investment__["a" /* InvestmentPage */]);
    };
    HomePage.prototype.goToRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.goToForgotPasswordPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__forgot_forgot__["a" /* ForgotPage */]);
    };
    HomePage.prototype.login = function () {
        var _this = this;
        console.log(this.user);
        this.authService.postData(this.user, 'signin').then(function (result) {
            _this.responseData = result;
            console.log("API Response: " + JSON.stringify(_this.responseData));
            if (_this.responseData.code == 0) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__investment_investment__["a" /* InvestmentPage */]);
            }
            else {
                console.log("Pelase check your credentials");
            }
        }, function (err) {
            _this.errData = err;
            // Error log
            console.log("API Error : " + _this.responseData);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\home\home.html"*/'<!--<ion-header>\n\n  <ion-toolbar color="primary">\n\n\n\n    <ion-buttons left>\n\n        <button ion-button icon-only menuToggle>\n\n          <ion-icon name="md-menu"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n      \n\n\n\n\n\n    <ion-buttons right>\n\n      <span>\n\n        <img class="padding-right" src="assets/images/viet.png" alt="vietnam_flag">\n\n        <img src="assets/images/uk.png" alt="uk_flag">\n\n      </span>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>-->\n\n\n\n<ion-content class="custom-back" style="padding-bottom: 0;">\n\n    <div class="formdiv">\n\n      <h2>Do you know how <br>fabulous your life can be?</h2>\n\n      <img src="assets/images/smallline.png" alt="line">\n\n      <div class="social-set">\n\n        <ion-icon name="logo-facebook"></ion-icon>\n\n        <ion-icon name="logo-twitter"></ion-icon>\n\n        <ion-icon name="logo-linkedin"></ion-icon>\n\n      </div>\n\n    </div>\n\n  <div class="container">\n\n    <ion-list>\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Username</ion-label>\n\n        <ion-input [(ngModel)]="user.loginID" type="text" name="fname" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Password</ion-label>\n\n        <ion-input [(ngModel)]="user.password"  type="password" name="password"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="danger" class="marginbtn" (click)="login();">LOGIN</button>\n\n    <div class="linktext"><span (click)="goToRegisterPage();">Register</span> | <span (click)="goToForgotPasswordPage();">Forgot Password</span></div>\n\n  </div>\n\n\n\n   \n\n</ion-content> '/*ion-inline-end:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_web_service_web_service__["a" /* WebServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_web_service_web_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.homePage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.user = { "fname": "", "lname": "", "passwd": "", "email": "", "mobile": "", "street": "", "city": "", "state": "", "zip": "", "country": "" };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.goToHomePage = function () {
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        console.log(this.user);
        this.authService.postData(this.user, 'signup').then(function (result) {
            _this.responseData = result;
            console.log("API Response: " + JSON.stringify(_this.responseData));
            if (_this.responseData.code == 0) {
                _this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                console.log("Pelase check and correct the Errors");
            }
        }, function (err) {
            _this.errData = err;
            // Error log
            console.log("API Error : " + _this.responseData);
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\register\register.html"*/'\n\n\n\n<ion-content class="custom-back">\n\n  <div class="redline"></div>\n\n  <p class="logintitle">User Registration</p>\n\n  <img class="blueline" src="assets/images/blueline.jpg" alt="blueline">\n\n\n\n  <div class="container">\n\n    <ion-list>\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">First Name</ion-label>\n\n        <ion-input [(ngModel)]="user.fname" type="text" name="fname" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Last Name</ion-label>\n\n        <ion-input [(ngModel)]="user.lname" type="text" name="lname" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Email ID</ion-label>\n\n        <ion-input [(ngModel)]="user.email" type="text" name="email" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Password</ion-label>\n\n        <ion-input [(ngModel)]="user.passwd"  type="password" name="password" value=""></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Confirm Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>      \n\n    </ion-list>\n\n\n\n  <p class="logintitle">Contact Details</p>\n\n  <img class="blueline" src="assets/images/blueline.jpg" alt="blueline">    \n\n\n\n    <ion-list>\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Street</ion-label>\n\n        <ion-input [(ngModel)]="user.street" type="text" name="street"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">City</ion-label>\n\n        <ion-input [(ngModel)]="user.city" type="text" name="city"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Zip</ion-label>\n\n        <ion-input [(ngModel)]="user.zip" type="text" name="zip"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">State</ion-label>\n\n        <ion-input [(ngModel)]="user.state" type="text" name="state"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Country</ion-label>\n\n        <ion-input [(ngModel)]="user.country" type="text" name="country"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item class="nopaddingleft nobackground">\n\n        <ion-label floating class="texttitle">Mobile Number</ion-label>\n\n        <ion-input [(ngModel)]="user.mobile" type="text" name="mobile"></ion-input>\n\n      </ion-item>      \n\n    </ion-list>    \n\n\n\n    <button ion-button block color="danger" class="paddingbtn" (click)="register();">Register Now</button>\n\n    <button ion-button block color="danger" (click)="goToHomePage();" class="paddingbtn">Cancel</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\SAIKAT\Desktop\rbinvapp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_web_service_web_service__["a" /* WebServiceProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the WebServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var apiUrl = 'http://182.76.63.74:8080/rbinv/';
var WebServiceProvider = /** @class */ (function () {
    function WebServiceProvider(http) {
        this.http = http;
        console.log('Hello WebServiceProvider Provider');
    }
    WebServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(apiUrl + type, credentials)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    WebServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WebServiceProvider);
    return WebServiceProvider;
}());

//# sourceMappingURL=web-service.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map