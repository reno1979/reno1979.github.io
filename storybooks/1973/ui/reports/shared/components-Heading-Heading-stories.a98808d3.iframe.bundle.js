(self.webpackChunkaip=self.webpackChunkaip||[]).push([[473],{"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":function(module){module.exports=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js":function(module){module.exports=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings},module.exports.__esModule=!0,module.exports.default=module.exports},"./libs/ui/reports/shared/src/components/Heading/Heading.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,meta={component:__webpack_require__("./libs/ui/reports/shared/src/components/Heading/Heading.tsx").Z};__webpack_exports__.default=meta;var Default={args:{as:"h1",children:"Heading"}};Default.parameters=Object.assign({},Default.parameters,{docs:Object.assign({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:Object.assign({originalSource:"{\n  args: {\n    as: 'h1',\n    children: 'Heading'\n  }\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2=_Default$parameters2.docs)?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./libs/ui/reports/shared/src/components/Heading/Heading.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Heading_Heading}});var _templateObject,objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"),objectWithoutPropertiesLoose_default=__webpack_require__.n(objectWithoutPropertiesLoose),taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./libs/ui/reports/shared/src/styles/index.ts"),utils=__webpack_require__("./libs/ui/reports/shared/src/utils/index.ts"),HeadingStyle=styled_components_browser_esm.ZP.h1(_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["\n\tfont: var(",");\n\tposition: relative;\n\tcolor: var(",");\n\tmargin: 0 0 "," 0;\n\n\t> [","]:empty {\n\t\tdisplay: none;\n\t}\n\n\t> [","] {\n\t\tposition: absolute;\n\t\tz-index: -1;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tfont-size: 3px; /* This size is small enough to not be visible, but big enough to be parsed by PDF parsers */\n\t\tcolor: var(",");\n\t}\n"])),(function(_ref){var _ref$as=_ref.as,as=void 0===_ref$as?"h1":_ref$as;return styles.R[as]}),styles.O.primaryBlack,(0,utils.z)(16),"data-hidden-token-for-pdf-parse","data-hidden-token-for-pdf-parse",styles.O.primaryWhite),jsx_dev_runtime=__webpack_require__("./node_modules/react/jsx-dev-runtime.js"),_excluded=["children","as"],_jsxFileName="/home/rene/Projects/bor-aip-ci/libs/ui/reports/shared/src/components/Heading/Heading.tsx",Heading=function Heading(_ref){var _hiddenTokenAttribute,children=_ref.children,_ref$as=_ref.as,as=void 0===_ref$as?"h1":_ref$as,props=objectWithoutPropertiesLoose_default()(_ref,_excluded),hiddenTokenAttribute=((_hiddenTokenAttribute={})["data-hidden-token-for-pdf-parse"]=!0,_hiddenTokenAttribute);return(0,jsx_dev_runtime.jsxDEV)(HeadingStyle,Object.assign({as:as,"data-testid":"report-heading"},props,{children:[children,(0,jsx_dev_runtime.jsxDEV)("span",Object.assign({},hiddenTokenAttribute),void 0,!1,{fileName:_jsxFileName,lineNumber:20,columnNumber:4},undefined)]}),void 0,!0,{fileName:_jsxFileName,lineNumber:18,columnNumber:3},undefined)},Heading_Heading=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{as:{defaultValue:{value:"h1"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/reports/shared/src/components/Heading/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"libs/ui/reports/shared/src/components/Heading/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./libs/ui/reports/shared/src/styles/colors.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{O:function(){return colors}});var colors={primaryBlack:"--report-color-primary-black",primaryWhite:"--report-color-primary-white",primaryBlue:"--report-color-primary-blue",primaryRed:"--report-color-primary-red",darkBlue:"--report-color-dark-blue",orange:"--report-color-orange",yellow:"--report-color-yellow",green:"--report-color-green",darkGreen:"--report-color-dark-green",blue:"--report-color-blue",purple:"--report-color-purple",magenta:"--report-color-magenta",neutralGrey1:"--report-color-neutral-grey-1",neutralGrey2:"--report-color-neutral-grey-2",neutralGrey3:"--report-color-neutral-grey-3",neutralGrey4:"--report-color-neutral-grey-4",darkYellow:"--report-color-dark-yellow"}},"./libs/ui/reports/shared/src/styles/fonts.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{R:function(){return fonts}});var fonts={base:"--report-base-font",baseBold:"--report-base-bold-font",baseBolder:"--report-base-bolder-font",small:"--report-small-font",smallBold:"--report-small-bold-font",h1:"--report-h1-font",h2:"--report-h2-font",h3:"--report-h3-font",h4:"--report-h4-font",h5:"--report-h5-font",h6:"--report-h6-font"}},"./libs/ui/reports/shared/src/styles/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{O:function(){return _colors__WEBPACK_IMPORTED_MODULE_1__.O},R:function(){return _fonts__WEBPACK_IMPORTED_MODULE_0__.R}});var _fonts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/reports/shared/src/styles/fonts.ts"),_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/reports/shared/src/styles/colors.ts")},"./libs/ui/reports/shared/src/utils/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{z:function(){return calculatePrintHeight},k:function(){return calculatePrintWidth}});var DESIGN_SHEET_WIDTH_PX=595,DESIGN_SHEET_HEIGHT_PX=842,A4_WIDTH_MM=210,A4_HEIGHT_MM=297,pixelsThatBecome3mm=new Array(12).fill(0).map((function(_,i){return i+5})),pixelsThatBecome6mm=new Array(8).fill(0).map((function(_,i){return i+16})),commonSizes=Object.assign({},[0,1,2].reduce((function(acc,px){var _Object$assign;return Object.assign({},acc,((_Object$assign={})[px]=px+"px",_Object$assign))}),{}),[4].reduce((function(acc,px){var _Object$assign2;return Object.assign({},acc,((_Object$assign2={})[px]="2mm",_Object$assign2))}),{}),pixelsThatBecome3mm.reduce((function(acc,px){var _Object$assign3;return Object.assign({},acc,((_Object$assign3={})[px]="3mm",_Object$assign3))}),{}),pixelsThatBecome6mm.reduce((function(acc,px){var _Object$assign4;return Object.assign({},acc,((_Object$assign4={})[px]="6mm",_Object$assign4))}),{}),[24].reduce((function(acc,px){var _Object$assign5;return Object.assign({},acc,((_Object$assign5={})[px]="9mm",_Object$assign5))}),{})),commonWidths=Object.assign({},commonSizes),commonHeights=Object.assign({},commonSizes);function calculatePrintWidth(px){return px in commonWidths?commonWidths[px]:Math.round(px/DESIGN_SHEET_WIDTH_PX*A4_WIDTH_MM)+"mm"}function calculatePrintHeight(px){return px in commonHeights?commonHeights[px]:Math.round(px/DESIGN_SHEET_HEIGHT_PX*A4_HEIGHT_MM)+"mm"}}}]);