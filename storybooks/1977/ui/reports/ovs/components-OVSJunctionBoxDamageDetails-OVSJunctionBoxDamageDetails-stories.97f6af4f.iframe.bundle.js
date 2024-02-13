"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[931],{"./libs/ui/reports/ovs/src/components/OVSJunctionBoxDamageDetails/OVSJunctionBoxDamageDetails.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,meta={component:__webpack_require__("./libs/ui/reports/ovs/src/components/OVSJunctionBoxDamageDetails/OVSJunctionBoxDamageDetails.tsx").Z,argTypes:{junctionBoxId:{options:["1","2","3","4","delayed","error",""],control:{type:"select"}}}};__webpack_exports__.default=meta;var Default={args:{junctionBoxId:"1"}};Default.parameters=Object.assign({},Default.parameters,{docs:Object.assign({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:Object.assign({originalSource:"{\n  args: {\n    junctionBoxId: '1'\n  }\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2=_Default$parameters2.docs)?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./libs/ui/reports/ovs/src/components/OVSJunctionBoxDamageDetails/OVSJunctionBoxDamageDetails.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return OVSJunctionBoxDamageDetails_OVSJunctionBoxDamageDetails}});var _templateObject,src=__webpack_require__("./libs/ui/reports/shared/src/index.ts"),useQuery=__webpack_require__("./node_modules/@apollo/client/react/hooks/useQuery.js"),translateDamageBoolean=__webpack_require__("./libs/ui/reports/ovs/src/utils/translateDamageBoolean.ts"),graphql_generated=__webpack_require__("./libs/ui/reports/ovs/src/graphql/graphql.generated.ts"),taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),OVSJunctionBoxDamageDetailsStyle=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: ",";\n\n\th4 {\n\t\tmargin-bottom: 0;\n\n\t\t~ p {\n\t\t\tmargin: 0;\n\t\t}\n\t}\n"])),(0,src.zG)(8)),jsx_dev_runtime=__webpack_require__("./node_modules/react/jsx-dev-runtime.js"),_jsxFileName="/Users/muchuyu/GemeenteAms/bmi/bor-aip-ci/libs/ui/reports/ovs/src/components/OVSJunctionBoxDamageDetails/OVSJunctionBoxDamageDetails.tsx",OVSJunctionBoxDamageDetails=function OVSJunctionBoxDamageDetails(_ref){var junctionBoxId=_ref.junctionBoxId,_useQuery=(0,useQuery.a)(graphql_generated.GJ,{variables:{junctionBoxId:junctionBoxId}}),loading=_useQuery.loading,data=_useQuery.data,error=_useQuery.error,_ref2=(null==data?void 0:data.getJunctionBoxDamage)||{},remarks=_ref2.remarks,cableDamage=_ref2.cableDamage,faultyMontageFacade=_ref2.faultyMontageFacade,faultyMontageTensionWire=_ref2.faultyMontageTensionWire,junctionBoxDamage=_ref2.junctionBoxDamage,stickerNotReadable=_ref2.stickerNotReadable,descriptionListItems=[{label:"Schade aan de aansluitkabel?",value:(0,translateDamageBoolean.X)(cableDamage)},{label:"Onjuiste montage aan spandraad?",value:(0,translateDamageBoolean.X)(faultyMontageTensionWire)},{label:"Onjuiste montage aan gevel",value:(0,translateDamageBoolean.X)(faultyMontageFacade)},{label:"Schade aan aansluitkast?",value:(0,translateDamageBoolean.X)(junctionBoxDamage)},{label:"Sticker met identificatienummer onbruikbaar/onleesbaar?",value:(0,translateDamageBoolean.X)(stickerNotReadable)}];return(0,jsx_dev_runtime.jsxDEV)(src.qL,{loading:loading,error:error,data:data,identifier:"ovs-junction-box-damage-details",children:(0,jsx_dev_runtime.jsxDEV)(OVSJunctionBoxDamageDetailsStyle,{"data-testid":"ovs-junction-box-damage-details",children:[(0,jsx_dev_runtime.jsxDEV)(src.o6,{heading:"Aansluitkabels en stijgbuis",list:descriptionListItems},void 0,!1,{fileName:_jsxFileName,lineNumber:55,columnNumber:5},undefined),remarks&&(0,jsx_dev_runtime.jsxDEV)(jsx_dev_runtime.Fragment,{children:[(0,jsx_dev_runtime.jsxDEV)(src.X6,{as:"h4",children:"Opmerkingen inspectie"},void 0,!1,{fileName:_jsxFileName,lineNumber:59,columnNumber:7},undefined),(0,jsx_dev_runtime.jsxDEV)("p",{children:remarks},void 0,!1,{fileName:_jsxFileName,lineNumber:60,columnNumber:7},undefined)]},void 0,!0)]},void 0,!0,{fileName:_jsxFileName,lineNumber:54,columnNumber:4},undefined)},void 0,!1,{fileName:_jsxFileName,lineNumber:53,columnNumber:3},undefined)},OVSJunctionBoxDamageDetails_OVSJunctionBoxDamageDetails=OVSJunctionBoxDamageDetails;try{OVSJunctionBoxDamageDetails.displayName="OVSJunctionBoxDamageDetails",OVSJunctionBoxDamageDetails.__docgenInfo={description:"",displayName:"OVSJunctionBoxDamageDetails",props:{junctionBoxId:{defaultValue:null,description:"",name:"junctionBoxId",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/reports/ovs/src/components/OVSJunctionBoxDamageDetails/OVSJunctionBoxDamageDetails.tsx#OVSJunctionBoxDamageDetails"]={docgenInfo:OVSJunctionBoxDamageDetails.__docgenInfo,name:"OVSJunctionBoxDamageDetails",path:"libs/ui/reports/ovs/src/components/OVSJunctionBoxDamageDetails/OVSJunctionBoxDamageDetails.tsx#OVSJunctionBoxDamageDetails"})}catch(__react_docgen_typescript_loader_error){}},"./libs/ui/reports/ovs/src/utils/translateDamageBoolean.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function translateDamageBoolean(damage){return!0===damage?"Ja":!1===damage?"Nee":"Nog niet beoordeeld"}__webpack_require__.d(__webpack_exports__,{X:function(){return translateDamageBoolean}})}}]);