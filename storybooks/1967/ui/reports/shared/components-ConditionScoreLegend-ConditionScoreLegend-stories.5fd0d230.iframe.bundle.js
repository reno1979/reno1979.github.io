"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[211],{"./libs/ui/reports/shared/src/components/ConditionScoreLegend/ConditionScoreLegend.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ConditionScoreLegend_stories}});var _templateObject,_templateObject2,_templateObject3,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./libs/utils-data/src/index.ts")),ConditionScore=__webpack_require__("./libs/ui/reports/shared/src/components/ConditionScore/ConditionScore.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./libs/ui/reports/shared/src/styles/index.ts"),utils=__webpack_require__("./libs/ui/reports/shared/src/utils/index.ts"),ConditionScoreLegendWrapperStyle=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\tdisplay: flex;\n\twidth: ",";\n\tflex-direction: column;\n\talign-items: flex-start;\n\trow-gap: ",";\n\tcolumn-gap: ",";\n"])),(0,utils.k)(115),(0,utils.z)(8),(0,utils.k)(8)),ConditionScoreLegendItemStyle=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\trow-gap: ",";\n\tcolumn-gap: ",";\n"])),(0,utils.z)(16),(0,utils.k)(16)),ConditionScoreLegendLabelStyle=styled_components_browser_esm.ZP.span(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n\tcolor: var(",");\n\tfont: var(",");\n\twhite-space: nowrap;\n"])),styles.O.primaryBlack,styles.R.base),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ConditionScoreLegendItems=function ConditionScoreLegendItems(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:["1","2","3","4","5","6","F","U"].map((function(condition){return(0,jsx_runtime.jsxs)(ConditionScoreLegendItemStyle,{"data-testid":"report-condition-score-legend-item",children:[(0,jsx_runtime.jsx)(ConditionScore.Z,{condition:condition}),(0,jsx_runtime.jsx)(ConditionScoreLegendLabelStyle,{children:(0,src.qI)(condition)})]},condition)}))})},ConditionScoreLegend=function ConditionScoreLegend(){return(0,jsx_runtime.jsxs)(ConditionScoreLegendWrapperStyle,{"data-testid":"report-condition-score-legend",children:[(0,jsx_runtime.jsx)(ConditionScoreLegendLabelStyle,{children:"Conditiescores"}),(0,jsx_runtime.jsx)(ConditionScoreLegendItems,{})]})};ConditionScoreLegend.displayName="ConditionScoreLegend";var _Default$parameters,_Default$parameters2,ConditionScoreLegend_ConditionScoreLegend=ConditionScoreLegend;try{ConditionScoreLegend.displayName="ConditionScoreLegend",ConditionScoreLegend.__docgenInfo={description:"",displayName:"ConditionScoreLegend",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/reports/shared/src/components/ConditionScoreLegend/ConditionScoreLegend.tsx#ConditionScoreLegend"]={docgenInfo:ConditionScoreLegend.__docgenInfo,name:"ConditionScoreLegend",path:"libs/ui/reports/shared/src/components/ConditionScoreLegend/ConditionScoreLegend.tsx#ConditionScoreLegend"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ConditionScoreLegend_stories={component:ConditionScoreLegend_ConditionScoreLegend},Default={};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./libs/ui/reports/shared/src/components/Condition/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{F:function(){return conditionColors}});var conditionColors={excellent:"--report-color-dark-green",good:"--report-color-green",reasonable:"--report-color-yellow",moderate:"--report-color-dark-yellow",poor:"--report-color-orange",bad:"--report-color-primary-red",further:"--report-color-neutral-grey-1",unknown:"--report-color-blue",invalid:"--report-color-primary-white"}},"./libs/ui/reports/shared/src/components/ConditionScore/ConditionScore.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ConditionScore_ConditionScore}});var _templateObject,src=__webpack_require__("./libs/utils-data/src/index.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./libs/ui/reports/shared/src/styles/index.ts"),Condition=__webpack_require__("./libs/ui/reports/shared/src/components/Condition/index.ts"),utils=__webpack_require__("./libs/ui/reports/shared/src/utils/index.ts"),ConditionScoreStyle=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\tdisplay: inline-flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont: var(",");\n\theight: ",";\n\twidth: ",";\n\tcolor: var(",");\n\ttext-align: center;\n\tbackground-color: var(",");\n"])),styles.R.small,(0,utils.z)(13),(0,utils.k)(13),styles.O.primaryBlack,(function(_ref){var condition=_ref.condition;return Condition.F[(0,src.AE)(condition)]})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ConditionScore=function ConditionScore(_ref){var condition=_ref.condition;return(0,jsx_runtime.jsx)(ConditionScoreStyle,{"data-testid":"report-condition-score",condition:condition,children:(0,src.TM)(condition)})};ConditionScore.displayName="ConditionScore";var ConditionScore_ConditionScore=ConditionScore;try{ConditionScore.displayName="ConditionScore",ConditionScore.__docgenInfo={description:"",displayName:"ConditionScore",props:{condition:{defaultValue:null,description:"",name:"condition",required:!0,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/reports/shared/src/components/ConditionScore/ConditionScore.tsx#ConditionScore"]={docgenInfo:ConditionScore.__docgenInfo,name:"ConditionScore",path:"libs/ui/reports/shared/src/components/ConditionScore/ConditionScore.tsx#ConditionScore"})}catch(__react_docgen_typescript_loader_error){}},"./libs/utils-data/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{AE:function(){return conditionCodeToKey},qI:function(){return conditionCodeToName},TM:function(){return conditionCodeToScore},qm:function(){return getRamsWeightedPriorityValue}});var src=__webpack_require__("./libs/i18n/src/index.ts");function conditionCodeToKey(code){switch((code+"").toUpperCase()){case"1":return"excellent";case"2":return"good";case"3":return"reasonable";case"4":return"moderate";case"5":return"poor";case"6":return"bad";case"F":return"further";case"U":return"unknown";default:return"invalid"}}var conditionCodeToName=function conditionCodeToName(code){return(0,src.W)("nl","condition.".concat(conditionCodeToKey(code)))},conditionCodeToScore=function conditionCodeToScore(code){return code=(code+"").toUpperCase(),["U","F"].includes(code)?"-":["1","2","3","4","5","6"].includes(code)?code:""},ramsAOptions=[{text:"Langzaam verkeer: < 2 uur",textLine2:"Auto- en Busverkeer: < 1 uur",textLine3:"Tram en Beroepsvaart, natte functies: < 0,5 uur",value:"1",priorityValue:"1"},{text:"Langzaam verkeer: 2-4 uur",textLine2:"Auto- en Busverkeer: 1-2 uur",textLine3:"Tram en Beroepsvaart, natte functies: 0,5-1 uur",value:"2",priorityValue:"2"},{text:"Langzaam verkeer: > 4 uur < 2 dagen",textLine2:"Auto- en Busverkeer: > 2 uur < 1 dag",textLine3:"Tram en Beroepsvaart, natte functies: > 1 uur < 2 uur",value:"3",priorityValue:"3"},{text:"Langzaam verkeer: > 2 dagen < 2 weken",textLine2:"Auto- en Busverkeer: > 1 dag < 1 week",textLine3:"Tram en Beroepsvaart, natte functies: > 2 uur < 12 uur",value:"4",priorityValue:"4"},{text:"Langzaam verkeer: > 2 weken < 2 maanden",textLine2:"Auto- en Busverkeer: > 1 week < 1 maand",textLine3:"Tram en Beroepsvaart, natte functies: > 12 uur < 1 week",value:"5",priorityValue:"5"},{text:"Langzaam verkeer: > 2 maanden",textLine2:"Auto- en Busverkeer: > 1 maand",textLine3:" Tram en Beroepsvaart, natte functies: > 2 weken",value:"6",priorityValue:"6"}],ramsSOptions=[{text:"Geen veiligheidsincident",value:"1",priorityValue:"1"},{text:"Ongeval/incident zonder letsel",value:"2",priorityValue:"2"},{text:"Ongeval met middelmatig letsel",value:"3",priorityValue:"3"},{text:"Ongeval met niet blijvend zwaar letsel",value:"4",priorityValue:"4"},{text:"Ongeval met blijvend letsel",value:"5",priorityValue:"5"},{text:"Dodelijk ongeval",value:"6",priorityValue:"6"}],ramsCOptions=[{text:"Conform ambitieniveau",value:"1",priorityValue:"1"},{text:"1 Niveau lager dan ambitieniveau",value:"2",priorityValue:"2"},{text:"2 Niveaus lager dan ambitieniveau",value:"3",priorityValue:"3"},{text:"Achterstallig Onderhoud ",value:"4",priorityValue:"4"}],ramsEcOptions=[{text:"Geen kosten",value:"1",priorityValue:"1"},{text:"Lager dan € 1.000",value:"2",priorityValue:"2"},{text:"€ 1.000 tot € 10.000",value:"3",priorityValue:"3"},{text:"€ 10.000 tot € 100.000",value:"4",priorityValue:"4"},{text:"€ 100.000  tot € 1 miljoen",value:"5",priorityValue:"5"},{text:"> € 1 miljoen",value:"6",priorityValue:"6"}],ramsEnvOptions=[{text:"Geen gevolgen",value:"1",priorityValue:"1"},{text:"Gevolgen voor milieu beperkt, lokaal en beheersbaar",value:"2",priorityValue:"2"},{text:"Gevolgen voor milieu lokaal, lichte verontreiniging",value:"3",priorityValue:"3"},{text:"Gevolgen voor milieu lokaal, verontreiniging die sanering behoeft",value:"4",priorityValue:"4"},{text:"Grootschalige verontreiniging bodem/water, maatregelen nodig",value:"5",priorityValue:"5"},{text:"Ernstige milieuschade",textLine2:"Ingrijpende herstellende maatregelen nodig met (mogelijk) blijvende schade",textLine3:"Impact/ hinder voor regio (gebied > 5 km)",value:"6",priorityValue:"6"}],ramsPOptions=[{text:"Geen imagoschade",value:"1",priorityValue:"1"},{text:"Negatieve berichtgeving in lokale media",textLine2:"AM moet zich verantwoorden naar AO",textLine3:"Interne verdeeldheid binnen een bestuurslaag",value:"2",priorityValue:"2"},{text:"Negatieve berichtgeving in lokale media",textLine2:"AO moet zich verantwoorden naar staf wethouders",textLine3:"Georganiseerde ontevredenheid binnen een bestuurslaag",value:"3",priorityValue:"3"},{text:"Negatieve berichtgeving in regionale media",textLine2:"Wethouder moet zich verantwoorden naar collega B&W",textLine3:"Georganiseerde ontevredenheid tussen meerdere bestuurslagen",value:"4",priorityValue:"4"},{text:"Negatieve berichtgeving in landelijke media",textLine2:"College B & W moet zich verantwoorden naar de Gemeenteraad",textLine3:"Geen overeenstemming tussen bestuurslagen",value:"5",priorityValue:"5"},{text:"Negatieve berichtgeving in internationale media",textLine2:"Kamervragen",value:"6",priorityValue:"6"}];function getRamsMaxPriorityValue(options,value,maxPriorityValue){if(value){var _ramsRecord$priorityV,ramsRecord=options.find((function(item){return item.value===value}));if(ramsRecord)if(parseInt(null!==(_ramsRecord$priorityV=ramsRecord.priorityValue)&&void 0!==_ramsRecord$priorityV?_ramsRecord$priorityV:"0",10)>parseInt(null!=maxPriorityValue?maxPriorityValue:"0",10))return ramsRecord.priorityValue}return maxPriorityValue}function getRamsWeightedPriorityValue(_ref){var totalValue=function getRamsTotalPriorityValue(_ref){var _maxPriority,ramsR=_ref.ramsR,ramsA=_ref.ramsA,ramsS=_ref.ramsS,ramsC=_ref.ramsC,ramsEc=_ref.ramsEc,ramsEnv=_ref.ramsEnv,ramsP=_ref.ramsP,maxPriority="0";return ramsR&&(ramsA||ramsS||ramsC||ramsEc||ramsEnv||ramsP)?(maxPriority=getRamsMaxPriorityValue(ramsAOptions,ramsA,maxPriority),maxPriority=getRamsMaxPriorityValue(ramsSOptions,ramsS,maxPriority),maxPriority=getRamsMaxPriorityValue(ramsCOptions,ramsC,maxPriority),maxPriority=getRamsMaxPriorityValue(ramsEcOptions,ramsEc,maxPriority),maxPriority=getRamsMaxPriorityValue(ramsEnvOptions,ramsEnv,maxPriority),maxPriority=getRamsMaxPriorityValue(ramsPOptions,ramsP,maxPriority),parseInt(null!==(_maxPriority=maxPriority)&&void 0!==_maxPriority?_maxPriority:"0",10)+parseInt(ramsR,10)):0}({ramsR:_ref.ramsR,ramsA:_ref.ramsA,ramsS:_ref.ramsS,ramsC:_ref.ramsC,ramsEc:_ref.ramsEc,ramsEnv:_ref.ramsEnv,ramsP:_ref.ramsP});return 7===totalValue?"2":8===totalValue?"3":totalValue>8?"4":totalValue>1?"1":"0"}}}]);