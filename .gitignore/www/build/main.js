webpackJsonp([7],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the OrdersDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrdersDetailPage = (function () {
    function OrdersDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrdersDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersDetailPage');
    };
    return OrdersDetailPage;
}());
OrdersDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-orders-detail',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\orders-detail\orders-detail.html"*/'<!--\n  Generated template for the OrdersDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ordersDetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\orders-detail\orders-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], OrdersDetailPage);

//# sourceMappingURL=orders-detail.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpOrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmpOrderDetailsPage = (function () {
    function EmpOrderDetailsPage(authService, loadingCtrl, http, alert, storage, navCtrl, navParams) {
        var _this = this;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alert = alert;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.price = '0';
        this.userPostData = { "user_id": "", "token": "" };
        this.bedding = [];
        this.drycleaning = [];
        this.bed_items = [];
        this.dry_items = [];
        this.empOrderData = {};
        this.storage.get("empOrderDetails").then(function (result) {
            _this.empOrderData = result[0];
            console.log(_this.empOrderData);
            // this.amount = parseFloat(this.empOrderData.amount);
        });
        this.bedding_price = 0.0;
        this.drycleaning_price = 0.0;
        this.data = {};
        this.data.customer_id = "";
        this.data.amount = 0.0;
        this.order = {};
        var userData = JSON.parse(localStorage.getItem('data'));
        this.userDetails = userData.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.authService.postData(this.userPostData, "variableItemsPrice").then(function (result) {
            _this.variableItemsPriceData = result;
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
        this.getPrice();
        this.getVariableItems();
    }
    EmpOrderDetailsPage.prototype.getTotal = function () {
        var total = parseFloat(this.data.weight) * parseFloat(this.price);
        this.amount = this.amount + total;
    };
    EmpOrderDetailsPage.prototype.getPrice = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "washPrice").then(function (result) {
            _this.responseData = result;
            if (_this.responseData.washPriceData == null || _this.responseData.washPriceData.length == 0) {
                var alert_1 = _this.alert.create({
                    title: 'Warning',
                    subTitle: 'There is no price per pound',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                _this.price = _this.responseData.washPriceData[0].price;
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    EmpOrderDetailsPage.prototype.getVariableItems = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "variableItems").then(function (result) {
            _this.variableItemsData = result;
            _this.storage.get("orderItemDetails").then(function (data) {
                _this.ItemDetails = data;
                if (_this.ItemDetails.length != 0) {
                    _this.amount = 0.0;
                    for (var i = 0; i < _this.ItemDetails.length; i++) {
                        _this.amount += _this.ItemDetails[i].item_price;
                        for (var j = 0; j < _this.variableItemsData.variableItemsData.length; j++) {
                            if (_this.ItemDetails[i].item_name === _this.variableItemsData.variableItemsData[j].name) {
                                if (_this.ItemDetails[i].item_name === "Blanket" || _this.ItemDetails[i].item_name === "Comforter") {
                                    _this.bedding.push(_this.ItemDetails[i]);
                                    _this.bedding_price += parseFloat(_this.ItemDetails[i].item_price);
                                }
                                else {
                                    _this.drycleaning.push(_this.ItemDetails[i]);
                                    _this.drycleaning_price += parseFloat(_this.ItemDetails[i].item_price);
                                }
                            }
                        }
                    }
                    _this.amount = _this.amount - _this.bedding_price - _this.drycleaning_price;
                }
            });
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    EmpOrderDetailsPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Loading..!"
        });
        this.loader.present();
    };
    EmpOrderDetailsPage.prototype.bed = function () {
        var bed;
        bed = this.bedding;
        var loadDry;
        console.log(bed);
        if (this.bedding != null && this.bedding.length != 0) {
            for (var i = 0; i < this.bedding.length; i++) {
                var s = bed[i].item_name;
                var k = parseInt(document.getElementById(s + "king").value);
                var q = parseInt(document.getElementById(s + "queen").value);
                var f = parseInt(document.getElementById(s + "full").value);
                if (isNaN(k)) {
                    k = parseInt("0");
                }
                if (isNaN(q)) {
                    q = parseInt("0");
                }
                if (isNaN(f)) {
                    f = parseInt("0");
                }
                if ((k + q + f) != bed[i].item_qty) {
                    var alert_2 = this.alert.create({
                        title: 'Warning',
                        subTitle: bed[i].item_name + ' quantity is incorrect',
                        buttons: ['OK']
                    });
                    alert_2.present();
                    loadDry = 0;
                }
                else {
                    console.log(this.variableItemsPriceData);
                    var vData = this.variableItemsPriceData.variableItemsPriceData;
                    var king_price = 0.0;
                    var queen_price = 0.0;
                    var full_price = 0.0;
                    var order_variableItem_details = void 0;
                    for (var j = 0; j < vData.length; j++) {
                        this.storage.get("order_variableItem_details").then(function (data) {
                            data = [];
                        });
                        if (vData[j].name == s && vData[j].size == "king" && k > 0) {
                            king_price = parseFloat(vData[j].price) * k;
                            this.amount += king_price;
                            order_variableItem_details = {
                                "id": this.empOrderData.order_token,
                                "name": s,
                                "size": "King",
                                "price": parseFloat(vData[j].price),
                                "qty": k
                            };
                            this.bed_items.push(order_variableItem_details);
                        }
                        if (vData[j].name == s && vData[j].size == "queen" && q > 0) {
                            queen_price = parseFloat(vData[j].price) * q;
                            this.amount += queen_price;
                            order_variableItem_details = {
                                "id": this.empOrderData.order_token,
                                "name": s,
                                "size": "Queen",
                                "price": parseFloat(vData[j].price),
                                "qty": q
                            };
                            this.bed_items.push(order_variableItem_details);
                        }
                        if (vData[j].name == s && vData[j].size == "full" && f > 0) {
                            full_price = parseFloat(vData[j].price) * f;
                            this.amount += full_price;
                            order_variableItem_details = {
                                "id": this.empOrderData.order_token,
                                "name": s,
                                "size": "Full",
                                "price": parseFloat(vData[j].price),
                                "qty": f
                            };
                            this.bed_items.push(order_variableItem_details);
                        }
                    }
                    loadDry = 1;
                }
            }
            if (loadDry == 1) {
                this.dry();
            }
        }
    };
    EmpOrderDetailsPage.prototype.dry = function () {
        var dry;
        var order_variableItem_details;
        dry = this.drycleaning;
        console.log(dry);
        var loadVerify;
        if (this.drycleaning != null && this.drycleaning.length != 0) {
            for (var i = 0; i < this.drycleaning.length; i++) {
                var s = dry[i].item_name;
                var small = parseInt(document.getElementById(s + "small").value);
                var medium = parseInt(document.getElementById(s + "medium").value);
                var large = parseInt(document.getElementById(s + "large").value);
                if (isNaN(small)) {
                    small = parseInt("0");
                }
                if (isNaN(medium)) {
                    medium = parseInt("0");
                }
                if (isNaN(large)) {
                    large = parseInt("0");
                }
                if ((small + medium + large) != dry[i].item_qty) {
                    var alert_3 = this.alert.create({
                        title: 'Warning',
                        subTitle: dry[i].item_name + ' quantity is wrong',
                        buttons: ['OK']
                    });
                    alert_3.present();
                    this.amount = this.empOrderData.amount;
                    this.getVariableItems();
                    loadVerify = 0;
                }
                else {
                    var vData = this.variableItemsPriceData.variableItemsPriceData;
                    var small_price = 0.0;
                    var medium_price = 0.0;
                    var large_price = 0.0;
                    for (var j = 0; j < vData.length; j++) {
                        if (vData[j].name == s && vData[j].size == "small" && small > 0) {
                            small_price = parseFloat(vData[j].price) * small;
                            this.amount += small_price;
                            order_variableItem_details = {
                                "id": this.empOrderData.order_token,
                                "name": s,
                                "size": "Small",
                                "price": parseFloat(vData[j].price),
                                "qty": small
                            };
                            this.bed_items.push(order_variableItem_details);
                        }
                        if (vData[j].name == s && vData[j].size == "medium" && medium > 0) {
                            medium_price = parseFloat(vData[j].price) * medium;
                            this.amount += medium_price;
                            order_variableItem_details = {
                                "id": this.empOrderData.order_token,
                                "name": s,
                                "size": "Medium",
                                "price": parseFloat(vData[j].price),
                                "qty": medium
                            };
                            this.bed_items.push(order_variableItem_details);
                        }
                        if (vData[j].name == s && vData[j].size == "large" && large > 0) {
                            large_price = parseFloat(vData[j].price) * large;
                            this.amount += large_price;
                            order_variableItem_details = {
                                "id": this.empOrderData.order_token,
                                "name": s,
                                "size": "Large",
                                "price": parseFloat(vData[j].price),
                                "qty": large
                            };
                            this.bed_items.push(order_variableItem_details);
                        }
                    }
                    loadVerify = 1;
                }
            }
            if (loadVerify == 1) {
                this.verify();
            }
        }
    };
    EmpOrderDetailsPage.prototype.verify = function () {
        var _this = this;
        console.log(this.bed_items);
        var bed_dry;
        bed_dry = this.bed_items;
        this.storage.get("order_variableItem").then(function (data) {
            data = [];
            for (var i = 0; i < bed_dry.length; i++) {
                data.push({
                    "id": bed_dry[i].id,
                    "name": bed_dry[i].name,
                    "size": bed_dry[i].size,
                    "price": parseFloat(bed_dry[i].price),
                    "qty": parseInt(bed_dry[i].qty)
                });
                _this.storage.set("order_variableItem", data);
            }
        });
        var variableItemsSave;
        this.storage.get("order_variableItem").then(function (data) {
            variableItemsSave = data;
            console.log(variableItemsSave);
        });
        // this.storage.get("order_variableItem_details").then((data) => {
        //                          console.log(data);
        //                        })
        // this.storage.remove("order_variableItem_details");
        var alert = this.alert.create({
            title: 'Do you want to proceed',
            subTitle: 'Grand total: $' + parseFloat(this.amount).toFixed(2),
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.presentLoading();
                        _this.data.amount = parseFloat(_this.amount).toFixed(2);
                        _this.data.customer_id = _this.empOrderData.customer_id;
                        var data = JSON.stringify(_this.data);
                        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                        headers.append('Content-Type', 'application/json');
                        _this.http.post('http://www.broadway-bubbles.com/stripe/payment_on_default_card.php', data, headers).subscribe(function (res) {
                            var response = res.json();
                            _this.loader.dismiss();
                            if (response.status) {
                                _this.order.amount = _this.data.amount;
                                _this.order.weight = parseFloat(_this.data.weight);
                                var userData = JSON.parse(localStorage.getItem('data'));
                                _this.order.user_id = parseInt(userData.userData.user_id);
                                _this.order.token = userData.userData.token;
                                _this.order.order_id = _this.empOrderData.order_id;
                                _this.authService.postData(_this.order, "updateOrder").then(function (result) {
                                    var salert = _this.alert.create({
                                        title: 'Success',
                                        subTitle: 'Amount Charged Successfully',
                                        buttons: [
                                            {
                                                text: 'Ok',
                                                handler: function () {
                                                    _this.authService.postData(variableItemsSave, "variableItemsSave").then(function (result) {
                                                        console.log(result);
                                                    });
                                                    _this.navCtrl.pop();
                                                }
                                            }
                                        ]
                                    });
                                    salert.present();
                                });
                            }
                        });
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        _this.data.weight = "";
                        _this.amount = _this.empOrderData.amount;
                        _this.getVariableItems();
                    }
                }
            ]
        });
        alert.present();
    };
    EmpOrderDetailsPage.prototype.charge = function () {
        this.getTotal();
        this.bed();
    };
    return EmpOrderDetailsPage;
}());
EmpOrderDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-emp-order-details',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\emp-order-details\emp-order-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Order Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="emp_order_list">\n  <h1>Order ID: {{empOrderData.order_id}}</h1>\n  <ion-item>\n    <ion-label>\n      <p>Order Token:</p>\n    </ion-label>\n    <ion-badge item-end>{{empOrderData.order_token}}</ion-badge>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>\n      <p>Payment Type:</p>\n    </ion-label>\n    <ion-badge item-end>{{empOrderData.payment_method}}</ion-badge>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>\n      <p>Order Weight:</p> \n    </ion-label>\n    <ion-input type="number" placeholder="Enter Weight in lbs" [(ngModel)]="data.weight" required></ion-input>\n  </ion-item>\n  <!-- <ion-item>\n    <ion-label>\n      <p>Amount:</p>\n    </ion-label>\n    <ion-label>${{amount}}</ion-label>\n  </ion-item> -->\n  <!-- <ion-item>\n    <ion-label>\n      <p>Promo Code:</p>\n    </ion-label>\n    <ion-input type="text" placeholder="Enter Promo Code" ></ion-input>\n  </ion-item> -->\n  <!-- [(ngModel)]="formData.king" -->\n<ion-card *ngFor="let order of bedding">\n    <ion-card-content>\n        <span>{{order.item_name}} - <b>{{order.item_qty}}</b></span>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n              <input class="king" type="tel"  id="{{order.item_name}}king"  name="king"  placeholder="King Size">\n            </ion-col>\n            <ion-col col-4>\n              <input class="king" type="tel"  id="{{order.item_name}}queen" name="queen"  placeholder="Queen Size">\n            </ion-col>\n            <ion-col col-4>\n                <input class="king" type="tel" id="{{order.item_name}}full"  name="full"  placeholder="Full Size">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card-content>\n</ion-card>\n\n<ion-card *ngFor="let item of drycleaning">\n    <ion-card-content>\n        <span>{{item.item_name}} - <b>{{item.item_qty}}</b></span>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n              <input class="king" type="tel" id="{{item.item_name}}small" name="" placeholder="Small Size">\n            </ion-col>\n            <ion-col col-4>\n                <input class="king" type="tel" id="{{item.item_name}}medium" name="" placeholder="Medium Size">\n            </ion-col>\n            <ion-col col-4>\n                <input class="king" type="tel" id="{{item.item_name}}large" name="" placeholder="Large Size">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card-content>\n</ion-card>\n\n</ion-content>\n\n<ion-footer class="emp_order_footer">\n  <button ion-button full (click)="charge()" class="emp_order_button" [disabled]="!data.weight">Charge</button>\n</ion-footer>'/*ion-inline-end:"C:\Ionic\bb\src\pages\emp-order-details\emp-order-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], EmpOrderDetailsPage);

// import { Network } from 'ionic-native';
// declare var navigator: any;
// declare var Connection: any; 
// this.platform.ready().then(() => {
//     let disconnectSub = Network.onDisconnect().subscribe(() => {
//       console.log('you are offline');
//     });
//     let connectSub = Network.onConnect().subscribe(()=> {
//       console.log('you are online');
//     });
//   });
// }
// http://www.fizerkhan.com/blog/posts/Showing-No-internet-connection-message-in-Ionic-application.html
//https://www.youtube.com/watch?v=VhyKYphZLwk 
//# sourceMappingURL=emp-order-details.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emp_order_details_emp_order_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeePage = (function () {
    function EmployeePage(storage, navCtrl, authService, navParams, alert) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.alert = alert;
        this.userPostData = { "user_id": "", "token": "", "order_token": "" };
        this.length = 0;
        this.empOrdersList = [];
        var data = JSON.parse(localStorage.getItem('data'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getAddress();
    }
    EmployeePage.prototype.getAddress = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "empOrderList").then(function (result) {
            _this.responseData = result;
            if (_this.responseData.empOrderData == null || _this.responseData.empOrderData.length == 0) {
                var alert_1 = _this.alert.create({
                    title: 'Orders',
                    subTitle: 'There are no new orders',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                _this.length = _this.responseData.empOrderData.length;
                for (var i = 0; i < _this.responseData.empOrderData.length; i++) {
                    _this.empOrdersList.push(_this.responseData.empOrderData[i]);
                }
                //console.log(this.empOrdersList);
                // this.dataset = this.responseData.addressData;
                // console.log(this.dataset);
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    EmployeePage.prototype.openOrder = function (data) {
        var _this = this;
        //console.log(data.order_token)
        this.storage.get("empOrderDetails").then(function (result) {
            _this.userPostData.order_token = data.order_token;
            _this.authService.postData(_this.userPostData, "orderItemList").then(function (something) {
                //console.log(something)
                _this.orderDetails = something;
                _this.storage.get("orderItemDetails").then(function (ItemList) {
                    ItemList = [];
                    for (var i = 0; i < _this.orderDetails.orderItemData.length; i++) {
                        ItemList.push({
                            "created_at": _this.orderDetails.orderItemData[i].created_at,
                            "id": _this.orderDetails.orderItemData[i].id,
                            "item_name": _this.orderDetails.orderItemData[i].item_name,
                            "item_price": parseFloat(_this.orderDetails.orderItemData[i].item_price),
                            "item_qty": parseInt(_this.orderDetails.orderItemData[i].item_qty),
                            "order_token": _this.orderDetails.orderItemData[i].order_token,
                            "user_id": parseInt(_this.orderDetails.orderItemData[i].user_id)
                        });
                    }
                    _this.storage.set("orderItemDetails", ItemList).then(function () {
                        _this.orderDetails = ItemList;
                        //console.log(ItemList)
                    });
                });
                //console.log(this.orderDetails.orderItemData.length)
            });
            result = [];
            result.push({
                "amount": parseFloat(data.amount),
                "created_at": data.created_at,
                "customer_id": data.customer_id,
                "express_delivery": data.express_delivery,
                "order_id": parseInt(data.order_id),
                "order_status": data.order_status,
                "order_token": data.order_token,
                "payment_method": data.payment_method,
                "pickup_time": data.pickup_time,
                "user_id": parseInt(data.user_id),
                "weight": data.weight,
            });
            _this.storage.set("empOrderDetails", result);
            _this.jump();
        });
    };
    EmployeePage.prototype.jump = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__emp_order_details_emp_order_details__["a" /* EmpOrderDetailsPage */]);
    };
    EmployeePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    return EmployeePage;
}());
EmployeePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-employee',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\employee\employee.html"*/'<ion-header >\n  <ion-navbar color="danger">\n    <ion-title>Employee Portal</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'logout()\'>\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid *ngIf="length == 0">\n        <ion-row no-padding no-margin>\n            <ion-col col-4 no-padding>\n            </ion-col>\n            <ion-col col-4 no-padding>\n                <button ion-button (click)="getAddress()">Refresh</button>\n            </ion-col>\n            <ion-col col-4 no-padding>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n  <ion-card *ngFor="let order of empOrdersList">\n    <ion-card-content (click)="openOrder(order)">\n        <span>Order ID: {{order.order_id}}</span>\n        <p>Created Time: {{order.created_at}}</p>\n        <p>Express Delivery: {{order.express_delivery}}</p>\n        \n    </ion-card-content>\n</ion-card>\n</ion-content>\n\n<ion-footer class="home_footer">\n		<button ion-button full *ngIf="length != 0" (click)="getAddress()" class="order_button">Refresh</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\employee\employee.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], EmployeePage);

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the HelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-help',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\help\help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the PricingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PricingPage = (function () {
    function PricingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PricingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PricingPage');
    };
    return PricingPage;
}());
PricingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pricing',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\pricing\pricing.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title color="primary">Pricing</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h1>Wash and Fold</h1>\n        <img src="assets/images/wash_fold.png" alt="Wash and Fold" />\n        <!-- <h3>$1.55/lb</h3> -->\n        <p><ion-icon name="checkmark" class="dark" item-left large></ion-icon> Open 7 am to 10 pm, 7 days a week.</p>\n        <p><ion-icon name="checkmark" class="dark" item-left large></ion-icon> Free pickup/delivery (orders over $20)</p>\n        <!-- <p><ion-icon name="checkmark" class="dark" item-left large></ion-icon> $10 off your first order</p>\n        <p><ion-icon name="checkmark" class="dark" item-left large></ion-icon> Free laundry Bag (with purchase)</p> -->\n      </ion-col>\n\n      <ion-col col-12 class="person">\n            <h1>Individual</h1>\n            <ion-icon name="person" class="person_1" large></ion-icon>\n            <p>5-10lbs/week</p>\n            <p>est. $8-16/week</p>\n        </ion-col>\n        <ion-col col-12 class="person">\n            <h1>Couple</h1>\n            <ion-icon name="person" class="person_2" large></ion-icon>\n            <ion-icon name="person" class="person_2" large></ion-icon>\n            <p>10-20lbs/week</p>\n            <p>est. $16-31/week</p>\n        </ion-col>\n        <ion-col col-12 class="person">\n            <h1>Family</h1>\n            <ion-icon name="ios-people" class="person_1" large></ion-icon>\n            <p>12-24lbs/week</p>\n            <p>est. $19-37/week</p>\n        </ion-col>\n      \n      <!-- <ion-col col-12 class="person">\n          <p>Minimum order size	-	<b>$20.00</b></p>\n          <p>Delivery, orders <i>under $30 </i> -	<b> $3.99</b></p>\n          <p>Delivery, orders <i>over $30 </i> -	<b> FREE</b></p>\n      </ion-col> -->\n    </ion-row>\n  \n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Ionic\bb\src\pages\pricing\pricing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], PricingPage);

