window.wp=window.wp||{},window.wp["tabs/block.js"]=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=58)}([function(e,t,n){"use strict";var r=(n(1),n(2),n(28)),o=(n.n(r),n(3));n.n(o);n.o(r,"cloneElement")&&n.d(t,"c",function(){return r.cloneElement}),n.o(r,"createContext")&&n.d(t,"d",function(){return r.createContext}),n.o(r,"createElement")&&n.d(t,"e",function(){return r.createElement}),n.o(r,"forwardRef")&&n.d(t,"f",function(){return r.forwardRef}),n.o(r,"Fragment")&&n.d(t,"a",function(){return r.Fragment}),n.o(r,"isValidElement")&&n.d(t,"g",function(){return r.isValidElement}),n.o(r,"StrictMode")&&n.d(t,"b",function(){return r.StrictMode})},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=Object(o.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.a=r;var o=n(27)},function(e,t){!function(){e.exports=window.lodash}()},function(e,t,n){"use strict";function r(e,t){if(e){if("string"==typeof e)return Object(o.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(o.a)(e,t):void 0}}t.a=r;var o=n(5)},function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=r},function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.a=r},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e){var t=e.children,n=Object(c.a)(e,["children"]);return Object(l.e)("div",o({dangerouslySetInnerHTML:{__html:t}},n))}t.a=i;var a=n(1),c=n(2),l=n(0)},function(e,t){function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";n(18),n(0),n(29),n(31),n(32),n(33),n(7)},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}var o=n(16);e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){function r(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}var o=n(17).default,i=n(8);e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t,r)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(t){"@babel/helpers - typeof";return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";n(19),n(6),n(23),n(0)},function(e,t,n){"use strict";function r(e,t){return Object(o.a)(e)||Object(i.a)(e,t)||Object(a.a)(e,t)||Object(c.a)()}t.a=r;var o=n(20),i=n(21),a=n(4),c=n(22)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}t.a=r},function(e,t,n){"use strict";function r(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}t.a=r},function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.a=r},function(e,t,n){"use strict";function r(e){return Object(o.a)(e)||Object(i.a)(e)||Object(a.a)(e)||Object(c.a)()}t.a=r;var o=n(24),i=n(25),a=n(4),c=n(26)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return Object(o.a)(e)}t.a=r;var o=n(5)},function(e,t,n){"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t.a=r},function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.a=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}t.a=r},function(e,t){!function(){e.exports=window.React}()},function(e,t,n){"use strict";var r=n(30);n.n(r)},function(e,t){!function(){e.exports=window.ReactDOM}()},function(e,t,n){"use strict";var r=n(3);n.n(r)},function(e,t,n){"use strict"},function(e,t,n){"use strict";var r=(n(1),n(2),n(6),n(3)),o=(n.n(r),n(34),n(0)),i=(n(7),Object(o.d)(void 0));i.Provider,i.Consumer,Object(o.f)(function(){return null}),new Set(["string","boolean","number"]),new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),new Set(["allowfullscreen","allowpaymentrequest","allowusermedia","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","typemustmatch"]),new Set(["autocapitalize","autocomplete","charset","contenteditable","crossorigin","decoding","dir","draggable","enctype","formenctype","formmethod","http-equiv","inputmode","kind","method","preload","scope","shape","spellcheck","translate","type","wrap"]),new Set(["animation","animationIterationCount","baselineShift","borderImageOutset","borderImageSlice","borderImageWidth","columnCount","cx","cy","fillOpacity","flexGrow","flexShrink","floodOpacity","fontWeight","gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart","lineHeight","opacity","order","orphans","r","rx","ry","shapeImageThreshold","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth","tabSize","widows","x","y","zIndex","zoom"])},function(e,t,n){"use strict";function r(e){return e.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi,"&amp;")}function o(e){return e.replace(/"/g,"&quot;")}function i(e){return e.replace(/</g,"&lt;")}function a(e){return Object(s.a)(o(r(e)))}function c(e){return i(r(e))}function l(e){return!u.test(e)}t.a=a,t.b=c,t.c=l;var s=n(35),u=/[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/},function(e,t,n){"use strict";function r(e){return e.replace(/>/g,"&gt;")}t.a=r},,function(e,t,n){var r,o;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)i.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}var i={}.hasOwnProperty;void 0!==e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59),o=n(60),i=n(61),a=wp.i18n.__;(0,wp.blocks.registerBlockType)("wprig/tabs",{title:a("Tabs"),category:"wprig-blocks",icon:"universal-access-alt",description:a("Showcase features in beautiful pre-designed tabs with wprig Tabs."),supports:{html:!1,className:!1,align:["full","wide","center"]},example:{attributes:{tabTitles:[{title:"Tab 1"},{title:"Tab 2"},{title:"Tab 3"}]},innerBlocks:[{name:"wprig/tab",innerBlocks:[{name:"wprig/heading",attributes:{content:"wprig - A Full-fledged Gutenberg Builder",alignment:{md:"center"}}}]}]},attributes:i.a,edit:o.a,save:r.a})},function(e,t,n){"use strict";function r(e){var t=o();return function(){var n,r=y()(e);if(t){var o=y()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var i=n(38),a=n.n(i),c=n(10),l=n.n(c),s=n(11),u=n.n(s),p=n(12),f=n.n(p),b=n(13),m=n.n(b),d=n(14),y=n.n(d),w=(n(9),wp.element.Component),g=wp.blockEditor.InnerBlocks,v=wp.wprigComponents.HelperFunction,h=v.animationAttr,O=v.IsInteraction,x=function(e){function t(){return l()(this,t),n.apply(this,arguments)}f()(t,e);var n=r(t);return u()(t,[{key:"render",value:function(){var e=this.props.attributes,t=e.uniqueId,n=e.tabStyle,r=e.tabTitles,o=e.iconPosition,i=e.navAlignment,c=e.animation,l=e.interaction,s=O(l)?"qubley-block-interaction":"";return wp.element.createElement("div",a()({className:"wprig-block-".concat(t)},h(c)),wp.element.createElement("div",{className:"wprig-block-tab ".concat(s," wprig-tab-style-").concat(n)},wp.element.createElement("div",{className:"wprig-tab-nav wprig-alignment-".concat(i)},function(){return r.map(function(e,t){return wp.element.createElement("span",{className:"wprig-tab-item ".concat(0==t?"wprig-active":"")},wp.element.createElement("span",{class:"wprig-tab-title ".concat(e.iconName?"wprig-has-icon-"+o:""),role:"button"},e.iconName&&("top"==o||"left"==o)&&wp.element.createElement("i",{className:"wprig-tab-icon ".concat(e.iconName)}),e.title,e.iconName&&"right"==o&&wp.element.createElement("i",{className:"wprig-tab-icon ".concat(e.iconName)})))})}()),wp.element.createElement("div",{className:"wprig-tab-body"},wp.element.createElement(g.Content,null))))}}]),t}(w);t.a=x},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){x()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e){var t=a();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g()(this,n)}}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var c=n(38),l=n.n(c),s=n(10),u=n.n(s),p=n(11),f=n.n(p),b=n(8),m=n.n(b),d=n(12),y=n.n(d),w=n(13),g=n.n(w),v=n(14),h=n.n(v),O=n(15),x=n.n(O),j=(n(9),n(37)),k=n.n(j),S=wp.i18n.__,E=wp.components,P=E.Toolbar,T=E.Tooltip,I=E.PanelBody,_=wp.compose.compose,N=wp.data,B=N.withSelect,A=N.withDispatch,R=wp.element,C=R.Fragment,M=R.Component,D=wp.blockEditor,F=D.RichText,G=D.InnerBlocks,q=D.BlockControls,W=D.InspectorControls,z=wp.wprigComponents,J=z.Select,L=z.IconList,H=z.Alignment,V=z.Separator,U=z.InspectorTab,X=z.InspectorTabs,Y=z.withCSSGenerator,Z=z.Inline.InlineToolbar,$=z.globalSettings,K=$.globalSettingsPanel,Q=$.animationSettings,ee=$.interactionSettings,te=function(e){function t(e){var r;return u()(this,t),r=n.call(this,e),x()(m()(r),"updateTitles",function(e,t){var n=r.props,i=n.attributes.tabTitles;(0,n.setAttributes)({tabTitles:i.map(function(n,r){return t===r&&(n=o(o({},n),e)),n})})}),x()(m()(r),"renderTabTitles",function(){var e=r.state,t=e.activeTab,n=e.showIconPicker,o=r.props.attributes,i=o.tabTitles,a=o.iconPosition,c=function(e){r.setState({initialRender:!1,activeTab:e+1,showIconPicker:!n})};return i.map(function(e,n){var o=!1;t===n+1&&(o=!0);var i=k()("wprig-tab-item",x()({},"wprig-active",o)),l=k()("wprig-tab-title",x()({},"wprig-has-icon-".concat(a),void 0!==e.iconName));return wp.element.createElement("div",{className:i},wp.element.createElement("div",{role:"button",className:l,onClick:function(){return c(n)}},e.iconName&&("top"==a||"left"==a)&&wp.element.createElement("i",{className:"wprig-tab-icon ".concat(e.iconName)}),o?wp.element.createElement(F,{value:e.title,keepPlaceholderOnFocus:!0,placeholder:S("Add Tab Title"),onChange:function(e){return r.updateTitles({title:e},n)}}):wp.element.createElement("div",null,e.title),e.iconName&&"right"==a&&wp.element.createElement("i",{className:"wprig-tab-icon ".concat(e.iconName)})),wp.element.createElement(T,{text:S("Delete this tab")},wp.element.createElement("span",{className:"wprig-action-tab-remove",role:"button",onClick:function(){return r.deleteTab(n)}},wp.element.createElement("i",{className:"fas fa-times"}))))})}),x()(m()(r),"deleteTab",function(e){var t=r.state.activeTab,n=r.props,o=n.block,i=n.clientId,a=n.setAttributes,c=n.replaceInnerBlocks,l=n.updateBlockAttributes,s=n.attributes,u=s.tabs,p=s.tabTitles,f=p.filter(function(t,n){return n!=e}),b=e+1;for(a({tabTitles:f,tabs:u-1});b<u;)l(o.innerBlocks[b].clientId,Object.assign(o.innerBlocks[b].attributes,{id:o.innerBlocks[b].attributes.id-1})),b++;var m=JSON.parse(JSON.stringify(o.innerBlocks));m.splice(e,1),c(i,m,!1),r.setState(function(n){var r=n.activeTab-1;return e+1===t&&(r=0==e?1:e+1<u?e+1:e),{activeTab:r,initialRender:!1}})}),r.state={spacer:!0,device:"md",activeTab:1,initialRender:!0,showIconPicker:!1},r}y()(t,e);var n=i(t);return f()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=(e.block,e.clientId),n=e.setAttributes,r=(e.updateBlockAttributes,e.attributes.uniqueId),o=t.substr(0,6);r?r&&r!=o&&n({uniqueId:o}):n({uniqueId:o})}},{key:"render",value:function(){var e=this,t=this.props,n=t.setAttributes,r=t.attributes,i=r.uniqueId,a=r.className,c=r.tabs,s=r.tabStyle,u=r.tabTitles,p=r.navAlignment,f=r.iconPosition,b=r.animation,m=r.globalCss,d=r.hideTablet,y=r.hideMobile,w=r.interaction,g=r.globalZindex,v=r.positionXaxis,h=r.positionYaxis,O=r.enablePosition,j=r.selectPosition,E=this.state,_=(E.device,E.activeTab),N=function(){var e=JSON.parse(JSON.stringify(u));return e[c]={title:S("Tab ".concat(c+1)),icon:{}},e},B=function(){e.setState({activeTab:c+1,initialRender:!1}),n({tabs:c+1,tabTitles:N()})},A=k()(x()({},"wprig-block-".concat(i),void 0!==i),x()({},a,void 0!==a));return wp.element.createElement(C,null,wp.element.createElement(W,{key:"inspector"},wp.element.createElement(X,{tabs:["style","advance"]},wp.element.createElement(U,{key:"style"},wp.element.createElement(I,{title:S("Styles"),initialOpen:!0},wp.element.createElement(V,null),wp.element.createElement(H,{label:S("Alignment"),value:p,alignmentType:"content",onChange:function(e){return n({navAlignment:e})},disableJustify:!0})),wp.element.createElement(I,{title:S("Icon"),initialOpen:!1},wp.element.createElement(L,{label:S("Icon"),value:u[_-1]&&u[_-1].iconName,onChange:function(t){return e.updateTitles({iconName:t},_-1)}}),wp.element.createElement(J,{label:S("Icon Position"),options:[["left",S("Left")],["right",S("Right")],["top",S("Top")]],value:f,onChange:function(e){return n({iconPosition:e})}}))),wp.element.createElement(U,{key:"advance"},Q(i,b,n),ee(i,w,n)))),wp.element.createElement(q,null,wp.element.createElement(P,null,wp.element.createElement(Z,l()({data:[{name:"InlineSpacer",key:"spacer",responsive:!0,unit:["px","em","%"]}]},this.props,{prevState:this.state})))),K(O,j,v,h,g,d,y,m,n),wp.element.createElement("div",{className:A},wp.element.createElement("div",{className:"wprig-block-tab wprig-tab-style-".concat(s," wprig-active-tab-").concat(_)},wp.element.createElement("div",{className:"wprig-tab-nav wprig-alignment-".concat(p)},this.renderTabTitles(),wp.element.createElement(T,{text:S("Add new tab")},wp.element.createElement("span",{role:"button",areaLabel:S("Add new tab"),className:"wprig-add-new-tab",onClick:function(){return B()}},wp.element.createElement("i",{className:"fas fa-plus-circle"})))),wp.element.createElement("div",{className:"wprig-tab-body"},wp.element.createElement(G,{tagName:"div",templateLock:"all",allowedBlocks:["wprig/tab"],template:Array(c).fill(0).map(function(e,t){return["wprig/tab",o({id:t+1},0===t&&{customClassName:"wprig-active"})]})})))))}}]),t}(M);t.a=_([B(function(e,t){var n=t.clientId;return{block:(0,e("core/block-editor").getBlock)(n)}}),A(function(e){var t=e("core/block-editor");return{getBlocks:t.getBlocks,insertBlock:t.insertBlock,removeBlock:t.removeBlock,replaceInnerBlocks:t.replaceInnerBlocks,updateBlockAttributes:t.updateBlockAttributes}}),Y()])(te)},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var i=n(15),a=n.n(i),c=wp.wprigComponents.globalSettings.globalAttributes,l=o(o({uniqueId:{type:"string",default:""}},c),{},{spacer:{type:"object",default:{spaceTop:{md:"10",unit:"px"},spaceBottom:{md:"10",unit:"px"}},style:[{selector:"{{WPRIG}}"}]},navAlignment:{type:"string",default:"left"},tabs:{type:"number",default:3},tabStyle:{type:"string",default:"pills"},tabTitles:{type:"array",default:[{title:"Tab 1"},{title:"Tab 2"},{title:"Tab 3"}]},iconPosition:{type:"string",default:"right"},iconSize:{type:"object",default:{},style:[{selector:"{{WPRIG}} .wprig-tab-icon {font-size: {{iconSize}}}"}]},iconGap:{type:"object",default:{md:8,unit:"px"},style:[{selector:"{{WPRIG}} .wprig-tab-title.wprig-has-icon-left .wprig-tab-icon { margin-right: {{iconGap}}; } {{WPRIG}} .wprig-tab-title.wprig-has-icon-right .wprig-tab-icon  { margin-left: {{iconGap}};} {{WPRIG}} .wprig-tab-title.wprig-has-icon-top .wprig-tab-icon  { margin-bottom: {{iconGap}};}"}]},navColor:{type:"string",default:"#999999",style:[{selector:"{{WPRIG}} .wprig-block-tab .wprig-tab-nav .wprig-tab-item .wprig-tab-title { color:{{navColor}}; }"}]},bodyBg:{type:"string",default:"#F5F5F5",style:[{condition:[{key:"tabStyle",relation:"==",value:"tabs"}],selector:"{{WPRIG}} .wprig-block-tab .wprig-tab-body {background-color: {{bodyBg}};}"}]}});t.a=l}]);