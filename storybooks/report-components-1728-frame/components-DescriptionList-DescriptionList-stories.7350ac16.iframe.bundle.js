"use strict";(self.webpackChunkaip=self.webpackChunkaip||[]).push([[795],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./libs/report-components/src/components/Heading/Heading.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Heading_Heading}});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./libs/report-components/src/styles/index.ts"),HeadingStyle=styled_components_browser_esm.ZP.h1(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\tfont: var(",");\n\tposition: relative;\n\tcolor: #000;\n\tmargin-bottom: 16px;\n\n\t&[data-hidden-token-for-pdf-parse]:after {\n\t\tposition: absolute;\n\t\tz-index: -1;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tcontent: attr(data-hidden-token-for-pdf-parse);\n\t\tcolor: #fff;\n\t}\n"])),(function(_ref){var _ref$as=_ref.as,as=void 0===_ref$as?"h1":_ref$as;return styles.R[as]})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","as"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Heading=function Heading(_ref){var children=_ref.children,_ref$as=_ref.as,as=void 0===_ref$as?"h1":_ref$as,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)(HeadingStyle,_objectSpread(_objectSpread({as:as,"data-testid":"report-heading"},props),{},{children:children}))};Heading.displayName="Heading";var Heading_Heading=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{as:{defaultValue:{value:"h1"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/report-components/src/components/Heading/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"libs/report-components/src/components/Heading/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./libs/report-components/src/components/Heading/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _Heading__WEBPACK_IMPORTED_MODULE_0__.Z}});var _Heading__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/report-components/src/components/Heading/Heading.tsx")},"./libs/report-components/src/styles/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return colors},R:function(){return fonts}});var fonts={base:"--report-base-font",baseBold:"--report-base-bold-font",baseBolder:"--report-base-bolder-font",small:"--report-small-font",h1:"--report-h1-font",h2:"--report-h2-font",h3:"--report-h3-font",h4:"--report-h4-font",h5:"--report-h5-font",h6:"--report-h6-font"},colors={primairyBlack:"--report-color-primairy-black",primairyWhite:"--report-color-primairy-white",primairyBlue:"--report-color-primairy-blue",primairyRed:"--report-color-primairy-red",darkBlue:"--report-color-dark-blue",orange:"--report-color-orange",yellow:"--report-color-yellow",green:"--report-color-green",darkGreen:"--report-color-dark-green",blue:"--report-color-blue",purple:"--report-color-purple",magenta:"--report-color-magenta",neutralGrey1:"--report-color-neutral-grey-1",neutralGrey2:"--report-color-neutral-grey-2",neutralGrey3:"--report-color-neutral-grey-3",neutralGrey4:"--report-color-neutral-grey-4",darkYellow:"--report-color-dark-yellow"}},"./libs/report-components/src/components/DescriptionList/DescriptionList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DescriptionList_stories}});var _templateObject,_templateObject2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),Heading=__webpack_require__("./libs/report-components/src/components/Heading/index.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./libs/report-components/src/styles/index.ts"),DescriptionListWrapperStyle=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\tmargin: 0;\n"]))),DescriptionListStyle=styled_components_browser_esm.ZP.dl(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n\tdisplay: grid;\n\tgrid-template-columns: minmax(180px, max-content) auto;\n\tgap: 4px;\n\tmargin: 0;\n\n\tdd,\n\tdt {\n\t\tfont: var(",");\n\t\tmargin: 0;\n\t}\n"])),styles.R.base),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["heading","list"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var DescriptionList=function DescriptionList(_ref){var heading=_ref.heading,list=_ref.list,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsxs)(DescriptionListWrapperStyle,_objectSpread(_objectSpread({"data-testid":"report-description-list"},props),{},{children:[heading&&(0,jsx_runtime.jsx)(Heading.Z,{as:"h4","data-testid":"report-description-list-heading",children:heading}),(0,jsx_runtime.jsx)(DescriptionListStyle,{children:list.map((function(item,index){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("dt",{children:item.label}),(0,jsx_runtime.jsx)("dd",{children:item.value})]},index)}))})]}))};DescriptionList.displayName="DescriptionList";var _Default$parameters,_Default$parameters2,DescriptionList_DescriptionList=DescriptionList;try{DescriptionList.displayName="DescriptionList",DescriptionList.__docgenInfo={description:"",displayName:"DescriptionList",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"DescriptionListItem[]"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/report-components/src/components/DescriptionList/DescriptionList.tsx#DescriptionList"]={docgenInfo:DescriptionList.__docgenInfo,name:"DescriptionList",path:"libs/report-components/src/components/DescriptionList/DescriptionList.tsx#DescriptionList"})}catch(__react_docgen_typescript_loader_error){}function DescriptionList_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function DescriptionList_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?DescriptionList_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):DescriptionList_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var DescriptionList_stories={component:DescriptionList_DescriptionList},Default={args:{heading:"Description List",list:[{label:"Label 1",value:"Value 1"},{label:"Label 2",value:"Value 2"},{label:"Label 3",value:"Value 3"},{label:"Label 4",value:"Value 4"},{label:"Label 5",value:"Value 5"}]}};Default.parameters=DescriptionList_stories_objectSpread(DescriptionList_stories_objectSpread({},Default.parameters),{},{docs:DescriptionList_stories_objectSpread(DescriptionList_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:DescriptionList_stories_objectSpread({originalSource:"{\n  args: {\n    heading: 'Description List',\n    list: [{\n      label: 'Label 1',\n      value: 'Value 1'\n    }, {\n      label: 'Label 2',\n      value: 'Value 2'\n    }, {\n      label: 'Label 3',\n      value: 'Value 3'\n    }, {\n      label: 'Label 4',\n      value: 'Value 4'\n    }, {\n      label: 'Label 5',\n      value: 'Value 5'\n    }]\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]}}]);