//# sourceMappingURL=pricing.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart-item/cart-item.module": [
		332,
		6
	],
	"../pages/emp-order-details/emp-order-details.module": [
		326,
		5
	],
	"../pages/employee/employee.module": [
		327,
		4
	],
	"../pages/help/help.module": [
		330,
		3
	],
	"../pages/orders-detail/orders-detail.module": [
		329,
		2
	],
	"../pages/pricing/pricing.module": [
		331,
		1
	],
	"../pages/shipping/shipping.module": [
		328,
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
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normal_normal__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__express_express__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__normal_d_normal_d__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__express_d_express_d__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DriverPage = (function () {
    function DriverPage(navCtrl, http, navParams, app, alert, authService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.app = app;
        this.alert = alert;
        this.authService = authService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__express_express__["a" /* ExpressPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_0__normal_normal__["a" /* NormalPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__express_d_express_d__["a" /* ExpressDPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__normal_d_normal_d__["a" /* NormalDPage */];
        this.eplength = 0;
        this.nplength = 0;
        this.edlength = 0;
        this.ndlength = 0;
        this.userPostData = { "user_id": "", "token": "" };
        var data = JSON.parse(localStorage.getItem('data'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.epickup();
        this.edelivery();
        this.npickup();
        this.ndelivery();
    }
    DriverPage.prototype.epickup = function () {
        var _this = this;
        var data = JSON.stringify(this.userPostData);
        this.http.post('http://www.broadway-bubbles.com/PHP-Slim/api/index.php/expressPickup', data).subscribe(function (res) {
            var response = res.json();
            _this.responseData = response;
            if (_this.responseData.addressData.length != 0 && _this.responseData.addressData.length != null) {
                _this.eplength = _this.responseData.addressData.length;
            }
            else {
                _this.eplength = 0;
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    DriverPage.prototype.npickup = function () {
        var _this = this;
        var data = JSON.stringify(this.userPostData);
        this.http.post('http://www.broadway-bubbles.com/PHP-Slim/api/index.php/normalPickup', data).subscribe(function (res) {
            var response = res.json();
            _this.responseData = response;
            if (_this.responseData.addressData.length != 0 && _this.responseData.addressData.length != null) {
                _this.nplength = _this.responseData.addressData.length;
            }
            else {
                _this.nplength = 0;
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    DriverPage.prototype.edelivery = function () {
        var _this = this;
        var data = JSON.stringify(this.userPostData);
        this.http.post('http://www.broadway-bubbles.com/PHP-Slim/api/index.php/expressDelivery', data).subscribe(function (res) {
            var response = res.json();
            _this.responseData = response;
            if (_this.responseData.addressData.length != 0 && _this.responseData.addressData.length != null) {
                _this.edlength = _this.responseData.addressData.length;
            }
            else {
                _this.edlength = 0;
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    DriverPage.prototype.ndelivery = function () {
        var _this = this;
        var data = JSON.stringify(this.userPostData);
        this.http.post('http://www.broadway-bubbles.com/PHP-Slim/api/index.php/normalDelivery', data).subscribe(function (res) {
            var response = res.json();
            _this.responseData = response;
            if (_this.responseData.addressData.length != 0 && _this.responseData.addressData.length != null) {
                _this.ndlength = _this.responseData.addressData.length;
            }
            else {
                _this.ndlength = 0;
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    return DriverPage;
}());
DriverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-driver',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\driver\driver.html"*/'<ion-content padding>\n  <!-- <button (click)="onGoToLogout()"></button> -->\n  <!-- (ionSelect) -->\n  <ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Express Pickup" tabBadge="{{eplength}}" (ionSelect)="epickup()" tabIcon="car"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Normal Picup" tabBadge="{{nplength}}" (ionSelect)="npickup()" tabIcon="bicycle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Express Delivery" tabBadge="{{edlength}}" (ionSelect)="edelivery()" tabIcon="car"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Normal Delivery" tabBadge="{{ndlength}}" (ionSelect)="ndelivery()" tabIcon="bicycle"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\driver\driver.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], DriverPage);

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_map_show_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NormalPage = (function () {
    function NormalPage(app, navCtrl, navParams, alert, authService) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.authService = authService;
        this.userPostData = { "user_id": "", "token": "", "order_id": Number, "order_status": "" };
        var data = JSON.parse(localStorage.getItem('data'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getAddress();
    }
    NormalPage.prototype.changeTime = function (data) {
        var h = data.slice(0, 2);
        var m = data.slice(2, 5);
        var s = "";
        if (h < 12) {
            s = " AM";
        }
        else {
            h = h - 12;
            s = " PM";
        }
        return h + m + s;
    };
    NormalPage.prototype.changeAddress = function (addr) {
        var s = addr.replace(' New York, NY', '');
        s = s.replace(', USA', '');
        return s;
    };
    NormalPage.prototype.getAddress = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "normalPickup").then(function (result) {
            _this.responseData = result;
            if (_this.responseData.addressData) {
                _this.dataset = _this.responseData.addressData;
                _this.length = _this.responseData.addressData.length;
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    NormalPage.prototype.pickup = function (id, msgIndex) {
        var _this = this;
        if (id > 0)
            this.userPostData.order_id = id;
        this.userPostData.order_status = "Pickedup";
        console.log(this.userPostData);
        this.authService.postData(this.userPostData, "driverInput").then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.success) {
                var alert_1 = _this.alert.create({
                    title: 'Success',
                    subTitle: 'Order status updated !',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.dataset.splice(msgIndex, 1);
                _this.getAddress();
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    NormalPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__show_map_show_map__["a" /* ShowMapPage */]);
    };
    NormalPage.prototype.logout = function () {
        localStorage.clear();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    return NormalPage;
}());
NormalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-normal',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\normal\normal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Normal Pickup</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'logout()\'>\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-grid *ngIf="length == 0">\n            <ion-row no-padding no-margin>\n                <ion-col col-4 no-padding>\n                </ion-col>\n                <ion-col col-4 no-padding>\n                    <button ion-button (click)="getAddress()">Refresh</button>\n                </ion-col>\n                <ion-col col-4 no-padding>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-item *ngFor="let item of dataset; let msgIndex = index">\n          <p>Order Number: {{item.order_id}}</p>\n          <span>Pick up time: {{changeTime(item.pickup_time)}}</span>\n          <p>Apt No: {{item.apt}}, {{changeAddress(item.user_address)}}</p>\n          <button ion-button clear item-right color="success" (click)="map()">\n            <ion-icon name="send"></ion-icon>\n          </button>\n          <button ion-button (click)="pickup(item.order_id, msgIndex)">Picked Up</button>  \n        </ion-item>\n      </ion-list>\n  </ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\normal\normal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], NormalPage);

//# sourceMappingURL=normal.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__show_map_show_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
var ExpressPage = (function () {
    function ExpressPage(app, navCtrl, navParams, alert, authService) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.authService = authService;
        this.userPostData = { "user_id": "", "token": "", "order_id": Number, "order_status": "" };
        var data = JSON.parse(localStorage.getItem('data'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getAddress();
    }
    ExpressPage.prototype.changeTime = function (data) {
        var h = data.slice(0, 2);
        var m = data.slice(2, 5);
        var s = "";
        if (h < 12) {
            s = " AM";
        }
        else {
            h = h - 12;
            s = " PM";
        }
        return h + m + s;
    };
    ExpressPage.prototype.changeAddress = function (addr) {
        var s = addr.replace(' New York, NY', '');
        s = s.replace(', USA', '');
        return s;
    };
    ExpressPage.prototype.getAddress = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "expressPickup").then(function (result) {
            _this.responseData = result;
            if (_this.responseData.addressData) {
                _this.dataset = _this.responseData.addressData;
                _this.length = _this.responseData.addressData.length;
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    ExpressPage.prototype.pickup = function (id, msgIndex) {
        var _this = this;
        if (id > 0)
            this.userPostData.order_id = id;
        this.userPostData.order_status = "Pickedup";
        console.log(this.userPostData);
        this.authService.postData(this.userPostData, "driverInput").then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.success) {
                var alert_1 = _this.alert.create({
                    title: 'Success',
                    subTitle: 'Order status updated !',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.dataset.splice(msgIndex, 1);
                _this.getAddress();
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    ExpressPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__show_map_show_map__["a" /* ShowMapPage */]);
    };
    ExpressPage.prototype.logout = function () {
        localStorage.clear();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
    };
    return ExpressPage;
}());
ExpressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-express',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\express\express.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Express Pickup</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'logout()\'>\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-grid *ngIf="length == 0">\n            <ion-row no-padding no-margin>\n                <ion-col col-4 no-padding>\n                </ion-col>\n                <ion-col col-4 no-padding>\n                    <button ion-button (click)="getAddress()">Refresh</button>\n                </ion-col>\n                <ion-col col-4 no-padding>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n      \n        <ion-item *ngFor="let item of dataset; let msgIndex = index">\n          <p>Order Number: {{item.order_id}}</p>\n          <span>Pick up time: {{changeTime(item.pickup_time)}}</span>\n          <p>Apt No: {{item.apt}}, {{changeAddress(item.user_address)}}</p>\n          <button ion-button clear item-right color="success" (click)="map()">\n            <ion-icon name="send"></ion-icon>\n          </button>\n          <button ion-button (click)="pickup(item.order_id, msgIndex)">Picked Up</button>  \n        </ion-item>\n      </ion-list>\n  </ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\express\express.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], ExpressPage);

//# sourceMappingURL=express.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalDPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_map_show_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NormalDPage = (function () {
    function NormalDPage(app, navCtrl, navParams, alert, authService) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.authService = authService;
        this.userPostData = { "user_id": "", "token": "", "order_id": Number, "order_status": "" };
        var data = JSON.parse(localStorage.getItem('data'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getAddress();
    }
    NormalDPage.prototype.changeAddress = function (addr) {
        var s = addr.replace(' New York, NY', '');
        s = s.replace(', USA', '');
        return s;
    };
    NormalDPage.prototype.getAddress = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "normalDelivery").then(function (result) {
            _this.responseData = result;
            if (_this.responseData.addressData) {
                _this.dataset = _this.responseData.addressData;
                _this.length = _this.responseData.addressData.length;
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    NormalDPage.prototype.delivery = function (id, msgIndex) {
        var _this = this;
        if (id > 0)
            this.userPostData.order_id = id;
        this.userPostData.order_status = "Delivered";
        console.log(this.userPostData);
        this.authService.postData(this.userPostData, "driverInput").then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.success) {
                var alert_1 = _this.alert.create({
                    title: 'Success',
                    subTitle: 'Order status updated !',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.dataset.splice(msgIndex, 1);
                _this.getAddress();
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    NormalDPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__show_map_show_map__["a" /* ShowMapPage */]);
    };
    NormalDPage.prototype.logout = function () {
        localStorage.clear();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    return NormalDPage;
}());
NormalDPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-normal-d',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\normal-d\normal-d.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>Normal Delivery</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'logout()\'>\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-grid *ngIf="length == 0">\n            <ion-row no-padding no-margin>\n                <ion-col col-4 no-padding>\n                </ion-col>\n                <ion-col col-4 no-padding>\n                    <button ion-button (click)="getAddress()">Refresh</button>\n                </ion-col>\n                <ion-col col-4 no-padding>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-item *ngFor="let item of dataset; let msgIndex = index">\n          <span>Order Number: {{item.order_id}}</span>\n          <p>Apt No: {{item.apt}}, {{changeAddress(item.user_address)}}</p>\n          <button ion-button clear item-right color="success" (click)="map()">\n            <ion-icon name="send"></ion-icon>\n          </button>\n          <button ion-button (click)="delivery(item.order_id, msgIndex)">Delivered</button>  \n        </ion-item>\n      </ion-list>\n  </ion-content>\n    \n    \n    '/*ion-inline-end:"C:\Ionic\bb\src\pages\normal-d\normal-d.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], NormalDPage);

//# sourceMappingURL=normal-d.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressDPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__show_map_show_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExpressDPage = (function () {
    function ExpressDPage(app, navCtrl, navParams, alert, authService) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.authService = authService;
        this.userPostData = { "user_id": "", "token": "", "order_id": Number, "order_status": "" };
        var data = JSON.parse(localStorage.getItem('data'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getAddress();
    }
    ExpressDPage.prototype.changeTime = function (data) {
        var h = data.slice(0, 2);
        h++;
        h++;
        h++;
        h++;
        var m = data.slice(2, 5);
        var s = "";
        if (h < 12) {
            s = " AM";
        }
        else {
            h = h - 12;
            s = " PM";
        }
        return h + m + s;
    };
    ExpressDPage.prototype.changeAddress = function (addr) {
        var s = addr.replace(' New York, NY', '');
        s = s.replace(', USA', '');
        return s;
    };
    ExpressDPage.prototype.getAddress = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "expressDelivery").then(function (result) {
            _this.responseData = result;
            if (_this.responseData.addressData) {
                _this.dataset = _this.responseData.addressData;
                _this.length = _this.responseData.addressData.length;
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    ExpressDPage.prototype.delivery = function (id, msgIndex) {
        var _this = this;
        if (id > 0)
            this.userPostData.order_id = id;
        this.userPostData.order_status = "Delivered";
        console.log(this.userPostData);
        this.authService.postData(this.userPostData, "driverInput").then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.success) {
                var alert_1 = _this.alert.create({
                    title: 'Success',
                    subTitle: 'Order status updated !',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.dataset.splice(msgIndex, 1);
                _this.getAddress();
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    ExpressDPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__show_map_show_map__["a" /* ShowMapPage */]);
    };
    ExpressDPage.prototype.logout = function () {
        localStorage.clear();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
    };
    return ExpressDPage;
}());
ExpressDPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-express-d',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\express-d\express-d.html"*/'<ion-header>\n    \n<ion-navbar>\n  <ion-title>Express Delivery</ion-title>\n  <ion-buttons end>\n    <button ion-button icon-only (click)=\'logout()\'>\n      <ion-icon name="log-out"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n      <ion-grid *ngIf="length == 0">\n          <ion-row no-padding no-margin>\n              <ion-col col-4 no-padding>\n              </ion-col>\n              <ion-col col-4 no-padding>\n                  <button ion-button (click)="getAddress()">Refresh</button>\n              </ion-col>\n              <ion-col col-4 no-padding>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n      <ion-item *ngFor="let item of dataset; let msgIndex = index">\n        <p>Order Number: {{item.order_id}}</p>\n        <span>Delivery time: {{changeTime(item.pickup_time)}}</span>\n        <p>Apt No: {{item.apt}}, {{changeAddress(item.user_address)}}</p>\n        <button ion-button clear item-right color="success" (click)="map()">\n          <ion-icon name="send"></ion-icon>\n        </button>\n        <button ion-button (click)="delivery(item.order_id, msgIndex)">Delivered</button>  \n      </ion-item>\n    </ion-list>\n</ion-content>\n    '/*ion-inline-end:"C:\Ionic\bb\src\pages\express-d\express-d.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], ExpressDPage);

//# sourceMappingURL=express-d.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, authService, formbuilder, alert) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formbuilder = formbuilder;
        this.alert = alert;
        this.signup_form = this.formbuilder.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            "username": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            "email": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            "password": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            "cpassword": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
        });
        this.data = {};
        this.data.name = "";
        this.data.username = "";
        this.data.email = "";
        this.data.password = "";
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var password = this.data.password;
        var cpassword = this.data.cpassword;
        if (password === cpassword) {
            this.authService.postData(this.data, "signup").then(function (result) {
                console.log(result);
                if (result) {
                    var alert_1 = _this.alert.create({
                        title: 'Success',
                        subTitle: 'Activation link has been sent to your email address ' + _this.data.email + '. Please activate your account and Login.',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
                }
            }, function (error) {
                var alert = _this.alert.create({
                    title: 'Warning',
                    subTitle: 'There is an error! Please Try Again !',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        else {
            var alert_2 = this.alert.create({
                title: 'Warning',
                subTitle: 'Passwords Do not Match! Please Try Again !',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\signup\signup.html"*/'<ion-content class="background">\n    <ion-header>\n  \n    <ion-navbar>\n      \n    </ion-navbar>\n  \n  </ion-header>\n  <img src="assets/images/icon_inverted_white.png" style="height: 170px; width: 150px;" alt="Washing">\n  <h1 class="bb_text">Broadway Bubbles </h1>\n    <ion-card>\n      <ion-card-header>\n        Sign Up\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list no-lines>\n          <form [formGroup]="signup_form">\n          <ion-item>\n              <ion-label floating>Name</ion-label>\n              <ion-input type="text" formControlName="name" name="name" [(ngModel)]="data.name" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>UserID</ion-label>\n                <ion-input type="text" formControlName="username" name="username" [(ngModel)]="data.username" required></ion-input>\n              </ion-item>\n          <ion-item>\n            <ion-label floating>E-Mail</ion-label>\n            <ion-input type="email" formControlName="email" name="email" [(ngModel)]="data.email" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" formControlName="password" name="password" [(ngModel)]="data.password" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Confirm Password</ion-label>\n            <ion-input type="password" formControlName="cpassword" name="cpassword" [(ngModel)]="data.cpassword" required></ion-input>\n          </ion-item>\n  \n          <button ion-button color="primary" block class="register" (click)="signup()" [disabled]="!signup_form.valid">Sign Up</button>\n          </form>\n        </ion-list>\n  \n      </ion-card-content>\n    </ion-card>\n  \n  </ion-content>'/*ion-inline-end:"C:\Ionic\bb\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orders_orders__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__help_help__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pricing_pricing__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        var data = JSON.parse(localStorage.getItem('data'));
        this.userDetails = data.userData;
        this.homePage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    MenuPage.prototype.onGoToLogout = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome; }, 2000);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    MenuPage.prototype.onGoToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__account_account__["a" /* AccountPage */]);
    };
    MenuPage.prototype.onGoToPricing = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pricing_pricing__["a" /* PricingPage */]);
    };
    MenuPage.prototype.onGoToHelp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__help_help__["a" /* HelpPage */]);
    };
    MenuPage.prototype.onGoToCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    MenuPage.prototype.orders = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__orders_orders__["a" /* OrdersPage */]);
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\menu\menu.html"*/'<ion-menu [content]="content" >\n  \n  <ion-content class="card-background-page">\n\n    <ion-list>\n            <div class="card-title">{{ userDetails.name }}</div>\n            <div class="card-subtitle">{{ userDetails.email }}</div>\n      <ion-item  (click)="orders()">\n        <ion-icon name="card" item-left large></ion-icon>\n        <h2>Orders</h2>\n        <p>Check order status</p>\n      </ion-item>\n\n      <ion-item  (click)="onGoToAccount()" menuclose>\n          <ion-icon name="person" item-left large></ion-icon>\n          <h2>Account</h2>\n          <p>Your profile</p>\n      </ion-item>\n\n      <ion-item  (click)="onGoToPricing()" menuclose>\n          <ion-icon name="cash" item-left large></ion-icon>\n          <h2>Pricing</h2>\n          <p>Check price for items</p>\n      </ion-item>\n\n      <ion-item  (click)="onGoToHelp()" menuclose>\n          <ion-icon name="help-buoy" item-left large></ion-icon>\n          <h2>Help</h2>\n          <p>Frequently asked questions</p>\n      </ion-item>\n\n      <ion-item  (click)="onGoToCart()" menuclose>\n        <ion-icon name="cart" item-left large></ion-icon>\n        <h2>Cart</h2>\n        <p>Items in cart</p>\n      </ion-item>\n\n      <ion-item  (click)="onGoToLogout()" menuclose>\n        <ion-icon name="log-out" item-left large></ion-icon>\n        <h2>Sign Out</h2>\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="homePage"></ion-nav>'/*ion-inline-end:"C:\Ionic\bb\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetPaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payment_payment__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetPaymentPage = (function () {
    function GetPaymentPage(http, navCtrl, alert, viewCtrl, navParams, authService) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.displayCard = { "token": "" };
        this.userPostData = { "user_id": "", "token": "" };
        this.cardsList = [];
        if (localStorage.getItem('data')) {
            this.userLoginData = JSON.parse(localStorage.getItem('data'));
            console.log(this.userLoginData);
            this.userPostData.user_id = this.userLoginData.userData.user_id;
            this.userPostData.token = this.userLoginData.userData.token;
        }
        this.authService.postData(this.userPostData, "getPayment").then(function (result) {
            if (result) {
                _this.cardInfo = result;
                console.log(_this.cardInfo.paymentData[0].customer_id);
                for (var i = 0; i < _this.cardInfo.paymentData.length; i++) {
                    _this.displayCards(_this.cardInfo.paymentData[i].customer_id);
                }
            }
            else {
                var alert_1 = _this.alert.create({
                    title: 'Payment Method',
                    subTitle: 'Please add Credit Card',
                    buttons: ['OK',
                        {
                            text: 'Add Credit Card',
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__payment_payment__["a" /* PaymentPage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
    }
    GetPaymentPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    GetPaymentPage.prototype.displayCards = function (customerId) {
        var _this = this;
        this.http.get('http://localhost/stripe/getCardDetails.php?customer_id=' + customerId).subscribe(function (res) {
            _this.cardData = res.json();
            console.log(_this.cardData);
            _this.cardsList.push(_this.cardData);
            console.log(_this.cardsList);
        });
    };
    GetPaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GetPaymentPage');
    };
    GetPaymentPage.prototype.closeModal = function (data) {
        this.viewCtrl.dismiss(data);
    };
    return GetPaymentPage;
}());
GetPaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-get-payment',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\get-payment\get-payment.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Select Payment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngFor="let card of cardsList; let i = index">\n      <ion-card *ngFor="let data of card">\n        <ion-card-content (click)="closeModal(data)">\n            <!-- <p [innerHTML]="data.number"></p> -->\n            <span>****-****-****-{{data.number}}</span>\n            <span>{{data.brand}}</span>\n            <span>{{data.exp_month}}/{{data.exp_year}}</span>\n        </ion-card-content>\n    </ion-card>\n  </div>\n  <button ion-button (click)="close()">Close</button>\n  </ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\get-payment\get-payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], GetPaymentPage);

//# sourceMappingURL=get-payment.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_gmap_autocomplete_page_gmap_autocomplete__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetAddressPage = (function () {
    function GetAddressPage(navCtrl, toastCtrl, storage, navParams, viewCtrl, authService, alert) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.alert = alert;
        this.userPostData = { "user_id": "", "token": "" };
        this.addrsList = [];
        var data = JSON.parse(localStorage.getItem('data'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getAddress();
    }
    GetAddressPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    GetAddressPage.prototype.addAddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__page_gmap_autocomplete_page_gmap_autocomplete__["a" /* PageGmapAutocompletePage */]);
    };
    GetAddressPage.prototype.getAddress = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "getAddress").then(function (result) {
            _this.responseData = result;
            if (_this.responseData.addressData == null || _this.responseData.addressData.length == 0) {
                var alert_1 = _this.alert.create({
                    title: 'Address',
                    subTitle: 'Please add new address',
                    buttons: ['OK',
                        {
                            text: 'Create New address',
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__page_gmap_autocomplete_page_gmap_autocomplete__["a" /* PageGmapAutocompletePage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                for (var i = 0; i < _this.responseData.addressData.length; i++) {
                    _this.addrsList.push(_this.responseData.addressData[i]);
                }
                console.log(_this.addrsList);
                // this.dataset = this.responseData.addressData;
                // console.log(this.dataset);
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    GetAddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GetAddressPage');
    };
    GetAddressPage.prototype.closeModal = function (data) {
        this.toastCtrl.create({
            message: "Address Added",
            duration: 3000
        }).present();
        this.viewCtrl.dismiss(data);
    };
    return GetAddressPage;
}());
GetAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-get-address',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\get-address\get-address.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Select address</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let addr of addrsList">\n      <ion-card-content (click)="closeModal(addr)">\n          <p [innerHTML]="addr.name"></p>\n          <span>{{addr.full_address}}</span>\n          <p class="apt">Apt: {{addr.apt}}</p>\n      </ion-card-content>\n  </ion-card>\n  <button ion-button (click)="addAddress()">Add Address</button>\n  <button ion-button (click)="close()">Close</button>\n</ion-content>\n  \n'/*ion-inline-end:"C:\Ionic\bb\src\pages\get-address\get-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], GetAddressPage);

//# sourceMappingURL=get-address.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAutocompleteItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalAutocompleteItemsPage = (function () {
    function ModalAutocompleteItemsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalAutocompleteItemsPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    ModalAutocompleteItemsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalAutocompleteItemsPage.prototype.chooseItem = function (item) {
        console.log('modal > chooseItem > item > ', item);
        this.viewCtrl.dismiss(item);
    };
    ModalAutocompleteItemsPage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            types: ['geocode'],
            input: this.autocomplete.query,
            componentRestrictions: { country: 'US' }
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            predictions.forEach(function (prediction) {
                self.autocompleteItems.push(prediction);
            });
        });
    };
    return ModalAutocompleteItemsPage;
}());
ModalAutocompleteItemsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modal-autocomplete-items',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\modal-autocomplete-items\modal-autocomplete-items.html"*/'<ion-header>\n  <ion-navbar color="logo_bg">\n    <ion-title>Search address</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content> \n    <ion-searchbar \n        [(ngModel)]="autocomplete.query" \n        [showCancelButton]="true" \n        (ionInput)="updateSearch()" \n        (ionCancel)="dismiss()"\n        placeholder="Start typing and select ...">\n    </ion-searchbar>\n    <ion-list>\n        <ion-item *ngFor="let item of autocompleteItems" \n            (click)="chooseItem(item)">\n            {{ item.description }}\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\modal-autocomplete-items\modal-autocomplete-items.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], ModalAutocompleteItemsPage);

//# sourceMappingURL=modal-autocomplete-items.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DryCleaningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DryCleaningPage = (function () {
    function DryCleaningPage(navCtrl, alert, authService, toastCtrl, navParams, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.getStorage();
    }
    DryCleaningPage.prototype.getStorage = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("dryCleaningData").then(function (data) {
                _this.dryCleaning = data;
                console.log(_this.dryCleaning);
            });
        });
    };
    DryCleaningPage.prototype.addItem = function (id) {
        var _this = this;
        this.storage.ready().then(function () {
            var _loop_1 = function (i) {
                if (id == _this.dryCleaning[i].id) {
                    _this.storage.get("dryCleaningData").then(function (data) {
                        for (var j = 0; j < data.length; j++) {
                            if (id == data[j].id) {
                                var qty = data[j].qty;
                                data[j].qty = qty + 1;
                            }
                            _this.storage.set("dryCleaningData", data).then(function () {
                                _this.dryCleaning = data;
                            });
                        }
                        console.log(data);
                        //let qty = parseInt(data[i].qty)+1;
                        //data[i].qty = qty.toString();
                        _this.cart(data[i]);
                        // this.storage.set("cleaningData",data).then(()=>{
                        //   console.log(data);
                        //   })
                    });
                }
            };
            for (var i = 0; i < _this.dryCleaning.length; i++) {
                _loop_1(i);
            }
        });
        this.getStorage();
        //this.openModal();
        //window.location.reload();
    };
    DryCleaningPage.prototype.deleteItem = function (id) {
        var _this = this;
        this.storage.ready().then(function () {
            var _loop_2 = function (i) {
                if (id == _this.dryCleaning[i].id) {
                    _this.storage.get("dryCleaningData").then(function (data) {
                        for (var j = 0; j < data.length; j++) {
                            if (id == data[j].id) {
                                var qty = data[j].qty;
                                data[j].qty = qty - 1;
                            }
                            _this.storage.set("dryCleaningData", data).then(function () {
                                _this.dryCleaning = data;
                            });
                        }
                        _this.removeFromCart(data[i]);
                    });
                }
            };
            for (var i = 0; i < _this.dryCleaning.length; i++) {
                _loop_2(i);
            }
        });
        this.getStorage();
    };
    DryCleaningPage.prototype.cart = function (item) {
        var _this = this;
        this.storage.get("cart").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                data.push({
                    "name": item.name,
                    "qty": 1,
                    "price": parseFloat(item.amount)
                });
            }
            else {
                var added = 0;
                for (var i = 0; i < data.length; i++) {
                    if (item.name == data[i].name) {
                        console.log("product added to cart");
                        var qty = data[i].qty;
                        data[i].qty = qty + 1;
                        data[i].price = parseFloat(data[i].price) + parseFloat(item.amount);
                        added = 1;
                    }
                }
                if (added == 0) {
                    data.push({
                        "name": item.name,
                        "qty": 1,
                        "price": parseFloat(item.amount)
                    });
                }
            }
            _this.storage.set("cart", data).then(function () {
                console.log(data);
                _this.toastCtrl.create({
                    message: "Cart Updated",
                    duration: 3000
                }).present();
            });
        });
    };
    DryCleaningPage.prototype.removeFromCart = function (item) {
        var _this = this;
        this.storage.get("cart").then(function (data) {
            if (data !== null || data.length !== 0) {
                for (var i = 0; i < data.length; i++) {
                    if (item.name == data[i].name) {
                        if (data[i].qty > 0) {
                            var qty = data[i].qty;
                            data[i].qty = qty - 1;
                            data[i].price = parseFloat(data[i].price) - parseFloat(item.amount);
                        }
                        if (data[i].qty == 0) {
                            data.splice(i, 1);
                        }
                    }
                }
            }
            _this.storage.set("cart", data).then(function () {
                _this.toastCtrl.create({
                    message: "Cart Updated",
                    duration: 3000
                }).present();
            });
        });
    };
    DryCleaningPage.prototype.isValid = function (qty) {
        if (qty > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return DryCleaningPage;
}());
DryCleaningPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-dry-cleaning',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\dry-cleaning\dry-cleaning.html"*/'<ion-header>\n  <ion-navbar class="danger">\n    <ion-title>Dry Cleaning</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="dry_cleaning">\n<p class="dry_text">Price varies depending on size</p>\n\n  <ion-card *ngFor="let item of dryCleaning; let msgIndex = index;">\n    <ion-item>\n      <ion-icon name="remove-circle" *ngIf="item.qty > 0"  item-right (click)="deleteItem(item.id)"></ion-icon>\n      <ion-icon class="item_qty" item-right>{{item.qty}}</ion-icon>\n      <ion-icon name="add-circle" item-right (click)="addItem(item.id)"></ion-icon>\n      <ion-card-content>\n          <p class="item_name">{{item.name}}</p>\n          <span>{{item.price}}</span>\n      </ion-card-content>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\dry-cleaning\dry-cleaning.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */]])
], DryCleaningPage);

//# sourceMappingURL=dry-cleaning.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WashingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WashingPage = (function () {
    function WashingPage(alert, authService, navCtrl, navParams, toastCtrl, storage) {
        this.alert = alert;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.getStorage();
    }
    WashingPage.prototype.getStorage = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("washingData").then(function (data) {
                _this.washing = data;
                console.log(_this.washing);
            });
            _this.storage.get("beddingData").then(function (data) {
                _this.bedding = data;
                console.log(_this.bedding);
            });
            _this.storage.get("washPressData").then(function (data) {
                _this.washPress = data;
                console.log(_this.washPress);
            });
        });
    };
    WashingPage.prototype.check = function (wash) {
        var _this = this;
        this.storage.ready().then(function () {
            for (var i = 0; i < _this.washing.length; i++) {
                if (wash.id == _this.washing[i].id) {
                    _this.storage.get("washingData").then(function (data) {
                        for (var j = 0; j < data.length; j++) {
                            if (wash.id == data[j].id) {
                                data[j].qty = wash.qty;
                            }
                            _this.storage.set("washingData", data).then(function () {
                                _this.washing = data;
                            });
                        }
                    });
                }
            }
        });
        console.log(wash.name, wash.qty, wash.amount);
        var item = { "name": wash.name, "amount": parseFloat(wash.amount) };
        if (wash.qty == true) {
            this.cart(item);
        }
        else {
            this.removeFromCart(item);
        }
        this.storage.get("updateItem").then(function (data) {
            data = [];
            if (wash.name == "Express Delivery") {
                data.push({
                    "name": "Express Delivery",
                    "option": "yes"
                });
            }
            _this.storage.set("updateItem", data).then(function () {
                console.log(data);
            });
        });
    };
    WashingPage.prototype.addItem = function (id) {
        var _this = this;
        this.storage.ready().then(function () {
            var _loop_1 = function (i) {
                if (id == _this.bedding[i].id) {
                    _this.storage.get("beddingData").then(function (data) {
                        for (var j = 0; j < data.length; j++) {
                            if (id == data[j].id) {
                                var qty = data[j].qty;
                                data[j].qty = qty + 1;
                            }
                            _this.storage.set("beddingData", data).then(function () {
                                _this.bedding = data;
                            });
                        }
                        _this.cart(data[i]);
                    });
                }
            };
            for (var i = 0; i < _this.bedding.length; i++) {
                _loop_1(i);
            }
        });
        this.getStorage();
    };
    WashingPage.prototype.deleteItem = function (id) {
        var _this = this;
        this.storage.ready().then(function () {
            var _loop_2 = function (i) {
                if (id == _this.bedding[i].id) {
                    _this.storage.get("beddingData").then(function (data) {
                        for (var j = 0; j < data.length; j++) {
                            if (id == data[j].id) {
                                var qty = data[j].qty;
                                data[j].qty = qty - 1;
                            }
                            _this.storage.set("beddingData", data).then(function () {
                                _this.bedding = data;
                            });
                        }
                        _this.removeFromCart(data[i]);
                    });
                }
            };
            for (var i = 0; i < _this.bedding.length; i++) {
                _loop_2(i);
            }
        });
        this.getStorage();
    };
    WashingPage.prototype.addItemPress = function (id) {
        var _this = this;
        this.storage.ready().then(function () {
            var _loop_3 = function (i) {
                if (id == _this.washPress[i].id) {
                    _this.storage.get("washPressData").then(function (data) {
                        for (var j = 0; j < data.length; j++) {
                            if (id == data[j].id) {
                                var qty = data[j].qty;
                                data[j].qty = qty + 1;
                            }
                            _this.storage.set("washPressData", data).then(function () {
                                _this.washPress = data;
                            });
                        }
                        _this.cart(data[i]);
                    });
                }
            };
            for (var i = 0; i < _this.washPress.length; i++) {
                _loop_3(i);
            }
        });
        this.getStorage();
    };
    WashingPage.prototype.deleteItemPress = function (id) {
        var _this = this;
        this.storage.ready().then(function () {
            var _loop_4 = function (i) {
                if (id == _this.washPress[i].id) {
                    _this.storage.get("washPressData").then(function (data) {
                        for (var j = 0; j < data.length; j++) {
                            if (id == data[j].id) {
                                var qty = data[j].qty;
                                data[j].qty = qty - 1;
                            }
                            _this.storage.set("washPressData", data).then(function () {
                                _this.washPress = data;
                            });
                        }
                        _this.removeFromCart(data[i]);
                    });
                }
            };
            for (var i = 0; i < _this.washPress.length; i++) {
                _loop_4(i);
            }
        });
        this.getStorage();
    };
    WashingPage.prototype.cart = function (item) {
        var _this = this;
        this.storage.get("cart").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                data.push({
                    "name": item.name,
                    "qty": 1,
                    "price": parseFloat(item.amount)
                });
            }
            else {
                var added = 0;
                for (var i = 0; i < data.length; i++) {
                    if (item.name == data[i].name) {
                        console.log("product added to cart");
                        var qty = data[i].qty;
                        data[i].qty = qty + 1;
                        data[i].price = parseFloat(data[i].price) + parseFloat(item.amount);
                        added = 1;
                    }
                }
                if (added == 0) {
                    data.push({
                        "name": item.name,
                        "qty": 1,
                        "price": parseFloat(item.amount)
                    });
                }
            }
            _this.storage.set("cart", data).then(function () {
                console.log(data);
                _this.toastCtrl.create({
                    message: "Cart Updated",
                    duration: 3000
                }).present();
            });
        });
    };
    WashingPage.prototype.removeFromCart = function (item) {
        var _this = this;
        this.storage.get("cart").then(function (data) {
            _this.cartItems = data;
            if (data !== null || data.length !== 0) {
                for (var i = 0; i < data.length; i++) {
                    if (item.name == data[i].name) {
                        var qty = data[i].qty;
                        data[i].qty = qty - 1;
                        data[i].price = parseFloat(data[i].price) - parseFloat(item.amount);
                        if (data[i].qty == 0) {
                            data.splice(i, 1);
                        }
                    }
                }
            }
            _this.storage.set("cart", data).then(function () {
                _this.toastCtrl.create({
                    message: "Cart Updated",
                    duration: 3000
                }).present();
            });
        });
    };
    return WashingPage;
}());
WashingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-washing',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\washing\washing.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Washing Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="washing">\n <h3>Minimium Order 15lbs <span class="price_tag">@ $1.25/lb</span></h3>\n\n  <ion-item *ngFor="let item of washing; let msgIndex = index;">\n    <ion-label class="item_name">{{item.name}}</ion-label>\n    <ion-icon item-right>{{item.price}}</ion-icon>\n    <ion-toggle [(ngModel)]="item.qty" (ionChange)="check(item)"></ion-toggle>\n  </ion-item>\n\n  <p>* Seperate - White colored clothes will be washed seperately</p>\n\n  <h3>Bedding</h3>\n  <p>Price varies depending on size</p>\n  <ion-card class="bedding_list" *ngFor="let item of bedding; let msgIndex = index;">\n        <ion-item>\n          <ion-icon *ngIf="item.qty > 0"  item-right (click)="deleteItem(item.id)"> - </ion-icon>\n          <ion-icon class="item_qty" item-right>{{item.qty}}</ion-icon>\n          <ion-icon item-right (click)="addItem(item.id)"> + </ion-icon>\n          <ion-card-content>\n              <p class="item_name">{{item.name}}</p>\n              <span>{{item.price}}</span>\n          </ion-card-content>\n        </ion-item>\n      </ion-card>\n\n    <h3>Wash and press</h3>\n    <ion-card *ngFor="let item of washPress; let msgIndex = index;">\n            <ion-item>\n              <ion-icon *ngIf="item.qty > 0"  item-right (click)="deleteItemPress(item.id)"> - </ion-icon>\n              <ion-icon class="item_qty" item-right>{{item.qty}}</ion-icon>\n              <ion-icon item-right (click)="addItemPress(item.id)"> + </ion-icon>\n              <ion-card-content>\n                  <p class="item_name">{{item.name}}</p>\n                  <span>{{item.price}}</span>\n              </ion-card-content>\n            </ion-item>\n          </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\washing\washing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], WashingPage);

//# sourceMappingURL=washing.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payment_details_payment_details__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__address_address__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountPage = (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var data = JSON.parse(localStorage.getItem('data'));
        this.userDetails = data.userData;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.address = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__address_address__["a" /* AddressPage */]);
    };
    AccountPage.prototype.payment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__payment_details_payment_details__["a" /* PaymentDetailsPage */]);
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-account',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\account\account.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Account Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="info">\n    <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <h1>{{ userDetails.name}}</h1>\n            <h3>{{ userDetails.username}}</h3>\n            <h6>{{ userDetails.email}}</h6>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-card class="address" (click)="address()">\n        <ion-grid>\n          <ion-row>\n            <ion-col>Address</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n      <ion-card class="address" (click)="payment()">\n        <ion-grid>\n          <ion-row>\n            <ion-col>Payment</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\account\account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentDetailsPage = (function () {
    function PaymentDetailsPage(http, navCtrl, navParams, authService) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.displayCard = { "token": "" };
        this.userPostData = { "user_id": "", "token": "" };
        this.cardsList = [];
        if (localStorage.getItem('data')) {
            this.userLoginData = JSON.parse(localStorage.getItem('data'));
            console.log(this.userLoginData);
            this.userPostData.user_id = this.userLoginData.userData.user_id;
            this.userPostData.token = this.userLoginData.userData.token;
        }
        this.authService.postData(this.userPostData, "getPayment").then(function (result) {
            _this.cardInfo = result;
            console.log(_this.cardInfo.paymentData[0].customer_id);
            for (var i = 0; i < _this.cardInfo.paymentData.length; i++) {
                _this.displayCards(_this.cardInfo.paymentData[i].customer_id);
            }
        });
    }
    PaymentDetailsPage.prototype.displayCards = function (customerId) {
        var _this = this;
        this.http.get('http://localhost/stripe/getCardDetails.php?customer_id=' + customerId).subscribe(function (res) {
            _this.cardData = res.json();
            console.log(_this.cardData);
            _this.cardsList.push(_this.cardData);
            console.log(_this.cardsList);
        });
    };
    return PaymentDetailsPage;
}());
PaymentDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment-details',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\payment-details\payment-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your cards</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor="let card of cardsList; let i = index">\n    <ion-card *ngFor="let data of card">\n    <ion-item>\n      <ion-icon name="trash" item-right (click)="addressDelete(item.id, msgIndex)"></ion-icon>\n      <ion-card-content>\n          <!-- <p [innerHTML]="data.number"></p> -->\n          <span>{{data.brand}}</span>\n          <span>****-****-****-{{data.number}}</span>\n          <span>{{data.exp_month}}/{{data.exp_year}}</span>\n      </ion-card-content>\n    </ion-item>\n  </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\payment-details\payment-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], PaymentDetailsPage);

//# sourceMappingURL=payment-details.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddressPage = (function () {
    function AddressPage(navCtrl, alert, navParams, authService) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.navParams = navParams;
        this.authService = authService;
        this.userPostData = { "user_id": "", "token": "", "id": "" };
        var data = JSON.parse(localStorage.getItem('data'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getAddress();
    }
    AddressPage.prototype.getAddress = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "getAddress").then(function (result) {
            _this.responseData = result;
            if (_this.responseData.addressData) {
                _this.dataset = _this.responseData.addressData;
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    AddressPage.prototype.addressDelete = function (id, msgIndex) {
        var _this = this;
        if (id > 0)
            this.userPostData.id = id;
        console.log(this.userPostData);
        this.authService.postData(this.userPostData, "deleteAddress").then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.success) {
                _this.dataset.splice(msgIndex, 1);
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    return AddressPage;
}());
AddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-address',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\address\address.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Address</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let item of dataset; let msgIndex = index">\n    <ion-item>\n      <ion-icon name="trash" item-right (click)="addressDelete(item.id, msgIndex)"></ion-icon>\n      <ion-card-content>\n          <p [innerHTML]="item.name"></p>\n          <span>{{item.full_address}}</span>\n      </ion-card-content>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\address\address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], AddressPage);

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_employee__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_driver__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(storage, toastCtrl, navCtrl, authService, formbuilder, alert) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formbuilder = formbuilder;
        this.alert = alert;
        this.userPostData = { "user_id": "", "token": "" };
        if (localStorage.getItem('data')) {
            this.userLoginData = JSON.parse(localStorage.getItem('data'));
            if (this.userLoginData.userData.status === "user") {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */]);
            }
            else if (this.userLoginData.userData.status === "driver") {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__driver_driver__["a" /* DriverPage */]);
            }
            else if (this.userLoginData.userData.status === "employee") {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__employee_employee__["a" /* EmployeePage */]);
            }
        }
        this.login_form = this.formbuilder.group({
            "username": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
            "password": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]
        });
        this.data = {};
        this.data.username = "";
        this.data.password = "";
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        // let data = {"username":"", "password":""};
        console.log(this.data);
        this.authService.postData(this.data, "login").then(function (result) {
            _this.resonseData = result;
            console.log(_this.resonseData);
            if (_this.resonseData.userData) {
                _this.data.email = _this.resonseData.email;
                localStorage.setItem('data', JSON.stringify(_this.resonseData));
                if (_this.resonseData.userData.status === "user") {
                    _this.userPostData.user_id = _this.resonseData.userData.user_id;
                    _this.userPostData.token = _this.resonseData.userData.token;
                    _this.getDryCleaningData();
                    _this.getWashingData();
                    _this.getBeddingData();
                    _this.getWashPressData();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */]);
                }
                else if (_this.resonseData.userData.status === "driver") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__driver_driver__["a" /* DriverPage */]);
                }
                else if (_this.resonseData.userData.status === "employee") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__employee_employee__["a" /* EmployeePage */]);
                }
            }
            else {
                _this.presentToast("Invalid Username and/or Password");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.getDryCleaningData = function () {
        var _this = this;
        console.log(this.userPostData);
        this.authService.postData(this.userPostData, "getDryCleaningData").then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.dryCleaningData) {
                _this.storage.get("dryCleaningData").then(function (data) {
                    data = [];
                    for (var i = 0; i < _this.responseData.dryCleaningData.length; i++) {
                        data.push({
                            "id": _this.responseData.dryCleaningData[i].id,
                            "name": _this.responseData.dryCleaningData[i].name,
                            "price": _this.responseData.dryCleaningData[i].price_text,
                            "amount": _this.responseData.dryCleaningData[i].amount,
                            "qty": 0
                        });
                        _this.storage.set("dryCleaningData", data);
                    }
                    console.log(data);
                });
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.getWashingData = function () {
        var _this = this;
        console.log(this.userPostData);
        this.authService.postData(this.userPostData, "getWashingData").then(function (result) {
            _this.washingData = result;
            console.log(_this.washingData);
            if (_this.washingData.washingData) {
                _this.storage.get("washingData").then(function (data) {
                    data = [];
                    for (var i = 0; i < _this.washingData.washingData.length; i++) {
                        data.push({
                            "id": _this.washingData.washingData[i].id,
                            "name": _this.washingData.washingData[i].name,
                            "price": _this.washingData.washingData[i].price_text,
                            "amount": _this.washingData.washingData[i].amount,
                            "qty": false
                        });
                        _this.storage.set("washingData", data);
                    }
                });
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.getBeddingData = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "getBeddingData").then(function (result) {
            _this.beddingData = result;
            console.log(_this.beddingData);
            if (_this.beddingData.beddingData) {
                _this.storage.get("beddingData").then(function (data) {
                    data = [];
                    for (var i = 0; i < _this.beddingData.beddingData.length; i++) {
                        data.push({
                            "id": _this.beddingData.beddingData[i].id,
                            "name": _this.beddingData.beddingData[i].name,
                            "price": _this.beddingData.beddingData[i].price_text,
                            "amount": _this.beddingData.beddingData[i].amount,
                            "qty": 0
                        });
                        _this.storage.set("beddingData", data);
                    }
                });
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.getWashPressData = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "getWashPressData").then(function (result) {
            _this.washPressData = result;
            console.log(_this.washPressData);
            if (_this.washPressData.washPressData) {
                _this.storage.get("washPressData").then(function (data) {
                    data = [];
                    for (var i = 0; i < _this.washPressData.washPressData.length; i++) {
                        data.push({
                            "id": _this.washPressData.washPressData[i].id,
                            "name": _this.washPressData.washPressData[i].name,
                            "price": _this.washPressData.washPressData[i].price_text,
                            "amount": _this.washPressData.washPressData[i].amount,
                            "qty": 0
                        });
                        _this.storage.set("washPressData", data);
                    }
                });
            }
            else {
                console.log("No Access,,!");
            }
        }, function (error) {
            var alert = _this.alert.create({
                title: 'Warning',
                subTitle: 'There is an error! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.onGoToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\login\login.html"*/'<ion-content class="background">\n    <img src="assets/images/icon_inverted_white.png" style="height: 170px; width: 150px;" alt="Washing">\n    <h1 class="bb_name">Broadway Bubbles</h1>\n      <ion-card>\n        <ion-card-header>\n          LOGIN\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list no-lines>\n            <form [formGroup]="login_form">\n            <ion-item>\n              <ion-label floating>E-Mail or UserID</ion-label>\n              <ion-input type="text" formControlName="username" name="username" [(ngModel)]="data.username" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Password</ion-label>\n              <ion-input type="password" formControlName="password" name="password" [(ngModel)]="data.password" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <p><a href="http://broadway-bubbles.com/forgot_password.php">Forgot Password?</a></p>\n            </ion-item>\n            <button ion-button color="primary" block outline (click)="login()" [disabled]="!login_form.valid">LOGIN</button>\n    \n            </form>\n          </ion-list>\n          <b>or</b>\n    \n            <button ion-button color="primary" block (click)="onGoToSignup()">Sign Up</button>\n          <!--<button ion-button color="primary" ion-left block>\n          <ion-icon name="logo-facebook"></ion-icon>\n          <div>Login with facebook</div>\n          </button>\n          <button ion-button color="danger" ion-left block>\n          <ion-icon name="logo-google"></ion-icon>\n          <div>Login with google</div>\n          </button>-->\n        </ion-card-content>\n      </ion-card>\n    \n    </ion-content>'/*ion-inline-end:"C:\Ionic\bb\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroPage = (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.goToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return IntroPage;
}());
IntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-intro',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\intro\intro.html"*/'<ion-slides pager>\n  \n    <ion-slide style="background-color: #41c6f1">\n      <i class="fa fa-shopping-basket" style="font-size:100px; color:#fff;" aria-hidden="true"></i>\n      <h1 style="color:#fff">Gather Clothes</h1>\n      <p style="font-size:15px;">Prepare all clothes to be <b>washed.</b></p>\n    </ion-slide>\n  \n    <ion-slide style="background-color: #F86624">\n      <i class="fa fa-car" style="font-size:100px; color:#fff;" aria-hidden="true"></i>\n      <h1 style="color:#fff">Pick Up</h1>\n      <p style="font-size:15px;">Our driver will <b>pick up</b> your clothes.</p>\n    </ion-slide>\n  \n    <ion-slide style="background-color: #07BEB8">\n      <img src="assets/images/washing_machine_white.png" style="height: 100px; width: 90px;" alt="Washing">\n      <h1 style="color:#fff">Wash and fold</h1>\n      <p style="font-size:15px;">Our powerful machines will <b>wash</b> your clothes fast.</p>\n    </ion-slide>\n\n    <ion-slide style="background-color: #507DBC">\n        <i class="fa fa-car" style="font-size:100px; color:#fff;" aria-hidden="true"></i>\n        <h1 style="color:#fff">Delivery</h1>\n        <p style="font-size:15px;">Clean and folded clothes will be <br/><b>delivered </b>to you.</p>\n        <div style="position:absolute; bottom:120px; text-align:center; z-index:1000; width:100%;">\n          <button ion-button color="myWhite" round outline (click)="goToLogin()">Explore</button>\n          </div>  \n    </ion-slide>\n  \n  </ion-slides>'/*ion-inline-end:"C:\Ionic\bb\src\pages\intro\intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the ShippingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShippingPage = (function () {
    function ShippingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShippingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShippingPage');
    };
    return ShippingPage;
}());
ShippingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-shipping',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\shipping\shipping.html"*/'<!--\n  Generated template for the ShippingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>shipping</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\shipping\shipping.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ShippingPage);

//# sourceMappingURL=shipping.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the CartItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CartItemPage = (function () {
    function CartItemPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    CartItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartItemPage');
    };
    CartItemPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    return CartItemPage;
}());
CartItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cart-item',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\cart-item\cart-item.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Product Added to Cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button (click)="closeModal()">Close</button>\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\cart-item\cart-item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], CartItemPage);

//# sourceMappingURL=cart-item.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(252);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_orders_detail_orders_detail__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_orders_orders__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_show_map_show_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_shipping_shipping__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_normal_normal__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_express_express__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_payment_details_payment_details__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_cc_library__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_cc_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular_cc_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_bs3_modal__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_intro_intro__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_menu_menu__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cart_cart__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_help_help__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pricing_pricing__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_account_account__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_modal_autocomplete_items_modal_autocomplete_items__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_page_gmap_autocomplete_page_gmap_autocomplete__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_dry_cleaning_dry_cleaning__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_washing_washing__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_payment_payment__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_employee_employee__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_driver_driver__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_address_address__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_get_address_get_address__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_get_payment_get_payment__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_cart_item_cart_item__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_emp_order_details_emp_order_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_normal_d_normal_d__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_express_d_express_d__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_push__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_auth_service_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angular2_text_mask__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_angular2_text_mask__);
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
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_pricing_pricing__["a" /* PricingPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_modal_autocomplete_items_modal_autocomplete_items__["a" /* ModalAutocompleteItemsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_page_gmap_autocomplete_page_gmap_autocomplete__["a" /* PageGmapAutocompletePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_washing_washing__["a" /* WashingPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_dry_cleaning_dry_cleaning__["a" /* DryCleaningPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_employee_employee__["a" /* EmployeePage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_driver_driver__["a" /* DriverPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_address_address__["a" /* AddressPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_payment_details_payment_details__["a" /* PaymentDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_get_address_get_address__["a" /* GetAddressPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_get_payment_get_payment__["a" /* GetPaymentPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_cart_item_cart_item__["a" /* CartItemPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_shipping_shipping__["a" /* ShippingPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_normal_normal__["a" /* NormalPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_express_express__["a" /* ExpressPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_show_map_show_map__["a" /* ShowMapPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_orders_orders__["a" /* OrdersPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_orders_detail_orders_detail__["a" /* OrdersDetailPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_emp_order_details_emp_order_details__["a" /* EmpOrderDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_normal_d_normal_d__["a" /* NormalDPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_express_d_express_d__["a" /* ExpressDPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular_cc_library__["CreditCardDirectivesModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_43_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_14_ng2_bs3_modal__["BsModalModule"],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/emp-order-details/emp-order-details.module#EmpOrderDetailsPageModule', name: 'EmpOrderDetailsPage', segment: 'emp-order-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/employee/employee.module#EmployeePageModule', name: 'EmployeePage', segment: 'employee', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shipping/shipping.module#ShippingPageModule', name: 'ShippingPage', segment: 'shipping', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orders-detail/orders-detail.module#OrdersDetailPageModule', name: 'OrdersDetailPage', segment: 'orders-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pricing/pricing.module#PricingPageModule', name: 'PricingPage', segment: 'pricing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cart-item/cart-item.module#CartItemPageModule', name: 'CartItemPage', segment: 'cart-item', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_pricing_pricing__["a" /* PricingPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_modal_autocomplete_items_modal_autocomplete_items__["a" /* ModalAutocompleteItemsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_page_gmap_autocomplete_page_gmap_autocomplete__["a" /* PageGmapAutocompletePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_washing_washing__["a" /* WashingPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_dry_cleaning_dry_cleaning__["a" /* DryCleaningPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_employee_employee__["a" /* EmployeePage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_driver_driver__["a" /* DriverPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_address_address__["a" /* AddressPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_payment_details_payment_details__["a" /* PaymentDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_get_address_get_address__["a" /* GetAddressPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_get_payment_get_payment__["a" /* GetPaymentPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_cart_item_cart_item__["a" /* CartItemPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_shipping_shipping__["a" /* ShippingPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_normal_normal__["a" /* NormalPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_express_express__["a" /* ExpressPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_show_map_show_map__["a" /* ShowMapPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_orders_orders__["a" /* OrdersPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_orders_detail_orders_detail__["a" /* OrdersDetailPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_emp_order_details_emp_order_details__["a" /* EmpOrderDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_normal_d_normal_d__["a" /* NormalDPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_express_d_express_d__["a" /* ExpressDPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_40__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_41__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_42__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_orders_orders__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(push, http, platform, alertCtrl, statusBar, splashScreen, loadingCtrl, storage) {
        var _this = this;
        this.push = push;
        this.http = http;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.splash = true;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */];
        // this.initializeApp();
        this.initPushNotification();
        // this.presentLoading();
        this.platform.ready().then(function () {
            _this.storage.get('introShown').then(function (result) {
                if (result) {
                    setTimeout(function () {
                        _this.splash = false;
                    }, 3000);
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */];
                }
                else {
                    setTimeout(function () {
                        _this.splash = false;
                    }, 3000);
                    _this.zipcode();
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */];
                    _this.storage.set('introShown', true);
                }
                //this.loader.dismiss();
            });
        });
    }
    MyApp.prototype.zipcode = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Your Zip Code',
            inputs: [
                {
                    name: 'zipcode',
                    placeholder: 'Enter ZipCode',
                }
            ],
            buttons: [
                {
                    text: 'Go',
                    handler: function (data) {
                        var card = {
                            number: data.zipcode
                        };
                        if (!isNaN(data.zipcode) && data.zipcode.length == 5) {
                            if (data.zipcode == 10023 || data.zipcode == 10024 || data.zipcode == 10025) {
                                var alert_1 = _this.alertCtrl.create({
                                    title: 'Splish splash..! We provide service in your area!',
                                    buttons: [
                                        {
                                            text: 'Continue',
                                            role: 'cancel',
                                        }
                                    ]
                                });
                                alert_1.present();
                            }
                            else {
                                var alert_2 = _this.alertCtrl.create({
                                    title: 'Service is not currently available in your area. Please sign up! We will notify you soon.',
                                    buttons: [
                                        {
                                            text: 'Continue',
                                            role: 'cancel',
                                        }
                                    ]
                                });
                                alert_2.present();
                            }
                        }
                        else {
                            var alert_3 = _this.alertCtrl.create({
                                title: 'Invalid Zipcode',
                                buttons: [
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            _this.zipcode();
                                        }
                                    }
                                ]
                            });
                            alert_3.present();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Loading..!"
        });
        this.loader.present();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.saveDeviceToken = function (t) {
        this.http.get('http://192.168.0.100/ionic/saveToken.php?token=' + t)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            alert(JSON.stringify(data));
        }, function (err) {
            console.log("Oops!");
        });
    };
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        // to check if we have permission
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                // let alert = this.alertCtrl.create({
                //   title: 'push Notification Enabled',
                //     buttons: [
                //       {
                //           text: 'Continue',
                //           role: 'cancel',
                //       }
                //     ]
                //   });
                //   alert.present();
            }
            else {
                var alert_4 = _this.alertCtrl.create({
                    title: 'Push notification not enabled',
                    buttons: [
                        {
                            text: 'Continue',
                            role: 'cancel',
                        }
                    ]
                });
                alert_4.present();
            }
        });
        // to initialize push notifications
        var options = {
            android: {
                senderID: "447594338630"
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            console.log('Received a notification', notification);
            //Notification Display Section
            var confirmAlert = _this.alertCtrl.create({
                title: 'New Notification',
                message: JSON.stringify(notification),
                buttons: [{
                        text: 'Ignore',
                        role: 'cancel'
                    }, {
                        text: 'View',
                        handler: function () {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_0__pages_orders_orders__["a" /* OrdersPage */]);
                        }
                    }]
            });
            confirmAlert.present();
            //
        });
        pushObject.on('registration').subscribe(function (registration) {
            // console.log('Device registered', registration);
            // alert(JSON.stringify(registration));
            _this.saveDeviceToken(registration.registrationId);
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Ionic\bb\src\app\app.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\' : \'none\' ">\n    <div class="flb">\n  \n      <div class="Aligner-item Aligner-item-top"></div>\n      <img src="assets/logo_white.png">\n      <div class="Aligner-item Aligner-item-bottom"></div>\n    </div>\n  </div>\n  \n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Ionic\bb\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowMapPage = (function () {
    function ShowMapPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.start = '334 saint puals ave, jersey city, NJ 07306, USA';
        this.end = '555 West End Ave, New York, NY 10024, USA';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
    }
    ShowMapPage.prototype.ionViewDidLoad = function () {
        this.presentLoading();
        this.initMap();
        this.loader.dismiss();
    };
    ShowMapPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Loading..!"
        });
        this.loader.present();
    };
    ShowMapPage.prototype.initMap = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 7,
            center: { lat: 40.7895, lng: -73.9778 }
        });
        this.directionsDisplay.setMap(this.map);
        this.calculateAndDisplayRoute();
    };
    ShowMapPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.directionsService.route({
            origin: this.start,
            destination: this.end,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    return ShowMapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ShowMapPage.prototype, "mapElement", void 0);
ShowMapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-show-map',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\show-map\show-map.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Map View\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\show-map\show-map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], ShowMapPage);

//# sourceMappingURL=show-map.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PaymentPage = (function () {
    function PaymentPage(storage, toastCtrl, authService, stripe, alert, loadingCtrl, http, _fb, navCtrl, navParams) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.stripe = stripe;
        this.alert = alert;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this._fb = _fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.money = 0;
        this.customer = {};
        this.paymentPostData = { "user_id": "", "email": "", "customer_id": "", "token": "" };
        this.userPostData = { "user_id": "", "token": "" };
        this.cardsList = [];
        this.formControlInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.mask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.ccNumber = '';
        this.maskExpire = [/[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/];
        this.expire = '';
        this.maskCVV = [/[0-9]/, /\d/, /\d/, /\d/];
        this.cvv = '';
        this.maskZip = [/[0-9]/, /\d/, /\d/, /\d/, /\d/];
        this.zipcode = '';
        var data = JSON.parse(localStorage.getItem('data'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.displayPayment();
    }
    PaymentPage.prototype.displayPayment = function () {
        var _this = this;
        this.presentLoading();
        this.authService.postData(this.userPostData, "getPayment").then(function (result) {
            _this.receivedData = result;
            if (_this.receivedData != null && _this.receivedData.length != 0) {
                _this.cardInfo = result;
                for (var i = 0; i < _this.cardInfo.paymentData.length; i++) {
                    _this.displayCards(_this.cardInfo.paymentData[i].customer_id);
                }
            }
            else {
                _this.message = "No Cards";
            }
        });
        setTimeout(function () {
            _this.loader.dismiss();
        }, 5000);
    };
    PaymentPage.prototype.displayCards = function (customerId) {
        var _this = this;
        this.http.get('http://www.broadway-bubbles.com/stripe/getCardDetails.php?customer_id=' + customerId).subscribe(function (res) {
            _this.cardData = res.json();
            console.log(_this.cardData);
            _this.cardsList.push(_this.cardData);
            console.log(_this.cardsList);
        });
    };
    PaymentPage.prototype.save = function () {
        var _this = this;
        console.log(this.ccNumber.slice(0, 4) + this.ccNumber.slice(5, 9) + this.ccNumber.slice(10, 14) + this.ccNumber.slice(15, 19));
        console.log(this.expire.slice(0, 2), this.expire.slice(3, 7), this.cvv.replace('_', ''), this.zipcode);
        //this.stripe.setPublishableKey('pk_live_DHwxcZn1QkjzG44dllKG4ViT');
        //.split('/r').join('/')
        var card = {
            number: this.ccNumber.slice(0, 4) + this.ccNumber.slice(5, 9) + this.ccNumber.slice(10, 14) + this.ccNumber.slice(15, 19),
            expMonth: parseInt(this.expire.slice(0, 2)),
            expYear: parseInt(this.expire.slice(3, 7)),
            cvc: this.cvv.replace('_', ''),
        };
        this.stripe.setPublishableKey('pk_test_XywMCCW4OVp2ADoHC7zubqSz');
        this.stripe.createCardToken(card).then(function (token) {
            var data = JSON.stringify({ "stripeToken": token.id, "email": _this.userDetails.email });
            _this.http.post('http://www.broadway-bubbles.com/stripe/signup.php/', data).subscribe(function (res) {
                var response = res.json();
                if (response.status) {
                    _this.customer = response.data.customer;
                    _this.paymentPostData.user_id = _this.userDetails.user_id;
                    _this.paymentPostData.email = _this.userDetails.email;
                    _this.paymentPostData.token = _this.userDetails.token;
                    _this.paymentPostData.customer_id = _this.customer;
                    _this.authService.postData(_this.paymentPostData, "payment").then(function (result) {
                    }, function (error) {
                        var alert = _this.alert.create({
                            title: 'Warning',
                            subTitle: 'There is an error! Please Try Again !',
                            buttons: ['OK']
                        });
                        alert.present();
                    });
                    var alert_1 = _this.alert.create({
                        title: 'Success',
                        subTitle: 'Card has been added Successfully',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    console.log({ cus: _this.customer });
                }
                else {
                    alert('Failed:' + response.message);
                }
            });
        });
        this.displayPayment();
    };
    PaymentPage.prototype.getPayment = function (data) {
        var _this = this;
        this.item = data;
        this.storage.get("pay").then(function (data) {
            data = [];
            data.push(_this.item);
            _this.storage.set("pay", data);
        });
        this.toastCtrl.create({
            message: "Card Added",
            duration: 3000
        }).present();
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    PaymentPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Loading..!"
        });
        this.loader.present();
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-payment',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\payment\payment.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Pay by card\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="payment">\n\n  <p *ngIf="message != null" class="payment_text">Select payment card</p>\n    <div *ngFor="let card of cardsList; let i = index">\n        <ion-card *ngFor="let data of card">\n          <ion-card-content (click)="getPayment(data)">\n              <!-- <p [innerHTML]="data.number"></p> -->\n              <span>****-****-****-{{data.number}}</span>\n              <span>{{data.brand}}</span>\n              <span>{{data.exp_month}}/{{data.exp_year}}</span>\n          </ion-card-content>\n      </ion-card>\n  </div>\n    \n    <p class="payment_text">Add new card</p>\n       <ion-list no-lines>\n         <ion-item>\n           <input id="1" placeholder="Card Number" name="ccnumber" [(ngModel)]="ccNumber" [textMask]="{mask: mask}" type="tel" class="form-control" />\n         </ion-item>\n         <ion-item>\n           <input id="2" placeholder="Expiration Date" name="expireDate" [(ngModel)]="expire" [textMask]="{mask: maskExpire}" type="tel" class="form-control" />\n         </ion-item>\n         <ion-item>\n           <input id="3" placeholder="CVV" name="cvv" [(ngModel)]="cvv" [textMask]="{mask: maskCVV}" type="tel" class="form-control" />\n         </ion-item>\n         <ion-item>\n            <input id="4" placeholder="Billing Zipcode" name="zipcode" [(ngModel)]="zipcode" [textMask]="{mask: maskZip}" type="tel" class="form-control" />\n          </ion-item>\n    \n       </ion-list>\n\n       <!-- <div *ngIf="customer.id">\n          <p> Pay </p>\n          <ion-input [(ngModel)]="amount" placeholder="Amount" style="margin: 7px 8px;padding:10px;border: 1px solid #eee"></ion-input>\n          <button ion-button (click)="pay()"> Pay </button>\n          <hr>\n        </div>\n        <div *ngIf="payment.id">\n          <h2> Payment info </h2>\n          <ion-grid>\n            <ion-row>\n              <ion-col>	Payment ID </ion-col>\n              <ion-col>	{{payment.id}} </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>	Payment amount </ion-col>\n              <ion-col>	{{payment.amount}} (in cents) </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col> Payment transaction id </ion-col>\n              <ion-col> {{payment.balance_transaction}} </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div> -->\n    \n   </ion-content>\n\n<ion-footer class="home_footer">\n		<button ion-button full (click)="save()" class="save_button">Save</button>\n</ion-footer>'/*ion-inline-end:"C:\Ionic\bb\src\pages\payment\payment.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__["a" /* Stripe */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersPage = (function () {
    function OrdersPage(navCtrl, navParams, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.orderList = [];
        this.orderData = { "user_id": "", "token": "" };
        var data = JSON.parse(localStorage.getItem('data'));
        this.orderData.user_id = data.userData.user_id;
        this.orderData.token = data.userData.token;
        this.authService.postData(this.orderData, "orderList").then(function (result) {
            console.log(result);
            if (result) {
                _this.pickupData = result;
            }
            for (var i = 0; i < _this.pickupData.orderData.length; i++) {
                _this.orderList.push(_this.pickupData.orderData[i]);
            }
            console.log(_this.orderList);
        });
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersPage');
    };
    return OrdersPage;
}());
OrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-orders',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\orders\orders.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Orders History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="orders" >\n  <ion-list>\n    <ion-item *ngFor="let order of orderList">\n      <p [innerHTML]="order.order_id"></p>\n      <p>Amount : ${{order.amount}}</p>\n      <ion-badge item-right>{{order.order_status}}</ion-badge>\n      <p>Pickup time: {{order.pickup_time}} - Express: {{order.express_delivery}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\orders\orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], OrdersPage);

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_payment_get_payment__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_address_get_address__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_gmap_autocomplete_page_gmap_autocomplete__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dry_cleaning_dry_cleaning__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__washing_washing__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = (function () {
    function HomePage(modalCtrl, toastCtrl, navCtrl, storage, authService, alert) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.authService = authService;
        this.alert = alert;
        this.payment_method = {};
        this.storage.get("payment_method").then(function (data) {
            data = [];
            data.push({
                "name": "Stripe"
            });
            _this.storage.set("payment_method", data);
        });
        this.isToggled = false;
        var date = new Date();
        date.setHours(date.getHours() - 4);
        var mins = date.getMinutes();
        var quarterHours = Math.round(mins / 15);
        if (quarterHours == 4) {
            date.setHours(date.getHours() + 1);
        }
        var rounded = (quarterHours * 15) % 60;
        console.log(date.setMinutes(rounded));
        this.today = date.toISOString();
        this.storage.set("time", this.today);
    }
    HomePage.prototype.dateChanged = function () {
    };
    HomePage.prototype.openModal = function () {
        var _this = this;
        this.storage.set("time", this.today);
        if (this.checkTime(this.today.slice(11, 16)) == false) {
            var alert_1 = this.alert.create({
                title: 'Pickup time',
                subTitle: 'Select pickup time between 7:00 AM to 10:00 PM',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alert.create({
                title: 'Pickup time',
                subTitle: 'Pickup time scheduled at ' + this.changeTime(this.today.slice(11, 16)),
                buttons: ['Add Pickup Time',
                    {
                        text: 'Proceed',
                        handler: function () {
                            _this.storage.get("pay").then(function (data) {
                                if (data == null) {
                                    var alert_3 = _this.alert.create({
                                        title: 'Add payment method',
                                        buttons: ['OK']
                                    });
                                    alert_3.present();
                                }
                                else {
                                    _this.storage.set("time", _this.today);
                                    var myModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__get_address_get_address__["a" /* GetAddressPage */]);
                                    myModal.onDidDismiss(function (data) {
                                        _this.item = data;
                                        _this.storage.get("addr").then(function (data) {
                                            data = [];
                                            data.push(_this.item);
                                            _this.storage.set("addr", data);
                                        });
                                    });
                                    myModal.present();
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
                                }
                            });
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    HomePage.prototype.changeTime = function (data) {
        var h;
        var m;
        if (data != null) {
            h = data.slice(0, 2);
            m = data.slice(2, 5);
        }
        var s = "";
        if (h < 12) {
            s = " AM";
        }
        else {
            h = h - 12;
            s = " PM";
        }
        return h + m + s;
    };
    HomePage.prototype.checkTime = function (data) {
        var h;
        if (data != null) {
            h = data.slice(0, 2);
        }
        if (h >= 7 && h <= 22) {
            return true;
        }
        else {
            return false;
        }
    };
    HomePage.prototype.getPayment = function () {
        var _this = this;
        var myModal1 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__get_payment_get_payment__["a" /* GetPaymentPage */]);
        myModal1.onDidDismiss(function (data) {
            _this.item = data;
            _this.storage.get("pay").then(function (data) {
                data = [];
                data.push(_this.item);
                _this.storage.set("pay", data);
            });
        });
        myModal1.present();
    };
    HomePage.prototype.onGoToLocation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page_gmap_autocomplete_page_gmap_autocomplete__["a" /* PageGmapAutocompletePage */]);
    };
    HomePage.prototype.washing = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__washing_washing__["a" /* WashingPage */]);
    };
    HomePage.prototype.dry_cleaning = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__dry_cleaning_dry_cleaning__["a" /* DryCleaningPage */]);
    };
    HomePage.prototype.payment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    };
    HomePage.prototype.cart = function () {
        this.storage.set("time", this.today);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    HomePage.prototype.paymentMethod = function (name) {
        var _this = this;
        console.log(name, this.isToggled);
        if (this.isToggled == true) {
            this.storage.get("payment_method").then(function (data) {
                data = [];
                data.push({
                    "name": name
                });
                _this.storage.set("payment_method", data);
                _this.storage.get("payment_method").then(function (data) {
                    console.log(data);
                });
            });
        }
        else if (this.isToggled == false) {
            this.storage.get("payment_method").then(function (data) {
                data = [];
                data.push({
                    "name": "Stripe"
                });
                _this.storage.set("payment_method", data);
                _this.storage.get("payment_method").then(function (data) {
                    console.log(data);
                });
            });
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\home\home.html"*/'<ion-header >\n  <ion-navbar color="danger">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'onGoToLocation()\'>\n        <ion-icon name="ios-locate-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content padding class="home_page">\n      <ion-grid class="home_icons">\n          <ion-row>\n            <ion-col col-6>\n              <img class="washing_img" (click)="washing()" src="assets/images/washing.png" alt="Washing Click Here">\n              <h1>Washing</h1>\n            </ion-col>\n            <ion-col col-6>\n              <img class="dry_img" (click)="dry_cleaning()" src="assets/images/dry_cleaning.png" alt="Dry Cleaning Click Here">\n              <h1>Dry Cleaning</h1>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n\n      <ion-item>\n          <ion-label class="time_text"><span>Choose Pickup Time </span><span>(7 AM - 10 PM)</span></ion-label>\n          <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" minuteValues="0,15,30,45" (ngModelChange)="dateChanged()" [(ngModel)]="today"></ion-datetime>\n      </ion-item>\n      <!-- <p>* Pickup From 7:00 AM - 10:00 PM</p> -->\n      <ion-item>\n        <ion-label class="time_text">Cash On Delivery </ion-label>\n        <ion-toggle [(ngModel)]="isToggled" (ionChange)="paymentMethod(\'Cash On Delivery\')"></ion-toggle>\n      </ion-item>\n      <button ion-button (click)="payment()" class="pay_card" [disabled]="isToggled">Pay by card</button>\n\n  </ion-content>\n\n  \n  \n<ion-footer class="home_footer">\n		<button ion-button full (click)="openModal()" class="order_button">Place an Order</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(170);
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



//http://70.32.28.57/plesk-site-preview/www.broadway-bubbles.com/index.php/
//http://broadway-bubbles.com/PHP-Slim/api/index.php/
var apiUrl = "http://www.broadway-bubbles.com/PHP-Slim/api/index.php/";
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        //console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers }).subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageGmapAutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_autocomplete_items_modal_autocomplete_items__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageGmapAutocompletePage = (function () {
    function PageGmapAutocompletePage(navCtrl, http, loading, alert, authService, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loading = loading;
        this.alert = alert;
        this.authService = authService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.address = {
            place: '',
            set: false,
        };
        this.markers = [];
        var data = JSON.parse(localStorage.getItem('data'));
        this.userDetails = data.userData;
    }
    PageGmapAutocompletePage.prototype.ngOnInit = function () {
        this.initMap();
        this.initPlacedetails();
    };
    PageGmapAutocompletePage.prototype.showModal = function () {
        var _this = this;
        // reset 
        this.reset();
        // show modal|
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_autocomplete_items_modal_autocomplete_items__["a" /* ModalAutocompleteItemsPage */]);
        modal.onDidDismiss(function (data) {
            console.log('page > modal dismissed > data > ', data);
            if (data) {
                _this.address.place = data.description;
                // get details
                _this.getPlaceDetail(data.place_id);
            }
        });
        modal.present();
    };
    PageGmapAutocompletePage.prototype.reset = function () {
        this.initPlacedetails();
        this.address.place = '';
        this.address.set = false;
    };
    PageGmapAutocompletePage.prototype.getPlaceDetail = function (place_id) {
        var self = this;
        var request = {
            placeId: place_id
        };
        this.placesService = new google.maps.places.PlacesService(this.map);
        this.placesService.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log('page > getPlaceDetail > place > ', place);
                // set full address
                self.placedetails.address = place.formatted_address;
                self.placedetails.lat = place.geometry.location.lat();
                self.placedetails.lng = place.geometry.location.lng();
                for (var i = 0; i < place.address_components.length; i++) {
                    var addressType = place.address_components[i].types[0];
                    var values = {
                        short_name: place.address_components[i]['short_name'],
                        long_name: place.address_components[i]['long_name']
                    };
                    if (self.placedetails.components[addressType]) {
                        self.placedetails.components[addressType].set = true;
                        self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
                        self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
                    }
                }
                // set place in map
                self.map.setCenter(place.geometry.location);
                self.createMapMarker(place);
                // populate
                self.address.set = true;
                console.log('page > getPlaceDetail > details > ', self.placedetails);
            }
            else {
                console.log('page > getPlaceDetail > status > ', status);
            }
        }
    };
    PageGmapAutocompletePage.prototype.initMap = function () {
        var point = { lat: 40.730610, lng: -73.935242 };
        var divMap = document.getElementById('map');
        this.map = new google.maps.Map(divMap, {
            center: point,
            zoom: 15,
            disableDefaultUI: true,
            draggable: true,
            zoomControl: true
        });
    };
    PageGmapAutocompletePage.prototype.createMapMarker = function (place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: this.map,
            position: placeLoc
        });
        this.markers.push(marker);
    };
    PageGmapAutocompletePage.prototype.initPlacedetails = function () {
        this.placedetails = {
            name: '',
            apt: '',
            token: '',
            user_id: '',
            address: "",
            lat: "",
            lng: "",
            components: {
                route: { set: false, short: '', long: '' },
                street_number: { set: false, short: '', long: '' },
                sublocality_level_1: { set: false, short: '', long: '' },
                locality: { set: false, short: '', long: '' },
                administrative_area_level_2: { set: false, short: '', long: '' },
                administrative_area_level_1: { set: false, short: '', long: '' },
                country: { set: false, short: '', long: '' },
                postal_code: { set: false, short: '', long: '' },
                postal_code_suffix: { set: false, short: '', long: '' },
            }
        };
        this.placedetails.user_id = this.userDetails.user_id;
        this.placedetails.token = this.userDetails.token;
    };
    PageGmapAutocompletePage.prototype.saveAddress = function () {
        var _this = this;
        console.log(this.placedetails);
        var zip = this.placedetails.components.postal_code.short;
        if (zip == 10023 || zip == 10024 || zip == 10025) {
            var alert_1 = this.alert.create({
                title: 'Add address name',
                inputs: [
                    {
                        name: 'addressName',
                        placeholder: 'Address Name'
                    },
                    {
                        name: 'apt',
                        placeholder: 'Apartment Number'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Add',
                        handler: function (data) {
                            _this.placedetails.name = data.addressName;
                            _this.placedetails.apt = data.apt;
                            _this.authService.postData(_this.placedetails, "address").then(function (result) {
                                //this.placedetailsData = result;
                                //localStorage.setItem('data',JSON.stringify(this.placedetailsData));
                                console.log(_this.placedetails);
                                var alert = _this.alert.create({
                                    title: 'Success',
                                    subTitle: 'Your Address Has been added.!',
                                    buttons: ['OK']
                                });
                                alert.present();
                            }, function (error) {
                                var alert = _this.alert.create({
                                    title: 'Warning',
                                    subTitle: 'There is an error! Please Try Again !',
                                    buttons: ['OK']
                                });
                                alert.present();
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alert.create({
                title: 'Sorry',
                subTitle: 'We do not have service in ' + zip + ' area',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    return PageGmapAutocompletePage;
}());
PageGmapAutocompletePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-page-gmap-autocomplete',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\page-gmap-autocomplete\page-gmap-autocomplete.html"*/'<ion-header>  \n	<ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>         \n		<ion-title>Places Autocomplete</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n    <div id="map"></div>\n    <ion-list>\n        <ion-item margin>\n            <ion-input type="text" placeholder="Pick an address"\n                (click)="showModal()" \n                [(ngModel)]="address.place">\n            </ion-input>\n        </ion-item>\n        <ion-item *ngIf="address.set==true">\n            <ion-icon name="pin" item-left></ion-icon>\n            <h3>Full text address</h3>\n            <p>{{ placedetails.address }}</p>\n            <!-- <h3>Street name</h3>\n            <p>{{ placedetails.components.route.long }}</p>\n            <h3>Street number</h3>\n            <p>{{ placedetails.components.street_number.long }}</p>\n            <h3>Neighbourhood</h3>\n            <p>{{ placedetails.components.sublocality_level_1.long }}</p>\n            <h3>Postal Code</h3>\n            <p>{{ placedetails.components.postal_code.long }}{{ placedetails.components.postal_code_suffix.long }}</p>    \n            <h3>City</h3>\n            <p>{{ placedetails.components.locality.long }}</p>      -->\n            <h3>Location geometry</h3>\n            <p>{{ placedetails.lat }}, {{ placedetails.lng }}</p>                                           \n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer class="home_footer">\n    <button ion-button full (click)="saveAddress()" class="address_button">Save Address</button>\n</ion-footer>'/*ion-inline-end:"C:\Ionic\bb\src\pages\page-gmap-autocomplete\page-gmap-autocomplete.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */]])
], PageGmapAutocompletePage);

//# sourceMappingURL=page-gmap-autocomplete.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payment_payment__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orders_detail_orders_detail__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartPage = (function () {
    function CartPage(alert, navCtrl, authService, navParams, storage) {
        var _this = this;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.storage = storage;
        this.cartItems = [];
        this.showEmptyCartMessage = false;
        this.order = { "user_id": "", "express_delivery": "", "payment_method": "", "items": [], "token": "", "total": "", "apt": "", "address": "", "lat": "", "lng": "", "customer_id": "", "pickup_time": "", "email": "" };
        this.total = 0.0;
        this.storage.ready().then(function () {
            _this.storage.get("time").then(function (data) {
                _this.time = data.slice(11, 16);
            });
            //Express Delivery
            _this.storage.get("updateItem").then(function (data) {
                if (data != null && data.length != 0) {
                    if (data[0].option === "yes") {
                        _this.order.express_delivery = "yes";
                    }
                    else {
                        _this.order.express_delivery = "no";
                    }
                }
            });
            _this.storage.get("payment_method").then(function (data) {
                if (data != null && data.length != 0) {
                    _this.order.payment_method = data[0].name;
                }
                else {
                    _this.order.payment_method = "Stripe";
                }
                console.log(data);
            });
            _this.storage.get("addr").then(function (data) {
                if (data != null && data != 0) {
                    _this.apt = data[0].apt;
                    _this.address = data[0].full_address;
                    _this.order.address = data[0].full_address;
                    _this.order.apt = data[0].apt;
                    _this.order.lat = data[0].lat;
                    _this.order.lng = data[0].lng;
                }
            });
            _this.storage.get("pay").then(function (data) {
                if (data != null && data != 0) {
                    _this.order.customer_id = data[0].customer_id;
                }
            });
            _this.storage.get("time").then(function (data) {
                console.log(data);
                if (data) {
                    var time = data;
                    _this.order.pickup_time = time.slice(11, 16);
                }
            });
            _this.storage.get("cart").then(function (data) {
                _this.cartItems = data;
                if (_this.cartItems != null) {
                    _this.cartItems.forEach(function (item, index) {
                        _this.total = _this.total + item.price;
                    });
                }
                else {
                    _this.showEmptyCartMessage = true;
                }
            });
        });
    }
    CartPage.prototype.removeFromCart = function (item, i) {
        var _this = this;
        var price = item.price;
        var qty = item.qty;
        this.storage.get("washingData").then(function (data) {
            for (var j = 0; j < data.length; j++) {
                if (item.name == data[j].name) {
                    data[j].qty = false;
                }
                _this.storage.set("washingData", data);
            }
        });
        this.storage.get("dryCleaningData").then(function (data) {
            for (var i_1 = 0; i_1 < data.length; i_1++) {
                if (item.name == data[i_1].name) {
                    data[i_1].qty = 0;
                }
            }
            _this.storage.set("dryCleaningData", data);
        });
        this.storage.get("beddingData").then(function (data) {
            for (var i_2 = 0; i_2 < data.length; i_2++) {
                if (item.name == data[i_2].name) {
                    data[i_2].qty = 0;
                }
            }
            _this.storage.set("beddingData", data);
        });
        this.storage.get("washPressData").then(function (data) {
            for (var i_3 = 0; i_3 < data.length; i_3++) {
                if (item.name == data[i_3].name) {
                    data[i_3].qty = 0;
                }
            }
            _this.storage.set("washPressData", data);
        });
        this.cartItems.splice(i, 1);
        this.storage.set("cart", this.cartItems).then(function () {
            _this.total = _this.total - price;
        });
        if (this.cartItems.length == 0) {
            this.showEmptyCartMessage = true;
        }
    };
    CartPage.prototype.onPayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__payment_payment__["a" /* PaymentPage */]);
    };
    CartPage.prototype.changeTime = function (data) {
        var h;
        var m;
        if (data != null) {
            h = data.slice(0, 2);
            m = data.slice(2, 5);
        }
        var s = "";
        if (h < 12) {
            s = " AM";
        }
        else {
            h = h - 12;
            s = " PM";
        }
        return h + m + s;
    };
    CartPage.prototype.changeAddress = function (addr) {
        var s;
        if (addr != null) {
            s = addr.replace(' New York, NY', '');
            s = s.replace(', USA', '');
        }
        return s;
    };
    CartPage.prototype.placeOrder = function () {
        var _this = this;
        this.order.items = this.cartItems;
        this.order.total = this.total.toString();
        if (localStorage.getItem('data')) {
            this.userLoginData = JSON.parse(localStorage.getItem('data'));
            this.order.user_id = this.userLoginData.userData.user_id;
            this.order.token = this.userLoginData.userData.token;
            this.order.email = this.userLoginData.userData.email;
        }
        console.log(this.order);
        this.authService.postData(this.order, "placeOrder").then(function (result) {
            if (result) {
                console.log(result);
                var alert_1 = _this.alert.create({
                    title: 'Order Placed',
                    subTitle: 'Driver will be there promptly',
                    buttons: ['OK']
                });
                alert_1.present();
                // localStorage.removeItem('cart');
                // localStorage.removeItem('time');
                // localStorage.removeItem('addr');
                // localStorage.removeItem('pay');
                _this.storage.get("cart").then(function (data) {
                    data = [];
                    _this.storage.set("cart", data);
                });
                _this.storage.get("dryCleaningData").then(function (data) {
                    for (var j = 0; j < data.length; j++) {
                        data[j].qty = 0;
                    }
                    _this.storage.set("dryCleaningData", data);
                });
                _this.storage.get("washingData").then(function (data) {
                    for (var j = 0; j < data.length; j++) {
                        data[j].qty = false;
                    }
                    _this.storage.set("washingData", data);
                });
                _this.storage.get("beddingData").then(function (data) {
                    for (var j = 0; j < data.length; j++) {
                        data[j].qty = 0;
                    }
                    _this.storage.set("beddingData", data);
                });
                _this.storage.get("washPressData").then(function (data) {
                    for (var j = 0; j < data.length; j++) {
                        data[j].qty = 0;
                    }
                    _this.storage.set("washPressData", data);
                });
                _this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_5__orders_detail_orders_detail__["a" /* OrdersDetailPage */]);
            }
        });
    };
    CartPage.prototype.removeItemFromCart = function (item, i) {
        var _this = this;
        this.storage.ready().then(function () {
            var price;
            _this.storage.get("cart").then(function (data) {
                for (var j = 0; j < data.length; j++) {
                    if (item.name == data[j].name) {
                        var qty = data[j].qty;
                        data[j].qty = qty - 1;
                        data[j].price = parseFloat(data[j].price) - parseFloat(item.price);
                    }
                }
                _this.storage.set("cart", data).then(function () {
                    _this.cartItems = data;
                    _this.total = _this.total - item.price;
                });
            });
        });
        //   this.storage.get("dryCleaningData").then((data)=>{
        //     for(let i = 0; i < data.length; i++) {
        //       if(item.name == data[i].name) {
        //         if(data[i].qty>0){
        //           let qty = data[i].qty;
        //           data[i].qty = qty-1;
        //           data[i].price = parseFloat(data[i].price) - parseFloat(item.amount);
        //           }
        //       }
        //     }
        //     this.storage.set("dryCleaningData", data);
        //   })
        //   this.storage.get("beddingData").then((data)=>{
        //     for(let i = 0; i < data.length; i++) {
        //       if(item.name == data[i].name) {
        //         if(data[i].qty>0){
        //           let qty = data[i].qty;
        //           data[i].qty = qty-1;
        //           data[i].price = parseFloat(data[i].price) - parseFloat(item.amount);
        //           }
        //       }
        //     }
        //     this.storage.set("beddingData", data);
        //   })
        //   this.storage.get("washPressData").then((data)=>{
        //     for(let i = 0; i < data.length; i++) {
        //       if(item.name == data[i].name) {
        //         if(data[i].qty>0){
        //           let qty = data[i].qty;
        //           data[i].qty = qty-1;
        //           data[i].price = parseFloat(data[i].price) - parseFloat(item.amount);
        //           }
        //       }
        //     }
        //     this.storage.set("washPressData", data);
        //   })
        // if(this.cartItems.length == 0) {
        //   this.showEmptyCartMessage = true;
        // }
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\Ionic\bb\src\pages\cart\cart.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your Cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="cart_page">\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col>Your Cart Description</ion-col>\n      </ion-row>\n      <ion-row [hidden]="!showEmptyCartMessage">\n          <ion-col>There are no products in your cart.!</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n  <ion-list>\n    <ion-item *ngFor="let item of cartItems; let i = index">\n      <h2>{{item.name}}</h2>\n      <p><span *ngIf="item.name != \'Softener\' && item.name != \'Bleach\' && item.name != \'Express Delivery\' && item.name != \'Seperate\' && item.name != \'Low Dry\'">{{item.qty}} . </span>price ${{item.price}}</p>\n      <!-- <button ion-button clear item-right color="success" *ngIf="item.name != \'Softener\' && item.name != \'Bleach\' && item.name != \'Express Delivery\' && item.name != \'Seperate\' && item.name != \'Low Dry\'" (click)="removeItemFromCart(item,i)">\n        <ion-icon name="remove-circle"></ion-icon>\n      </button>\n      <button ion-button clear item-right color="success" *ngIf="item.name != \'Softener\' && item.name != \'Bleach\' && item.name != \'Express Delivery\' && item.name != \'Seperate\' && item.name != \'Low Dry\'" (click)="addToCart(item,i)">\n        <ion-icon name="add-circle"></ion-icon>\n      </button> -->\n      <button ion-button clear item-right color="danger" (click)="removeFromCart(item,i)">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-grid>\n    <ion-card>\n      <ion-grid>\n        <ion-row>\n        <ion-col col-2>\n\n        </ion-col>\n        <ion-col col-4>\n          <b>TOTAL</b>\n        </ion-col>\n        <ion-col col-3>\n                \n        </ion-col>\n        <ion-col col-3 style="text-align: right">\n          $<b>{{ total }}</b>\n        </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-grid>\n  <p class="cart_page_text">Pickup Time: <b>{{changeTime(time)}}</b></p>\n  <p class="cart_page_text">Address: <b>Apt No: {{apt}} - {{changeAddress(address)}}</b></p>\n</ion-content>\n\n<ion-footer class="payment_footer">\n  <button ion-button full  class="order_button" (click)="placeOrder()">Confirm Order</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Ionic\bb\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ })

},[237]);
//# sourceMappingURL=main.js.map