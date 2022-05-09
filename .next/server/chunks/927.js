"use strict";
exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(601);
/* harmony import */ var react_collapse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_collapse__WEBPACK_IMPORTED_MODULE_2__);


// import "./Services.module.css";

function Services(props) {
    const height = "auto";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "services",
        id: "services",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "services__header",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "services__title",
                        children: "\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "services__subtitle",
                        children: "\u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0440\u0430\u0431\u043E\u0442 \u043C\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u043F\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u043C\u0443 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044E: \u0434\u0435\u043B\u0430\u0435\u043C \u0441\u0430\u0439\u0442 \u0438 \u043F\u0440\u043E\u0434\u0432\u0438\u0433\u0430\u0435\u043C \u0435\u0433\u043E \u043D\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430\u0445. \u041D\u043E \u0442\u0430\u043A\u0436\u0435 \u043C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u044B \u0434\u043B\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0438\u043B\u0438 \u0441\u0430\u0439\u0442\u043E\u0432. \u041C\u043E\u0436\u0435\u043C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u043B\u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443 \u043D\u0430 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u0441\u0430\u0439\u0442."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "services__content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "services__service service",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: `service__more-btn ${props.isDevOpen ? `service__close-btn` : ``}`,
                                onClick: props.changeDevState
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "service__title",
                                children: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u043E\u0432"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_collapse__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
                                isOpened: props.isDevOpen,
                                initialStyle: {
                                    height: 0,
                                    overflow: "hidden"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        height
                                    },
                                    className: "service__stages",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "service__description",
                                            children: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u0430 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u043F\u043E\u0434 \u0441\u043E\u0431\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438 \u0432\u0435\u0440\u0441\u0442\u043A\u0443 \u0441\u0430\u0439\u0442\u0430. \u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u043C\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044E, \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u0430\u043D\u0430\u043B\u0438\u0437 \u043D\u0438\u0448\u0438 \u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432. \u0412 \u043D\u0430\u0447\u0430\u043B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437 \u044D\u0442\u0430\u043F\u043E\u0432 \u043C\u044B \u0441\u043E\u0437\u0432\u0430\u043D\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u0441 \u0412\u0430\u043C\u0438 \u0438 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044E \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u0444\u043E\u0440\u043C\u0430\u0442\u0435."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0411\u0440\u0438\u0444\u0438\u043D\u0433"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "1 \u0434\u0435\u043D\u044C"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0422\u0417"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "4 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "3 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0414\u0438\u0437\u0430\u0439\u043D \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "4 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u044B"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "3 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0412\u0435\u0440\u0441\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u0430"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "7 \u0434\u043D\u0435\u0439"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__last",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "service___time",
                                                    children: "22 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "service__order-btn",
                                                    children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "services__service service",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: `service__more-btn ${props.isLayoutOpen ? `service__close-btn` : ``}`,
                                onClick: props.changeLayoutState
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "service__title",
                                children: "\u0432\u0435\u0440\u0441\u0442\u043A\u0430"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_collapse__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
                                isOpened: props.isLayoutOpen,
                                initialStyle: {
                                    height: 0,
                                    overflow: "hidden"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        height
                                    },
                                    className: "service__stages",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "service__description",
                                            children: "\u0415\u0441\u043B\u0438 \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u043C\u0430\u043A\u0435\u0442 \u0441\u0430\u0439\u0442\u0430, \u0442\u043E \u0432\u0435\u0440\u0441\u0442\u043A\u0443 \u0441\u0430\u0439\u0442\u0430 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0440\u0443\u0447\u0438\u0442\u044C \u043D\u0430\u043C. \u041C\u044B \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E, \u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0451\u043D\u043D\u044B\u0445 \u0441\u0440\u043E\u043A\u043E\u0432."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u043C\u0430\u043A\u0435\u0442\u0430"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "1 \u0434\u0435\u043D\u044C"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0412\u0435\u0440\u0441\u0442\u043A\u0430"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "4 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "1 \u0434\u0435\u043D\u044C"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043D\u0430 \u0445\u043E\u0441\u0442\u0438\u043D\u0433 / CMS"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "1 \u0434\u0435\u043D\u044C"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "1 \u0434\u0435\u043D\u044C"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__last",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "service___time",
                                                    children: "8 \u0434\u043D\u0435\u0439"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "service__order-btn",
                                                    children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "services__service service",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: `service__more-btn ${props.isDesignOpen ? `service__close-btn` : ``}`,
                                onClick: props.changeDesignState
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "service__title",
                                children: "\u0414\u0438\u0437\u0430\u0439\u043D"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_collapse__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
                                isOpened: props.isDesignOpen,
                                initialStyle: {
                                    height: 0,
                                    overflow: "hidden"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        height
                                    },
                                    className: "service__stages",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "service__description",
                                            children: "\u0415\u0441\u043B\u0438 \u0412\u0430\u043C \u043D\u0443\u0436\u0435\u043D \u043F\u0440\u043E\u0434\u0430\u044E\u0449\u0438\u0439 \u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0441\u0430\u0439\u0442\u0430, \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438,\u0442\u043E \u043C\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u0438\u0442\u044C \u0412\u0430\u0448\u0443 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044C. \u041D\u0430\u0448\u0438 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u044B \u043D\u0430\u0439\u0434\u0443\u0442 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043B\u044E\u0431\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0435 \u0438 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0435\u0448\u0430\u0442 \u043B\u044E\u0431\u0443\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0411\u0440\u0438\u0444\u0438\u043D\u0433"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "1 \u0434\u0435\u043D\u044C"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0410\u043D\u0430\u043B\u0438\u0437 \u0426\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "2 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u043F\u043E\u0434\u0431\u043E\u0440 \u0440\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043E\u0432"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "2 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u041F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "3 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0414\u0438\u0437\u0430\u0439\u043D \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "4 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0414\u0438\u0437\u0430\u0439\u043D \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043E\u0432"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "3 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__last",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "service___time",
                                                    children: "15 \u0434\u043D\u0435\u0439"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "service__order-btn",
                                                    children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "services__service service",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: `service__more-btn ${props.isAdOpen ? `service__close-btn` : ``}`,
                                onClick: props.changeAdState
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "service__title",
                                children: "\u0420\u0435\u043A\u043B\u0430\u043C\u0430"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_collapse__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
                                isOpened: props.isAdOpen,
                                initialStyle: {
                                    height: 0,
                                    overflow: "hidden"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        height
                                    },
                                    className: "service__stages",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "service__description",
                                            children: "\u041E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0443\u0441\u043B\u0443\u0433\u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0433\u043E \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u0430. \u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C \u0441\u0430\u0439\u0442, \u0430 \u0412\u044B \u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0435? \u041C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433\u0438 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438\u043C\u0435\u044E\u0442 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u043F\u044B\u0442 \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u0441\u0444\u0435\u0440\u0430\u0445 \u0440\u0435\u043A\u043B\u0430\u043C\u044B, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0430\u043C \u0442\u0430\u043A \u043B\u0435\u0433\u043A\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044E \u0412\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0411\u0440\u0438\u0444\u0438\u043D\u0433"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "1 \u0434\u0435\u043D\u044C"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u0410\u043D\u0430\u043B\u0438\u0437 \u0426\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "2 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u044B"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "2 \u0434\u043D\u044F"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__stage stage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__title",
                                                    children: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "stage__time",
                                                    children: "1 \u0434\u0435\u043D\u044C"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "stage__more-btn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "service__last",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "service___time",
                                                    children: "6 \u0434\u043D\u0435\u0439"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "service__order-btn",
                                                    children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);


/***/ })

};
;