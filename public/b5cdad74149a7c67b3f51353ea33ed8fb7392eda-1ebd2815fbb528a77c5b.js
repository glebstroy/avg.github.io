(self.webpackChunkavg=self.webpackChunkavg||[]).push([[502],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,c){if(e===c)return!0;if(e&&c&&"object"==typeof e&&"object"==typeof c){if(e.constructor!==c.constructor)return!1;var o,s,l,f;if(Array.isArray(e)){if((o=e.length)!=c.length)return!1;for(s=o;0!=s--;)if(!i(e[s],c[s]))return!1;return!0}if(n&&e instanceof Map&&c instanceof Map){if(e.size!==c.size)return!1;for(f=e.entries();!(s=f.next()).done;)if(!c.has(s.value[0]))return!1;for(f=e.entries();!(s=f.next()).done;)if(!i(s.value[1],c.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&c instanceof Set){if(e.size!==c.size)return!1;for(f=e.entries();!(s=f.next()).done;)if(!c.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(c)){if((o=e.length)!=c.length)return!1;for(s=o;0!=s--;)if(e[s]!==c[s])return!1;return!0}if(e.constructor===RegExp)return e.source===c.source&&e.flags===c.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===c.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===c.toString();if((o=(l=Object.keys(e)).length)!==Object.keys(c).length)return!1;for(s=o;0!=s--;)if(!Object.prototype.hasOwnProperty.call(c,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=o;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!i(e[l[s]],c[l[s]]))return!1;return!0}return e!=e&&c!=c}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function f(){s=e(l.map((function(e){return e.props}))),u.canUseDOM?t(s):n&&(s=n(s))}var u=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var c=a.prototype;return c.UNSAFE_componentWillMount=function(){l.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},c.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return c(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(u,"canUseDOM",o),u}}},3133:function(e,t,n){"use strict";var r=n(7294);t.Z=function(){var e="undefined"!=typeof window?window.innerWidth:0,t=r.useState(e),n=t[0],a=t[1];return r.useEffect((function(){window.addEventListener("resize",(function(){a(window.innerWidth)}))}),[]),n}},2518:function(e,t,n){"use strict";var r=n(5444),a=n(7294),i=n(8631),c=n(370);t.Z=function(e){var t=e.children,n=e.reverse,o=e.type,s=e.to,l=a.useState(!1),f=l[0],u=l[1],d=(0,i.I0)();switch(o){case"feedback":return a.createElement("div",{className:"button-box "},a.createElement("button",{className:"button "+(n?"button-reverse":""),onClick:function(){d((0,c.Z)(!0))}},t));case"burger":return a.createElement("button",{className:"burger "+(f?"burger__open":""),onClick:function(){u((function(e){return!e})),d((0,c.x)(!f))}},a.createElement("div",{className:"burger_line burger_first"}),a.createElement("div",{className:"burger_line burger_second"}),a.createElement("div",{className:"burger_line burger_third"}));case"link":return a.createElement("div",{className:"button-box "},a.createElement(r.Link,{className:"button "+(n?"button-reverse":""),to:s},t));default:return a.createElement("div",{className:"button-box "},a.createElement("a",{className:"button "+(n?"button-reverse":""),href:"/"},t))}}},4607:function(e,t,n){"use strict";n.d(t,{z:function(){return r.Z}});var r=n(2518);n(7294)},9313:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(7294),a=n(5444),i=n(6125),c=n(2518),o=n(8631),s=n(370),l=n(3133),f=[{name:"Главная",link:"/"},{name:"Продукция",link:"/products"},{name:"Услуги",link:"/services"},{name:"Наши работы",link:"/portfolio"},{name:"О нас",link:"/about"}];var u=function(){var e=(0,l.Z)(),t=(0,o.I0)(),n=(0,o.v9)((function(e){return e.button.isOpen})),i=function(){return t((0,s.x)(!1))};return r.createElement("nav",{style:e<920?n?{display:"block"}:{display:"none"}:{display:"block"}},r.createElement("ul",null,f.map((function(e,t){return r.createElement(a.Link,{to:e.link,onClick:i,key:e.name+t},r.createElement("li",null,e.name))}))))};var d=function(e){var t=e.type,a=e.content,c=e.map;switch(t){case"phone":return r.createElement("div",{className:"pin"},r.createElement(i.S,{src:"../../images/icons/phone-min-white.png",alt:"",__imageData:n(3777)}),r.createElement("a",{href:"tel:"+a},a));case"clock":return r.createElement("div",{className:"pin"},r.createElement(i.S,{src:"../../images/icons/clock-min-white.png",alt:"",__imageData:n(711)}),r.createElement("p",null,a));case"email":return r.createElement("div",{className:"pin"},r.createElement(i.S,{src:"../../images/icons/email-min-white.png",alt:"",__imageData:n(2607)}),r.createElement("a",{href:"mailto:"+a},a));case"address":return r.createElement("div",{className:"pin"},r.createElement(i.S,{src:"../../images/icons/address-min-white.png",alt:"",__imageData:n(2892)}),c?r.createElement("a",{href:c,target:"_blank",rel:"noreferrer"},a):r.createElement("p",null,a))}};var p=function(){return r.createElement("div",{className:"heaader__desktop__info",style:{backgroundColor:"#4293dd",color:"#ffffff",display:"flex",justifyContent:"center",alignItems:"center"}},r.createElement(d,{type:"clock",content:"09:00 - 20:00"}),r.createElement(d,{type:"phone",content:"+7(915) 344-02-41"}),r.createElement(d,{type:"address",content:"МО, Солнечнагорский район, д.Соколово",map:"https://yandex.ru/maps/-/CCUufDARHC"}))};var m=function(){return r.createElement("div",{className:"header__desktop"},r.createElement(p,null),r.createElement("div",{className:"container"},r.createElement("div",{className:"header__desktop__nav"},r.createElement(a.Link,{to:"/"},r.createElement(i.S,{src:"../../images/logo.png",alt:"",__imageData:n(5301)})),r.createElement("div",{style:{display:"flex"}},r.createElement(u,null),r.createElement(c.Z,{type:"feedback"},"Заказать звонок")))))},b=n(4607);var w=function(){var e=(0,l.Z)(),t=(0,o.I0)(),c=function(){return t((0,s.x)(!1))};return r.createElement("div",{className:"header__mobile"},r.createElement("div",{style:{padding:"0 20px",alignItems:"center"}},e>540?r.createElement(a.Link,{to:"/",onClick:c},r.createElement(i.S,{src:"../../images/logo.png",alt:"",style:{margin:"10px 0"},__imageData:n(5301)})):r.createElement(a.Link,{to:"/",onClick:c},r.createElement(i.S,{src:"../../images/logo-alt.png",alt:"",__imageData:n(1404)})),r.createElement(b.z,{type:"burger"})),r.createElement(u,null))};var h=function(){var e=(0,l.Z)();return r.createElement("header",null,e<920?r.createElement(w,null):r.createElement(m,null))},g=function(){return r.createElement("footer",null,r.createElement("div",{className:"container"},r.createElement("div",{className:"footer__info"},r.createElement("div",{className:"footer__info__logo"},r.createElement(i.S,{src:"../images/logo.png",alt:"avg плитка",__imageData:n(2217)}),r.createElement("p",{style:{color:"#212121"}},"Укладка тротуарной плитки по Москве и Московской области")),r.createElement("div",{className:"footer__info__about"},r.createElement("h4",null,"О нас"),r.createElement("ul",null,r.createElement("li",null,r.createElement(a.Link,{to:"/portfolio"},"Наши работы")),r.createElement("li",null,r.createElement(a.Link,{to:"/about"},"Производство")),r.createElement("li",null,r.createElement(a.Link,{to:"/"},"Отзывы")))),r.createElement("div",{className:"footer__info__services"},r.createElement("h4",null,"Услуги"),r.createElement("ul",null,r.createElement("li",null,r.createElement(a.Link,{to:"/laying"},"Монтаж продукции")),r.createElement("li",null,r.createElement(a.Link,{to:"/improvement"},"Благоустройство территорий")),r.createElement("li",null,r.createElement(a.Link,{to:"/delivery"},"Доставка материалов")))),r.createElement("div",{className:"footer__info__contacts"},r.createElement("h4",null,"Контакты"),r.createElement("ul",null,r.createElement("li",null,r.createElement(i.S,{src:"../images/icons/phone-min.png",alt:"ag-phone-number",width:22,__imageData:n(3338)}),r.createElement("a",{href:"tel:+7(915) 344-02-41"},"+7 (915) 344-02-41")),r.createElement("li",null,r.createElement(i.S,{src:"../images/icons/clock-min.png",alt:"avg-open-time",width:22,__imageData:n(9177)}),r.createElement("p",null,"09:00 - 20:00")),r.createElement("li",null,r.createElement(i.S,{src:"../images/icons/address-min.png",alt:"avg-address",width:28,__imageData:n(2226)}),r.createElement("p",{style:{marginLeft:"12px"}},"Московская область, Солненагорский район, д.Соколово"))))),r.createElement("div",{className:"copyright"},"© ",(new Date).getFullYear()," ",r.createElement(a.Link,{to:"/"},"AVG Plitka")," powered by"," ",r.createElement("a",{href:"https://www.bigway8.com",target:"_blank",rel:"noreferrer"},"Bigway Studio"))))},y=function(e){var t,n=e.children,i=(0,a.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(h,{siteTitle:null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title}),r.createElement("div",null,r.createElement("main",null,n)),r.createElement(g,null))}},3751:function(e,t,n){"use strict";n.d(t,{Z:function(){return ge}});var r,a,i,c,o=n(7294),s=n(5697),l=n.n(s),f=n(4839),u=n.n(f),d=n(2993),p=n.n(d),m=n(6494),b=n.n(m),w="bodyAttributes",h="htmlAttributes",g="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(y).map((function(e){return y[e]})),"charset"),E="cssText",T="href",k="http-equiv",S="innerHTML",x="itemprop",C="name",O="property",A="rel",_="src",N="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",P="defer",I="encodeSpecialCharacters",M="onChangeClientState",z="titleTemplate",D=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),R=[y.NOSCRIPT,y.SCRIPT,y.STYLE],B="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=G(e,y.TITLE),n=G(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,j);return t||r||void 0},W=function(e){return G(e,M)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),c=0;c<i.length;c++){var o=i[c],s=o.toLowerCase();-1===t.indexOf(s)||n===A&&"canonical"===e[n].toLowerCase()||s===A&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(o)||o!==S&&o!==E&&o!==x||(n=o)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),c=0;c<i.length;c++){var o=i[c],s=b()({},r[o],a[o]);r[o]=s}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,c=e.metaTags,o=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,u=e.title,d=e.titleAttributes;se(y.BODY,r),se(y.HTML,a),oe(u,d);var p={baseTag:le(y.BASE,n),linkTags:le(y.LINK,i),metaTags:le(y.META,c),noscriptTags:le(y.NOSCRIPT,o),scriptTags:le(y.SCRIPT,l),styleTags:le(y.STYLE,f)},m={},b={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(b[e]=p[e].oldTags)})),t&&t(),s(e,m,b)},ce=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),se(y.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),a=r?r.split(","):[],i=[].concat(a),c=Object.keys(t),o=0;o<c.length;o++){var s=c[o],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var f=i.indexOf(s);-1!==f&&i.splice(f,1)}for(var u=i.length-1;u>=0;u--)n.removeAttribute(i[u]);a.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==c.join(",")&&n.setAttribute(B,c.join(","))}},le=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],c=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var o=void 0===t[r]?"":t[r];n.setAttribute(r,o)}n.setAttribute(B,"true"),a.some((function(e,t){return c=t,n.isEqualNode(e)}))?a.splice(c,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,a=ue(n,r),[o.createElement(y.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=fe(n),i=ce(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Z(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case w:case h:return{toComponent:function(){return ue(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===S||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Z(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",c=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(c?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,c=e.metaTags,o=e.noscriptTags,s=e.scriptTags,l=e.styleTags,f=e.title,u=void 0===f?"":f,d=e.titleAttributes;return{base:de(y.BASE,t,r),bodyAttributes:de(w,n,r),htmlAttributes:de(h,a,r),link:de(y.LINK,i,r),meta:de(y.META,c,r),noscript:de(y.NOSCRIPT,o,r),script:de(y.SCRIPT,s,r),style:de(y.STYLE,l,r),title:de(y.TITLE,{title:u,titleAttributes:d},r)}},me=u()((function(e){return{baseTag:Q([T,N],e),bodyAttributes:V(w,e),defer:G(e,P),encode:G(e,I),htmlAttributes:V(h,e),linkTags:$(y.LINK,[A,T],e),metaTags:$(y.META,[C,v,k,O,x],e),noscriptTags:$(y.NOSCRIPT,[S],e),onChangeClientState:W(e),scriptTags:$(y.SCRIPT,[_,S],e),styleTags:$(y.STYLE,[E],e),title:K(e),titleAttributes:V(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),be=(a=me,c=i=function(e){function t(){return F(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(r.type){case y.TITLE:return Y({},a,((t={})[r.type]=c,t.titleAttributes=Y({},i),t));case y.BODY:return Y({},a,{bodyAttributes:Y({},i)});case y.HTML:return Y({},a,{htmlAttributes:Y({},i)})}return Y({},a,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(J(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=J(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.createElement(a,r)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(o.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);be.renderStatic=be.rewind;var we=n(5444);function he(e){var t,n,r=e.description,a=e.keywords,i=e.lang,c=e.meta,s=e.title,l=e.link,f=(0,we.useStaticQuery)("1571979347").site,u=r||f.siteMetadata.description,d=a||f.siteMetadata.keywords,p=null===(t=f.siteMetadata)||void 0===t?void 0:t.title;return o.createElement(be,{htmlAttributes:{lang:i},title:s,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:u},{name:"keywords",content:d},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=f.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(c),link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOriginIsolated:!0},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}].concat(l)})}he.defaultProps={lang:"ru",meta:[],link:[],description:""};var ge=he},3338:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/0c36f9618cc639f33c78f8b07584e6d4/ca121/phone-min.png","srcSet":"/static/0c36f9618cc639f33c78f8b07584e6d4/549c4/phone-min.png 5w,\\n/static/0c36f9618cc639f33c78f8b07584e6d4/ebf64/phone-min.png 10w,\\n/static/0c36f9618cc639f33c78f8b07584e6d4/ca121/phone-min.png 20w","sizes":"(min-width: 20px) 20px, 100vw"},"sources":[{"srcSet":"/static/0c36f9618cc639f33c78f8b07584e6d4/fadb2/phone-min.webp 5w,\\n/static/0c36f9618cc639f33c78f8b07584e6d4/bd5c1/phone-min.webp 10w,\\n/static/0c36f9618cc639f33c78f8b07584e6d4/264f2/phone-min.webp 20w","type":"image/webp","sizes":"(min-width: 20px) 20px, 100vw"}]},"width":22,"height":22}')},3777:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/7a21b1a5c6ab3daa82308f47986df430/ca121/phone-min-white.png","srcSet":"/static/7a21b1a5c6ab3daa82308f47986df430/549c4/phone-min-white.png 5w,\\n/static/7a21b1a5c6ab3daa82308f47986df430/ebf64/phone-min-white.png 10w,\\n/static/7a21b1a5c6ab3daa82308f47986df430/ca121/phone-min-white.png 20w","sizes":"(min-width: 20px) 20px, 100vw"},"sources":[{"srcSet":"/static/7a21b1a5c6ab3daa82308f47986df430/fadb2/phone-min-white.webp 5w,\\n/static/7a21b1a5c6ab3daa82308f47986df430/bd5c1/phone-min-white.webp 10w,\\n/static/7a21b1a5c6ab3daa82308f47986df430/264f2/phone-min-white.webp 20w","type":"image/webp","sizes":"(min-width: 20px) 20px, 100vw"}]},"width":20,"height":20}')},2226:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#4898d8","images":{"fallback":{"src":"/static/6b1ff2705ed42992dae4b848d6af37a4/f9a9c/address-min.png","srcSet":"/static/6b1ff2705ed42992dae4b848d6af37a4/4fc9f/address-min.png 4w,\\n/static/6b1ff2705ed42992dae4b848d6af37a4/3d170/address-min.png 8w,\\n/static/6b1ff2705ed42992dae4b848d6af37a4/f9a9c/address-min.png 16w","sizes":"(min-width: 16px) 16px, 100vw"},"sources":[{"srcSet":"/static/6b1ff2705ed42992dae4b848d6af37a4/13d0a/address-min.webp 4w,\\n/static/6b1ff2705ed42992dae4b848d6af37a4/c5099/address-min.webp 8w,\\n/static/6b1ff2705ed42992dae4b848d6af37a4/94d43/address-min.webp 16w","type":"image/webp","sizes":"(min-width: 16px) 16px, 100vw"}]},"width":28,"height":35}')},711:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ae4503bb7201784fd8eefe4ee825b34c/ca121/clock-min-white.png","srcSet":"/static/ae4503bb7201784fd8eefe4ee825b34c/549c4/clock-min-white.png 5w,\\n/static/ae4503bb7201784fd8eefe4ee825b34c/ebf64/clock-min-white.png 10w,\\n/static/ae4503bb7201784fd8eefe4ee825b34c/ca121/clock-min-white.png 20w","sizes":"(min-width: 20px) 20px, 100vw"},"sources":[{"srcSet":"/static/ae4503bb7201784fd8eefe4ee825b34c/fadb2/clock-min-white.webp 5w,\\n/static/ae4503bb7201784fd8eefe4ee825b34c/bd5c1/clock-min-white.webp 10w,\\n/static/ae4503bb7201784fd8eefe4ee825b34c/264f2/clock-min-white.webp 20w","type":"image/webp","sizes":"(min-width: 20px) 20px, 100vw"}]},"width":20,"height":20}')},2892:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/d2e572c93d9081fe76a8c5b0e31a2efb/f9a9c/address-min-white.png","srcSet":"/static/d2e572c93d9081fe76a8c5b0e31a2efb/4fc9f/address-min-white.png 4w,\\n/static/d2e572c93d9081fe76a8c5b0e31a2efb/3d170/address-min-white.png 8w,\\n/static/d2e572c93d9081fe76a8c5b0e31a2efb/f9a9c/address-min-white.png 16w","sizes":"(min-width: 16px) 16px, 100vw"},"sources":[{"srcSet":"/static/d2e572c93d9081fe76a8c5b0e31a2efb/13d0a/address-min-white.webp 4w,\\n/static/d2e572c93d9081fe76a8c5b0e31a2efb/c5099/address-min-white.webp 8w,\\n/static/d2e572c93d9081fe76a8c5b0e31a2efb/94d43/address-min-white.webp 16w","type":"image/webp","sizes":"(min-width: 16px) 16px, 100vw"}]},"width":16,"height":20}')},5301:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/37e97296887ff0c4ee790c9f014b88bd/029a9/logo.png","srcSet":"/static/37e97296887ff0c4ee790c9f014b88bd/f9b14/logo.png 36w,\\n/static/37e97296887ff0c4ee790c9f014b88bd/3d02d/logo.png 71w,\\n/static/37e97296887ff0c4ee790c9f014b88bd/029a9/logo.png 142w","sizes":"(min-width: 142px) 142px, 100vw"},"sources":[{"srcSet":"/static/37e97296887ff0c4ee790c9f014b88bd/3300d/logo.webp 36w,\\n/static/37e97296887ff0c4ee790c9f014b88bd/efcfd/logo.webp 71w,\\n/static/37e97296887ff0c4ee790c9f014b88bd/feba7/logo.webp 142w","type":"image/webp","sizes":"(min-width: 142px) 142px, 100vw"}]},"width":142,"height":40}')},1404:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/f8d95f0240159c246e8d2221a35ea7aa/1c9ce/logo-alt.png","srcSet":"/static/f8d95f0240159c246e8d2221a35ea7aa/fbc98/logo-alt.png 16w,\\n/static/f8d95f0240159c246e8d2221a35ea7aa/914ee/logo-alt.png 32w,\\n/static/f8d95f0240159c246e8d2221a35ea7aa/1c9ce/logo-alt.png 64w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/f8d95f0240159c246e8d2221a35ea7aa/e789a/logo-alt.webp 16w,\\n/static/f8d95f0240159c246e8d2221a35ea7aa/ef6ff/logo-alt.webp 32w,\\n/static/f8d95f0240159c246e8d2221a35ea7aa/8257c/logo-alt.webp 64w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}')},2217:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/37e97296887ff0c4ee790c9f014b88bd/029a9/logo.png","srcSet":"/static/37e97296887ff0c4ee790c9f014b88bd/f9b14/logo.png 36w,\\n/static/37e97296887ff0c4ee790c9f014b88bd/3d02d/logo.png 71w,\\n/static/37e97296887ff0c4ee790c9f014b88bd/029a9/logo.png 142w","sizes":"(min-width: 142px) 142px, 100vw"},"sources":[{"srcSet":"/static/37e97296887ff0c4ee790c9f014b88bd/3300d/logo.webp 36w,\\n/static/37e97296887ff0c4ee790c9f014b88bd/efcfd/logo.webp 71w,\\n/static/37e97296887ff0c4ee790c9f014b88bd/feba7/logo.webp 142w","type":"image/webp","sizes":"(min-width: 142px) 142px, 100vw"}]},"width":142,"height":40}')},9177:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/40b1cd0efadd8eac0dae242289950519/ca121/clock-min.png","srcSet":"/static/40b1cd0efadd8eac0dae242289950519/549c4/clock-min.png 5w,\\n/static/40b1cd0efadd8eac0dae242289950519/ebf64/clock-min.png 10w,\\n/static/40b1cd0efadd8eac0dae242289950519/ca121/clock-min.png 20w","sizes":"(min-width: 20px) 20px, 100vw"},"sources":[{"srcSet":"/static/40b1cd0efadd8eac0dae242289950519/fadb2/clock-min.webp 5w,\\n/static/40b1cd0efadd8eac0dae242289950519/bd5c1/clock-min.webp 10w,\\n/static/40b1cd0efadd8eac0dae242289950519/264f2/clock-min.webp 20w","type":"image/webp","sizes":"(min-width: 20px) 20px, 100vw"}]},"width":22,"height":22}')},2607:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/1136bf91909dae5d924df639bb0ba2d9/ca121/email-min-white.png","srcSet":"/static/1136bf91909dae5d924df639bb0ba2d9/549c4/email-min-white.png 5w,\\n/static/1136bf91909dae5d924df639bb0ba2d9/ebf64/email-min-white.png 10w,\\n/static/1136bf91909dae5d924df639bb0ba2d9/ca121/email-min-white.png 20w","sizes":"(min-width: 20px) 20px, 100vw"},"sources":[{"srcSet":"/static/1136bf91909dae5d924df639bb0ba2d9/fadb2/email-min-white.webp 5w,\\n/static/1136bf91909dae5d924df639bb0ba2d9/bd5c1/email-min-white.webp 10w,\\n/static/1136bf91909dae5d924df639bb0ba2d9/264f2/email-min-white.webp 20w","type":"image/webp","sizes":"(min-width: 20px) 20px, 100vw"}]},"width":20,"height":20}')}}]);
//# sourceMappingURL=b5cdad74149a7c67b3f51353ea33ed8fb7392eda-1ebd2815fbb528a77c5b.js.map