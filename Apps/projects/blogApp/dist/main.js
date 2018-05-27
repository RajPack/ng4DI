(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addSection{\r\n    padding:15px;\r\n}\r\n.flexRow {\r\n    flex-direction: row;\r\n}\r\n.nav-item {\r\n    padding: 0px 10px;\r\n}\r\nli.active.nav-item a {\r\n    color: #46bfff;\r\n    text-decoration: underline;\r\n}\r\n.content {\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-info text-light\">\r\n    <div class=\"container\">\r\n        <div class=\"display-4\">Welcome to Angular Blog Application Demo</div>\r\n        <div class=\"lead\">You may review the blogs, add new blogs, edit existing blogs, add comments to existing blogs</div>\r\n    </div>\r\n</nav>\r\n<nav class=\"navbar navbar-light bg-light\">\r\n    <span class=\"navbar-brand\"> Blog App links</span>\r\n        <ul class=\"navbar-nav flexRow mr-auto\">\r\n            <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a routerLink=\"blogList\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact: true}\"  class=\"nav-link\">All Blogs</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a routerLink=\"newBlog\" routerLinkActive=\"active\" class=\"nav-link\">New Blog</a>\r\n            </li>\r\n        </ul>\r\n</nav>\r\n\r\n<div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog/blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(blogService, http) {
        this.blogService = blogService;
        this.http = http;
        this.createMode = false;
        this.creationSubject = this.blogService.creationComplete;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blogList_blogList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogList/blogList.component */ "./src/app/blogList/blogList.component.ts");
/* harmony import */ var _blogEdit_blogEdit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blogEdit/blogEdit.component */ "./src/app/blogEdit/blogEdit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _blogAdd_blogAdd_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blogAdd/blogAdd.component */ "./src/app/blogAdd/blogAdd.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog.routing.module */ "./src/app/blog.routing.module.ts");
/* harmony import */ var _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blog-page/blog-page.component */ "./src/app/blog-page/blog-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _blogList_blogList_component__WEBPACK_IMPORTED_MODULE_6__["BlogListComponent"],
                _blogEdit_blogEdit_component__WEBPACK_IMPORTED_MODULE_7__["BlogEditComponent"],
                _blogAdd_blogAdd_component__WEBPACK_IMPORTED_MODULE_9__["BlogAddComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_10__["CommentsComponent"],
                _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_12__["BlogPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _blog_routing_module__WEBPACK_IMPORTED_MODULE_11__["BlogRoutingModule"]
            ],
            providers: [
                _blog_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"],
                _blog_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogDetailResolver"],
                _blog_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogCommentsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-page/blog-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/blog-page/blog-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.rating i {\r\n    cursor: pointer;\r\n    font-size: 1.5em;\r\n    padding: 20px 0px 0px;\r\n}\r\ni.fa-thumbs-up{\r\n    color: lightskyblue;\r\n}\r\ni.fa-thumbs-down {\r\n    color: lightcoral;\r\n}\r\n.author{\r\n    font-size: 15px;\r\n    color: lightcoral;\r\n}\r\n.title {\r\n    font-size:  20px;\r\n    color: grey;\r\n    font-weight: bold;\r\n}\r\n.title:hover {\r\n    text-decoration: none !important;\r\n}\r\n.content{\r\n    white-space: pre-line;\r\n}\r\n.editbutton{\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n    color: #098dc1;\r\n}\r\n.editbutton:hover{\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/blog-page/blog-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-page/blog-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <span class=\"title\"><h3 class=\"display-4\">{{blog.title}}</h3></span>\n    <div> Author: {{blog.author}}</div>\n    <div>\n      <a [routerLink]=\"['../../editBlog', blog.id]\">Edit this Blog</a> \n    </div>\n</div>\n\n<div class=\"content\">\n    {{blog.content}}\n</div>\n<div class=\"rating\">\n    <span>\n        <i [ngbTooltip]=\"blog.voteToolTip\" (click)='vote(\"thumbsUp\", blog)' class=\" fa fa-thumbs-up\"></i> &nbsp; {{blog.thumbsUp}}\n    </span>&nbsp;&nbsp;\n    <span>\n        <i [ngbTooltip]=\"blog.voteToolTip\" class=\" fa fa-thumbs-down\" (click)='vote(\"thumbsDown\", blog)'></i> &nbsp; {{blog.thumbsDown}}\n    </span>\n</div>\n<div class=\"commentsSection\">\n    <app-comments [blogId]=\"blogId\"></app-comments>\n</div>"

/***/ }),

/***/ "./src/app/blog-page/blog-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-page/blog-page.component.ts ***!
  \**************************************************/
/*! exports provided: BlogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageComponent", function() { return BlogPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog/blog.service */ "./src/app/blog/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogPageComponent = /** @class */ (function () {
    function BlogPageComponent(route, blogService) {
        this.route = route;
        this.blogService = blogService;
    }
    BlogPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            _this.blog = routeData.blog;
            _this.blogId = _this.blog.id;
        });
    };
    BlogPageComponent.prototype.vote = function (direction, blog) {
        (!blog.voted) && (blog[direction] += 1);
        this.blogService.updateBlogVote({ id: blog.id, thumbsDown: blog.thumbsDown, thumbsUp: blog.thumbsUp }).subscribe(function (data) {
            blog.voteToolTip = "You have casted your vote for this blog already. Can vote only once!";
            blog.voted = true;
        });
    };
    BlogPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-page',
            template: __webpack_require__(/*! ./blog-page.component.html */ "./src/app/blog-page/blog-page.component.html"),
            styles: [__webpack_require__(/*! ./blog-page.component.css */ "./src/app/blog-page/blog-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _blog_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]])
    ], BlogPageComponent);
    return BlogPageComponent;
}());



