(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{5247:function(e,t,n){"use strict";n.d(t,{ZP:function(){return s}});const r={_origin:"https://api.emailjs.com"},a=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class o{constructor(e){this.status=e.status,this.text=e.responseText}}const i=(e,t,n={})=>new Promise(((a,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",(({target:e})=>{const t=new o(e);200===t.status||"OK"===t.text?a(t):i(t)})),s.addEventListener("error",(({target:e})=>{i(new o(e))})),s.open("POST",r._origin+e,!0),Object.keys(n).forEach((e=>{s.setRequestHeader(e,n[e])})),s.send(t)}));var s={init:(e,t="https://api.emailjs.com")=>{r._userID=e,r._origin=t},send:(e,t,n,o)=>{const s=o||r._userID;a(s,e,t);const c={lib_version:"3.6.2",user_id:s,service_id:e,template_id:t,template_params:n};return i("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})},sendForm:(e,t,n,o)=>{const s=o||r._userID,c=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(n);a(s,e,t);const l=new FormData(c);return l.append("lib_version","3.6.2"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",s),i("/api/v1.0/email/send-form",l)}}},1792:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Form/Form",function(){return n(5722)}])},5722:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7294),o=n(5247);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(e){var t=s(a.useState(""),2),n=t[0],i=t[1],c=s(a.useState(""),2),l=c[0],u=c[1],m=s(a.useState(""),2),p=m[0],d=m[1],h=s(a.useState(""),2),f=h[0],_=h[1],x=function(t){e.changeState(),i(""),u(""),d(""),_("")};return(0,r.jsxs)("div",{className:"form ".concat(e.isOpen?"form_opened":""),children:[(0,r.jsx)("div",{className:"form__overlay"}),(0,r.jsx)("div",{className:"form__layer",children:(0,r.jsxs)("div",{className:"form__container",children:[(0,r.jsxs)("div",{className:"form__header",children:[(0,r.jsx)("p",{className:"form__title",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"}),(0,r.jsx)("button",{className:"form__close-btn",type:"reset",onClick:x})]}),(0,r.jsxs)("form",{method:"post",action:"index.html",name:"application",className:"form__form",noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault(),o.ZP.send("service_w4t946h","template_q1u48ep",{name:n,phone:l,email:p,task:f},"rx91W3rrGPqIyRlSn").then((function(n){console.log("Message Sent, We will get back to you shortly",n.text),x(t),e.changeCheckboxState()}),(function(e){console.log("An error occurred, Please try again",e.text)}))},children:[(0,r.jsx)("input",{name:"name",type:"text",minLength:"2",id:"name",placeholder:"\u0424\u0418\u041e",className:"form__input form__input-name",required:!0,onChange:function(e){i(e.target.value)}}),(0,r.jsx)("input",{name:"phone",type:"text",id:"phone",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",minLength:"2",className:"form__input form__input-phone",required:!0,onChange:function(e){u(e.target.value)}}),(0,r.jsx)("input",{name:"email",type:"text",minLength:"2",id:"email",placeholder:"\u041f\u043e\u0447\u0442\u0430",className:"form__input form__input-email",required:!0,onChange:function(e){d(e.target.value)}}),(0,r.jsx)("input",{name:"task",type:"text",minLength:"2",id:"task",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",className:"form__input form__input-task",required:!0,onChange:function(e){_(e.target.value)}}),(0,r.jsx)("span",{}),(0,r.jsxs)("div",{className:"form__checkbox checkbox",children:[(0,r.jsx)("label",{className:"checkbox__label ".concat(e.isCheckboxActive?"checkbox__label_active":""),onClick:e.changeCheckboxState,children:(0,r.jsx)("input",{type:"checkbox",className:"checkbox__container"})}),(0,r.jsx)("p",{className:"checkbox__text",children:"\u042f \u0434\u0430\u044e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]}),(0,r.jsx)("button",{type:"submit",className:"form__submit ".concat(e.isCheckboxActive&&n&&l&&p&&f?"form__submit_active":""),disabled:!e.isCheckboxActive||!n||!l||!p||!f,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})]})]})})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=1792,e(e.s=t);var t}));var t=e.O();_N_E=t}]);