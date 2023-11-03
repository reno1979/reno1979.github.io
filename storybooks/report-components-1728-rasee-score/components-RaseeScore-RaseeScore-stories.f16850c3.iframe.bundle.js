"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[489],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./libs/report-components/src/components/Condition/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{AE:function(){return conditionCodeToKey},qI:function(){return conditionCodeToName},TM:function(){return conditionCodeToScore},FE:function(){return conditionColors}});var conditionColors={excellent:"--report-color-dark-green",good:"--report-color-green",reasonable:"--report-color-yellow",moderate:"--report-color-dark-yellow",poor:"--report-color-orange",bad:"--report-color-primary-red",further:"--report-color-neutral-grey-1",unknown:"--report-color-blue",invalid:"--report-color-primary-white"};function conditionCodeToKey(code){switch(code){case"1":return"excellent";case"2":return"good";case"3":return"reasonable";case"4":return"moderate";case"5":return"poor";case"6":return"bad";case"F":return"further";case"U":return"unknown";default:return"invalid"}}var src=__webpack_require__("./libs/i18n/src/index.ts"),conditionCodeToName=function conditionCodeToName(code){return(0,src.W)("nl","condition.".concat(conditionCodeToKey(code)))},conditionCodeToScore=function conditionCodeToScore(code){return["U","F"].includes(null==code?void 0:code.toUpperCase())?"-":["1","2","3","4","5","6"].includes(null==code?void 0:code.toUpperCase())?code:""}},"./libs/report-components/src/components/RaseeScore/RaseeScore.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return RaseeScore_stories}});var _templateObject,_templateObject2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),Condition=__webpack_require__("./libs/report-components/src/components/Condition/index.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./libs/report-components/src/styles/index.ts"),RaseeScoreWrapperStyle=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 8px; /* TODO: use size calculation other MR */\n"]))),RaseeScoreStyle=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 12px; /* TODO: use size calculation other MR */\n\theight: 100%;\n\tgap: 8px; /* TODO: use size calculation other MR */\n\tbackground-color: var(",");\n\tcolor: ",";\n\n\t> div {\n\t\tfont: var(",");\n\t}\n\n\t> div:first-child {\n\t\tfont: var(",");\n\t}\n"])),(function(_ref){var condition=_ref.condition;return Condition.FE[(0,Condition.AE)(condition)]}),styles.O.primairyBlack,styles.R.small,styles.R.smallBold);try{RaseeScoreWrapperStyle.displayName="RaseeScoreWrapperStyle",RaseeScoreWrapperStyle.__docgenInfo={description:"",displayName:"RaseeScoreWrapperStyle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/report-components/src/components/RaseeScore/RaseeScoreStyle.tsx#RaseeScoreWrapperStyle"]={docgenInfo:RaseeScoreWrapperStyle.__docgenInfo,name:"RaseeScoreWrapperStyle",path:"libs/report-components/src/components/RaseeScore/RaseeScoreStyle.tsx#RaseeScoreWrapperStyle"})}catch(__react_docgen_typescript_loader_error){}try{RaseeScoreStyle.displayName="RaseeScoreStyle",RaseeScoreStyle.__docgenInfo={description:"",displayName:"RaseeScoreStyle",props:{condition:{defaultValue:null,description:"",name:"condition",required:!0,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/report-components/src/components/RaseeScore/RaseeScoreStyle.tsx#RaseeScoreStyle"]={docgenInfo:RaseeScoreStyle.__docgenInfo,name:"RaseeScoreStyle",path:"libs/report-components/src/components/RaseeScore/RaseeScoreStyle.tsx#RaseeScoreStyle"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ramsR","ramsA","ramsS","ramsEc","ramsEnv"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var RaseeScore=function RaseeScore(_ref){var ramsR=_ref.ramsR,ramsA=_ref.ramsA,ramsS=_ref.ramsS,ramsEc=_ref.ramsEc,ramsEnv=_ref.ramsEnv,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsxs)(RaseeScoreWrapperStyle,_objectSpread(_objectSpread({"data-testid":"report-rasee-score"},props),{},{children:[(0,jsx_runtime.jsxs)(RaseeScoreStyle,{condition:ramsR,"data-testid":"report-rasee-score-r",children:[(0,jsx_runtime.jsx)("div",{children:"R"}),(0,jsx_runtime.jsx)("div",{children:(0,Condition.TM)(ramsR)})]}),(0,jsx_runtime.jsxs)(RaseeScoreStyle,{condition:ramsA,"data-testid":"report-rasee-score-a",children:[(0,jsx_runtime.jsx)("div",{children:"A"}),(0,jsx_runtime.jsx)("div",{children:(0,Condition.TM)(ramsA)})]}),(0,jsx_runtime.jsxs)(RaseeScoreStyle,{condition:ramsS,"data-testid":"report-rasee-score-s",children:[(0,jsx_runtime.jsx)("div",{children:"S"}),(0,jsx_runtime.jsx)("div",{children:(0,Condition.TM)(ramsS)})]}),(0,jsx_runtime.jsxs)(RaseeScoreStyle,{condition:ramsEc,"data-testid":"report-rasee-score-ec",children:[(0,jsx_runtime.jsx)("div",{children:"E"}),(0,jsx_runtime.jsx)("div",{children:(0,Condition.TM)(ramsEc)})]}),(0,jsx_runtime.jsxs)(RaseeScoreStyle,{condition:ramsEnv,"data-testid":"report-rasee-score-env",children:[(0,jsx_runtime.jsx)("div",{children:"E"}),(0,jsx_runtime.jsx)("div",{children:(0,Condition.TM)(ramsEnv)})]})]}))};RaseeScore.displayName="RaseeScore";var _Default$parameters,_Default$parameters2,RaseeScore_RaseeScore=RaseeScore;try{RaseeScore.displayName="RaseeScore",RaseeScore.__docgenInfo={description:"",displayName:"RaseeScore",props:{ramsR:{defaultValue:null,description:"",name:"ramsR",required:!0,type:{name:"string"}},ramsA:{defaultValue:null,description:"",name:"ramsA",required:!0,type:{name:"string"}},ramsS:{defaultValue:null,description:"",name:"ramsS",required:!0,type:{name:"string"}},ramsEc:{defaultValue:null,description:"",name:"ramsEc",required:!0,type:{name:"string"}},ramsEnv:{defaultValue:null,description:"",name:"ramsEnv",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/report-components/src/components/RaseeScore/RaseeScore.tsx#RaseeScore"]={docgenInfo:RaseeScore.__docgenInfo,name:"RaseeScore",path:"libs/report-components/src/components/RaseeScore/RaseeScore.tsx#RaseeScore"})}catch(__react_docgen_typescript_loader_error){}function RaseeScore_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function RaseeScore_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?RaseeScore_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):RaseeScore_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var controlScore={options:["1","2","3","4","5","6","F","U"],control:{type:"select"}},RaseeScore_stories={component:RaseeScore_RaseeScore,argTypes:{ramsR:controlScore,ramsA:controlScore,ramsS:controlScore,ramsEc:controlScore,ramsEnv:controlScore}},Default={args:{ramsR:"1",ramsA:"1",ramsS:"1",ramsEc:"1",ramsEnv:"1"}};Default.parameters=RaseeScore_stories_objectSpread(RaseeScore_stories_objectSpread({},Default.parameters),{},{docs:RaseeScore_stories_objectSpread(RaseeScore_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:RaseeScore_stories_objectSpread({originalSource:"{\n  args: {\n    ramsR: '1',\n    ramsA: '1',\n    ramsS: '1',\n    ramsEc: '1',\n    ramsEnv: '1'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]}}]);