/***/ }),

/***/ "./src/app/blog.routing.module.ts":
/*!****************************************!*\
  !*** ./src/app/blog.routing.module.ts ***!
  \****************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blogList_blogList_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blogList/blogList.component */ "./src/app/blogList/blogList.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blogAdd_blogAdd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogAdd/blogAdd.component */ "./src/app/blogAdd/blogAdd.component.ts");
/* harmony import */ var _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-page/blog-page.component */ "./src/app/blog-page/blog-page.component.ts");
/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var _blogEdit_blogEdit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogEdit/blogEdit.component */ "./src/app/blogEdit/blogEdit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var paths = [
    { path: "", redirectTo: "blogList", pathMatch: 'full' },
    { path: "blogList", component: _blogList_blogList_component__WEBPACK_IMPORTED_MODULE_1__["BlogListComponent"], children: [
            { path: "blog/:id", component: _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_4__["BlogPageComponent"], resolve: { blog: _blog_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogDetailResolver"] } },
            { path: "editBlog/:id", component: _blogEdit_blogEdit_component__WEBPACK_IMPORTED_MODULE_6__["BlogEditComponent"], resolve: { blog: _blog_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogDetailResolver"] } }
        ] },
    { path: "newBlog", component: _blogAdd_blogAdd_component__WEBPACK_IMPORTED_MODULE_3__["BlogAddComponent"] }
];
var BlogRoutingModule = /** @class */ (function () {
    function BlogRoutingModule() {
    }
    BlogRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            providers: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(paths)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], BlogRoutingModule);
    return BlogRoutingModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.model.ts":
/*!************************************!*\
  !*** ./src/app/blog/blog.model.ts ***!
  \************************************/
/*! exports provided: Blog, BlogEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blog", function() { return Blog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogEdit", function() { return BlogEdit; });
var Blog = /** @class */ (function () {
    function Blog(title, content, author) {
        this.title = title;
        this.content = content || "";
        this.author = author;
        this.id = new Date().getTime();
        this.thumbsDown = 0;
        this.thumbsUp = 0;
    }
    return Blog;
}());

var BlogEdit = /** @class */ (function () {
    function BlogEdit() {
    }
    return BlogEdit;
}());



/***/ }),

/***/ "./src/app/blog/blog.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog/blog.service.ts ***!
  \**************************************/
/*! exports provided: BlogService, BlogDetailResolver, BlogCommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailResolver", function() { return BlogDetailResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCommentsService", function() { return BlogCommentsService; });
/* harmony import */ var _blog_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog.model */ "./src/app/blog/blog.model.ts");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "../../node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "../../node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/from */ "../../node_modules/rxjs-compat/_esm5/add/observable/from.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "../../node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Subject */ "../../node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _comments_comment_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comments/comment.model */ "./src/app/comments/comment.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// Blog Services 
var BlogService = /** @class */ (function () {
    function BlogService(router, http) {
        this.router = router;
        this.http = http;
        this.blogListSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.creationComplete = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    BlogService.prototype.updateBlogListSubject = function () {
        var _this = this;
        this.http.get("/getAllBlogs")
            .subscribe(function (data) {
            _this.blogListSubject.next(data);
        });
    };
    BlogService.prototype.getBlogListSubject = function () {
        this.updateBlogListSubject();
        return this.blogListSubject;
    };
    BlogService.prototype.updateBlog = function (data) {
        var _this = this;
        var options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpParams"]().set('id', data.id) };
        var updateObservable = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put("/updateBlog", data, options).subscribe(function (result) {
                observer.next(result);
                observer.complete();
                _this.updateBlogListSubject(); // update the blog list post any updates to individual blogs
            });
        });
        return updateObservable;
    };
    BlogService.prototype.updateBlogVote = function (data) {
        var _this = this;
        var options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpParams"]().set('id', data.id) };
        var updateObservable = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.put("/updateBlogVotes", data, options).subscribe(function (result) {
                observer.next(result);
                observer.complete();
                _this.updateBlogListSubject(); // update the blog list post any updates to individual blogs
            });
        });
        return updateObservable;
    };
    BlogService.prototype.addNewBlog = function (title, author, content) {
        var _this = this;
        var newBlog = new _blog_model__WEBPACK_IMPORTED_MODULE_0__["Blog"](title, content, author);
        this.http.post("/addBlog", newBlog, {}).subscribe(function (satus) {
            _this.updateBlogListSubject(); // update the blog list post any updates to individual blogs
        });
    };
    BlogService.prototype.notifyCreationComplete = function () {
        this.creationComplete.next(true);
    };
    BlogService.prototype.getBlogWithId = function (id) {
        var _this = this;
        var blogObservable;
        var options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpParams"]().set("id", id)
        };
        blogObservable = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get("/getBlog", options).subscribe(function (data) {
                observer.next(data);
                observer.complete();
            });
        });
        return blogObservable;
    };
    BlogService.prototype.navigateTo = function (path) {
        this.router.navigate(path);
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());

