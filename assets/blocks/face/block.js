window.wp=window.wp||{},window.wp["face/block.js"]=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=43)}([function(e,t,n){"use strict";var r=(n(1),n(2),n(28)),o=(n.n(r),n(3));n.n(o);n.o(r,"cloneElement")&&n.d(t,"c",function(){return r.cloneElement}),n.o(r,"createContext")&&n.d(t,"d",function(){return r.createContext}),n.o(r,"createElement")&&n.d(t,"e",function(){return r.createElement}),n.o(r,"forwardRef")&&n.d(t,"f",function(){return r.forwardRef}),n.o(r,"Fragment")&&n.d(t,"a",function(){return r.Fragment}),n.o(r,"isValidElement")&&n.d(t,"g",function(){return r.isValidElement}),n.o(r,"StrictMode")&&n.d(t,"b",function(){return r.StrictMode})},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=Object(o.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.a=r;var o=n(27)},function(e,t){!function(){e.exports=window.lodash}()},function(e,t,n){"use strict";function r(e,t){if(e){if("string"==typeof e)return Object(o.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(o.a)(e,t):void 0}}t.a=r;var o=n(5)},function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=r},function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.a=r},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e){var t=e.children,n=Object(a.a)(e,["children"]);return Object(u.e)("div",o({dangerouslySetInnerHTML:{__html:t}},n))}t.a=i;var c=n(1),a=n(2),u=n(0)},function(e,t){function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";n(18),n(0),n(29),n(31),n(32),n(33),n(7)},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}var o=n(16);e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){function r(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}var o=n(17).default,i=n(8);e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t,r)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(t){"@babel/helpers - typeof";return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";n(19),n(6),n(23),n(0)},function(e,t,n){"use strict";function r(e,t){return Object(o.a)(e)||Object(i.a)(e,t)||Object(c.a)(e,t)||Object(a.a)()}t.a=r;var o=n(20),i=n(21),c=n(4),a=n(22)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}t.a=r},function(e,t,n){"use strict";function r(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}t.a=r},function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.a=r},function(e,t,n){"use strict";function r(e){return Object(o.a)(e)||Object(i.a)(e)||Object(c.a)(e)||Object(a.a)()}t.a=r;var o=n(24),i=n(25),c=n(4),a=n(26)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return Object(o.a)(e)}t.a=r;var o=n(5)},function(e,t,n){"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t.a=r},function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.a=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}t.a=r},function(e,t){!function(){e.exports=window.React}()},function(e,t,n){"use strict";var r=n(30);n.n(r)},function(e,t){!function(){e.exports=window.ReactDOM}()},function(e,t,n){"use strict";var r=n(3);n.n(r)},function(e,t,n){"use strict"},function(e,t,n){"use strict";var r=(n(1),n(2),n(6),n(3)),o=(n.n(r),n(34),n(0)),i=(n(7),Object(o.d)(void 0));i.Provider,i.Consumer,Object(o.f)(function(){return null}),new Set(["string","boolean","number"]),new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),new Set(["allowfullscreen","allowpaymentrequest","allowusermedia","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","typemustmatch"]),new Set(["autocapitalize","autocomplete","charset","contenteditable","crossorigin","decoding","dir","draggable","enctype","formenctype","formmethod","http-equiv","inputmode","kind","method","preload","scope","shape","spellcheck","translate","type","wrap"]),new Set(["animation","animationIterationCount","baselineShift","borderImageOutset","borderImageSlice","borderImageWidth","columnCount","cx","cy","fillOpacity","flexGrow","flexShrink","floodOpacity","fontWeight","gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart","lineHeight","opacity","order","orphans","r","rx","ry","shapeImageThreshold","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth","tabSize","widows","x","y","zIndex","zoom"])},function(e,t,n){"use strict";function r(e){return e.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi,"&amp;")}function o(e){return e.replace(/"/g,"&quot;")}function i(e){return e.replace(/</g,"&lt;")}function c(e){return Object(l.a)(o(r(e)))}function a(e){return i(r(e))}function u(e){return!s.test(e)}t.a=c,t.b=a,t.c=u;var l=n(35),s=/[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/},function(e,t,n){"use strict";function r(e){return e.replace(/>/g,"&gt;")}t.a=r},,function(e,t,n){var r,o;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var c=n.apply(null,r);c&&e.push(c)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var a in r)i.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}var i={}.hasOwnProperty;void 0!==e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(44),o=n(45),i=wp.blocks.registerBlockType;wp.blockEditor.InnerBlocks;console.log("yani/face is Being Registered"),i("yani/face",{title:"Face",category:"wprig-blocks",parent:["yani/highlightbox"],supports:{html:!1,inserter:!1,reusable:!1},getEditWrapperProps:function(e){return{"data-tab":e.id,className:"wp-block editor-block-list__block block-editor-block-list__block wprig-tab-content"}},icon:"universal-access-alt",description:"SERPWARS inspired Hero Face",keywords:["face"],edit:r.a,save:o.a})},function(e,t,n){"use strict";function r(e){var t=o();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b()(this,n)}}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var i=n(15),c=n.n(i),a=n(10),u=n.n(a),l=n(11),s=n.n(l),f=n(12),p=n.n(f),d=n(13),b=n.n(d),y=n(14),m=n.n(y),g=(n(9),n(37)),h=n.n(g),w=wp.element,v=w.Fragment,x=w.Component,O=w.createRef,j=wp.i18n.__,S=wp.blockEditor,k=S.InnerBlocks,_=S.InspectorControls,P=wp.compose.compose,E=wp.components,R=E.PanelBody,I=E.PanelRow,C=(E.SelectControl,E.RangeControl,E.Tooltip,wp.wprigComponents),M=C.Background,B=(C.Border,C.BorderRadius,C.BoxShadow,C.InspectorTab),A=C.InspectorTabs,T=(C.Range,C.Padding),D=(C.Separator,C.Select,C.Toggle,C.withCSSGenerator),F=C.globalSettings,q=F.globalSettingsPanel,z=F.animationSettings,W=F.interactionSettings,H=function(e){function t(e){var r;return u()(this,t),r=n.call(this,e),r.state={device:"md"},r.wprigContextMenu=O(),r}p()(t,e);var n=r(t);return s()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=(e.block,e.clientId),n=e.setAttributes,r=(e.updateBlockAttributes,e.attributes.uniqueId),o=t.substr(0,6);r&&""!=r||n({uniqueId:o})}},{key:"render",value:function(){var e=this,t=this.props,n=t.setAttributes,r=t.attributes,o=r.uniqueId,i=r.className,a=r.customClassName,u=r.bodyBg,l=r.bodyPadding,s=(r.enableOverlay,r.overlay,r.opacity,r.blend,r.border,r.borderRadius,r.faceShadow,r.rowHeight,r.heightOptions,r.animation),f=r.globalCss,p=r.hideTablet,d=r.hideMobile,b=r.interaction,y=r.globalZindex,m=r.positionXaxis,g=r.positionYaxis,w=r.enablePosition,x=r.selectPosition,O=this.state.device,S=h()(c()({},"wprig-block-".concat(o),void 0!==o),c()({},i,void 0!==i));return wp.element.createElement(v,null,wp.element.createElement(_,{key:"inspector"},wp.element.createElement(A,{tabs:["style","advance"]},wp.element.createElement(B,{key:"style"},wp.element.createElement(R,{initialOpen:!1,title:j("Basic")},wp.element.createElement(M,{parallax:!0,value:u,label:j("Background"),externalImage:!0,sources:["image","gradient"],onChange:function(e){return n({bodyBg:e})}}),wp.element.createElement(I,null,wp.element.createElement(T,{label:j("Padding"),value:l,min:0,max:300,responsive:!0,device:O,unit:["px","em","%"],onChange:function(e){return n({bodyPadding:e})},onDeviceChange:function(t){return e.setState({device:t})}})))),wp.element.createElement(B,{key:"advance"},z(o,s,n),W(o,b,n)))),q(w,x,m,g,y,p,d,f,n),wp.element.createElement("div",{className:"".concat(S," wp-block-face ").concat(a)},console.log(this),wp.element.createElement(k,{templateLock:!1,templateInsertUpdatesSelection:!1,renderAppender:function(){return wp.element.createElement(k.ButtonBlockAppender,null)}})))}}]),t}(x);t.a=P([D()])(H)},function(e,t,n){"use strict";function r(e){var t=o();return function(){var n,r=b()(e);if(t){var o=b()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var i=n(10),c=n.n(i),a=n(11),u=n.n(a),l=n(12),s=n.n(l),f=n(13),p=n.n(f),d=n(14),b=n.n(d),y=(n(9),wp.element.Component),m=wp.blockEditor,g=(m.RichText,m.InnerBlocks),h=function(e){function t(){return c()(this,t),n.apply(this,arguments)}s()(t,e);var n=r(t);return u()(t,[{key:"render",value:function(){var e=this.props.attributes;null!=e.textAlignment&&e.textAlignment;return wp.element.createElement(g.Content,null)}}]),t}(y);t.a=h}]);