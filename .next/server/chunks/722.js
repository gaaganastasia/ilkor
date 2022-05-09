"use strict";
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_2__);


// import "./Form.module.css";

function Form(props) {
    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    function handleChangeName(e) {
        setName(e.target.value);
    }
    const [phone, setPhone] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    function handleChangePhone(e) {
        setPhone(e.target.value);
    }
    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
    const [task, setTask] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    function handleChangeTask(e) {
        setTask(e.target.value);
    }
    const resetValues = ()=>{
        setName("");
        setPhone("");
        setEmail("");
        setTask("");
    };
    const handleSubmit = (e)=>{
        e.preventDefault(); // Prevents default refresh by the browser
        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default().send("service_w4t946h", "template_q1u48ep", {
            name: name,
            phone: phone,
            email: email,
            task: task
        }, "rx91W3rrGPqIyRlSn").then((result)=>{
            console.log("Message Sent, We will get back to you shortly", result.text);
            resetForm(e);
            props.changeCheckboxState();
        }, (error)=>{
            console.log("An error occurred, Please try again", error.text);
        });
    };
    const resetForm = (e)=>{
        props.changeState();
        // e.target.reset();
        resetValues();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `form ${props.isOpen ? `form_opened` : ``}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form__overlay"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form__layer",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form__container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form__header",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "form__title",
                                    children: "\u041D\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "form__close-btn",
                                    type: "reset",
                                    onClick: resetForm
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            method: "post",
                            action: "index.html",
                            name: "application",
                            className: "form__form",
                            noValidate: true,
                            autoComplete: "off",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "name",
                                    type: "text",
                                    minLength: "2",
                                    id: "name",
                                    placeholder: "\u0424\u0418\u041E",
                                    className: "form__input form__input-name",
                                    required: true,
                                    onChange: handleChangeName
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "phone",
                                    type: "text",
                                    id: "phone",
                                    placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                                    minLength: "2",
                                    className: "form__input form__input-phone",
                                    required: true,
                                    onChange: handleChangePhone
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "email",
                                    type: "text",
                                    minLength: "2",
                                    id: "email",
                                    placeholder: "\u041F\u043E\u0447\u0442\u0430",
                                    className: "form__input form__input-email",
                                    required: true,
                                    onChange: handleChangeEmail
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "task",
                                    type: "text",
                                    minLength: "2",
                                    id: "task",
                                    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",
                                    className: "form__input form__input-task",
                                    required: true,
                                    onChange: handleChangeTask
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "form__checkbox checkbox",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: `checkbox__label ${props.isCheckboxActive ? `checkbox__label_active` : ``}`,
                                            onClick: props.changeCheckboxState,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "checkbox",
                                                className: "checkbox__container"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "checkbox__text",
                                            children: "\u042F \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: `form__submit ${props.isCheckboxActive && name && phone && email && task ? `form__submit_active` : ``}`,
                                    disabled: !props.isCheckboxActive || !name || !phone || !email || !task,
                                    children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ })

};
;