// resolver guard service - for specific blog detail
var BlogDetailResolver = /** @class */ (function () {
    function BlogDetailResolver(blogService) {
        this.blogService = blogService;
    }
    BlogDetailResolver.prototype.resolve = function (route, state) {
        var id = route.paramMap.get("id");
        return this.blogService.getBlogWithId(id);
    };
    BlogDetailResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])(),
        __metadata("design:paramtypes", [BlogService])
    ], BlogDetailResolver);
    return BlogDetailResolver;
}());

// Blog Services - end
//Comment Services
var BlogCommentsService = /** @class */ (function () {
    function BlogCommentsService(http) {
        this.http = http;
    }
    BlogCommentsService.prototype.getBlogComments = function (blogId) {
        var _this = this;
        var commentsObservable = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.get("/getBlogComments", { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpParams"]().set("blogId", blogId) }).subscribe(function (data) {
                observer.next(data);
                observer.complete();
            });
        });
        return commentsObservable;
    };
    BlogCommentsService.prototype.addComment = function (blogId, author, content) {
        var _this = this;
        var newComment = new _comments_comment_model__WEBPACK_IMPORTED_MODULE_6__["BlogComment"](blogId, content, author);
        var addCommentObservable = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post("/addComment", newComment).subscribe(function (result) {
                observer.next(result);
                observer.complete();
            });
        });
        return addCommentObservable;
    };
    BlogCommentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], BlogCommentsService);
    return BlogCommentsService;
}());



/***/ }),

/***/ "./src/app/blogAdd/blogAdd.component.css":
/*!***********************************************!*\
  !*** ./src/app/blogAdd/blogAdd.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n    width: 300px;\r\n}"

/***/ }),

