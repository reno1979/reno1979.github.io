(self.webpackChunkaip=self.webpackChunkaip||[]).push([[179],{"./libs/ui/reports/ovs/src lazy recursive ^\\.\\/.*$ include: (?:\\/libs\\/ui\\/reports\\/ovs\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx%7Cmdx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./components/OVSEntityMap/OVSEntityMap.stories":["./libs/ui/reports/ovs/src/components/OVSEntityMap/OVSEntityMap.stories.tsx",780,166,263,987],"./components/OVSEntityMap/OVSEntityMap.stories.tsx":["./libs/ui/reports/ovs/src/components/OVSEntityMap/OVSEntityMap.stories.tsx",780,166,263,987],"./components/OVSEntityMapLegend/OVSEntityMapLegend.stories":["./libs/ui/reports/ovs/src/components/OVSEntityMapLegend/OVSEntityMapLegend.stories.tsx",780,166,866],"./components/OVSEntityMapLegend/OVSEntityMapLegend.stories.tsx":["./libs/ui/reports/ovs/src/components/OVSEntityMapLegend/OVSEntityMapLegend.stories.tsx",780,166,866],"./components/OVSIcon/OVSIcon.stories":["./libs/ui/reports/ovs/src/components/OVSIcon/OVSIcon.stories.tsx",780,166,254],"./components/OVSIcon/OVSIcon.stories.tsx":["./libs/ui/reports/ovs/src/components/OVSIcon/OVSIcon.stories.tsx",780,166,254],"./components/OVSSurveyPassportDescriptionList/OVSSurveyPassportDescriptionList.stories":["./libs/ui/reports/ovs/src/components/OVSSurveyPassportDescriptionList/OVSSurveyPassportDescriptionList.stories.tsx",780,166,446],"./components/OVSSurveyPassportDescriptionList/OVSSurveyPassportDescriptionList.stories.tsx":["./libs/ui/reports/ovs/src/components/OVSSurveyPassportDescriptionList/OVSSurveyPassportDescriptionList.stories.tsx",780,166,446],"./sections/OVSCoverSheet/OVSCoverSheet.stories":["./libs/ui/reports/ovs/src/sections/OVSCoverSheet/OVSCoverSheet.stories.tsx",780,166,263,432],"./sections/OVSCoverSheet/OVSCoverSheet.stories.tsx":["./libs/ui/reports/ovs/src/sections/OVSCoverSheet/OVSCoverSheet.stories.tsx",780,166,263,432],"./sections/OVSPassport/OVSPassport.stories":["./libs/ui/reports/ovs/src/sections/OVSPassport/OVSPassport.stories.tsx",780,166,263,176],"./sections/OVSPassport/OVSPassport.stories.tsx":["./libs/ui/reports/ovs/src/sections/OVSPassport/OVSPassport.stories.tsx",780,166,263,176]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((function(){return __webpack_require__(id)}))}webpackAsyncContext.keys=function(){return Object.keys(map)},webpackAsyncContext.id="./libs/ui/reports/ovs/src lazy recursive ^\\.\\/.*$ include: (?:\\/libs\\/ui\\/reports\\/ovs\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx%7Cmdx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:libs\/ui\/reports\/ovs\/src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx|mdx))$/.exec(path))return;const pathRemainder=path.substring(26);return __webpack_require__("./libs/ui/reports/ovs/src lazy recursive ^\\.\\/.*$ include: (?:\\/libs\\/ui\\/reports\\/ovs\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx%7Cmdx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./libs/ui/reports/ovs/.storybook/preview.tsx")])})},"./libs/ui/reports/ovs/.storybook/preview.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _aip_ui_storybook__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/storybook/src/index.ts"),react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-dev-runtime.js"),_jsxFileName="/home/rene/Projects/bor-aip-ci/libs/ui/reports/ovs/.storybook/preview.tsx",preview={decorators:[function(Story,context){return(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_aip_ui_storybook__WEBPACK_IMPORTED_MODULE_0__.Gj,{orientation:context.globals.orientation,children:(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Story,{},void 0,!1,{fileName:_jsxFileName,lineNumber:7,columnNumber:4},undefined)},void 0,!1,{fileName:_jsxFileName,lineNumber:6,columnNumber:3},undefined)}],globalTypes:Object.assign({},_aip_ui_storybook__WEBPACK_IMPORTED_MODULE_0__.LN)};__webpack_exports__.default=preview},"./libs/ui/storybook/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Gj:function(){return A4Decorator_A4Decorator},LN:function(){return A4DecoratorGlobalTypes},n8:function(){return DelayedRenderDecorator_DelayedRenderDecorator},rG:function(){return disableStoryControls}});var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),taggedTemplateLiteral_default=__webpack_require__.n(taggedTemplateLiteral),A4DecoratorStyle=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=taggedTemplateLiteral_default()(["\n\tposition: relative;\n\twidth: ",";\n\tmin-height: ",";\n\tpadding: 10mm;\n\tbackground: white;\n\tmargin: 0 auto;\n\tbox-shadow: 0px 2px 38px rgba(0, 0, 0, 0.2);\n\tpage-break-after: always;\n\n\t&::before,\n\t&::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tleft: auto;\n\t\tbackground: none;\n\t\tz-index: -1;\n\t}\n\n\t&::before {\n\t\twidth: 10px;\n\t\theight: 95%;\n\t\ttop: 5px;\n\t\tright: 18px;\n\t\ttransform: rotate(3deg);\n\t\tbox-shadow: 22px 0px 35px 0px rgba(0, 0, 0, 0.5);\n\t}\n\n\t&::after {\n\t\twidth: 90%;\n\t\theight: 10px;\n\t\ttop: 30px;\n\t\tright: 8px;\n\t\ttransform: rotate(-3deg);\n\t\tbox-shadow: 0px -25px 35px 0px rgba(0, 0, 0, 0.5);\n\t}\n\n\t& > * {\n\t\tbreak-inside: avoid;\n\t}\n"])),(function(_ref){return"portrait"===_ref.orientation?"210mm":"297mm"}),(function(_ref2){return"portrait"===_ref2.orientation?"297mm":"210mm"})),jsx_dev_runtime=__webpack_require__("./node_modules/react/jsx-dev-runtime.js"),A4Decorator=function A4Decorator(_ref){var children=_ref.children,orientation=_ref.orientation;return(0,jsx_dev_runtime.jsxDEV)(A4DecoratorStyle,{orientation:orientation,children:children},void 0,!1,{fileName:"/home/rene/Projects/bor-aip-ci/libs/ui/storybook/src/decorators/A4Decorator/A4Decorator.tsx",lineNumber:12,columnNumber:2},undefined)},A4Decorator_A4Decorator=A4Decorator;try{A4Decorator.displayName="A4Decorator",A4Decorator.__docgenInfo={description:"",displayName:"A4Decorator",props:{orientation:{defaultValue:null,description:"",name:"orientation",required:!0,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/storybook/src/decorators/A4Decorator/A4Decorator.tsx#A4Decorator"]={docgenInfo:A4Decorator.__docgenInfo,name:"A4Decorator",path:"libs/ui/storybook/src/decorators/A4Decorator/A4Decorator.tsx#A4Decorator"})}catch(__react_docgen_typescript_loader_error){}var A4DecoratorGlobalTypes={orientation:{description:"Global orientation for A4 page",defaultValue:"portrait",toolbar:{title:"Orientation",icon:"document",items:["portrait","landscape"],dynamicTitle:!0}}},slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"),slicedToArray_default=__webpack_require__.n(slicedToArray),react=__webpack_require__("./node_modules/react/index.js"),DelayedRenderDecorator=function DelayedRenderDecorator(Story){var _useState=(0,react.useState)(!1),_useState2=slicedToArray_default()(_useState,2),isShown=_useState2[0],setIsShown=_useState2[1];return(0,react.useEffect)((function(){var timeoutId=setTimeout((function(){return setIsShown(!0)}),10);return function(){return clearTimeout(timeoutId)}}),[]),isShown?(0,jsx_dev_runtime.jsxDEV)(Story,{},void 0,!1,{fileName:"/home/rene/Projects/bor-aip-ci/libs/ui/storybook/src/decorators/DelayedRenderDecorator/DelayedRenderDecorator.tsx",lineNumber:12,columnNumber:19},undefined):null},DelayedRenderDecorator_DelayedRenderDecorator=DelayedRenderDecorator;try{DelayedRenderDecorator.displayName="DelayedRenderDecorator",DelayedRenderDecorator.__docgenInfo={description:"",displayName:"DelayedRenderDecorator",props:{decorators:{defaultValue:null,description:"Wrapper components or Storybook decorators that wrap a story.\n\nDecorators defined in Meta will be applied to every story variation.\n@see [Decorators](https://storybook.js.org/docs/addons/introduction/#1-decorators)",name:"decorators",required:!1,type:{name:"DecoratorFunction<ReactRenderer, { [x: string]: any; }> | DecoratorFunction<ReactRenderer, { [x: string]: any; }>[]"}},parameters:{defaultValue:null,description:"Custom metadata for a story.\n@see [Parameters](https://storybook.js.org/docs/basics/writing-stories/#parameters)",name:"parameters",required:!1,type:{name:"Parameters"}},args:{defaultValue:null,description:"Dynamic data that are provided (and possibly updated by) Storybook and its addons.\n@see [Arg story inputs](https://storybook.js.org/docs/react/api/csf#args-story-inputs)",name:"args",required:!1,type:{name:"Partial<Args>"}},argTypes:{defaultValue:null,description:"ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.\n@see [Control annotations](https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations)",name:"argTypes",required:!1,type:{name:"Partial<ArgTypes<Args>>"}},loaders:{defaultValue:null,description:"Asynchronous functions which provide data for a story.\n@see [Loaders](https://storybook.js.org/docs/react/writing-stories/loaders)",name:"loaders",required:!1,type:{name:"LoaderFunction<ReactRenderer, Args> | LoaderFunction<ReactRenderer, Args>[]"}},render:{defaultValue:null,description:"Define a custom render function for the story(ies). If not passed, a default render function by the renderer will be used.",name:"render",required:!1,type:{name:"ArgsStoryFn<ReactRenderer, Args>"}},storyName:{defaultValue:null,description:"Override the display name in the UI (CSF v2)",name:"storyName",required:!1,type:{name:"string"}},play:{defaultValue:null,description:"Function that is executed after the story is rendered.",name:"play",required:!1,type:{name:"PlayFunction<ReactRenderer, Args>"}},tags:{defaultValue:null,description:"Named tags for a story, used to filter stories in different contexts.",name:"tags",required:!1,type:{name:"string[]"}},story:{defaultValue:null,description:"@deprecated",name:"story",required:!1,type:{name:'Omit<StoryAnnotations<ReactRenderer, Args, Partial<Args>>, "story">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ui/storybook/src/decorators/DelayedRenderDecorator/DelayedRenderDecorator.tsx#DelayedRenderDecorator"]={docgenInfo:DelayedRenderDecorator.__docgenInfo,name:"DelayedRenderDecorator",path:"libs/ui/storybook/src/decorators/DelayedRenderDecorator/DelayedRenderDecorator.tsx#DelayedRenderDecorator"})}catch(__react_docgen_typescript_loader_error){}function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function disableStoryControls(keys){var _step,argTypes={},_iterator=_createForOfIteratorHelper(keys);try{for(_iterator.s();!(_step=_iterator.n()).done;){argTypes[_step.value]={table:{disable:!0}}}}catch(err){_iterator.e(err)}finally{_iterator.f()}return argTypes}},"@storybook/channels":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":function(module){"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":function(module){"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},function(__webpack_require__){__webpack_require__.O(0,[481],(function(){return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);