"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[832],{"./libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxSection.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return OVSJunctionBoxSection_stories}});var _stubs_=__webpack_require__("./libs/ui/reports/ovs/src/__stubs__/index.ts"),src=__webpack_require__("./libs/ui/reports/shared/src/index.ts"),react=(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),__webpack_require__("./node_modules/react/index.js")),dist=__webpack_require__("./node_modules/graphql-request/dist/index.js");var environment_jwtToken=function jwtToken(){return window.jwtToken||function getCookie(name){var parts=("; "+document.cookie).split("; "+name+"=");if(2===parts.length)return parts.pop().split(";").shift()}("jwtToken")||""},graphql_generated=__webpack_require__("./libs/ui/reports/ovs/src/graphql/graphql.generated.ts"),client=new dist.GraphQLClient(BMIAIP_API_URL),useQuery=((0,graphql_generated.mK)(client,(function(action){return action({Authorization:"Bearer "+environment_jwtToken()})})),__webpack_require__("./node_modules/@apollo/client/react/hooks/useQuery.js")),OVSEntityImagesSection=__webpack_require__("./libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSEntityImagesSection/OVSEntityImagesSection.tsx"),OVSJunctionBoxDetailsSection=__webpack_require__("./libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxDetailsSection/OVSJunctionBoxDetailsSection.tsx"),OVSJunctionBoxSurveySection=__webpack_require__("./libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxSurveySection/OVSJunctionBoxSurveySection.tsx"),jsx_dev_runtime=__webpack_require__("./node_modules/react/jsx-dev-runtime.js"),_jsxFileName="/home/rene/Projects/bor-aip-ci/libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxSection.tsx",OVSJunctionBoxSection=function OVSJunctionBoxSection(_ref){var _data$groupedDocument,junctionBox=_ref.junctionBox,junctionBoxes=_ref.junctionBoxes,supportSystems=_ref.supportSystems,survey=_ref.survey,_useOVSDocuments=function useOVSDocuments(_ref){var entityId=_ref.entityId,assetId=_ref.assetId,surveyId=_ref.surveyId,_useState=(0,react.useState)(),data=_useState[0],setData=_useState[1],_useQuery=(0,useQuery.a)(graphql_generated.ZF,{variables:{entityId:entityId,provider:"dms",surveyId:surveyId,assetId:assetId}}),loading=_useQuery.loading,dataFromQuery=_useQuery.data,error=_useQuery.error;return(0,react.useEffect)((function(){var _dataFromQuery$findDo;if(dataFromQuery){var groupedDocuments=dataFromQuery.findDocumentsSpanInstallation.slice(1).reduce((function(resultArray,item,index){var chunkIndex=Math.floor(index/2);return resultArray[chunkIndex]||(resultArray[chunkIndex]=[]),resultArray[chunkIndex].push(item),resultArray}),[]),firstImageUrl=(null==(_dataFromQuery$findDo=dataFromQuery.findDocumentsSpanInstallation[0])?void 0:_dataFromQuery$findDo.thumbnail_url)||"";setData({groupedDocuments:groupedDocuments,firstImageUrl:firstImageUrl})}}),[dataFromQuery]),{data:data,loading:loading,error:error}}({surveyId:survey.id,entityId:junctionBox.id,assetId:survey.object.id}),loading=_useOVSDocuments.loading,data=_useOVSDocuments.data,error=_useOVSDocuments.error;return(0,jsx_dev_runtime.jsxDEV)(src.qL,{loading:loading,error:error,data:data,identifier:"ovs-junction-box-section",children:[(0,jsx_dev_runtime.jsxDEV)(OVSJunctionBoxDetailsSection.Z,{junctionBox:junctionBox,junctionBoxes:junctionBoxes,supportSystems:supportSystems},void 0,!1,{fileName:_jsxFileName,lineNumber:31,columnNumber:4},undefined),(0,jsx_dev_runtime.jsxDEV)(OVSJunctionBoxSurveySection.Z,{junctionBox:junctionBox,imageUrl:null==data?void 0:data.firstImageUrl},void 0,!1,{fileName:_jsxFileName,lineNumber:37,columnNumber:4},undefined),(null==data||null==(_data$groupedDocument=data.groupedDocuments)?void 0:_data$groupedDocument.length)>0&&data.groupedDocuments.map((function(docs){return(0,jsx_dev_runtime.jsxDEV)(OVSEntityImagesSection.Z,{documents:docs,name:junctionBox.name,type:"spanJunctionBox"},junctionBox.id,!1,{fileName:_jsxFileName,lineNumber:41,columnNumber:6},undefined)}))]},void 0,!0,{fileName:_jsxFileName,lineNumber:30,columnNumber:3},undefined)},OVSJunctionBoxSection_OVSJunctionBoxSection=OVSJunctionBoxSection;try{OVSJunctionBoxSection.displayName="OVSJunctionBoxSection",OVSJunctionBoxSection.__docgenInfo={description:"",displayName:"OVSJunctionBoxSection",props:{junctionBox:{defaultValue:null,description:"",name:"junctionBox",required:!0,type:{name:"OVSJunctionBox"}},junctionBoxes:{defaultValue:null,description:"",name:"junctionBoxes",required:!0,type:{name:"OVSJunctionBox[]"}},supportSystems:{defaultValue:null,description:"",name:"supportSystems",required:!0,type:{name:"OVSSupportSystem[]"}},survey:{defaultValue:null,description:"",name:"survey",required:!0,type:{name:"OVSSurvey"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxSection.tsx#OVSJunctionBoxSection"]={docgenInfo:OVSJunctionBoxSection.__docgenInfo,name:"OVSJunctionBoxSection",path:"libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxSection.tsx#OVSJunctionBoxSection"})}catch(__react_docgen_typescript_loader_error){}var OVSJunctionBoxSection_stories={component:OVSJunctionBoxSection_OVSJunctionBoxSection},Default={args:{junctionBox:_stubs_.gN,junctionBoxes:_stubs_._c,supportSystems:_stubs_.lE,survey:_stubs_.wk}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    junctionBox: OVSJunctionBox1,\n    junctionBoxes: OVSJunctionBoxes,\n    supportSystems: OVSSupportSystems,\n    survey: OVSSurvey1\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSEntityImagesSection/OVSEntityImagesSection.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return OVSEntityImagesSection_OVSEntityImagesSection}});var _templateObject,_templateObject2,src=__webpack_require__("./libs/ui/reports/shared/src/index.ts"),components=__webpack_require__("./libs/ui/reports/ovs/src/components/index.ts"),taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),OVSEntityImagesSectionStyle=styled_components_browser_esm.ZP.section(_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["\n\tdisplay: flex;\n\tflex-flow: column;\n\tgap: ",";\n"])),(0,src.zG)(8)),OVSEntityImagesSectionImageStyle=(0,styled_components_browser_esm.ZP)(src.t3)(_templateObject2||(_templateObject2=taggedTemplateLiteralLoose_default()(["\n\tmargin: 0 auto;\n\tmax-width: 100%;\n\theight: ",";\n"])),(0,src.zG)(285)),jsx_dev_runtime=__webpack_require__("./node_modules/react/jsx-dev-runtime.js"),_jsxFileName="/home/rene/Projects/bor-aip-ci/libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSEntityImagesSection/OVSEntityImagesSection.tsx",OVSEntityImagesSection=function OVSEntityImagesSection(_ref){var type=_ref.type,name=_ref.name,documents=_ref.documents;return(0,jsx_dev_runtime.jsxDEV)(OVSEntityImagesSectionStyle,{"data-testid":"ovs-report-entity-images-section",children:[(0,jsx_dev_runtime.jsxDEV)(components.sm,{type:type,name:name},void 0,!1,{fileName:_jsxFileName,lineNumber:17,columnNumber:3},undefined),documents.map((function(_ref2){var name=_ref2.name,thumbnail_url=_ref2.thumbnail_url;return(0,jsx_dev_runtime.jsxDEV)(OVSEntityImagesSectionImageStyle,{imageUrl:thumbnail_url},name,!1,{fileName:_jsxFileName,lineNumber:20,columnNumber:4},undefined)})),(0,jsx_dev_runtime.jsxDEV)(src.sl,{},void 0,!1,{fileName:_jsxFileName,lineNumber:23,columnNumber:3},undefined)]},void 0,!0,{fileName:_jsxFileName,lineNumber:16,columnNumber:2},undefined)},OVSEntityImagesSection_OVSEntityImagesSection=OVSEntityImagesSection;try{OVSEntityImagesSection.displayName="OVSEntityImagesSection",OVSEntityImagesSection.__docgenInfo={description:"",displayName:"OVSEntityImagesSection",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"spanJunctionBox"'},{value:'"spanLuminaire"'},{value:'"spanSupportSystemFacade"'},{value:'"spanSupportSystemMast"'},{value:'"spanSupportSystemNode"'},{value:'"spanSupportSystemTensionWire"'}]}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},documents:{defaultValue:null,description:"",name:"documents",required:!0,type:{name:"{ name: string; thumbnail_url: string; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSEntityImagesSection/OVSEntityImagesSection.tsx#OVSEntityImagesSection"]={docgenInfo:OVSEntityImagesSection.__docgenInfo,name:"OVSEntityImagesSection",path:"libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSEntityImagesSection/OVSEntityImagesSection.tsx#OVSEntityImagesSection"})}catch(__react_docgen_typescript_loader_error){}},"./libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxDetailsSection/OVSJunctionBoxDetailsSection.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return OVSJunctionBoxDetailsSection_OVSJunctionBoxDetailsSection}});var _templateObject,_templateObject2,src=__webpack_require__("./libs/ui/reports/shared/src/index.ts"),components=__webpack_require__("./libs/ui/reports/ovs/src/components/index.ts"),taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),OVSJunctionBoxDetailsSectionStyle=styled_components_browser_esm.ZP.section(_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["\n\tbreak-inside: avoid;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: ",";\n"])),(0,src.zG)(8)),OVSJunctionBoxDetailsSectionMapWrapperStyle=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=taggedTemplateLiteralLoose_default()(["\n\twidth: 100%;\n\theight: ",";\n"])),(0,src.zG)(292)),jsx_dev_runtime=__webpack_require__("./node_modules/react/jsx-dev-runtime.js"),_jsxFileName="/home/rene/Projects/bor-aip-ci/libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxDetailsSection/OVSJunctionBoxDetailsSection.tsx",OVSJunctionBoxDetailsSection=function OVSJunctionBoxDetailsSection(_ref){var junctionBox=_ref.junctionBox,junctionBoxes=_ref.junctionBoxes,supportSystems=_ref.supportSystems;return(0,jsx_dev_runtime.jsxDEV)(OVSJunctionBoxDetailsSectionStyle,{"data-testid":"ovs-section-junction-box-details",children:[(0,jsx_dev_runtime.jsxDEV)(components.sm,{type:"spanJunctionBox",name:junctionBox.name},void 0,!1,{fileName:_jsxFileName,lineNumber:19,columnNumber:3},undefined),(0,jsx_dev_runtime.jsxDEV)(components.uf,{junctionBox:junctionBox},void 0,!1,{fileName:_jsxFileName,lineNumber:20,columnNumber:3},undefined),(0,jsx_dev_runtime.jsxDEV)(OVSJunctionBoxDetailsSectionMapWrapperStyle,{children:(0,jsx_dev_runtime.jsxDEV)(components.Vy,{junctionBoxes:junctionBoxes,supportSystems:supportSystems,selectedEntityId:junctionBox.id},void 0,!1,{fileName:_jsxFileName,lineNumber:22,columnNumber:4},undefined)},void 0,!1,{fileName:_jsxFileName,lineNumber:21,columnNumber:3},undefined),(0,jsx_dev_runtime.jsxDEV)(src.sl,{},void 0,!1,{fileName:_jsxFileName,lineNumber:28,columnNumber:3},undefined)]},void 0,!0,{fileName:_jsxFileName,lineNumber:18,columnNumber:2},undefined)},OVSJunctionBoxDetailsSection_OVSJunctionBoxDetailsSection=OVSJunctionBoxDetailsSection;try{OVSJunctionBoxDetailsSection.displayName="OVSJunctionBoxDetailsSection",OVSJunctionBoxDetailsSection.__docgenInfo={description:"",displayName:"OVSJunctionBoxDetailsSection",props:{junctionBox:{defaultValue:null,description:"",name:"junctionBox",required:!0,type:{name:"OVSJunctionBox"}},junctionBoxes:{defaultValue:null,description:"",name:"junctionBoxes",required:!0,type:{name:"OVSJunctionBox[]"}},supportSystems:{defaultValue:null,description:"",name:"supportSystems",required:!0,type:{name:"OVSSupportSystem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxDetailsSection/OVSJunctionBoxDetailsSection.tsx#OVSJunctionBoxDetailsSection"]={docgenInfo:OVSJunctionBoxDetailsSection.__docgenInfo,name:"OVSJunctionBoxDetailsSection",path:"libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxDetailsSection/OVSJunctionBoxDetailsSection.tsx#OVSJunctionBoxDetailsSection"})}catch(__react_docgen_typescript_loader_error){}},"./libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxSurveySection/OVSJunctionBoxSurveySection.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return OVSJunctionBoxSurveySection_OVSJunctionBoxSurveySection}});var _templateObject,_templateObject2,src=__webpack_require__("./libs/ui/reports/shared/src/index.ts"),components=__webpack_require__("./libs/ui/reports/ovs/src/components/index.ts"),taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),OVSJunctionBoxSurveySectionStyle=styled_components_browser_esm.ZP.section(_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["\n\tbreak-inside: avoid;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: ",";\n"])),(0,src.zG)(8)),OVSJunctionBoxSurveySectionImageStyle=(0,styled_components_browser_esm.ZP)(src.t3)(_templateObject2||(_templateObject2=taggedTemplateLiteralLoose_default()(["\n\tmargin: 0 auto;\n\tmax-width: 100%;\n\theight: ",";\n"])),(0,src.zG)(285)),jsx_dev_runtime=__webpack_require__("./node_modules/react/jsx-dev-runtime.js"),_jsxFileName="/home/rene/Projects/bor-aip-ci/libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxSurveySection/OVSJunctionBoxSurveySection.tsx",OVSJunctionBoxSurveySection=function OVSJunctionBoxSurveySection(_ref){var junctionBox=_ref.junctionBox,imageUrl=_ref.imageUrl;return(0,jsx_dev_runtime.jsxDEV)(OVSJunctionBoxSurveySectionStyle,{"data-testid":"ovs-section-junction-box-survey",children:[(0,jsx_dev_runtime.jsxDEV)(components.sm,{type:"spanJunctionBox",name:junctionBox.name},void 0,!1,{fileName:_jsxFileName,lineNumber:18,columnNumber:3},undefined),(0,jsx_dev_runtime.jsxDEV)(components.P5,{junctionBoxId:junctionBox.id},void 0,!1,{fileName:_jsxFileName,lineNumber:19,columnNumber:3},undefined),imageUrl&&(0,jsx_dev_runtime.jsxDEV)(OVSJunctionBoxSurveySectionImageStyle,{imageUrl:imageUrl},void 0,!1,{fileName:_jsxFileName,lineNumber:21,columnNumber:16},undefined),(0,jsx_dev_runtime.jsxDEV)(src.sl,{},void 0,!1,{fileName:_jsxFileName,lineNumber:23,columnNumber:3},undefined)]},void 0,!0,{fileName:_jsxFileName,lineNumber:17,columnNumber:2},undefined)},OVSJunctionBoxSurveySection_OVSJunctionBoxSurveySection=OVSJunctionBoxSurveySection;try{OVSJunctionBoxSurveySection.displayName="OVSJunctionBoxSurveySection",OVSJunctionBoxSurveySection.__docgenInfo={description:"",displayName:"OVSJunctionBoxSurveySection",props:{junctionBox:{defaultValue:null,description:"",name:"junctionBox",required:!0,type:{name:"OVSJunctionBox"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxSurveySection/OVSJunctionBoxSurveySection.tsx#OVSJunctionBoxSurveySection"]={docgenInfo:OVSJunctionBoxSurveySection.__docgenInfo,name:"OVSJunctionBoxSurveySection",path:"libs/ui/reports/ovs/src/sections/OVSDecomposition/OVSJunctionBoxSection/OVSJunctionBoxSurveySection/OVSJunctionBoxSurveySection.tsx#OVSJunctionBoxSurveySection"})}catch(__react_docgen_typescript_loader_error){}}}]);