/***/ "./src/app/blogAdd/blogAdd.component.html":
/*!************************************************!*\
  !*** ./src/app/blogAdd/blogAdd.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='alert alert-info '><strong style=\"font-size: 1.1em;\">Add a new Blog</strong></div>\r\n<form [formGroup]=\"blogAddForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <div>\r\n            <label class=\"center-block\"> Title :\r\n                <input class=\"form-control\" formControlName=\"title\">\r\n            </label>\r\n        </div>\r\n        <div>\r\n            <label class=\"center-block\"> Content :\r\n                <textarea rows=\"20\" cols=\"150\" class=\"form-control\" formControlName=\"content\"></textarea>\r\n            </label>\r\n        </div>\r\n        <div>\r\n            <label class=\"center-block\"> Author :\r\n                <input class=\"form-control\" formControlName=\"author\">\r\n            </label>\r\n        </div>\r\n        <div style =\"padding:10px  5px; float:left;\">\r\n                <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"!blogAddForm.valid\">Submit</button>\r\n        </div>\r\n        <div style =\"padding:10px  5px;; float:left;\">\r\n                <button  class=\"btn btn-danger\" type=\"button\"   (click)=\"destroyComponent()\">Cancel</button>\r\n        </div>\r\n        <div style=\"clear: both;\"></div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/blogAdd/blogAdd.component.ts":
/*!**********************************************!*\
  !*** ./src/app/blogAdd/blogAdd.component.ts ***!
  \**********************************************/
/*! exports provided: BlogAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogAddComponent", function() { return BlogAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog/blog.service */ "./src/app/blog/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogAddComponent = /** @class */ (function () {
    function BlogAddComponent(formBuilder, blogService) {
        this.formBuilder = formBuilder;
        this.blogService = blogService;
        this.createForm();
    }
    BlogAddComponent.prototype.ngOnInit = function () {
    };
    BlogAddComponent.prototype.createForm = function () {
        this.blogAddForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    BlogAddComponent.prototype.onSubmit = function () {
        var author, title, content;
        author = this.blogAddForm.get('author').value;
        title = this.blogAddForm.get('title').value;
        content = this.blogAddForm.get('content').value;
        this.blogService.addNewBlog(title, author, content);
        this.blogService.navigateTo(["/blogList"]);
    };
    BlogAddComponent.prototype.destroyComponent = function () {
        this.blogService.navigateTo(["/blogList"]);
    };
    BlogAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-add',
            template: __webpack_require__(/*! ./blogAdd.component.html */ "./src/app/blogAdd/blogAdd.component.html"),
            styles: [__webpack_require__(/*! ./blogAdd.component.css */ "./src/app/blogAdd/blogAdd.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _blog_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]])
    ], BlogAddComponent);
    return BlogAddComponent;
}());



/***/ }),

/***/ "./src/app/blogEdit/blogEdit.component.css":
/*!*************************************************!*\
  !*** ./src/app/blogEdit/blogEdit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n    width: 300px;\r\n}"

/***/ }),

/***/ "./src/app/blogEdit/blogEdit.component.html":
/*!**************************************************!*\
  !*** ./src/app/blogEdit/blogEdit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='alert alert-info '><strong style=\"font-size: 1.1em;\">Edit Form</strong></div>\r\n<form [formGroup]=\"blogForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <div>\r\n            <label class=\"center-block\"> Title :\r\n                <input class=\"form-control\" formControlName=\"title\">\r\n            </label>\r\n        </div>\r\n        <div>\r\n            <label class=\"center-block\"> Content :\r\n                <textarea rows=\"20\" cols=\"150\" class=\"form-control\" formControlName=\"content\"></textarea>\r\n            </label>\r\n        </div>\r\n        <div>\r\n            <label class=\"center-block\"> Author :\r\n                <input class=\"form-control\" formControlName=\"author\">\r\n            </label>\r\n        </div>\r\n        <div style =\"padding:10px  5px;; float:right;\">\r\n                <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"!blogForm.valid\">Submit</button>\r\n        </div>\r\n        <div style =\"padding:10px  5px;; float:right;\">\r\n                <button  class=\"btn btn-danger\"  type= \"button\" (click)=\"toggleEditMode()\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/blogEdit/blogEdit.component.ts":
/*!************************************************!*\
  !*** ./src/app/blogEdit/blogEdit.component.ts ***!
  \************************************************/
