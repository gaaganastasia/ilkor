"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: ./pages/_app.js




// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("noscript", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://mc.yandex.ru/watch/89240992",
                        style: {
                            position: "absolute",
                            left: "-9999px"
                        },
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.NextSeo, {
                title: "ILKOR",
                description: "\u043F\u0440\u043E\u0434\u0430\u044E\u0449\u0438\u0439 \u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
};


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(129));
module.exports = __webpack_exports__;

})();