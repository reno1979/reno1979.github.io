"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[962],{"./apps/report/src/reports/Ti/components/TiUnitTable/TiUnitTable.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return TiUnitTable_stories}});var _templateObject,TiUnitTableHeaderStyle_templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_stubs_=__webpack_require__("./apps/report/src/reports/Ti/__stubs__/index.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),src=__webpack_require__("./libs/report-components/src/index.ts"),TiUnitTableStyle=styled_components_browser_esm.ZP.table(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\twidth: 100%;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n\n\ttd {\n\t\tpadding: 0;\n\t\tcolor: var(",");\n\t\tfont: var(",");\n\t}\n\n\ttd * {\n\t\tmax-height: 13px;\n\t}\n"])),src.O9.primaryBlack,src.Rq.base),TiUnitTableHeaderStyle=styled_components_browser_esm.ZP.thead(TiUnitTableHeaderStyle_templateObject||(TiUnitTableHeaderStyle_templateObject=(0,taggedTemplateLiteral.Z)(["\n\twidth: 100%;\n\n\t> tr > th {\n\t\tmargin: 0;\n\t\ttext-align: center;\n\t\tfont: var(",");\n\t\tcolor: var(",");\n\t}\n\n\t> tr > th:nth-child(1) {\n\t\ttext-align: left;\n\t}\n\n\t> tr > th.quantity {\n\t\twidth: 70px; /* TODO: use size calculation from open MR */\n\t}\n\n\t> tr > th.quantityOfMeasurement,\n\t> tr > th.constructionyear,\n\t> tr > th.care,\n\t> tr > th.condition {\n\t\twidth: 60px; /* TODO: use size calculation from open MR */\n\t}\n"])),src.Rq.baseBold,src.O9.primaryBlack),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TiUnitTableHeader=function TiUnitTableHeader(){return(0,jsx_runtime.jsx)(TiUnitTableHeaderStyle,{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Bouwdeel"}),(0,jsx_runtime.jsx)("th",{children:"Materiaal"}),(0,jsx_runtime.jsx)("th",{className:"quantity",children:"Hoeveelheid"}),(0,jsx_runtime.jsx)("th",{className:"quantityOfMeasurement",children:"Eenheid"}),(0,jsx_runtime.jsx)("th",{className:"constructionyear",children:"Bouwjaar"}),(0,jsx_runtime.jsx)("th",{children:"Locatie"}),(0,jsx_runtime.jsx)("th",{className:"condition",children:"Conditie"}),(0,jsx_runtime.jsx)("th",{className:"care",children:"Verzorging"})]})})};TiUnitTableHeader.displayName="TiUnitTableHeader";var TiUnitTableRowStyle_templateObject,_templateObject2,_templateObject3,_templateObject4,TiUnitTable_TiUnitTableHeader=TiUnitTableHeader;try{TiUnitTableHeader.displayName="TiUnitTableHeader",TiUnitTableHeader.__docgenInfo={description:"",displayName:"TiUnitTableHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiUnitTable/TiUnitTableHeader.tsx#TiUnitTableHeader"]={docgenInfo:TiUnitTableHeader.__docgenInfo,name:"TiUnitTableHeader",path:"apps/report/src/reports/Ti/components/TiUnitTable/TiUnitTableHeader.tsx#TiUnitTableHeader"})}catch(__react_docgen_typescript_loader_error){}var TiUnitTableRowStyle=styled_components_browser_esm.ZP.tr(TiUnitTableRowStyle_templateObject||(TiUnitTableRowStyle_templateObject=(0,taggedTemplateLiteral.Z)(["\n\toverflow: hidden;\n\twidth: 100%;\n\n\t& > td {\n\t\tline-height: 13px; /* TODO: use size calculation from open MR */\n\t}\n\n\t& > td:first-child {\n\t\tpadding-left: 8px; /* TODO: use size calculation from open MR */\n\t}\n"]))),TiUnitTableDataConditionStyle=styled_components_browser_esm.ZP.td(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n\ttext-align: center;\n\tpadding: 0;\n\n\t& > span {\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t}\n"]))),TiUnitTableDataTextStyle=styled_components_browser_esm.ZP.td(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n\ttext-align: center;\n\n\t& ::before {\n\t\tcontent: '';\n\t\tdisplay: inline-block;\n\t\theight: 100%;\n\t\tvertical-align: middle;\n\t}\n"]))),TiUnitTextStyle=styled_components_browser_esm.ZP.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n\ttext-align: left;\n\theight: 13px; /* TODO: use size calculation from open MR */\n\tdisplay: inline-block;\n"]))),TiUnitTableRow=function TiUnitTableRow(_ref){var name=_ref.name,material=_ref.material,quantity=_ref.quantity,quantityUnitOfMeasurement=_ref.quantityUnitOfMeasurement,constructionYear=_ref.constructionYear,location=_ref.location,careScore=_ref.careScore,conditionScore=_ref.conditionScore;return(0,jsx_runtime.jsxs)(TiUnitTableRowStyle,{"data-testid":"ti-unit-table-row",children:[(0,jsx_runtime.jsx)("td",{children:name}),(0,jsx_runtime.jsx)(TiUnitTableDataTextStyle,{children:(0,jsx_runtime.jsx)(TiUnitTextStyle,{children:material})}),(0,jsx_runtime.jsx)(TiUnitTableDataTextStyle,{children:(0,jsx_runtime.jsx)(TiUnitTextStyle,{children:quantity})}),(0,jsx_runtime.jsx)(TiUnitTableDataTextStyle,{children:(0,jsx_runtime.jsx)(TiUnitTextStyle,{children:"pcs"===quantityUnitOfMeasurement?"st":quantityUnitOfMeasurement})}),(0,jsx_runtime.jsx)(TiUnitTableDataTextStyle,{children:(0,jsx_runtime.jsx)(TiUnitTextStyle,{children:constructionYear})}),(0,jsx_runtime.jsx)(TiUnitTableDataTextStyle,{children:(0,jsx_runtime.jsx)(TiUnitTextStyle,{children:location})}),(0,jsx_runtime.jsx)(TiUnitTableDataConditionStyle,{children:(0,jsx_runtime.jsx)(src.jJ,{condition:careScore})}),(0,jsx_runtime.jsx)(TiUnitTableDataConditionStyle,{children:(0,jsx_runtime.jsx)(src.jJ,{condition:conditionScore})})]})};TiUnitTableRow.displayName="TiUnitTableRow";var TiUnitTable_TiUnitTableRow=TiUnitTableRow;try{TiUnitTableRow.displayName="TiUnitTableRow",TiUnitTableRow.__docgenInfo={description:"",displayName:"TiUnitTableRow",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},constructionYear:{defaultValue:null,description:"",name:"constructionYear",required:!0,type:{name:"number"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"string"}},careScore:{defaultValue:null,description:"",name:"careScore",required:!0,type:{name:"string"}},conditionScore:{defaultValue:null,description:"",name:"conditionScore",required:!0,type:{name:"string"}},material:{defaultValue:null,description:"",name:"material",required:!0,type:{name:"string"}},quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},quantityUnitOfMeasurement:{defaultValue:null,description:"",name:"quantityUnitOfMeasurement",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiUnitTable/TiUnitTableRow.tsx#TiUnitTableRow"]={docgenInfo:TiUnitTableRow.__docgenInfo,name:"TiUnitTableRow",path:"apps/report/src/reports/Ti/components/TiUnitTable/TiUnitTableRow.tsx#TiUnitTableRow"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TiUnitTableBody=function TiUnitTableBody(_ref){var unit=_ref.unit;return(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsx)(src.sg,{colSpan:8}),(0,jsx_runtime.jsx)(TiUnitTable_TiUnitTableRow,_objectSpread({},unit))]})};TiUnitTableBody.displayName="TiUnitTableBody";var TiUnitTable_TiUnitTableBody=TiUnitTableBody;try{TiUnitTableBody.displayName="TiUnitTableBody",TiUnitTableBody.__docgenInfo={description:"",displayName:"TiUnitTableBody",props:{unit:{defaultValue:null,description:"",name:"unit",required:!0,type:{name:"{ id: string; name: string; material: string; quantity: number; quantityUnitOfMeasurement: string; constructionYear: number; location: string; conditionId: string; condition: string; conditionScore: string; careScore: string; measures: { ...; }[]; images: { ...; }[]; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiUnitTable/TiUnitTableBody.tsx#TiUnitTableBody"]={docgenInfo:TiUnitTableBody.__docgenInfo,name:"TiUnitTableBody",path:"apps/report/src/reports/Ti/components/TiUnitTable/TiUnitTableBody.tsx#TiUnitTableBody"})}catch(__react_docgen_typescript_loader_error){}var TiUnitTable=function TiUnitTable(_ref){var unit=_ref.unit;return(0,jsx_runtime.jsxs)(TiUnitTableStyle,{"data-testid":"ti-unit-table",children:[(0,jsx_runtime.jsx)(TiUnitTable_TiUnitTableHeader,{}),(0,jsx_runtime.jsx)(TiUnitTable_TiUnitTableBody,{unit:unit})]})};TiUnitTable.displayName="TiUnitTable";var _Default$parameters,_Default$parameters2,TiUnitTable_TiUnitTable=TiUnitTable;try{TiUnitTable.displayName="TiUnitTable",TiUnitTable.__docgenInfo={description:"",displayName:"TiUnitTable",props:{unit:{defaultValue:null,description:"",name:"unit",required:!0,type:{name:"{ id: string; name: string; material: string; quantity: number; quantityUnitOfMeasurement: string; constructionYear: number; location: string; conditionId: string; condition: string; conditionScore: string; careScore: string; measures: { ...; }[]; images: { ...; }[]; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiUnitTable/TiUnitTable.tsx#TiUnitTable"]={docgenInfo:TiUnitTable.__docgenInfo,name:"TiUnitTable",path:"apps/report/src/reports/Ti/components/TiUnitTable/TiUnitTable.tsx#TiUnitTable"})}catch(__react_docgen_typescript_loader_error){}function TiUnitTable_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function TiUnitTable_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?TiUnitTable_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):TiUnitTable_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TiUnitTable_stories={component:TiUnitTable_TiUnitTable},Default={args:{unit:_stubs_.N5}};Default.parameters=TiUnitTable_stories_objectSpread(TiUnitTable_stories_objectSpread({},Default.parameters),{},{docs:TiUnitTable_stories_objectSpread(TiUnitTable_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:TiUnitTable_stories_objectSpread({originalSource:"{\n  args: {\n    unit: tiUnit1\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]}}]);