/*! exports provided: BlogEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogEditComponent", function() { return BlogEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog/blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogEditComponent = /** @class */ (function () {
    function BlogEditComponent(formBuilder, blogService, route) {
        this.formBuilder = formBuilder;
        this.blogService = blogService;
        this.route = route;
        this.createForm();
    }
    BlogEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.blog = data.blog;
            _this.setInitialValue();
        });
    };
    BlogEditComponent.prototype.createForm = function () {
        this.blogForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    BlogEditComponent.prototype.setInitialValue = function () {
        this.blogForm.setValue({
            title: this.blog.title,
            content: this.blog.content,
            author: this.blog.author
        });
    };
    BlogEditComponent.prototype.onSubmit = function () {
        var _this = this;
        var author, title, content;
        author = this.blogForm.get('author').value;
        title = this.blogForm.get('title').value;
        content = this.blogForm.get('content').value;
        this.blogService.updateBlog({ id: this.blog.id, title: title, author: author, content: content }).subscribe(function () {
            _this.blogService.navigateTo(["/blogList/blog", _this.blog.id]);
        });
    };
    BlogEditComponent.prototype.toggleEditMode = function () {
        this.blogService.navigateTo(["/blogList/blog", this.blog.id]);
    };
    BlogEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-edit',
            template: __webpack_require__(/*! ./blogEdit.component.html */ "./src/app/blogEdit/blogEdit.component.html"),
            styles: [__webpack_require__(/*! ./blogEdit.component.css */ "./src/app/blogEdit/blogEdit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _blog_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BlogEditComponent);
    return BlogEditComponent;
}());



/***/ }),

/***/ "./src/app/blogList/blogList.component.css":
/*!*************************************************!*\
  !*** ./src/app/blogList/blogList.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".allblogsTitle{\r\n    padding: 10px;\r\n    font-size: 32px;\r\n    border-radius: 5px;\r\n    margin-bottom: 20px;\r\n}\r\n.blogItem{\r\n    margin-top: 25px;\r\n    min-height: 100px;\r\n    border-bottom: 1px solid #e4e6e8\r\n}\r\ni.fa-thumbs-up{\r\n    color: lightskyblue;\r\n}\r\ni.fa-thumbs-down {\r\n    color: lightcoral;\r\n}\r\n.author{\r\n    font-size: 15px;\r\n    color: lightcoral;\r\n}\r\n.title {\r\n    font-size:  20px;\r\n    color: grey;\r\n}\r\n.medialeft {\r\n    padding: 20px;\r\n    position: relative;\r\n    bottom: 12px;\r\n\r\n}\r\n.contentPreview {\r\n    width: 80vw;\r\n    line-height: 20px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}"

/***/ }),

/***/ "./src/app/blogList/blogList.component.html":
/*!**************************************************!*\
  !*** ./src/app/blogList/blogList.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"!sideView\">\r\n    <div class=\" text-light bg-secondary  display-4  allblogsTitle\">All blogs</div>\r\n    <div class=\"blogItem media\" *ngFor=\"let blog of listSubject | async\">\r\n        <div class=\" mr-3 rounded medialeft bg-light \">\r\n            <div>Votes</div>\r\n            <div>\r\n                <div>\r\n                    <i class=\" fa fa-thumbs-up\"></i> &nbsp; {{blog.thumbsUp}}\r\n                </div>\r\n                <div>\r\n                    <i class=\" fa fa-thumbs-down\"></i> &nbsp; {{blog.thumbsDown}}\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"media-body\">\r\n            <a class=\"mt-0 title\" [routerLink]=\"'blog/'+ blog.id\">{{blog.title}}</a>\r\n            <div>Author:&nbsp; <span  class=\"author\">{{blog.author}}</span></div>\r\n            <div class=\"contentPreview\">{{blog.content}}</div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"d-flex\">\r\n    <div class=\" bg-info text-light col-lg-2 col-md-3 col-sm-3\" *ngIf=\"sideView\" style=\"border-radius: 6px; margin-right: 20px; padding: 0px;\">\r\n        <nav class=\"nav navbar\">\r\n            <ul style=\"padding:0px;\">\r\n                <li class=\"nav-link  text-light\" *ngFor=\"let blog of listSubject | async\">\r\n                    <span>\r\n                        <a class=\"nav-item  text-light\" [routerLink]=\"'blog/'+ blog.id\">{{blog.title}}</a>\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n\r\n    </div>\r\n    <div class=\" col-lg-7 col-md-9 col-sm-9\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/blogList/blogList.component.ts":
/*!************************************************!*\
  !*** ./src/app/blogList/blogList.component.ts ***!
  \************************************************/
