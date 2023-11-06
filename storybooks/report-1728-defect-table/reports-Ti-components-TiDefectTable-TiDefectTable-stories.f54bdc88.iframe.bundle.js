"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[878],{"./apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTable.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return TiDefectTable_stories}});var _templateObject,TiDefectTableHeaderStyle_templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_stubs_=__webpack_require__("./apps/report/src/reports/Ti/__stubs__/index.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TiDefectTableStyle=styled_components_browser_esm.ZP.table(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\twidth: 100%;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n\n\ttd * {\n\t\tmax-height: 13px;\n\t}\n"]))),src=__webpack_require__("./libs/report-components/src/index.ts"),TiDefectTableHeaderStyle=styled_components_browser_esm.ZP.thead(TiDefectTableHeaderStyle_templateObject||(TiDefectTableHeaderStyle_templateObject=(0,taggedTemplateLiteral.Z)(["\n\twidth: 100%;\n\n\t> tr > th {\n\t\tmargin: 0;\n\t\ttext-align: left;\n\t\tfont: var(",");\n\t\tcolor: var(",");\n\t}\n\n\t> tr > th.condition,\n\t> tr > th.care {\n\t\ttext-align: center;\n\t\twidth: 100px; /* TODO: use size calculation from open MR */\n\t}\n"])),src.Rq.baseBold,src.O9.primaryBlack),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TiDefectTableHeader=function TiDefectTableHeader(){return(0,jsx_runtime.jsx)(TiDefectTableHeaderStyle,{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Ernst"}),(0,jsx_runtime.jsx)("th",{children:"Intensiteit"}),(0,jsx_runtime.jsx)("th",{children:"Omvang"}),(0,jsx_runtime.jsx)("th",{className:"condition",children:"Conditiescore"}),(0,jsx_runtime.jsx)("th",{className:"care",children:"Verzorging"})]})})};TiDefectTableHeader.displayName="TiDefectTableHeader";var TiDefectTableRowStyle_templateObject,_templateObject2,_templateObject3,TiDefectTable_TiDefectTableHeader=TiDefectTableHeader;try{TiDefectTableHeader.displayName="TiDefectTableHeader",TiDefectTableHeader.__docgenInfo={description:"",displayName:"TiDefectTableHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTableHeader.tsx#TiDefectTableHeader"]={docgenInfo:TiDefectTableHeader.__docgenInfo,name:"TiDefectTableHeader",path:"apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTableHeader.tsx#TiDefectTableHeader"})}catch(__react_docgen_typescript_loader_error){}var TiDefectTableRowStyle=styled_components_browser_esm.ZP.tr(TiDefectTableRowStyle_templateObject||(TiDefectTableRowStyle_templateObject=(0,taggedTemplateLiteral.Z)(["\n\toverflow: hidden;\n\twidth: 100%;\n\n\t& > td {\n\t\tpadding: 0;\n\t\tcolor: var(",");\n\t\tfont: var(",");\n\t\tline-height: 13px; /* TODO: use size calculation from open MR */\n\t}\n"])),src.O9.primaryBlack,src.Rq.base),TiDefectTableDataConditionStyle=styled_components_browser_esm.ZP.td(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n\tpadding: 0;\n\n\t& > span {\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t}\n"]))),TiDefectTableRow=(styled_components_browser_esm.ZP.td(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n\ttext-align: center;\n\n\t& ::before {\n\t\tcontent: '';\n\t\tdisplay: inline-block;\n\t\theight: 100%;\n\t\tvertical-align: middle;\n\t}\n"]))),function TiDefectTableRow(_ref){var seriousness=_ref.seriousness,intensity=_ref.intensity,aspect=_ref.aspect,careScore=_ref.careScore,conditionScore=_ref.conditionScore;return(0,jsx_runtime.jsxs)(TiDefectTableRowStyle,{"data-testid":"ti-defect-table-row",children:[(0,jsx_runtime.jsx)("td",{children:seriousness}),(0,jsx_runtime.jsx)("td",{children:intensity}),(0,jsx_runtime.jsx)("td",{children:aspect}),(0,jsx_runtime.jsx)(TiDefectTableDataConditionStyle,{children:(0,jsx_runtime.jsx)(src.jJ,{condition:careScore})}),(0,jsx_runtime.jsx)(TiDefectTableDataConditionStyle,{children:(0,jsx_runtime.jsx)(src.jJ,{condition:conditionScore})})]})});TiDefectTableRow.displayName="TiDefectTableRow";var TiDefectTable_TiDefectTableRow=TiDefectTableRow;try{TiDefectTableRow.displayName="TiDefectTableRow",TiDefectTableRow.__docgenInfo={description:"",displayName:"TiDefectTableRow",props:{seriousness:{defaultValue:null,description:"",name:"seriousness",required:!0,type:{name:"string"}},intensity:{defaultValue:null,description:"",name:"intensity",required:!0,type:{name:"string"}},aspect:{defaultValue:null,description:"",name:"aspect",required:!0,type:{name:"string"}},careScore:{defaultValue:null,description:"",name:"careScore",required:!0,type:{name:"string"}},conditionScore:{defaultValue:null,description:"",name:"conditionScore",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTableRow.tsx#TiDefectTableRow"]={docgenInfo:TiDefectTableRow.__docgenInfo,name:"TiDefectTableRow",path:"apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTableRow.tsx#TiDefectTableRow"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TiDefectTableBody=function TiDefectTableBody(_ref){var defect=_ref.defect;return(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsx)(src.sg,{colSpan:5}),(0,jsx_runtime.jsx)(TiDefectTable_TiDefectTableRow,_objectSpread({},defect))]})};TiDefectTableBody.displayName="TiDefectTableBody";var TiDefectTable_TiDefectTableBody=TiDefectTableBody;try{TiDefectTableBody.displayName="TiDefectTableBody",TiDefectTableBody.__docgenInfo={description:"",displayName:"TiDefectTableBody",props:{defect:{defaultValue:null,description:"",name:"defect",required:!0,type:{name:"{ id: string; seriousness: string; intensity: string; aspect: string; locationDescription: string; conditionScore: string; priority: string; RASEE: string; details: string; careScore: string; repairAdvice: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTableBody.tsx#TiDefectTableBody"]={docgenInfo:TiDefectTableBody.__docgenInfo,name:"TiDefectTableBody",path:"apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTableBody.tsx#TiDefectTableBody"})}catch(__react_docgen_typescript_loader_error){}var TiDefectTable=function TiDefectTable(_ref){var defect=_ref.defect;return(0,jsx_runtime.jsxs)(TiDefectTableStyle,{"data-testid":"ti-defect-table",children:[(0,jsx_runtime.jsx)(TiDefectTable_TiDefectTableHeader,{}),(0,jsx_runtime.jsx)(TiDefectTable_TiDefectTableBody,{defect:defect})]})};TiDefectTable.displayName="TiDefectTable";var _Default$parameters,_Default$parameters2,TiDefectTable_TiDefectTable=TiDefectTable;try{TiDefectTable.displayName="TiDefectTable",TiDefectTable.__docgenInfo={description:"",displayName:"TiDefectTable",props:{defect:{defaultValue:null,description:"",name:"defect",required:!0,type:{name:"{ id: string; seriousness: string; intensity: string; aspect: string; locationDescription: string; conditionScore: string; priority: string; RASEE: string; details: string; careScore: string; repairAdvice: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTable.tsx#TiDefectTable"]={docgenInfo:TiDefectTable.__docgenInfo,name:"TiDefectTable",path:"apps/report/src/reports/Ti/components/TiDefectTable/TiDefectTable.tsx#TiDefectTable"})}catch(__react_docgen_typescript_loader_error){}function TiDefectTable_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function TiDefectTable_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?TiDefectTable_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):TiDefectTable_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TiDefectTable_stories={component:TiDefectTable_TiDefectTable},Default={args:{defect:_stubs_.lW}};Default.parameters=TiDefectTable_stories_objectSpread(TiDefectTable_stories_objectSpread({},Default.parameters),{},{docs:TiDefectTable_stories_objectSpread(TiDefectTable_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:TiDefectTable_stories_objectSpread({originalSource:"{\n  args: {\n    defect: tiDefect1\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]}}]);