exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 466:
/***/ ((module) => {

module.exports = "/_next/static/videos/timeline-97003dfc41243583d4a13e7b691579d8.mp4";

/***/ }),

/***/ 549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(910);
/* harmony import */ var _Main_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(861);
/* harmony import */ var _AboutUs_AboutUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(321);
/* harmony import */ var _Projects_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(940);
/* harmony import */ var _Line_Line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(443);
/* harmony import */ var _Services_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(927);
/* harmony import */ var _StartProject_StartProject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(170);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(809);
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62);
/* harmony import */ var _Form_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(722);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(665);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(379);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var validator_lib_isMobilePhone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(92);
/* harmony import */ var validator_lib_isMobilePhone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isMobilePhone__WEBPACK_IMPORTED_MODULE_15__);


// import './App.css';














function App() {
    const [error1, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [isFormDisabled, setIsFormDisabled] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [checkboxState, setCheckboxState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    function handleCheckboxState() {
        setCheckboxState(!checkboxState);
    }
    function handleSendRequest(name, phone, email, task, e, resetForm) {
        setError("");
        setMessage("");
        setIsFormDisabled(true);
        if (!validator_lib_isMobilePhone__WEBPACK_IMPORTED_MODULE_15___default()(phone)) {
            setError("\u041E\u0448\u0438\u0431\u043A\u0430: \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430.");
            e.target.reset();
            resetForm();
            handleCheckboxState();
        } else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_14___default()(email)) {
            setError("\u041E\u0448\u0438\u0431\u043A\u0430: \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.");
            e.target.reset();
            resetForm();
            handleCheckboxState();
        } else {
            //setMessage('Данные отправлены успешно!');
            // resetForm();
            // handleCheckboxState()
            _emailjs_browser__WEBPACK_IMPORTED_MODULE_13___default().send("service_w4t946h", "template_q1u48ep", {
                name: name,
                phone: phone,
                email: email,
                task: task
            }, "rx91W3rrGPqIyRlSn").then((result)=>{
                setMessage("\u0414\u0430\u043D\u043D\u044B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E!");
            }, (error)=>{
                console.log(error);
            }).catch((err)=>{
                console.log(err);
            }).finally(()=>{
                setIsFormDisabled(false);
                resetForm();
                handleCheckboxState();
            });
        }
    /*mainApi
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          history.push("/movies");
          setError("");
          setIsErrorVisible(false);
        }
        return res;
      })
      .catch((err) => {
        setError("Вы ввели неправильный логин или пароль.");
        setIsErrorVisible(true);
        return err;
      })
      .finally(() => {
        setIsFormDisabled(false);
      })*/ }
    /////////////////////////////////////////////////////////////////
    const [isNavOpen, setNavState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const changeNavState = ()=>{
        setNavState(!isNavOpen);
    };
    const [isFormOpen, setFormState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const changeFormState = ()=>{
        setFormState(!isFormOpen);
    };
    // const [isCheckboxActive, setCheckboxState] = React.useState(false);
    // const changeCheckboxState = () => {
    //   setCheckboxState(!isCheckboxActive);
    // };
    const [isDevOpen, setDevState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const changeDevState = ()=>{
        setDevState(!isDevOpen);
    };
    const [isLayoutOpen, setLayoutState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const changeLayoutState = ()=>{
        setLayoutState(!isLayoutOpen);
    };
    const [isDesignOpen, setDesignState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const changeDesignState = ()=>{
        setDesignState(!isDesignOpen);
    };
    const [isAdOpen, setAdState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const changeAdState = ()=>{
        setAdState(!isAdOpen);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "page",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "first",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "first__overlay"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                        className: "first__video",
                        src: __webpack_require__(466),
                        muted: true,
                        autoPlay: "autoplay",
                        preload: "auto",
                        loop: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        changeNavState: changeNavState
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Main_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        changeFormState: changeFormState
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Line_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default()), {
                bottom: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AboutUs_AboutUs__WEBPACK_IMPORTED_MODULE_4__["default"], {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default()), {
                bottom: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Line_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Projects_Projects__WEBPACK_IMPORTED_MODULE_5__["default"], {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default()), {
                bottom: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Line_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Services_Services__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        isDevOpen: isDevOpen,
                        changeDevState: changeDevState,
                        isLayoutOpen: isLayoutOpen,
                        changeLayoutState: changeLayoutState,
                        isDesignOpen: isDesignOpen,
                        changeDesignState: changeDesignState,
                        isAdOpen: isAdOpen,
                        changeAdState: changeAdState,
                        changeFormState: changeFormState
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default()), {
                bottom: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Line_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StartProject_StartProject__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        changeFormState: changeFormState
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Line_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__["default"], {
                isOpen: isNavOpen,
                changeState: changeNavState
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Form_Form__WEBPACK_IMPORTED_MODULE_11__["default"], {
                isOpen: isFormOpen,
                changeState: changeFormState,
                error: error1,
                message: message,
                isFormDisabled: isFormDisabled,
                onSendRequest: handleSendRequest,
                checkboxState: checkboxState,
                onSendCheckboxState: handleCheckboxState,
                setError: setError,
                setMessage: setMessage
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ 443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// import "./Line.module.css";
function Line() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "line"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);


/***/ }),

/***/ 861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// import "./Main.module.css";
function Main(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "main",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "main__title",
                children: "\u041F\u0440\u043E\u0434\u0430\u044E\u0449\u0438\u0439 \u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "main__btn",
                type: "button",
                onClick: props.changeFormState,
                children: "\u041D\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);


/***/ })

};
;