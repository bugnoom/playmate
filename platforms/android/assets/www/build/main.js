webpackJsonp([1],{

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/privacy/privacy.module": [
		304,
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
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emailregister_emailregister__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_languages_app_languages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Login = /** @class */ (function () {
    function Login(navCtrl, alertCtrl, viewCtrl, fb, loading, nativeStorage, translate, appLanguages) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.loading = loading;
        this.nativeStorage = nativeStorage;
        this.translate = translate;
        this.appLanguages = appLanguages;
        //facebook ID
        this.FB_APP_ID = 260240461132847;
        this.fb.browserInit(this.FB_APP_ID, "v2.8");
        this.languages = appLanguages.getLanguages();
        console.log('log language = ' + this.languages);
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
        console.log("L : " + this.translate.instant("back_button"));
        //this.viewCtrl.setBackButtonText('back-button');
    };
    Login.prototype.fblogin = function () {
        var loading = this.loading.create({
            content: 'Check Data ....'
        });
        var permission = new Array();
        var nav = this.navCtrl;
        var env = this;
        permission = ['public_profile', 'email'];
        loading.present();
        this.fb.login(permission).then(function (resp) {
            console.log("REST = " + resp);
            var userId = resp.authResponse.userID;
            var params = new Array();
            //Getting name and gender properties
            env.fb.api("/me?fields=name,gender", params).then(function (user) {
                user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                //now we have the users info, let's save it in the NativeStorage
                env.nativeStorage.setItem('facebook', '1');
                env.nativeStorage.setItem('user', {
                    name: user.name,
                    gender: user.gender,
                    picture: user.picture
                }).then(function () {
                    //nav.push(HomePage);
                    loading.dismiss();
                    nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                }, function (err) {
                    console.log('Error' + err);
                });
            });
        }, function (error) {
            console.log(error);
            alert(JSON.stringify(error));
        });
    };
    Login.prototype.loginForm = function () {
        var env = this;
        env.nativeStorage.setItem('facebook', '0');
        env.nativeStorage.setItem('user', {
            name: '',
            gender: '',
            picture: ''
        });
        //set user profile parameter
        /*env.nativeStorage.setItem('user',{
            name: user.name,
            gender: user.gender,
            picture: user.picture
            }) */
    };
    Login.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__emailregister_emailregister__["a" /* Emailregister */]);
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/pages/login/login.html"*/'<ion-content padding>\n  <ion-grid style="justify-content:center;">\n    <ion-grid style="justify-content:top;width:65%;height:auto"> \n      <img src="assets/Logo.png" />\n      </ion-grid>\n    <p style="justify-content:top;text-align:center;color:#FFF;">\n      {{\'slogan_text\' | translate}}</p>\n    <form (ngSubmit)="loginForm()">\n      <ion-item style="margin-bottom:5px;border-radius:10px;">\n\n        <ion-input type="email" [(ngModel)]="email" name="email" placeholder="Email address"></ion-input>\n      </ion-item>\n      <ion-item style="margin-bottom:10px;border-radius:10px;">\n        <ion-input type="password" [(ngModel)]="password" name="password" placeholder="Password"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" color="secondary" style="font-weight: bold;border-radius:10px;" block>LOGIN</button>\n    </form>\n\n\n    <p style="font-size:80%;color:#FFF;text-align:center;"><a (click)="register()" style="color:#FFF;text-decoration:underline">สร้างบัญชีใหม่</a> หรือ <a style="color:#FFF;text-decoration:underline;">เข้าระบบด้วย</a></p>\n    <button ion-button block color="primary" (click)="fblogin()">Facebook Login</button>\n  </ion-grid>\n\n<ion-item>\n    <ion-label>{{\'language_text\'|translate}}</ion-label>\n    <ion-select [(ngModel)]="currentLang" (ionChange)="translate.use(currentLang)">\n      <ion-option *ngFor="let language of languages" [value]="language" [selected]="language===translate.currentLang">{{language}}</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_app_languages_app_languages__["a" /* AppLanguagesProvider */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Emailregister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emailconfirm_emailconfirm__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Emailregister = /** @class */ (function () {
    function Emailregister(navCtrl, navParams, viewCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
    }
    Emailregister.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Emailregister');
        this.translate.get('back_button').subscribe(function (res) {
            _this.viewCtrl.setBackButtonText('back_button');
        });
    };
    Emailregister.prototype.registerEmail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__emailconfirm_emailconfirm__["a" /* Emailconfirm */]);
    };
    Emailregister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-emailregister',template:/*ion-inline-start:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/pages/emailregister/emailregister.html"*/'<ion-header>\n\n  <ion-navbar class="mybackbtn">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-grid style="justify-content:center;height:100%">\n   <p style="color:#FFFFFF;font-size:90%;text-align:center;"> กรุณากรอก Email เพื่อยืนยันการสมัครสมาชิก</p>\n   <form (ngSubmit)="registerEmail()">\n      <ion-item style="margin-bottom:5px;border-radius:10px;">\n        <ion-input type="email" [(ngModel)]="email" name="email" placeholder="Email address"></ion-input>\n      </ion-item>\n      <button ion-button small type="submit" color="secondary" style="font-weight: bold;border-radius:10px;width:89%;margin:auto;" block>Confirm</button>\n   </form>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/pages/emailregister/emailregister.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */]])
    ], Emailregister);
    return Emailregister;
}());

