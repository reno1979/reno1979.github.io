"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[724],{"./libs/ui/reports/ovs/src/components/OVSJunctionBoxDetails/OVSJunctionBoxDetails.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_stubs___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/reports/ovs/src/__stubs__/index.ts"),meta={component:__webpack_require__("./libs/ui/reports/ovs/src/components/OVSJunctionBoxDetails/OVSJunctionBoxDetails.tsx").Z};__webpack_exports__.default=meta;var Default={args:{junctionBox:_stubs___WEBPACK_IMPORTED_MODULE_0__.gN}};Default.parameters=Object.assign({},Default.parameters,{docs:Object.assign({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:Object.assign({originalSource:"{\n  args: {\n    junctionBox: OVSJunctionBox1\n  }\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2=_Default$parameters2.docs)?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./libs/ui/reports/ovs/src/components/OVSJunctionBoxDetails/OVSJunctionBoxDetails.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _aip_ui_reports_shared__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/reports/shared/src/index.ts"),_aip_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/utils/generic/src/index.ts"),react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-dev-runtime.js"),OVSJunctionBoxDetails=function OVSJunctionBoxDetails(_ref){var junctionBox=_ref.junctionBox,name=junctionBox.name,location=junctionBox.location,mastNumber=junctionBox.mastNumber,installationHeight=junctionBox.installationHeight,riserTubeVisible=junctionBox.riserTubeVisible,geographyRD=junctionBox.geographyRD,_ref2=null!=geographyRD&&geographyRD.coordinates?geographyRD.coordinates:[],rdX=_ref2[0],rdY=_ref2[1],descriptionListItems=[{label:"Naam",value:name},{label:"Lichtpuntnummer",value:(0,_aip_utils__WEBPACK_IMPORTED_MODULE_1__.hj)(mastNumber)?(0,_aip_utils__WEBPACK_IMPORTED_MODULE_1__.oN)(mastNumber,{locale:"nl-NL"}):""},{label:"Straat",value:location},{label:"Aanleghoogte (m)",value:installationHeight},{label:"X-coördinaat",value:rdX},{label:"Y-coördinaat",value:rdY},{label:"Stijgbuis zichtbaar",value:riserTubeVisible?"Ja":"Nee"}];return(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_aip_ui_reports_shared__WEBPACK_IMPORTED_MODULE_0__.o6,{heading:"Details",list:descriptionListItems,"data-testid":"ovs-junction-box-details"},void 0,!1,{fileName:"/home/rene/Projects/bor-aip-ci/libs/ui/reports/ovs/src/components/OVSJunctionBoxDetails/OVSJunctionBoxDetails.tsx",lineNumber:47,columnNumber:9},undefined)};__webpack_exports__.Z=OVSJunctionBoxDetails;try{OVSJunctionBoxDetails.displayName="OVSJunctionBoxDetails",OVSJunctionBoxDetails.__docgenInfo={description:"",displayName:"OVSJunctionBoxDetails",props:{junctionBox:{defaultValue:null,description:"",name:"junctionBox",required:!0,type:{name:"OVSJunctionBox"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/reports/ovs/src/components/OVSJunctionBoxDetails/OVSJunctionBoxDetails.tsx#OVSJunctionBoxDetails"]={docgenInfo:OVSJunctionBoxDetails.__docgenInfo,name:"OVSJunctionBoxDetails",path:"libs/ui/reports/ovs/src/components/OVSJunctionBoxDetails/OVSJunctionBoxDetails.tsx#OVSJunctionBoxDetails"})}catch(__react_docgen_typescript_loader_error){}}}]);