/*! exports provided: BlogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListComponent", function() { return BlogListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog/blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogListComponent = /** @class */ (function () {
    function BlogListComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
        this.sideView = false;
    }
    BlogListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listSubject = this.blogService.getBlogListSubject();
        this.sideView = this.router.url.match("/blogList/blog/") ? true : false;
        this.sideView = this.router.url.match("/blogList/editBlog/") ? true : this.sideView;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                var url = event.url;
                _this.sideView = url.match("/blogList/blog/") ? true : false;
                _this.sideView = url.match("/blogList/editBlog/") ? true : _this.sideView;
            }
        });
    };
    BlogListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-list',
            template: __webpack_require__(/*! ./blogList.component.html */ "./src/app/blogList/blogList.component.html"),
            styles: [__webpack_require__(/*! ./blogList.component.css */ "./src/app/blogList/blogList.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BlogListComponent);
    return BlogListComponent;
}());



/***/ }),

/***/ "./src/app/comments/comment.model.ts":
/*!*******************************************!*\
  !*** ./src/app/comments/comment.model.ts ***!
  \*******************************************/
/*! exports provided: BlogComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComment", function() { return BlogComment; });
var BlogComment = /** @class */ (function () {
    function BlogComment(blogId, content, author) {
        this.blogId = blogId;
        this.content = content;
        this.author = author;
        this.time = new Date();
    }
    return BlogComment;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.commentC {\r\n    margin: 4px 0px;\r\n    padding: 20px 0px;\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n.CommentsTitle{\r\n    margin-top: 36px;\r\n    font-size: 1.1em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div *ngIf=\"comments.length===0\">\r\n        <div class=\"alert alert-dark CommentsTitle\">\r\n            <strong>No Comments</strong>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"comments.length>0\">\r\n        <div class=\"alert alert-dark CommentsTitle\">\r\n            <strong>Comments</strong>\r\n        </div>\r\n\r\n        <div *ngFor=\"let comment of comments\" class=\"media border-light rounded\">\r\n\r\n            <div class=\"text-dark commentC\" style=\"flex-grow: 1; padding-left: 5px;\">\r\n                <span class=\"media-body text-justify\">\r\n                    {{comment.content}}\r\n                </span>\r\n                <span class=\"badge badge-light pull-right\">\r\n                    <span color=\"blue\">{{comment.author}}</span>&nbsp; - &nbsp; {{comment.time | date:'medium'}}\r\n                </span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"newCommentSection panel panel-primary\">\r\n        <form [formGroup]=\"newComment\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"alert alert-info CommentsTitle\">\r\n                <strong>Add Your Comments below</strong>\r\n            </div>\r\n            <div class=\"panel-heading\"> Comment :\r\n                <textarea rows=\"4\" cols=\"120\" class=\"form-control\" formControlName=\"content\"></textarea>\r\n            </div>\r\n            <div>\r\n                <label class=\"center-block\">Name :\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"author\">\r\n                </label>\r\n            </div>\r\n            <div>\r\n                <button class=\"btn btn-info\" type=\"submit\" [disabled]=\"!newComment.valid\">Submit</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog/blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(commentsService, formBuilder) {
        this.commentsService = commentsService;
        this.formBuilder = formBuilder;
        this.comments = [];
    }
    CommentsComponent.prototype.ngOnChanges = function () {
        this.updateCommentsSubscription();
    };
    CommentsComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    CommentsComponent.prototype.updateCommentsSubscription = function () {
        var _this = this;
        this.commentsService.getBlogComments(this.blogId).subscribe(function (data) {
            _this.comments = data;
        });
    };
    CommentsComponent.prototype.createForm = function () {
        this.newComment = this.formBuilder.group({
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CommentsComponent.prototype.onSubmit = function () {
        var _this = this;
        var author, content;
        author = this.newComment.get("author").value;
        content = this.newComment.get("content").value;
        this.commentsService.addComment(this.blogId, author, content).subscribe(function (result) {
            _this.updateCommentsSubscription();
        });
        this.clearForm();
    };
    CommentsComponent.prototype.clearForm = function () {
        this.newComment.setValue({
            author: "",
            content: ""
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentsComponent.prototype, "blogId", void 0);
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogCommentsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/raj/VSCodeWS/AngularApps/ng4DI-master/Apps/projects/blogApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map