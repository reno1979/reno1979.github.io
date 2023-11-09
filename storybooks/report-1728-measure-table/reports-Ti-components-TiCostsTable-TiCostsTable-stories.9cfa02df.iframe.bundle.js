"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[280],{"./apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTable.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return TiCostsTable_stories}});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_stubs_=__webpack_require__("./apps/report/src/reports/Ti/__stubs__/index.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),src=__webpack_require__("./libs/report-components/src/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TiCostsTableHeaderStyle=styled_components_browser_esm.ZP.thead(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\twidth: 100%;\n\n\tth {\n\t\ttext-align: center;\n\t\tbackground-color: var(",");\n\t\tcolor: var(",");\n\t\tborder: "," solid #000;\n\t\tpadding: ",";\n\t\tfont: var(",");\n\t}\n\n\tth:not(:first-child) {\n\t\tborder-left: 0;\n\t}\n"])),src.O9.primaryRed,src.O9.primaryWhite,(0,src.zG)(1),(0,src.zG)(8),src.Rq.baseBold),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TiCostsTableHeader=function TiCostsTableHeader(){return(0,jsx_runtime.jsx)(TiCostsTableHeaderStyle,{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Maatregel"}),(0,jsx_runtime.jsx)("th",{children:"Type onderhoud"}),(0,jsx_runtime.jsx)("th",{children:"Cyclus"}),(0,jsx_runtime.jsx)("th",{children:"Eenheidsprijs"}),(0,jsx_runtime.jsx)("th",{children:"Totale kosten"}),(0,jsx_runtime.jsx)("th",{children:"Totale kosten incl. toeslagen"}),(0,jsx_runtime.jsx)("th",{children:"Planjaar"})]})})};TiCostsTableHeader.displayName="TiCostsTableHeader";var TiCostsTableRowUnitStyle_templateObject,TiCostsTable_TiCostsTableHeader=TiCostsTableHeader;try{TiCostsTableHeader.displayName="TiCostsTableHeader",TiCostsTableHeader.__docgenInfo={description:"",displayName:"TiCostsTableHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTableHeader.tsx#TiCostsTableHeader"]={docgenInfo:TiCostsTableHeader.__docgenInfo,name:"TiCostsTableHeader",path:"apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTableHeader.tsx#TiCostsTableHeader"})}catch(__react_docgen_typescript_loader_error){}var TiCostsRowUnitStyle=styled_components_browser_esm.ZP.tr(TiCostsTableRowUnitStyle_templateObject||(TiCostsTableRowUnitStyle_templateObject=(0,taggedTemplateLiteral.Z)(["\n\toverflow: hidden;\n\twidth: 100%;\n\n\t& > td {\n\t\theight: ",";\n\t\ttext-align: right;\n\t}\n\n\t// The content should be left align in the first two columns.\n\t& > td:nth-child(-n + 2) {\n\t\ttext-align: left;\n\t\tpadding-right: ",";\n\t}\n\n\t// The content should have a euro sign prefix in the columns of UnitPricw, TotalCost and TotalCostWithSurcharge.\n\t& > td:not(:last-child):not(:nth-child(-n + 3)):before {\n\t\tcontent: '€';\n\t}\n"])),(0,src.zG)(13),(0,src.kj)(8)),react=__webpack_require__("./node_modules/react/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TiCostsTableCyclicMeasureRow=function TiCostsTableCyclicMeasureRow(_ref){_ref.id;var defaultMaintenanceMeasure=_ref.defaultMaintenanceMeasure,maintenanceType=_ref.maintenanceType,cycle=_ref.cycle,unitPrice=_ref.unitPrice,cost=_ref.cost,costWithSurcharge=_ref.costWithSurcharge,planYear=_ref.planYear,finalPlanYear=_ref.finalPlanYear;return(0,jsx_runtime.jsxs)(TiCostsRowUnitStyle,{children:[(0,jsx_runtime.jsx)("td",{children:defaultMaintenanceMeasure.description}),(0,jsx_runtime.jsx)("td",{children:maintenanceType}),(0,jsx_runtime.jsx)("td",{children:cycle}),(0,jsx_runtime.jsx)("td",{children:unitPrice}),(0,jsx_runtime.jsx)("td",{children:cost}),(0,jsx_runtime.jsx)("td",{children:costWithSurcharge}),(0,jsx_runtime.jsx)("td",{children:finalPlanYear?"".concat(planYear,"-").concat(finalPlanYear):planYear||""})]})};TiCostsTableCyclicMeasureRow.displayName="TiCostsTableCyclicMeasureRow";var TiCostsTableMeasureRow=function TiCostsTableMeasureRow(_ref2){_ref2.id;var description=_ref2.description,maintenanceType=_ref2.maintenanceType,unitPrice=_ref2.unitPrice,cost=_ref2.cost,costWithSurcharge=_ref2.costWithSurcharge,planYear=_ref2.planYear,finalPlanYear=_ref2.finalPlanYear;return(0,jsx_runtime.jsxs)(TiCostsRowUnitStyle,{children:[(0,jsx_runtime.jsx)("td",{children:description}),(0,jsx_runtime.jsx)("td",{children:maintenanceType}),(0,jsx_runtime.jsx)("td",{}),(0,jsx_runtime.jsx)("td",{children:unitPrice}),(0,jsx_runtime.jsx)("td",{children:cost}),(0,jsx_runtime.jsx)("td",{children:costWithSurcharge}),(0,jsx_runtime.jsx)("td",{children:finalPlanYear?"".concat(planYear,"-").concat(finalPlanYear):planYear||""})]})};TiCostsTableMeasureRow.displayName="TiCostsTableMeasureRow";var TiCostsTableRows=function TiCostsTableRows(_ref3){var cyclicMeasures=_ref3.cyclicMeasures,measures=_ref3.measures;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[cyclicMeasures.map((function(cyclicMeasure){return(0,react.createElement)(TiCostsTableCyclicMeasureRow,_objectSpread(_objectSpread({},cyclicMeasure),{},{key:cyclicMeasure.id}))})),measures.map((function(measure){return(0,react.createElement)(TiCostsTableMeasureRow,_objectSpread(_objectSpread({},measure),{},{key:measure.id}))}))]})},TiCostsTable_TiCostsTableRows=TiCostsTableRows;try{TiCostsTableCyclicMeasureRow.displayName="TiCostsTableCyclicMeasureRow",TiCostsTableCyclicMeasureRow.__docgenInfo={description:"",displayName:"TiCostsTableCyclicMeasureRow",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},cycle:{defaultValue:null,description:"",name:"cycle",required:!1,type:{name:"number"}},planYear:{defaultValue:null,description:"",name:"planYear",required:!1,type:{name:"number"}},finalPlanYear:{defaultValue:null,description:"",name:"finalPlanYear",required:!1,type:{name:"number"}},unitPrice:{defaultValue:null,description:"",name:"unitPrice",required:!1,type:{name:"number"}},maintenanceType:{defaultValue:null,description:"",name:"maintenanceType",required:!1,type:{name:"enum",value:[{value:'"DailyMaintenance"'},{value:'"MajorMaintenance"'},{value:'"ToReplace"'}]}},cost:{defaultValue:null,description:"",name:"cost",required:!0,type:{name:"number"}},costWithSurcharge:{defaultValue:null,description:"",name:"costWithSurcharge",required:!0,type:{name:"number"}},defaultMaintenanceMeasure:{defaultValue:null,description:"",name:"defaultMaintenanceMeasure",required:!0,type:{name:"{ description?: string; }"}},unit:{defaultValue:null,description:"",name:"unit",required:!0,type:{name:"{ id: string; name: string; }"}},defect:{defaultValue:null,description:"",name:"defect",required:!1,type:{name:"{ id: string; seriousness?: number; intensity?: number; aspect?: string; locationDescription?: string; ramsTotalPriority?: string; ramsR?: string; ramsA?: string; ramsS?: string; ramsEc?: string; ramsEnv?: string; details?: string; careScore?: number; repairAdvice?: string; condition?: { ...; }; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTableRows.tsx#TiCostsTableCyclicMeasureRow"]={docgenInfo:TiCostsTableCyclicMeasureRow.__docgenInfo,name:"TiCostsTableCyclicMeasureRow",path:"apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTableRows.tsx#TiCostsTableCyclicMeasureRow"})}catch(__react_docgen_typescript_loader_error){}try{TiCostsTableMeasureRow.displayName="TiCostsTableMeasureRow",TiCostsTableMeasureRow.__docgenInfo={description:"",displayName:"TiCostsTableMeasureRow",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},planYear:{defaultValue:null,description:"",name:"planYear",required:!1,type:{name:"number"}},finalPlanYear:{defaultValue:null,description:"",name:"finalPlanYear",required:!1,type:{name:"number"}},quantity:{defaultValue:null,description:"",name:"quantity",required:!1,type:{name:"number"}},unitPrice:{defaultValue:null,description:"",name:"unitPrice",required:!1,type:{name:"number"}},maintenanceType:{defaultValue:null,description:"",name:"maintenanceType",required:!1,type:{name:"enum",value:[{value:'"CorrectiveMaintenance"'},{value:'"PreventiveMaintenance"'}]}},cost:{defaultValue:null,description:"",name:"cost",required:!0,type:{name:"number"}},costWithSurcharge:{defaultValue:null,description:"",name:"costWithSurcharge",required:!0,type:{name:"number"}},unit:{defaultValue:null,description:"",name:"unit",required:!0,type:{name:"{ id: string; name: string; }"}},defect:{defaultValue:null,description:"",name:"defect",required:!1,type:{name:"{ id: string; seriousness?: number; intensity?: number; aspect?: string; locationDescription?: string; ramsTotalPriority?: string; ramsR?: string; ramsA?: string; ramsS?: string; ramsEc?: string; ramsEnv?: string; details?: string; careScore?: number; repairAdvice?: string; condition?: { ...; }; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTableRows.tsx#TiCostsTableMeasureRow"]={docgenInfo:TiCostsTableMeasureRow.__docgenInfo,name:"TiCostsTableMeasureRow",path:"apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTableRows.tsx#TiCostsTableMeasureRow"})}catch(__react_docgen_typescript_loader_error){}try{TiCostsTableRows.displayName="TiCostsTableRows",TiCostsTableRows.__docgenInfo={description:"",displayName:"TiCostsTableRows",props:{cyclicMeasures:{defaultValue:null,description:"",name:"cyclicMeasures",required:!0,type:{name:"{ id: string; cycle?: number; planYear?: number; finalPlanYear?: number; unitPrice?: number; maintenanceType?: CyclicMeasureTypes; cost: number; costWithSurcharge: number; defaultMaintenanceMeasure: { ...; }; unit: { ...; }; defect?: { ...; }; }[]"}},measures:{defaultValue:null,description:"",name:"measures",required:!0,type:{name:"{ id: string; description?: string; planYear?: number; finalPlanYear?: number; quantity?: number; unitPrice?: number; maintenanceType?: MeasureTypes; cost: number; costWithSurcharge: number; unit: { ...; }; defect?: { ...; }; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTableRows.tsx#TiCostsTableRows"]={docgenInfo:TiCostsTableRows.__docgenInfo,name:"TiCostsTableRows",path:"apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTableRows.tsx#TiCostsTableRows"})}catch(__react_docgen_typescript_loader_error){}var TiCostsTableStyle_templateObject,TiCostsTableBody=function TiCostsTableBody(_ref){var units=_ref.units;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:units.map((function(unit,index){return(0,jsx_runtime.jsx)("tbody",{children:(0,jsx_runtime.jsx)(TiCostsTable_TiCostsTableRows,{cyclicMeasures:unit.cyclicMeasures,measures:unit.measures})},index)}))})},TiCostsTable_TiCostsTableBody=TiCostsTableBody;try{TiCostsTableBody.displayName="TiCostsTableBody",TiCostsTableBody.__docgenInfo={description:"",displayName:"TiCostsTableBody",props:{units:{defaultValue:null,description:"",name:"units",required:!0,type:{name:"TiUnit[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTableBody.tsx#TiCostsTableBody"]={docgenInfo:TiCostsTableBody.__docgenInfo,name:"TiCostsTableBody",path:"apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTableBody.tsx#TiCostsTableBody"})}catch(__react_docgen_typescript_loader_error){}var TiCostsTableStyle=styled_components_browser_esm.ZP.table(TiCostsTableStyle_templateObject||(TiCostsTableStyle_templateObject=(0,taggedTemplateLiteral.Z)(["\n\twidth: 100%;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n\n\ttd {\n\t\tpadding: 0;\n\t\tfont: var(",");\n\t}\n\n\ttd * {\n\t\tmax-height: ",";\n\t}\n"])),src.Rq.base,(0,src.zG)(13)),TiCostsTable=function TiCostsTable(_ref){var elements=_ref.elements;return(0,jsx_runtime.jsxs)(TiCostsTableStyle,{children:[(0,jsx_runtime.jsx)(TiCostsTable_TiCostsTableHeader,{}),elements.map((function(element,index){return(0,jsx_runtime.jsx)(TiCostsTable_TiCostsTableBody,{units:element.units},index)}))]})};TiCostsTable.displayName="TiCostsTable";var _Default$parameters,_Default$parameters2,TiCostsTable_TiCostsTable=TiCostsTable;try{TiCostsTable.displayName="TiCostsTable",TiCostsTable.__docgenInfo={description:"",displayName:"TiCostsTable",props:{elements:{defaultValue:null,description:"",name:"elements",required:!0,type:{name:"{ id: string; name: string; units: { id: string; name: string; material?: string; quantity?: number; quantityUnitOfMeasurement?: string; constructionYear?: number; location?: string; conditionId?: string; conditions?: { ...; }[]; measures: { ...; }[]; cyclicMeasures: { ...; }[]; images: { ...; }[]; }[]; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTable.tsx#TiCostsTable"]={docgenInfo:TiCostsTable.__docgenInfo,name:"TiCostsTable",path:"apps/report/src/reports/Ti/components/TiCostsTable/TiCostsTable.tsx#TiCostsTable"})}catch(__react_docgen_typescript_loader_error){}function TiCostsTable_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function TiCostsTable_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?TiCostsTable_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):TiCostsTable_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TiCostsTable_stories={component:TiCostsTable_TiCostsTable},Default={args:{units:_stubs_.vm}};Default.parameters=TiCostsTable_stories_objectSpread(TiCostsTable_stories_objectSpread({},Default.parameters),{},{docs:TiCostsTable_stories_objectSpread(TiCostsTable_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:TiCostsTable_stories_objectSpread({originalSource:"{\n  args: {\n    units: tiUnits\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]}}]);