webpackJsonp([12],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotes_quotes__ = __webpack_require__(108);
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
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(popoverCtrl, settService, quoteServices, navCtrl, navParams, modalCtrl, alertCtrl, viewCtrl, toastCtr) {
        this.popoverCtrl = popoverCtrl;
        this.settService = settService;
        this.quoteServices = quoteServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtr = toastCtr;
        this.totalQuotes = 13;
    }
    FavoritesPage.prototype.ngOnInit = function () {
        this.quotes = this.quoteServices.getAllFavoriteQuotes();
        // console.log("okeoek");
        console.log(this.quotes);
    };
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.addQuote = function () {
        // this.navCtrl.push(AddQuotePage);
        this.presentPrompt();
    };
    FavoritesPage.prototype.onShowAlert = function (quote) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Remove Quote',
            message: 'Are Your Sure You want to remove the quote from favorites?',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.quoteServices.removeQuoteFromFavorites(quote);
                        console.log(_this.quoteServices);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("NO is clicked.");
                    }
                }
            ]
        });
        alert.present();
    };
    FavoritesPage.prototype.showModal = function (temp) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__quotes_quotes__["a" /* QuotesPage */], { Quote: temp });
        modal.present();
    };
    FavoritesPage.prototype.setBgColor = function () {
        return this.settService.isAltBackground() ? 'altQuoteBg' : "";
    };
    FavoritesPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    FavoritesPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add New Quotes',
            inputs: [
                {
                    name: 'author',
                    placeholder: 'name'
                },
                {
                    name: 'quote',
                    placeholder: 'quote'
                }
            ],
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.quoteServices.addQuoteToFavorites({ id: String(_this.totalQuotes++), person: data.author, text: data.quote });
                        var toast = _this.toastCtr.create({
                            message: "New Quote is Added!",
                            duration: 3000,
                            position: "bottom"
                        });
                        toast.present();
                    }
                },
                {
                    text: 'CANCEL',
                    role: 'cancel',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"D:\mcp_project\myfavquotes_app\src\pages\favorites\favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-title>favoritesPage</ion-title>\n      <ion-buttons left>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          \n      </ion-buttons>\n      <ion-buttons right>\n        <button ion-button icon-only (click)="presentPopover($event)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n    </ion-buttons>\n      <!-- <button ion-button start>\n        <ion-icon name="add"></ion-icon>\n      </button> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let quoteGroup of quotes">\n      <button ion-item [color]="setBgColor()"  (click)="showModal(quoteGroup)">\n        <h2>{{quoteGroup.text}}</h2>\n        <p>{{quoteGroup.person }}</p>\n      </button>\n      <ion-item-options side="right">\n          <button ion-button color="danger" (click)="onShowAlert(quote)">\n            <ion-icon name="trash"></ion-icon>\n              Delete\n          </button>\n        </ion-item-options>\n    </ion-item-sliding>\n    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\mcp_project\myfavquotes_app\src\pages\favorites\favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__services_settings__["a" /* SettingService */], __WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(42);
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
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = /** @class */ (function () {
    function PopoverPage(quoteServices, navCtrl, navParams, modalCtrl, alertCtrl, viewCtrl, toastCtr) {
        this.quoteServices = quoteServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtr = toastCtr;
        this.totalQuotes = 13;
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage.prototype.addQuote = function () {
        this.presentPrompt();
    };
    PopoverPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add New Quotes',
            inputs: [
                {
                    name: 'author',
                    placeholder: 'name'
                },
                {
                    name: 'quote',
                    placeholder: 'quote'
                }
            ],
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.quoteServices.addQuoteToFavorites({ id: String(_this.totalQuotes++), person: data.author, text: data.quote });
                        var toast = _this.toastCtr.create({
                            message: "New Quote is Added!",
                            duration: 3000,
                            position: "bottom"
                        });
                        toast.present();
                    }
                },
                {
                    text: 'CANCEL',
                    role: 'cancel',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',
            template: "\n  <ion-list>\n    <ion-list-header>Ionic</ion-list-header>\n    <button ion-item (click)=\"addQuote()\">Add Quote</button>\n    <button ion-item (click)=\"close()\">Close</button>\n  </ion-list>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(42);
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
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuotesPage = /** @class */ (function () {
    function QuotesPage(quoteServices, navCtrl, navParams, alertCtrl, viewCtrl) {
        this.quoteServices = quoteServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
    }
    QuotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuotesPage');
    };
    QuotesPage.prototype.ngOnInit = function () {
        this.quotes = this.navParams.get('Quote');
    };
    QuotesPage.prototype.onShowAlert = function (quote) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Remove Quote',
            message: 'Are you sure you want to remove the quote from favorites?',
            buttons: [
                {
                    text: 'YES',
                    handler: function () {
                        _this.quoteServices.removeQuoteFromFavorites(quote);
                        _this.viewCtrl.dismiss();
                    }
                },
                {
                    text: 'NO'
                }
            ]
        });
        alert.present();
    };
    QuotesPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    QuotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quotes',template:/*ion-inline-start:"D:\mcp_project\myfavquotes_app\src\pages\quotes\quotes.html"*/'<!--\n  Generated template for the QuotesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>quotesPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card text-center>\n    <p>{{quotes.text}}</p>\n    <p style="color:lightgray">{{quotes.person}}</p>\n    <button style="border:solid red;border-radius:5px;color:red;background-color:white;height:30px;width:85px;margin-top:20px;" (click)="onShowAlert(quotes)">\n      Unfavorite</button>\n  </ion-card>\n  <div text-center>\n    <button ion-button color="danger" (click)="dismissModal()">Close</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\mcp_project\myfavquotes_app\src\pages\quotes\quotes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], QuotesPage);
    return QuotesPage;
}());

