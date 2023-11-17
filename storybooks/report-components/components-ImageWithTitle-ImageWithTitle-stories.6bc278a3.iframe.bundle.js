"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[626],{"./libs/report-components/src/styles/colors.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return colors}});var colors={primaryBlack:"--report-color-primary-black",primaryWhite:"--report-color-primary-white",primaryBlue:"--report-color-primary-blue",primaryRed:"--report-color-primary-red",darkBlue:"--report-color-dark-blue",orange:"--report-color-orange",yellow:"--report-color-yellow",green:"--report-color-green",darkGreen:"--report-color-dark-green",blue:"--report-color-blue",purple:"--report-color-purple",magenta:"--report-color-magenta",neutralGrey1:"--report-color-neutral-grey-1",neutralGrey2:"--report-color-neutral-grey-2",neutralGrey3:"--report-color-neutral-grey-3",neutralGrey4:"--report-color-neutral-grey-4",darkYellow:"--report-color-dark-yellow"}},"./libs/report-components/src/styles/fonts.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R:function(){return fonts}});var fonts={base:"--report-base-font",baseBold:"--report-base-bold-font",baseBolder:"--report-base-bolder-font",small:"--report-small-font",smallBold:"--report-small-bold-font",h1:"--report-h1-font",h2:"--report-h2-font",h3:"--report-h3-font",h4:"--report-h4-font",h5:"--report-h5-font",h6:"--report-h6-font"}},"./libs/report-components/src/styles/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return _colors__WEBPACK_IMPORTED_MODULE_1__.O},R:function(){return _fonts__WEBPACK_IMPORTED_MODULE_0__.R}});var _fonts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/report-components/src/styles/fonts.ts"),_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/report-components/src/styles/colors.ts")},"./libs/report-components/src/utils/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return calculatePrintHeight},k:function(){return calculatePrintWidth}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var DESIGN_SHEET_WIDTH_PX=595,DESIGN_SHEET_HEIGHT_PX=842,A4_WIDTH_MM=210,A4_HEIGHT_MM=297,pixelsThatBecome3mm=new Array(12).fill(0).map((function(_,i){return i+5})),pixelsThatBecome6mm=new Array(8).fill(0).map((function(_,i){return i+16})),commonSizes=_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},[0,1,2].reduce((function(acc,px){return _objectSpread(_objectSpread({},acc),{},(0,defineProperty.Z)({},px,"".concat(px,"px")))}),{})),[4].reduce((function(acc,px){return _objectSpread(_objectSpread({},acc),{},(0,defineProperty.Z)({},px,"2mm"))}),{})),pixelsThatBecome3mm.reduce((function(acc,px){return _objectSpread(_objectSpread({},acc),{},(0,defineProperty.Z)({},px,"3mm"))}),{})),pixelsThatBecome6mm.reduce((function(acc,px){return _objectSpread(_objectSpread({},acc),{},(0,defineProperty.Z)({},px,"6mm"))}),{})),[24].reduce((function(acc,px){return _objectSpread(_objectSpread({},acc),{},(0,defineProperty.Z)({},px,"9mm"))}),{})),commonWidths=_objectSpread({},commonSizes),commonHeights=_objectSpread({},commonSizes);function calculatePrintWidth(px){if(px in commonWidths)return commonWidths[px];var mm=Math.round(px/DESIGN_SHEET_WIDTH_PX*A4_WIDTH_MM);return"".concat(mm,"mm")}function calculatePrintHeight(px){if(px in commonHeights)return commonHeights[px];var mm=Math.round(px/DESIGN_SHEET_HEIGHT_PX*A4_HEIGHT_MM);return"".concat(mm,"mm")}},"./libs/report-components/src/components/ImageWithTitle/ImageWithTitle.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ImageWithTitle_stories}});var _templateObject,_templateObject2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),ResponsiveImage=__webpack_require__("./libs/report-components/src/components/ResponsiveImage/ResponsiveImage.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./libs/report-components/src/styles/index.ts"),utils=__webpack_require__("./libs/report-components/src/utils/index.ts"),ImageWithTitleWrapperStyle=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\tmin-width: ",";\n\tmin-height: ",";\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n"])),(0,utils.k)(256),(0,utils.z)(207)),ImageWithTitleTitleStyle=styled_components_browser_esm.ZP.span(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n\tcounter-increment: figure-counter;\n\tcolor: var(",");\n\tfont: var(",");\n\tletter-spacing: 0.2px;\n\talign-self: flex-start;\n\tpadding-left: ",";\n\t&:before {\n\t\tcontent: 'Figuur ' counter(figure-counter) ' : ';\n\t}\n"])),styles.O.primaryBlack,styles.R.base,(0,utils.k)(8)),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["imageUrl","title","token"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ImageWithTitle=function ImageWithTitle(_ref){var imageUrl=_ref.imageUrl,title=_ref.title,token=_ref.token,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsxs)(ImageWithTitleWrapperStyle,_objectSpread(_objectSpread({"data-testid":"report-image-with-title"},props),{},{children:[(0,jsx_runtime.jsx)(ResponsiveImage.Z,{imageUrl:imageUrl,token:token}),(0,jsx_runtime.jsx)(ImageWithTitleTitleStyle,{children:title})]}))};ImageWithTitle.displayName="ImageWithTitle";var _Default$parameters,_Default$parameters2,ImageWithTitle_ImageWithTitle=ImageWithTitle;try{ImageWithTitle.displayName="ImageWithTitle",ImageWithTitle.__docgenInfo={description:"",displayName:"ImageWithTitle",props:{imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},token:{defaultValue:null,description:"",name:"token",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/report-components/src/components/ImageWithTitle/ImageWithTitle.tsx#ImageWithTitle"]={docgenInfo:ImageWithTitle.__docgenInfo,name:"ImageWithTitle",path:"libs/report-components/src/components/ImageWithTitle/ImageWithTitle.tsx#ImageWithTitle"})}catch(__react_docgen_typescript_loader_error){}function ImageWithTitle_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ImageWithTitle_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ImageWithTitle_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ImageWithTitle_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ImageWithTitle_stories={component:ImageWithTitle_ImageWithTitle},Default={args:{imageUrl:"https://via.placeholder.com/350",title:"Title"}};Default.parameters=ImageWithTitle_stories_objectSpread(ImageWithTitle_stories_objectSpread({},Default.parameters),{},{docs:ImageWithTitle_stories_objectSpread(ImageWithTitle_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:ImageWithTitle_stories_objectSpread({originalSource:"{\n  args: {\n    imageUrl: 'https://via.placeholder.com/350',\n    title: 'Title'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]}}]);