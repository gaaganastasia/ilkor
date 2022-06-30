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


//import validator from "../Validator/Validator";
function Form(props) {
    function useFormWithValidation() {
        const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
        const [isValid, setIsValid] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
        const handleChange = (event)=>{
            const target = event.target;
            const name = target.name;
            const value = target.value;
            setValues({
                ...values,
                [name]: value
            });
            setIsValid(target.closest("form").checkValidity());
        };
        const resetForm = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((newValues = {}, newIsValid = false)=>{
            setValues(newValues);
            setIsValid(newIsValid);
        }, [
            setValues,
            setIsValid
        ]);
        return {
            values,
            handleChange,
            isValid,
            resetForm
        };
    }
    const { values: values1 , handleChange: handleChange1 , isValid: isValid1 , resetForm: resetForm1  } = useFormWithValidation();
    function handleSubmit(e) {
        e.preventDefault();
        if (!values1.name || !values1.phone || !values1.email || !values1.task) {
            return;
        }
        props.onSendRequest(values1.name, values1.phone, values1.email, values1.task, e, resetForm1);
    }
    const reset = (e)=>{
        props.changeState();
        e.target.closest(".form").querySelector(".form__form").reset();
        resetForm1();
        props.setError("");
        props.setMessage("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `form ${props.isOpen ? `form_opened` : ``}`,
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
                        onClick: reset
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
                        maxLength: "100",
                        id: "name",
                        placeholder: "\u0424\u0418\u041E",
                        className: "form__input form__input-name",
                        required: true,
                        onChange: handleChange1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        name: "phone",
                        type: "text",
                        id: "phone",
                        placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                        minLength: "2",
                        maxLength: "50",
                        className: "form__input form__input-phone",
                        required: true,
                        onChange: handleChange1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        name: "email",
                        type: "text",
                        minLength: "2",
                        maxLength: "100",
                        id: "email",
                        placeholder: "\u041F\u043E\u0447\u0442\u0430",
                        className: "form__input form__input-email",
                        required: true,
                        onChange: handleChange1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        name: "task",
                        type: "text",
                        minLength: "2",
                        maxLength: "500",
                        id: "task",
                        rows: "5",
                        placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",
                        className: "form__input form__input-task",
                        required: true,
                        onChange: handleChange1
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form__checkbox checkbox",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                className: "checkbox__label",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "checkbox",
                                        className: "checkbox__container"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `visible-checkbox ${props.checkboxState ? `visible-checkbox_active` : ``}`,
                                        onClick: props.onSendCheckboxState
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "checkbox__text",
                                children: "\u042F \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: `form__submit ${props.checkboxState && isValid1 ? `form__submit_active` : ``}`,
                        disabled: !props.checkboxState || !isValid1,
                        children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `form__message form__message_ok ${props.message && props.message.length !== 0 ? `form__message_visible` : ``}`,
                        children: props.message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `form__message form__message_err ${props.message && props.message.length !== 0 ? `form__message_visible` : ``}`,
                        children: props.error
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ })

};
;