//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second_second__ = __webpack_require__(110);
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
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstPage = /** @class */ (function () {
    function FirstPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstPage');
    };
    FirstPage.prototype.ngOnInit = function () {
        console.log(this.navParams.get("nama") + ', ' + this.navParams.get("umur") + "tahun");
    };
    FirstPage.prototype.moveToSecondPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__second_second__["a" /* SecondPage */]);
    };
    FirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first',template:/*ion-inline-start:"D:\mcp_project\myfavquotes_app\src\pages\first\first.html"*/'<!--\n  Generated template for the FirstPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>firstPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button (click)="moveToSecondPage()">Go to the second page</button>\n</ion-content>\n'/*ion-inline-end:"D:\mcp_project\myfavquotes_app\src\pages\first\first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SecondPage = /** @class */ (function () {
    function SecondPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SecondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SecondPage');
    };
    SecondPage.prototype.backToHome = function () {
        this.navCtrl.popToRoot();
    };
    SecondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-second',template:/*ion-inline-start:"D:\mcp_project\myfavquotes_app\src\pages\second\second.html"*/'<!--\n  Generated template for the SecondPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SecondPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <button ion-button (click)="backToHome()">Back To Home</button>\n</ion-content>\n'/*ion-inline-end:"D:\mcp_project\myfavquotes_app\src\pages\second\second.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SecondPage);
    return SecondPage;
}());

