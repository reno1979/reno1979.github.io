"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[446],{"./libs/ui/reports/ovs/src/components/OVSSurveyPassportDescriptionList/OVSSurveyPassportDescriptionList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_stubs___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/reports/ovs/src/__stubs__/index.ts"),meta={component:__webpack_require__("./libs/ui/reports/ovs/src/components/OVSSurveyPassportDescriptionList/OVSSurveyPassportDescriptionList.tsx").Z};__webpack_exports__.default=meta;var Default={args:{survey:_stubs___WEBPACK_IMPORTED_MODULE_0__.wk}};Default.parameters=Object.assign({},Default.parameters,{docs:Object.assign({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:Object.assign({originalSource:"{\n  args: {\n    survey: OVSSurvey1\n  }\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2=_Default$parameters2.docs)?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./libs/ui/reports/ovs/src/__stubs__/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_c:function(){return OVSJunctionBoxes},Ou:function(){return OVSSpanMeasuresSurvey1},lE:function(){return OVSSupportSystems},wk:function(){return OVSSurvey1}});var _templateObject,OVSSurvey1={object:{name:"Object 1",code:"Code 1",attributes:{passportStreet:"Street 1",tramTracks:!0,passportSplits:!1,passportDoubleWired:!0,passportCityArea:"City area 1",passportDistrict:"District 1",passportNeighborhood:"Neighborhood 1",passportIdentifications:"Identifications 1",notes:"Dit is een opmerking vanuit Techview over het algehele object"}}},geography4={coordinates:[4.895,52.37044]},geography5={coordinates:[4.8956,52.37045]},geography6={coordinates:[4.8954,52.37045]},geography7={coordinates:[4.8952,52.37048]},geography8={coordinates:[4.895,52.37051]},geography9={coordinates:[4.8957,52.37041]},geography10={coordinates:[4.8948,52.37039]},geography11={coordinates:[4.89506,52.37048]},geography12={coordinates:[4.89512,52.37048]},geography13={coordinates:[4.89505,52.37046]},OVSJunctionBox1={id:"junction-box-1",name:"junction-box-1",geography:{coordinates:[4.89487,52.37033]}},OVSJunctionBox2={id:"junction-box-2",name:"junction-box-2",geography:{coordinates:[4.8954,52.37039]}},OVSJunctionBox3={id:"junction-box-3",name:"junction-box-3",geography:{coordinates:[4.8952,52.37041]}},OVSJunctionBoxes=[OVSJunctionBox1,OVSJunctionBox2,OVSJunctionBox3,{id:"junction-box-4",name:"junction-box-4"}],taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),lib=__webpack_require__("./node_modules/graphql-tag/lib/index.js"),SupportSystemType=function(SupportSystemType){return SupportSystemType.Facade="Facade",SupportSystemType.Mast="Mast",SupportSystemType.Node="Node",SupportSystemType.TensionWire="TensionWire",SupportSystemType}({});(0,lib.ZP)(_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["\n    query getOVSReportData($surveyId: String!) {\n  getSurveyById(id: $surveyId) {\n    object {\n      name\n      code\n      attributes\n    }\n  }\n  getSpanMeasuresSurvey(surveyId: $surveyId) {\n    inspectionStandardData {\n      generalRemarks\n    }\n  }\n  spanInstallationJunctionBoxes(surveyId: $surveyId) {\n    id\n    name\n    geography\n  }\n  spanInstallationSupportSystems(surveyId: $surveyId) {\n    id\n    name\n    type\n    geography\n    luminaires {\n      id\n      name\n      geography\n    }\n  }\n}\n    "])));var OVSLuminaire1={id:"luminaire-1",name:"luminaire-name-1",geography:geography11},OVSLuminaire2={id:"luminaire-2",name:"luminaire-name-2",geography:geography12},OVSLuminaire3={id:"luminaire-3",name:"luminaire-name-3",geography:geography13},OVSLuminaire4={id:"luminaire-4",name:"luminaire-name-4"},OVSLuminaire5={id:"luminaire-5",name:"luminaire-name-5"},OVSLuminaire6={id:"luminaire-6",name:"luminaire-name-6"},OVSLuminaires=[OVSLuminaire1,OVSLuminaire2,OVSLuminaire3,OVSLuminaire4,OVSLuminaire5,OVSLuminaire6],OVSSupportSystem1={id:"support-system-1",name:"support-system-name-1",type:SupportSystemType.TensionWire,geography:geography10,luminaires:[OVSLuminaire1,OVSLuminaire2,OVSLuminaire3]},OVSSupportSystem2={id:"support-system-2",name:"support-sysem-name-2",type:SupportSystemType.TensionWire,geography:geography9,luminaires:[OVSLuminaire4,OVSLuminaire5,OVSLuminaire6]},OVSSupportSystem3={id:"support-system-3",name:"support-system-name-3",type:SupportSystemType.TensionWire,geography:geography8,luminaires:OVSLuminaires},OVSSupportSystem4={id:"support-system-4",name:"support-system-name-4",type:SupportSystemType.Facade,geography:geography7,luminaires:[]},OVSSupportSystem5={id:"support-system-5",name:"support-system-name-5",type:SupportSystemType.Mast,geography:geography6,luminaires:[]},OVSSupportSystem6={id:"support-system-6",name:"support-system-name-6",type:SupportSystemType.Node,geography:geography5,luminaires:[]},OVSSupportSystem7={id:"support-system-7",name:"support-system-name-7",type:SupportSystemType.Facade,geography:geography4,luminaires:[]},OVSSupportSystems=(SupportSystemType.Node,SupportSystemType.Facade,[OVSSupportSystem1,OVSSupportSystem2,OVSSupportSystem3,OVSSupportSystem4,OVSSupportSystem5,OVSSupportSystem6,OVSSupportSystem7]),OVSSpanMeasuresSurvey1={inspectionStandardData:{generalRemarks:"General remarks 1"}}},"./libs/ui/reports/ovs/src/components/OVSSurveyPassportDescriptionList/OVSSurveyPassportDescriptionList.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return OVSSurveyPassportDescriptionList_OVSSurveyPassportDescriptionList}});var _templateObject,src=__webpack_require__("./libs/ui/reports/shared/src/index.ts"),taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),OVSSurveyPassportDescriptionListWrapperStyle=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["\n\tdisplay: grid;\n\tgrid-template-columns: auto auto;\n\tcolumn-gap: ",";\n\trow-gap: ",";\n\tmargin: 0 0 "," 0;\n\n\t& > :first-child {\n\t\tjustify-self: start;\n\t}\n\n\t& > :last-child {\n\t\tjustify-self: end;\n\t}\n"])),(0,src.kj)(24),(0,src.zG)(24),(0,src.zG)(16)),jsx_dev_runtime=__webpack_require__("./node_modules/react/jsx-dev-runtime.js"),_jsxFileName="/home/rene/Projects/bor-aip-ci/libs/ui/reports/ovs/src/components/OVSSurveyPassportDescriptionList/OVSSurveyPassportDescriptionList.tsx",OVSSurveyPassportDescriptionList=function OVSSurveyPassportDescriptionList(_ref){var _survey$object=_ref.survey.object,attributes=_survey$object.attributes,name=_survey$object.name,notes=attributes.notes,passportCityArea=attributes.passportCityArea,passportDistrict=attributes.passportDistrict,passportDoubleWired=attributes.passportDoubleWired,passportNeighborhood=attributes.passportNeighborhood,passportSplits=attributes.passportSplits,descriptionListItemsLocation=[{label:"Naam",value:name},{label:"Straat",value:attributes.passportStreet},{label:"Buurt",value:passportNeighborhood},{label:"Wijk",value:passportDistrict},{label:"Stadsdeel",value:passportCityArea}],descriptionListItemsTechnical=[{label:"Splitsingen",value:passportSplits?"Ja":"Nee"},{label:"Dubbeldraads",value:passportDoubleWired?"Ja":"Nee"},{label:"Boven trambaan",value:attributes.tramTracks?"Ja":"Nee"},{label:"Opmerking:",value:notes,fullWidthValue:!0}];return(0,jsx_dev_runtime.jsxDEV)(OVSSurveyPassportDescriptionListWrapperStyle,{"data-testid":"ovs-survey-passport-description-list",children:[(0,jsx_dev_runtime.jsxDEV)(src.o6,{heading:"Locatie",list:descriptionListItemsLocation,"data-testid":"ovs-survey-passport-description-list-location"},void 0,!1,{fileName:_jsxFileName,lineNumber:71,columnNumber:4},undefined),(0,jsx_dev_runtime.jsxDEV)(src.o6,{heading:"Technische gegevens",list:descriptionListItemsTechnical,"data-testid":"ovs-survey-passport-description-list-technical"},void 0,!1,{fileName:_jsxFileName,lineNumber:76,columnNumber:4},undefined)]},void 0,!0,{fileName:_jsxFileName,lineNumber:70,columnNumber:3},undefined)},OVSSurveyPassportDescriptionList_OVSSurveyPassportDescriptionList=OVSSurveyPassportDescriptionList;try{OVSSurveyPassportDescriptionList.displayName="OVSSurveyPassportDescriptionList",OVSSurveyPassportDescriptionList.__docgenInfo={description:"",displayName:"OVSSurveyPassportDescriptionList",props:{survey:{defaultValue:null,description:"",name:"survey",required:!0,type:{name:"OVSSurvey"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/reports/ovs/src/components/OVSSurveyPassportDescriptionList/OVSSurveyPassportDescriptionList.tsx#OVSSurveyPassportDescriptionList"]={docgenInfo:OVSSurveyPassportDescriptionList.__docgenInfo,name:"OVSSurveyPassportDescriptionList",path:"libs/ui/reports/ovs/src/components/OVSSurveyPassportDescriptionList/OVSSurveyPassportDescriptionList.tsx#OVSSurveyPassportDescriptionList"})}catch(__react_docgen_typescript_loader_error){}}}]);