(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.data,r=e.userId,o=e.template,i=e.handlerCardClick,a=e.handlerLikeClick,u=e.handlerTrashClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=n.name,this._link=n.link,this._userId=r,this._isCurrentUserCard=r===n.owner._id,this._likes=n.likes,this._cardId=n._id,this._template=o,this._handlerCardClick=i,this._handlerLikeClick=a,this._handlerTrashClick=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListener",value:function(){var e=this;this._cardLike=this._cardElement.querySelector(".element__btn-like"),this._cardLike.addEventListener("click",(function(t){return e._handlerLikeClick()})),this._isCurrentUserCard&&this._cardElement.querySelector(".element__btn-delete").addEventListener("click",(function(t){return e._handlerTrashClick(t)})),this._cardImage.addEventListener("click",this._handlerCardClick)}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._cardImage=this._cardElement.querySelector(".element__image"),this._countLike=this._cardElement.querySelector(".element__like-count"),this._isCurrentUserCard||this._cardElement.querySelector(".element__btn-delete").remove(),this._cardElement.querySelector(".element__caption").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._countLike.textContent=this._likes.length,this._setEventListener(),this._toggleLikeState(),this._cardElement}},{key:"_toggleLikeState",value:function(){this._checkUserLike()?this.setLike():this.unsetLike()}},{key:"setLike",value:function(){this._cardLike.classList.add("element__btn-like_active"),this.isLiked=!0}},{key:"unsetLike",value:function(){this._cardLike.classList.remove("element__btn-like_active"),this.isLiked=!1}},{key:"likesCountUpdate",value:function(e){this._countLike.textContent=e.length}},{key:"_checkUserLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"getCardId",value:function(){return this._cardId}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=t,this._validateObj=n,this._inputList=Array.from(this._form.querySelectorAll(".".concat(this._validateObj.inputSelector))),this._buttonElement=this._form.querySelector(".".concat(this._validateObj.submitButtonSelector))}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add("".concat(this._validateObj.inputErrorClass)),t.textContent=e.validationMessage,t.classList.add("".concat(this._validateObj.errorClass))}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove("".concat(this._validateObj.inputErrorClass)),t.textContent="",t.classList.remove("".concat(this._validateObj.errorClass))}},{key:"toggleButtonState",value:function(){this._form.checkValidity()?(this._buttonElement.classList.remove("".concat(this._validateObj.inactiveButtonClass)),this._buttonElement.disabled=!1):(this._buttonElement.classList.add("".concat(this._validateObj.inactiveButtonClass)),this._buttonElement.disabled=!0)}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"addItemPrepend",value:function(e){this._container.prepend(e)}},{key:"addItemAppend",value:function(e){this._container.append(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__btn-close"))&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formElement=n._popup.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".popup__input"),n._handlerSubmitForm=t,n._submitButton=n._popup.querySelector(".popup__btn-save"),n}return t=a,(n=[{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){return e._handlerSubmitForm(t)})),l(d(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._formElement.reset(),l(d(a.prototype),"close",this).call(this)}},{key:"isLoading",value:function(e){this._submitButton.textContent=!0===e?"Сохранение...":"Сохранить"}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupCaption.textContent=e,m(E(a.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(t),this._userAboutElement=document.querySelector(n),this._userAvatarElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userNameElement.textContent,userAbout:this._userAboutElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userAbout;this._userNameElement.textContent=t,this._userAboutElement.textContent=n}},{key:"setUserAvatar",value:function(e){this._userAvatarElement.src="".concat(e)}},{key:"setUserId",value:function(e){this._userId=e}},{key:"getUserId",value:function(){return this._userId}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){var n=t.baseUrl,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers={authorization:r,"Content-Type":"application/json"}}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status," - ").concat(e.statusText))}},{key:"getUserInfo",value:function(){var e=this._baseUrl+"/users/me";return fetch(e,{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){var e=this._baseUrl+"/cards";return fetch(e,{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialData",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"updateUserInfo",value:function(e){var t=this._baseUrl+"/users/me";return fetch(t,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){var t=this._baseUrl+"/cards";return fetch(t,{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){var t=this._baseUrl+"/cards/".concat(e);return fetch(t,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLikeCard",value:function(e){var t=this._baseUrl+"/cards/".concat(e,"/likes");return fetch(t,{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLikeCard",value:function(e){var t=this._baseUrl+"/cards/".concat(e,"/likes");return fetch(t,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){var t=this._baseUrl+"/users/me/avatar";return fetch(t,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function T(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._formElement=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){return e._handlerSubmitForm(t)})),P(q(a.prototype),"setEventListeners",this).call(this)}},{key:"setHandlerSubmit",value:function(e){this._handlerSubmitForm=e}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u),x={formSelector:"popup__form",inputSelector:"popup__input",submitButtonSelector:"popup__btn-save",inactiveButtonClass:"popup__btn-save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},V=document.querySelector(".profile__btn-edit"),B=document.querySelector(".profile__btn-add"),D=document.querySelector("[name=editFormProfile]"),N=document.querySelector("[name=addFormElement]"),F=document.querySelector(".elements__list"),H=document.querySelector(".profile__avatar-edit");function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new S({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",token:"ef2a8db2-3c2c-4f24-b837-032ea2a5c911"}),z=new C(".profile__name",".profile__about",".profile__avatar");M.getInitialData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];z.setUserInfo({userName:o.name,userAbout:o.about}),z.setUserAvatar(o.avatar),z.setUserId(o._id),K.renderItems(i)})).catch((function(e){console.log(e)}));var $=function(e){var n=new t({data:e,userId:z.getUserId(),template:"#element",handlerCardClick:function(){G.open(e.name,e.link)},handlerLikeClick:function(){n.isLiked?M.deleteLikeCard(n.getCardId()).then((function(e){n.unsetLike(),n.likesCountUpdate(e.likes)})).catch((function(e){console.log(e)})):M.addLikeCard(n.getCardId()).then((function(e){n.setLike(),n.likesCountUpdate(e.likes)})).catch((function(e){console.log("ошибка ".concat(e))}))},handlerTrashClick:function(e){var t=e.target.closest(".element");ee.setHandlerSubmit((function(e){e.preventDefault(),M.deleteCard(n.getCardId()).then((function(){t.remove(),ee.close()})).catch((function(e){console.log(e)}))})),ee.open()}});return n.generateCard()},G=new w(".popup_picture");G.setEventListeners();var K=new i({renderer:function(e){var t=$(e);K.addItemAppend(t)}},F),Q=new y(".popup_edit",(function(e){e.preventDefault();var t=Q.getInputValues(),n={name:t.userName,about:t.userAbout};Q.isLoading(!0),M.updateUserInfo(n).then((function(e){z.setUserInfo({userName:e.name,userAbout:e.about}),Q.close()})).catch((function(e){console.log(e)})).finally((function(){Q.isLoading(!1)}))}));Q.setEventListeners();var W=new r(D,x);W.enableValidation();var X=new y(".popup_add",(function(e){e.preventDefault();var t=X.getInputValues(),n={name:t.inputTitle,link:t.inputLink};X.isLoading(!0),M.addNewCard(n).then((function(e){var t=$(e);K.addItemPrepend(t),X.close()})).catch((function(e){console.log(e)})).finally((function(){X.isLoading(!1)}))}));X.setEventListeners();var Y=new r(N,x);Y.enableValidation();var Z=new y(".popup_update-avatar",(function(e){e.preventDefault();var t=Z.getInputValues().inputLink;Z.isLoading(!0),M.updateAvatar({avatar:t}).then((function(e){z.setUserAvatar(e.avatar),Z.close()})).catch((function(e){console.log(e)})).finally((function(){Z.isLoading(!1)}))}));Z.setEventListeners();var ee=new A(".popup_confirm");ee.setEventListeners(),B.addEventListener("click",(function(){Y.resetValidation(),X.open()})),V.addEventListener("click",(function(){var e=z.getUserInfo();Q.setInputValues(e),W.resetValidation(),Q.open()})),H.addEventListener("click",(function(){Z.open()}))})();