//# sourceMappingURL=second.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_quotes__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quote_quote__ = __webpack_require__(112);
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
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LibraryPage = /** @class */ (function () {
    function LibraryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LibraryPage.prototype.ngOnInit = function () {
        this.quoteCollection = __WEBPACK_IMPORTED_MODULE_2__data_quotes__["a" /* default */];
        console.log(this.quoteCollection);
    };
    LibraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LibraryPage');
    };
    LibraryPage.prototype.quoteList = function ($temp) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quote_quote__["a" /* QuotePage */], { list: $temp });
        console.log($temp);
    };
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"D:\mcp_project\myfavquotes_app\src\pages\library\library.html"*/'<!--\n  Generated template for the LibraryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-title>libraryPage</ion-title>\n      <!-- <ion-navbar> -->\n          <ion-buttons left>\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n          </ion-buttons>\n          <!-- <ion-title>Page Title</ion-title> -->\n        <!-- </ion-navbar> -->\n\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let quoteGroup of quoteCollection" (click)="quoteList(quoteGroup.quotes)">\n      <ion-icon [name]="quoteGroup.icon" item-left></ion-icon>\n      <h2>{{quoteGroup.category}}</h2>\n      <p>{{quoteGroup.quotes.length }} quotes</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\mcp_project\myfavquotes_app\src\pages\library\library.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LibraryPage);
    return LibraryPage;
}());

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(42);
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
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuotePage = /** @class */ (function () {
    function QuotePage(quoteServices, alertCtrl, navCtrl, navParams) {
        this.quoteServices = quoteServices;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuotePage.prototype.ngOnInit = function () {
        this.quotes = this.navParams.get('list');
        // console.log(this.navParams.get('list'));
        // for(let i =0;i<this.quoteServices.getAllFavoriteQuotes.length; i++){
        // }
        // for(let data of this.quoteServices.getAllFavoriteQuotes[0])
        // console.log(document.getElementById("id"));
    };
    QuotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuotePage');
    };
    QuotePage.prototype.onShowAlert = function ($list, $flag) {
        var _this = this;
        if ($flag == 'F') {
            var alert_1 = this.alertCtrl.create({
                title: 'Add Quote',
                message: 'Are Your Sure You want to add the quote to favorites?',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.quoteServices.addQuoteToFavorites($list);
                            console.log(_this.quoteServices);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log("NO is clicked.");
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Remove Quote',
                message: 'Are Your Sure You want to remove the quote from favorites?',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.quoteServices.removeQuoteFromFavorites($list);
                            console.log(_this.quoteServices);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log("NO is clicked.");
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    QuotePage.prototype.checkFav = function ($data) {
        // console.log("masuk");
        return this.quoteServices.isFavorite($data);
    };
    QuotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quote',template:/*ion-inline-start:"D:\mcp_project\myfavquotes_app\src\pages\quote\quote.html"*/'<!--\n  Generated template for the QuotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>quotePage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor = "let list of quotes ">\n    <ion-card-header>\n      <h2 id="id">#{{list.id}}</h2>    \n    </ion-card-header>\n    <ion-card-content>\n      <h2>{{list.text}}</h2>\n      <p id="contentQuote">~{{list.person}}</p>\n    </ion-card-content>\n    <ion-grid>\n        <ion-row no-padding>\n          <ion-col text-right>\n              <button *ngIf="checkFav(list) == false" ion-button clear small style="color: gold;" (click)="onShowAlert(list, \'F\')">Favorite</button>\n              <button *ngIf="checkFav(list) == true" ion-button clear small style="color: red;" (click)="onShowAlert(list, \'U\')">Unfavorite</button>\n          </ion-col>\n        </ion-row>\n        \n      </ion-grid>\n  </ion-card>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"D:\mcp_project\myfavquotes_app\src\pages\quote\quote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], QuotePage);
    return QuotePage;
}());

//# sourceMappingURL=quote.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(49);
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
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(loadingCtrl, navCtrl, navParams, authServ) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServ = authServ;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log(this.authServ.getCurrentUser());
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.submitForm = function (form) {
        console.log(form.value.email);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Loading Please Wait...'
        });
        loading.present();
        this.authServ.signin(form.value.email, form.value.pass).then(function (data) {
            loading.dismiss();
        })
            .catch(function (err) {
            console.log('Failed to Login');
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\mcp_project\myfavquotes_app\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Halaman Login</ion-title>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="submitForm(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed style="color:black;">Email : </ion-label>\n        <ion-input type="text" name="email" placeholder="admin@admin.com" required ngModel></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed style="color:black;">Password : </ion-label>\n        <ion-input type="Password" name="pass" placeholder="adminadmin" required ngModel></ion-input>\n      </ion-item>\n      <button type="submit" text-center ion-button block style="margin-top: 30px;">Sign Me In</button>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\mcp_project\myfavquotes_app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings__ = __webpack_require__(81);
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
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, settService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settService = settService;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.onToggle = function (toggle) {
        // console.log(toggle.value);
        this.settService.setBackground(toggle.value);
    };
    SettingPage.prototype.isChecked = function () {
        return this.settService.isAltBackground();
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"D:\mcp_project\myfavquotes_app\src\pages\setting\setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  \n    <ion-title>settingPage</ion-title>\n    <ion-buttons left>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n      <ion-row>\n        <ion-col>Alternative Background</ion-col>\n          <ion-col>\n            <ion-toggle (ionChange)= "onToggle($event)" [checked]="isChecked()"></ion-toggle>\n          </ion-col>\n        </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"D:\mcp_project\myfavquotes_app\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_settings__["a" /* SettingService */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(49);
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
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, authServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServ = authServ;
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.submitForm = function (form) {
        console.log(form.value.email);
        this.authServ.signup(form.value.email, form.value.pass);
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"D:\mcp_project\myfavquotes_app\src\pages\sign-up\sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Halaman Sign Up</ion-title>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="submitForm(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed style="color:black;">Email : </ion-label>\n        <ion-input type="text" name="email" required ngModel></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed style="color:black;">Password : </ion-label>\n        <ion-input type="Password" name="pass" required ngModel></ion-input>\n      </ion-item>\n      <button type="submit" text-center ion-button block style="margin-top: 30px;">Sign UP</button>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\mcp_project\myfavquotes_app\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_library__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorites_favorites__ = __webpack_require__(106);
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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LibraryPage = __WEBPACK_IMPORTED_MODULE_2__library_library__["a" /* LibraryPage */];
        this.FavoritesPage = __WEBPACK_IMPORTED_MODULE_3__favorites_favorites__["a" /* FavoritesPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',
            template: "\n \n    <ion-tabs>\n      <ion-tab [root]=\"LibraryPage\" tabTitle=\"Library\" tabIcon=\"book\"></ion-tab>\n      <ion-tab [root]=\"FavoritesPage\" tabTitle=\"Favorites\" tabIcon=\"star\"></ion-tab>\n    </ion-tabs>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-quote/add-quote.module": [
		300,
		11
	],
	"../pages/favorites/favorites.module": [
		301,
		10
	],
	"../pages/first/first.module": [
		302,
		9
	],
	"../pages/library/library.module": [
		303,
		8
	],
	"../pages/login/login.module": [
		304,
		7
	],
	"../pages/popover/popover.module": [
		305,
		6
	],
	"../pages/quote/quote.module": [
		306,
		5
	],
	"../pages/quotes/quotes.module": [
		307,
		4
	],
	"../pages/second/second.module": [
		308,
		3
	],
	"../pages/setting/setting.module": [
		309,
		2
	],
	"../pages/sign-up/sign-up.module": [
		310,
		1
	],
	"../pages/tabs/tabs.module": [
		311,
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
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the AddQuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddQuotePage = /** @class */ (function () {
    function AddQuotePage(navCtrl, navParams, alertCtr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtr = alertCtr;
    }
    AddQuotePage.prototype.ngOnInit = function () {
        this.presentPrompt();
    };
    AddQuotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddQuotePage');
    };
    AddQuotePage.prototype.presentPrompt = function () {
        var alert = this.alertCtr.create({
            title: 'Login',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Username'
                },
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        // if (User.isValid(data.username, data.password)) {
                        //   // logged in!
                        // } else {
                        //   // invalid login
                        //   return false;
                        // }
                    }
                }
            ]
        });
        alert.present();
    };
    AddQuotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-quote',template:/*ion-inline-start:"D:\mcp_project\myfavquotes_app\src\pages\add-quote\add-quote.html"*/'<!--\n  Generated template for the AddQuotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add-quotePage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\mcp_project\myfavquotes_app\src\pages\add-quote\add-quote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddQuotePage);
    return AddQuotePage;
}());

//# sourceMappingURL=add-quote.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_first_first__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_second_second__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_quotes_quotes__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_quote_quote__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_library_library__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_favorites_favorites__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_add_quote_add_quote__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_quotes__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sign_up_sign_up__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_settings__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_AuthService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_popover_popover__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_second_second__["a" /* SecondPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_quotes_quotes__["a" /* QuotesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_quote_quote__["a" /* QuotePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_add_quote_add_quote__["a" /* AddQuotePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_popover_popover__["a" /* PopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-quote/add-quote.module#AddQuotePageModule', name: 'AddQuotePage', segment: 'add-quote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/first/first.module#FirstPageModule', name: 'FirstPage', segment: 'first', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/library/library.module#LibraryPageModule', name: 'LibraryPage', segment: 'library', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quote/quote.module#QuotePageModule', name: 'QuotePage', segment: 'quote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quotes/quotes.module#QuotesPageModule', name: 'QuotesPage', segment: 'quotes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/second/second.module#SecondPageModule', name: 'SecondPage', segment: 'second', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_second_second__["a" /* SecondPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_quotes_quotes__["a" /* QuotesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_quote_quote__["a" /* QuotePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_add_quote_add_quote__["a" /* AddQuotePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_popover_popover__["a" /* PopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__services_quotes__["a" /* QuotesService */],
                __WEBPACK_IMPORTED_MODULE_18__services_settings__["a" /* SettingService */],
                __WEBPACK_IMPORTED_MODULE_20__services_AuthService__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        category: 'education',
        quotes: [
            {
                id: '1',
                person: 'John Dewey',
                text: 'Education is not preparation for life; education is life itself.'
            },
            {
                id: '2',
                person: 'Leo Buscaglia',
                text: 'Change is the end result of all true learning.'
            },
            {
                id: '3',
                person: 'Martin Luther King, Jr.',
                text: 'The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.'
            },
            {
                id: '4',
                person: 'Malcolm Forbes',
                text: 'Education\'s purpose is to replace an empty mind into an open one.'
            }
        ],
        icon: 'book'
    },
    {
        category: 'travel',
        quotes: [
            {
                id: '5',
                person: 'J.R.R. Tolkien',
                text: 'Not all those who wander are lost.'
            },
            {
                id: '6',
                person: 'Robert Louis Stevenson',
                text: 'I travel not to go anywhere, but to go. I travel for travel\'s sake. The great affair is to move.'
            },
            {
                id: '7',
                person: 'Gustave Flaubert',
                text: 'Travel makes one modest. You see what a tiny place you occupy in the world.'
            }
        ],
        icon: 'walk'
    },
    {
        category: 'life',
        quotes: [
            {
                id: '8',
                person: 'Elbert Hubbard',
                text: 'Do not take life too seriously. You will never get out of it alive.'
            },
            {
                id: '9',
                person: 'Josh Billings',
                text: 'Life consists not in holding good cards but in playing those you hold well.'
            },
            {
                id: '10',
                person: 'John F. Kennedy',
                text: 'Change is the law of life. And those who look only to the past or present are certain to miss the future.'
            },
            {
                id: '11',
                person: 'Oliver Goldsmith',
                text: 'Life is a journey that must be traveled no matter how bad the roads and accommodations.'
            }
        ],
        icon: 'leaf'
    },
    {
        category: 'teamwork',
        quotes: [
            {
                id: '12',
                person: 'Michael Jordan',
                text: 'Talent wins the game, but teamwork and intelligence wins championships.'
            },
            {
                id: '13',
                person: 'Casey Stengel',
                text: 'Finding good players is easy. Getting them to play as a team is another story.'
            }
        ],
        icon: 'people'
    }
]);
//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_setting_setting__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sign_up_sign_up__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_AuthService__ = __webpack_require__(49);
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
    function MyApp(platform, statusBar, splashScreen, menuCtrl, authServ) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.authServ = authServ;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.settingPage = __WEBPACK_IMPORTED_MODULE_5__pages_setting_setting__["a" /* SettingPage */];
        this.signUpPage = __WEBPACK_IMPORTED_MODULE_6__pages_sign_up_sign_up__["a" /* SignUpPage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
        this.signUp = __WEBPACK_IMPORTED_MODULE_6__pages_sign_up_sign_up__["a" /* SignUpPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.initializeApp({
            apiKey: "AIzaSyCpJACoCJ-KwphG7j3CTEH13IbLrvReHFA",
            authDomain: "fairbes-28e0a.firebaseapp.com",
            databaseURL: "https://fairbes-28e0a.firebaseio.com",
            projectId: "fairbes-28e0a",
            storageBucket: "fairbes-28e0a.appspot.com",
            messagingSenderId: "664084706217"
        });
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.signOut = function () {
        this.authServ.logout();
    };
    MyApp.prototype.cekUser = function () {
        return this.authServ.getCurrentUser();
        //console.log(this.authServ.getCurrentUser);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sideMenuContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\mcp_project\myfavquotes_app\src\app\app.html"*/'<ion-menu [content]="sideMenuContent">\n    <ion-header>\n        <ion-toolbar text-center>\n            <h2>Menu</h2>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content *ngIf=\'cekUser()!=undefined\'>\n        <ion-list>\n            <button ion-item (click)="onLoad(tabsPage)">\n                <ion-icon name="quote" item-left></ion-icon>\n                Quotes\n            </button>\n            <button ion-item (click)="onLoad(settingPage)">\n                <ion-icon name="settings" item-left></ion-icon>\n                Settings\n            </button>\n            <button ion-item (click)="signOut(settingPage)">\n                <ion-icon  item-left></ion-icon>\n                LogOut\n            </button>\n        </ion-list>\n    </ion-content>\n    <ion-content *ngIf=\'cekUser()==undefined\'>\n        <ion-list>\n            <button ion-item (click)="onLoad(loginPage)">\n                <ion-icon  item-left></ion-icon>\n                Login\n            </button>\n            <button ion-item (click)="onLoad(signUp)">\n                <ion-icon  item-left></ion-icon>\n                Sign Up\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<!-- \n<ion-menu [content]="navDrawer">\n    <ion-header>\n        <ion-toolbar text-center>\n            <h2>Menu</h2>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)="onLoad(loginPage)">\n                <ion-icon  item-left></ion-icon>\n                Login\n            </button>\n            <button ion-item (click)="onLoad(signUp)">\n                <ion-icon  item-left></ion-icon>\n                Sign Up\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu> -->\n\n<ion-nav [root]="rootPage" #sideMenuContent></ion-nav>\n'/*ion-inline-end:"D:\mcp_project\myfavquotes_app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_9__services_AuthService__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__first_first__ = __webpack_require__(109);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.onClick = function () {
        console.log("Button is clicked");
    };
    HomePage.prototype.moveToFirstPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__first_first__["a" /* FirstPage */], { nama: "andre", umur: "25" });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\mcp_project\myfavquotes_app\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button (click)="onClick()">Click This Button</button><br>\n  <button ion-button (click)="moveToFirstPage()">Go To First Page</button>\n</ion-content>\n'/*ion-inline-end:"D:\mcp_project\myfavquotes_app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesService; });
