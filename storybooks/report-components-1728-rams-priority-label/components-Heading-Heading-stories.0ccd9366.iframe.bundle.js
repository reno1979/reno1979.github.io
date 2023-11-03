"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[473],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./libs/report-components/src/components/Heading/Heading.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Heading_Heading}});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./libs/report-components/src/styles/index.ts"),HeadingStyle=styled_components_browser_esm.ZP.h1(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\tfont: var(",");\n\tposition: relative;\n\tcolor: #000;\n\tmargin-bottom: 16px;\n\n\t&[data-hidden-token-for-pdf-parse]:after {\n\t\tposition: absolute;\n\t\tz-index: -1;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tcontent: attr(data-hidden-token-for-pdf-parse);\n\t\tcolor: #fff;\n\t}\n"])),(function(_ref){var _ref$as=_ref.as,as=void 0===_ref$as?"h1":_ref$as;return styles.R[as]})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","as"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Heading=function Heading(_ref){var children=_ref.children,_ref$as=_ref.as,as=void 0===_ref$as?"h1":_ref$as,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)(HeadingStyle,_objectSpread(_objectSpread({as:as,"data-testid":"report-heading"},props),{},{children:children}))};Heading.displayName="Heading";var Heading_Heading=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{as:{defaultValue:{value:"h1"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/report-components/src/components/Heading/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"libs/report-components/src/components/Heading/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./libs/report-components/src/styles/colors.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return colors}});var colors={primaryBlack:"--report-color-primary-black",primaryWhite:"--report-color-primary-white",primaryBlue:"--report-color-primary-blue",primaryRed:"--report-color-primary-red",darkBlue:"--report-color-dark-blue",orange:"--report-color-orange",yellow:"--report-color-yellow",green:"--report-color-green",darkGreen:"--report-color-dark-green",blue:"--report-color-blue",purple:"--report-color-purple",magenta:"--report-color-magenta",neutralGrey1:"--report-color-neutral-grey-1",neutralGrey2:"--report-color-neutral-grey-2",neutralGrey3:"--report-color-neutral-grey-3",neutralGrey4:"--report-color-neutral-grey-4",darkYellow:"--report-color-dark-yellow"}},"./libs/report-components/src/styles/fonts.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R:function(){return fonts}});var fonts={base:"--report-base-font",baseBold:"--report-base-bold-font",baseBolder:"--report-base-bolder-font",small:"--report-small-font",h1:"--report-h1-font",h2:"--report-h2-font",h3:"--report-h3-font",h4:"--report-h4-font",h5:"--report-h5-font",h6:"--report-h6-font"}},"./libs/report-components/src/styles/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return _colors__WEBPACK_IMPORTED_MODULE_1__.O},R:function(){return _fonts__WEBPACK_IMPORTED_MODULE_0__.R}});var _fonts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/report-components/src/styles/fonts.ts"),_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/report-components/src/styles/colors.ts")},"./libs/report-components/src/components/Heading/Heading.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var meta={component:__webpack_require__("./libs/report-components/src/components/Heading/Heading.tsx").Z};__webpack_exports__.default=meta;var Default={args:{as:"h1",children:"Heading"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    as: 'h1',\n    children: 'Heading'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]}}]);