window.wp=window.wp||{},window.wp["hero/block.js"]=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=44)}([function(e,t,n){"use strict";var r=(n(1),n(2),n(28)),o=(n.n(r),n(3));n.n(o);n.o(r,"cloneElement")&&n.d(t,"c",function(){return r.cloneElement}),n.o(r,"createContext")&&n.d(t,"d",function(){return r.createContext}),n.o(r,"createElement")&&n.d(t,"e",function(){return r.createElement}),n.o(r,"forwardRef")&&n.d(t,"f",function(){return r.forwardRef}),n.o(r,"Fragment")&&n.d(t,"a",function(){return r.Fragment}),n.o(r,"isValidElement")&&n.d(t,"g",function(){return r.isValidElement}),n.o(r,"StrictMode")&&n.d(t,"b",function(){return r.StrictMode})},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=Object(o.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=r;var o=n(27)},function(e,t){!function(){e.exports=window.lodash}()},function(e,t,n){"use strict";function r(e,t){if(e){if("string"==typeof e)return Object(o.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(o.a)(e,t):void 0}}t.a=r;var o=n(5)},function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=r},function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.a=r},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(u.e)("div",o({dangerouslySetInnerHTML:{__html:t}},n))}t.a=a;var i=n(1),l=n(2),u=n(0)},function(e,t){function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";n(18),n(0),n(29),n(31),n(32),n(33),n(7)},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}var o=n(15);e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){function r(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}var o=n(16).default,a=n(8);e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t,r)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(t){"@babel/helpers - typeof";return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";n(19),n(6),n(23),n(0)},function(e,t,n){"use strict";function r(e,t){return Object(o.a)(e)||Object(a.a)(e,t)||Object(i.a)(e,t)||Object(l.a)()}t.a=r;var o=n(20),a=n(21),i=n(4),l=n(22)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}t.a=r},function(e,t,n){"use strict";function r(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}t.a=r},function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.a=r},function(e,t,n){"use strict";function r(e){return Object(o.a)(e)||Object(a.a)(e)||Object(i.a)(e)||Object(l.a)()}t.a=r;var o=n(24),a=n(25),i=n(4),l=n(26)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return Object(o.a)(e)}t.a=r;var o=n(5)},function(e,t,n){"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t.a=r},function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.a=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}t.a=r},function(e,t){!function(){e.exports=window.React}()},function(e,t,n){"use strict";var r=n(30);n.n(r)},function(e,t){!function(){e.exports=window.ReactDOM}()},function(e,t,n){"use strict";var r=n(3);n.n(r)},function(e,t,n){"use strict"},function(e,t,n){"use strict";var r=(n(1),n(2),n(6),n(3)),o=(n.n(r),n(34),n(0)),a=(n(7),Object(o.d)(void 0));a.Provider,a.Consumer,Object(o.f)(function(){return null}),new Set(["string","boolean","number"]),new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),new Set(["allowfullscreen","allowpaymentrequest","allowusermedia","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","typemustmatch"]),new Set(["autocapitalize","autocomplete","charset","contenteditable","crossorigin","decoding","dir","draggable","enctype","formenctype","formmethod","http-equiv","inputmode","kind","method","preload","scope","shape","spellcheck","translate","type","wrap"]),new Set(["animation","animationIterationCount","baselineShift","borderImageOutset","borderImageSlice","borderImageWidth","columnCount","cx","cy","fillOpacity","flexGrow","flexShrink","floodOpacity","fontWeight","gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart","lineHeight","opacity","order","orphans","r","rx","ry","shapeImageThreshold","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth","tabSize","widows","x","y","zIndex","zoom"])},function(e,t,n){"use strict";function r(e){return e.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi,"&amp;")}function o(e){return e.replace(/"/g,"&quot;")}function a(e){return e.replace(/</g,"&lt;")}function i(e){return Object(c.a)(o(r(e)))}function l(e){return a(r(e))}function u(e){return!s.test(e)}t.a=i,t.b=l,t.c=u;var c=n(35),s=/[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/},function(e,t,n){"use strict";function r(e){return e.replace(/>/g,"&gt;")}t.a=r},function(e,t){function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(45),o=n(46);(0,wp.blocks.registerBlockType)("yani/hero",{title:"HERO Area ",category:"wprig-blocks",icon:"smiley",supports:{align:["wide","full"]},description:"SERPWARS inspired Hero Area",keywords:["example","test"],edit:r.a,save:o.a})},function(e,t,n){"use strict";function r(e){var t=o();return function(){var n,r=w()(e);if(t){var o=w()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y()(this,n)}}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var a=n(36),i=n.n(a),l=n(10),u=n.n(l),c=n(11),s=n.n(c),p=n(8),f=n.n(p),d=n(12),b=n.n(d),m=n(13),y=n.n(m),v=n(14),w=n.n(v),h=n(17),g=n.n(h),x=(n(9),wp.element),O=x.Component,_=x.Fragment,S=wp.data,E=S.select,j=S.withDispatch,k=wp.compose.compose,C=wp.editor.ServerSideRender,P=wp.blockEditor,T=(P.RichText,P.InnerBlocks),I=P.InspectorControls,M=P.BlockControls,B=(P.AlignmentToolbar,wp.components),R=(B.ToggleControl,B.PanelBody),A=B.PanelRow,D=(B.CheckboxControl,B.SelectControl),q=B.Toolbar,F=B.IconButton,z=(B.Placeholder,B.Disabled,wp.wprigComponents),W=z.Alignment,G=(z.Url,z.Separator,z.RadioAdvanced,z.ColorAdvanced,z.InspectorTab),H=z.InspectorTabs,N=(z.InspectorSections,z.Background),V=z.Range,L=z.withCSSGenerator,J=(z.Styles,wp.i18n.__),U=function(e){function t(e){var r;return u()(this,t),r=n.call(this,e),g()(f()(r),"getInspectorControls",function(){var e=r.props,t=e.attributes,n=(t.uniqueId,t.bodyBg),o=t.separator_top_style,a=t.separator_bottom_style,i=t.separator_position,l=t.content_alignment,u=t.text_align,c=t.hero_content_width,s=t.enable_spacer,p=e.setAttributes,f=r.state,d=f.device;f.currentTab;return wp.element.createElement(I,{key:"inspector"},wp.element.createElement(H,{tabs:["normal","hover","advance"],defaultTab:"normal"},wp.element.createElement(G,{key:"normal"},wp.element.createElement(R,{title:"Image",initialOpen:!1},wp.element.createElement(A,null,wp.element.createElement(N,{label:"Background",sources:["image","gradient"],value:n,onChange:function(e){return p({bodyBg:e})}}))),wp.element.createElement(R,{title:"Content",initialOpen:!1},wp.element.createElement(A,null,wp.element.createElement(W,{label:J("Content Alignment"),alignmentType:"content",value:l,onChange:function(e){return p({content_alignment:e})},disableJustify:!0,responsive:!0,device:d,onDeviceChange:function(e){return r.setState({device:e})}})),wp.element.createElement(A,null,wp.element.createElement(W,{label:J("Text Alignment"),alignmentType:"text",value:u,onChange:function(e){return p({text_align:e})},disableJustify:!0,responsive:!0,device:d,onDeviceChange:function(e){return r.setState({device:e})}})),wp.element.createElement(A,null,wp.element.createElement(V,{label:J("Content Width"),value:c,responsive:!0,onChange:function(e){return p({hero_content_width:e})},min:1,max:12,device:d,onDeviceChange:function(e){return r.setState({device:e})}}))),wp.element.createElement(R,{title:"Separator",initialOpen:!1},wp.element.createElement(D,{label:J("Separator Position"),value:i,options:[{label:J("Top"),value:"top"},{label:J("Bottom"),value:"bottom"},{label:J("Both"),value:"both"}],onChange:function(e){return p({separator_position:e})}}),("top"==i||"both"==i)&&wp.element.createElement(D,{label:J("Separator Top Style"),value:o,options:[{label:J("None"),value:""},{label:J("Tip Left"),value:"row--separator-tip_left"},{label:J("Tip Right"),value:"row--separator-tip_right"},{label:J("Tip Center"),value:"row--separator-tip_center"},{label:J("Split Outer"),value:"row--separator-split-outer"},{label:J("SVG"),value:"row--separator-svg row--separator-split-inner"}],onChange:function(e){return p({separator_top_style:e})}}),("bottom"==i||"both"==i)&&wp.element.createElement(D,{label:J("Separator Bottom Style"),value:a,options:[{label:J("None"),value:""},{label:J("Tip Left"),value:"row--separator-tip_left"},{label:J("Tip Right"),value:"row--separator-tip_right"},{label:J("Tip Center"),value:"row--separator-tip_center"},{label:J("Split Outer"),value:"row--separator-split-outer"},{label:J("SVG"),value:"row--separator-svg row--separator-split-inner"}],onChange:function(e){return p({separator_bottom_style:e})}})),wp.element.createElement(R,{title:"Spacers",initialOpen:!1},wp.element.createElement(D,{label:J("Enable Spacer"),value:s,options:[{label:J("None"),value:""},{label:J("Top"),value:"top"},{label:J("Bottom"),value:"bottom"},{label:J("Both"),value:"both"}],onChange:function(e){return p({enable_spacer:e})}}))),wp.element.createElement(G,{key:"hover"}),wp.element.createElement(G,{key:"advance"})))}),g()(f()(r),"getBlockControls",function(){var e=r.props;i()(e.attributes);e.setAttributes;return wp.element.createElement(M,null,wp.element.createElement(q,null,wp.element.createElement(F,{label:r.state.editMode?"Preview":"Edit",icon:r.state.editMode?"format-image":"edit",onClick:function(){return r.setState({editMode:!r.state.editMode})}})))}),r.state={editMode:!0,currentTab:0,device:"md",selector:!0,spacer:!0},r}b()(t,e);var n=r(t);return s()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setAttributes,n=e.clientId,r=e.attributes.uniqueId,o=n.substr(0,6);r||t({uniqueId:o})}},{key:"render",value:function(){var e=this.props,t=e.clientId,n=e.attributes,r=n.uniqueId,o=n.bodyBg,a=n.text_align,i=(e.setAttributes,this.state.device,E("core/block-editor")),l=i.getBlockOrder;l(t).length;return[this.getInspectorControls(),this.getBlockControls(),wp.element.createElement("div",{className:"hero-editor"},this.state.editMode&&wp.element.createElement(_,null,wp.element.createElement(T,{renderAppender:function(){return wp.element.createElement(T.ButtonBlockAppender,null)}})),!this.state.editMode&&wp.element.createElement(C,{block:this.props.name,attributes:{uniqueId:r,text_align:a,bodyBg:o}}))]}}]),t}(O);t.a=k([j(function(e){return{removeBlock:e("core/block-editor").removeBlock}}),L()])(U)},function(e,t,n){"use strict";function r(e){var t=o();return function(){var n,r=b()(e);if(t){var o=b()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var a=n(10),i=n.n(a),l=n(11),u=n.n(l),c=n(12),s=n.n(c),p=n(13),f=n.n(p),d=n(14),b=n.n(d),m=(n(9),wp.element.Component),y=wp.blockEditor,v=(y.RichText,y.InnerBlocks),w=function(e){function t(){return i()(this,t),n.apply(this,arguments)}s()(t,e);var n=r(t);return u()(t,[{key:"render",value:function(){var e=this.props.attributes;null!=e.textAlignment&&e.textAlignment;return wp.element.createElement("div",null,wp.element.createElement(v.Content,null))}}]),t}(m);t.a=w}]);