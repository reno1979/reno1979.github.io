function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Report.stories-CcPgo7DK.js","./index-CsdIBAqE.js","./entry-preview-hoctkQkb.js","./react-18-Cu1enTKq.js","./entry-preview-docs-DjUoCfVb.js","./_getPrototype-B2S_C0PQ.js","./index-DrFu-skq.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-CPx4xQSq.js","./preview-h_ilA6-v.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f="modulepreload",R=function(_,s){return new URL(_,s).href},E={},o=function(s,c,l){let e=Promise.resolve();if(c&&c.length>0){const t=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),O=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.all(c.map(i=>{if(i=R(i,l),i in E)return;E[i]=!0;const u=i.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const m=t[a];if(m.href===i&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":f,u||(n.as="script",n.crossOrigin=""),n.href=i,O&&n.setAttribute("nonce",O),document.head.appendChild(n),u)return new Promise((a,m)=>{n.addEventListener("load",a),n.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>s()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:w}=__STORYBOOK_MODULE_PREVIEW_API__,d=P({page:"preview"});w.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const T={"./src/views/report/Report.stories.tsx":async()=>o(()=>import("./Report.stories-CcPgo7DK.js"),__vite__mapDeps([0,1]),import.meta.url)};async function L(_){return T[_]()}const{composeConfigs:v,PreviewWeb:h,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-hoctkQkb.js"),__vite__mapDeps([2,1,3]),import.meta.url),o(()=>import("./entry-preview-docs-DjUoCfVb.js"),__vite__mapDeps([4,5,1,6]),import.meta.url),o(()=>import("./preview-Bwjq-WsA.js"),[],import.meta.url),o(()=>import("./preview-DbT1mggi.js"),[],import.meta.url),o(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([7,6]),import.meta.url),o(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),o(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([8,6]),import.meta.url),o(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),o(()=>import("./preview-D2d-74FL.js"),[],import.meta.url),o(()=>import("./preview-CPx4xQSq.js"),__vite__mapDeps([9,10]),import.meta.url)]);return v(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new h(L,S);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};
