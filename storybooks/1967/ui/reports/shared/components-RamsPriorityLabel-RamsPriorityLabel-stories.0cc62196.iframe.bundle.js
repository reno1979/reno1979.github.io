"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[380],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./libs/ui/reports/shared/src/components/RamsPriorityLabel/RamsPriorityLabel.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return RamsPriorityLabel_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),src=__webpack_require__("./libs/utils-data/src/index.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");__webpack_require__("./libs/graphql/graphql.generated.ts");function isValidRamsPriorityScore(data){return["1","2","3","4"].includes(data)}var _templateObject,styles=__webpack_require__("./libs/ui/reports/shared/src/styles/index.ts"),utils=__webpack_require__("./libs/ui/reports/shared/src/utils/index.ts"),scoreColors={1:"--report-color-dark-green",2:"--report-color-green",3:"--report-color-yellow",4:"--report-color-dark-yellow"},RamsPriorityLabelStyle=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\tfont: var(",");\n\tdisplay: inline-flex;\n\talign-items: center;\n\tpadding: 0 ",";\n\theight: ",";\n\tmax-width: fit-content;\n\tcolor: var(",");\n\tbackground-color: var(\n\t\t","\n\t);\n"])),styles.R.small,(0,utils.z)(2),(0,utils.z)(13),styles.O.primaryBlack,(function(_ref){var weightedPriorityValue=_ref.weightedPriorityValue;return isValidRamsPriorityScore(weightedPriorityValue)?scoreColors[weightedPriorityValue]:styles.O.primaryWhite})),i18n_src=__webpack_require__("./libs/i18n/src/index.ts"),ramsScoreToText=function ramsScoreToText(weightedPriorityValue){return isValidRamsPriorityScore(weightedPriorityValue)?(0,i18n_src.W)("nl","ramsPriority.".concat(weightedPriorityValue)):""},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ramsC","ramsA","ramsEc","ramsEnv","ramsR","ramsS"];function RamsPriorityLabel_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function RamsPriorityLabel_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?RamsPriorityLabel_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):RamsPriorityLabel_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var RamsPriorityLabel=function RamsPriorityLabel(_ref){var ramsC=_ref.ramsC,ramsA=_ref.ramsA,ramsEc=_ref.ramsEc,ramsEnv=_ref.ramsEnv,ramsR=_ref.ramsR,ramsS=_ref.ramsS,props=(0,objectWithoutProperties.Z)(_ref,_excluded),weightedPriorityValue=(0,src.qm)({ramsA:ramsA,ramsC:ramsC,ramsEc:ramsEc,ramsEnv:ramsEnv,ramsR:ramsR,ramsS:ramsS});return(0,jsx_runtime.jsx)(RamsPriorityLabelStyle,RamsPriorityLabel_objectSpread(RamsPriorityLabel_objectSpread({"data-testid":"report-rams-priority-label",weightedPriorityValue:weightedPriorityValue},props),{},{children:ramsScoreToText(weightedPriorityValue)}))};RamsPriorityLabel.displayName="RamsPriorityLabel";var _Default$parameters,_Default$parameters2,RamsPriorityLabel_RamsPriorityLabel=RamsPriorityLabel;try{RamsPriorityLabel.displayName="RamsPriorityLabel",RamsPriorityLabel.__docgenInfo={description:"",displayName:"RamsPriorityLabel",props:{ramsR:{defaultValue:null,description:"",name:"ramsR",required:!1,type:{name:"string"}},ramsA:{defaultValue:null,description:"",name:"ramsA",required:!1,type:{name:"string"}},ramsS:{defaultValue:null,description:"",name:"ramsS",required:!1,type:{name:"string"}},ramsC:{defaultValue:null,description:"",name:"ramsC",required:!1,type:{name:"string"}},ramsEc:{defaultValue:null,description:"",name:"ramsEc",required:!1,type:{name:"string"}},ramsEnv:{defaultValue:null,description:"",name:"ramsEnv",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/reports/shared/src/components/RamsPriorityLabel/RamsPriorityLabel.tsx#RamsPriorityLabel"]={docgenInfo:RamsPriorityLabel.__docgenInfo,name:"RamsPriorityLabel",path:"libs/ui/reports/shared/src/components/RamsPriorityLabel/RamsPriorityLabel.tsx#RamsPriorityLabel"})}catch(__react_docgen_typescript_loader_error){}function RamsPriorityLabel_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function RamsPriorityLabel_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?RamsPriorityLabel_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):RamsPriorityLabel_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var conditionScores=["1","2","3","4","5","6","F","U"],RamsPriorityLabel_stories={component:RamsPriorityLabel_RamsPriorityLabel,argTypes:{ramsR:{options:conditionScores,control:{type:"select"}},ramsA:{options:conditionScores,control:{type:"select"}},ramsS:{options:conditionScores,control:{type:"select"}},ramsC:{options:conditionScores,control:{type:"select"}},ramsEc:{options:conditionScores,control:{type:"select"}},ramsEnv:{options:conditionScores,control:{type:"select"}}}},Default={args:{ramsR:"1",ramsA:"1",ramsS:"1",ramsC:"1",ramsEc:"1",ramsEnv:"1"}};Default.parameters=RamsPriorityLabel_stories_objectSpread(RamsPriorityLabel_stories_objectSpread({},Default.parameters),{},{docs:RamsPriorityLabel_stories_objectSpread(RamsPriorityLabel_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:RamsPriorityLabel_stories_objectSpread({originalSource:"{\n  args: {\n    ramsR: '1',\n    ramsA: '1',\n    ramsS: '1',\n    ramsC: '1',\n    ramsEc: '1',\n    ramsEnv: '1'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./libs/utils-data/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{AE:function(){return conditionCodeToKey},qI:function(){return conditionCodeToName},TM:function(){return conditionCodeToScore},qm:function(){return getRamsWeightedPriorityValue}});var src=__webpack_require__("./libs/i18n/src/index.ts");function conditionCodeToKey(code){switch((code+"").toUpperCase()){case"1":return"excellent";case"2":return"good";case"3":return"reasonable";case"4":return"moderate";case"5":return"poor";case"6":return"bad";case"F":return"further";case"U":return"unknown";default:return"invalid"}}var conditionCodeToName=function conditionCodeToName(code){return(0,src.W)("nl","condition.".concat(conditionCodeToKey(code)))},conditionCodeToScore=function conditionCodeToScore(code){return code=(code+"").toUpperCase(),["U","F"].includes(code)?"-":["1","2","3","4","5","6"].includes(code)?code:""},ramsAOptions=[{text:"Langzaam verkeer: < 2 uur",textLine2:"Auto- en Busverkeer: < 1 uur",textLine3:"Tram en Beroepsvaart, natte functies: < 0,5 uur",value:"1",priorityValue:"1"},{text:"Langzaam verkeer: 2-4 uur",textLine2:"Auto- en Busverkeer: 1-2 uur",textLine3:"Tram en Beroepsvaart, natte functies: 0,5-1 uur",value:"2",priorityValue:"2"},{text:"Langzaam verkeer: > 4 uur < 2 dagen",textLine2:"Auto- en Busverkeer: > 2 uur < 1 dag",textLine3:"Tram en Beroepsvaart, natte functies: > 1 uur < 2 uur",value:"3",priorityValue:"3"},{text:"Langzaam verkeer: > 2 dagen < 2 weken",textLine2:"Auto- en Busverkeer: > 1 dag < 1 week",textLine3:"Tram en Beroepsvaart, natte functies: > 2 uur < 12 uur",value:"4",priorityValue:"4"},{text:"Langzaam verkeer: > 2 weken < 2 maanden",textLine2:"Auto- en Busverkeer: > 1 week < 1 maand",textLine3:"Tram en Beroepsvaart, natte functies: > 12 uur < 1 week",value:"5",priorityValue:"5"},{text:"Langzaam verkeer: > 2 maanden",textLine2:"Auto- en Busverkeer: > 1 maand",textLine3:" Tram en Beroepsvaart, natte functies: > 2 weken",value:"6",priorityValue:"6"}],ramsSOptions=[{text:"Geen veiligheidsincident",value:"1",priorityValue:"1"},{text:"Ongeval/incident zonder letsel",value:"2",priorityValue:"2"},{text:"Ongeval met middelmatig letsel",value:"3",priorityValue:"3"},{text:"Ongeval met niet blijvend zwaar letsel",value:"4",priorityValue:"4"},{text:"Ongeval met blijvend letsel",value:"5",priorityValue:"5"},{text:"Dodelijk ongeval",value:"6",priorityValue:"6"}],ramsCOptions=[{text:"Conform ambitieniveau",value:"1",priorityValue:"1"},{text:"1 Niveau lager dan ambitieniveau",value:"2",priorityValue:"2"},{text:"2 Niveaus lager dan ambitieniveau",value:"3",priorityValue:"3"},{text:"Achterstallig Onderhoud ",value:"4",priorityValue:"4"}],ramsEcOptions=[{text:"Geen kosten",value:"1",priorityValue:"1"},{text:"Lager dan € 1.000",value:"2",priorityValue:"2"},{text:"€ 1.000 tot € 10.000",value:"3",priorityValue:"3"},{text:"€ 10.000 tot € 100.000",value:"4",priorityValue:"4"},{text:"€ 100.000  tot € 1 miljoen",value:"5",priorityValue:"5"},{text:"> € 1 miljoen",value:"6",priorityValue:"6"}],ramsEnvOptions=[{text:"Geen gevolgen",value:"1",priorityValue:"1"},{text:"Gevolgen voor milieu beperkt, lokaal en beheersbaar",value:"2",priorityValue:"2"},{text:"Gevolgen voor milieu lokaal, lichte verontreiniging",value:"3",priorityValue:"3"},{text:"Gevolgen voor milieu lokaal, verontreiniging die sanering behoeft",value:"4",priorityValue:"4"},{text:"Grootschalige verontreiniging bodem/water, maatregelen nodig",value:"5",priorityValue:"5"},{text:"Ernstige milieuschade",textLine2:"Ingrijpende herstellende maatregelen nodig met (mogelijk) blijvende schade",textLine3:"Impact/ hinder voor regio (gebied > 5 km)",value:"6",priorityValue:"6"}],ramsPOptions=[{text:"Geen imagoschade",value:"1",priorityValue:"1"},{text:"Negatieve berichtgeving in lokale media",textLine2:"AM moet zich verantwoorden naar AO",textLine3:"Interne verdeeldheid binnen een bestuurslaag",value:"2",priorityValue:"2"},{text:"Negatieve berichtgeving in lokale media",textLine2:"AO moet zich verantwoorden naar staf wethouders",textLine3:"Georganiseerde ontevredenheid binnen een bestuurslaag",value:"3",priorityValue:"3"},{text:"Negatieve berichtgeving in regionale media",textLine2:"Wethouder moet zich verantwoorden naar collega B&W",textLine3:"Georganiseerde ontevredenheid tussen meerdere bestuurslagen",value:"4",priorityValue:"4"},{text:"Negatieve berichtgeving in landelijke media",textLine2:"College B & W moet zich verantwoorden naar de Gemeenteraad",textLine3:"Geen overeenstemming tussen bestuurslagen",value:"5",priorityValue:"5"},{text:"Negatieve berichtgeving in internationale media",textLine2:"Kamervragen",value:"6",priorityValue:"6"}];function getRamsMaxPriorityValue(options,value,maxPriorityValue){if(value){var _ramsRecord$priorityV,ramsRecord=options.find((function(item){return item.value===value}));if(ramsRecord)if(parseInt(null!==(_ramsRecord$priorityV=ramsRecord.priorityValue)&&void 0!==_ramsRecord$priorityV?_ramsRecord$priorityV:"0",10)>parseInt(null!=maxPriorityValue?maxPriorityValue:"0",10))return ramsRecord.priorityValue}return maxPriorityValue}function getRamsWeightedPriorityValue(_ref){var totalValue=function getRamsTotalPriorityValue(_ref){var _maxPriority,ramsR=_ref.ramsR,ramsA=_ref.ramsA,ramsS=_ref.ramsS,ramsC=_ref.ramsC,ramsEc=_ref.ramsEc,ramsEnv=_ref.ramsEnv,ramsP=_ref.ramsP,maxPriority="0";return ramsR&&(ramsA||ramsS||ramsC||ramsEc||ramsEnv||ramsP)?(maxPriority=getRamsMaxPriorityValue(ramsAOptions,ramsA,maxPriority),maxPriority=getRamsMaxPriorityValue(ramsSOptions,ramsS,maxPriority),maxPriority=getRamsMaxPriorityValue(ramsCOptions,ramsC,maxPriority),maxPriority=getRamsMaxPriorityValue(ramsEcOptions,ramsEc,maxPriority),maxPriority=getRamsMaxPriorityValue(ramsEnvOptions,ramsEnv,maxPriority),maxPriority=getRamsMaxPriorityValue(ramsPOptions,ramsP,maxPriority),parseInt(null!==(_maxPriority=maxPriority)&&void 0!==_maxPriority?_maxPriority:"0",10)+parseInt(ramsR,10)):0}({ramsR:_ref.ramsR,ramsA:_ref.ramsA,ramsS:_ref.ramsS,ramsC:_ref.ramsC,ramsEc:_ref.ramsEc,ramsEnv:_ref.ramsEnv,ramsP:_ref.ramsP});return 7===totalValue?"2":8===totalValue?"3":totalValue>8?"4":totalValue>1?"1":"0"}}}]);