//# sourceMappingURL=emailregister.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Emailconfirm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Emailconfirm = /** @class */ (function () {
    function Emailconfirm(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Emailconfirm.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Emailconfirm');
    };
    Emailconfirm.prototype.confirmcode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__profile_profile__["a" /* Profile */]);
    };
    Emailconfirm.prototype.resendcode = function () {
    };
    Emailconfirm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-emailconfirm',template:/*ion-inline-start:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/pages/emailconfirm/emailconfirm.html"*/'<ion-header>\n\n  <ion-navbar class="mybackbtn">\n   \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-grid style="justify-content:center;height:100%">\n   <p style="color:#FFFFFF;font-size:90%;text-align:center;"> กรุณากรอกรหัส 6 หลักเพื่อเข้าสู่ Playmate</p>\n   <form (ngSubmit)="confirmcode()">\n      <ion-item style="margin-bottom:5px;border-radius:10px;">\n        <ion-input type="text" [(ngModel)]="code" name="text" placeholder="Code 6 Digit"></ion-input>\n      </ion-item>\n      <p><button ion-button small type="submit" color="secondary" style="font-weight: bold;border-radius:10px;width:89%;margin:auto;" block>Confirm</button></p>\n   </form>\n      <button ion-button small color="primary"  (click)="resendcode()" style="border-radius:10px;">\n        <div><ion-icon ios="ios-undo" md="md-undo"></ion-icon> Resend</div></button>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/pages/emailconfirm/emailconfirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Emailconfirm);
    return Emailconfirm;
}());