var QuotesService = /** @class */ (function () {
    function QuotesService() {
        this.favoriteQuotes = [];
        this.totalQuotes = 13;
    }
    QuotesService.prototype.addQuoteToFavorites = function (quote) {
        this.favoriteQuotes.push(quote);
    };
    QuotesService.prototype.removeQuoteFromFavorites = function (quote) {
        var temp = this.favoriteQuotes.indexOf(quote);
        // console.log("testing : "+this.favoriteQuotes.indexOf(quote));
        this.favoriteQuotes.splice(temp, 1);
    };
    QuotesService.prototype.isFavorite = function (quote) {
        if (this.favoriteQuotes.indexOf(quote) != -1) {
            // console.log("testing : "+this.favoriteQuotes.indexOf(quote));
            return true;
        }
        else {
            return false;
        }
    };
    QuotesService.prototype.getAllFavoriteQuotes = function () {
        return this.favoriteQuotes;
    };
    return QuotesService;
}());

//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signup = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signin = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    AuthService.prototype.getCurrentUser = function () {
        var cu = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser;
        return cu;
    };
    return AuthService;
}());

//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
var SettingService = /** @class */ (function () {
    function SettingService() {
        this.altBackground = false;
    }
    SettingService.prototype.setBackground = function (isAlt) {
        this.altBackground = isAlt;
    };
    SettingService.prototype.isAltBackground = function () {
        return this.altBackground;
    };
    return SettingService;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map