"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[990],{"./apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureTable.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return TiMeasureTable_TiMeasureTable}});var _templateObject,TiMeasureTableHeaderStyle_templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TiMeasureTableStyle=styled_components_browser_esm.ZP.table(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\twidth: 100%;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n\n\tcounter-reset: row-counter;\n"]))),src=__webpack_require__("./libs/report-components/src/index.ts"),TiMeasureTableHeaderStyle=styled_components_browser_esm.ZP.thead(TiMeasureTableHeaderStyle_templateObject||(TiMeasureTableHeaderStyle_templateObject=(0,taggedTemplateLiteral.Z)(["\n\twidth: 100%;\n\n\ttr > th {\n\t\tmargin: 0;\n\t\ttext-align: left;\n\t\tfont: var(",");\n\t\tcolor: var(",");\n\t\tpadding-bottom: ",";\n\t}\n\n\ttr > th.planyear,\n\ttr > th.cyclus {\n\t\twidth: ",";\n\t}\n\n\ttr > th.quantity {\n\t\twidth: ",";\n\t}\n\n\ttr > th.totalCosts {\n\t\tmin-width: ",";\n\t}\n\n\ttr > th.planyear,\n\ttr > th.cyclus,\n\ttr > th.quantity {\n\t\ttext-align: center;\n\t}\n"])),src.Rq.baseBolder,src.O9.primaryBlack,(0,src.zG)(8),(0,src.kj)(54),(0,src.kj)(84),(0,src.kj)(86)),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TiMeasureTableHeader=function TiMeasureTableHeader(){return(0,jsx_runtime.jsx)(TiMeasureTableHeaderStyle,{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{colSpan:2,children:"Maatregelen"}),(0,jsx_runtime.jsx)("th",{className:"planyear",children:"Planjaar"}),(0,jsx_runtime.jsx)("th",{className:"quantity",children:"Hoeveelheid"}),(0,jsx_runtime.jsx)("th",{children:"Eenheidsprijs"}),(0,jsx_runtime.jsx)("th",{className:"cyclus",children:"Cyclus"}),(0,jsx_runtime.jsx)("th",{className:"totalCosts",children:"Totale kosten"})]})})};TiMeasureTableHeader.displayName="TiMeasureTableHeader";var TiMeasureTable_TiMeasureTableHeader=TiMeasureTableHeader;try{TiMeasureTableHeader.displayName="TiMeasureTableHeader",TiMeasureTableHeader.__docgenInfo={description:"",displayName:"TiMeasureTableHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureTableHeader.tsx#TiMeasureTableHeader"]={docgenInfo:TiMeasureTableHeader.__docgenInfo,name:"TiMeasureTableHeader",path:"apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureTableHeader.tsx#TiMeasureTableHeader"})}catch(__react_docgen_typescript_loader_error){}var TiMeasureTableRowStyle_templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),utils_src=__webpack_require__("./libs/utils/src/index.ts"),TiMeasureRowStyle=styled_components_browser_esm.ZP.tr(TiMeasureTableRowStyle_templateObject||(TiMeasureTableRowStyle_templateObject=(0,taggedTemplateLiteral.Z)(["\n\toverflow: hidden;\n\twidth: 100%;\n\n\t& > td {\n\t\tpadding: 0;\n\t\tfont: var(",");\n\t\tcolor: var(",");\n\t\tline-height: ",";\n\t}\n\n\t// show the row-counter value in the first column\n\t& > td:first-child {\n\t\twidth: 2em;\n\n\t\t&::before {\n\t\t\tcounter-increment: row-counter;\n\t\t\tcontent: counter(row-counter) '. ';\n\t\t}\n\t}\n\n\t& > td.center {\n\t\ttext-align: center;\n\t}\n\n\ttd * {\n\t\tmax-height: ",";\n\t}\n"])),src.Rq.base,src.O9.primaryBlack,(0,src.zG)(13),(0,src.zG)(13)),TiMeasureTableRow=function TiMeasureTableRow(_ref){var description=_ref.description,planYear=_ref.planYear,quantity=_ref.quantity,unitPrice=_ref.unitPrice,cost=_ref.cost;return(0,jsx_runtime.jsxs)(TiMeasureRowStyle,{"data-testid":"ti-measure-measure-table-row",children:[(0,jsx_runtime.jsx)("td",{})," ",(0,jsx_runtime.jsx)("td",{children:description}),(0,jsx_runtime.jsx)("td",{className:"center",children:planYear}),(0,jsx_runtime.jsx)("td",{"data-testid":"ti-measure-measure-table-row-quantity",className:"center",children:quantity}),(0,jsx_runtime.jsx)("td",{"data-testid":"ti-measure-measure-table-row-unitprice",children:(0,utils_src.xG)(unitPrice)}),(0,jsx_runtime.jsx)("td",{}),(0,jsx_runtime.jsx)("td",{"data-testid":"ti-measure-measure-table-row-cost",children:(0,utils_src.xG)(cost)})]})};TiMeasureTableRow.displayName="TiMeasureTableRow";var TiMeasureTable_TiMeasureMeasureTableRow=TiMeasureTableRow;try{TiMeasureMeasureTableRow.displayName="TiMeasureMeasureTableRow",TiMeasureMeasureTableRow.__docgenInfo={description:"",displayName:"TiMeasureMeasureTableRow",props:{quantity:{defaultValue:null,description:"",name:"quantity",required:!1,type:{name:"number"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},planYear:{defaultValue:null,description:"",name:"planYear",required:!1,type:{name:"number"}},unitPrice:{defaultValue:null,description:"",name:"unitPrice",required:!1,type:{name:"number"}},cost:{defaultValue:null,description:"",name:"cost",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureMeasureTableRow.tsx#TiMeasureMeasureTableRow"]={docgenInfo:TiMeasureMeasureTableRow.__docgenInfo,name:"TiMeasureMeasureTableRow",path:"apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureMeasureTableRow.tsx#TiMeasureMeasureTableRow"})}catch(__react_docgen_typescript_loader_error){}var TiMeasureCyclicMeasureTableRow_TiMeasureTableRow=function TiMeasureTableRow(_ref){var description=_ref.defaultMaintenanceMeasure.description,planYear=_ref.planYear,cycle=_ref.cycle,unitPrice=_ref.unitPrice,cost=_ref.cost;return(0,jsx_runtime.jsxs)(TiMeasureRowStyle,{"data-testid":"ti-measure-cyclic-measure-table-row",children:[(0,jsx_runtime.jsx)("td",{})," ",(0,jsx_runtime.jsx)("td",{children:description}),(0,jsx_runtime.jsx)("td",{className:"center",children:planYear}),(0,jsx_runtime.jsx)("td",{}),(0,jsx_runtime.jsx)("td",{"data-testid":"ti-measure-cyclic-measure-table-row-unitprice",children:(0,utils_src.xG)(unitPrice)}),(0,jsx_runtime.jsx)("td",{"data-testid":"ti-measure-cyclic-measure-table-row-cycle",className:"center",children:cycle}),(0,jsx_runtime.jsx)("td",{"data-testid":"ti-measure-cyclic-measure-table-row-cost",children:(0,utils_src.xG)(cost)})]})};TiMeasureCyclicMeasureTableRow_TiMeasureTableRow.displayName="TiMeasureTableRow";var TiMeasureTable_TiMeasureCyclicMeasureTableRow=TiMeasureCyclicMeasureTableRow_TiMeasureTableRow;try{TiMeasureCyclicMeasureTableRow.displayName="TiMeasureCyclicMeasureTableRow",TiMeasureCyclicMeasureTableRow.__docgenInfo={description:"",displayName:"TiMeasureCyclicMeasureTableRow",props:{planYear:{defaultValue:null,description:"",name:"planYear",required:!1,type:{name:"number"}},unitPrice:{defaultValue:null,description:"",name:"unitPrice",required:!1,type:{name:"number"}},cost:{defaultValue:null,description:"",name:"cost",required:!0,type:{name:"number"}},defaultMaintenanceMeasure:{defaultValue:null,description:"",name:"defaultMaintenanceMeasure",required:!0,type:{name:"{ description?: string; }"}},cycle:{defaultValue:null,description:"",name:"cycle",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureCyclicMeasureTableRow.tsx#TiMeasureCyclicMeasureTableRow"]={docgenInfo:TiMeasureCyclicMeasureTableRow.__docgenInfo,name:"TiMeasureCyclicMeasureTableRow",path:"apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureCyclicMeasureTableRow.tsx#TiMeasureCyclicMeasureTableRow"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TiMeasureTableBody=function TiMeasureTableBody(_ref){var measures=_ref.measures,cyclicMeasures=_ref.cyclicMeasures;return(0,jsx_runtime.jsxs)("tbody",{children:[measures.map((function(measure,index){return(0,jsx_runtime.jsx)(react.Fragment,{children:(0,jsx_runtime.jsx)(TiMeasureTable_TiMeasureMeasureTableRow,_objectSpread({},measure))},index)})),cyclicMeasures.map((function(cyclicMeasure,index){return(0,jsx_runtime.jsx)(react.Fragment,{children:(0,jsx_runtime.jsx)(TiMeasureTable_TiMeasureCyclicMeasureTableRow,_objectSpread({},cyclicMeasure))},index)}))]})};TiMeasureTableBody.displayName="TiMeasureTableBody";var TiMeasureTable_TiMeasureTableBody=TiMeasureTableBody;try{TiMeasureTableBody.displayName="TiMeasureTableBody",TiMeasureTableBody.__docgenInfo={description:"",displayName:"TiMeasureTableBody",props:{measures:{defaultValue:null,description:"",name:"measures",required:!0,type:{name:"{ id: string; description?: string; planYear?: number; finalPlanYear?: number; quantity?: number; unitPrice?: number; maintenanceType?: MeasureTypes; cost: number; costWithSurcharge: number; unit: { ...; }; defect?: { ...; }; }[]"}},cyclicMeasures:{defaultValue:null,description:"",name:"cyclicMeasures",required:!0,type:{name:"{ id: string; cycle?: number; planYear?: number; finalPlanYear?: number; unitPrice?: number; maintenanceType?: CyclicMeasureTypes; cost: number; costWithSurcharge: number; defaultMaintenanceMeasure: { ...; }; unit: { ...; }; defect?: { ...; }; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureTableBody.tsx#TiMeasureTableBody"]={docgenInfo:TiMeasureTableBody.__docgenInfo,name:"TiMeasureTableBody",path:"apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureTableBody.tsx#TiMeasureTableBody"})}catch(__react_docgen_typescript_loader_error){}var TiMeasureTable=function TiMeasureTable(_ref){var unit=_ref.unit;return(0,jsx_runtime.jsxs)(TiMeasureTableStyle,{"data-testid":"ti-measure-table",children:[(0,jsx_runtime.jsx)(TiMeasureTable_TiMeasureTableHeader,{}),(0,jsx_runtime.jsx)(TiMeasureTable_TiMeasureTableBody,{measures:unit.measures,cyclicMeasures:unit.cyclicMeasures})]})};TiMeasureTable.displayName="TiMeasureTable";var TiMeasureTable_TiMeasureTable=TiMeasureTable;try{TiMeasureTable.displayName="TiMeasureTable",TiMeasureTable.__docgenInfo={description:"",displayName:"TiMeasureTable",props:{unit:{defaultValue:null,description:"",name:"unit",required:!0,type:{name:"TiUnit"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureTable.tsx#TiMeasureTable"]={docgenInfo:TiMeasureTable.__docgenInfo,name:"TiMeasureTable",path:"apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureTable.tsx#TiMeasureTable"})}catch(__react_docgen_typescript_loader_error){}},"./libs/utils/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{xG:function(){return formatCurrency},ys:function(){return toFormattedDateString}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var defaultOptions={day:"numeric",month:"long",year:"numeric"};function toFormattedDateString(date){var locales=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nl-NL",options=arguments.length>2?arguments[2]:void 0;return date.toLocaleDateString(locales,_objectSpread(_objectSpread({},defaultOptions),options))}function formatCurrency(amount){var locales="nl"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nl")?"nl-NL":"en-EN";if("number"!=typeof amount)return console.log("@aip/utils: formatCurrency: Failed to format the amount",{amount:amount}),"";try{return new Intl.NumberFormat(locales,{style:"currency",currency:"EUR"}).format(amount)}catch(error){return console.log("@aip/utils: formatCurrency: Failed to format the received amount value",{amount:amount,error:error}),""}}},"./apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureTable.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_stubs___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./apps/report/src/reports/Ti/__stubs__/index.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var meta={component:__webpack_require__("./apps/report/src/reports/Ti/components/TiMeasureTable/TiMeasureTable.tsx").Z},Default={args:{unit:_stubs___WEBPACK_IMPORTED_MODULE_1__.N5}};__webpack_exports__.default=meta,Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    unit: tiUnit1\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]}}]);