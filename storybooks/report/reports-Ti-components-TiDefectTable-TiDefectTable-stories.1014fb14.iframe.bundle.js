"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[878],{"./apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTable.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return TiDefectTable_TiDefectTable}});var _templateObject,TiDefectTableHeaderStyle_templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TiDefectTableStyle=styled_components_browser_esm.ZP.table(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\twidth: 100%;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n\n\ttd * {\n\t\tmax-height: 13px;\n\t}\n"]))),src=__webpack_require__("./libs/report-components/src/index.ts"),TiDefectTableHeaderStyle=styled_components_browser_esm.ZP.thead(TiDefectTableHeaderStyle_templateObject||(TiDefectTableHeaderStyle_templateObject=(0,taggedTemplateLiteral.Z)(["\n\twidth: 100%;\n\n\t> tr > th {\n\t\tmargin: 0;\n\t\ttext-align: left;\n\t\tfont: var(",");\n\t\tcolor: var(",");\n\t\tpadding-bottom: ",";\n\t}\n\n\t> tr > th.condition,\n\t> tr > th.care {\n\t\ttext-align: center;\n\t\twidth: ",";\n\t}\n\n\t> tr > th.seriousness,\n\t> tr > th.intensity {\n\t\twidth: ",";\n\t}\n"])),src.Rq.baseBold,src.O9.primaryBlack,(0,src.zG)(8),(0,src.kj)(100),(0,src.kj)(90)),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TiDefectTableHeader=function TiDefectTableHeader(){return(0,jsx_runtime.jsx)(TiDefectTableHeaderStyle,{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{className:"seriousness",children:"Ernst"}),(0,jsx_runtime.jsx)("th",{className:"intensity",children:"Intensiteit"}),(0,jsx_runtime.jsx)("th",{children:"Omvang"}),(0,jsx_runtime.jsx)("th",{className:"condition",children:"Conditiescore"}),(0,jsx_runtime.jsx)("th",{className:"care",children:"Verzorging"})]})})};TiDefectTableHeader.displayName="TiDefectTableHeader";var TiDefectTable_TiDefectTableHeader=TiDefectTableHeader;try{TiDefectTableHeader.displayName="TiDefectTableHeader",TiDefectTableHeader.__docgenInfo={description:"",displayName:"TiDefectTableHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTableHeader.tsx#TiDefectTableHeader"]={docgenInfo:TiDefectTableHeader.__docgenInfo,name:"TiDefectTableHeader",path:"apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTableHeader.tsx#TiDefectTableHeader"})}catch(__react_docgen_typescript_loader_error){}var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),i18n_src=__webpack_require__("./libs/i18n/src/index.ts");function translateIntensityScore(score){var i18nKey=function getIntensityScoreI18nKey(score){return[1,2,3].includes(score)?"level".concat(score):null}(score);return i18nKey?(0,i18n_src.W)("nl","intensity.".concat(i18nKey)):""}var TiDefectTableRowStyle_templateObject;function translateExtendScore(score){var i18nKey=function getExtendScoreI18nKey(score){return[1,2,3,4,5].includes(score)?"level".concat(score):null}(score);return i18nKey?(0,i18n_src.W)("nl","extend.".concat(i18nKey)):""}var TiDefectTableRowStyle=styled_components_browser_esm.ZP.tr(TiDefectTableRowStyle_templateObject||(TiDefectTableRowStyle_templateObject=(0,taggedTemplateLiteral.Z)(["\n\toverflow: hidden;\n\twidth: 100%;\n\n\t& > td {\n\t\tpadding: 0;\n\t\tcolor: var(",");\n\t\tfont: var(",");\n\t\tline-height: ",";\n\t}\n\n\t& > td.center {\n\t\ttext-align: center;\n\t}\n"])),src.O9.primaryBlack,src.Rq.base,(0,src.zG)(13)),TiDefectTableRow=function TiDefectTableRow(_ref){var score,i18nKey,seriousness=_ref.seriousness,intensity=_ref.intensity,extend=_ref.extend,careScore=_ref.careScore,condition=_ref.condition;return(0,jsx_runtime.jsxs)(TiDefectTableRowStyle,{"data-testid":"ti-defect-table-row",children:[(0,jsx_runtime.jsx)("td",{children:(score=seriousness,i18nKey=function getSeriousnessScoreI18nKey(score){return[1,2,3].includes(score)?"level".concat(score):null}(score),i18nKey?(0,i18n_src.W)("nl","seriousness.".concat(i18nKey)):"")}),(0,jsx_runtime.jsx)("td",{children:translateIntensityScore(intensity)}),(0,jsx_runtime.jsx)("td",{children:translateExtendScore(extend)}),(0,jsx_runtime.jsx)("td",{className:"center",children:(0,jsx_runtime.jsx)(src.jJ,{condition:null==condition?void 0:condition.score})}),(0,jsx_runtime.jsx)("td",{className:"center",children:(0,jsx_runtime.jsx)(src.jJ,{condition:careScore})})]})};TiDefectTableRow.displayName="TiDefectTableRow";var TiDefectTable_TiDefectTableRow=TiDefectTableRow;try{TiDefectTableRow.displayName="TiDefectTableRow",TiDefectTableRow.__docgenInfo={description:"",displayName:"TiDefectTableRow",props:{condition:{defaultValue:null,description:"",name:"condition",required:!1,type:{name:"{ score: string; }"}},seriousness:{defaultValue:null,description:"",name:"seriousness",required:!1,type:{name:"number"}},intensity:{defaultValue:null,description:"",name:"intensity",required:!1,type:{name:"number"}},extend:{defaultValue:null,description:"",name:"extend",required:!1,type:{name:"number"}},careScore:{defaultValue:null,description:"",name:"careScore",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTableRow.tsx#TiDefectTableRow"]={docgenInfo:TiDefectTableRow.__docgenInfo,name:"TiDefectTableRow",path:"apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTableRow.tsx#TiDefectTableRow"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TiDefectTableBody=function TiDefectTableBody(_ref){var defect=_ref.defect;return(0,jsx_runtime.jsx)("tbody",{children:(0,jsx_runtime.jsx)(TiDefectTable_TiDefectTableRow,_objectSpread({},defect))})};TiDefectTableBody.displayName="TiDefectTableBody";var TiDefectTable_TiDefectTableBody=TiDefectTableBody;try{TiDefectTableBody.displayName="TiDefectTableBody",TiDefectTableBody.__docgenInfo={description:"",displayName:"TiDefectTableBody",props:{defect:{defaultValue:null,description:"",name:"defect",required:!0,type:{name:"{ id: string; name?: string; seriousness?: number; intensity?: number; aspect?: string; extend?: number; locationDescription?: string; ramsTotalPriority?: string; ramsR?: string; ramsA?: string; ramsS?: string; ... 6 more ...; condition?: { ...; }; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTableBody.tsx#TiDefectTableBody"]={docgenInfo:TiDefectTableBody.__docgenInfo,name:"TiDefectTableBody",path:"apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTableBody.tsx#TiDefectTableBody"})}catch(__react_docgen_typescript_loader_error){}var TiDefectTable=function TiDefectTable(_ref){var defect=_ref.defect;return(0,jsx_runtime.jsxs)(TiDefectTableStyle,{"data-testid":"ti-defect-table",children:[(0,jsx_runtime.jsx)(TiDefectTable_TiDefectTableHeader,{}),(0,jsx_runtime.jsx)(TiDefectTable_TiDefectTableBody,{defect:defect})]})};TiDefectTable.displayName="TiDefectTable";var TiDefectTable_TiDefectTable=TiDefectTable;try{TiDefectTable.displayName="TiDefectTable",TiDefectTable.__docgenInfo={description:"",displayName:"TiDefectTable",props:{defect:{defaultValue:null,description:"",name:"defect",required:!0,type:{name:"{ id: string; name?: string; seriousness?: number; intensity?: number; aspect?: string; extend?: number; locationDescription?: string; ramsTotalPriority?: string; ramsR?: string; ramsA?: string; ramsS?: string; ... 6 more ...; condition?: { ...; }; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTable.tsx#TiDefectTable"]={docgenInfo:TiDefectTable.__docgenInfo,name:"TiDefectTable",path:"apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTable.tsx#TiDefectTable"})}catch(__react_docgen_typescript_loader_error){}},"./apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTable.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_stubs___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./apps/report/src/reports/Ti/__stubs__/index.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var meta={component:__webpack_require__("./apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTable.tsx").Z};__webpack_exports__.default=meta;var Default={args:{defect:_stubs___WEBPACK_IMPORTED_MODULE_1__.lW}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    defect: tiDefect1\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]}}]);