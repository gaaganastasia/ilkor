(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80],{6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},3732:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/StartProject/StartProject",function(){return n(1170)}])},2937:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),o=n(8850),i=n.n(o);function u(){return(0,r.jsx)("div",{className:"marquee",style:{whiteSpace:"nowrap"},children:(0,r.jsx)(i(),{direction:"left",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"})})}},1170:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=(n(7294),n(2937));t.default=function(e){return(0,r.jsxs)("section",{className:"start-project",id:"start-project",children:[(0,r.jsx)(o.default,{}),(0,r.jsx)("button",{type:"button",className:"start-project__btn",onClick:e.changeFormState,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"}),(0,r.jsx)("p",{className:"start-project__number",children:"+7 (919) 847 39 46"})]})}},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8850:function(e,t,n){!function(e,t,n){"use strict";var r="default"in t?t.default:t;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?p(e):t}function y(e){var t=f();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function d(e){return"translateX(".concat(e,"px)")}n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var _={always:0,overflow:100},v=function(e){a(n,e);var t=y(n);function n(e){var r;return o(this,n),s(p(r=t.call(this,e)),"_animationState",{lastRequestId:null,lastTickTime:null}),s(p(r),"_pos",{x:null}),s(p(r),"_refs",{container:null,inner:null}),r.state={disableScroll:void 0},r._setContainerRef=r._setContainerRef.bind(p(r)),r._setInnerRef=r._setInnerRef.bind(p(r)),r._tick=r._tick.bind(p(r)),r._hasRefs=r._hasRefs.bind(p(r)),r._shouldAnimate=r._shouldAnimate.bind(p(r)),r._getMarqueeFillPercent=r._getMarqueeFillPercent.bind(p(r)),r}return u(n,[{key:"componentDidMount",value:function(){this._resetPosition(),this._requestAnimationWithDelay()}},{key:"componentDidUpdate",value:function(){this._resetPosition(),this._requestAnimationWithDelay()}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this._animationState.lastRequestId)}},{key:"_setContainerRef",value:function(e){this._refs.container=e}},{key:"_setInnerRef",value:function(e){this._refs.inner=e}},{key:"_updateScrollState",value:function(){var e=this.state.disableScroll;if(this._hasRefs()){var t=!this._shouldAnimate();e!==t&&(this.setState({disableScroll:t}),this._refs.inner.style.transform=d(0))}}},{key:"_resetPosition",value:function(){this._pos.x=this._getInitialPosition(),this._shouldAnimate()&&(this._refs.inner.style.transform=d(this._pos.x)),this._updateScrollState()}},{key:"_requestAnimationWithDelay",value:function(){var e=this.props.delay;setTimeout(this._requestAnimationIfNeeded.bind(this),e)}},{key:"_requestAnimationIfNeeded",value:function(){this._animationState.lastRequestId=window.requestAnimationFrame(this._tick)}},{key:"_getMarqueeFillPercent",value:function(){return this._hasRefs()&&this._refs.container.clientWidth>0?this._refs.inner.scrollWidth/2*100/this._refs.container.clientWidth:0}},{key:"_hasRefs",value:function(){return this._refs.container&&this._refs.inner}},{key:"_shouldAnimate",value:function(){var e=this.props.scrollWhen;return this._hasRefs()&&this._refs.inner.scrollWidth>this._refs.container.clientWidth&&this._getMarqueeFillPercent()>_[e]}},{key:"_tick",value:function(e){var t=this._animationState.lastTickTime;t&&this._updateInnerPosition(e-t),this._animationState.lastTickTime=e,this._requestAnimationIfNeeded(),this._updateScrollState()}},{key:"_updateInnerPosition",value:function(e){var t=this,n=this.props,r=n.direction,o=n.speed,i=n.childMargin,u=function(){if("right"===r){var n=t._pos.x+e*o;return n>-i?t._getInitialPosition():n}if("left"===r){var u=t._pos.x-e*o;return u<-t._getWidthSafely()/2-i?t._getInitialPosition():u}return t._pos.x}();this._pos.x=u,this._shouldAnimate()&&(this._refs.inner.style.transform=d(this._pos.x))}},{key:"_getInitialPosition",value:function(){var e=this.props,t=e.direction,n=e.childMargin;return"right"===t?-this._getWidthSafely()/2-n:-n}},{key:"_getWidthSafely",value:function(){return this._refs&&this._refs.inner?this._refs.inner.clientWidth:0}},{key:"_getStyleSafely",value:function(){return this._refs&&this._refs.inner?this._refs.inner.style:null}},{key:"render",value:function(){var e=this.props,t=e.childMargin,n=e.children,o=this.state.disableScroll,i=function(e){var i=e.invisible;return r.createElement("span",{style:{margin:o?"0":"0 ".concat(t,"px"),visibility:i?"hidden":""}},n)};return r.createElement("div",{ref:this._setContainerRef,style:{overflowX:"hidden"}},r.createElement("div",{ref:this._setInnerRef,style:{display:"inline-block"}},r.createElement(i,null),r.createElement(i,{invisible:o})))}}]),n}(t.Component);s(v,"propTypes",{speed:n.number,direction:n.oneOf(["left","right"]),delay:n.number,childMargin:n.number,children:n.node,scrollWhen:n.oneOf(Object.keys(_))}),s(v,"defaultProps",{speed:.04,delay:3e3,direction:"right",childMargin:15,children:null,scrollWhen:"always"}),e.ScrollWhen=_,e.default=v,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(9173),n(5697))},8461:function(e,t,n){"use strict";var r=n(6086),o="function"===typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,_="function"===typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function S(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}function k(){}function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=S.prototype;var w=g.prototype=new k;w.constructor=g,r(w,S.prototype),w.isPureReactComponent=!0;var P={current:null},R=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,o={},u=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(u=""+t.key),t)R.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:i,type:e,key:u,ref:s,props:o,_owner:P.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===i}var E=/\/+/g,C=[];function I(e,t,n,r){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function A(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var s=!1;if(null===e)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case u:s=!0}}if(s)return n(r,e,""===t?"."+q(e,0):t),1;if(s=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var c=t+q(o=e[a],a);s+=A(o,c,n,r)}else if(null===e||"object"!==typeof e?c=null:c="function"===typeof(c=_&&e[_]||e["@@iterator"])?c:null,"function"===typeof c)for(e=c.call(e),a=0;!(o=e.next()).done;)s+=A(o=o.value,c=t+q(o,a++),n,r);else if("object"===o)throw n=""+e,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return s}function $(e,t,n){return null==e?0:A(e,"",t,n)}function q(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function W(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?N(e,r,n,(function(e){return e})):null!=e&&(j(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function N(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(E,"$&/")+"/"),$(e,M,t=I(t,i,r,o)),T(t)}var D={current:null};function F(){var e=D.current;if(null===e)throw Error(v(321));return e}var U={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return N(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,W,t=I(null,null,t,n)),T(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return N(e,t,null,(function(e){return e})),t},only:function(e){if(!j(e))throw Error(v(143));return e}},t.Component=S,t.Fragment=s,t.Profiler=c,t.PureComponent=g,t.StrictMode=a,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error(v(267,e));var o=r({},e.props),u=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=P.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)R.call(t,l)&&!x.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var f=0;f<l;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:i,type:e.type,key:u,ref:s,props:o,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.14.0"},9173:function(e,t,n){"use strict";e.exports=n(8461)}},function(e){e.O(0,[774,888,179],(function(){return t=3732,e(e.s=t);var t}));var t=e.O();_N_E=t}]);