"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[215],{"./libs/ui/reports/shared/src/styles/colors.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return colors}});var colors={primaryBlack:"--report-color-primary-black",primaryWhite:"--report-color-primary-white",primaryBlue:"--report-color-primary-blue",primaryRed:"--report-color-primary-red",darkBlue:"--report-color-dark-blue",orange:"--report-color-orange",yellow:"--report-color-yellow",green:"--report-color-green",darkGreen:"--report-color-dark-green",blue:"--report-color-blue",purple:"--report-color-purple",magenta:"--report-color-magenta",neutralGrey1:"--report-color-neutral-grey-1",neutralGrey2:"--report-color-neutral-grey-2",neutralGrey3:"--report-color-neutral-grey-3",neutralGrey4:"--report-color-neutral-grey-4",darkYellow:"--report-color-dark-yellow"}},"./libs/ui/reports/shared/src/styles/fonts.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R:function(){return fonts}});var fonts={base:"--report-base-font",baseBold:"--report-base-bold-font",baseBolder:"--report-base-bolder-font",small:"--report-small-font",smallBold:"--report-small-bold-font",h1:"--report-h1-font",h2:"--report-h2-font",h3:"--report-h3-font",h4:"--report-h4-font",h5:"--report-h5-font",h6:"--report-h6-font"}},"./libs/ui/reports/shared/src/styles/fonts.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FontGrid:function(){return FontGrid},__namedExportsOrder:function(){return __namedExportsOrder}});var _FontGrid$parameters,_FontGrid$parameters2,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/reports/shared/src/styles/colors.ts"),_fonts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/reports/shared/src/styles/fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_exports__.default={title:"Fonts"};var FontGrid=function FontGrid(){var fontKeys=Object.keys(_fonts__WEBPACK_IMPORTED_MODULE_2__.R);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))",gap:"1em"},children:fontKeys.map((function(fontKey){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{backgroundColor:"var(".concat(_colors__WEBPACK_IMPORTED_MODULE_1__.O.neutralGrey1,")"),color:"var(".concat(_colors__WEBPACK_IMPORTED_MODULE_1__.O.primaryBlack,")"),font:"var(".concat(_fonts__WEBPACK_IMPORTED_MODULE_2__.R[fontKey],")"),padding:"1em",display:"flex",flexDirection:"column",gap:"1em",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:[fontKey,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{style:{font:"var(".concat(_fonts__WEBPACK_IMPORTED_MODULE_2__.R.small,")"),whiteSpace:"nowrap"},children:_fonts__WEBPACK_IMPORTED_MODULE_2__.R[fontKey]})]},fontKey)}))})};FontGrid.displayName="FontGrid",FontGrid.parameters=_objectSpread(_objectSpread({},FontGrid.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FontGrid$parameters=FontGrid.parameters)||void 0===_FontGrid$parameters?void 0:_FontGrid$parameters.docs),{},{source:_objectSpread({originalSource:"() => {\n  const fontKeys = (Object.keys(fonts) as FontKey[]);\n  return <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',\n    gap: '1em'\n  }}>\n            {fontKeys.map(fontKey => <div key={fontKey} style={{\n      backgroundColor: `var(${colors.neutralGrey1})`,\n      color: `var(${colors.primaryBlack})`,\n      font: `var(${fonts[fontKey]})`,\n      padding: '1em',\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '1em',\n      alignItems: 'center',\n      justifyContent: 'center',\n      boxSizing: 'border-box'\n    }}>\n                    {fontKey}\n                    <span style={{\n        font: `var(${fonts.small})`,\n        whiteSpace: 'nowrap'\n      }}>{fonts[fontKey]}</span>\n                </div>)}\n        </div>;\n}"},null===(_FontGrid$parameters2=FontGrid.parameters)||void 0===_FontGrid$parameters2||null===(_FontGrid$parameters2=_FontGrid$parameters2.docs)||void 0===_FontGrid$parameters2?void 0:_FontGrid$parameters2.source)})});var __namedExportsOrder=["FontGrid"]}}]);