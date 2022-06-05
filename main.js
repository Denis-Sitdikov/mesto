(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._params=t,this._queryParams={},this._queryParams.headers=this._params.headers}var n,r;return n=e,(r=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._params.baseRoute,"/cards"),this._queryParams).then((function(e){return t._getResponseData(e)}))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._params.baseRoute,"/users/me"),this._queryParams).then((function(e){return t._getResponseData(e)}))}},{key:"patchUserInfo",value:function(t,e){var n=this,r={method:"PATCH",headers:this._queryParams.headers,body:JSON.stringify({name:t,about:e})};return fetch("".concat(this._params.baseRoute,"/users/me"),r).then((function(t){return n._getResponseData(t)}))}},{key:"patchUserPhoto",value:function(t){var e=this,n={method:"PATCH",headers:this._queryParams.headers,body:JSON.stringify({avatar:t})};return fetch("".concat(this._params.baseRoute,"/users/me/avatar"),n).then((function(t){return e._getResponseData(t)}))}},{key:"addNewCard",value:function(t){var e=this,n={method:"POST",headers:this._queryParams.headers,body:JSON.stringify({name:t.name,link:t.link})};return fetch("".concat(this._params.baseRoute,"/cards"),n).then((function(t){return e._getResponseData(t)}))}},{key:"deleteCard",value:function(t){var e=this,n={method:"DELETE",headers:this._queryParams.headers};return fetch("".concat(this._params.baseRoute,"/cards/").concat(t),n).then((function(t){return e._getResponseData(t)}))}},{key:"handleLikeButton",value:function(t,e){var n=this;if(e){var r={method:"DELETE",headers:this._queryParams.headers};return fetch("".concat(this._params.baseRoute,"/cards/likes/").concat(t),r).then((function(t){return n._getResponseData(t)}))}var o={method:"PUT",headers:this._queryParams.headers};return fetch("".concat(this._params.baseRoute,"/cards/likes/").concat(t),o).then((function(t){return n._getResponseData(t)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(e,n,r){var o=this,i=e.data,a=e.handleCardClick,u=e.handleDeleteIconClick,c=e.handleLikeButtonClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=i.name,this._imageLink=i.link,this._likes=i.likes,this._id=i._id,this._owner=i.owner._id,this._cardSelector=r,this._myID=n,this._likesLength=this._likes.length,this._handleCardClick=a,this._handleDeleteIconClick=u,this._handleLike=c,this._isLiked=this._likes.some((function(t){return t._id===o._myID}))}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_openPhotoViewPopup",value:function(){this._handleCardClick(this._name,this._imageLink)}},{key:"_handleDeletePhoto",value:function(){this._handleDeleteIconClick(this._id,this._element)}},{key:"_toggleLike",value:function(){this._likeButton.classList.toggle("element__button-like_active")}},{key:"_setEventListeners",value:function(){var t=this;this._photo.addEventListener("click",(function(){t._openPhotoViewPopup()})),this._myCard()&&this._deleteButton.addEventListener("click",(function(){t._handleDeletePhoto()})),this._likeButton.addEventListener("click",(function(){t._handleLike(t._id,t._isLiked,(function(e){t._isLiked=!t._isLiked,t._likeCounter.textContent=e.likes.length,t._toggleLike()}))}))}},{key:"_myCard",value:function(){if(this._myID===this._owner)return!0}},{key:"generateCard",value:function(){return this._myCard(),this._element=this._getTemplate(),this._photo=this._element.querySelector(".element__photo"),this._deleteButton=this._element.querySelector(".element__button-delete"),this._likeButton=this._element.querySelector(".element__button-like"),this._isLiked&&this._likeButton.classList.add("element__button-like_active"),this._likeCounter=this._element.querySelector(".element__like-count"),this._myCard()||this._deleteButton.remove(),this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._name,this._likeCounter.textContent=this._likesLength,this._photo.src=this._imageLink,this._photo.alt=this._name,this._element}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validationParams=n,this._formElement=e,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationParams.inputSelector)),this._submitButton=this._formElement.querySelector(this._validationParams.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._validationParams.inputErrorClass),n.textContent=e,n.classList.add(this._validationParams.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._validationParams.inputErrorClass),e.classList.remove(this._validationParams.errorClass),e.textContent=""}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState(t._inputList,t._submitButton,t._validationParams.inactiveButtonClass)}))}))}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(t,e){this._hasInvalidInput(t)?(e.classList.add(this._validationParams.inactiveButtonClass),e.setAttribute("disabled",!0)):(e.classList.remove(this._validationParams.inactiveButtonClass),e.removeAttribute("disabled"))}},{key:"resetPopupValidationState",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState(this._inputList,this._submitButton)}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_handleKeyDown",(function(t){"Escape"===t.key&&n.close()})),u(this,"_closeOverlay",(function(t){t.target===t.currentTarget&&n.close()})),u(this,"close",(function(){n._popup.classList.remove("popup_active"),document.removeEventListener("keydown",n._handleKeyDown)})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__button-close")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleKeyDown)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._closeOverlay),this._popupCloseButton.addEventListener("click",this.close)}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=p(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},f.apply(this,arguments)}function p(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function y(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return y(this,t)});function a(t,e){var n,r=t.handleConfirmation;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleConfirmation=r,n._form=n._popup.querySelector(".popup__form"),n.submitButton=n._form.querySelector(".popup__button-save"),n}return e=a,(n=[{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleConfirmation(t.cardID,t.card)})),f(d(a.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(t,e){this.cardID=t,this.card=e,this.submitButton.focus(),f(d(a.prototype),"open",this).call(this)}},{key:"close",value:function(){f(d(a.prototype),"close",this).call(this)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=g(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function g(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function w(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function a(t,e){var n,r=t.validator,o=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._validator=r,n._handleFormSubmit=o,n._form=n._popup.querySelector(".popup__form"),n.submitButton=n._form.querySelector(".popup__button-save"),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this,e=Array.from(this._validator._formElement.querySelectorAll(this._validator._validationParams.inputSelector));return this._element={},e.forEach((function(e){t._element[e.name]=e.value})),this._element}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t._form.reset()})),b(P(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){b(P(a.prototype),"close",this).call(this)}},{key:"open",value:function(){this._form.reset(),this._validator.resetPopupValidationState(),b(P(a.prototype),"open",this).call(this)}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=L(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function L(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function q(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return q(this,t)});function a(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,t))._popupPhoto=document.querySelector(e),r._popupPhotoCapture=document.querySelector(n),r}return e=a,(n=[{key:"open",value:function(t,e){this._popupPhotoCapture.textContent=t,this._popupPhoto.src=e,this._popupPhoto.alt=t,E(B(a.prototype),"open",this).call(this)}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var D=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(t){var e=this;this.clear(),t.forEach((function(t){e._renderer(t)}))}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var T=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=e.nameSelector,this._descriptionSelector=e.descriptionSelector,this._currentName=document.querySelector(this._nameSelector),this._currentDescription=document.querySelector(this._descriptionSelector),this._avatar=document.querySelector(".profile__avatar")}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._infoObject={name:this._currentName.textContent,description:this._currentDescription.textContent},this._infoObject}},{key:"setUserInfo",value:function(t,e,n,r){this._currentName.textContent=t,this._currentDescription.textContent=e,this._avatar.src=n,this._id=r}},{key:"getID",value:function(){return this._id}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),A={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__inputType_error",errorClass:"popup__input-error_active"};function U(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var V=document.querySelector("#profileImageForm").querySelector(".popup__form"),F=document.querySelector("#profilePopup").querySelector(".popup__form"),N=document.querySelector("#addCardForm").querySelector(".popup__form"),H=document.querySelector(".profile__button-edit"),J=document.querySelector(".profile__button-add"),K=document.querySelector("#profileName"),M=document.querySelector("#profileDescription"),z=document.querySelector(".profile__avatar"),$=document.querySelector(".profile__block");function G(t,e,n){return new r({data:t,handleCardClick:function(t,n){e.open(t,n)},handleDeleteIconClick:function(t,e){n.open(t,e)},handleLikeButtonClick:function(t,e,n){X.handleLikeButton(t,e).then((function(t){n(t)})).catch((function(t){console.log(t)}))}},Q.getID(),"#element-template")}var Q=new T({nameSelector:".profile__name",descriptionSelector:".profile__description"}),W=new D({renderer:function(t){var e=G(t,ot,it).generateCard();W.addItem(e)}},".elements"),X=new e({baseRoute:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"03a4523e-62a7-4ee4-ae37-dcf3604823ce","Content-Type":"application/json"}});Promise.all([X.getUserInfo(),X.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return U(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q.setUserInfo(o.name,o.about,o.avatar,o._id),W.renderItems(i.reverse())})).catch((function(t){console.log(t)}));var Y=new i(F,A);Y.enableValidation();var Z=new i(N,A);Z.enableValidation();var tt=new i(V,A);tt.enableValidation();var et=new S({validator:tt,handleFormSubmit:function(t){var e=et.submitButton.textContent;et.submitButton.textContent="Сохранение...",X.patchUserPhoto(t.photo).then((function(t){z.src=t.avatar,et.close()})).catch((function(t){console.log(t)})).finally((function(){nt.submitButton.textContent=e}))}},"#profileImageForm"),nt=new S({validator:Y,handleFormSubmit:function(t){var e=nt.submitButton.textContent;nt.submitButton.textContent="Сохранение...",X.patchUserInfo(t.name,t.description).then((function(t){Q.setUserInfo(t.name,t.about,t.avatar),nt.close()})).catch((function(t){console.log(t)})).finally((function(){nt.submitButton.textContent=e}))}},"#profilePopup"),rt=new S({validator:Z,handleFormSubmit:function(t){var e=et.submitButton.textContent;rt.submitButton.textContent="Сохранение...",X.addNewCard(t).then((function(t){var e=G(t,ot,it).generateCard();W.addItem(e),rt.close()})).catch((function(t){console.log(t)})).finally((function(){rt.submitButton.textContent=e}))}},"#addCardForm"),ot=new R("#imgView",".popup__img",".popup__img-caption"),it=new _({handleConfirmation:function(t,e){var n=et.submitButton.textContent;it.submitButton.textContent="Удаление...",X.deleteCard(t).then((function(t){e.remove(),it.close()})).catch((function(t){console.log(t)})).finally((function(){it.submitButton.textContent=n}))}},"#deleteImagePopup");H.addEventListener("click",(function(){nt.open();var t=Q.getUserInfo();K.value=t.name,M.value=t.description})),J.addEventListener("click",(function(){rt.open()})),$.addEventListener("click",(function(){et.open()})),ot.setEventListeners(),nt.setEventListeners(),rt.setEventListeners(),et.setEventListeners(),it.setEventListeners()})();