//# sourceMappingURL=emailconfirm.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Profile = /** @class */ (function () {
    function Profile(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bgimage = "../assets/cover_image_no_image.png";
    }
    Profile.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Profile');
    };
    Profile.prototype.uploadimg = function () {
        alert("upload a image");
    };
    Profile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton *navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid [style.backgroundImage]="\'url(\'+bgimage+\')\'" style="background-color:white;background-repeat:no-repeat;background-size:cover;width:100%;height:23%;">\n    <div style="width:120px;height:120px;margin-top:10vh;z-index:999;margin-left:-5px;padding:0px;"><img src="assets/avatar_no_image.png" /></div>\n    <div style="width:30px;height:30px;margin-top:-20vh;margin-left:5px;z-index:1000;" (click)="uploadimg()">\n      <img src="assets/btn_image_upload.png" /></div>\n  </ion-grid>\n  <ion-grid style="background-color:#1f2933;height:7%;width:100%;justify-content:center">\n    <p style="text-align: center; color:white;">Name</p>\n  </ion-grid>\n  <ion-grid style="padding:0px;">\n    <ion-row style="background-color:#3a4f62;width:100%;height:5px !important;justify-content:center;text-align:center">\n      <p class="up-arrow" style="margin-top:-7px;"></p>\n    </ion-row>\n  </ion-grid>\n  <ion-grid style="color:#FFF;font-size:0.8em;padding:0px;">\n    <ion-row>\n      <ion-col col-2 class="col1">\n        <ion-row style="margin-top:25px;text-align:center;">\n              <ion-col>\n                <img src="assets/icon_name.png" width="25" height="25" />\n                </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row style="margin-top:27px;">\n          \n                <ion-label fixed > ชื่อ - นามสกุล : </ion-label>\n                <ion-input type="text" value="" placeholder="fullname"></ion-input>\n          \n        </ion-row>\n      </ion-col>\n    </ion-row>\n     <ion-row style="margin-top:-15px;">\n      <ion-col col-2 class="col1">\n        <ion-row style="text-align:center;">\n              <ion-col>\n                <img src="assets/icon_gender.png" width="25" height="25" />\n                </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row style="margin-top:2px;">\n          <ion-label>เพศ :</ion-label>\n          <ion-select [(ngModel)]="gender">\n            <ion-option value="0">Male</ion-option>   \n            <ion-option value="1">Female </ion-option>\n          </ion-select>     \n          \n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:-15px;">\n      <ion-col col-2 class="col1">\n        <ion-row style="text-align:center;">\n              <ion-col>\n                <img src="assets/icon_mobile.png" width="25" height="25" />\n                </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row style="margin-top:2px;">\n          <ion-col>\n                เบอร์โทร :\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:-15px;">\n      <ion-col col-2 class="col1">\n        <ion-row style="text-align:center;">\n              <ion-col>\n                <img src="assets/icon_calendar.png" width="25" height="25" />\n                </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row style="margin-top:2px;">\n          <ion-col>\n                วันเกิด :\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:0px;">\n      <ion-col col-2 class="col1" style="height:200px;">\n        <ion-row style="text-align:center;">\n              <ion-col>\n                <img src="assets/icon_passkey.png" width="25" height="25" />\n                </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row style="margin-top:-15px;">\n          <ion-col>\n                <p>รหัสผ่าน </p> \n                <p>ยืนยันรหัสผ่าน </p> \n                \n                <p style="text-align:center">\n                  <button ion-button small round outline color="secondary" style="color:#FFF;font-size:1em;">เสร็จสิ้น</button>\n                </p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  \n    \n  </ion-grid>\n\n  \n</ion-content>\n\n<!--\n<ion-row style="margin-top:25px;">\n              <ion-col col-2 class="col1"><img src="assets/icon_name.png" width="20" height="20" /></ion-col>\n              <ion-col>\n                ชื่อ - นามสกุล :\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2 class="col1"><img src="assets/icon_gender.png" width="20" height="20" /></ion-col>\n              <ion-col>\n                เพศ :\n              </ion-col>\n            </ion-row> -->'/*ion-inline-end:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */]])
    ], Profile);
    return Profile;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_translate__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_app_languages_app_languages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_emailregister_emailregister__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_emailconfirm_emailconfirm__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_header_header__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_footer_footer__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9_ng2_translate__["d" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_15__pages_emailconfirm_emailconfirm__["a" /* Emailconfirm */],
                __WEBPACK_IMPORTED_MODULE_14__pages_emailregister_emailregister__["a" /* Emailregister */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* Profile */],
                __WEBPACK_IMPORTED_MODULE_17__components_header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_footer_footer__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_translate__["b" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_9_ng2_translate__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */]]
                }),
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                    backButtonText: ""
                }, {
                    links: [
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_15__pages_emailconfirm_emailconfirm__["a" /* Emailconfirm */],
                __WEBPACK_IMPORTED_MODULE_14__pages_emailregister_emailregister__["a" /* Emailregister */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* Profile */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_app_languages_app_languages__["a" /* AppLanguagesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_languages_app_languages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(211);
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
    function MyApp(platform, translate, appLanguages, statusBar, splashScreen, nativeStorage, fb, menu, loading) {
        var _this = this;
        this.translate = translate;
        this.appLanguages = appLanguages;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.nativeStorage = nativeStorage;
        this.fb = fb;
        this.menu = menu;
        this.loading = loading;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* Login */];
        platform.ready().then(function () {
            //set default language this.translate.setDefaultLang("th");
            _this.configNG2();
            // Here we will check if the user is already logged in
            //check facebook logined
            _this.fb.getLoginStatus().then(function (res) {
                if (res.status === 'connected') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
                    _this.splashScreen.hide();
                }
                else {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* Login */]);
                    _this.splashScreen.hide();
                }
            });
            // because we don't want to ask users to log in each time they open the app
            var env = _this;
            env.nativeStorage.getItem('user').then(function (data) {
                env.username = data.name;
                env.profilepicURL = data.picture;
                env.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
                env.splashScreen.hide();
            }, function (err) {
                //env.nav.push(Login);
                env.splashScreen.hide();
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
        });
        this.pages = [
            { title: 'jobs', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], icon: "1" },
            { title: 'queue', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], icon: "2" },
            { title: 'groupUnder', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], icon: "3" },
            { title: 'cashier', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], icon: "4" },
            //{ title: 'history', component: HomePage, icon: "99" },
            { title: 'favorite', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], icon: "5" },
            { title: 'premium', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], icon: "6" },
            { title: 'language_text', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], icon: "7" },
            { title: 'notification', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], icon: "8" },
            { title: 'help', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], icon: "9" }
        ];
        //this.profilepicURL = "../assets/img_home/3-img.png";
    }
    MyApp.prototype.configNG2 = function () {
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('TH');
        // Detect current Language
        var userLang = navigator.language.split("-")[0];
        userLang = (this.appLanguages.getLanguages().indexOf(userLang) > -1) ? userLang : 'TH';
        //the lang to use, if the lang is not available, it will use the current loader to get them
        this.translate.use(userLang);
    };
    MyApp.prototype.openPage = function (p) {
        this.menu.close();
        this.nav.setRoot(p.component);
    };
    MyApp.prototype.doFbLogout = function () {
        var nav = this.nav;
        var env = this;
        var loading = env.loading.create({
            content: "Loading ..."
        });
        loading.present();
        this.fb.logout().then(function (data) {
            env.nativeStorage.remove('user');
            env.menu.close();
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* Login */]);
            loading.dismiss();
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/app/app.html"*/'<ion-menu [content]="myNav" side="left" id="leftMenu">\n    <ion-header class="profileMenu">\n        <div class="bkimage" [ngStyle]="{\'background-image\': \'url(\' + profilepicURL + \')\'}">\n            </div>\n        <div class="proflieContent">\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-5>\n                       <img src={{profilepicURL}} width="100%" height="auto"/>\n                    </ion-col>\n                    <ion-col style="padding-top:15px;">\n                        <p style="margin-bottom:10px;">{{username}}</p>\n                        <p style="vertical-align: center;"><img src="assets/menu_icon/tab-menu-icon-11.png" style="border:0px;width:14%;height:14%;margin-right:4%;" />:1000 </p>\n                        <p style="vertical-align: center;"><img src="assets/menu_icon/tab-menu-icon-11.png" style="border:0px;width:14%;height:14%;margin-right:4%;" />:3000 </p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            \n        </div>\n    </ion-header>\n\n    <ion-content >\n\n        <ion-list>\n            <button class="mymenu" ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n              <span class="mymenuname"> <img class="myicon" src="assets/menu_icon/tab-menu-icon-{{p.icon}}.png"/>\n               {{p.title | translate }}</span>\n               \n            </button>\n            <button class="mymenu" ion-item menuClose (click)="doFbLogout()">\n               <span class="mymenuname"> <img class="myicon" src="assets/menu_icon/tab-menu-icon-10.png"/>\n               {{ "logout" | translate }}\n               </span>\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #myNav swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__providers_app_languages_app_languages__["a" /* AppLanguagesProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_languages_app_languages__ = __webpack_require__(42);
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
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, appLanguages) {
        this.translate = translate;
        this.appLanguages = appLanguages;
        this.languages = appLanguages.getLanguages();
        //console.log('Hello HeaderComponent Component');
        //this.text = 'Hello World';
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header',template:/*ion-inline-start:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/components/header/header.html"*/'<!-- Generated template for the HeaderComponent component -->\n<ion-navbar style="justify-content:top;position:relative;">\n     <button ion-button menuToggle style="margin-top:25px;color:aqua;position:absolute;">\n      <ion-icon name="menu"></ion-icon><span style="color:#fff;font-size:18pt">{{\'menu_text\' | translate }}</span>\n     </button>\n    <p style="justify-content:top;text-align:center;color:#FFF;line-height:15px;margin-top:10px">\n      <img src="assets/home-gg.png" width="50%" /><br />\n      <span style="font-size: 110%">{{\'slogan_text\' | translate}}</span></p>\n  \n  </ion-navbar>\n\n'/*ion-inline-end:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_languages_app_languages__["a" /* AppLanguagesProvider */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
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
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent(nav) {
        this.nav = nav;
        console.log('Hello FooterComponent Component');
        this.navmenutxt = this.footnavmenutxt;
    }
    FooterComponent.prototype.ngAfterViewInit = function () {
        this.navmenutxt = this.footnavmenutxt;
    };
    FooterComponent.prototype.openPage = function (txt) {
        switch (txt) {
            case "home":
                if (this.navmenutxt != txt) {
                    this.nav.push(__WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */]);
                }
                break;
            default:
                alert(txt);
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* Input */])('footnavmenu'),
        __metadata("design:type", Object)
    ], FooterComponent.prototype, "footnavmenutxt", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'footer',template:/*ion-inline-start:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/components/footer/footer.html"*/'<!-- Generated template for the FooterComponent component -->\n<ion-toolbar no-padding >\n    <ion-segment [(ngModel)]="navmenutxt">\n      <ion-segment-button value="home" (ionSelect)="openPage(\'home\')">\n        <img src="assets/img_home/icon-home-01.png" height="100%;"/>\n      </ion-segment-button>\n      <ion-segment-button value="list" (ionSelect)="openPage(\'list\')">\n        <img src="assets/img_home/icon-list-02.png" height="100%;"/>\n      </ion-segment-button>\n      <ion-segment-button value="msg" (ionSelect)="openPage(\'msg\')">\n       <img src="assets/img_home/icon-massenger-03.png" height="100%;"/>\n      </ion-segment-button>\n       <ion-segment-button value="profile" (ionSelect)="openPage(\'profile\')">\n       <img src="assets/img_home/icon-user-04.png" height="100%;"/>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>'/*ion-inline-end:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/components/footer/footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLanguagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
  Generated class for the AppLanguagesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AppLanguagesProvider = /** @class */ (function () {
    function AppLanguagesProvider() {
        this.languages = ['EN', 'TH'];
    }
    AppLanguagesProvider.prototype.getLanguages = function () {
        return this.languages;
    };
    AppLanguagesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppLanguagesProvider);
    return AppLanguagesProvider;
}());

//# sourceMappingURL=app-languages.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_languages_app_languages__ = __webpack_require__(42);
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
    function HomePage(navCtrl, fb, nativeStorage, translate, appLanguages) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.nativeStorage = nativeStorage;
        this.translate = translate;
        this.appLanguages = appLanguages;
        this.userReady = false;
        this.languages = appLanguages.getLanguages();
    }
    HomePage.prototype.ionViewCanEnter = function () {
        this.footnavmenu = 'home';
        var env = this;
        this.nativeStorage.getItem('user').then(function (resp) {
            env.user = {
                name: resp.name,
                gender: resp.gender,
                picture: resp.picture
            };
            env.userReady = true;
        }, function (err) {
            console.log(err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/pages/home/home.html"*/'\n<ion-header>\n  <header></header>\n</ion-header>\n<ion-content>\n  <div class="section" style="background-image:url(\'assets/img_home/1-bg.png\');">\n  <div class="section-text section-h1" style="right:3%;top:10%">พริตตี้</div>\n  <div class="section-text section-h2" style="right:10%;top:23%">Pretty</div>\n  <img src="assets/img_home/1-img.png" class="section-img" />\n  <button class="section-button" style="background-image:url(\'assets/img_home/1-button.png\');right:3%;bottom:4%;" (click)="openPage(\'pretty\');">click</button>\n  </div>\n\n  <div class="section" style="background-image:url(\'assets/img_home/2-bg.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="left:8%;top:10%">พิธีกร</div>\n  <div class="section-text section-h2" style="left:8%;top:23%">MC</div>\n  <img src="assets/img_home/2-img.png" class="section-img" style="width:23%;right:10%" />\n  <button class="section-button" style="background-image:url(\'assets/img_home/2-button.png\');left:13%;bottom:4%;">click</button>\n  </div>\n\n  <div class="section" style="background-image:url(\'assets/img_home/3-bg.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="right:3%;top:10%">เพื่อนเที่ยว</div>\n  <div class="section-text section-h2" style="right:3%;top:23%">Entertainer</div>\n  <img src="assets/img_home/3-img.png" class="section-img" style="width:35%;left:10%" />\n  <button class="section-button" style="background-image:url(\'assets/img_home/3-button.png\');right:3%;bottom:4%;">click</button>\n  </div>\n  \n  <div class="section" style="background-image:url(\'assets/img_home/4-bg.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="left:8%;top:10%">ถ่ายแบบ</div>\n  <div class="section-text section-h2" style="left:8%;top:23%">MODEL</div>\n  <img src="assets/img_home/4-img.png" class="section-img" style="width:53%;right:-4%" />\n  <button class="section-button" style="background-image:url(\'assets/img_home/4-button.png\');left:13%;bottom:4%;">click</button>\n  </div>\n\n  <div class="section" style="background-image:url(\'assets/img_home/5-bg.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="right:3%;top:10%">ถ่ายแบบ</div>\n  <div class="section-text section-h2" style="right:3%;top:23%">Catwalk</div>\n  <img src="assets/img_home/5-img.png" class="section-img" style="width:32%;right:38%;" />\n  <button class="section-button" style="background-image:url(\'assets/img_home/5-button.png\');right:3%;bottom:4%;">click</button>\n  </div>\n\n  <div class="section" style="background-image:url(\'assets/img_home/6-bg.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="left:5%;top:10%">พริตตี้รีวิวสินค้า</div>\n  <div class="section-text section-h2" style="left:5%;top:23%">Pretty Review</div>\n  <img src="assets/img_home/6-img.png" class="section-img" style="width:43%;right:-4%" />\n  <button class="section-button" style="background-image:url(\'assets/img_home/6-button.png\');left:13%;bottom:4%;">click</button>\n  </div>\n\n  <div class="section" style="background-image:url(\'assets/img_home/7-bg.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="right:3%;top:10%">สตาฟ</div>\n  <div class="section-text section-h2" style="right:10%;top:23%">Staff</div>\n  <img src="assets/img_home/7-img.png" class="section-img" style="width:34%;left:10%;" />\n  <button class="section-button" style="background-image:url(\'assets/img_home/7-button.png\');right:3%;bottom:4%;">click</button>\n  </div>\n\n  <div class="section" style="background-image:url(\'assets/img_home/8-bg.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="left:5%;top:10%">นักร้อง</div>\n  <div class="section-text section-h2" style="left:5%;top:23%">Singers</div>\n  <img src="assets/img_home/8-img.png" class="section-img" style="width:43%;right:-4%" />\n  <button class="section-button" style="background-image:url(\'assets/img_home/8-button.png\');left:13%;bottom:4%;">click</button>\n  </div>\n\n  <div class="section" style="background-image:url(\'assets/img_home/9-bg.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="right:3%;top:10%">ดีเจ</div>\n  <div class="section-text section-h2" style="right:15%;top:23%">Dj</div>\n  <img src="assets/img_home/9-img.png" class="section-img" style="width:38%;left:5%;" />\n  <button class="section-button" style="background-image:url(\'assets/img_home/9-button.png\');right:3%;bottom:4%;">click</button>\n  </div>\n\n  <div class="section" style="background-image:url(\'assets/img_home/10-bg.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="right:3%;top:10%">แดนเซอร์</div>\n  <div class="section-text section-h2" style="right:10%;top:23%">Dancer</div>\n  <img src="assets/img_home/10-img.png" class="section-img" style="width:50%;left:5%;" />\n  <button class="section-button" style="background-image:url(\'assets/img_home/10-button.png\');right:3%;bottom:4%;">click</button>\n  </div>\n\n  <div class="section" style="background-image:url(\'assets/img_home/11-bg.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="left:5%;top:10%">โคโยตี้</div>\n  <div class="section-text section-h2" style="left:5%;top:23%">Coyote</div>\n  <img src="assets/img_home/11-img.png" class="section-img" style="width:32%;right:0%" />\n  <button class="section-button" style="background-image:url(\'assets/img_home/11-button.png\');left:13%;bottom:4%;">click</button>\n  </div>\n\n  <div class="section" style="background-image:url(\'assets/img_home/12-img.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="left:5%;top:10%">ช่างภาพ</div>\n  <div class="section-text section-h2" style="left:5%;top:23%">Photographer</div>\n  <button class="section-button" style="background-image:url(\'assets/img_home/12-button.png\');left:13%;bottom:4%;">click</button>\n  </div>\n\n  <div class="section" style="background-image:url(\'assets/img_home/13-img.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="right:3%;top:5%">ช่างแต่งหน้า ทำผม</div>\n  <div class="section-text section-h2" style="right:0%;top:23%;line-height:19px;font-size:140%;">Markup <br/>Hairdresser</div>\n  <button class="section-button" style="background-image:url(\'assets/img_home/13-button.png\');width:33%;right:5%;bottom:4%;">click</button>\n  </div>\n  \n    <div class="section" style="background-image:url(\'assets/img_home/14-bg.png\');margin-top:0px;">\n  <div class="section-text section-h1" style="left:5%;top:10%">ออแกไนซ์เซอร์</div>\n  <div class="section-text section-h2" style="left:5%;top:23%">Organizer</div>\n  <img src="assets/img_home/14-img.png" class="section-img" style="width:32%;right:4%" />\n  <button class="section-button" style="background-image:url(\'assets/img_home/14-button.png\');left:13%;bottom:4%;">click</button>\n  </div>\n\n</ion-content>\n<ion-footer no-border no-padding>\n  <footer [footnavmenu]="footnavmenu"></footer>\n</ion-footer>'/*ion-inline-end:"/Users/bugnoom/Desktop/Pretty/mobile_apps/playmate/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_app_languages_app_languages__["a" /* AppLanguagesProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map