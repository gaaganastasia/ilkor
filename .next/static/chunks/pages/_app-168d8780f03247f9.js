(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(8591)}])},8591:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return f}});var r=o(5893),a=(o(7595),o(5447),o(9008)),n=o.n(a),p=o(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},i.apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var c={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},h=function(e,t,o){void 0===t&&(t=[]);var r=void 0===o?{}:o,a=r.defaultWidth,n=r.defaultHeight;return t.reduce((function(t,o,r){return t.push(p.createElement("meta",{key:"og:"+e+":0"+r,property:"og:"+e,content:o.url})),o.alt&&t.push(p.createElement("meta",{key:"og:"+e+":alt0"+r,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(p.createElement("meta",{key:"og:"+e+":secure_url0"+r,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(p.createElement("meta",{key:"og:"+e+":type0"+r,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(p.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:o.width.toString()})):a&&t.push(p.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:a.toString()})),o.height?t.push(p.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:o.height.toString()})):n&&t.push(p.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:n.toString()})),t}),[])},s=function(e){var t,o,r,a=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var n="";e.title?(n=e.title,c.templateTitle&&(n=c.templateTitle.replace(/%s/g,(function(){return n})))):e.defaultTitle&&(n=e.defaultTitle),n&&a.push(p.createElement("title",{key:"title"},n));var l,s,d=e.noindex||c.noindex||e.dangerouslySetAllPagesToNoIndex,u=e.nofollow||c.nofollow||e.dangerouslySetAllPagesToNoFollow,m="";if(e.robotsProps){var g=e.robotsProps,f=g.nosnippet,y=g.maxSnippet,G=g.maxImagePreview,k=g.maxVideoPreview,v=g.noarchive,b=g.noimageindex,E=g.notranslate,w=g.unavailableAfter;m=(f?",nosnippet":"")+(y?",max-snippet:"+y:"")+(G?",max-image-preview:"+G:"")+(v?",noarchive":"")+(w?",unavailable_after:"+w:"")+(b?",noimageindex":"")+(k?",max-video-preview:"+k:"")+(E?",notranslate":"")}(d||u?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),a.push(p.createElement("meta",{key:"robots",name:"robots",content:(d?"noindex":"index")+","+(u?"nofollow":"follow")+m}))):a.push(p.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),e.description&&a.push(p.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&a.push(p.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){a.push(p.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&a.push(p.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&a.push(p.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&a.push(p.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&a.push(p.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||n)&&a.push(p.createElement("meta",{key:"og:title",property:"og:title",content:(null==(l=e.openGraph)?void 0:l.title)||n}));(null!=(o=e.openGraph)&&o.description||e.description)&&a.push(p.createElement("meta",{key:"og:description",property:"og:description",content:(null==(s=e.openGraph)?void 0:s.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&a.push(p.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var _=e.openGraph.type.toLowerCase();a.push(p.createElement("meta",{key:"og:type",property:"og:type",content:_})),"profile"===_&&e.openGraph.profile?(e.openGraph.profile.firstName&&a.push(p.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&a.push(p.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&a.push(p.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&a.push(p.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===_&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){a.push(p.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&a.push(p.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&a.push(p.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){a.push(p.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===_&&e.openGraph.article?(e.openGraph.article.publishedTime&&a.push(p.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&a.push(p.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&a.push(p.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){a.push(p.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&a.push(p.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){a.push(p.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==_&&"video.episode"!==_&&"video.tv_show"!==_&&"video.other"!==_||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&a.push(p.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&a.push(p.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){a.push(p.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){a.push(p.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&a.push(p.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&a.push(p.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){a.push(p.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&a.push(p.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&a.push.apply(a,h("image",e.openGraph.images,{defaultWidth:c.defaultOpenGraphImageWidth,defaultHeight:c.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&a.push.apply(a,h("video",e.openGraph.videos,{defaultWidth:c.defaultOpenGraphVideoWidth,defaultHeight:c.defaultOpenGraphVideoHeight})),e.openGraph.locale&&a.push(p.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&a.push(p.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&a.push(p.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,o,r;a.push(p.createElement("meta",i({key:"meta:"+(null!=(t=null!=(o=null!=(r=e.keyOverride)?r:e.name)?o:e.property)?t:e.httpEquiv)},e)))})),null!=(r=e.additionalLinkTags)&&r.length&&e.additionalLinkTags.forEach((function(e){var t;a.push(p.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),a},d=(p.Component,function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.noindex,r=void 0!==o&&o,a=e.nofollow,i=e.robotsProps,l=e.description,c=e.canonical,h=e.openGraph,d=e.facebook,u=e.twitter,m=e.additionalMetaTags,g=e.titleTemplate,f=e.mobileAlternate,y=e.languageAlternates,G=e.additionalLinkTags;return p.createElement(n(),null,s({title:t,noindex:r,nofollow:a,robotsProps:i,description:l,canonical:c,facebook:d,openGraph:h,additionalMetaTags:m,twitter:u,titleTemplate:g,mobileAlternate:f,languageAlternates:y,additionalLinkTags:G}))},t}(p.Component)),u=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"});new RegExp("["+Object.keys(u).join("")+"]","g");function m(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function g(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){m(e,t,o[t])}))}return e}function f(e){var t=e.Component,o=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{title:"ILKOR",description:"\u043f\u0440\u043e\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u0430\u0439\u0442 \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430"}),(0,r.jsx)(t,g({},o))]})}},7595:function(){},5447:function(){},9008:function(e,t,o){e.exports=o(3121)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(880)}));var o=e.O();_N_E=o}]);