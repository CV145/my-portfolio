(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var Fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function e_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var t_={exports:{}},ku={},n_={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=Symbol.for("react.element"),Qx=Symbol.for("react.portal"),Zx=Symbol.for("react.fragment"),Jx=Symbol.for("react.strict_mode"),eS=Symbol.for("react.profiler"),tS=Symbol.for("react.provider"),nS=Symbol.for("react.context"),iS=Symbol.for("react.forward_ref"),rS=Symbol.for("react.suspense"),aS=Symbol.for("react.memo"),oS=Symbol.for("react.lazy"),Ap=Symbol.iterator;function sS(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var i_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r_=Object.assign,a_={};function ao(t,e,n){this.props=t,this.context=e,this.refs=a_,this.updater=n||i_}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o_(){}o_.prototype=ao.prototype;function Jd(t,e,n){this.props=t,this.context=e,this.refs=a_,this.updater=n||i_}var eh=Jd.prototype=new o_;eh.constructor=Jd;r_(eh,ao.prototype);eh.isPureReactComponent=!0;var Cp=Array.isArray,s_=Object.prototype.hasOwnProperty,th={current:null},l_={key:!0,ref:!0,__self:!0,__source:!0};function u_(t,e,n){var i,r={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)s_.call(e,i)&&!l_.hasOwnProperty(i)&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:ps,type:t,key:a,ref:o,props:r,_owner:th.current}}function lS(t,e){return{$$typeof:ps,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ps}function uS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rp=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uS(""+t.key):e.toString(36)}function Fl(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ps:case Qx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+xc(o,0):i,Cp(r)?(n="",t!=null&&(n=t.replace(Rp,"$&/")+"/"),Fl(r,e,n,"",function(u){return u})):r!=null&&(nh(r)&&(r=lS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Rp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Cp(t))for(var s=0;s<t.length;s++){a=t[s];var l=i+xc(a,s);o+=Fl(a,e,n,l,r)}else if(l=sS(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=i+xc(a,s++),o+=Fl(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ks(t,e,n){if(t==null)return t;var i=[],r=0;return Fl(t,i,"","",function(a){return e.call(n,a,r++)}),i}function cS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},kl={transition:null},fS={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:kl,ReactCurrentOwner:th};We.Children={map:ks,forEach:function(t,e,n){ks(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ks(t,function(){e++}),e},toArray:function(t){return ks(t,function(e){return e})||[]},only:function(t){if(!nh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=ao;We.Fragment=Zx;We.Profiler=eS;We.PureComponent=Jd;We.StrictMode=Jx;We.Suspense=rS;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fS;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=r_({},t.props),r=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=th.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)s_.call(e,l)&&!l_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:ps,type:t.type,key:r,ref:a,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:nS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tS,_context:t},t.Consumer=t};We.createElement=u_;We.createFactory=function(t){var e=u_.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:iS,render:t}};We.isValidElement=nh;We.lazy=function(t){return{$$typeof:oS,_payload:{_status:-1,_result:t},_init:cS}};We.memo=function(t,e){return{$$typeof:aS,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=kl.transition;kl.transition={};try{t()}finally{kl.transition=e}};We.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};We.useCallback=function(t,e){return rn.current.useCallback(t,e)};We.useContext=function(t){return rn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};We.useEffect=function(t,e){return rn.current.useEffect(t,e)};We.useId=function(){return rn.current.useId()};We.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return rn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};We.useRef=function(t){return rn.current.useRef(t)};We.useState=function(t){return rn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return rn.current.useTransition()};We.version="18.2.0";n_.exports=We;var Kt=n_.exports;const oi=e_(Kt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dS=Kt,hS=Symbol.for("react.element"),pS=Symbol.for("react.fragment"),mS=Object.prototype.hasOwnProperty,gS=dS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vS={key:!0,ref:!0,__self:!0,__source:!0};function c_(t,e,n){var i,r={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)mS.call(e,i)&&!vS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:hS,type:t,key:a,ref:o,props:r,_owner:gS.current}}ku.Fragment=pS;ku.jsx=c_;ku.jsxs=c_;t_.exports=ku;var se=t_.exports,If={},f_={exports:{}},Tn={},d_={exports:{}},h_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,U){var B=L.length;L.push(U);e:for(;0<B;){var $=B-1>>>1,ee=L[$];if(0<r(ee,U))L[$]=U,L[B]=ee,B=$;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var U=L[0],B=L.pop();if(B!==U){L[0]=B;e:for(var $=0,ee=L.length,Te=ee>>>1;$<Te;){var H=2*($+1)-1,q=L[H],le=H+1,ye=L[le];if(0>r(q,B))le<ee&&0>r(ye,q)?(L[$]=ye,L[le]=B,$=le):(L[$]=q,L[H]=B,$=H);else if(le<ee&&0>r(ye,B))L[$]=ye,L[le]=B,$=le;else break e}}return U}function r(L,U){var B=L.sortIndex-U.sortIndex;return B!==0?B:L.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,h=3,m=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var U=n(u);U!==null;){if(U.callback===null)i(u);else if(U.startTime<=L)i(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function S(L){if(y=!1,g(L),!_)if(n(l)!==null)_=!0,V(A);else{var U=n(u);U!==null&&Y(S,U.startTime-L)}}function A(L,U){_=!1,y&&(y=!1,f(N),N=-1),m=!0;var B=h;try{for(g(U),d=n(l);d!==null&&(!(d.expirationTime>U)||L&&!R());){var $=d.callback;if(typeof $=="function"){d.callback=null,h=d.priorityLevel;var ee=$(d.expirationTime<=U);U=t.unstable_now(),typeof ee=="function"?d.callback=ee:d===n(l)&&i(l),g(U)}else i(l);d=n(l)}if(d!==null)var Te=!0;else{var H=n(u);H!==null&&Y(S,H.startTime-U),Te=!1}return Te}finally{d=null,h=B,m=!1}}var b=!1,T=null,N=-1,j=5,x=-1;function R(){return!(t.unstable_now()-x<j)}function X(){if(T!==null){var L=t.unstable_now();x=L;var U=!0;try{U=T(!0,L)}finally{U?K():(b=!1,T=null)}}else b=!1}var K;if(typeof v=="function")K=function(){v(X)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,W=P.port2;P.port1.onmessage=X,K=function(){W.postMessage(null)}}else K=function(){p(X,0)};function V(L){T=L,b||(b=!0,K())}function Y(L,U){N=p(function(){L(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,V(A))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var B=h;h=U;try{return L()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,U){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=h;h=L;try{return U()}finally{h=B}},t.unstable_scheduleCallback=function(L,U,B){var $=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?$+B:$):B=$,L){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=B+ee,L={id:c++,callback:U,priorityLevel:L,startTime:B,expirationTime:ee,sortIndex:-1},B>$?(L.sortIndex=B,e(u,L),n(l)===null&&L===n(u)&&(y?(f(N),N=-1):y=!0,Y(S,B-$))):(L.sortIndex=ee,e(l,L),_||m||(_=!0,V(A))),L},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(L){var U=h;return function(){var B=h;h=U;try{return L.apply(this,arguments)}finally{h=B}}}})(h_);d_.exports=h_;var _S=d_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_=Kt,Mn=_S;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m_=new Set,Xo={};function ta(t,e){$a(t,e),$a(t+"Capture",e)}function $a(t,e){for(Xo[t]=e,t=0;t<e.length;t++)m_.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,yS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pp={},Lp={};function xS(t){return Uf.call(Lp,t)?!0:Uf.call(Pp,t)?!1:yS.test(t)?Lp[t]=!0:(Pp[t]=!0,!1)}function SS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ES(t,e,n,i){if(e===null||typeof e>"u"||SS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var ih=/[\-:]([a-z])/g;function rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ih,rh);Vt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ih,rh);Vt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ih,rh);Vt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function ah(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ES(e,n,r,i)&&(n=null),i||r===null?xS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=p_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zs=Symbol.for("react.element"),xa=Symbol.for("react.portal"),Sa=Symbol.for("react.fragment"),oh=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),v_=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),kf=Symbol.for("react.suspense_list"),lh=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),__=Symbol.for("react.offscreen"),Np=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=Np&&t[Np]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Sc;function Ro(t){if(Sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sc=e&&e[1]||""}return`
`+Sc+t}var Ec=!1;function Mc(t,e){if(!t||Ec)return"";Ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{Ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function MS(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function zf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sa:return"Fragment";case xa:return"Portal";case Of:return"Profiler";case oh:return"StrictMode";case Ff:return"Suspense";case kf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v_:return(t.displayName||"Context")+".Consumer";case g_:return(t._context.displayName||"Context")+".Provider";case sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lh:return e=t.displayName||null,e!==null?e:zf(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return zf(t(e))}catch{}}return null}function TS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zf(e);case 8:return e===oh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function y_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wS(t){var e=y_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bs(t){t._valueTracker||(t._valueTracker=wS(t))}function x_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=y_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bf(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function S_(t,e){e=e.checked,e!=null&&ah(t,"checked",e,!1)}function Hf(t,e){S_(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gf(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gf(t,e,n){(e!=="number"||tu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function Fa(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(Po(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function E_(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function M_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?M_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hs,T_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hs=Hs||document.createElement("div"),Hs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bS=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){bS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function w_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function b_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=w_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var AS=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(t,e){if(e){if(AS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $f=null;function uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yf=null,ka=null,za=null;function Fp(t){if(t=vs(t)){if(typeof Yf!="function")throw Error(J(280));var e=t.stateNode;e&&(e=Vu(e),Yf(t.stateNode,t.type,e))}}function A_(t){ka?za?za.push(t):za=[t]:ka=t}function C_(){if(ka){var t=ka,e=za;if(za=ka=null,Fp(t),e)for(t=0;t<e.length;t++)Fp(e[t])}}function R_(t,e){return t(e)}function P_(){}var Tc=!1;function L_(t,e,n){if(Tc)return t(e,n);Tc=!0;try{return R_(t,e,n)}finally{Tc=!1,(ka!==null||za!==null)&&(P_(),C_())}}function $o(t,e){var n=t.stateNode;if(n===null)return null;var i=Vu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var qf=!1;if(Ai)try{var go={};Object.defineProperty(go,"passive",{get:function(){qf=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{qf=!1}function CS(t,e,n,i,r,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Uo=!1,nu=null,iu=!1,Kf=null,RS={onError:function(t){Uo=!0,nu=t}};function PS(t,e,n,i,r,a,o,s,l){Uo=!1,nu=null,CS.apply(RS,arguments)}function LS(t,e,n,i,r,a,o,s,l){if(PS.apply(this,arguments),Uo){if(Uo){var u=nu;Uo=!1,nu=null}else throw Error(J(198));iu||(iu=!0,Kf=u)}}function na(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function N_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kp(t){if(na(t)!==t)throw Error(J(188))}function NS(t){var e=t.alternate;if(!e){if(e=na(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return kp(r),t;if(a===i)return kp(r),e;a=a.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,i=a;break}if(s===i){o=!0,i=r,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,i=r;break}if(s===i){o=!0,i=a,n=r;break}s=s.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function D_(t){return t=NS(t),t!==null?I_(t):null}function I_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=I_(t);if(e!==null)return e;t=t.sibling}return null}var U_=Mn.unstable_scheduleCallback,zp=Mn.unstable_cancelCallback,DS=Mn.unstable_shouldYield,IS=Mn.unstable_requestPaint,Tt=Mn.unstable_now,US=Mn.unstable_getCurrentPriorityLevel,ch=Mn.unstable_ImmediatePriority,O_=Mn.unstable_UserBlockingPriority,ru=Mn.unstable_NormalPriority,OS=Mn.unstable_LowPriority,F_=Mn.unstable_IdlePriority,zu=null,si=null;function FS(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(zu,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:BS,kS=Math.log,zS=Math.LN2;function BS(t){return t>>>=0,t===0?32:31-(kS(t)/zS|0)|0}var Gs=64,Vs=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function au(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var s=o&~r;s!==0?i=Lo(s):(a&=o,a!==0&&(i=Lo(a)))}else o=n&~r,o!==0?i=Lo(o):a!==0&&(i=Lo(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function HS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-Yn(a),s=1<<o,l=r[o];l===-1?(!(s&n)||s&i)&&(r[o]=HS(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function Qf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function k_(){var t=Gs;return Gs<<=1,!(Gs&4194240)&&(Gs=64),t}function wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ms(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function VS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function z_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var B_,dh,H_,G_,V_,Zf=!1,Ws=[],tr=null,nr=null,ir=null,Yo=new Map,qo=new Map,qi=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bp(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function vo(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=vs(e),e!==null&&dh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function XS(t,e,n,i,r){switch(e){case"focusin":return tr=vo(tr,t,e,n,i,r),!0;case"dragenter":return nr=vo(nr,t,e,n,i,r),!0;case"mouseover":return ir=vo(ir,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return Yo.set(a,vo(Yo.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,qo.set(a,vo(qo.get(a)||null,t,e,n,i,r)),!0}return!1}function W_(t){var e=Or(t.target);if(e!==null){var n=na(e);if(n!==null){if(e=n.tag,e===13){if(e=N_(n),e!==null){t.blockedOn=e,V_(t.priority,function(){H_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$f=i,n.target.dispatchEvent(i),$f=null}else return e=vs(n),e!==null&&dh(e),t.blockedOn=n,!1;e.shift()}return!0}function Hp(t,e,n){zl(t)&&n.delete(e)}function jS(){Zf=!1,tr!==null&&zl(tr)&&(tr=null),nr!==null&&zl(nr)&&(nr=null),ir!==null&&zl(ir)&&(ir=null),Yo.forEach(Hp),qo.forEach(Hp)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,Zf||(Zf=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,jS)))}function Ko(t){function e(r){return _o(r,t)}if(0<Ws.length){_o(Ws[0],t);for(var n=1;n<Ws.length;n++){var i=Ws[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&_o(tr,t),nr!==null&&_o(nr,t),ir!==null&&_o(ir,t),Yo.forEach(e),qo.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)W_(n),n.blockedOn===null&&qi.shift()}var Ba=Ui.ReactCurrentBatchConfig,ou=!0;function $S(t,e,n,i){var r=Ke,a=Ba.transition;Ba.transition=null;try{Ke=1,hh(t,e,n,i)}finally{Ke=r,Ba.transition=a}}function YS(t,e,n,i){var r=Ke,a=Ba.transition;Ba.transition=null;try{Ke=4,hh(t,e,n,i)}finally{Ke=r,Ba.transition=a}}function hh(t,e,n,i){if(ou){var r=Jf(t,e,n,i);if(r===null)Uc(t,e,i,su,n),Bp(t,i);else if(XS(r,t,e,n,i))i.stopPropagation();else if(Bp(t,i),e&4&&-1<WS.indexOf(t)){for(;r!==null;){var a=vs(r);if(a!==null&&B_(a),a=Jf(t,e,n,i),a===null&&Uc(t,e,i,su,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else Uc(t,e,i,null,n)}}var su=null;function Jf(t,e,n,i){if(su=null,t=uh(i),t=Or(t),t!==null)if(e=na(t),e===null)t=null;else if(n=e.tag,n===13){if(t=N_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return su=t,null}function X_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(US()){case ch:return 1;case O_:return 4;case ru:case OS:return 16;case F_:return 536870912;default:return 16}default:return 16}}var Qi=null,ph=null,Bl=null;function j_(){if(Bl)return Bl;var t,e=ph,n=e.length,i,r="value"in Qi?Qi.value:Qi.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[a-i];i++);return Bl=r.slice(t,1<i?1-i:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xs(){return!0}function Gp(){return!1}function wn(t){function e(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Xs:Gp,this.isPropagationStopped=Gp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mh=wn(oo),gs=_t({},oo,{view:0,detail:0}),qS=wn(gs),bc,Ac,yo,Bu=_t({},gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(bc=t.screenX-yo.screenX,Ac=t.screenY-yo.screenY):Ac=bc=0,yo=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),Vp=wn(Bu),KS=_t({},Bu,{dataTransfer:0}),QS=wn(KS),ZS=_t({},gs,{relatedTarget:0}),Cc=wn(ZS),JS=_t({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),e1=wn(JS),t1=_t({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n1=wn(t1),i1=_t({},oo,{data:0}),Wp=wn(i1),r1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=o1[t])?!!e[t]:!1}function gh(){return s1}var l1=_t({},gs,{key:function(t){if(t.key){var e=r1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gh,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u1=wn(l1),c1=_t({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=wn(c1),f1=_t({},gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gh}),d1=wn(f1),h1=_t({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),p1=wn(h1),m1=_t({},Bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=wn(m1),v1=[9,13,27,32],vh=Ai&&"CompositionEvent"in window,Oo=null;Ai&&"documentMode"in document&&(Oo=document.documentMode);var _1=Ai&&"TextEvent"in window&&!Oo,$_=Ai&&(!vh||Oo&&8<Oo&&11>=Oo),jp=" ",$p=!1;function Y_(t,e){switch(t){case"keyup":return v1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function q_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ea=!1;function y1(t,e){switch(t){case"compositionend":return q_(e);case"keypress":return e.which!==32?null:($p=!0,jp);case"textInput":return t=e.data,t===jp&&$p?null:t;default:return null}}function x1(t,e){if(Ea)return t==="compositionend"||!vh&&Y_(t,e)?(t=j_(),Bl=ph=Qi=null,Ea=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $_&&e.locale!=="ko"?null:e.data;default:return null}}var S1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!S1[t.type]:e==="textarea"}function K_(t,e,n,i){A_(i),e=lu(e,"onChange"),0<e.length&&(n=new mh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fo=null,Qo=null;function E1(t){s0(t,0)}function Hu(t){var e=wa(t);if(x_(e))return t}function M1(t,e){if(t==="change")return e}var Q_=!1;if(Ai){var Rc;if(Ai){var Pc="oninput"in document;if(!Pc){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),Pc=typeof qp.oninput=="function"}Rc=Pc}else Rc=!1;Q_=Rc&&(!document.documentMode||9<document.documentMode)}function Kp(){Fo&&(Fo.detachEvent("onpropertychange",Z_),Qo=Fo=null)}function Z_(t){if(t.propertyName==="value"&&Hu(Qo)){var e=[];K_(e,Qo,t,uh(t)),L_(E1,e)}}function T1(t,e,n){t==="focusin"?(Kp(),Fo=e,Qo=n,Fo.attachEvent("onpropertychange",Z_)):t==="focusout"&&Kp()}function w1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(Qo)}function b1(t,e){if(t==="click")return Hu(e)}function A1(t,e){if(t==="input"||t==="change")return Hu(e)}function C1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:C1;function Zo(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uf.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,e){var n=Qp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qp(n)}}function J_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e0(){for(var t=window,e=tu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tu(t.document)}return e}function _h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function R1(t){var e=e0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&J_(n.ownerDocument.documentElement,n)){if(i!==null&&_h(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=Zp(n,a);var o=Zp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var P1=Ai&&"documentMode"in document&&11>=document.documentMode,Ma=null,ed=null,ko=null,td=!1;function Jp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||Ma==null||Ma!==tu(i)||(i=Ma,"selectionStart"in i&&_h(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ko&&Zo(ko,i)||(ko=i,i=lu(ed,"onSelect"),0<i.length&&(e=new mh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ma)))}function js(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ta={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionend:js("Transition","TransitionEnd")},Lc={},t0={};Ai&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Gu(t){if(Lc[t])return Lc[t];if(!Ta[t])return t;var e=Ta[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t0)return Lc[t]=e[n];return t}var n0=Gu("animationend"),i0=Gu("animationiteration"),r0=Gu("animationstart"),a0=Gu("transitionend"),o0=new Map,em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){o0.set(t,e),ta(e,[t])}for(var Nc=0;Nc<em.length;Nc++){var Dc=em[Nc],L1=Dc.toLowerCase(),N1=Dc[0].toUpperCase()+Dc.slice(1);yr(L1,"on"+N1)}yr(n0,"onAnimationEnd");yr(i0,"onAnimationIteration");yr(r0,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(a0,"onTransitionEnd");$a("onMouseEnter",["mouseout","mouseover"]);$a("onMouseLeave",["mouseout","mouseover"]);$a("onPointerEnter",["pointerout","pointerover"]);$a("onPointerLeave",["pointerout","pointerover"]);ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ta("onBeforeInput",["compositionend","keypress","textInput","paste"]);ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D1=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function tm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,LS(i,e,void 0,t),t.currentTarget=null}function s0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;tm(r,s,u),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;tm(r,s,u),a=l}}}if(iu)throw t=Kf,iu=!1,Kf=null,t}function at(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var i=t+"__bubble";n.has(i)||(l0(e,t,2,!1),n.add(i))}function Ic(t,e,n){var i=0;e&&(i|=4),l0(n,t,i,e)}var $s="_reactListening"+Math.random().toString(36).slice(2);function Jo(t){if(!t[$s]){t[$s]=!0,m_.forEach(function(n){n!=="selectionchange"&&(D1.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$s]||(e[$s]=!0,Ic("selectionchange",!1,e))}}function l0(t,e,n,i){switch(X_(e)){case 1:var r=$S;break;case 4:r=YS;break;default:r=hh}n=r.bind(null,e,n,t),r=void 0,!qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uc(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;s!==null;){if(o=Or(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}L_(function(){var u=a,c=uh(n),d=[];e:{var h=o0.get(t);if(h!==void 0){var m=mh,_=t;switch(t){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":m=u1;break;case"focusin":_="focus",m=Cc;break;case"focusout":_="blur",m=Cc;break;case"beforeblur":case"afterblur":m=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=QS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=d1;break;case n0:case i0:case r0:m=e1;break;case a0:m=p1;break;case"scroll":m=qS;break;case"wheel":m=g1;break;case"copy":case"cut":case"paste":m=n1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Xp}var y=(e&4)!==0,p=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var v=u,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,f!==null&&(S=$o(v,f),S!=null&&y.push(es(v,S,g)))),p)break;v=v.return}0<y.length&&(h=new m(h,_,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==$f&&(_=n.relatedTarget||n.fromElement)&&(Or(_)||_[Ci]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Or(_):null,_!==null&&(p=na(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(y=Vp,S="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Xp,S="onPointerLeave",f="onPointerEnter",v="pointer"),p=m==null?h:wa(m),g=_==null?h:wa(_),h=new y(S,v+"leave",m,n,c),h.target=p,h.relatedTarget=g,S=null,Or(c)===u&&(y=new y(f,v+"enter",_,n,c),y.target=g,y.relatedTarget=p,S=y),p=S,m&&_)t:{for(y=m,f=_,v=0,g=y;g;g=ia(g))v++;for(g=0,S=f;S;S=ia(S))g++;for(;0<v-g;)y=ia(y),v--;for(;0<g-v;)f=ia(f),g--;for(;v--;){if(y===f||f!==null&&y===f.alternate)break t;y=ia(y),f=ia(f)}y=null}else y=null;m!==null&&nm(d,h,m,y,!1),_!==null&&p!==null&&nm(d,p,_,y,!0)}}e:{if(h=u?wa(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var A=M1;else if(Yp(h))if(Q_)A=A1;else{A=w1;var b=T1}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=b1);if(A&&(A=A(t,u))){K_(d,A,n,c);break e}b&&b(t,h,u),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Gf(h,"number",h.value)}switch(b=u?wa(u):window,t){case"focusin":(Yp(b)||b.contentEditable==="true")&&(Ma=b,ed=u,ko=null);break;case"focusout":ko=ed=Ma=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,Jp(d,n,c);break;case"selectionchange":if(P1)break;case"keydown":case"keyup":Jp(d,n,c)}var T;if(vh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ea?Y_(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&($_&&n.locale!=="ko"&&(Ea||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ea&&(T=j_()):(Qi=c,ph="value"in Qi?Qi.value:Qi.textContent,Ea=!0)),b=lu(u,N),0<b.length&&(N=new Wp(N,t,null,n,c),d.push({event:N,listeners:b}),T?N.data=T:(T=q_(n),T!==null&&(N.data=T)))),(T=_1?y1(t,n):x1(t,n))&&(u=lu(u,"onBeforeInput"),0<u.length&&(c=new Wp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}s0(d,e)})}function es(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=$o(t,n),a!=null&&i.unshift(es(t,a,r)),a=$o(t,e),a!=null&&i.push(es(t,a,r))),t=t.return}return i}function ia(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nm(t,e,n,i,r){for(var a=e._reactName,o=[];n!==null&&n!==i;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&u!==null&&(s=u,r?(l=$o(n,a),l!=null&&o.unshift(es(n,l,s))):r||(l=$o(n,a),l!=null&&o.push(es(n,l,s)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var I1=/\r\n?/g,U1=/\u0000|\uFFFD/g;function im(t){return(typeof t=="string"?t:""+t).replace(I1,`
`).replace(U1,"")}function Ys(t,e,n){if(e=im(e),im(t)!==e&&n)throw Error(J(425))}function uu(){}var nd=null,id=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,O1=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,F1=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(t){return rm.resolve(null).then(t).catch(k1)}:ad;function k1(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ko(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ko(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var so=Math.random().toString(36).slice(2),ni="__reactFiber$"+so,ts="__reactProps$"+so,Ci="__reactContainer$"+so,od="__reactEvents$"+so,z1="__reactListeners$"+so,B1="__reactHandles$"+so;function Or(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[ni])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function vs(t){return t=t[ni]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function Vu(t){return t[ts]||null}var sd=[],ba=-1;function xr(t){return{current:t}}function lt(t){0>ba||(t.current=sd[ba],sd[ba]=null,ba--)}function it(t,e){ba++,sd[ba]=t.current,t.current=e}var hr={},Qt=xr(hr),fn=xr(!1),$r=hr;function Ya(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function cu(){lt(fn),lt(Qt)}function om(t,e,n){if(Qt.current!==hr)throw Error(J(168));it(Qt,e),it(fn,n)}function u0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,TS(t)||"Unknown",r));return _t({},n,i)}function fu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,$r=Qt.current,it(Qt,t),it(fn,fn.current),!0}function sm(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=u0(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,lt(fn),lt(Qt),it(Qt,t)):lt(fn),it(fn,n)}var xi=null,Wu=!1,Fc=!1;function c0(t){xi===null?xi=[t]:xi.push(t)}function H1(t){Wu=!0,c0(t)}function Sr(){if(!Fc&&xi!==null){Fc=!0;var t=0,e=Ke;try{var n=xi;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,Wu=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),U_(ch,Sr),r}finally{Ke=e,Fc=!1}}return null}var Aa=[],Ca=0,du=null,hu=0,Pn=[],Ln=0,Yr=null,Mi=1,Ti="";function Pr(t,e){Aa[Ca++]=hu,Aa[Ca++]=du,du=t,hu=e}function f0(t,e,n){Pn[Ln++]=Mi,Pn[Ln++]=Ti,Pn[Ln++]=Yr,Yr=t;var i=Mi;t=Ti;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var a=32-Yn(e)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mi=1<<32-Yn(e)+r|n<<r|i,Ti=a+t}else Mi=1<<a|n<<r|i,Ti=t}function yh(t){t.return!==null&&(Pr(t,1),f0(t,1,0))}function xh(t){for(;t===du;)du=Aa[--Ca],Aa[Ca]=null,hu=Aa[--Ca],Aa[Ca]=null;for(;t===Yr;)Yr=Pn[--Ln],Pn[Ln]=null,Ti=Pn[--Ln],Pn[Ln]=null,Mi=Pn[--Ln],Pn[Ln]=null}var Sn=null,xn=null,ft=!1,Wn=null;function d0(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,xn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Mi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,xn=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(ft){var e=xn;if(e){var n=e;if(!lm(t,e)){if(ld(t))throw Error(J(418));e=rr(n.nextSibling);var i=Sn;e&&lm(t,e)?d0(i,n):(t.flags=t.flags&-4097|2,ft=!1,Sn=t)}}else{if(ld(t))throw Error(J(418));t.flags=t.flags&-4097|2,ft=!1,Sn=t}}}function um(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function qs(t){if(t!==Sn)return!1;if(!ft)return um(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=xn)){if(ld(t))throw h0(),Error(J(418));for(;e;)d0(t,e),e=rr(e.nextSibling)}if(um(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=Sn?rr(t.stateNode.nextSibling):null;return!0}function h0(){for(var t=xn;t;)t=rr(t.nextSibling)}function qa(){xn=Sn=null,ft=!1}function Sh(t){Wn===null?Wn=[t]:Wn.push(t)}var G1=Ui.ReactCurrentBatchConfig;function Gn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var pu=xr(null),mu=null,Ra=null,Eh=null;function Mh(){Eh=Ra=mu=null}function Th(t){var e=pu.current;lt(pu),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ha(t,e){mu=t,Eh=Ra=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(Eh!==t)if(t={context:t,memoizedValue:e,next:null},Ra===null){if(mu===null)throw Error(J(308));Ra=t,mu.dependencies={lanes:0,firstContext:t}}else Ra=Ra.next=t;return e}var Fr=null;function wh(t){Fr===null?Fr=[t]:Fr.push(t)}function p0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,wh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function Gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fh(t,n)}}function cm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gu(t,e,n,i){var r=t.updateQueue;Yi=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=r.baseState;o=0,c=u=l=null,s=a;do{var h=s.lane,m=s.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=t,y=s;switch(h=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=_t({},d,h);break e;case 2:Yi=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[s]:h.push(s))}else m={eventTime:m,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=h;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;h=s,s=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=d}}function fm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var g0=new p_.Component().refs;function fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xu={isMounted:function(t){return(t=t._reactInternals)?na(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=sr(t),a=bi(i,r);a.payload=e,n!=null&&(a.callback=n),e=ar(t,a,r),e!==null&&(qn(e,t,r,i),Gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=sr(t),a=bi(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=ar(t,a,r),e!==null&&(qn(e,t,r,i),Gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=sr(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(qn(e,t,i,n),Gl(e,t,i))}};function dm(t,e,n,i,r,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!Zo(n,i)||!Zo(r,a):!0}function v0(t,e,n){var i=!1,r=hr,a=e.contextType;return typeof a=="object"&&a!==null?a=On(a):(r=dn(e)?$r:Qt.current,i=e.contextTypes,a=(i=i!=null)?Ya(t,r):hr),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function hm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xu.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=g0,bh(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=On(a):(a=dn(e)?$r:Qt.current,r.context=Ya(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(fd(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xu.enqueueReplaceState(r,r.state,null),gu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=r.refs;s===g0&&(s=r.refs={}),o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function Ks(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pm(t){var e=t._init;return e(t._payload)}function _0(t){function e(f,v){if(t){var g=f.deletions;g===null?(f.deletions=[v],f.flags|=16):g.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=lr(f,v),f.index=0,f.sibling=null,f}function a(f,v,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<v?(f.flags|=2,v):g):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function s(f,v,g,S){return v===null||v.tag!==6?(v=Wc(g,f.mode,S),v.return=f,v):(v=r(v,g),v.return=f,v)}function l(f,v,g,S){var A=g.type;return A===Sa?c(f,v,g.props.children,S,g.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===$i&&pm(A)===v.type)?(S=r(v,g.props),S.ref=xo(f,v,g),S.return=f,S):(S=Yl(g.type,g.key,g.props,null,f.mode,S),S.ref=xo(f,v,g),S.return=f,S)}function u(f,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Xc(g,f.mode,S),v.return=f,v):(v=r(v,g.children||[]),v.return=f,v)}function c(f,v,g,S,A){return v===null||v.tag!==7?(v=Vr(g,f.mode,S,A),v.return=f,v):(v=r(v,g),v.return=f,v)}function d(f,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wc(""+v,f.mode,g),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zs:return g=Yl(v.type,v.key,v.props,null,f.mode,g),g.ref=xo(f,null,v),g.return=f,g;case xa:return v=Xc(v,f.mode,g),v.return=f,v;case $i:var S=v._init;return d(f,S(v._payload),g)}if(Po(v)||mo(v))return v=Vr(v,f.mode,g,null),v.return=f,v;Ks(f,v)}return null}function h(f,v,g,S){var A=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:s(f,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zs:return g.key===A?l(f,v,g,S):null;case xa:return g.key===A?u(f,v,g,S):null;case $i:return A=g._init,h(f,v,A(g._payload),S)}if(Po(g)||mo(g))return A!==null?null:c(f,v,g,S,null);Ks(f,g)}return null}function m(f,v,g,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(g)||null,s(v,f,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case zs:return f=f.get(S.key===null?g:S.key)||null,l(v,f,S,A);case xa:return f=f.get(S.key===null?g:S.key)||null,u(v,f,S,A);case $i:var b=S._init;return m(f,v,g,b(S._payload),A)}if(Po(S)||mo(S))return f=f.get(g)||null,c(v,f,S,A,null);Ks(v,S)}return null}function _(f,v,g,S){for(var A=null,b=null,T=v,N=v=0,j=null;T!==null&&N<g.length;N++){T.index>N?(j=T,T=null):j=T.sibling;var x=h(f,T,g[N],S);if(x===null){T===null&&(T=j);break}t&&T&&x.alternate===null&&e(f,T),v=a(x,v,N),b===null?A=x:b.sibling=x,b=x,T=j}if(N===g.length)return n(f,T),ft&&Pr(f,N),A;if(T===null){for(;N<g.length;N++)T=d(f,g[N],S),T!==null&&(v=a(T,v,N),b===null?A=T:b.sibling=T,b=T);return ft&&Pr(f,N),A}for(T=i(f,T);N<g.length;N++)j=m(T,f,N,g[N],S),j!==null&&(t&&j.alternate!==null&&T.delete(j.key===null?N:j.key),v=a(j,v,N),b===null?A=j:b.sibling=j,b=j);return t&&T.forEach(function(R){return e(f,R)}),ft&&Pr(f,N),A}function y(f,v,g,S){var A=mo(g);if(typeof A!="function")throw Error(J(150));if(g=A.call(g),g==null)throw Error(J(151));for(var b=A=null,T=v,N=v=0,j=null,x=g.next();T!==null&&!x.done;N++,x=g.next()){T.index>N?(j=T,T=null):j=T.sibling;var R=h(f,T,x.value,S);if(R===null){T===null&&(T=j);break}t&&T&&R.alternate===null&&e(f,T),v=a(R,v,N),b===null?A=R:b.sibling=R,b=R,T=j}if(x.done)return n(f,T),ft&&Pr(f,N),A;if(T===null){for(;!x.done;N++,x=g.next())x=d(f,x.value,S),x!==null&&(v=a(x,v,N),b===null?A=x:b.sibling=x,b=x);return ft&&Pr(f,N),A}for(T=i(f,T);!x.done;N++,x=g.next())x=m(T,f,N,x.value,S),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?N:x.key),v=a(x,v,N),b===null?A=x:b.sibling=x,b=x);return t&&T.forEach(function(X){return e(f,X)}),ft&&Pr(f,N),A}function p(f,v,g,S){if(typeof g=="object"&&g!==null&&g.type===Sa&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case zs:e:{for(var A=g.key,b=v;b!==null;){if(b.key===A){if(A=g.type,A===Sa){if(b.tag===7){n(f,b.sibling),v=r(b,g.props.children),v.return=f,f=v;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===$i&&pm(A)===b.type){n(f,b.sibling),v=r(b,g.props),v.ref=xo(f,b,g),v.return=f,f=v;break e}n(f,b);break}else e(f,b);b=b.sibling}g.type===Sa?(v=Vr(g.props.children,f.mode,S,g.key),v.return=f,f=v):(S=Yl(g.type,g.key,g.props,null,f.mode,S),S.ref=xo(f,v,g),S.return=f,f=S)}return o(f);case xa:e:{for(b=g.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(f,v.sibling),v=r(v,g.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=Xc(g,f.mode,S),v.return=f,f=v}return o(f);case $i:return b=g._init,p(f,v,b(g._payload),S)}if(Po(g))return _(f,v,g,S);if(mo(g))return y(f,v,g,S);Ks(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,g),v.return=f,f=v):(n(f,v),v=Wc(g,f.mode,S),v.return=f,f=v),o(f)):n(f,v)}return p}var Ka=_0(!0),y0=_0(!1),_s={},li=xr(_s),ns=xr(_s),is=xr(_s);function kr(t){if(t===_s)throw Error(J(174));return t}function Ah(t,e){switch(it(is,e),it(ns,t),it(li,_s),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wf(e,t)}lt(li),it(li,e)}function Qa(){lt(li),lt(ns),lt(is)}function x0(t){kr(is.current);var e=kr(li.current),n=Wf(e,t.type);e!==n&&(it(ns,t),it(li,n))}function Ch(t){ns.current===t&&(lt(li),lt(ns))}var gt=xr(0);function vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kc=[];function Rh(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var Vl=Ui.ReactCurrentDispatcher,zc=Ui.ReactCurrentBatchConfig,qr=0,vt=null,At=null,It=null,_u=!1,zo=!1,rs=0,V1=0;function Xt(){throw Error(J(321))}function Ph(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Lh(t,e,n,i,r,a){if(qr=a,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vl.current=t===null||t.memoizedState===null?$1:Y1,t=n(i,r),zo){a=0;do{if(zo=!1,rs=0,25<=a)throw Error(J(301));a+=1,It=At=null,e.updateQueue=null,Vl.current=q1,t=n(i,r)}while(zo)}if(Vl.current=yu,e=At!==null&&At.next!==null,qr=0,It=At=vt=null,_u=!1,e)throw Error(J(300));return t}function Nh(){var t=rs!==0;return rs=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?vt.memoizedState=It=t:It=It.next=t,It}function Fn(){if(At===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=It===null?vt.memoizedState:It.next;if(e!==null)It=e,At=t;else{if(t===null)throw Error(J(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},It===null?vt.memoizedState=It=t:It=It.next=t}return It}function as(t,e){return typeof e=="function"?e(t):e}function Bc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((qr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=i):l=l.next=d,vt.lanes|=c,Kr|=c}u=u.next}while(u!==null&&u!==a);l===null?o=i:l.next=s,Kn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,vt.lanes|=a,Kr|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=t(a,o.action),o=o.next;while(o!==r);Kn(a,e.memoizedState)||(cn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function S0(){}function E0(t,e){var n=vt,i=Fn(),r=e(),a=!Kn(i.memoizedState,r);if(a&&(i.memoizedState=r,cn=!0),i=i.queue,Dh(w0.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,os(9,T0.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(J(349));qr&30||M0(n,e,r)}return r}function M0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T0(t,e,n,i){e.value=n,e.getSnapshot=i,b0(e)&&A0(t)}function w0(t,e,n){return n(function(){b0(e)&&A0(t)})}function b0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function A0(t){var e=Ri(t,1);e!==null&&qn(e,t,1,-1)}function mm(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:t},e.queue=t,t=t.dispatch=j1.bind(null,vt,t),[e.memoizedState,t]}function os(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function C0(){return Fn().memoizedState}function Wl(t,e,n,i){var r=Jn();vt.flags|=t,r.memoizedState=os(1|e,n,void 0,i===void 0?null:i)}function ju(t,e,n,i){var r=Fn();i=i===void 0?null:i;var a=void 0;if(At!==null){var o=At.memoizedState;if(a=o.destroy,i!==null&&Ph(i,o.deps)){r.memoizedState=os(e,n,a,i);return}}vt.flags|=t,r.memoizedState=os(1|e,n,a,i)}function gm(t,e){return Wl(8390656,8,t,e)}function Dh(t,e){return ju(2048,8,t,e)}function R0(t,e){return ju(4,2,t,e)}function P0(t,e){return ju(4,4,t,e)}function L0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function N0(t,e,n){return n=n!=null?n.concat([t]):null,ju(4,4,L0.bind(null,e,t),n)}function Ih(){}function D0(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function I0(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function U0(t,e,n){return qr&21?(Kn(n,e)||(n=k_(),vt.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function W1(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=zc.transition;zc.transition={};try{t(!1),e()}finally{Ke=n,zc.transition=i}}function O0(){return Fn().memoizedState}function X1(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},F0(t))k0(e,n);else if(n=p0(t,e,n,i),n!==null){var r=nn();qn(n,t,i,r),z0(n,e,i)}}function j1(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(F0(t))k0(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,n);if(r.hasEagerState=!0,r.eagerState=s,Kn(s,o)){var l=e.interleaved;l===null?(r.next=r,wh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=p0(t,e,r,i),n!==null&&(r=nn(),qn(n,t,i,r),z0(n,e,i))}}function F0(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function k0(t,e){zo=_u=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fh(t,n)}}var yu={readContext:On,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},$1={readContext:On,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4194308,4,L0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=X1.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:mm,useDebugValue:Ih,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=mm(!1),e=t[0];return t=W1.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=Jn();if(ft){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Ut===null)throw Error(J(349));qr&30||M0(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,gm(w0.bind(null,i,a,t),[t]),i.flags|=2048,os(9,T0.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Ut.identifierPrefix;if(ft){var n=Ti,i=Mi;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=rs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=V1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y1={readContext:On,useCallback:D0,useContext:On,useEffect:Dh,useImperativeHandle:N0,useInsertionEffect:R0,useLayoutEffect:P0,useMemo:I0,useReducer:Bc,useRef:C0,useState:function(){return Bc(as)},useDebugValue:Ih,useDeferredValue:function(t){var e=Fn();return U0(e,At.memoizedState,t)},useTransition:function(){var t=Bc(as)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:S0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1},q1={readContext:On,useCallback:D0,useContext:On,useEffect:Dh,useImperativeHandle:N0,useInsertionEffect:R0,useLayoutEffect:P0,useMemo:I0,useReducer:Hc,useRef:C0,useState:function(){return Hc(as)},useDebugValue:Ih,useDeferredValue:function(t){var e=Fn();return At===null?e.memoizedState=t:U0(e,At.memoizedState,t)},useTransition:function(){var t=Hc(as)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:S0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1};function Za(t,e){try{var n="",i=e;do n+=MS(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function Gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var K1=typeof WeakMap=="function"?WeakMap:Map;function B0(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Su||(Su=!0,Md=i),hd(t,e)},n}function H0(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hd(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new K1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=cE.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ym(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var Q1=Ui.ReactCurrentOwner,cn=!1;function en(t,e,n,i){e.child=t===null?y0(e,null,n,i):Ka(e,t.child,n,i)}function xm(t,e,n,i,r){n=n.render;var a=e.ref;return Ha(e,r),i=Lh(t,e,n,i,a,r),n=Nh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(ft&&n&&yh(e),e.flags|=1,en(t,e,i,r),e.child)}function Sm(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!Gh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,G0(t,e,a,i,r)):(t=Yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Zo,n(o,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=lr(a,i),t.ref=e.ref,t.return=e,e.child=t}function G0(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(Zo(a,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return pd(t,e,n,i,r)}function V0(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(La,yn),yn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(La,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,it(La,yn),yn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,it(La,yn),yn|=i;return en(t,e,r,n),e.child}function W0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,i,r){var a=dn(n)?$r:Qt.current;return a=Ya(e,a),Ha(e,r),n=Lh(t,e,n,i,a,r),i=Nh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(ft&&i&&yh(e),e.flags|=1,en(t,e,n,r),e.child)}function Em(t,e,n,i,r){if(dn(n)){var a=!0;fu(e)}else a=!1;if(Ha(e,r),e.stateNode===null)Xl(t,e),v0(e,n,i),dd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=On(u):(u=dn(n)?$r:Qt.current,u=Ya(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==u)&&hm(e,o,i,u),Yi=!1;var h=e.memoizedState;o.state=h,gu(e,i,o,r),l=e.memoizedState,s!==i||h!==l||fn.current||Yi?(typeof c=="function"&&(fd(e,n,c,i),l=e.memoizedState),(s=Yi||dm(e,n,s,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,m0(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:Gn(e.type,s),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=dn(n)?$r:Qt.current,l=Ya(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||h!==l)&&hm(e,o,i,l),Yi=!1,h=e.memoizedState,o.state=h,gu(e,i,o,r);var _=e.memoizedState;s!==d||h!==_||fn.current||Yi?(typeof m=="function"&&(fd(e,n,m,i),_=e.memoizedState),(u=Yi||dm(e,n,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return md(t,e,n,i,a,r)}function md(t,e,n,i,r,a){W0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sm(e,n,!1),Pi(t,e,a);i=e.stateNode,Q1.current=e;var s=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ka(e,t.child,null,a),e.child=Ka(e,null,s,a)):en(t,e,s,a),e.memoizedState=i.state,r&&sm(e,n,!0),e.child}function X0(t){var e=t.stateNode;e.pendingContext?om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&om(t,e.context,!1),Ah(t,e.containerInfo)}function Mm(t,e,n,i,r){return qa(),Sh(r),e.flags|=256,en(t,e,n,i),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function j0(t,e,n){var i=e.pendingProps,r=gt.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(r&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(gt,r&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,a?(i=e.mode,a=e.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=qu(o,i,0,null),t=Vr(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=vd(n),e.memoizedState=gd,t):Uh(e,o));if(r=t.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return Z1(t,e,o,i,s,r,n);if(a){a=i.fallback,o=e.mode,r=t.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=lr(s,a):(a=Vr(a,o,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o=o===null?vd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=gd,i}return a=t.child,t=a.sibling,i=lr(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Uh(t,e){return e=qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qs(t,e,n,i){return i!==null&&Sh(i),Ka(e,t.child,null,n),t=Uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Z1(t,e,n,i,r,a,o){if(n)return e.flags&256?(e.flags&=-257,i=Gc(Error(J(422))),Qs(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=qu({mode:"visible",children:i.children},r,0,null),a=Vr(a,r,o,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Ka(e,t.child,null,o),e.child.memoizedState=vd(o),e.memoizedState=gd,a);if(!(e.mode&1))return Qs(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(J(419)),i=Gc(a,i,void 0),Qs(t,e,o,i)}if(s=(o&t.childLanes)!==0,cn||s){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Ri(t,r),qn(i,t,r,-1))}return Hh(),i=Gc(Error(J(421))),Qs(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fE.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,xn=rr(r.nextSibling),Sn=e,ft=!0,Wn=null,t!==null&&(Pn[Ln++]=Mi,Pn[Ln++]=Ti,Pn[Ln++]=Yr,Mi=t.id,Ti=t.overflow,Yr=e),e=Uh(e,i.children),e.flags|=4096,e)}function Tm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),cd(t.return,e,n)}function Vc(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function $0(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(en(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tm(t,n,e);else if(t.tag===19)Tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vc(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vc(e,!0,n,null,a);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function J1(t,e,n){switch(e.tag){case 3:X0(e),qa();break;case 5:x0(e);break;case 1:dn(e.type)&&fu(e);break;case 4:Ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(pu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?j0(t,e,n):(it(gt,gt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);it(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,V0(t,e,n)}return Pi(t,e,n)}var Y0,_d,q0,K0;Y0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};q0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,kr(li.current);var a=null;switch(n){case"input":r=Bf(t,r),i=Bf(t,i),a=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),a=[];break;case"textarea":r=Vf(t,r),i=Vf(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=uu)}Xf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var l=i[u];if(s=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&at("scroll",t),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};K0=function(t,e,n,i){n!==i&&(e.flags|=4)};function So(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function eE(t,e,n){var i=e.pendingProps;switch(xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return dn(e.type)&&cu(),jt(e),null;case 3:return i=e.stateNode,Qa(),lt(fn),lt(Qt),Rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(bd(Wn),Wn=null))),_d(t,e),jt(e),null;case 5:Ch(e);var r=kr(is.current);if(n=e.type,t!==null&&e.stateNode!=null)q0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return jt(e),null}if(t=kr(li.current),qs(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[ni]=e,i[ts]=a,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<No.length;r++)at(No[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Dp(i,a),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},at("invalid",i);break;case"textarea":Up(i,a),at("invalid",i)}Xf(n,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ys(i.textContent,s,t),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ys(i.textContent,s,t),r=["children",""+s]):Xo.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":Bs(i),Ip(i,a,!0);break;case"textarea":Bs(i),Op(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=uu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=M_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[ts]=i,Y0(t,e,!1,!1),e.stateNode=t;e:{switch(o=jf(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<No.length;r++)at(No[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Dp(t,i),r=Bf(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),at("invalid",t);break;case"textarea":Up(t,i),r=Vf(t,i),at("invalid",t);break;default:r=i}Xf(n,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?b_(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&T_(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jo(t,l):typeof l=="number"&&jo(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&at("scroll",t):l!=null&&ah(t,a,l,o))}switch(n){case"input":Bs(t),Ip(t,i,!1);break;case"textarea":Bs(t),Op(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?Fa(t,!!i.multiple,a,!1):i.defaultValue!=null&&Fa(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=uu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)K0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=kr(is.current),kr(li.current),qs(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(a=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:Ys(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ys(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return jt(e),null;case 13:if(lt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&xn!==null&&e.mode&1&&!(e.flags&128))h0(),qa(),e.flags|=98560,a=!1;else if(a=qs(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(J(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[ni]=e}else qa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),a=!1}else Wn!==null&&(bd(Wn),Wn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Ct===0&&(Ct=3):Hh())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Qa(),_d(t,e),t===null&&Jo(e.stateNode.containerInfo),jt(e),null;case 10:return Th(e.type._context),jt(e),null;case 17:return dn(e.type)&&cu(),jt(e),null;case 19:if(lt(gt),a=e.memoizedState,a===null)return jt(e),null;if(i=(e.flags&128)!==0,o=a.rendering,o===null)if(i)So(a,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vu(t),o!==null){for(e.flags|=128,So(a,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(gt,gt.current&1|2),e.child}t=t.sibling}a.tail!==null&&Tt()>Ja&&(e.flags|=128,i=!0,So(a,!1),e.lanes=4194304)}else{if(!i)if(t=vu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ft)return jt(e),null}else 2*Tt()-a.renderingStartTime>Ja&&n!==1073741824&&(e.flags|=128,i=!0,So(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Tt(),e.sibling=null,n=gt.current,it(gt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function tE(t,e){switch(xh(e),e.tag){case 1:return dn(e.type)&&cu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qa(),lt(fn),lt(Qt),Rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ch(e),null;case 13:if(lt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));qa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(gt),null;case 4:return Qa(),null;case 10:return Th(e.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var Zs=!1,qt=!1,nE=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Pa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function yd(t,e,n){try{n()}catch(i){St(t,e,i)}}var wm=!1;function iE(t,e){if(nd=ou,t=e0(),_h(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(s=o+r),d!==a||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(s=o),h===a&&++c===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},ou=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Gn(e.type,y),p);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(S){St(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return _=wm,wm=!1,_}function Bo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&yd(e,n,a)}r=r.next}while(r!==i)}}function $u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Q0(t){var e=t.alternate;e!==null&&(t.alternate=null,Q0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[ts],delete e[od],delete e[z1],delete e[B1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z0(t){return t.tag===5||t.tag===3||t.tag===4}function bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uu));else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var kt=null,Vn=!1;function Fi(t,e,n){for(n=n.child;n!==null;)J0(t,e,n),n=n.sibling}function J0(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(zu,n)}catch{}switch(n.tag){case 5:qt||Pa(n,e);case 6:var i=kt,r=Vn;kt=null,Fi(t,e,n),kt=i,Vn=r,kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),Ko(t)):Oc(kt,n.stateNode));break;case 4:i=kt,r=Vn,kt=n.stateNode.containerInfo,Vn=!0,Fi(t,e,n),kt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&yd(n,e,o),r=r.next}while(r!==i)}Fi(t,e,n);break;case 1:if(!qt&&(Pa(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){St(n,e,s)}Fi(t,e,n);break;case 21:Fi(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Fi(t,e,n),qt=i):Fi(t,e,n);break;default:Fi(t,e,n)}}function Am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nE),e.forEach(function(i){var r=dE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:kt=s.stateNode,Vn=!1;break e;case 3:kt=s.stateNode.containerInfo,Vn=!0;break e;case 4:kt=s.stateNode.containerInfo,Vn=!0;break e}s=s.return}if(kt===null)throw Error(J(160));J0(a,o,r),kt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ey(e,t),e=e.sibling}function ey(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Zn(t),i&4){try{Bo(3,t,t.return),$u(3,t)}catch(y){St(t,t.return,y)}try{Bo(5,t,t.return)}catch(y){St(t,t.return,y)}}break;case 1:kn(e,t),Zn(t),i&512&&n!==null&&Pa(n,n.return);break;case 5:if(kn(e,t),Zn(t),i&512&&n!==null&&Pa(n,n.return),t.flags&32){var r=t.stateNode;try{jo(r,"")}catch(y){St(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&S_(r,a),jf(s,o);var u=jf(s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?b_(r,d):c==="dangerouslySetInnerHTML"?T_(r,d):c==="children"?jo(r,d):ah(r,c,d,u)}switch(s){case"input":Hf(r,a);break;case"textarea":E_(r,a);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?Fa(r,!!a.multiple,m,!1):h!==!!a.multiple&&(a.defaultValue!=null?Fa(r,!!a.multiple,a.defaultValue,!0):Fa(r,!!a.multiple,a.multiple?[]:"",!1))}r[ts]=a}catch(y){St(t,t.return,y)}}break;case 6:if(kn(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(y){St(t,t.return,y)}}break;case 3:if(kn(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ko(e.containerInfo)}catch(y){St(t,t.return,y)}break;case 4:kn(e,t),Zn(t);break;case 13:kn(e,t),Zn(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(kh=Tt())),i&4&&Am(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(u=qt)||c,kn(e,t),qt=u):kn(e,t),Zn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(fe=t,c=t.child;c!==null;){for(d=fe=c;fe!==null;){switch(h=fe,m=h.child,h.tag){case 0:case 11:case 14:case 15:Bo(4,h,h.return);break;case 1:Pa(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){St(i,n,y)}}break;case 5:Pa(h,h.return);break;case 22:if(h.memoizedState!==null){Rm(d);continue}}m!==null?(m.return=h,fe=m):Rm(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=w_("display",o))}catch(y){St(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){St(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kn(e,t),Zn(t),i&4&&Am(t);break;case 21:break;default:kn(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z0(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(jo(r,""),i.flags&=-33);var a=bm(t);Ed(t,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,s=bm(t);Sd(t,s,o);break;default:throw Error(J(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rE(t,e,n){fe=t,ty(t)}function ty(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Zs;if(!o){var s=r.alternate,l=s!==null&&s.memoizedState!==null||qt;s=Zs;var u=qt;if(Zs=o,(qt=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?Pm(r):l!==null?(l.return=o,fe=l):Pm(r);for(;a!==null;)fe=a,ty(a),a=a.sibling;fe=r,Zs=s,qt=u}Cm(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,fe=a):Cm(t)}}function Cm(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||$u(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&fm(e,a,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fm(e,o,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ko(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}qt||e.flags&512&&xd(e)}catch(h){St(e,e.return,h)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Rm(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Pm(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$u(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var a=e.return;try{xd(e)}catch(l){St(e,a,l)}break;case 5:var o=e.return;try{xd(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){fe=null;break}var s=e.sibling;if(s!==null){s.return=e.return,fe=s;break}fe=e.return}}var aE=Math.ceil,xu=Ui.ReactCurrentDispatcher,Oh=Ui.ReactCurrentOwner,Un=Ui.ReactCurrentBatchConfig,Xe=0,Ut=null,bt=null,Ht=0,yn=0,La=xr(0),Ct=0,ss=null,Kr=0,Yu=0,Fh=0,Ho=null,ln=null,kh=0,Ja=1/0,yi=null,Su=!1,Md=null,or=null,Js=!1,Zi=null,Eu=0,Go=0,Td=null,jl=-1,$l=0;function nn(){return Xe&6?Tt():jl!==-1?jl:jl=Tt()}function sr(t){return t.mode&1?Xe&2&&Ht!==0?Ht&-Ht:G1.transition!==null?($l===0&&($l=k_()),$l):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:X_(t.type)),t):1}function qn(t,e,n,i){if(50<Go)throw Go=0,Td=null,Error(J(185));ms(t,n,i),(!(Xe&2)||t!==Ut)&&(t===Ut&&(!(Xe&2)&&(Yu|=n),Ct===4&&Ki(t,Ht)),hn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(Ja=Tt()+500,Wu&&Sr()))}function hn(t,e){var n=t.callbackNode;GS(t,e);var i=au(t,t===Ut?Ht:0);if(i===0)n!==null&&zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zp(n),e===1)t.tag===0?H1(Lm.bind(null,t)):c0(Lm.bind(null,t)),F1(function(){!(Xe&6)&&Sr()}),n=null;else{switch(z_(i)){case 1:n=ch;break;case 4:n=O_;break;case 16:n=ru;break;case 536870912:n=F_;break;default:n=ru}n=uy(n,ny.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ny(t,e){if(jl=-1,$l=0,Xe&6)throw Error(J(327));var n=t.callbackNode;if(Ga()&&t.callbackNode!==n)return null;var i=au(t,t===Ut?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Mu(t,i);else{e=i;var r=Xe;Xe|=2;var a=ry();(Ut!==t||Ht!==e)&&(yi=null,Ja=Tt()+500,Gr(t,e));do try{lE();break}catch(s){iy(t,s)}while(!0);Mh(),xu.current=a,Xe=r,bt!==null?e=0:(Ut=null,Ht=0,e=Ct)}if(e!==0){if(e===2&&(r=Qf(t),r!==0&&(i=r,e=wd(t,r))),e===1)throw n=ss,Gr(t,0),Ki(t,i),hn(t,Tt()),n;if(e===6)Ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!oE(r)&&(e=Mu(t,i),e===2&&(a=Qf(t),a!==0&&(i=a,e=wd(t,a))),e===1))throw n=ss,Gr(t,0),Ki(t,i),hn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Lr(t,ln,yi);break;case 3:if(Ki(t,i),(i&130023424)===i&&(e=kh+500-Tt(),10<e)){if(au(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(Lr.bind(null,t,ln,yi),e);break}Lr(t,ln,yi);break;case 4:if(Ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);a=1<<o,o=e[o],o>r&&(r=o),i&=~a}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aE(i/1960))-i,10<i){t.timeoutHandle=ad(Lr.bind(null,t,ln,yi),i);break}Lr(t,ln,yi);break;case 5:Lr(t,ln,yi);break;default:throw Error(J(329))}}}return hn(t,Tt()),t.callbackNode===n?ny.bind(null,t):null}function wd(t,e){var n=Ho;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=Mu(t,e),t!==2&&(e=ln,ln=n,e!==null&&bd(e)),t}function bd(t){ln===null?ln=t:ln.push.apply(ln,t)}function oE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!Kn(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ki(t,e){for(e&=~Fh,e&=~Yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Lm(t){if(Xe&6)throw Error(J(327));Ga();var e=au(t,0);if(!(e&1))return hn(t,Tt()),null;var n=Mu(t,e);if(t.tag!==0&&n===2){var i=Qf(t);i!==0&&(e=i,n=wd(t,i))}if(n===1)throw n=ss,Gr(t,0),Ki(t,e),hn(t,Tt()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,ln,yi),hn(t,Tt()),null}function zh(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(Ja=Tt()+500,Wu&&Sr())}}function Qr(t){Zi!==null&&Zi.tag===0&&!(Xe&6)&&Ga();var e=Xe;Xe|=1;var n=Un.transition,i=Ke;try{if(Un.transition=null,Ke=1,t)return t()}finally{Ke=i,Un.transition=n,Xe=e,!(Xe&6)&&Sr()}}function Bh(){yn=La.current,lt(La)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,O1(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(xh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cu();break;case 3:Qa(),lt(fn),lt(Qt),Rh();break;case 5:Ch(i);break;case 4:Qa();break;case 13:lt(gt);break;case 19:lt(gt);break;case 10:Th(i.type._context);break;case 22:case 23:Bh()}n=n.return}if(Ut=t,bt=t=lr(t.current,null),Ht=yn=e,Ct=0,ss=null,Fh=Yu=Kr=0,ln=Ho=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}n.pending=i}Fr=null}return t}function iy(t,e){do{var n=bt;try{if(Mh(),Vl.current=yu,_u){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_u=!1}if(qr=0,It=At=vt=null,zo=!1,rs=0,Oh.current=null,n===null||n.return===null){Ct=1,ss=e,bt=null;break}e:{var a=t,o=n.return,s=n,l=e;if(e=Ht,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=_m(o);if(m!==null){m.flags&=-257,ym(m,o,s,a,e),m.mode&1&&vm(a,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){vm(a,u,e),Hh();break e}l=Error(J(426))}}else if(ft&&s.mode&1){var p=_m(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),ym(p,o,s,a,e),Sh(Za(l,s));break e}}a=l=Za(l,s),Ct!==4&&(Ct=2),Ho===null?Ho=[a]:Ho.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var f=B0(a,l,e);cm(a,f);break e;case 1:s=l;var v=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(or===null||!or.has(g)))){a.flags|=65536,e&=-e,a.lanes|=e;var S=H0(a,s,e);cm(a,S);break e}}a=a.return}while(a!==null)}oy(n)}catch(A){e=A,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function ry(){var t=xu.current;return xu.current=yu,t===null?yu:t}function Hh(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Ut===null||!(Kr&268435455)&&!(Yu&268435455)||Ki(Ut,Ht)}function Mu(t,e){var n=Xe;Xe|=2;var i=ry();(Ut!==t||Ht!==e)&&(yi=null,Gr(t,e));do try{sE();break}catch(r){iy(t,r)}while(!0);if(Mh(),Xe=n,xu.current=i,bt!==null)throw Error(J(261));return Ut=null,Ht=0,Ct}function sE(){for(;bt!==null;)ay(bt)}function lE(){for(;bt!==null&&!DS();)ay(bt)}function ay(t){var e=ly(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?oy(t):bt=e,Oh.current=null}function oy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tE(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,bt=null;return}}else if(n=eE(n,e,yn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Ct===0&&(Ct=5)}function Lr(t,e,n){var i=Ke,r=Un.transition;try{Un.transition=null,Ke=1,uE(t,e,n,i)}finally{Un.transition=r,Ke=i}return null}function uE(t,e,n,i){do Ga();while(Zi!==null);if(Xe&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(VS(t,a),t===Ut&&(bt=Ut=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Js||(Js=!0,uy(ru,function(){return Ga(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Un.transition,Un.transition=null;var o=Ke;Ke=1;var s=Xe;Xe|=4,Oh.current=null,iE(t,n),ey(n,t),R1(id),ou=!!nd,id=nd=null,t.current=n,rE(n),IS(),Xe=s,Ke=o,Un.transition=a}else t.current=n;if(Js&&(Js=!1,Zi=t,Eu=r),a=t.pendingLanes,a===0&&(or=null),FS(n.stateNode),hn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Su)throw Su=!1,t=Md,Md=null,t;return Eu&1&&t.tag!==0&&Ga(),a=t.pendingLanes,a&1?t===Td?Go++:(Go=0,Td=t):Go=0,Sr(),null}function Ga(){if(Zi!==null){var t=z_(Eu),e=Un.transition,n=Ke;try{if(Un.transition=null,Ke=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,Eu=0,Xe&6)throw Error(J(331));var r=Xe;for(Xe|=4,fe=t.current;fe!==null;){var a=fe,o=a.child;if(fe.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(fe=u;fe!==null;){var c=fe;switch(c.tag){case 0:case 11:case 15:Bo(8,c,a)}var d=c.child;if(d!==null)d.return=c,fe=d;else for(;fe!==null;){c=fe;var h=c.sibling,m=c.return;if(Q0(c),c===u){fe=null;break}if(h!==null){h.return=m,fe=h;break}fe=m}}}var _=a.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}fe=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,fe=o;else e:for(;fe!==null;){if(a=fe,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Bo(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,fe=f;break e}fe=a.return}}var v=t.current;for(fe=v;fe!==null;){o=fe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,fe=g;else e:for(o=v;fe!==null;){if(s=fe,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:$u(9,s)}}catch(A){St(s,s.return,A)}if(s===o){fe=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,fe=S;break e}fe=s.return}}if(Xe=r,Sr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(zu,t)}catch{}i=!0}return i}finally{Ke=n,Un.transition=e}}return!1}function Nm(t,e,n){e=Za(n,e),e=B0(t,e,1),t=ar(t,e,1),e=nn(),t!==null&&(ms(t,1,e),hn(t,e))}function St(t,e,n){if(t.tag===3)Nm(t,t,n);else for(;e!==null;){if(e.tag===3){Nm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){t=Za(n,t),t=H0(e,t,1),e=ar(e,t,1),t=nn(),e!==null&&(ms(e,1,t),hn(e,t));break}}e=e.return}}function cE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Ht&n)===n&&(Ct===4||Ct===3&&(Ht&130023424)===Ht&&500>Tt()-kh?Gr(t,0):Fh|=n),hn(t,e)}function sy(t,e){e===0&&(t.mode&1?(e=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):e=1);var n=nn();t=Ri(t,e),t!==null&&(ms(t,e,n),hn(t,n))}function fE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sy(t,n)}function dE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),sy(t,n)}var ly;ly=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,J1(t,e,n);cn=!!(t.flags&131072)}else cn=!1,ft&&e.flags&1048576&&f0(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xl(t,e),t=e.pendingProps;var r=Ya(e,Qt.current);Ha(e,n),r=Lh(null,e,i,t,r,n);var a=Nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(a=!0,fu(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=Xu,e.stateNode=r,r._reactInternals=e,dd(e,i,t,n),e=md(null,e,i,!0,a,n)):(e.tag=0,ft&&a&&yh(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=pE(i),t=Gn(i,t),r){case 0:e=pd(null,e,i,t,n);break e;case 1:e=Em(null,e,i,t,n);break e;case 11:e=xm(null,e,i,t,n);break e;case 14:e=Sm(null,e,i,Gn(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Em(t,e,i,r,n);case 3:e:{if(X0(e),t===null)throw Error(J(387));i=e.pendingProps,a=e.memoizedState,r=a.element,m0(t,e),gu(e,i,null,n);var o=e.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=Za(Error(J(423)),e),e=Mm(t,e,i,n,r);break e}else if(i!==r){r=Za(Error(J(424)),e),e=Mm(t,e,i,n,r);break e}else for(xn=rr(e.stateNode.containerInfo.firstChild),Sn=e,ft=!0,Wn=null,n=y0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qa(),i===r){e=Pi(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return x0(e),t===null&&ud(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,o=r.children,rd(i,r)?o=null:a!==null&&rd(i,a)&&(e.flags|=32),W0(t,e),en(t,e,o,n),e.child;case 6:return t===null&&ud(e),null;case 13:return j0(t,e,n);case 4:return Ah(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ka(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),xm(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,o=r.value,it(pu,i._currentValue),i._currentValue=o,a!==null)if(Kn(a.value,o)){if(a.children===r.children&&!fn.current){e=Pi(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=bi(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),cd(a.return,n,e),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(J(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),cd(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ha(e,n),r=On(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Sm(t,e,i,r,n);case 15:return G0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Xl(t,e),e.tag=1,dn(i)?(t=!0,fu(e)):t=!1,Ha(e,n),v0(e,i,r),dd(e,i,r,n),md(null,e,i,!0,t,n);case 19:return $0(t,e,n);case 22:return V0(t,e,n)}throw Error(J(156,e.tag))};function uy(t,e){return U_(t,e)}function hE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new hE(t,e,n,i)}function Gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pE(t){if(typeof t=="function")return Gh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sh)return 11;if(t===lh)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,i,r,a){var o=2;if(i=t,typeof t=="function")Gh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Sa:return Vr(n.children,r,a,e);case oh:o=8,r|=8;break;case Of:return t=In(12,n,e,r|2),t.elementType=Of,t.lanes=a,t;case Ff:return t=In(13,n,e,r),t.elementType=Ff,t.lanes=a,t;case kf:return t=In(19,n,e,r),t.elementType=kf,t.lanes=a,t;case __:return qu(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g_:o=10;break e;case v_:o=9;break e;case sh:o=11;break e;case lh:o=14;break e;case $i:o=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=In(o,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function Vr(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function qu(t,e,n,i){return t=In(22,t,i,e),t.elementType=__,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Xc(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vh(t,e,n,i,r,a,o,s,l){return t=new mE(t,e,n,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=In(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(a),t}function gE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xa,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function cy(t){if(!t)return hr;t=t._reactInternals;e:{if(na(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(dn(n))return u0(t,n,e)}return e}function fy(t,e,n,i,r,a,o,s,l){return t=Vh(n,i,!0,t,r,a,o,s,l),t.context=cy(null),n=t.current,i=nn(),r=sr(n),a=bi(i,r),a.callback=e??null,ar(n,a,r),t.current.lanes=r,ms(t,r,i),hn(t,i),t}function Ku(t,e,n,i){var r=e.current,a=nn(),o=sr(r);return n=cy(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(a,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,o),t!==null&&(qn(t,r,o,a),Gl(t,r,o)),o}function Tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wh(t,e){Dm(t,e),(t=t.alternate)&&Dm(t,e)}function vE(){return null}var dy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xh(t){this._internalRoot=t}Qu.prototype.render=Xh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));Ku(t,e,null,null)};Qu.prototype.unmount=Xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Ku(null,t,null,null)}),e[Ci]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=G_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&W_(t)}};function jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Im(){}function _E(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var u=Tu(o);a.call(u)}}var o=fy(e,i,t,0,null,!1,!1,"",Im);return t._reactRootContainer=o,t[Ci]=o.current,Jo(t.nodeType===8?t.parentNode:t),Qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var u=Tu(l);s.call(u)}}var l=Vh(t,0,!1,null,null,!1,!1,"",Im);return t._reactRootContainer=l,t[Ci]=l.current,Jo(t.nodeType===8?t.parentNode:t),Qr(function(){Ku(e,l,n,i)}),l}function Ju(t,e,n,i,r){var a=n._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var s=r;r=function(){var l=Tu(o);s.call(l)}}Ku(e,o,t,r)}else o=_E(n,e,t,r,i);return Tu(o)}B_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(fh(e,n|1),hn(e,Tt()),!(Xe&6)&&(Ja=Tt()+500,Sr()))}break;case 13:Qr(function(){var i=Ri(t,1);if(i!==null){var r=nn();qn(i,t,1,r)}}),Wh(t,1)}};dh=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=nn();qn(e,t,134217728,n)}Wh(t,134217728)}};H_=function(t){if(t.tag===13){var e=sr(t),n=Ri(t,e);if(n!==null){var i=nn();qn(n,t,e,i)}Wh(t,e)}};G_=function(){return Ke};V_=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};Yf=function(t,e,n){switch(e){case"input":if(Hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vu(i);if(!r)throw Error(J(90));x_(i),Hf(i,r)}}}break;case"textarea":E_(t,n);break;case"select":e=n.value,e!=null&&Fa(t,!!n.multiple,e,!1)}};R_=zh;P_=Qr;var yE={usingClientEntryPoint:!1,Events:[vs,wa,Vu,A_,C_,zh]},Eo={findFiberByHostInstance:Or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xE={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D_(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||vE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{zu=el.inject(xE),si=el}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yE;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(e))throw Error(J(200));return gE(t,e,null,n)};Tn.createRoot=function(t,e){if(!jh(t))throw Error(J(299));var n=!1,i="",r=dy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vh(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,Jo(t.nodeType===8?t.parentNode:t),new Xh(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=D_(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Qr(t)};Tn.hydrate=function(t,e,n){if(!Zu(e))throw Error(J(200));return Ju(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!jh(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",o=dy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fy(e,null,t,1,n??null,r,!1,a,o),t[Ci]=e.current,Jo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Qu(e)};Tn.render=function(t,e,n){if(!Zu(e))throw Error(J(200));return Ju(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Zu(t))throw Error(J(40));return t._reactRootContainer?(Qr(function(){Ju(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};Tn.unstable_batchedUpdates=zh;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zu(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return Ju(t,e,n,!1,i)};Tn.version="18.2.0-next-9e3b772b8-20220608";function hy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hy)}catch(t){console.error(t)}}hy(),f_.exports=Tn;var py=f_.exports,Um=py;If.createRoot=Um.createRoot,If.hydrateRoot=Um.hydrateRoot;function Om(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function ce(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Om(Object(n),!0).forEach(function(i){Rt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Om(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function wu(t){"@babel/helpers - typeof";return wu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wu(t)}function SE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fm(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function EE(t,e,n){return e&&Fm(t.prototype,e),n&&Fm(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $h(t,e){return TE(t)||bE(t,e)||my(t,e)||CE()}function ys(t){return ME(t)||wE(t)||my(t)||AE()}function ME(t){if(Array.isArray(t))return Ad(t)}function TE(t){if(Array.isArray(t))return t}function wE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bE(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,a=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){a=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw s}}return i}}function my(t,e){if(t){if(typeof t=="string")return Ad(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ad(t,e)}}function Ad(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function AE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var km=function(){},Yh={},gy={},vy=null,_y={mark:km,measure:km};try{typeof window<"u"&&(Yh=window),typeof document<"u"&&(gy=document),typeof MutationObserver<"u"&&(vy=MutationObserver),typeof performance<"u"&&(_y=performance)}catch{}var RE=Yh.navigator||{},zm=RE.userAgent,Bm=zm===void 0?"":zm,pr=Yh,ut=gy,Hm=vy,tl=_y;pr.document;var Oi=!!ut.documentElement&&!!ut.head&&typeof ut.addEventListener=="function"&&typeof ut.createElement=="function",yy=~Bm.indexOf("MSIE")||~Bm.indexOf("Trident/"),nl,il,rl,al,ol,Li="___FONT_AWESOME___",Cd=16,xy="fa",Sy="svg-inline--fa",Zr="data-fa-i2svg",Rd="data-fa-pseudo-element",PE="data-fa-pseudo-element-pending",qh="data-prefix",Kh="data-icon",Gm="fontawesome-i2svg",LE="async",NE=["HTML","HEAD","STYLE","SCRIPT"],Ey=function(){try{return!0}catch{return!1}}(),st="classic",Et="sharp",Qh=[st,Et];function xs(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[st]}})}var ls=xs((nl={},Rt(nl,st,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Rt(nl,Et,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),nl)),us=xs((il={},Rt(il,st,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Rt(il,Et,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),il)),cs=xs((rl={},Rt(rl,st,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Rt(rl,Et,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),rl)),DE=xs((al={},Rt(al,st,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Rt(al,Et,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),al)),IE=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,My="fa-layers-text",UE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,OE=xs((ol={},Rt(ol,st,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Rt(ol,Et,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ol)),Ty=[1,2,3,4,5,6,7,8,9,10],FE=Ty.concat([11,12,13,14,15,16,17,18,19,20]),kE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fs=new Set;Object.keys(us[st]).map(fs.add.bind(fs));Object.keys(us[Et]).map(fs.add.bind(fs));var zE=[].concat(Qh,ys(fs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zr.GROUP,zr.SWAP_OPACITY,zr.PRIMARY,zr.SECONDARY]).concat(Ty.map(function(t){return"".concat(t,"x")})).concat(FE.map(function(t){return"w-".concat(t)})),Vo=pr.FontAwesomeConfig||{};function BE(t){var e=ut.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function HE(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ut&&typeof ut.querySelector=="function"){var GE=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];GE.forEach(function(t){var e=$h(t,2),n=e[0],i=e[1],r=HE(BE(n));r!=null&&(Vo[i]=r)})}var wy={styleDefault:"solid",familyDefault:"classic",cssPrefix:xy,replacementClass:Sy,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vo.familyPrefix&&(Vo.cssPrefix=Vo.familyPrefix);var eo=ce(ce({},wy),Vo);eo.autoReplaceSvg||(eo.observeMutations=!1);var pe={};Object.keys(wy).forEach(function(t){Object.defineProperty(pe,t,{enumerable:!0,set:function(n){eo[t]=n,Wo.forEach(function(i){return i(pe)})},get:function(){return eo[t]}})});Object.defineProperty(pe,"familyPrefix",{enumerable:!0,set:function(e){eo.cssPrefix=e,Wo.forEach(function(n){return n(pe)})},get:function(){return eo.cssPrefix}});pr.FontAwesomeConfig=pe;var Wo=[];function VE(t){return Wo.push(t),function(){Wo.splice(Wo.indexOf(t),1)}}var ki=Cd,ri={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function WE(t){if(!(!t||!Oi)){var e=ut.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ut.head.childNodes,i=null,r=n.length-1;r>-1;r--){var a=n[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return ut.head.insertBefore(e,i),t}}var XE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ds(){for(var t=12,e="";t-- >0;)e+=XE[Math.random()*62|0];return e}function lo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Zh(t){return t.classList?lo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function by(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jE(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(by(t[n]),'" ')},"").trim()}function ec(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Jh(t){return t.size!==ri.size||t.x!==ri.x||t.y!==ri.y||t.rotate!==ri.rotate||t.flipX||t.flipY}function $E(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:u}}function YE(t){var e=t.transform,n=t.width,i=n===void 0?Cd:n,r=t.height,a=r===void 0?Cd:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&yy?l+="translate(".concat(e.x/ki-i/2,"em, ").concat(e.y/ki-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/ki,"em), calc(-50% + ").concat(e.y/ki,"em)) "):l+="translate(".concat(e.x/ki,"em, ").concat(e.y/ki,"em) "),l+="scale(".concat(e.size/ki*(e.flipX?-1:1),", ").concat(e.size/ki*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var qE=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ay(){var t=xy,e=Sy,n=pe.cssPrefix,i=pe.replacementClass,r=qE;if(n!==t||i!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var Vm=!1;function jc(){pe.autoAddCss&&!Vm&&(WE(Ay()),Vm=!0)}var KE={mixout:function(){return{dom:{css:Ay,insertCss:jc}}},hooks:function(){return{beforeDOMElementCreation:function(){jc()},beforeI2svg:function(){jc()}}}},Ni=pr||{};Ni[Li]||(Ni[Li]={});Ni[Li].styles||(Ni[Li].styles={});Ni[Li].hooks||(Ni[Li].hooks={});Ni[Li].shims||(Ni[Li].shims=[]);var $n=Ni[Li],Cy=[],QE=function t(){ut.removeEventListener("DOMContentLoaded",t),bu=1,Cy.map(function(e){return e()})},bu=!1;Oi&&(bu=(ut.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ut.readyState),bu||ut.addEventListener("DOMContentLoaded",QE));function ZE(t){Oi&&(bu?setTimeout(t,0):Cy.push(t))}function Ss(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,a=r===void 0?[]:r;return typeof t=="string"?by(t):"<".concat(e," ").concat(jE(i),">").concat(a.map(Ss).join(""),"</").concat(e,">")}function Wm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var JE=function(e,n){return function(i,r,a,o){return e.call(n,i,r,a,o)}},$c=function(e,n,i,r){var a=Object.keys(e),o=a.length,s=r!==void 0?JE(n,r):n,l,u,c;for(i===void 0?(l=1,c=e[a[0]]):(l=0,c=i);l<o;l++)u=a[l],c=s(c,e[u],u,e);return c};function eM(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Pd(t){var e=eM(t);return e.length===1?e[0].toString(16):null}function tM(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Xm(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Ld(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,a=Xm(e);typeof $n.hooks.addPack=="function"&&!r?$n.hooks.addPack(t,Xm(e)):$n.styles[t]=ce(ce({},$n.styles[t]||{}),a),t==="fas"&&Ld("fa",e)}var sl,ll,ul,Na=$n.styles,nM=$n.shims,iM=(sl={},Rt(sl,st,Object.values(cs[st])),Rt(sl,Et,Object.values(cs[Et])),sl),ep=null,Ry={},Py={},Ly={},Ny={},Dy={},rM=(ll={},Rt(ll,st,Object.keys(ls[st])),Rt(ll,Et,Object.keys(ls[Et])),ll);function aM(t){return~zE.indexOf(t)}function oM(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!aM(r)?r:null}var Iy=function(){var e=function(a){return $c(Na,function(o,s,l){return o[l]=$c(s,a,{}),o},{})};Ry=e(function(r,a,o){if(a[3]&&(r[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Py=e(function(r,a,o){if(r[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Dy=e(function(r,a,o){var s=a[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in Na||pe.autoFetchSvg,i=$c(nM,function(r,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Ly=i.names,Ny=i.unicodes,ep=tc(pe.styleDefault,{family:pe.familyDefault})};VE(function(t){ep=tc(t.styleDefault,{family:pe.familyDefault})});Iy();function tp(t,e){return(Ry[t]||{})[e]}function sM(t,e){return(Py[t]||{})[e]}function Br(t,e){return(Dy[t]||{})[e]}function Uy(t){return Ly[t]||{prefix:null,iconName:null}}function lM(t){var e=Ny[t],n=tp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mr(){return ep}var np=function(){return{prefix:null,iconName:null,rest:[]}};function tc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?st:n,r=ls[i][t],a=us[i][t]||us[i][r],o=t in $n.styles?t:null;return a||o||null}var jm=(ul={},Rt(ul,st,Object.keys(cs[st])),Rt(ul,Et,Object.keys(cs[Et])),ul);function nc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,a=(e={},Rt(e,st,"".concat(pe.cssPrefix,"-").concat(st)),Rt(e,Et,"".concat(pe.cssPrefix,"-").concat(Et)),e),o=null,s=st;(t.includes(a[st])||t.some(function(u){return jm[st].includes(u)}))&&(s=st),(t.includes(a[Et])||t.some(function(u){return jm[Et].includes(u)}))&&(s=Et);var l=t.reduce(function(u,c){var d=oM(pe.cssPrefix,c);if(Na[c]?(c=iM[s].includes(c)?DE[s][c]:c,o=c,u.prefix=c):rM[s].indexOf(c)>-1?(o=c,u.prefix=tc(c,{family:s})):d?u.iconName=d:c!==pe.replacementClass&&c!==a[st]&&c!==a[Et]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var h=o==="fa"?Uy(u.iconName):{},m=Br(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||m||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Na.far&&Na.fas&&!pe.autoFetchSvg&&(u.prefix="fas")}return u},np());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Et&&(Na.fass||pe.autoFetchSvg)&&(l.prefix="fass",l.iconName=Br(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=mr()||"fas"),l}var uM=function(){function t(){SE(this,t),this.definitions={}}return EE(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=ce(ce({},n.definitions[s]||{}),o[s]),Ld(s,o[s]);var l=cs[st][s];l&&Ld(l,o[s]),Iy()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(a){var o=r[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),t}(),$m=[],Da={},Va={},cM=Object.keys(Va);function fM(t,e){var n=e.mixoutsTo;return $m=t,Da={},Object.keys(Va).forEach(function(i){cM.indexOf(i)===-1&&delete Va[i]}),$m.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),wu(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),i.hooks){var a=i.hooks();Object.keys(a).forEach(function(o){Da[o]||(Da[o]=[]),Da[o].push(a[o])})}i.provides&&i.provides(Va)}),n}function Nd(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var a=Da[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Jr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Da[t]||[];r.forEach(function(a){a.apply(null,n)})}function Di(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Va[t]?Va[t].apply(null,e):void 0}function Dd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||mr();if(e)return e=Br(n,e)||e,Wm(Oy.definitions,n,e)||Wm($n.styles,n,e)}var Oy=new uM,dM=function(){pe.autoReplaceSvg=!1,pe.observeMutations=!1,Jr("noAuto")},hM={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Oi?(Jr("beforeI2svg",e),Di("pseudoElements2svg",e),Di("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;pe.autoReplaceSvg===!1&&(pe.autoReplaceSvg=!0),pe.observeMutations=!0,ZE(function(){mM({autoReplaceSvgRoot:n}),Jr("watch",e)})}},pM={icon:function(e){if(e===null)return null;if(wu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Br(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=tc(e[0]);return{prefix:i,iconName:Br(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(pe.cssPrefix,"-"))>-1||e.match(IE))){var r=nc(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||mr(),iconName:Br(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=mr();return{prefix:a,iconName:Br(a,e)||e}}}},bn={noAuto:dM,config:pe,dom:hM,parse:pM,library:Oy,findIconDefinition:Dd,toHtml:Ss},mM=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?ut:n;(Object.keys($n.styles).length>0||pe.autoFetchSvg)&&Oi&&pe.autoReplaceSvg&&bn.dom.i2svg({node:i})};function ic(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Ss(i)})}}),Object.defineProperty(t,"node",{get:function(){if(Oi){var i=ut.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function gM(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,a=t.styles,o=t.transform;if(Jh(o)&&n.found&&!i.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=ec(ce(ce({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function vM(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(pe.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ce(ce({},r),{},{id:o}),children:i}]}]}function ip(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,h=t.watchable,m=h===void 0?!1:h,_=i.found?i:n,y=_.width,p=_.height,f=r==="fak",v=[pe.replacementClass,a?"".concat(pe.cssPrefix,"-").concat(a):""].filter(function(j){return d.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(d.classes).join(" "),g={children:[],attributes:ce(ce({},d.attributes),{},{"data-prefix":r,"data-icon":a,class:v,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(p)})},S=f&&!~d.classes.indexOf("fa-fw")?{width:"".concat(y/p*16*.0625,"em")}:{};m&&(g.attributes[Zr]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||ds())},children:[l]}),delete g.attributes.title);var A=ce(ce({},g),{},{prefix:r,iconName:a,main:n,mask:i,maskId:u,transform:o,symbol:s,styles:ce(ce({},S),d.styles)}),b=i.found&&n.found?Di("generateAbstractMask",A)||{children:[],attributes:{}}:Di("generateAbstractIcon",A)||{children:[],attributes:{}},T=b.children,N=b.attributes;return A.children=T,A.attributes=N,s?vM(A):gM(A)}function Ym(t){var e=t.content,n=t.width,i=t.height,r=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=ce(ce(ce({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[Zr]="");var c=ce({},o.styles);Jh(r)&&(c.transform=YE({transform:r,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);var d=ec(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function _M(t){var e=t.content,n=t.title,i=t.extra,r=ce(ce(ce({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),a=ec(i.styles);a.length>0&&(r.style=a);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yc=$n.styles;function Id(t){var e=t[0],n=t[1],i=t.slice(4),r=$h(i,1),a=r[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(pe.cssPrefix,"-").concat(zr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(pe.cssPrefix,"-").concat(zr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(pe.cssPrefix,"-").concat(zr.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var yM={found:!1,width:512,height:512};function xM(t,e){!Ey&&!pe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ud(t,e){var n=e;return e==="fa"&&pe.styleDefault!==null&&(e=mr()),new Promise(function(i,r){if(Di("missingIconAbstract"),n==="fa"){var a=Uy(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Yc[e]&&Yc[e][t]){var o=Yc[e][t];return i(Id(o))}xM(t,e),i(ce(ce({},yM),{},{icon:pe.showMissingIcons&&t?Di("missingIconAbstract")||{}:{}}))})}var qm=function(){},Od=pe.measurePerformance&&tl&&tl.mark&&tl.measure?tl:{mark:qm,measure:qm},Do='FA "6.5.1"',SM=function(e){return Od.mark("".concat(Do," ").concat(e," begins")),function(){return Fy(e)}},Fy=function(e){Od.mark("".concat(Do," ").concat(e," ends")),Od.measure("".concat(Do," ").concat(e),"".concat(Do," ").concat(e," begins"),"".concat(Do," ").concat(e," ends"))},rp={begin:SM,end:Fy},ql=function(){};function Km(t){var e=t.getAttribute?t.getAttribute(Zr):null;return typeof e=="string"}function EM(t){var e=t.getAttribute?t.getAttribute(qh):null,n=t.getAttribute?t.getAttribute(Kh):null;return e&&n}function MM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(pe.replacementClass)}function TM(){if(pe.autoReplaceSvg===!0)return Kl.replace;var t=Kl[pe.autoReplaceSvg];return t||Kl.replace}function wM(t){return ut.createElementNS("http://www.w3.org/2000/svg",t)}function bM(t){return ut.createElement(t)}function ky(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?wM:bM:n;if(typeof t=="string")return ut.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){r.appendChild(ky(o,{ceFn:i}))}),r}function AM(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Kl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(ky(r),n)}),n.getAttribute(Zr)===null&&pe.keepOriginalSource){var i=ut.createComment(AM(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Zh(n).indexOf(pe.replacementClass))return Kl.replace(e);var r=new RegExp("".concat(pe.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var a=i[0].attributes.class.split(" ").reduce(function(s,l){return l===pe.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});i[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=i.map(function(s){return Ss(s)}).join(`
`);n.setAttribute(Zr,""),n.innerHTML=o}};function Qm(t){t()}function zy(t,e){var n=typeof e=="function"?e:ql;if(t.length===0)n();else{var i=Qm;pe.mutateApproach===LE&&(i=pr.requestAnimationFrame||Qm),i(function(){var r=TM(),a=rp.begin("mutate");t.map(r),a(),n()})}}var ap=!1;function By(){ap=!0}function Fd(){ap=!1}var Au=null;function Zm(t){if(Hm&&pe.observeMutations){var e=t.treeCallback,n=e===void 0?ql:e,i=t.nodeCallback,r=i===void 0?ql:i,a=t.pseudoElementsCallback,o=a===void 0?ql:a,s=t.observeMutationsRoot,l=s===void 0?ut:s;Au=new Hm(function(u){if(!ap){var c=mr();lo(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Km(d.addedNodes[0])&&(pe.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&pe.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Km(d.target)&&~kE.indexOf(d.attributeName))if(d.attributeName==="class"&&EM(d.target)){var h=nc(Zh(d.target)),m=h.prefix,_=h.iconName;d.target.setAttribute(qh,m||c),_&&d.target.setAttribute(Kh,_)}else MM(d.target)&&r(d.target)})}}),Oi&&Au.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function CM(){Au&&Au.disconnect()}function RM(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var a=r.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(i[o]=s.join(":").trim()),i},{})),n}function PM(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=nc(Zh(t));return r.prefix||(r.prefix=mr()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=sM(r.prefix,t.innerText)||tp(r.prefix,Pd(t.innerText))),!r.iconName&&pe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function LM(t){var e=lo(t.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return pe.autoA11y&&(n?e["aria-labelledby"]="".concat(pe.replacementClass,"-title-").concat(i||ds()):(e["aria-hidden"]="true",e.focusable="false")),e}function NM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ri,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=PM(t),i=n.iconName,r=n.prefix,a=n.rest,o=LM(t),s=Nd("parseNodeAttributes",{},t),l=e.styleParser?RM(t):[];return ce({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:ri,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var DM=$n.styles;function Hy(t){var e=pe.autoReplaceSvg==="nest"?Jm(t,{styleParser:!1}):Jm(t);return~e.extra.classes.indexOf(My)?Di("generateLayersText",t,e):Di("generateSvgReplacementMutation",t,e)}var gr=new Set;Qh.map(function(t){gr.add("fa-".concat(t))});Object.keys(ls[st]).map(gr.add.bind(gr));Object.keys(ls[Et]).map(gr.add.bind(gr));gr=ys(gr);function eg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Oi)return Promise.resolve();var n=ut.documentElement.classList,i=function(d){return n.add("".concat(Gm,"-").concat(d))},r=function(d){return n.remove("".concat(Gm,"-").concat(d))},a=pe.autoFetchSvg?gr:Qh.map(function(c){return"fa-".concat(c)}).concat(Object.keys(DM));a.includes("fa")||a.push("fa");var o=[".".concat(My,":not([").concat(Zr,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Zr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=lo(t.querySelectorAll(o))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();var l=rp.begin("onTree"),u=s.reduce(function(c,d){try{var h=Hy(d);h&&c.push(h)}catch(m){Ey||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){zy(h,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),d(h)})})}function IM(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hy(t).then(function(n){n&&zy([n],e)})}function UM(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Dd(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Dd(r||{})),t(i,ce(ce({},n),{},{mask:r}))}}var OM=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?ri:i,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,m=n.titleId,_=m===void 0?null:m,y=n.classes,p=y===void 0?[]:y,f=n.attributes,v=f===void 0?{}:f,g=n.styles,S=g===void 0?{}:g;if(e){var A=e.prefix,b=e.iconName,T=e.icon;return ic(ce({type:"icon"},e),function(){return Jr("beforeDOMElementCreation",{iconDefinition:e,params:n}),pe.autoA11y&&(h?v["aria-labelledby"]="".concat(pe.replacementClass,"-title-").concat(_||ds()):(v["aria-hidden"]="true",v.focusable="false")),ip({icons:{main:Id(T),mask:l?Id(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:b,transform:ce(ce({},ri),r),symbol:o,title:h,maskId:c,titleId:_,extra:{attributes:v,styles:S,classes:p}})})}},FM={mixout:function(){return{icon:UM(OM)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=eg,n.nodeCallback=IM,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?ut:i,a=n.callback,o=a===void 0?function(){}:a;return eg(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,a=i.title,o=i.titleId,s=i.prefix,l=i.transform,u=i.symbol,c=i.mask,d=i.maskId,h=i.extra;return new Promise(function(m,_){Promise.all([Ud(r,s),c.iconName?Ud(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var p=$h(y,2),f=p[0],v=p[1];m([n,ip({icons:{main:f,mask:v},prefix:s,iconName:r,transform:l,symbol:u,maskId:d,title:a,titleId:o,extra:h,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.transform,s=n.styles,l=ec(s);l.length>0&&(r.style=l);var u;return Jh(o)&&(u=Di("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),i.push(u||a.icon),{children:i,attributes:r}}}},kM={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,a=r===void 0?[]:r;return ic({type:"layer"},function(){Jr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(pe.cssPrefix,"-layers")].concat(ys(a)).join(" ")},children:o}]})}}}},zM={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,a=r===void 0?null:r,o=i.classes,s=o===void 0?[]:o,l=i.attributes,u=l===void 0?{}:l,c=i.styles,d=c===void 0?{}:c;return ic({type:"counter",content:n},function(){return Jr("beforeDOMElementCreation",{content:n,params:i}),_M({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(pe.cssPrefix,"-layers-counter")].concat(ys(s))}})})}}}},BM={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,a=r===void 0?ri:r,o=i.title,s=o===void 0?null:o,l=i.classes,u=l===void 0?[]:l,c=i.attributes,d=c===void 0?{}:c,h=i.styles,m=h===void 0?{}:h;return ic({type:"text",content:n},function(){return Jr("beforeDOMElementCreation",{content:n,params:i}),Ym({content:n,transform:ce(ce({},ri),a),title:s,extra:{attributes:d,styles:m,classes:["".concat(pe.cssPrefix,"-layers-text")].concat(ys(u))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,a=i.transform,o=i.extra,s=null,l=null;if(yy){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return pe.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ym({content:n.innerHTML,width:s,height:l,transform:a,title:r,extra:o,watchable:!0})])}}},HM=new RegExp('"',"ug"),tg=[1105920,1112319];function GM(t){var e=t.replace(HM,""),n=tM(e,0),i=n>=tg[0]&&n<=tg[1],r=e.length===2?e[0]===e[1]:!1;return{value:Pd(r?e[0]:e),isSecondary:i||r}}function ng(t,e){var n="".concat(PE).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var a=lo(t.children),o=a.filter(function(T){return T.getAttribute(Rd)===e})[0],s=pr.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(UE),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Et:st,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?us[h][l[2].toLowerCase()]:OE[h][u],_=GM(d),y=_.value,p=_.isSecondary,f=l[0].startsWith("FontAwesome"),v=tp(m,y),g=v;if(f){var S=lM(y);S.iconName&&S.prefix&&(v=S.iconName,m=S.prefix)}if(v&&!p&&(!o||o.getAttribute(qh)!==m||o.getAttribute(Kh)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var A=NM(),b=A.extra;b.attributes[Rd]=e,Ud(v,m).then(function(T){var N=ip(ce(ce({},A),{},{icons:{main:T,mask:np()},prefix:m,iconName:g,extra:b,watchable:!0})),j=ut.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(j,t.firstChild):t.appendChild(j),j.outerHTML=N.map(function(x){return Ss(x)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function VM(t){return Promise.all([ng(t,"::before"),ng(t,"::after")])}function WM(t){return t.parentNode!==document.head&&!~NE.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ig(t){if(Oi)return new Promise(function(e,n){var i=lo(t.querySelectorAll("*")).filter(WM).map(VM),r=rp.begin("searchPseudoElements");By(),Promise.all(i).then(function(){r(),Fd(),e()}).catch(function(){r(),Fd(),n()})})}var XM={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ig,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?ut:i;pe.searchPseudoElements&&ig(r)}}},rg=!1,jM={mixout:function(){return{dom:{unwatch:function(){By(),rg=!0}}}},hooks:function(){return{bootstrap:function(){Zm(Nd("mutationObserverCallbacks",{}))},noAuto:function(){CM()},watch:function(n){var i=n.observeMutationsRoot;rg?Fd():Zm(Nd("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},ag=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var a=r.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return i.flipX=!0,i;if(o&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(o){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n)},$M={mixout:function(){return{parse:{transform:function(n){return ag(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=ag(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:d,path:h};return{tag:"g",attributes:ce({},m.outer),children:[{tag:"g",attributes:ce({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:ce(ce({},i.icon.attributes),m.path)}]}]}}}},qc={x:0,y:0,width:"100%",height:"100%"};function og(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function YM(t){return t.tag==="g"?t.children:[t]}var qM={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),a=r?nc(r.split(" ").map(function(o){return o.trim()})):np();return a.prefix||(a.prefix=mr()),n.mask=a,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,d=o.width,h=o.icon,m=$E({transform:l,containerWidth:d,iconWidth:u}),_={tag:"rect",attributes:ce(ce({},qc),{},{fill:"white"})},y=c.children?{children:c.children.map(og)}:{},p={tag:"g",attributes:ce({},m.inner),children:[og(ce({tag:c.tag,attributes:ce(ce({},c.attributes),m.path)},y))]},f={tag:"g",attributes:ce({},m.outer),children:[p]},v="mask-".concat(s||ds()),g="clip-".concat(s||ds()),S={tag:"mask",attributes:ce(ce({},qc),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,f]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:YM(h)},S]};return i.push(A,{tag:"rect",attributes:ce({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(v,")")},qc)}),{children:i,attributes:r}}}},KM={provides:function(e){var n=!1;pr.matchMedia&&(n=pr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:ce(ce({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=ce(ce({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:ce(ce({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:ce(ce({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ce(ce({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:ce(ce({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:ce(ce({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:ce(ce({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ce(ce({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},QM={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return n.symbol=a,n}}}},ZM=[KE,FM,kM,zM,BM,XM,jM,$M,qM,KM,QM];fM(ZM,{mixoutsTo:bn});bn.noAuto;bn.config;bn.library;bn.dom;var kd=bn.parse;bn.findIconDefinition;bn.toHtml;var JM=bn.icon;bn.layer;bn.text;bn.counter;var Gy={exports:{}},eT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",tT=eT,nT=tT;function Vy(){}function Wy(){}Wy.resetWarningCache=Vy;var iT=function(){function t(i,r,a,o,s,l){if(l!==nT){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Wy,resetWarningCache:Vy};return n.PropTypes=n,n};Gy.exports=iT();var Es=Gy.exports;const Ge=e_(Es);function sg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ji(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sg(Object(n),!0).forEach(function(i){Ia(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Cu(t){"@babel/helpers - typeof";return Cu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cu(t)}function Ia(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rT(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function aT(t,e){if(t==null)return{};var n=rT(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function zd(t){return oT(t)||sT(t)||lT(t)||uT()}function oT(t){if(Array.isArray(t))return Bd(t)}function sT(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function lT(t,e){if(t){if(typeof t=="string")return Bd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bd(t,e)}}function Bd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function uT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cT(t){var e,n=t.beat,i=t.fade,r=t.beatFade,a=t.bounce,o=t.shake,s=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,h=t.fixedWidth,m=t.inverse,_=t.border,y=t.listItem,p=t.flip,f=t.size,v=t.rotation,g=t.pull,S=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":m,"fa-border":_,"fa-li":y,"fa-flip":p===!0,"fa-flip-horizontal":p==="horizontal"||p==="both","fa-flip-vertical":p==="vertical"||p==="both"},Ia(e,"fa-".concat(f),typeof f<"u"&&f!==null),Ia(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),Ia(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Ia(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(S).map(function(A){return S[A]?A:null}).filter(function(A){return A})}function fT(t){return t=t-0,t===t}function Xy(t){return fT(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var dT=["style"];function hT(t){return t.charAt(0).toUpperCase()+t.slice(1)}function pT(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=Xy(n.slice(0,i)),a=n.slice(i+1).trim();return r.startsWith("webkit")?e[hT(r)]=a:e[r]=a,e},{})}function jy(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return jy(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=pT(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Xy(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=aT(n,dT);return r.attrs.style=Ji(Ji({},r.attrs.style),o),t.apply(void 0,[e.tag,Ji(Ji({},r.attrs),s)].concat(zd(i)))}var $y=!1;try{$y=!0}catch{}function mT(){if(!$y&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function lg(t){if(t&&Cu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(kd.icon)return kd.icon(t);if(t===null)return null;if(t&&Cu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Kc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ia({},t,e):{}}var Ms=oi.forwardRef(function(t,e){var n=t.icon,i=t.mask,r=t.symbol,a=t.className,o=t.title,s=t.titleId,l=t.maskId,u=lg(n),c=Kc("classes",[].concat(zd(cT(t)),zd(a.split(" ")))),d=Kc("transform",typeof t.transform=="string"?kd.transform(t.transform):t.transform),h=Kc("mask",lg(i)),m=JM(u,Ji(Ji(Ji(Ji({},c),d),h),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!m)return mT("Could not find icon",u),null;var _=m.abstract,y={ref:e};return Object.keys(t).forEach(function(p){Ms.defaultProps.hasOwnProperty(p)||(y[p]=t[p])}),gT(_[0],y)});Ms.displayName="FontAwesomeIcon";Ms.propTypes={beat:Ge.bool,border:Ge.bool,beatFade:Ge.bool,bounce:Ge.bool,className:Ge.string,fade:Ge.bool,flash:Ge.bool,mask:Ge.oneOfType([Ge.object,Ge.array,Ge.string]),maskId:Ge.string,fixedWidth:Ge.bool,inverse:Ge.bool,flip:Ge.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ge.oneOfType([Ge.object,Ge.array,Ge.string]),listItem:Ge.bool,pull:Ge.oneOf(["right","left"]),pulse:Ge.bool,rotation:Ge.oneOf([0,90,180,270]),shake:Ge.bool,size:Ge.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ge.bool,spinPulse:Ge.bool,spinReverse:Ge.bool,symbol:Ge.oneOfType([Ge.bool,Ge.string]),title:Ge.string,titleId:Ge.string,transform:Ge.oneOfType([Ge.string,Ge.object]),swapOpacity:Ge.bool};Ms.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var gT=jy.bind(null,oi.createElement);const ug=({title:t,icon:e})=>{const n=Kt.useRef(null);return Kt.useEffect(()=>(VanillaTilt.init(n.current,{max:25,speed:400,glare:!0,"max-glare":.5,perspective:1e3,reverse:!0}),()=>n.current.vanillaTilt.destroy()),[]),se.jsxs("div",{ref:n,className:"skill-card","data-tilt":!0,children:[se.jsx(Ms,{icon:e,size:"3x",color:"#0078D4"}),se.jsx("h3",{className:"skill-title",children:t})]})},vT="/my-portfolio/assets/profilePic-KlWWKy1F.png";var Yy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},cg=oi.createContext&&oi.createContext(Yy),_T=["attr","size","title"];function yT(t,e){if(t==null)return{};var n=xT(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function xT(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ru(){return Ru=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ru.apply(this,arguments)}function fg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Pu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fg(Object(n),!0).forEach(function(i){ST(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function ST(t,e,n){return e=ET(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ET(t){var e=MT(t,"string");return typeof e=="symbol"?e:String(e)}function MT(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function qy(t){return t&&t.map((e,n)=>oi.createElement(e.tag,Pu({key:n},e.attr),qy(e.child)))}function uo(t){return e=>oi.createElement(TT,Ru({attr:Pu({},t.attr)},e),qy(t.child))}function TT(t){var e=n=>{var{attr:i,size:r,title:a}=t,o=yT(t,_T),s=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),oi.createElement("svg",Ru({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:Pu(Pu({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&oi.createElement("title",null,a),t.children)};return cg!==void 0?oi.createElement(cg.Consumer,null,n=>e(n)):e(Yy)}function wT(t){return uo({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function bT(t){return uo({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}var AT={prefix:"fab",iconName:"microsoft",icon:[448,512,[],"f3ca","M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"]},CT={prefix:"fab",iconName:"react",icon:[512,512,[],"f41b","M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"]};const RT=()=>se.jsxs(se.Fragment,{children:[se.jsxs("div",{className:"about-me-container flex flex-col items-center justify-center h-screen text-white",children:[se.jsx("img",{src:vT,alt:"Profile",className:"w-24 h-24 rounded-full"}),se.jsx("h1",{className:"text-2xl font-bold",children:"Carlos Valeriano"}),se.jsxs("p",{className:"text-center mt-4",children:["A web developer ready to bring your ",se.jsx("span",{className:"text-yellow-400 bounce",children:"visions"})," to ",se.jsx("span",{className:"text-yellow-400 bounce",children:"life"}),"."]}),se.jsxs("div",{className:"social-links flex justify-center gap-4 mt-4",children:[se.jsxs("a",{href:"https://github.com/cv145",target:"_blank",rel:"noopener noreferrer",className:"social-link bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center",children:[se.jsx(wT,{className:"mr-2"})," Github"]}),se.jsxs("a",{href:"https://www.linkedin.com/in/carlos-valeriano-006506195/",target:"_blank",rel:"noopener noreferrer",className:"social-link bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center",children:[se.jsx(bT,{className:"mr-2"})," LinkedIn"]})]})]}),se.jsx("div",{className:"summary-card p-6 mt-12 rounded-lg shadow-lg max-w-2xl w-full",children:se.jsx("p",{className:"text-white text-left",children:"Dedicated to the art of coding, I am a skilled web developer with expertise in Javascript, React, C#, and ASP.NET. I learn quickly using effective research skills to find solutions to real-world problems. Let's work on your next project together!"})}),se.jsxs("div",{className:"skills-container",children:[se.jsx(ug,{title:"React",icon:CT}),se.jsx(ug,{title:"ASP.NET",icon:AT})]})]});function PT(t){return uo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(t)}function LT(t){return uo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(t)}function NT(t){return uo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(t)}function DT(t){return uo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(t)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="161",IT=0,dg=1,UT=2,Ky=1,OT=2,_i=3,vr=0,pn=1,Si=2,ur=0,Wa=1,hg=2,pg=3,mg=4,FT=5,Ir=100,kT=101,zT=102,gg=103,vg=104,BT=200,HT=201,GT=202,VT=203,Hd=204,Gd=205,WT=206,XT=207,jT=208,$T=209,YT=210,qT=211,KT=212,QT=213,ZT=214,JT=0,ew=1,tw=2,Lu=3,nw=4,iw=5,rw=6,aw=7,Qy=0,ow=1,sw=2,cr=0,lw=1,uw=2,cw=3,fw=4,dw=5,hw=6,Zy=300,to=301,no=302,Vd=303,Wd=304,rc=306,Xd=1e3,Xn=1001,jd=1002,tn=1003,_g=1004,Mo=1005,sn=1006,Qc=1007,Hr=1008,fr=1009,pw=1010,mw=1011,sp=1012,Jy=1013,er=1014,Ei=1015,hs=1016,ex=1017,tx=1018,Wr=1020,gw=1021,jn=1023,vw=1024,_w=1025,Xr=1026,io=1027,yw=1028,nx=1029,xw=1030,ix=1031,rx=1033,Zc=33776,Jc=33777,ef=33778,tf=33779,yg=35840,xg=35841,Sg=35842,Eg=35843,ax=36196,Mg=37492,Tg=37496,wg=37808,bg=37809,Ag=37810,Cg=37811,Rg=37812,Pg=37813,Lg=37814,Ng=37815,Dg=37816,Ig=37817,Ug=37818,Og=37819,Fg=37820,kg=37821,nf=36492,zg=36494,Bg=36495,Sw=36283,Hg=36284,Gg=36285,Vg=36286,ox=3e3,jr=3001,Ew=3200,Mw=3201,Tw=0,ww=1,Dn="",zt="srgb",Ii="srgb-linear",lp="display-p3",ac="display-p3-linear",Nu="linear",ot="srgb",Du="rec709",Iu="p3",ra=7680,Wg=519,bw=512,Aw=513,Cw=514,sx=515,Rw=516,Pw=517,Lw=518,Nw=519,Xg=35044,jg="300 es",$d=1035,wi=2e3,Uu=2001;class co{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rf=Math.PI/180,Yd=180/Math.PI;function Ts(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function un(t,e,n){return Math.max(e,Math.min(n,t))}function Dw(t,e){return(t%e+e)%e}function af(t,e,n){return(1-n)*t+n*e}function $g(t){return(t&t-1)===0&&t!==0}function qd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function To(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,a,o,s,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,u)}set(e,n,i,r,a,o,s,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=s,c[3]=n,c[4]=a,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],m=i[5],_=i[8],y=r[0],p=r[3],f=r[6],v=r[1],g=r[4],S=r[7],A=r[2],b=r[5],T=r[8];return a[0]=o*y+s*v+l*A,a[3]=o*p+s*g+l*b,a[6]=o*f+s*S+l*T,a[1]=u*y+c*v+d*A,a[4]=u*p+c*g+d*b,a[7]=u*f+c*S+d*T,a[2]=h*y+m*v+_*A,a[5]=h*p+m*g+_*b,a[8]=h*f+m*S+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*s*u-i*a*c+i*s*l+r*a*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8],d=c*o-s*u,h=s*l-c*a,m=u*a-o*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*u-c*i)*y,e[2]=(s*i-r*o)*y,e[3]=h*y,e[4]=(c*n-r*l)*y,e[5]=(r*a-s*n)*y,e[6]=m*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*a)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,o,s){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*o+u*s)+o+e,-r*u,r*l,-r*(-u*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(of.makeScale(e,n)),this}rotate(e){return this.premultiply(of.makeRotation(-e)),this}translate(e,n){return this.premultiply(of.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const of=new Be;function lx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ou(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Iw(){const t=Ou("canvas");return t.style.display="block",t}const Yg={};function Xa(t){t in Yg||(Yg[t]=!0,console.warn(t))}const qg=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kg=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cl={[Ii]:{transfer:Nu,primaries:Du,toReference:t=>t,fromReference:t=>t},[zt]:{transfer:ot,primaries:Du,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ac]:{transfer:Nu,primaries:Iu,toReference:t=>t.applyMatrix3(Kg),fromReference:t=>t.applyMatrix3(qg)},[lp]:{transfer:ot,primaries:Iu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Kg),fromReference:t=>t.applyMatrix3(qg).convertLinearToSRGB()}},Uw=new Set([Ii,ac]),Ze={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Uw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=cl[e].toReference,r=cl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return cl[t].primaries},getTransfer:function(t){return t===Dn?Nu:cl[t].transfer}};function ja(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function sf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let aa;class ux{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{aa===void 0&&(aa=Ou("canvas")),aa.width=e.width,aa.height=e.height;const i=aa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=aa}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ou("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=ja(a[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ja(n[i]/255)*255):n[i]=ja(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ow=0;class cx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=Ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(lf(r[o].image)):a.push(lf(r[o]))}else a=lf(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function lf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ux.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fw=0;class mn extends co{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Xn,r=Xn,a=sn,o=Hr,s=jn,l=fr,u=mn.DEFAULT_ANISOTROPY,c=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=Ts(),this.name="",this.source=new cx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Xa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===jr?zt:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?jr:ox}set encoding(e){Xa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===jr?zt:Dn}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Zy;mn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,n=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],m=l[5],_=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(m+1)/2,A=(f+1)/2,b=(c+h)/4,T=(d+y)/4,N=(_+p)/4;return g>S&&g>A?g<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(g),r=b/i,a=T/i):S>A?S<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),i=b/r,a=N/r):A<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),i=T/a,r=N/a),this.set(i,r,a,n),this}let v=Math.sqrt((p-_)*(p-_)+(d-y)*(d-y)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-y)/v,this.z=(h-c)/v,this.w=Math.acos((u+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kw extends co{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Xa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===jr?zt:Dn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new cx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ea extends kw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class fx extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zw extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,o,s){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=a[o+0],m=a[o+1],_=a[o+2],y=a[o+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(s===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==h||u!==m||c!==_){let p=1-s;const f=l*h+u*m+c*_+d*y,v=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const A=Math.sqrt(g),b=Math.atan2(A,f*v);p=Math.sin(p*b)/A,s=Math.sin(s*b)/A}const S=s*v;if(l=l*p+h*S,u=u*p+m*S,c=c*p+_*S,d=d*p+y*S,p===1-s){const A=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=A,u*=A,c*=A,d*=A}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,a,o){const s=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=a[o],h=a[o+1],m=a[o+2],_=a[o+3];return e[n]=s*_+c*d+l*m-u*h,e[n+1]=l*_+c*h+u*d-s*m,e[n+2]=u*_+c*m+s*h-l*d,e[n+3]=c*_-s*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,u=s(i/2),c=s(r/2),d=s(a/2),h=l(i/2),m=l(r/2),_=l(a/2);switch(o){case"XYZ":this._x=h*c*d+u*m*_,this._y=u*m*d-h*c*_,this._z=u*c*_+h*m*d,this._w=u*c*d-h*m*_;break;case"YXZ":this._x=h*c*d+u*m*_,this._y=u*m*d-h*c*_,this._z=u*c*_-h*m*d,this._w=u*c*d+h*m*_;break;case"ZXY":this._x=h*c*d-u*m*_,this._y=u*m*d+h*c*_,this._z=u*c*_+h*m*d,this._w=u*c*d-h*m*_;break;case"ZYX":this._x=h*c*d-u*m*_,this._y=u*m*d+h*c*_,this._z=u*c*_-h*m*d,this._w=u*c*d+h*m*_;break;case"YZX":this._x=h*c*d+u*m*_,this._y=u*m*d+h*c*_,this._z=u*c*_-h*m*d,this._w=u*c*d-h*m*_;break;case"XZY":this._x=h*c*d-u*m*_,this._y=u*m*d-h*c*_,this._z=u*c*_+h*m*d,this._w=u*c*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],o=n[1],s=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+s+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(a-u)*m,this._z=(o-r)*m}else if(i>s&&i>d){const m=2*Math.sqrt(1+i-s-d);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+u)/m}else if(s>d){const m=2*Math.sqrt(1+s-i-d);this._w=(a-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-s);this._w=(o-r)/m,this._x=(a+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,o=e._w,s=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*s+r*u-a*l,this._y=r*c+o*l+a*s-i*u,this._z=a*c+o*u+i*l-r*s,this._w=o*c-i*s-r*l-a*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*a+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,s),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,u=2*(o*r-s*i),c=2*(s*n-a*r),d=2*(a*i-o*n);return this.x=n+l*u+o*d-s*c,this.y=i+l*c+s*u-a*d,this.z=r+l*d+a*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uf.copy(this).projectOnVector(e),this.sub(uf)}reflect(e){return this.sub(uf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uf=new z,Qg=new ws;class bs{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(a,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),dl.subVectors(this.max,wo),oa.subVectors(e.a,wo),sa.subVectors(e.b,wo),la.subVectors(e.c,wo),zi.subVectors(sa,oa),Bi.subVectors(la,sa),wr.subVectors(oa,la);let n=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-wr.z,wr.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,wr.z,0,-wr.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-wr.y,wr.x,0];return!cf(n,oa,sa,la,dl)||(n=[1,0,0,0,1,0,0,0,1],!cf(n,oa,sa,la,dl))?!1:(hl.crossVectors(zi,Bi),n=[hl.x,hl.y,hl.z],cf(n,oa,sa,la,dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new z,new z,new z,new z,new z,new z,new z,new z],zn=new z,fl=new bs,oa=new z,sa=new z,la=new z,zi=new z,Bi=new z,wr=new z,wo=new z,dl=new z,hl=new z,br=new z;function cf(t,e,n,i,r){for(let a=0,o=t.length-3;a<=o;a+=3){br.fromArray(t,a);const s=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),u=n.dot(br),c=i.dot(br);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}const Bw=new bs,bo=new z,ff=new z;class up{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Bw.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ff.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(ff)),this.expandByPoint(bo.copy(e.center).sub(ff))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new z,df=new z,pl=new z,Hi=new z,hf=new z,ml=new z,pf=new z;class Hw{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){df.copy(e).add(n).multiplyScalar(.5),pl.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(df);const a=e.distanceTo(n)*.5,o=-this.direction.dot(pl),s=Hi.dot(this.direction),l=-Hi.dot(pl),u=Hi.lengthSq(),c=Math.abs(1-o*o);let d,h,m,_;if(c>0)if(d=o*l-s,h=o*s-l,_=a*c,d>=0)if(h>=-_)if(h<=_){const y=1/c;d*=y,h*=y,m=d*(d+o*h+2*s)+h*(o*d+h+2*l)+u}else h=a,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+u;else h=-a,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-o*a+s)),h=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-a,-l),a),m=h*(h+2*l)+u):(d=Math.max(0,-(o*a+s)),h=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+h*(h+2*l)+u);else h=o>0?-a:a,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(df).addScaledVector(pl,h),m}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,o,s,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(a=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(a=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(s=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,a){hf.subVectors(n,e),ml.subVectors(i,e),pf.crossVectors(hf,ml);let o=this.direction.dot(pf),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=s*this.direction.dot(ml.crossVectors(Hi,ml));if(l<0)return null;const u=s*this.direction.dot(hf.cross(Hi));if(u<0||l+u>o)return null;const c=-s*Hi.dot(pf);return c<0?null:this.at(c/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,i,r,a,o,s,l,u,c,d,h,m,_,y,p){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,u,c,d,h,m,_,y,p)}set(e,n,i,r,a,o,s,l,u,c,d,h,m,_,y,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=a,f[5]=o,f[9]=s,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=m,f[7]=_,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ua.setFromMatrixColumn(e,0).length(),a=1/ua.setFromMatrixColumn(e,1).length(),o=1/ua.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const h=o*c,m=o*d,_=s*c,y=s*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=m+_*u,n[5]=h-y*u,n[9]=-s*l,n[2]=y-h*u,n[6]=_+m*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*d,_=u*c,y=u*d;n[0]=h+y*s,n[4]=_*s-m,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-s,n[2]=m*s-_,n[6]=y+h*s,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*d,_=u*c,y=u*d;n[0]=h-y*s,n[4]=-o*d,n[8]=_+m*s,n[1]=m+_*s,n[5]=o*c,n[9]=y-h*s,n[2]=-o*u,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*d,_=s*c,y=s*d;n[0]=l*c,n[4]=_*u-m,n[8]=h*u+y,n[1]=l*d,n[5]=y*u+h,n[9]=m*u-_,n[2]=-u,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,_=s*l,y=s*u;n[0]=l*c,n[4]=y-h*d,n[8]=_*d+m,n[1]=d,n[5]=o*c,n[9]=-s*c,n[2]=-u*c,n[6]=m*d+_,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,m=o*u,_=s*l,y=s*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+y,n[5]=o*c,n[9]=m*d-_,n[2]=_*d-m,n[6]=s*c,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gw,e,Vw)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Gi.crossVectors(i,vn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Gi.crossVectors(i,vn)),Gi.normalize(),gl.crossVectors(vn,Gi),r[0]=Gi.x,r[4]=gl.x,r[8]=vn.x,r[1]=Gi.y,r[5]=gl.y,r[9]=vn.y,r[2]=Gi.z,r[6]=gl.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],m=i[13],_=i[2],y=i[6],p=i[10],f=i[14],v=i[3],g=i[7],S=i[11],A=i[15],b=r[0],T=r[4],N=r[8],j=r[12],x=r[1],R=r[5],X=r[9],K=r[13],P=r[2],W=r[6],V=r[10],Y=r[14],L=r[3],U=r[7],B=r[11],$=r[15];return a[0]=o*b+s*x+l*P+u*L,a[4]=o*T+s*R+l*W+u*U,a[8]=o*N+s*X+l*V+u*B,a[12]=o*j+s*K+l*Y+u*$,a[1]=c*b+d*x+h*P+m*L,a[5]=c*T+d*R+h*W+m*U,a[9]=c*N+d*X+h*V+m*B,a[13]=c*j+d*K+h*Y+m*$,a[2]=_*b+y*x+p*P+f*L,a[6]=_*T+y*R+p*W+f*U,a[10]=_*N+y*X+p*V+f*B,a[14]=_*j+y*K+p*Y+f*$,a[3]=v*b+g*x+S*P+A*L,a[7]=v*T+g*R+S*W+A*U,a[11]=v*N+g*X+S*V+A*B,a[15]=v*j+g*K+S*Y+A*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],m=e[14],_=e[3],y=e[7],p=e[11],f=e[15];return _*(+a*l*d-r*u*d-a*s*h+i*u*h+r*s*m-i*l*m)+y*(+n*l*m-n*u*h+a*o*h-r*o*m+r*u*c-a*l*c)+p*(+n*u*d-n*s*m-a*o*d+i*o*m+a*s*c-i*u*c)+f*(-r*s*c-n*l*d+n*s*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],m=e[11],_=e[12],y=e[13],p=e[14],f=e[15],v=d*p*u-y*h*u+y*l*m-s*p*m-d*l*f+s*h*f,g=_*h*u-c*p*u-_*l*m+o*p*m+c*l*f-o*h*f,S=c*y*u-_*d*u+_*s*m-o*y*m-c*s*f+o*d*f,A=_*d*l-c*y*l-_*s*h+o*y*h+c*s*p-o*d*p,b=n*v+i*g+r*S+a*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(y*h*a-d*p*a-y*r*m+i*p*m+d*r*f-i*h*f)*T,e[2]=(s*p*a-y*l*a+y*r*u-i*p*u-s*r*f+i*l*f)*T,e[3]=(d*l*a-s*h*a-d*r*u+i*h*u+s*r*m-i*l*m)*T,e[4]=g*T,e[5]=(c*p*a-_*h*a+_*r*m-n*p*m-c*r*f+n*h*f)*T,e[6]=(_*l*a-o*p*a-_*r*u+n*p*u+o*r*f-n*l*f)*T,e[7]=(o*h*a-c*l*a+c*r*u-n*h*u-o*r*m+n*l*m)*T,e[8]=S*T,e[9]=(_*d*a-c*y*a-_*i*m+n*y*m+c*i*f-n*d*f)*T,e[10]=(o*y*a-_*s*a+_*i*u-n*y*u-o*i*f+n*s*f)*T,e[11]=(c*s*a-o*d*a-c*i*u+n*d*u+o*i*m-n*s*m)*T,e[12]=A*T,e[13]=(c*y*r-_*d*r+_*i*h-n*y*h-c*i*p+n*d*p)*T,e[14]=(_*s*r-o*y*r-_*i*l+n*y*l+o*i*p-n*s*p)*T,e[15]=(o*d*r-c*s*r+c*i*l-n*d*l-o*i*h+n*s*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,o=e.x,s=e.y,l=e.z,u=a*o,c=a*s;return this.set(u*o+i,u*s-r*l,u*l+r*s,0,u*s+r*l,c*s+i,c*l-r*o,0,u*l-r*s,c*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,u=a+a,c=o+o,d=s+s,h=a*u,m=a*c,_=a*d,y=o*c,p=o*d,f=s*d,v=l*u,g=l*c,S=l*d,A=i.x,b=i.y,T=i.z;return r[0]=(1-(y+f))*A,r[1]=(m+S)*A,r[2]=(_-g)*A,r[3]=0,r[4]=(m-S)*b,r[5]=(1-(h+f))*b,r[6]=(p+v)*b,r[7]=0,r[8]=(_+g)*T,r[9]=(p-v)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=ua.set(r[0],r[1],r[2]).length();const o=ua.set(r[4],r[5],r[6]).length(),s=ua.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const u=1/a,c=1/o,d=1/s;return Bn.elements[0]*=u,Bn.elements[1]*=u,Bn.elements[2]*=u,Bn.elements[4]*=c,Bn.elements[5]*=c,Bn.elements[6]*=c,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,n.setFromRotationMatrix(Bn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,n,i,r,a,o,s=wi){const l=this.elements,u=2*a/(n-e),c=2*a/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(s===wi)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===Uu)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,o,s=wi){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(o-a),h=(n+e)*u,m=(i+r)*c;let _,y;if(s===wi)_=(o+a)*d,y=-2*d;else if(s===Uu)_=a*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ua=new z,Bn=new Gt,Gw=new z(0,0,0),Vw=new z(1,1,1),Gi=new z,gl=new z,vn=new z,Zg=new Gt,Jg=new ws;class oc{constructor(e=0,n=0,i=0,r=oc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(un(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-un(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oc.DEFAULT_ORDER="XYZ";class dx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ww=0;const ev=new z,ca=new ws,mi=new Gt,vl=new z,Ao=new z,Xw=new z,jw=new ws,tv=new z(1,0,0),nv=new z(0,1,0),iv=new z(0,0,1),$w={type:"added"},Yw={type:"removed"};class En extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new z,n=new oc,i=new ws,r=new z(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Be}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ca.setFromAxisAngle(e,n),this.quaternion.multiply(ca),this}rotateOnWorldAxis(e,n){return ca.setFromAxisAngle(e,n),this.quaternion.premultiply(ca),this}rotateX(e){return this.rotateOnAxis(tv,e)}rotateY(e){return this.rotateOnAxis(nv,e)}rotateZ(e){return this.rotateOnAxis(iv,e)}translateOnAxis(e,n){return ev.copy(e).applyQuaternion(this.quaternion),this.position.add(ev.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tv,e)}translateY(e){return this.translateOnAxis(nv,e)}translateZ(e){return this.translateOnAxis(iv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vl.copy(e):vl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Ao,vl,this.up):mi.lookAt(vl,Ao,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),ca.setFromRotationMatrix(mi),this.quaternion.premultiply(ca.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($w)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Yw)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,Xw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,jw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const l=[];for(const u in s){const c=s[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}En.DEFAULT_UP=new z(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new z,gi=new z,mf=new z,vi=new z,fa=new z,da=new z,rv=new z,gf=new z,vf=new z,_f=new z;class ii{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){Hn.subVectors(r,n),gi.subVectors(i,n),mf.subVectors(e,n);const o=Hn.dot(Hn),s=Hn.dot(gi),l=Hn.dot(mf),u=gi.dot(gi),c=gi.dot(mf),d=o*u-s*s;if(d===0)return a.set(0,0,0),null;const h=1/d,m=(u*l-s*c)*h,_=(o*c-s*l)*h;return a.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,a,o,s,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(s,vi.z),l)}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),gi.subVectors(e,n),Hn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Hn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,a){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let o,s;fa.subVectors(r,i),da.subVectors(a,i),gf.subVectors(e,i);const l=fa.dot(gf),u=da.dot(gf);if(l<=0&&u<=0)return n.copy(i);vf.subVectors(e,r);const c=fa.dot(vf),d=da.dot(vf);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(fa,o);_f.subVectors(e,a);const m=fa.dot(_f),_=da.dot(_f);if(_>=0&&m<=_)return n.copy(a);const y=m*u-l*_;if(y<=0&&u>=0&&_<=0)return s=u/(u-_),n.copy(i).addScaledVector(da,s);const p=c*_-m*d;if(p<=0&&d-c>=0&&m-_>=0)return rv.subVectors(a,r),s=(d-c)/(d-c+(m-_)),n.copy(r).addScaledVector(rv,s);const f=1/(p+y+h);return o=y*f,s=h*f,n.copy(i).addScaledVector(fa,o).addScaledVector(da,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},_l={h:0,s:0,l:0};function yf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=Dw(e,1),n=un(n,0,1),i=un(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,o=2*i-a;this.r=yf(o,a,e+1/3),this.g=yf(o,a,e),this.b=yf(o,a,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=zt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zt){const i=hx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}copyLinearToSRGB(e){return this.r=sf(e.r),this.g=sf(e.g),this.b=sf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Ze.fromWorkingColorSpace(Yt.copy(this),e),Math.round(un(Yt.r*255,0,255))*65536+Math.round(un(Yt.g*255,0,255))*256+Math.round(un(Yt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,a=Yt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,u;const c=(s+o)/2;if(s===o)l=0,u=0;else{const d=o-s;switch(u=c<=.5?d/(o+s):d/(2-o-s),o){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=zt){Ze.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==zt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(_l);const i=af(Vi.h,_l.h,n),r=af(Vi.s,_l.s,n),a=af(Vi.l,_l.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Je;Je.NAMES=hx;let qw=0;class sc extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=Wa,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Gd,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Lu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wa&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hd&&(i.blendSrc=this.blendSrc),this.blendDst!==Gd&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ra&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ra&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ra&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cp extends sc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new z,yl=new $e;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Xg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xa("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=To(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=To(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=To(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=To(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=To(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),a=on(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xg&&(e.usage=this.usage),e}}class px extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class mx extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ci extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Kw=0;const Rn=new Gt,xf=new En,ha=new z,_n=new bs,Co=new bs,Dt=new z;class Er extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lx(e)?mx:px)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Be().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return xf.lookAt(e),xf.updateMatrix(),this.applyMatrix4(xf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ha).negate(),this.translate(ha.x,ha.y,ha.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ci(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];_n.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new up);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];Co.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(_n.min,Co.min),_n.expandByPoint(Dt),Dt.addVectors(_n.max,Co.max),_n.expandByPoint(Dt)):(_n.expandByPoint(Co.min),_n.expandByPoint(Co.max))}_n.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)Dt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)Dt.fromBufferAttribute(s,u),l&&(ha.fromBufferAttribute(e,u),Dt.add(ha)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,o=n.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let x=0;x<s;x++)u[x]=new z,c[x]=new z;const d=new z,h=new z,m=new z,_=new $e,y=new $e,p=new $e,f=new z,v=new z;function g(x,R,X){d.fromArray(r,x*3),h.fromArray(r,R*3),m.fromArray(r,X*3),_.fromArray(o,x*2),y.fromArray(o,R*2),p.fromArray(o,X*2),h.sub(d),m.sub(d),y.sub(_),p.sub(_);const K=1/(y.x*p.y-p.x*y.y);isFinite(K)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(K),v.copy(m).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(K),u[x].add(f),u[R].add(f),u[X].add(f),c[x].add(v),c[R].add(v),c[X].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let x=0,R=S.length;x<R;++x){const X=S[x],K=X.start,P=X.count;for(let W=K,V=K+P;W<V;W+=3)g(i[W+0],i[W+1],i[W+2])}const A=new z,b=new z,T=new z,N=new z;function j(x){T.fromArray(a,x*3),N.copy(T);const R=u[x];A.copy(R),A.sub(T.multiplyScalar(T.dot(R))).normalize(),b.crossVectors(N,R);const K=b.dot(c[x])<0?-1:1;l[x*4]=A.x,l[x*4+1]=A.y,l[x*4+2]=A.z,l[x*4+3]=K}for(let x=0,R=S.length;x<R;++x){const X=S[x],K=X.start,P=X.count;for(let W=K,V=K+P;W<V;W+=3)j(i[W+0]),j(i[W+1]),j(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new z,a=new z,o=new z,s=new z,l=new z,u=new z,c=new z,d=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),c.subVectors(o,a),d.subVectors(r,a),c.cross(d),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,p),s.add(c),l.add(c),u.add(c),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,a),d.subVectors(r,a),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(s,l){const u=s.array,c=s.itemSize,d=s.normalized,h=new u.constructor(l.length*c);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){s.isInterleavedBufferAttribute?m=l[y]*s.data.stride+s.offset:m=l[y]*c;for(let f=0;f<c;f++)h[_++]=u[m++]}return new ui(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Er,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],u=e(l,i);n.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const l=[],u=a[s];for(let c=0,d=u.length;c<d;c++){const h=u[c],m=e(h,i);l.push(m)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const a=e.morphAttributes;for(const u in a){const c=[],d=a[u];for(let h=0,m=d.length;h<m;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const av=new Gt,Ar=new Hw,xl=new up,ov=new z,pa=new z,ma=new z,ga=new z,Sf=new z,Sl=new z,El=new $e,Ml=new $e,Tl=new $e,sv=new z,lv=new z,uv=new z,wl=new z,bl=new z;class ai extends En{constructor(e=new Er,n=new cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Sl.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const c=s[l],d=a[l];c!==0&&(Sf.fromBufferAttribute(d,e),o?Sl.addScaledVector(Sf,c):Sl.addScaledVector(Sf.sub(n),c))}n.add(Sl)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(a),Ar.copy(e.ray).recast(e.near),!(xl.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(xl,ov)===null||Ar.origin.distanceToSquared(ov)>(e.far-e.near)**2))&&(av.copy(a).invert(),Ar.copy(e.ray).applyMatrix4(av),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,u=a.attributes.uv,c=a.attributes.uv1,d=a.attributes.normal,h=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],f=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,A=g;S<A;S+=3){const b=s.getX(S),T=s.getX(S+1),N=s.getX(S+2);r=Al(this,f,e,i,u,c,d,b,T,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(s.count,m.start+m.count);for(let p=_,f=y;p<f;p+=3){const v=s.getX(p),g=s.getX(p+1),S=s.getX(p+2);r=Al(this,o,e,i,u,c,d,v,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],f=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,A=g;S<A;S+=3){const b=S,T=S+1,N=S+2;r=Al(this,f,e,i,u,c,d,b,T,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,f=y;p<f;p+=3){const v=p,g=p+1,S=p+2;r=Al(this,o,e,i,u,c,d,v,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Qw(t,e,n,i,r,a,o,s){let l;if(e.side===pn?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===vr,s),l===null)return null;bl.copy(s),bl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(bl);return u<n.near||u>n.far?null:{distance:u,point:bl.clone(),object:t}}function Al(t,e,n,i,r,a,o,s,l,u){t.getVertexPosition(s,pa),t.getVertexPosition(l,ma),t.getVertexPosition(u,ga);const c=Qw(t,e,n,i,pa,ma,ga,wl);if(c){r&&(El.fromBufferAttribute(r,s),Ml.fromBufferAttribute(r,l),Tl.fromBufferAttribute(r,u),c.uv=ii.getInterpolation(wl,pa,ma,ga,El,Ml,Tl,new $e)),a&&(El.fromBufferAttribute(a,s),Ml.fromBufferAttribute(a,l),Tl.fromBufferAttribute(a,u),c.uv1=ii.getInterpolation(wl,pa,ma,ga,El,Ml,Tl,new $e),c.uv2=c.uv1),o&&(sv.fromBufferAttribute(o,s),lv.fromBufferAttribute(o,l),uv.fromBufferAttribute(o,u),c.normal=ii.getInterpolation(wl,pa,ma,ga,sv,lv,uv,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:s,b:l,c:u,normal:new z,materialIndex:0};ii.getNormal(pa,ma,ga,d.normal),c.face=d}return c}class As extends Er{constructor(e=1,n=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,a,0),_("z","y","x",1,-1,i,n,-e,o,a,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,a,4),_("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new ci(u,3)),this.setAttribute("normal",new ci(c,3)),this.setAttribute("uv",new ci(d,2));function _(y,p,f,v,g,S,A,b,T,N,j){const x=S/T,R=A/N,X=S/2,K=A/2,P=b/2,W=T+1,V=N+1;let Y=0,L=0;const U=new z;for(let B=0;B<V;B++){const $=B*R-K;for(let ee=0;ee<W;ee++){const Te=ee*x-X;U[y]=Te*v,U[p]=$*g,U[f]=P,u.push(U.x,U.y,U.z),U[y]=0,U[p]=0,U[f]=b>0?1:-1,c.push(U.x,U.y,U.z),d.push(ee/T),d.push(1-B/N),Y+=1}}for(let B=0;B<N;B++)for(let $=0;$<T;$++){const ee=h+$+W*B,Te=h+$+W*(B+1),H=h+($+1)+W*(B+1),q=h+($+1)+W*B;l.push(ee,Te,q),l.push(Te,H,q),L+=6}s.addGroup(m,L,j),m+=L,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=ro(t[n]);for(const r in i)e[r]=i[r]}return e}function Zw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function gx(t){return t.getRenderTarget()===null?t.outputColorSpace:Ze.workingColorSpace}const Jw={clone:ro,merge:Jt};var e2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends sc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e2,this.fragmentShader=t2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=Zw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class vx extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new z,cv=new $e,fv=new $e;class Nn extends vx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan(rf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,cv,fv),n.subVectors(fv,cv)}setViewOffset(e,n,i,r,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const va=-90,_a=1;class n2 extends En{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(va,_a,e,n);r.layers=this.layers,this.add(r);const a=new Nn(va,_a,e,n);a.layers=this.layers,this.add(a);const o=new Nn(va,_a,e,n);o.layers=this.layers,this.add(o);const s=new Nn(va,_a,e,n);s.layers=this.layers,this.add(s);const l=new Nn(va,_a,e,n);l.layers=this.layers,this.add(l);const u=new Nn(va,_a,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,o,s,l]=n;for(const u of n)this.remove(u);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class _x extends mn{constructor(e,n,i,r,a,o,s,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:to,super(e,n,i,r,a,o,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i2 extends ea{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Xa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===jr?zt:Dn),this.texture=new _x(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new As(5,5,5),a=new _r({name:"CubemapFromEquirect",uniforms:ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:ur});a.uniforms.tEquirect.value=n;const o=new ai(r,a),s=n.minFilter;return n.minFilter===Hr&&(n.minFilter=sn),new n2(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(a)}}const Ef=new z,r2=new z,a2=new Be;class Nr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ef.subVectors(i,n).cross(r2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ef),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||a2.getNormalMatrix(e),r=this.coplanarPoint(Ef).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new up,Cl=new z;class yx{constructor(e=new Nr,n=new Nr,i=new Nr,r=new Nr,a=new Nr,o=new Nr){this.planes=[e,n,i,r,a,o]}set(e,n,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],m=r[8],_=r[9],y=r[10],p=r[11],f=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-a,h-u,p-m,S-f).normalize(),i[1].setComponents(l+a,h+u,p+m,S+f).normalize(),i[2].setComponents(l+o,h+c,p+_,S+v).normalize(),i[3].setComponents(l-o,h-c,p-_,S-v).normalize(),i[4].setComponents(l-s,h-d,p-y,S-g).normalize(),n===wi)i[5].setComponents(l+s,h+d,p+y,S+g).normalize();else if(n===Uu)i[5].setComponents(s,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Cl.x=r.normal.x>0?e.max.x:e.min.x,Cl.y=r.normal.y>0?e.max.y:e.min.y,Cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xx(){let t=null,e=!1,n=null,i=null;function r(a,o){n(a,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function o2(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,m=d.byteLength,_=t.createBuffer();t.bindBuffer(c,_),t.bufferData(c,d,h),u.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function a(u,c,d){const h=c.array,m=c._updateRange,_=c.updateRanges;if(t.bindBuffer(d,u),m.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let y=0,p=_.length;y<p;y++){const f=_[y];n?t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,u,c),d.version=u.version}}return{get:o,remove:s,update:l}}class lc extends Er{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,o=n/2,s=Math.floor(i),l=Math.floor(r),u=s+1,c=l+1,d=e/s,h=n/l,m=[],_=[],y=[],p=[];for(let f=0;f<c;f++){const v=f*h-o;for(let g=0;g<u;g++){const S=g*d-a;_.push(S,-v,0),y.push(0,0,1),p.push(g/s),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<s;v++){const g=v+u*f,S=v+u*(f+1),A=v+1+u*(f+1),b=v+1+u*f;m.push(g,S,b),m.push(S,A,b)}this.setIndex(m),this.setAttribute("position",new ci(_,3)),this.setAttribute("normal",new ci(y,3)),this.setAttribute("uv",new ci(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}var s2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,g2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,v2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,E2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,M2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,R2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,P2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,N2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F2="gl_FragColor = linearToOutputTexel( gl_FragColor );",k2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,z2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,B2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,K2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ab=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ob=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Eb=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Db=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ub=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$b=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:s2,alphahash_pars_fragment:l2,alphamap_fragment:u2,alphamap_pars_fragment:c2,alphatest_fragment:f2,alphatest_pars_fragment:d2,aomap_fragment:h2,aomap_pars_fragment:p2,batching_pars_vertex:m2,batching_vertex:g2,begin_vertex:v2,beginnormal_vertex:_2,bsdfs:y2,iridescence_fragment:x2,bumpmap_pars_fragment:S2,clipping_planes_fragment:E2,clipping_planes_pars_fragment:M2,clipping_planes_pars_vertex:T2,clipping_planes_vertex:w2,color_fragment:b2,color_pars_fragment:A2,color_pars_vertex:C2,color_vertex:R2,common:P2,cube_uv_reflection_fragment:L2,defaultnormal_vertex:N2,displacementmap_pars_vertex:D2,displacementmap_vertex:I2,emissivemap_fragment:U2,emissivemap_pars_fragment:O2,colorspace_fragment:F2,colorspace_pars_fragment:k2,envmap_fragment:z2,envmap_common_pars_fragment:B2,envmap_pars_fragment:H2,envmap_pars_vertex:G2,envmap_physical_pars_fragment:eb,envmap_vertex:V2,fog_vertex:W2,fog_pars_vertex:X2,fog_fragment:j2,fog_pars_fragment:$2,gradientmap_pars_fragment:Y2,lightmap_fragment:q2,lightmap_pars_fragment:K2,lights_lambert_fragment:Q2,lights_lambert_pars_fragment:Z2,lights_pars_begin:J2,lights_toon_fragment:tb,lights_toon_pars_fragment:nb,lights_phong_fragment:ib,lights_phong_pars_fragment:rb,lights_physical_fragment:ab,lights_physical_pars_fragment:ob,lights_fragment_begin:sb,lights_fragment_maps:lb,lights_fragment_end:ub,logdepthbuf_fragment:cb,logdepthbuf_pars_fragment:fb,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:hb,map_fragment:pb,map_pars_fragment:mb,map_particle_fragment:gb,map_particle_pars_fragment:vb,metalnessmap_fragment:_b,metalnessmap_pars_fragment:yb,morphcolor_vertex:xb,morphnormal_vertex:Sb,morphtarget_pars_vertex:Eb,morphtarget_vertex:Mb,normal_fragment_begin:Tb,normal_fragment_maps:wb,normal_pars_fragment:bb,normal_pars_vertex:Ab,normal_vertex:Cb,normalmap_pars_fragment:Rb,clearcoat_normal_fragment_begin:Pb,clearcoat_normal_fragment_maps:Lb,clearcoat_pars_fragment:Nb,iridescence_pars_fragment:Db,opaque_fragment:Ib,packing:Ub,premultiplied_alpha_fragment:Ob,project_vertex:Fb,dithering_fragment:kb,dithering_pars_fragment:zb,roughnessmap_fragment:Bb,roughnessmap_pars_fragment:Hb,shadowmap_pars_fragment:Gb,shadowmap_pars_vertex:Vb,shadowmap_vertex:Wb,shadowmask_pars_fragment:Xb,skinbase_vertex:jb,skinning_pars_vertex:$b,skinning_vertex:Yb,skinnormal_vertex:qb,specularmap_fragment:Kb,specularmap_pars_fragment:Qb,tonemapping_fragment:Zb,tonemapping_pars_fragment:Jb,transmission_fragment:eA,transmission_pars_fragment:tA,uv_pars_fragment:nA,uv_pars_vertex:iA,uv_vertex:rA,worldpos_vertex:aA,background_vert:oA,background_frag:sA,backgroundCube_vert:lA,backgroundCube_frag:uA,cube_vert:cA,cube_frag:fA,depth_vert:dA,depth_frag:hA,distanceRGBA_vert:pA,distanceRGBA_frag:mA,equirect_vert:gA,equirect_frag:vA,linedashed_vert:_A,linedashed_frag:yA,meshbasic_vert:xA,meshbasic_frag:SA,meshlambert_vert:EA,meshlambert_frag:MA,meshmatcap_vert:TA,meshmatcap_frag:wA,meshnormal_vert:bA,meshnormal_frag:AA,meshphong_vert:CA,meshphong_frag:RA,meshphysical_vert:PA,meshphysical_frag:LA,meshtoon_vert:NA,meshtoon_frag:DA,points_vert:IA,points_frag:UA,shadow_vert:OA,shadow_frag:FA,sprite_vert:kA,sprite_frag:zA},ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ei={basic:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Jt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Jt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Jt([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Jt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Jt([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Jt([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Jt([ae.common,ae.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Jt([ae.lights,ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ei.physical={uniforms:Jt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Rl={r:0,b:0,g:0};function BA(t,e,n,i,r,a,o){const s=new Je(0);let l=a===!0?0:1,u,c,d=null,h=0,m=null;function _(p,f){let v=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:e).get(g)),g===null?y(s,l):g&&g.isColor&&(y(g,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===rc)?(c===void 0&&(c=new ai(new As(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:ro(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(g.colorSpace)!==ot,(d!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new ai(new lc(2,2),new _r({name:"BackgroundMaterial",uniforms:ro(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(g.colorSpace)!==ot,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function y(p,f){p.getRGB(Rl,gx(t)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,f,o)}return{getClearColor:function(){return s},setClearColor:function(p,f=1){s.set(p),l=f,y(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(s,l)},render:_}}function HA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=p(null);let u=l,c=!1;function d(P,W,V,Y,L){let U=!1;if(o){const B=y(Y,V,W);u!==B&&(u=B,m(u.object)),U=f(P,Y,V,L),U&&v(P,Y,V,L)}else{const B=W.wireframe===!0;(u.geometry!==Y.id||u.program!==V.id||u.wireframe!==B)&&(u.geometry=Y.id,u.program=V.id,u.wireframe=B,U=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(U||c)&&(c=!1,N(P,W,V,Y),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function h(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function m(P){return i.isWebGL2?t.bindVertexArray(P):a.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?t.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function y(P,W,V){const Y=V.wireframe===!0;let L=s[P.id];L===void 0&&(L={},s[P.id]=L);let U=L[W.id];U===void 0&&(U={},L[W.id]=U);let B=U[Y];return B===void 0&&(B=p(h()),U[Y]=B),B}function p(P){const W=[],V=[],Y=[];for(let L=0;L<r;L++)W[L]=0,V[L]=0,Y[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:V,attributeDivisors:Y,object:P,attributes:{},index:null}}function f(P,W,V,Y){const L=u.attributes,U=W.attributes;let B=0;const $=V.getAttributes();for(const ee in $)if($[ee].location>=0){const H=L[ee];let q=U[ee];if(q===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),H===void 0||H.attribute!==q||q&&H.data!==q.data)return!0;B++}return u.attributesNum!==B||u.index!==Y}function v(P,W,V,Y){const L={},U=W.attributes;let B=0;const $=V.getAttributes();for(const ee in $)if($[ee].location>=0){let H=U[ee];H===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));const q={};q.attribute=H,H&&H.data&&(q.data=H.data),L[ee]=q,B++}u.attributes=L,u.attributesNum=B,u.index=Y}function g(){const P=u.newAttributes;for(let W=0,V=P.length;W<V;W++)P[W]=0}function S(P){A(P,0)}function A(P,W){const V=u.newAttributes,Y=u.enabledAttributes,L=u.attributeDivisors;V[P]=1,Y[P]===0&&(t.enableVertexAttribArray(P),Y[P]=1),L[P]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,W),L[P]=W)}function b(){const P=u.newAttributes,W=u.enabledAttributes;for(let V=0,Y=W.length;V<Y;V++)W[V]!==P[V]&&(t.disableVertexAttribArray(V),W[V]=0)}function T(P,W,V,Y,L,U,B){B===!0?t.vertexAttribIPointer(P,W,V,L,U):t.vertexAttribPointer(P,W,V,Y,L,U)}function N(P,W,V,Y){if(i.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const L=Y.attributes,U=V.getAttributes(),B=W.defaultAttributeValues;for(const $ in U){const ee=U[$];if(ee.location>=0){let Te=L[$];if(Te===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(Te=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(Te=P.instanceColor)),Te!==void 0){const H=Te.normalized,q=Te.itemSize,le=n.get(Te);if(le===void 0)continue;const ye=le.buffer,we=le.type,ge=le.bytesPerElement,je=i.isWebGL2===!0&&(we===t.INT||we===t.UNSIGNED_INT||Te.gpuType===Jy);if(Te.isInterleavedBufferAttribute){const Ne=Te.data,I=Ne.stride,Ot=Te.offset;if(Ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ee.locationSize;Ee++)A(ee.location+Ee,Ne.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Ee=0;Ee<ee.locationSize;Ee++)S(ee.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let Ee=0;Ee<ee.locationSize;Ee++)T(ee.location+Ee,q/ee.locationSize,we,H,I*ge,(Ot+q/ee.locationSize*Ee)*ge,je)}else{if(Te.isInstancedBufferAttribute){for(let Ne=0;Ne<ee.locationSize;Ne++)A(ee.location+Ne,Te.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ne=0;Ne<ee.locationSize;Ne++)S(ee.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let Ne=0;Ne<ee.locationSize;Ne++)T(ee.location+Ne,q/ee.locationSize,we,H,q*ge,q/ee.locationSize*Ne*ge,je)}}else if(B!==void 0){const H=B[$];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(ee.location,H);break;case 3:t.vertexAttrib3fv(ee.location,H);break;case 4:t.vertexAttrib4fv(ee.location,H);break;default:t.vertexAttrib1fv(ee.location,H)}}}}b()}function j(){X();for(const P in s){const W=s[P];for(const V in W){const Y=W[V];for(const L in Y)_(Y[L].object),delete Y[L];delete W[V]}delete s[P]}}function x(P){if(s[P.id]===void 0)return;const W=s[P.id];for(const V in W){const Y=W[V];for(const L in Y)_(Y[L].object),delete Y[L];delete W[V]}delete s[P.id]}function R(P){for(const W in s){const V=s[W];if(V[P.id]===void 0)continue;const Y=V[P.id];for(const L in Y)_(Y[L].object),delete Y[L];delete V[P.id]}}function X(){K(),c=!0,u!==l&&(u=l,m(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:K,dispose:j,releaseStatesOfGeometry:x,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:S,disableUnusedAttributes:b}}function GA(t,e,n,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,d){t.drawArrays(a,c,d),n.update(d,a,1)}function l(c,d,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](a,c,d,h),n.update(d,a,h)}function u(c,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(c[_],d[_]);else{m.multiDrawArraysWEBGL(a,c,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y];n.update(_,a,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=u}function VA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,S=o||e.has("OES_texture_float"),A=g&&S,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:b}}function WA(t){const e=this;let n=null,i=0,r=!1,a=!1;const o=new Nr,s=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||a&&!p)a?c(null):u();else{const v=a?0:i,g=v*4;let S=f.clippingState||null;l.value=S,S=c(_,h,g,m);for(let A=0;A!==g;++A)S[A]=n[A];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,m,_){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const f=m+y*4,v=h.matrixWorldInverse;s.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let g=0,S=m;g!==y;++g,S+=4)o.copy(d[g]).applyMatrix4(v,s),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function XA(t){let e=new WeakMap;function n(o,s){return s===Vd?o.mapping=to:s===Wd&&(o.mapping=no),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===Vd||s===Wd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new i2(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class jA extends vx{constructor(e=-1,n=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ua=4,dv=[.125,.215,.35,.446,.526,.582],Ur=20,Mf=new jA,hv=new Je;let Tf=null,wf=0,bf=0;const Dr=(1+Math.sqrt(5))/2,ya=1/Dr,pv=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Dr,ya),new z(0,Dr,-ya),new z(ya,0,Dr),new z(-ya,0,Dr),new z(Dr,ya,0),new z(-Dr,ya,0)];class mv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Tf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tf,wf,bf),e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:hs,format:jn,colorSpace:Ii,depthBuffer:!1},r=gv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gv(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$A(a)),this._blurMaterial=YA(a,e,n)}return r}_compileMaterial(e){const n=new ai(this._lodPlanes[0],e);this._renderer.compile(n,Mf)}_sceneToCubeUV(e,n,i,r){const s=new Nn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(hv),c.toneMapping=cr,c.autoClear=!1;const m=new cp({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),_=new ai(new As,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(hv),y=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(s.up.set(0,l[f],0),s.lookAt(u[f],0,0)):v===1?(s.up.set(0,0,l[f]),s.lookAt(0,u[f],0)):(s.up.set(0,l[f],0),s.lookAt(0,0,u[f]));const g=this._cubeSize;Pl(r,v*g,f>2?g:0,g,g),c.setRenderTarget(r),y&&c.render(_,s),c.render(e,s)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===to||e.mapping===no;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vv());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new ai(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Mf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pv[(r-1)%pv.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ai(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Ur-1),y=a/_,p=isFinite(a)?1+Math.floor(c*y):Ur;p>Ur&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ur}`);const f=[];let v=0;for(let T=0;T<Ur;++T){const N=T/y,j=Math.exp(-N*N/2);f.push(j),T===0?v+=j:T<p&&(v+=2*j)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const S=this._sizeLods[r],A=3*S*(r>g-Ua?r-g+Ua:0),b=4*(this._cubeSize-S);Pl(n,A,b,3*S,2*S),l.setRenderTarget(n),l.render(d,Mf)}}function $A(t){const e=[],n=[],i=[];let r=t;const a=t-Ua+1+dv.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);n.push(s);let l=1/s;o>t-Ua?l=dv[o-t+Ua-1]:o===0&&(l=0),i.push(l);const u=1/(s-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,_=6,y=3,p=2,f=1,v=new Float32Array(y*_*m),g=new Float32Array(p*_*m),S=new Float32Array(f*_*m);for(let b=0;b<m;b++){const T=b%3*2/3-1,N=b>2?0:-1,j=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];v.set(j,y*_*b),g.set(h,p*_*b);const x=[b,b,b,b,b,b];S.set(x,f*_*b)}const A=new Er;A.setAttribute("position",new ui(v,y)),A.setAttribute("uv",new ui(g,p)),A.setAttribute("faceIndex",new ui(S,f)),e.push(A),r>Ua&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function gv(t,e,n){const i=new ea(t,e,n);return i.texture.mapping=rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function YA(t,e,n){const i=new Float32Array(Ur),r=new z(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function vv(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function _v(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function fp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qA(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===Vd||l===Wd,c=l===to||l===no;if(u||c)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return n===null&&(n=new mv(t)),d=u?n.fromEquirectangular(s,d):n.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new mv(t));const h=u?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",a),h.texture}else return null}}}return s}function r(s){let l=0;const u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function a(s){const l=s.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function KA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function QA(t,e,n,i){const r={},a=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=a.get(h);m&&(e.remove(m),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function s(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const y=m[_];for(let p=0,f=y.length;p<f;p++)e.update(y[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,_=d.attributes.position;let y=0;if(m!==null){const v=m.array;y=m.version;for(let g=0,S=v.length;g<S;g+=3){const A=v[g+0],b=v[g+1],T=v[g+2];h.push(A,b,b,T,T,A)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const A=g+0,b=g+1,T=g+2;h.push(A,b,b,T,T,A)}}else return;const p=new(lx(h)?mx:px)(h,1);p.version=y;const f=a.get(d);f&&e.remove(f),a.set(d,p)}function c(d){const h=a.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return a.get(d)}return{get:s,update:l,getWireframeAttribute:c}}function ZA(t,e,n,i){const r=i.isWebGL2;let a;function o(m){a=m}let s,l;function u(m){s=m.type,l=m.bytesPerElement}function c(m,_){t.drawElements(a,_,s,m*l),n.update(_,a,1)}function d(m,_,y){if(y===0)return;let p,f;if(r)p=t,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](a,_,s,m*l,y),n.update(_,a,y)}function h(m,_,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<y;f++)this.render(m[f]/l,_[f]);else{p.multiDrawElementsWEBGL(a,_,0,s,m,0,y);let f=0;for(let v=0;v<y;v++)f+=_[v];n.update(f,a,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function JA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(a/3);break;case t.LINES:n.lines+=s*(a/2);break;case t.LINE_STRIP:n.lines+=s*(a-1);break;case t.LINE_LOOP:n.lines+=s*a;break;case t.POINTS:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function eC(t,e){return t[0]-e[0]}function tC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function nC(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,o=new Bt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=_!==void 0?_.length:0;let p=a.get(c);if(p===void 0||p.count!==y){let W=function(){K.dispose(),a.delete(c),c.removeEventListener("dispose",W)};var m=W;p!==void 0&&p.texture.dispose();const g=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],N=c.morphAttributes.color||[];let j=0;g===!0&&(j=1),S===!0&&(j=2),A===!0&&(j=3);let x=c.attributes.position.count*j,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const X=new Float32Array(x*R*4*y),K=new fx(X,x,R,y);K.type=Ei,K.needsUpdate=!0;const P=j*4;for(let V=0;V<y;V++){const Y=b[V],L=T[V],U=N[V],B=x*R*4*V;for(let $=0;$<Y.count;$++){const ee=$*P;g===!0&&(o.fromBufferAttribute(Y,$),X[B+ee+0]=o.x,X[B+ee+1]=o.y,X[B+ee+2]=o.z,X[B+ee+3]=0),S===!0&&(o.fromBufferAttribute(L,$),X[B+ee+4]=o.x,X[B+ee+5]=o.y,X[B+ee+6]=o.z,X[B+ee+7]=0),A===!0&&(o.fromBufferAttribute(U,$),X[B+ee+8]=o.x,X[B+ee+9]=o.y,X[B+ee+10]=o.z,X[B+ee+11]=U.itemSize===4?o.w:1)}}p={count:y,texture:K,size:new $e(x,R)},a.set(c,p),c.addEventListener("dispose",W)}let f=0;for(let g=0;g<h.length;g++)f+=h[g];const v=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let y=i[c.id];if(y===void 0||y.length!==_){y=[];for(let S=0;S<_;S++)y[S]=[S,0];i[c.id]=y}for(let S=0;S<_;S++){const A=y[S];A[0]=S,A[1]=h[S]}y.sort(tC);for(let S=0;S<8;S++)S<_&&y[S][1]?(s[S][0]=y[S][0],s[S][1]=y[S][1]):(s[S][0]=Number.MAX_SAFE_INTEGER,s[S][1]=0);s.sort(eC);const p=c.morphAttributes.position,f=c.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const A=s[S],b=A[0],T=A[1];b!==Number.MAX_SAFE_INTEGER&&T?(p&&c.getAttribute("morphTarget"+S)!==p[b]&&c.setAttribute("morphTarget"+S,p[b]),f&&c.getAttribute("morphNormal"+S)!==f[b]&&c.setAttribute("morphNormal"+S,f[b]),r[S]=T,v+=T):(p&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),f&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const g=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function iC(t,e,n,i){let r=new WeakMap;function a(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}class Sx extends mn{constructor(e,n,i,r,a,o,s,l,u,c){if(c=c!==void 0?c:Xr,c!==Xr&&c!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Xr&&(i=er),i===void 0&&c===io&&(i=Wr),super(null,r,a,o,s,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ex=new mn,Mx=new Sx(1,1);Mx.compareFunction=sx;const Tx=new fx,wx=new zw,bx=new _x,yv=[],xv=[],Sv=new Float32Array(16),Ev=new Float32Array(9),Mv=new Float32Array(4);function fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=yv[r];if(a===void 0&&(a=new Float32Array(r),yv[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uc(t,e){let n=xv[e];n===void 0&&(n=new Int32Array(e),xv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function oC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function sC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function lC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Mv.set(i),t.uniformMatrix2fv(this.addr,!1,Mv),Lt(n,i)}}function uC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Ev.set(i),t.uniformMatrix3fv(this.addr,!1,Ev),Lt(n,i)}}function cC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Sv.set(i),t.uniformMatrix4fv(this.addr,!1,Sv),Lt(n,i)}}function fC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function hC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function pC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function mC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function vC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function _C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function yC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const a=this.type===t.SAMPLER_2D_SHADOW?Mx:Ex;n.setTexture2D(e||a,r)}function xC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||wx,r)}function SC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||bx,r)}function EC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Tx,r)}function MC(t){switch(t){case 5126:return rC;case 35664:return aC;case 35665:return oC;case 35666:return sC;case 35674:return lC;case 35675:return uC;case 35676:return cC;case 5124:case 35670:return fC;case 35667:case 35671:return dC;case 35668:case 35672:return hC;case 35669:case 35673:return pC;case 5125:return mC;case 36294:return gC;case 36295:return vC;case 36296:return _C;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return xC;case 35680:case 36300:case 36308:case 36293:return SC;case 36289:case 36303:case 36311:case 36292:return EC}}function TC(t,e){t.uniform1fv(this.addr,e)}function wC(t,e){const n=fo(e,this.size,2);t.uniform2fv(this.addr,n)}function bC(t,e){const n=fo(e,this.size,3);t.uniform3fv(this.addr,n)}function AC(t,e){const n=fo(e,this.size,4);t.uniform4fv(this.addr,n)}function CC(t,e){const n=fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function RC(t,e){const n=fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function PC(t,e){const n=fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function LC(t,e){t.uniform1iv(this.addr,e)}function NC(t,e){t.uniform2iv(this.addr,e)}function DC(t,e){t.uniform3iv(this.addr,e)}function IC(t,e){t.uniform4iv(this.addr,e)}function UC(t,e){t.uniform1uiv(this.addr,e)}function OC(t,e){t.uniform2uiv(this.addr,e)}function FC(t,e){t.uniform3uiv(this.addr,e)}function kC(t,e){t.uniform4uiv(this.addr,e)}function zC(t,e,n){const i=this.cache,r=e.length,a=uc(n,r);Pt(i,a)||(t.uniform1iv(this.addr,a),Lt(i,a));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ex,a[o])}function BC(t,e,n){const i=this.cache,r=e.length,a=uc(n,r);Pt(i,a)||(t.uniform1iv(this.addr,a),Lt(i,a));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||wx,a[o])}function HC(t,e,n){const i=this.cache,r=e.length,a=uc(n,r);Pt(i,a)||(t.uniform1iv(this.addr,a),Lt(i,a));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||bx,a[o])}function GC(t,e,n){const i=this.cache,r=e.length,a=uc(n,r);Pt(i,a)||(t.uniform1iv(this.addr,a),Lt(i,a));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Tx,a[o])}function VC(t){switch(t){case 5126:return TC;case 35664:return wC;case 35665:return bC;case 35666:return AC;case 35674:return CC;case 35675:return RC;case 35676:return PC;case 5124:case 35670:return LC;case 35667:case 35671:return NC;case 35668:case 35672:return DC;case 35669:case 35673:return IC;case 5125:return UC;case 36294:return OC;case 36295:return FC;case 36296:return kC;case 35678:case 36198:case 36298:case 36306:case 35682:return zC;case 35679:case 36299:case 36307:return BC;case 35680:case 36300:case 36308:case 36293:return HC;case 36289:case 36303:case 36311:case 36292:return GC}}class WC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=MC(n.type)}}class XC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VC(n.type)}}class jC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,n[s.id],i)}}}const Af=/(\w+)(\])?(\[|\.)?/g;function Tv(t,e){t.seq.push(e),t.map[e.id]=e}function $C(t,e,n){const i=t.name,r=i.length;for(Af.lastIndex=0;;){const a=Af.exec(i),o=Af.lastIndex;let s=a[1];const l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===r){Tv(n,u===void 0?new WC(s,t,e):new XC(s,t,e));break}else{let d=n.map[s];d===void 0&&(d=new jC(s),Tv(n,d)),n=d}}}class Ql{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),o=e.getUniformLocation(n,a.name);$C(a,o,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function wv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const YC=37297;let qC=0;function KC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}function QC(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===Iu&&n===Du?i="LinearDisplayP3ToLinearSRGB":e===Du&&n===Iu&&(i="LinearSRGBToLinearDisplayP3"),t){case Ii:case ac:return[i,"LinearTransferOETF"];case zt:case lp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function bv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+KC(t.getShaderSource(e),o)}else return r}function ZC(t,e){const n=QC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function JC(t,e){let n;switch(e){case lw:n="Linear";break;case uw:n="Reinhard";break;case cw:n="OptimizedCineon";break;case fw:n="ACESFilmic";break;case hw:n="AgX";break;case dw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function eR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oa).join(`
`)}function tR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function nR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function iR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function Oa(t){return t!==""}function Av(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(t){return t.replace(rR,oR)}const aR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function oR(t,e){let n=Oe[e];if(n===void 0){const i=aR.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kd(n)}const sR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rv(t){return t.replace(sR,lR)}function lR(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Pv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ky?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===OT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function cR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function dR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Qy:e="ENVMAP_BLENDING_MULTIPLY";break;case ow:e="ENVMAP_BLENDING_MIX";break;case sw:e="ENVMAP_BLENDING_ADD";break}return e}function hR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function pR(t,e,n,i){const r=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=uR(n),u=cR(n),c=fR(n),d=dR(n),h=hR(n),m=n.isWebGL2?"":eR(n),_=tR(n),y=nR(a),p=r.createProgram();let f,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Oa).join(`
`),f.length>0&&(f+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Oa).join(`
`),v.length>0&&(v+=`
`)):(f=[Pv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),v=[m,Pv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cr?"#define TONE_MAPPING":"",n.toneMapping!==cr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==cr?JC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,ZC("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oa).join(`
`)),o=Kd(o),o=Av(o,n),o=Cv(o,n),s=Kd(s),s=Av(s,n),s=Cv(s,n),o=Rv(o),s=Rv(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=g+f+o,A=g+v+s,b=wv(r,r.VERTEX_SHADER,S),T=wv(r,r.FRAGMENT_SHADER,A);r.attachShader(p,b),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function N(X){if(t.debug.checkShaderErrors){const K=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(b).trim(),W=r.getShaderInfoLog(T).trim();let V=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,b,T);else{const L=bv(r,b,"vertex"),U=bv(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+K+`
`+L+`
`+U)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(P===""||W==="")&&(Y=!1);Y&&(X.diagnostics={runnable:V,programLog:K,vertexShader:{log:P,prefix:f},fragmentShader:{log:W,prefix:v}})}r.deleteShader(b),r.deleteShader(T),j=new Ql(r,p),x=iR(r,p)}let j;this.getUniforms=function(){return j===void 0&&N(this),j};let x;this.getAttributes=function(){return x===void 0&&N(this),x};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(p,YC)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qC++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=T,this}let mR=0;class gR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new vR(e),n.set(e,i)),i}}class vR{constructor(e){this.id=mR++,this.code=e,this.usedTimes=0}}function _R(t,e,n,i,r,a,o){const s=new dx,l=new gR,u=new Set,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return u.add(x),x===0?"uv":`uv${x}`}function f(x,R,X,K,P){const W=K.fog,V=P.geometry,Y=x.isMeshStandardMaterial?K.environment:null,L=(x.isMeshStandardMaterial?n:e).get(x.envMap||Y),U=L&&L.mapping===rc?L.image.height:null,B=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const $=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=$!==void 0?$.length:0;let Te=0;V.morphAttributes.position!==void 0&&(Te=1),V.morphAttributes.normal!==void 0&&(Te=2),V.morphAttributes.color!==void 0&&(Te=3);let H,q,le,ye;if(B){const tt=ei[B];H=tt.vertexShader,q=tt.fragmentShader}else H=x.vertexShader,q=x.fragmentShader,l.update(x),le=l.getVertexShaderID(x),ye=l.getFragmentShaderID(x);const we=t.getRenderTarget(),ge=P.isInstancedMesh===!0,je=P.isBatchedMesh===!0,Ne=!!x.map,I=!!x.matcap,Ot=!!L,Ee=!!x.aoMap,Re=!!x.lightMap,xe=!!x.bumpMap,dt=!!x.normalMap,Ie=!!x.displacementMap,w=!!x.emissiveMap,E=!!x.metalnessMap,O=!!x.roughnessMap,ne=x.anisotropy>0,Q=x.clearcoat>0,te=x.iridescence>0,ve=x.sheen>0,oe=x.transmission>0,de=ne&&!!x.anisotropyMap,Ae=Q&&!!x.clearcoatMap,Fe=Q&&!!x.clearcoatNormalMap,Z=Q&&!!x.clearcoatRoughnessMap,Qe=te&&!!x.iridescenceMap,He=te&&!!x.iridescenceThicknessMap,Pe=ve&&!!x.sheenColorMap,Se=ve&&!!x.sheenRoughnessMap,he=!!x.specularMap,Ue=!!x.specularColorMap,Ye=!!x.specularIntensityMap,rt=oe&&!!x.transmissionMap,Ve=oe&&!!x.thicknessMap,et=!!x.gradientMap,C=!!x.alphaMap,ie=x.alphaTest>0,re=!!x.alphaHash,me=!!x.extensions;let Me=cr;x.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Me=t.toneMapping);const qe={isWebGL2:d,shaderID:B,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:q,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:je,instancing:ge,instancingColor:ge&&P.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Ii,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:I,envMap:Ot,envMapMode:Ot&&L.mapping,envMapCubeUVHeight:U,aoMap:Ee,lightMap:Re,bumpMap:xe,normalMap:dt,displacementMap:m&&Ie,emissiveMap:w,normalMapObjectSpace:dt&&x.normalMapType===ww,normalMapTangentSpace:dt&&x.normalMapType===Tw,metalnessMap:E,roughnessMap:O,anisotropy:ne,anisotropyMap:de,clearcoat:Q,clearcoatMap:Ae,clearcoatNormalMap:Fe,clearcoatRoughnessMap:Z,iridescence:te,iridescenceMap:Qe,iridescenceThicknessMap:He,sheen:ve,sheenColorMap:Pe,sheenRoughnessMap:Se,specularMap:he,specularColorMap:Ue,specularIntensityMap:Ye,transmission:oe,transmissionMap:rt,thicknessMap:Ve,gradientMap:et,opaque:x.transparent===!1&&x.blending===Wa&&x.alphaToCoverage===!1,alphaMap:C,alphaTest:ie,alphaHash:re,combine:x.combine,mapUv:Ne&&p(x.map.channel),aoMapUv:Ee&&p(x.aoMap.channel),lightMapUv:Re&&p(x.lightMap.channel),bumpMapUv:xe&&p(x.bumpMap.channel),normalMapUv:dt&&p(x.normalMap.channel),displacementMapUv:Ie&&p(x.displacementMap.channel),emissiveMapUv:w&&p(x.emissiveMap.channel),metalnessMapUv:E&&p(x.metalnessMap.channel),roughnessMapUv:O&&p(x.roughnessMap.channel),anisotropyMapUv:de&&p(x.anisotropyMap.channel),clearcoatMapUv:Ae&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&p(x.sheenRoughnessMap.channel),specularMapUv:he&&p(x.specularMap.channel),specularColorMapUv:Ue&&p(x.specularColorMap.channel),specularIntensityMapUv:Ye&&p(x.specularIntensityMap.channel),transmissionMapUv:rt&&p(x.transmissionMap.channel),thicknessMapUv:Ve&&p(x.thicknessMap.channel),alphaMapUv:C&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(dt||ne),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!V.attributes.uv&&(Ne||C),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:Me,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Si,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:me&&x.extensions.derivatives===!0,extensionFragDepth:me&&x.extensions.fragDepth===!0,extensionDrawBuffers:me&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:me&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qe.vertexUv1s=u.has(1),qe.vertexUv2s=u.has(2),qe.vertexUv3s=u.has(3),u.clear(),qe}function v(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const X in x.defines)R.push(X),R.push(x.defines[X]);return x.isRawShaderMaterial===!1&&(g(R,x),S(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function g(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function S(x,R){s.disableAll(),R.isWebGL2&&s.enable(0),R.supportsVertexTextures&&s.enable(1),R.instancing&&s.enable(2),R.instancingColor&&s.enable(3),R.matcap&&s.enable(4),R.envMap&&s.enable(5),R.normalMapObjectSpace&&s.enable(6),R.normalMapTangentSpace&&s.enable(7),R.clearcoat&&s.enable(8),R.iridescence&&s.enable(9),R.alphaTest&&s.enable(10),R.vertexColors&&s.enable(11),R.vertexAlphas&&s.enable(12),R.vertexUv1s&&s.enable(13),R.vertexUv2s&&s.enable(14),R.vertexUv3s&&s.enable(15),R.vertexTangents&&s.enable(16),R.anisotropy&&s.enable(17),R.alphaHash&&s.enable(18),R.batching&&s.enable(19),x.push(s.mask),s.disableAll(),R.fog&&s.enable(0),R.useFog&&s.enable(1),R.flatShading&&s.enable(2),R.logarithmicDepthBuffer&&s.enable(3),R.skinning&&s.enable(4),R.morphTargets&&s.enable(5),R.morphNormals&&s.enable(6),R.morphColors&&s.enable(7),R.premultipliedAlpha&&s.enable(8),R.shadowMapEnabled&&s.enable(9),R.useLegacyLights&&s.enable(10),R.doubleSided&&s.enable(11),R.flipSided&&s.enable(12),R.useDepthPacking&&s.enable(13),R.dithering&&s.enable(14),R.transmission&&s.enable(15),R.sheen&&s.enable(16),R.opaque&&s.enable(17),R.pointsUvs&&s.enable(18),R.decodeVideoTexture&&s.enable(19),R.alphaToCoverage&&s.enable(20),x.push(s.mask)}function A(x){const R=y[x.type];let X;if(R){const K=ei[R];X=Jw.clone(K.uniforms)}else X=x.uniforms;return X}function b(x,R){let X;for(let K=0,P=c.length;K<P;K++){const W=c[K];if(W.cacheKey===R){X=W,++X.usedTimes;break}}return X===void 0&&(X=new pR(t,R,x,a),c.push(X)),X}function T(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),x.destroy()}}function N(x){l.remove(x)}function j(){l.dispose()}return{getParameters:f,getProgramCacheKey:v,getUniforms:A,acquireProgram:b,releaseProgram:T,releaseShaderCache:N,programs:c,dispose:j}}function yR(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function i(a,o,s){t.get(a)[o]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function xR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Nv(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,_,y,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:y,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=y,f.group=p),e++,f}function s(d,h,m,_,y,p){const f=o(d,h,m,_,y,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(d,h,m,_,y,p){const f=o(d,h,m,_,y,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||xR),i.length>1&&i.sort(h||Lv),r.length>1&&r.sort(h||Lv)}function c(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:c,sort:u}}function SR(){let t=new WeakMap;function e(i,r){const a=t.get(i);let o;return a===void 0?(o=new Nv,t.set(i,[o])):r>=a.length?(o=new Nv,a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ER(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Je};break;case"SpotLight":n={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function MR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let TR=0;function wR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function bR(t,e){const n=new ER,i=MR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new z);const a=new z,o=new Gt,s=new Gt;function l(c,d){let h=0,m=0,_=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let y=0,p=0,f=0,v=0,g=0,S=0,A=0,b=0,T=0,N=0,j=0;c.sort(wR);const x=d===!0?Math.PI:1;for(let X=0,K=c.length;X<K;X++){const P=c[X],W=P.color,V=P.intensity,Y=P.distance,L=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=W.r*V*x,m+=W.g*V*x,_+=W.b*V*x;else if(P.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(P.sh.coefficients[U],V);j++}else if(P.isDirectionalLight){const U=n.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const B=P.shadow,$=i.get(P);$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,r.directionalShadow[y]=$,r.directionalShadowMap[y]=L,r.directionalShadowMatrix[y]=P.shadow.matrix,S++}r.directional[y]=U,y++}else if(P.isSpotLight){const U=n.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(W).multiplyScalar(V*x),U.distance=Y,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,r.spot[f]=U;const B=P.shadow;if(P.map&&(r.spotLightMap[T]=P.map,T++,B.updateMatrices(P),P.castShadow&&N++),r.spotLightMatrix[f]=B.matrix,P.castShadow){const $=i.get(P);$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=L,b++}f++}else if(P.isRectAreaLight){const U=n.get(P);U.color.copy(W).multiplyScalar(V),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=U,v++}else if(P.isPointLight){const U=n.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity*x),U.distance=P.distance,U.decay=P.decay,P.castShadow){const B=P.shadow,$=i.get(P);$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,r.pointShadow[p]=$,r.pointShadowMap[p]=L,r.pointShadowMatrix[p]=P.shadow.matrix,A++}r.point[p]=U,p++}else if(P.isHemisphereLight){const U=n.get(P);U.skyColor.copy(P.color).multiplyScalar(V*x),U.groundColor.copy(P.groundColor).multiplyScalar(V*x),r.hemi[g]=U,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const R=r.hash;(R.directionalLength!==y||R.pointLength!==p||R.spotLength!==f||R.rectAreaLength!==v||R.hemiLength!==g||R.numDirectionalShadows!==S||R.numPointShadows!==A||R.numSpotShadows!==b||R.numSpotMaps!==T||R.numLightProbes!==j)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=b+T-N,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=j,R.directionalLength=y,R.pointLength=p,R.spotLength=f,R.rectAreaLength=v,R.hemiLength=g,R.numDirectionalShadows=S,R.numPointShadows=A,R.numSpotShadows=b,R.numSpotMaps=T,R.numLightProbes=j,r.version=TR++)}function u(c,d){let h=0,m=0,_=0,y=0,p=0;const f=d.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const S=c[v];if(S.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(f),h++}else if(S.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(f),_++}else if(S.isRectAreaLight){const A=r.rectArea[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),s.identity(),o.copy(S.matrixWorld),o.premultiply(f),s.extractRotation(o),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(s),A.halfHeight.applyMatrix4(s),y++}else if(S.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(f),p++}}}return{setup:l,setupView:u,state:r}}function Dv(t,e){const n=new bR(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(d){i.push(d)}function s(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function AR(t,e){let n=new WeakMap;function i(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new Dv(t,e),n.set(a,[l])):o>=s.length?(l=new Dv(t,e),s.push(l)):l=s[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class CR extends sc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ew,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RR extends sc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NR(t,e,n){let i=new yx;const r=new $e,a=new $e,o=new Bt,s=new CR({depthPacking:Mw}),l=new RR,u={},c=n.maxTextureSize,d={[vr]:pn,[pn]:vr,[Si]:Si},h=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:PR,fragmentShader:LR}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Er;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ai(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ky;let f=this.type;this.render=function(b,T,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const j=t.getRenderTarget(),x=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),X=t.state;X.setBlending(ur),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const K=f!==_i&&this.type===_i,P=f===_i&&this.type!==_i;for(let W=0,V=b.length;W<V;W++){const Y=b[W],L=Y.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const U=L.getFrameExtents();if(r.multiply(U),a.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(a.x=Math.floor(c/U.x),r.x=a.x*U.x,L.mapSize.x=a.x),r.y>c&&(a.y=Math.floor(c/U.y),r.y=a.y*U.y,L.mapSize.y=a.y)),L.map===null||K===!0||P===!0){const $=this.type!==_i?{minFilter:tn,magFilter:tn}:{};L.map!==null&&L.map.dispose(),L.map=new ea(r.x,r.y,$),L.map.texture.name=Y.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const B=L.getViewportCount();for(let $=0;$<B;$++){const ee=L.getViewport($);o.set(a.x*ee.x,a.y*ee.y,a.x*ee.z,a.y*ee.w),X.viewport(o),L.updateMatrices(Y,$),i=L.getFrustum(),S(T,N,L.camera,Y,this.type)}L.isPointLightShadow!==!0&&this.type===_i&&v(L,N),L.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(j,x,R)};function v(b,T){const N=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ea(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,N,h,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,N,m,y,null)}function g(b,T,N,j){let x=null;const R=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)x=R;else if(x=N.isPointLight===!0?l:s,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=x.uuid,K=T.uuid;let P=u[X];P===void 0&&(P={},u[X]=P);let W=P[K];W===void 0&&(W=x.clone(),P[K]=W,T.addEventListener("dispose",A)),x=W}if(x.visible=T.visible,x.wireframe=T.wireframe,j===_i?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=t.properties.get(x);X.light=N}return x}function S(b,T,N,j,x){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===_i)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const K=e.update(b),P=b.material;if(Array.isArray(P)){const W=K.groups;for(let V=0,Y=W.length;V<Y;V++){const L=W[V],U=P[L.materialIndex];if(U&&U.visible){const B=g(b,U,j,x);b.onBeforeShadow(t,b,T,N,K,B,L),t.renderBufferDirect(N,null,K,B,b,L),b.onAfterShadow(t,b,T,N,K,B,L)}}}else if(P.visible){const W=g(b,P,j,x);b.onBeforeShadow(t,b,T,N,K,W,null),t.renderBufferDirect(N,null,K,W,b,null),b.onAfterShadow(t,b,T,N,K,W,null)}}const X=b.children;for(let K=0,P=X.length;K<P;K++)S(X[K],T,N,j,x)}function A(b){b.target.removeEventListener("dispose",A);for(const N in u){const j=u[N],x=b.target.uuid;x in j&&(j[x].dispose(),delete j[x])}}}function DR(t,e,n){const i=n.isWebGL2;function r(){let C=!1;const ie=new Bt;let re=null;const me=new Bt(0,0,0,0);return{setMask:function(Me){re!==Me&&!C&&(t.colorMask(Me,Me,Me,Me),re=Me)},setLocked:function(Me){C=Me},setClear:function(Me,qe,tt,Ft,An){An===!0&&(Me*=Ft,qe*=Ft,tt*=Ft),ie.set(Me,qe,tt,Ft),me.equals(ie)===!1&&(t.clearColor(Me,qe,tt,Ft),me.copy(ie))},reset:function(){C=!1,re=null,me.set(-1,0,0,0)}}}function a(){let C=!1,ie=null,re=null,me=null;return{setTest:function(Me){Me?ge(t.DEPTH_TEST):je(t.DEPTH_TEST)},setMask:function(Me){ie!==Me&&!C&&(t.depthMask(Me),ie=Me)},setFunc:function(Me){if(re!==Me){switch(Me){case JT:t.depthFunc(t.NEVER);break;case ew:t.depthFunc(t.ALWAYS);break;case tw:t.depthFunc(t.LESS);break;case Lu:t.depthFunc(t.LEQUAL);break;case nw:t.depthFunc(t.EQUAL);break;case iw:t.depthFunc(t.GEQUAL);break;case rw:t.depthFunc(t.GREATER);break;case aw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=Me}},setLocked:function(Me){C=Me},setClear:function(Me){me!==Me&&(t.clearDepth(Me),me=Me)},reset:function(){C=!1,ie=null,re=null,me=null}}}function o(){let C=!1,ie=null,re=null,me=null,Me=null,qe=null,tt=null,Ft=null,An=null;return{setTest:function(nt){C||(nt?ge(t.STENCIL_TEST):je(t.STENCIL_TEST))},setMask:function(nt){ie!==nt&&!C&&(t.stencilMask(nt),ie=nt)},setFunc:function(nt,Zt,Qn){(re!==nt||me!==Zt||Me!==Qn)&&(t.stencilFunc(nt,Zt,Qn),re=nt,me=Zt,Me=Qn)},setOp:function(nt,Zt,Qn){(qe!==nt||tt!==Zt||Ft!==Qn)&&(t.stencilOp(nt,Zt,Qn),qe=nt,tt=Zt,Ft=Qn)},setLocked:function(nt){C=nt},setClear:function(nt){An!==nt&&(t.clearStencil(nt),An=nt)},reset:function(){C=!1,ie=null,re=null,me=null,Me=null,qe=null,tt=null,Ft=null,An=null}}}const s=new r,l=new a,u=new o,c=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,y=[],p=null,f=!1,v=null,g=null,S=null,A=null,b=null,T=null,N=null,j=new Je(0,0,0),x=0,R=!1,X=null,K=null,P=null,W=null,V=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,U=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(B)[1]),L=U>=1):B.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),L=U>=2);let $=null,ee={};const Te=t.getParameter(t.SCISSOR_BOX),H=t.getParameter(t.VIEWPORT),q=new Bt().fromArray(Te),le=new Bt().fromArray(H);function ye(C,ie,re,me){const Me=new Uint8Array(4),qe=t.createTexture();t.bindTexture(C,qe),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<re;tt++)i&&(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)?t.texImage3D(ie,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(ie+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return qe}const we={};we[t.TEXTURE_2D]=ye(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[t.TEXTURE_2D_ARRAY]=ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ge(t.DEPTH_TEST),l.setFunc(Lu),Ie(!1),w(dg),ge(t.CULL_FACE),xe(ur);function ge(C){h[C]!==!0&&(t.enable(C),h[C]=!0)}function je(C){h[C]!==!1&&(t.disable(C),h[C]=!1)}function Ne(C,ie){return m[C]!==ie?(t.bindFramebuffer(C,ie),m[C]=ie,i&&(C===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ie),C===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ie)),!0):!1}function I(C,ie){let re=y,me=!1;if(C)if(re=_.get(ie),re===void 0&&(re=[],_.set(ie,re)),C.isWebGLMultipleRenderTargets){const Me=C.texture;if(re.length!==Me.length||re[0]!==t.COLOR_ATTACHMENT0){for(let qe=0,tt=Me.length;qe<tt;qe++)re[qe]=t.COLOR_ATTACHMENT0+qe;re.length=Me.length,me=!0}}else re[0]!==t.COLOR_ATTACHMENT0&&(re[0]=t.COLOR_ATTACHMENT0,me=!0);else re[0]!==t.BACK&&(re[0]=t.BACK,me=!0);me&&(n.isWebGL2?t.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Ot(C){return p!==C?(t.useProgram(C),p=C,!0):!1}const Ee={[Ir]:t.FUNC_ADD,[kT]:t.FUNC_SUBTRACT,[zT]:t.FUNC_REVERSE_SUBTRACT};if(i)Ee[gg]=t.MIN,Ee[vg]=t.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(Ee[gg]=C.MIN_EXT,Ee[vg]=C.MAX_EXT)}const Re={[BT]:t.ZERO,[HT]:t.ONE,[GT]:t.SRC_COLOR,[Hd]:t.SRC_ALPHA,[YT]:t.SRC_ALPHA_SATURATE,[jT]:t.DST_COLOR,[WT]:t.DST_ALPHA,[VT]:t.ONE_MINUS_SRC_COLOR,[Gd]:t.ONE_MINUS_SRC_ALPHA,[$T]:t.ONE_MINUS_DST_COLOR,[XT]:t.ONE_MINUS_DST_ALPHA,[qT]:t.CONSTANT_COLOR,[KT]:t.ONE_MINUS_CONSTANT_COLOR,[QT]:t.CONSTANT_ALPHA,[ZT]:t.ONE_MINUS_CONSTANT_ALPHA};function xe(C,ie,re,me,Me,qe,tt,Ft,An,nt){if(C===ur){f===!0&&(je(t.BLEND),f=!1);return}if(f===!1&&(ge(t.BLEND),f=!0),C!==FT){if(C!==v||nt!==R){if((g!==Ir||b!==Ir)&&(t.blendEquation(t.FUNC_ADD),g=Ir,b=Ir),nt)switch(C){case Wa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hg:t.blendFunc(t.ONE,t.ONE);break;case pg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Wa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,A=null,T=null,N=null,j.set(0,0,0),x=0,v=C,R=nt}return}Me=Me||ie,qe=qe||re,tt=tt||me,(ie!==g||Me!==b)&&(t.blendEquationSeparate(Ee[ie],Ee[Me]),g=ie,b=Me),(re!==S||me!==A||qe!==T||tt!==N)&&(t.blendFuncSeparate(Re[re],Re[me],Re[qe],Re[tt]),S=re,A=me,T=qe,N=tt),(Ft.equals(j)===!1||An!==x)&&(t.blendColor(Ft.r,Ft.g,Ft.b,An),j.copy(Ft),x=An),v=C,R=!1}function dt(C,ie){C.side===Si?je(t.CULL_FACE):ge(t.CULL_FACE);let re=C.side===pn;ie&&(re=!re),Ie(re),C.blending===Wa&&C.transparent===!1?xe(ur):xe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),s.setMask(C.colorWrite);const me=C.stencilWrite;u.setTest(me),me&&(u.setMask(C.stencilWriteMask),u.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),u.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),O(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):je(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(C){X!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),X=C)}function w(C){C!==IT?(ge(t.CULL_FACE),C!==K&&(C===dg?t.cullFace(t.BACK):C===UT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):je(t.CULL_FACE),K=C}function E(C){C!==P&&(L&&t.lineWidth(C),P=C)}function O(C,ie,re){C?(ge(t.POLYGON_OFFSET_FILL),(W!==ie||V!==re)&&(t.polygonOffset(ie,re),W=ie,V=re)):je(t.POLYGON_OFFSET_FILL)}function ne(C){C?ge(t.SCISSOR_TEST):je(t.SCISSOR_TEST)}function Q(C){C===void 0&&(C=t.TEXTURE0+Y-1),$!==C&&(t.activeTexture(C),$=C)}function te(C,ie,re){re===void 0&&($===null?re=t.TEXTURE0+Y-1:re=$);let me=ee[re];me===void 0&&(me={type:void 0,texture:void 0},ee[re]=me),(me.type!==C||me.texture!==ie)&&($!==re&&(t.activeTexture(re),$=re),t.bindTexture(C,ie||we[C]),me.type=C,me.texture=ie)}function ve(){const C=ee[$];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function oe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{t.compressedTexImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pe(){try{t.texStorage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(C){q.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),q.copy(C))}function Ye(C){le.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),le.copy(C))}function rt(C,ie){let re=d.get(ie);re===void 0&&(re=new WeakMap,d.set(ie,re));let me=re.get(C);me===void 0&&(me=t.getUniformBlockIndex(ie,C.name),re.set(C,me))}function Ve(C,ie){const me=d.get(ie).get(C);c.get(ie)!==me&&(t.uniformBlockBinding(ie,me,C.__bindingPointIndex),c.set(ie,me))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},$=null,ee={},m={},_=new WeakMap,y=[],p=null,f=!1,v=null,g=null,S=null,A=null,b=null,T=null,N=null,j=new Je(0,0,0),x=0,R=!1,X=null,K=null,P=null,W=null,V=null,q.set(0,0,t.canvas.width,t.canvas.height),le.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:ge,disable:je,bindFramebuffer:Ne,drawBuffers:I,useProgram:Ot,setBlending:xe,setMaterial:dt,setFlipSided:Ie,setCullFace:w,setLineWidth:E,setPolygonOffset:O,setScissorTest:ne,activeTexture:Q,bindTexture:te,unbindTexture:ve,compressedTexImage2D:oe,compressedTexImage3D:de,texImage2D:Se,texImage3D:he,updateUBOMapping:rt,uniformBlockBinding:Ve,texStorage2D:He,texStorage3D:Pe,texSubImage2D:Ae,texSubImage3D:Fe,compressedTexSubImage2D:Z,compressedTexSubImage3D:Qe,scissor:Ue,viewport:Ye,reset:et}}function IR(t,e,n,i,r,a,o){const s=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,E){return m?new OffscreenCanvas(w,E):Ou("canvas")}function y(w,E,O,ne){let Q=1;if((w.width>ne||w.height>ne)&&(Q=ne/Math.max(w.width,w.height)),Q<1||E===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const te=E?qd:Math.floor,ve=te(Q*w.width),oe=te(Q*w.height);d===void 0&&(d=_(ve,oe));const de=O?_(ve,oe):d;return de.width=ve,de.height=oe,de.getContext("2d").drawImage(w,0,0,ve,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ve+"x"+oe+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return $g(w.width)&&$g(w.height)}function f(w){return s?!1:w.wrapS!==Xn||w.wrapT!==Xn||w.minFilter!==tn&&w.minFilter!==sn}function v(w,E){return w.generateMipmaps&&E&&w.minFilter!==tn&&w.minFilter!==sn}function g(w){t.generateMipmap(w)}function S(w,E,O,ne,Q=!1){if(s===!1)return E;if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=E;if(E===t.RED&&(O===t.FLOAT&&(te=t.R32F),O===t.HALF_FLOAT&&(te=t.R16F),O===t.UNSIGNED_BYTE&&(te=t.R8)),E===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(te=t.R8UI),O===t.UNSIGNED_SHORT&&(te=t.R16UI),O===t.UNSIGNED_INT&&(te=t.R32UI),O===t.BYTE&&(te=t.R8I),O===t.SHORT&&(te=t.R16I),O===t.INT&&(te=t.R32I)),E===t.RG&&(O===t.FLOAT&&(te=t.RG32F),O===t.HALF_FLOAT&&(te=t.RG16F),O===t.UNSIGNED_BYTE&&(te=t.RG8)),E===t.RGBA){const ve=Q?Nu:Ze.getTransfer(ne);O===t.FLOAT&&(te=t.RGBA32F),O===t.HALF_FLOAT&&(te=t.RGBA16F),O===t.UNSIGNED_BYTE&&(te=ve===ot?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function A(w,E,O){return v(w,O)===!0||w.isFramebufferTexture&&w.minFilter!==tn&&w.minFilter!==sn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function b(w){return w===tn||w===_g||w===Mo?t.NEAREST:t.LINEAR}function T(w){const E=w.target;E.removeEventListener("dispose",T),j(E),E.isVideoTexture&&c.delete(E)}function N(w){const E=w.target;E.removeEventListener("dispose",N),R(E)}function j(w){const E=i.get(w);if(E.__webglInit===void 0)return;const O=w.source,ne=h.get(O);if(ne){const Q=ne[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(w),Object.keys(ne).length===0&&h.delete(O)}i.remove(w)}function x(w){const E=i.get(w);t.deleteTexture(E.__webglTexture);const O=w.source,ne=h.get(O);delete ne[E.__cacheKey],o.memory.textures--}function R(w){const E=w.texture,O=i.get(w),ne=i.get(E);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(O.__webglFramebuffer[Q]))for(let te=0;te<O.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(O.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(O.__webglFramebuffer[Q]);O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[Q])}else{if(Array.isArray(O.__webglFramebuffer))for(let Q=0;Q<O.__webglFramebuffer.length;Q++)t.deleteFramebuffer(O.__webglFramebuffer[Q]);else t.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,te=E.length;Q<te;Q++){const ve=i.get(E[Q]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(E[Q])}i.remove(E),i.remove(w)}let X=0;function K(){X=0}function P(){const w=X;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),X+=1,w}function W(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function V(w,E){const O=i.get(w);if(w.isVideoTexture&&dt(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const ne=w.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,w,E);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+E)}function Y(w,E){const O=i.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+E)}function L(w,E){const O=i.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,E);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+E)}function U(w,E){const O=i.get(w);if(w.version>0&&O.__version!==w.version){le(O,w,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+E)}const B={[Xd]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[jd]:t.MIRRORED_REPEAT},$={[tn]:t.NEAREST,[_g]:t.NEAREST_MIPMAP_NEAREST,[Mo]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Qc]:t.LINEAR_MIPMAP_NEAREST,[Hr]:t.LINEAR_MIPMAP_LINEAR},ee={[bw]:t.NEVER,[Nw]:t.ALWAYS,[Aw]:t.LESS,[sx]:t.LEQUAL,[Cw]:t.EQUAL,[Lw]:t.GEQUAL,[Rw]:t.GREATER,[Pw]:t.NOTEQUAL};function Te(w,E,O){if(E.type===Ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===sn||E.magFilter===Qc||E.magFilter===Mo||E.magFilter===Hr||E.minFilter===sn||E.minFilter===Qc||E.minFilter===Mo||E.minFilter===Hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),O?(t.texParameteri(w,t.TEXTURE_WRAP_S,B[E.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,B[E.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,B[E.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,$[E.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,$[E.minFilter])):(t.texParameteri(w,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(w,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Xn||E.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(w,t.TEXTURE_MAG_FILTER,b(E.magFilter)),t.texParameteri(w,t.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==tn&&E.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,ee[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===tn||E.minFilter!==Mo&&E.minFilter!==Hr||E.type===Ei&&e.has("OES_texture_float_linear")===!1||s===!1&&E.type===hs&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(w,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function H(w,E){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",T));const ne=E.source;let Q=h.get(ne);Q===void 0&&(Q={},h.set(ne,Q));const te=W(E);if(te!==w.__cacheKey){Q[te]===void 0&&(Q[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[te].usedTimes++;const ve=Q[w.__cacheKey];ve!==void 0&&(Q[w.__cacheKey].usedTimes--,ve.usedTimes===0&&x(E)),w.__cacheKey=te,w.__webglTexture=Q[te].texture}return O}function q(w,E,O){let ne=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=t.TEXTURE_3D);const Q=H(w,E),te=E.source;n.bindTexture(ne,w.__webglTexture,t.TEXTURE0+O);const ve=i.get(te);if(te.version!==ve.__version||Q===!0){n.activeTexture(t.TEXTURE0+O);const oe=Ze.getPrimaries(Ze.workingColorSpace),de=E.colorSpace===Dn?null:Ze.getPrimaries(E.colorSpace),Ae=E.colorSpace===Dn||oe===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Fe=f(E)&&p(E.image)===!1;let Z=y(E.image,Fe,!1,r.maxTextureSize);Z=Ie(E,Z);const Qe=p(Z)||s,He=a.convert(E.format,E.colorSpace);let Pe=a.convert(E.type),Se=S(E.internalFormat,He,Pe,E.colorSpace,E.isVideoTexture);Te(ne,E,Qe);let he;const Ue=E.mipmaps,Ye=s&&E.isVideoTexture!==!0&&Se!==ax,rt=ve.__version===void 0||Q===!0,Ve=te.dataReady,et=A(E,Z,Qe);if(E.isDepthTexture)Se=t.DEPTH_COMPONENT,s?E.type===Ei?Se=t.DEPTH_COMPONENT32F:E.type===er?Se=t.DEPTH_COMPONENT24:E.type===Wr?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:E.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Xr&&Se===t.DEPTH_COMPONENT&&E.type!==sp&&E.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=er,Pe=a.convert(E.type)),E.format===io&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,E.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Wr,Pe=a.convert(E.type))),rt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Se,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,Se,Z.width,Z.height,0,He,Pe,null));else if(E.isDataTexture)if(Ue.length>0&&Qe){Ye&&rt&&n.texStorage2D(t.TEXTURE_2D,et,Se,Ue[0].width,Ue[0].height);for(let C=0,ie=Ue.length;C<ie;C++)he=Ue[C],Ye?Ve&&n.texSubImage2D(t.TEXTURE_2D,C,0,0,he.width,he.height,He,Pe,he.data):n.texImage2D(t.TEXTURE_2D,C,Se,he.width,he.height,0,He,Pe,he.data);E.generateMipmaps=!1}else Ye?(rt&&n.texStorage2D(t.TEXTURE_2D,et,Se,Z.width,Z.height),Ve&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Z.width,Z.height,He,Pe,Z.data)):n.texImage2D(t.TEXTURE_2D,0,Se,Z.width,Z.height,0,He,Pe,Z.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,et,Se,Ue[0].width,Ue[0].height,Z.depth);for(let C=0,ie=Ue.length;C<ie;C++)he=Ue[C],E.format!==jn?He!==null?Ye?Ve&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,C,0,0,0,he.width,he.height,Z.depth,He,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,C,Se,he.width,he.height,Z.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Ve&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,C,0,0,0,he.width,he.height,Z.depth,He,Pe,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,C,Se,he.width,he.height,Z.depth,0,He,Pe,he.data)}else{Ye&&rt&&n.texStorage2D(t.TEXTURE_2D,et,Se,Ue[0].width,Ue[0].height);for(let C=0,ie=Ue.length;C<ie;C++)he=Ue[C],E.format!==jn?He!==null?Ye?Ve&&n.compressedTexSubImage2D(t.TEXTURE_2D,C,0,0,he.width,he.height,He,he.data):n.compressedTexImage2D(t.TEXTURE_2D,C,Se,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Ve&&n.texSubImage2D(t.TEXTURE_2D,C,0,0,he.width,he.height,He,Pe,he.data):n.texImage2D(t.TEXTURE_2D,C,Se,he.width,he.height,0,He,Pe,he.data)}else if(E.isDataArrayTexture)Ye?(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,et,Se,Z.width,Z.height,Z.depth),Ve&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,He,Pe,Z.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,Z.width,Z.height,Z.depth,0,He,Pe,Z.data);else if(E.isData3DTexture)Ye?(rt&&n.texStorage3D(t.TEXTURE_3D,et,Se,Z.width,Z.height,Z.depth),Ve&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,He,Pe,Z.data)):n.texImage3D(t.TEXTURE_3D,0,Se,Z.width,Z.height,Z.depth,0,He,Pe,Z.data);else if(E.isFramebufferTexture){if(rt)if(Ye)n.texStorage2D(t.TEXTURE_2D,et,Se,Z.width,Z.height);else{let C=Z.width,ie=Z.height;for(let re=0;re<et;re++)n.texImage2D(t.TEXTURE_2D,re,Se,C,ie,0,He,Pe,null),C>>=1,ie>>=1}}else if(Ue.length>0&&Qe){Ye&&rt&&n.texStorage2D(t.TEXTURE_2D,et,Se,Ue[0].width,Ue[0].height);for(let C=0,ie=Ue.length;C<ie;C++)he=Ue[C],Ye?Ve&&n.texSubImage2D(t.TEXTURE_2D,C,0,0,He,Pe,he):n.texImage2D(t.TEXTURE_2D,C,Se,He,Pe,he);E.generateMipmaps=!1}else Ye?(rt&&n.texStorage2D(t.TEXTURE_2D,et,Se,Z.width,Z.height),Ve&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,Pe,Z)):n.texImage2D(t.TEXTURE_2D,0,Se,He,Pe,Z);v(E,Qe)&&g(ne),ve.__version=te.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function le(w,E,O){if(E.image.length!==6)return;const ne=H(w,E),Q=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+O);const te=i.get(Q);if(Q.version!==te.__version||ne===!0){n.activeTexture(t.TEXTURE0+O);const ve=Ze.getPrimaries(Ze.workingColorSpace),oe=E.colorSpace===Dn?null:Ze.getPrimaries(E.colorSpace),de=E.colorSpace===Dn||ve===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ae=E.isCompressedTexture||E.image[0].isCompressedTexture,Fe=E.image[0]&&E.image[0].isDataTexture,Z=[];for(let C=0;C<6;C++)!Ae&&!Fe?Z[C]=y(E.image[C],!1,!0,r.maxCubemapSize):Z[C]=Fe?E.image[C].image:E.image[C],Z[C]=Ie(E,Z[C]);const Qe=Z[0],He=p(Qe)||s,Pe=a.convert(E.format,E.colorSpace),Se=a.convert(E.type),he=S(E.internalFormat,Pe,Se,E.colorSpace),Ue=s&&E.isVideoTexture!==!0,Ye=te.__version===void 0||ne===!0,rt=Q.dataReady;let Ve=A(E,Qe,He);Te(t.TEXTURE_CUBE_MAP,E,He);let et;if(Ae){Ue&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ve,he,Qe.width,Qe.height);for(let C=0;C<6;C++){et=Z[C].mipmaps;for(let ie=0;ie<et.length;ie++){const re=et[ie];E.format!==jn?Pe!==null?Ue?rt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie,0,0,re.width,re.height,Pe,re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie,he,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie,0,0,re.width,re.height,Pe,Se,re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie,he,re.width,re.height,0,Pe,Se,re.data)}}}else{et=E.mipmaps,Ue&&Ye&&(et.length>0&&Ve++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ve,he,Z[0].width,Z[0].height));for(let C=0;C<6;C++)if(Fe){Ue?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Z[C].width,Z[C].height,Pe,Se,Z[C].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,he,Z[C].width,Z[C].height,0,Pe,Se,Z[C].data);for(let ie=0;ie<et.length;ie++){const me=et[ie].image[C].image;Ue?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie+1,0,0,me.width,me.height,Pe,Se,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie+1,he,me.width,me.height,0,Pe,Se,me.data)}}else{Ue?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Pe,Se,Z[C]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,he,Pe,Se,Z[C]);for(let ie=0;ie<et.length;ie++){const re=et[ie];Ue?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie+1,0,0,Pe,Se,re.image[C]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie+1,he,Pe,Se,re.image[C])}}}v(E,He)&&g(t.TEXTURE_CUBE_MAP),te.__version=Q.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function ye(w,E,O,ne,Q,te){const ve=a.convert(O.format,O.colorSpace),oe=a.convert(O.type),de=S(O.internalFormat,ve,oe,O.colorSpace);if(!i.get(E).__hasExternalTextures){const Fe=Math.max(1,E.width>>te),Z=Math.max(1,E.height>>te);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,te,de,Fe,Z,E.depth,0,ve,oe,null):n.texImage2D(Q,te,de,Fe,Z,0,ve,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),xe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,Q,i.get(O).__webglTexture,0,Re(E)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,Q,i.get(O).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(w,E,O){if(t.bindRenderbuffer(t.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let ne=s===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(O||xe(E)){const Q=E.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ei?ne=t.DEPTH_COMPONENT32F:Q.type===er&&(ne=t.DEPTH_COMPONENT24));const te=Re(E);xe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,ne,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,ne,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){const ne=Re(E);O&&xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,E.width,E.height):xe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,w)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0;Q<ne.length;Q++){const te=ne[Q],ve=a.convert(te.format,te.colorSpace),oe=a.convert(te.type),de=S(te.internalFormat,ve,oe,te.colorSpace),Ae=Re(E);O&&xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,de,E.width,E.height):xe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,de,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,de,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ge(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const ne=i.get(E.depthTexture).__webglTexture,Q=Re(E);if(E.depthTexture.format===Xr)xe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(E.depthTexture.format===io)xe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function je(w){const E=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ge(E.__webglFramebuffer,w)}else if(O){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=t.createRenderbuffer(),we(E.__webglDepthbuffer[ne],w,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),we(E.__webglDepthbuffer,w,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(w,E,O){const ne=i.get(w);E!==void 0&&ye(ne.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&je(w)}function I(w){const E=w.texture,O=i.get(w),ne=i.get(E);w.addEventListener("dispose",N),w.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=E.version,o.memory.textures++);const Q=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,ve=p(w)||s;if(Q){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(s&&E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let de=0;de<E.mipmaps.length;de++)O.__webglFramebuffer[oe][de]=t.createFramebuffer()}else O.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(s&&E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)O.__webglFramebuffer[oe]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(te)if(r.drawBuffers){const oe=w.texture;for(let de=0,Ae=oe.length;de<Ae;de++){const Fe=i.get(oe[de]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&w.samples>0&&xe(w)===!1){const oe=te?E:[E];O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const Ae=oe[de];O.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const Fe=a.convert(Ae.format,Ae.colorSpace),Z=a.convert(Ae.type),Qe=S(Ae.internalFormat,Fe,Z,Ae.colorSpace,w.isXRRenderTarget===!0),He=Re(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Qe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,O.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),we(O.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Te(t.TEXTURE_CUBE_MAP,E,ve);for(let oe=0;oe<6;oe++)if(s&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)ye(O.__webglFramebuffer[oe][de],w,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else ye(O.__webglFramebuffer[oe],w,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);v(E,ve)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){const oe=w.texture;for(let de=0,Ae=oe.length;de<Ae;de++){const Fe=oe[de],Z=i.get(Fe);n.bindTexture(t.TEXTURE_2D,Z.__webglTexture),Te(t.TEXTURE_2D,Fe,ve),ye(O.__webglFramebuffer,w,Fe,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),v(Fe,ve)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(s?oe=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,ne.__webglTexture),Te(oe,E,ve),s&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)ye(O.__webglFramebuffer[de],w,E,t.COLOR_ATTACHMENT0,oe,de);else ye(O.__webglFramebuffer,w,E,t.COLOR_ATTACHMENT0,oe,0);v(E,ve)&&g(oe),n.unbindTexture()}w.depthBuffer&&je(w)}function Ot(w){const E=p(w)||s,O=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0,Q=O.length;ne<Q;ne++){const te=O[ne];if(v(te,E)){const ve=w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,oe=i.get(te).__webglTexture;n.bindTexture(ve,oe),g(ve),n.unbindTexture()}}}function Ee(w){if(s&&w.samples>0&&xe(w)===!1){const E=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],O=w.width,ne=w.height;let Q=t.COLOR_BUFFER_BIT;const te=[],ve=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(w),de=w.isWebGLMultipleRenderTargets===!0;if(de)for(let Ae=0;Ae<E.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){te.push(t.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&te.push(ve);const Fe=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Fe===!1&&(w.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Ae]),Fe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ve])),de){const Z=i.get(E[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Z,0)}t.blitFramebuffer(0,0,O,ne,0,0,O,ne,Q,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Ae=0;Ae<E.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Ae]);const Fe=i.get(E[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Re(w){return Math.min(r.maxSamples,w.samples)}function xe(w){const E=i.get(w);return s&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function dt(w){const E=o.render.frame;c.get(w)!==E&&(c.set(w,E),w.update())}function Ie(w,E){const O=w.colorSpace,ne=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===$d||O!==Ii&&O!==Dn&&(Ze.getTransfer(O)===ot?s===!1?e.has("EXT_sRGB")===!0&&ne===jn?(w.format=$d,w.minFilter=sn,w.generateMipmaps=!1):E=ux.sRGBToLinear(E):(ne!==jn||Q!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}this.allocateTextureUnit=P,this.resetTextureUnits=K,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=L,this.setTextureCube=U,this.rebindTextures=Ne,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=xe}function UR(t,e,n){const i=n.isWebGL2;function r(a,o=Dn){let s;const l=Ze.getTransfer(o);if(a===fr)return t.UNSIGNED_BYTE;if(a===ex)return t.UNSIGNED_SHORT_4_4_4_4;if(a===tx)return t.UNSIGNED_SHORT_5_5_5_1;if(a===pw)return t.BYTE;if(a===mw)return t.SHORT;if(a===sp)return t.UNSIGNED_SHORT;if(a===Jy)return t.INT;if(a===er)return t.UNSIGNED_INT;if(a===Ei)return t.FLOAT;if(a===hs)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===gw)return t.ALPHA;if(a===jn)return t.RGBA;if(a===vw)return t.LUMINANCE;if(a===_w)return t.LUMINANCE_ALPHA;if(a===Xr)return t.DEPTH_COMPONENT;if(a===io)return t.DEPTH_STENCIL;if(a===$d)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===yw)return t.RED;if(a===nx)return t.RED_INTEGER;if(a===xw)return t.RG;if(a===ix)return t.RG_INTEGER;if(a===rx)return t.RGBA_INTEGER;if(a===Zc||a===Jc||a===ef||a===tf)if(l===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Zc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ef)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===tf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Zc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Jc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ef)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===tf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===yg||a===xg||a===Sg||a===Eg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===yg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===xg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Sg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Eg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ax)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Mg||a===Tg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Mg)return l===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Tg)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===wg||a===bg||a===Ag||a===Cg||a===Rg||a===Pg||a===Lg||a===Ng||a===Dg||a===Ig||a===Ug||a===Og||a===Fg||a===kg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===wg)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===bg)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ag)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Cg)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Rg)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Pg)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Lg)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ng)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Dg)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ig)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ug)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Og)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Fg)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===kg)return l===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===nf||a===zg||a===Bg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===nf)return l===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===zg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Bg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Sw||a===Hg||a===Gg||a===Vg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===nf)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Hg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Gg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Vg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Wr?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class OR extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ll extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FR={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),f=this._getHandJoint(u,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),m=.02,_=.005;u.inputState.pinching&&h>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(FR)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ll;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const kR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new mn,a=e.properties.get(r);a.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new _r({extensions:{fragDepth:!0},vertexShader:kR,fragmentShader:zR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ai(new lc(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class HR extends co{constructor(e,n){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,u=null,c=null,d=null,h=null,m=null,_=null;const y=new BR,p=n.getContextAttributes();let f=null,v=null;const g=[],S=[],A=new $e;let b=null;const T=new Nn;T.layers.enable(1),T.viewport=new Bt;const N=new Nn;N.layers.enable(2),N.viewport=new Bt;const j=[T,N],x=new OR;x.layers.enable(1),x.layers.enable(2);let R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let q=g[H];return q===void 0&&(q=new Cf,g[H]=q),q.getTargetRaySpace()},this.getControllerGrip=function(H){let q=g[H];return q===void 0&&(q=new Cf,g[H]=q),q.getGripSpace()},this.getHand=function(H){let q=g[H];return q===void 0&&(q=new Cf,g[H]=q),q.getHandSpace()};function K(H){const q=S.indexOf(H.inputSource);if(q===-1)return;const le=g[q];le!==void 0&&(le.update(H.inputSource,H.frame,u||o),le.dispatchEvent({type:H.type,data:H.inputSource}))}function P(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",W);for(let H=0;H<g.length;H++){const q=S[H];q!==null&&(S[H]=null,g[H].disconnect(q))}R=null,X=null,y.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,v=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",P),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new ea(m.framebufferWidth,m.framebufferHeight,{format:jn,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let q=null,le=null,ye=null;p.depth&&(ye=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=p.stencil?io:Xr,le=p.stencil?Wr:er);const we={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:a};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(we),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new ea(h.textureWidth,h.textureHeight,{format:jn,type:fr,depthTexture:new Sx(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ge=e.properties.get(v);ge.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(s),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(H){for(let q=0;q<H.removed.length;q++){const le=H.removed[q],ye=S.indexOf(le);ye>=0&&(S[ye]=null,g[ye].disconnect(le))}for(let q=0;q<H.added.length;q++){const le=H.added[q];let ye=S.indexOf(le);if(ye===-1){for(let ge=0;ge<g.length;ge++)if(ge>=S.length){S.push(le),ye=ge;break}else if(S[ge]===null){S[ge]=le,ye=ge;break}if(ye===-1)break}const we=g[ye];we&&we.connect(le)}}const V=new z,Y=new z;function L(H,q,le){V.setFromMatrixPosition(q.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const ye=V.distanceTo(Y),we=q.projectionMatrix.elements,ge=le.projectionMatrix.elements,je=we[14]/(we[10]-1),Ne=we[14]/(we[10]+1),I=(we[9]+1)/we[5],Ot=(we[9]-1)/we[5],Ee=(we[8]-1)/we[0],Re=(ge[8]+1)/ge[0],xe=je*Ee,dt=je*Re,Ie=ye/(-Ee+Re),w=Ie*-Ee;q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(w),H.translateZ(Ie),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const E=je+Ie,O=Ne+Ie,ne=xe-w,Q=dt+(ye-w),te=I*Ne/O*E,ve=Ot*Ne/O*E;H.projectionMatrix.makePerspective(ne,Q,te,ve,E,O),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function U(H,q){q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;y.texture!==null&&(H.near=y.depthNear,H.far=y.depthFar),x.near=N.near=T.near=H.near,x.far=N.far=T.far=H.far,(R!==x.near||X!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,X=x.far,T.near=R,T.far=X,N.near=R,N.far=X,T.updateProjectionMatrix(),N.updateProjectionMatrix(),H.updateProjectionMatrix());const q=H.parent,le=x.cameras;U(x,q);for(let ye=0;ye<le.length;ye++)U(le[ye],q);le.length===2?L(x,T,N):x.projectionMatrix.copy(T.projectionMatrix),B(H,x,q)};function B(H,q,le){le===null?H.matrix.copy(q.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(q.projectionMatrix),H.projectionMatrixInverse.copy(q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Yd*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null};let $=null;function ee(H,q){if(c=q.getViewerPose(u||o),_=q,c!==null){const le=c.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let ye=!1;le.length!==x.cameras.length&&(x.cameras.length=0,ye=!0);for(let ge=0;ge<le.length;ge++){const je=le[ge];let Ne=null;if(m!==null)Ne=m.getViewport(je);else{const Ot=d.getViewSubImage(h,je);Ne=Ot.viewport,ge===0&&(e.setRenderTargetTextures(v,Ot.colorTexture,h.ignoreDepthValues?void 0:Ot.depthStencilTexture),e.setRenderTarget(v))}let I=j[ge];I===void 0&&(I=new Nn,I.layers.enable(ge),I.viewport=new Bt,j[ge]=I),I.matrix.fromArray(je.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(je.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ge===0&&(x.matrix.copy(I.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ye===!0&&x.cameras.push(I)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const ge=d.getDepthInformation(le[0]);ge&&ge.isValid&&ge.texture&&y.init(e,ge,r.renderState)}}for(let le=0;le<g.length;le++){const ye=S[le],we=g[le];ye!==null&&we!==void 0&&we.update(ye,q,u||o)}y.render(e,x),$&&$(H,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const Te=new xx;Te.setAnimationLoop(ee),this.setAnimationLoop=function(H){$=H},this.dispose=function(){}}}function GR(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,gx(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,v,g,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(p,f):f.isMeshToonMaterial?(a(p,f),d(p,f)):f.isMeshPhongMaterial?(a(p,f),c(p,f)):f.isMeshStandardMaterial?(a(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(a(p,f),_(p,f)):f.isMeshDepthMaterial?a(p,f):f.isMeshDistanceMaterial?(a(p,f),y(p,f)):f.isMeshNormalMaterial?a(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&s(p,f)):f.isPointsMaterial?l(p,f,v,g):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===pn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===pn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*g,n(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function s(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,g){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=g*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const v=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VR(t,e,n,i){let r={},a={},o=[];const s=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function u(v,g){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",p));const A=g.program;i.updateUBOMapping(v,A);const b=e.render.frame;a[v.id]!==b&&(h(v),a[v.id]=b)}function c(v){const g=d();v.__bindingPointIndex=g;const S=t.createBuffer(),A=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function d(){for(let v=0;v<s;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],S=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let b=0,T=S.length;b<T;b++){const N=Array.isArray(S[b])?S[b]:[S[b]];for(let j=0,x=N.length;j<x;j++){const R=N[j];if(m(R,b,j,A)===!0){const X=R.__offset,K=Array.isArray(R.value)?R.value:[R.value];let P=0;for(let W=0;W<K.length;W++){const V=K[W],Y=y(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,X+P,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,S,A){const b=v.value,T=g+"_"+S;if(A[T]===void 0)return typeof b=="number"||typeof b=="boolean"?A[T]=b:A[T]=b.clone(),!0;{const N=A[T];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return A[T]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function _(v){const g=v.uniforms;let S=0;const A=16;for(let T=0,N=g.length;T<N;T++){const j=Array.isArray(g[T])?g[T]:[g[T]];for(let x=0,R=j.length;x<R;x++){const X=j[x],K=Array.isArray(X.value)?X.value:[X.value];for(let P=0,W=K.length;P<W;P++){const V=K[P],Y=y(V),L=S%A;L!==0&&A-L<Y.boundary&&(S+=A-L),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=Y.storage}}}const b=S%A;return b>0&&(S+=A-b),v.__size=S,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete a[g.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},a={}}return{bind:l,update:u,dispose:f}}class Ax{constructor(e={}){const{canvas:n=Iw(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=cr,this.toneMappingExposure=1;const g=this;let S=!1,A=0,b=0,T=null,N=-1,j=null;const x=new Bt,R=new Bt;let X=null;const K=new Je(0);let P=0,W=n.width,V=n.height,Y=1,L=null,U=null;const B=new Bt(0,0,W,V),$=new Bt(0,0,W,V);let ee=!1;const Te=new yx;let H=!1,q=!1,le=null;const ye=new Gt,we=new $e,ge=new z,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return T===null?Y:1}let I=i;function Ot(M,D){for(let k=0;k<M.length;k++){const G=M[k],F=n.getContext(G,D);if(F!==null)return F}return null}try{const M={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${op}`),n.addEventListener("webglcontextlost",et,!1),n.addEventListener("webglcontextrestored",C,!1),n.addEventListener("webglcontextcreationerror",ie,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&D.shift(),I=Ot(D,M),I===null)throw Ot(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ee,Re,xe,dt,Ie,w,E,O,ne,Q,te,ve,oe,de,Ae,Fe,Z,Qe,He,Pe,Se,he,Ue,Ye;function rt(){Ee=new KA(I),Re=new VA(I,Ee,e),Ee.init(Re),he=new UR(I,Ee,Re),xe=new DR(I,Ee,Re),dt=new JA(I),Ie=new yR,w=new IR(I,Ee,xe,Ie,Re,he,dt),E=new XA(g),O=new qA(g),ne=new o2(I,Re),Ue=new HA(I,Ee,ne,Re),Q=new QA(I,ne,dt,Ue),te=new iC(I,Q,ne,dt),He=new nC(I,Re,w),Fe=new WA(Ie),ve=new _R(g,E,O,Ee,Re,Ue,Fe),oe=new GR(g,Ie),de=new SR,Ae=new AR(Ee,Re),Qe=new BA(g,E,O,xe,te,h,l),Z=new NR(g,te,Re),Ye=new VR(I,dt,Re,xe),Pe=new GA(I,Ee,dt,Re),Se=new ZA(I,Ee,dt,Re),dt.programs=ve.programs,g.capabilities=Re,g.extensions=Ee,g.properties=Ie,g.renderLists=de,g.shadowMap=Z,g.state=xe,g.info=dt}rt();const Ve=new HR(g,I);this.xr=Ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(W,V,!1))},this.getSize=function(M){return M.set(W,V)},this.setSize=function(M,D,k=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,V=D,n.width=Math.floor(M*Y),n.height=Math.floor(D*Y),k===!0&&(n.style.width=M+"px",n.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(W*Y,V*Y).floor()},this.setDrawingBufferSize=function(M,D,k){W=M,V=D,Y=k,n.width=Math.floor(M*k),n.height=Math.floor(D*k),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(B)},this.setViewport=function(M,D,k,G){M.isVector4?B.set(M.x,M.y,M.z,M.w):B.set(M,D,k,G),xe.viewport(x.copy(B).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy($)},this.setScissor=function(M,D,k,G){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,D,k,G),xe.scissor(R.copy($).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(M){xe.setScissorTest(ee=M)},this.setOpaqueSort=function(M){L=M},this.setTransparentSort=function(M){U=M},this.getClearColor=function(M){return M.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(M=!0,D=!0,k=!0){let G=0;if(M){let F=!1;if(T!==null){const ue=T.texture.format;F=ue===rx||ue===ix||ue===nx}if(F){const ue=T.texture.type,_e=ue===fr||ue===er||ue===sp||ue===Wr||ue===ex||ue===tx,be=Qe.getClearColor(),Ce=Qe.getClearAlpha(),ke=be.r,Le=be.g,De=be.b;_e?(m[0]=ke,m[1]=Le,m[2]=De,m[3]=Ce,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=ke,_[1]=Le,_[2]=De,_[3]=Ce,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}D&&(G|=I.DEPTH_BUFFER_BIT),k&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",et,!1),n.removeEventListener("webglcontextrestored",C,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),de.dispose(),Ae.dispose(),Ie.dispose(),E.dispose(),O.dispose(),te.dispose(),Ue.dispose(),Ye.dispose(),ve.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",An),Ve.removeEventListener("sessionend",nt),le&&(le.dispose(),le=null),Zt.stop()};function et(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=dt.autoReset,D=Z.enabled,k=Z.autoUpdate,G=Z.needsUpdate,F=Z.type;rt(),dt.autoReset=M,Z.enabled=D,Z.autoUpdate=k,Z.needsUpdate=G,Z.type=F}function ie(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function re(M){const D=M.target;D.removeEventListener("dispose",re),me(D)}function me(M){Me(M),Ie.remove(M)}function Me(M){const D=Ie.get(M).programs;D!==void 0&&(D.forEach(function(k){ve.releaseProgram(k)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,k,G,F,ue){D===null&&(D=je);const _e=F.isMesh&&F.matrixWorld.determinant()<0,be=$x(M,D,k,G,F);xe.setMaterial(G,_e);let Ce=k.index,ke=1;if(G.wireframe===!0){if(Ce=Q.getWireframeAttribute(k),Ce===void 0)return;ke=2}const Le=k.drawRange,De=k.attributes.position;let Mt=Le.start*ke,gn=(Le.start+Le.count)*ke;ue!==null&&(Mt=Math.max(Mt,ue.start*ke),gn=Math.min(gn,(ue.start+ue.count)*ke)),Ce!==null?(Mt=Math.max(Mt,0),gn=Math.min(gn,Ce.count)):De!=null&&(Mt=Math.max(Mt,0),gn=Math.min(gn,De.count));const Nt=gn-Mt;if(Nt<0||Nt===1/0)return;Ue.setup(F,G,be,k,Ce);let di,ht=Pe;if(Ce!==null&&(di=ne.get(Ce),ht=Se,ht.setIndex(di)),F.isMesh)G.wireframe===!0?(xe.setLineWidth(G.wireframeLinewidth*Ne()),ht.setMode(I.LINES)):ht.setMode(I.TRIANGLES);else if(F.isLine){let ze=G.linewidth;ze===void 0&&(ze=1),xe.setLineWidth(ze*Ne()),F.isLineSegments?ht.setMode(I.LINES):F.isLineLoop?ht.setMode(I.LINE_LOOP):ht.setMode(I.LINE_STRIP)}else F.isPoints?ht.setMode(I.POINTS):F.isSprite&&ht.setMode(I.TRIANGLES);if(F.isBatchedMesh)ht.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)ht.renderInstances(Mt,Nt,F.count);else if(k.isInstancedBufferGeometry){const ze=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,gc=Math.min(k.instanceCount,ze);ht.renderInstances(Mt,Nt,gc)}else ht.render(Mt,Nt)};function qe(M,D,k){M.transparent===!0&&M.side===Si&&M.forceSinglePass===!1?(M.side=pn,M.needsUpdate=!0,Os(M,D,k),M.side=vr,M.needsUpdate=!0,Os(M,D,k),M.side=Si):Os(M,D,k)}this.compile=function(M,D,k=null){k===null&&(k=M),p=Ae.get(k),p.init(),v.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==k&&M.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(g._useLegacyLights);const G=new Set;return M.traverse(function(F){const ue=F.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const be=ue[_e];qe(be,k,F),G.add(be)}else qe(ue,k,F),G.add(ue)}),v.pop(),p=null,G},this.compileAsync=function(M,D,k=null){const G=this.compile(M,D,k);return new Promise(F=>{function ue(){if(G.forEach(function(_e){Ie.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){F(M);return}setTimeout(ue,10)}Ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let tt=null;function Ft(M){tt&&tt(M)}function An(){Zt.stop()}function nt(){Zt.start()}const Zt=new xx;Zt.setAnimationLoop(Ft),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(M){tt=M,Ve.setAnimationLoop(M),M===null?Zt.stop():Zt.start()},Ve.addEventListener("sessionstart",An),Ve.addEventListener("sessionend",nt),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(D),D=Ve.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,D,T),p=Ae.get(M,v.length),p.init(),v.push(p),ye.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Te.setFromProjectionMatrix(ye),q=this.localClippingEnabled,H=Fe.init(this.clippingPlanes,q),y=de.get(M,f.length),y.init(),f.push(y),Qn(M,D,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(L,U),this.info.render.frame++,H===!0&&Fe.beginShadows();const k=p.state.shadowsArray;if(Z.render(k,M,D),H===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1)&&Qe.render(y,M),p.setupLights(g._useLegacyLights),D.isArrayCamera){const G=D.cameras;for(let F=0,ue=G.length;F<ue;F++){const _e=G[F];Sp(y,M,_e,_e.viewport)}}else Sp(y,M,D);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(g,M,D),Ue.resetDefaultState(),N=-1,j=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Qn(M,D,k,G){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Te.intersectsSprite(M)){G&&ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ye);const _e=te.update(M),be=M.material;be.visible&&y.push(M,_e,be,k,ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Te.intersectsObject(M))){const _e=te.update(M),be=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ge.copy(M.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ge.copy(_e.boundingSphere.center)),ge.applyMatrix4(M.matrixWorld).applyMatrix4(ye)),Array.isArray(be)){const Ce=_e.groups;for(let ke=0,Le=Ce.length;ke<Le;ke++){const De=Ce[ke],Mt=be[De.materialIndex];Mt&&Mt.visible&&y.push(M,_e,Mt,k,ge.z,De)}}else be.visible&&y.push(M,_e,be,k,ge.z,null)}}const ue=M.children;for(let _e=0,be=ue.length;_e<be;_e++)Qn(ue[_e],D,k,G)}function Sp(M,D,k,G){const F=M.opaque,ue=M.transmissive,_e=M.transparent;p.setupLightsView(k),H===!0&&Fe.setGlobalState(g.clippingPlanes,k),ue.length>0&&jx(F,ue,D,k),G&&xe.viewport(x.copy(G)),F.length>0&&Us(F,D,k),ue.length>0&&Us(ue,D,k),_e.length>0&&Us(_e,D,k),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function jx(M,D,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const ue=Re.isWebGL2;le===null&&(le=new ea(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?hs:fr,minFilter:Hr,samples:ue?4:0})),g.getDrawingBufferSize(we),ue?le.setSize(we.x,we.y):le.setSize(qd(we.x),qd(we.y));const _e=g.getRenderTarget();g.setRenderTarget(le),g.getClearColor(K),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();const be=g.toneMapping;g.toneMapping=cr,Us(M,k,G),w.updateMultisampleRenderTarget(le),w.updateRenderTargetMipmap(le);let Ce=!1;for(let ke=0,Le=D.length;ke<Le;ke++){const De=D[ke],Mt=De.object,gn=De.geometry,Nt=De.material,di=De.group;if(Nt.side===Si&&Mt.layers.test(G.layers)){const ht=Nt.side;Nt.side=pn,Nt.needsUpdate=!0,Ep(Mt,k,G,gn,Nt,di),Nt.side=ht,Nt.needsUpdate=!0,Ce=!0}}Ce===!0&&(w.updateMultisampleRenderTarget(le),w.updateRenderTargetMipmap(le)),g.setRenderTarget(_e),g.setClearColor(K,P),g.toneMapping=be}function Us(M,D,k){const G=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ue=M.length;F<ue;F++){const _e=M[F],be=_e.object,Ce=_e.geometry,ke=G===null?_e.material:G,Le=_e.group;be.layers.test(k.layers)&&Ep(be,D,k,Ce,ke,Le)}}function Ep(M,D,k,G,F,ue){M.onBeforeRender(g,D,k,G,F,ue),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(g,D,k,G,M,ue),F.transparent===!0&&F.side===Si&&F.forceSinglePass===!1?(F.side=pn,F.needsUpdate=!0,g.renderBufferDirect(k,D,G,F,M,ue),F.side=vr,F.needsUpdate=!0,g.renderBufferDirect(k,D,G,F,M,ue),F.side=Si):g.renderBufferDirect(k,D,G,F,M,ue),M.onAfterRender(g,D,k,G,F,ue)}function Os(M,D,k){D.isScene!==!0&&(D=je);const G=Ie.get(M),F=p.state.lights,ue=p.state.shadowsArray,_e=F.state.version,be=ve.getParameters(M,F.state,ue,D,k),Ce=ve.getProgramCacheKey(be);let ke=G.programs;G.environment=M.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(M.isMeshStandardMaterial?O:E).get(M.envMap||G.environment),ke===void 0&&(M.addEventListener("dispose",re),ke=new Map,G.programs=ke);let Le=ke.get(Ce);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===_e)return Tp(M,be),Le}else be.uniforms=ve.getUniforms(M),M.onBuild(k,be,g),M.onBeforeCompile(be,g),Le=ve.acquireProgram(be,Ce),ke.set(Ce,Le),G.uniforms=be.uniforms;const De=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=Fe.uniform),Tp(M,be),G.needsLights=qx(M),G.lightsStateVersion=_e,G.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function Mp(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Ql.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Tp(M,D){const k=Ie.get(M);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function $x(M,D,k,G,F){D.isScene!==!0&&(D=je),w.resetTextureUnits();const ue=D.fog,_e=G.isMeshStandardMaterial?D.environment:null,be=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ii,Ce=(G.isMeshStandardMaterial?O:E).get(G.envMap||_e),ke=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Le=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!k.morphAttributes.position,Mt=!!k.morphAttributes.normal,gn=!!k.morphAttributes.color;let Nt=cr;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Nt=g.toneMapping);const di=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ht=di!==void 0?di.length:0,ze=Ie.get(G),gc=p.state.lights;if(H===!0&&(q===!0||M!==j)){const Cn=M===j&&G.id===N;Fe.setState(G,M,Cn)}let yt=!1;G.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==gc.state.version||ze.outputColorSpace!==be||F.isBatchedMesh&&ze.batching===!1||!F.isBatchedMesh&&ze.batching===!0||F.isInstancedMesh&&ze.instancing===!1||!F.isInstancedMesh&&ze.instancing===!0||F.isSkinnedMesh&&ze.skinning===!1||!F.isSkinnedMesh&&ze.skinning===!0||F.isInstancedMesh&&ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ze.instancingColor===!1&&F.instanceColor!==null||ze.envMap!==Ce||G.fog===!0&&ze.fog!==ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Fe.numPlanes||ze.numIntersection!==Fe.numIntersection)||ze.vertexAlphas!==ke||ze.vertexTangents!==Le||ze.morphTargets!==De||ze.morphNormals!==Mt||ze.morphColors!==gn||ze.toneMapping!==Nt||Re.isWebGL2===!0&&ze.morphTargetsCount!==ht)&&(yt=!0):(yt=!0,ze.__version=G.version);let Mr=ze.currentProgram;yt===!0&&(Mr=Os(G,D,F));let wp=!1,po=!1,vc=!1;const Wt=Mr.getUniforms(),Tr=ze.uniforms;if(xe.useProgram(Mr.program)&&(wp=!0,po=!0,vc=!0),G.id!==N&&(N=G.id,po=!0),wp||j!==M){Wt.setValue(I,"projectionMatrix",M.projectionMatrix),Wt.setValue(I,"viewMatrix",M.matrixWorldInverse);const Cn=Wt.map.cameraPosition;Cn!==void 0&&Cn.setValue(I,ge.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&Wt.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Wt.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,po=!0,vc=!0)}if(F.isSkinnedMesh){Wt.setOptional(I,F,"bindMatrix"),Wt.setOptional(I,F,"bindMatrixInverse");const Cn=F.skeleton;Cn&&(Re.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),Wt.setValue(I,"boneTexture",Cn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Wt.setOptional(I,F,"batchingTexture"),Wt.setValue(I,"batchingTexture",F._matricesTexture,w));const _c=k.morphAttributes;if((_c.position!==void 0||_c.normal!==void 0||_c.color!==void 0&&Re.isWebGL2===!0)&&He.update(F,k,Mr),(po||ze.receiveShadow!==F.receiveShadow)&&(ze.receiveShadow=F.receiveShadow,Wt.setValue(I,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Tr.envMap.value=Ce,Tr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),po&&(Wt.setValue(I,"toneMappingExposure",g.toneMappingExposure),ze.needsLights&&Yx(Tr,vc),ue&&G.fog===!0&&oe.refreshFogUniforms(Tr,ue),oe.refreshMaterialUniforms(Tr,G,Y,V,le),Ql.upload(I,Mp(ze),Tr,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ql.upload(I,Mp(ze),Tr,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Wt.setValue(I,"center",F.center),Wt.setValue(I,"modelViewMatrix",F.modelViewMatrix),Wt.setValue(I,"normalMatrix",F.normalMatrix),Wt.setValue(I,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Cn=G.uniformsGroups;for(let yc=0,Kx=Cn.length;yc<Kx;yc++)if(Re.isWebGL2){const bp=Cn[yc];Ye.update(bp,Mr),Ye.bind(bp,Mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mr}function Yx(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function qx(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,D,k){Ie.get(M.texture).__webglTexture=D,Ie.get(M.depthTexture).__webglTexture=k;const G=Ie.get(M);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const k=Ie.get(M);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,k=0){T=M,A=D,b=k;let G=!0,F=null,ue=!1,_e=!1;if(M){const Ce=Ie.get(M);Ce.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):Ce.__webglFramebuffer===void 0?w.setupRenderTarget(M):Ce.__hasExternalTextures&&w.rebindTextures(M,Ie.get(M.texture).__webglTexture,Ie.get(M.depthTexture).__webglTexture);const ke=M.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(_e=!0);const Le=Ie.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?F=Le[D][k]:F=Le[D],ue=!0):Re.isWebGL2&&M.samples>0&&w.useMultisampledRTT(M)===!1?F=Ie.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[k]:F=Le,x.copy(M.viewport),R.copy(M.scissor),X=M.scissorTest}else x.copy(B).multiplyScalar(Y).floor(),R.copy($).multiplyScalar(Y).floor(),X=ee;if(xe.bindFramebuffer(I.FRAMEBUFFER,F)&&Re.drawBuffers&&G&&xe.drawBuffers(M,F),xe.viewport(x),xe.scissor(R),xe.setScissorTest(X),ue){const Ce=Ie.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ce.__webglTexture,k)}else if(_e){const Ce=Ie.get(M.texture),ke=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.__webglTexture,k||0,ke)}N=-1},this.readRenderTargetPixels=function(M,D,k,G,F,ue,_e){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){xe.bindFramebuffer(I.FRAMEBUFFER,be);try{const Ce=M.texture,ke=Ce.format,Le=Ce.type;if(ke!==jn&&he.convert(ke)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===hs&&(Ee.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Le!==fr&&he.convert(Le)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Ei&&(Re.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-G&&k>=0&&k<=M.height-F&&I.readPixels(D,k,G,F,he.convert(ke),he.convert(Le),ue)}finally{const Ce=T!==null?Ie.get(T).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(M,D,k=0){const G=Math.pow(2,-k),F=Math.floor(D.image.width*G),ue=Math.floor(D.image.height*G);w.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,M.x,M.y,F,ue),xe.unbindTexture()},this.copyTextureToTexture=function(M,D,k,G=0){const F=D.image.width,ue=D.image.height,_e=he.convert(k.format),be=he.convert(k.type);w.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,M.x,M.y,F,ue,_e,be,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,_e,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,M.x,M.y,_e,be,D.image),G===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(M,D,k,G,F=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=M.max.x-M.min.x+1,_e=M.max.y-M.min.y+1,be=M.max.z-M.min.z+1,Ce=he.convert(G.format),ke=he.convert(G.type);let Le;if(G.isData3DTexture)w.setTexture3D(G,0),Le=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)w.setTexture2DArray(G,0),Le=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const De=I.getParameter(I.UNPACK_ROW_LENGTH),Mt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gn=I.getParameter(I.UNPACK_SKIP_PIXELS),Nt=I.getParameter(I.UNPACK_SKIP_ROWS),di=I.getParameter(I.UNPACK_SKIP_IMAGES),ht=k.isCompressedTexture?k.mipmaps[F]:k.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,M.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,M.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,M.min.z),k.isDataTexture||k.isData3DTexture?I.texSubImage3D(Le,F,D.x,D.y,D.z,ue,_e,be,Ce,ke,ht.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Le,F,D.x,D.y,D.z,ue,_e,be,Ce,ht.data)):I.texSubImage3D(Le,F,D.x,D.y,D.z,ue,_e,be,Ce,ke,ht),I.pixelStorei(I.UNPACK_ROW_LENGTH,De),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,di),F===0&&G.generateMipmaps&&I.generateMipmap(Le),xe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){A=0,b=0,T=null,xe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===lp?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===ac?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?jr:ox}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===jr?zt:Ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class WR extends Ax{}WR.prototype.isWebGL1Renderer=!0;class XR extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class dp extends Er{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const a=[],o=[],s=[],l=[],u=new z,c=new $e;o.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const m=i+d/n*r;u.x=e*Math.cos(m),u.y=e*Math.sin(m),o.push(u.x,u.y,u.z),s.push(0,0,1),c.x=(o[h]/e+1)/2,c.y=(o[h+1]/e+1)/2,l.push(c.x,c.y)}for(let d=1;d<=n;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new ci(o,3)),this.setAttribute("normal",new ci(s,3)),this.setAttribute("uv",new ci(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);const jR=()=>{const t=Kt.useRef(null);return Kt.useEffect(()=>{const e=new XR,n=new Nn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new Ax;i.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(i.domElement);const r=[],a=200;for(let l=0;l<a;l++){const u=new cp({color:16777215}),c=new ai(new dp(.01,6),u);c.position.x=(Math.random()-.5)*10,c.position.y=(Math.random()-.5)*10,c.position.z=(Math.random()-.5)*10,r.push(c),e.add(c)}n.position.z=5;const o=()=>{requestAnimationFrame(o),r.forEach(l=>{const d=l.position.x,h=l.position.y,m=Math.atan2(h,d),_=Math.sqrt(d*d+h*h);l.position.x=2*Math.cos(m+1e-4*_),l.position.y=2*Math.sin(m+1e-4*_)}),i.render(e,n)};o();const s=()=>{const l=window.innerWidth,u=window.innerHeight;n.aspect=l/u,n.updateProjectionMatrix(),i.setSize(l,u)};return window.addEventListener("resize",s,!1),()=>{t.current.removeChild(i.domElement),r.forEach(l=>{e.remove(l)}),window.removeEventListener("resize",s)}},[]),se.jsx("div",{ref:t,style:{overflow:"hidden"}})},$R=()=>{const t="cvaleriano564@gmail.com",[e,n]=Kt.useState(""),i=()=>{navigator.clipboard.writeText(t).then(()=>{n("Copied!"),setTimeout(()=>n(""),1500)},()=>{n("Failed to copy")})};return se.jsxs("div",{className:"mx-auto max-w-3xl p-6 rounded-lg text-white flex flex-col relative",children:[se.jsx(jR,{}),se.jsx("h2",{className:"text-4xl mb-2",children:"Contact"}),se.jsxs("div",{className:"flex w-full items-center",children:[se.jsx("input",{type:"text",readOnly:!0,value:t,className:"bg-transparent border-2 border-gray-300 p-2 text-white flex-grow"}),se.jsx("button",{onClick:i,className:"bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center ml-2",children:se.jsx(PT,{className:"text-lg"})}),se.jsx("a",{href:`mailto:${t}`,className:"bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center ml-2",children:se.jsx(DT,{className:"text-lg"})})]}),e&&se.jsx("div",{className:"tooltip bg-gray-500 rounded p-1 absolute -top-8 right-0",children:e})]})};var xt={},hp={},Cs={},Rs={},Cx="Expected a function",Iv=NaN,YR="[object Symbol]",qR=/^\s+|\s+$/g,KR=/^[-+]0x[0-9a-f]+$/i,QR=/^0b[01]+$/i,ZR=/^0o[0-7]+$/i,JR=parseInt,eP=typeof Fs=="object"&&Fs&&Fs.Object===Object&&Fs,tP=typeof self=="object"&&self&&self.Object===Object&&self,nP=eP||tP||Function("return this")(),iP=Object.prototype,rP=iP.toString,aP=Math.max,oP=Math.min,Rf=function(){return nP.Date.now()};function sP(t,e,n){var i,r,a,o,s,l,u=0,c=!1,d=!1,h=!0;if(typeof t!="function")throw new TypeError(Cx);e=Uv(e)||0,Fu(n)&&(c=!!n.leading,d="maxWait"in n,a=d?aP(Uv(n.maxWait)||0,e):a,h="trailing"in n?!!n.trailing:h);function m(b){var T=i,N=r;return i=r=void 0,u=b,o=t.apply(N,T),o}function _(b){return u=b,s=setTimeout(f,e),c?m(b):o}function y(b){var T=b-l,N=b-u,j=e-T;return d?oP(j,a-N):j}function p(b){var T=b-l,N=b-u;return l===void 0||T>=e||T<0||d&&N>=a}function f(){var b=Rf();if(p(b))return v(b);s=setTimeout(f,y(b))}function v(b){return s=void 0,h&&i?m(b):(i=r=void 0,o)}function g(){s!==void 0&&clearTimeout(s),u=0,i=l=r=s=void 0}function S(){return s===void 0?o:v(Rf())}function A(){var b=Rf(),T=p(b);if(i=arguments,r=this,l=b,T){if(s===void 0)return _(l);if(d)return s=setTimeout(f,e),m(l)}return s===void 0&&(s=setTimeout(f,e)),o}return A.cancel=g,A.flush=S,A}function lP(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(Cx);return Fu(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),sP(t,e,{leading:i,maxWait:e,trailing:r})}function Fu(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function uP(t){return!!t&&typeof t=="object"}function cP(t){return typeof t=="symbol"||uP(t)&&rP.call(t)==YR}function Uv(t){if(typeof t=="number")return t;if(cP(t))return Iv;if(Fu(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Fu(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(qR,"");var n=QR.test(t);return n||ZR.test(t)?JR(t.slice(2),n?2:8):KR.test(t)?Iv:+t}var fP=lP,Ps={};Object.defineProperty(Ps,"__esModule",{value:!0});Ps.addPassiveEventListener=function(e,n,i){var r=i.name;r||(r=n,console.warn("Listener must be a named function.")),Zl.has(n)||Zl.set(n,new Set);var a=Zl.get(n);if(!a.has(r)){var o=function(){var s=!1;try{var l=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",null,l)}catch{}return s}();e.addEventListener(n,i,o?{passive:!0}:!1),a.add(r)}};Ps.removePassiveEventListener=function(e,n,i){e.removeEventListener(n,i),Zl.get(n).delete(i.name||n)};var Zl=new Map;Object.defineProperty(Rs,"__esModule",{value:!0});var dP=fP,hP=mP(dP),pP=Ps;function mP(t){return t&&t.__esModule?t:{default:t}}var gP=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,hP.default)(e,n)},pt={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var i=gP(function(r){pt.scrollHandler(e)},n);pt.scrollSpyContainers.push(e),(0,pP.addPassiveEventListener)(e,"scroll",i)}},isMounted:function(e){return pt.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=pt.scrollSpyContainers[pt.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(i){return i(pt.currentPositionX(e),pt.currentPositionY(e))})},addStateHandler:function(e){pt.spySetState.push(e)},addSpyHandler:function(e,n){var i=pt.scrollSpyContainers[pt.scrollSpyContainers.indexOf(n)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e),e(pt.currentPositionX(n),pt.currentPositionY(n))},updateStates:function(){pt.spySetState.forEach(function(e){return e()})},unmount:function(e,n){pt.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.indexOf(n)>-1&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(n),1)}),pt.spySetState&&pt.spySetState.length&&pt.spySetState.indexOf(e)>-1&&pt.spySetState.splice(pt.spySetState.indexOf(e),1),document.removeEventListener("scroll",pt.scrollHandler)},update:function(){return pt.scrollSpyContainers.forEach(function(e){return pt.scrollHandler(e)})}};Rs.default=pt;var ho={},Ls={};Object.defineProperty(Ls,"__esModule",{value:!0});var vP=function(e,n){var i=e.indexOf("#")===0?e.substring(1):e,r=i?"#"+i:"",a=window&&window.location,o=r?a.pathname+a.search+r:a.pathname+a.search;n?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},_P=function(){return window.location.hash.replace(/^#/,"")},yP=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},xP=function(e){return getComputedStyle(e).position!=="static"},Pf=function(e,n){for(var i=e.offsetTop,r=e.offsetParent;r&&!n(r);)i+=r.offsetTop,r=r.offsetParent;return{offsetTop:i,offsetParent:r}},SP=function(e,n,i){if(i)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(xP(e)){if(n.offsetParent!==e){var r=function(c){return c===e||c===document},a=Pf(n,r),o=a.offsetTop,s=a.offsetParent;if(s!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(c){return c===document};return Pf(n,l).offsetTop-Pf(e,l).offsetTop};Ls.default={updateHash:vP,getHash:_P,filterElementInContainer:yP,scrollOffset:SP};var cc={},pp={};Object.defineProperty(pp,"__esModule",{value:!0});pp.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var mp={};Object.defineProperty(mp,"__esModule",{value:!0});var EP=Ps,MP=["mousedown","mousewheel","touchmove","keydown"];mp.default={subscribe:function(e){return typeof document<"u"&&MP.forEach(function(n){return(0,EP.addPassiveEventListener)(document,n,e)})}};var Ns={};Object.defineProperty(Ns,"__esModule",{value:!0});var Qd={registered:{},scrollEvent:{register:function(e,n){Qd.registered[e]=n},remove:function(e){Qd.registered[e]=null}}};Ns.default=Qd;Object.defineProperty(cc,"__esModule",{value:!0});var TP=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},wP=Ls;fc(wP);var bP=pp,Ov=fc(bP),AP=mp,CP=fc(AP),RP=Ns,ti=fc(RP);function fc(t){return t&&t.__esModule?t:{default:t}}var Rx=function(e){return Ov.default[e.smooth]||Ov.default.defaultEasing},PP=function(e){return typeof e=="function"?e:function(){return e}},LP=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Zd=function(){return LP()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),Px=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Lx=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},Nx=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},NP=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var i=document.body,r=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},DP=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var i=document.body,r=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},IP=function t(e,n,i){var r=n.data;if(!n.ignoreCancelEvents&&r.cancel){ti.default.registered.end&&ti.default.registered.end(r.to,r.target,r.currentPositionY);return}if(r.delta=Math.round(r.targetPosition-r.startPosition),r.start===null&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var a=t.bind(null,e,n);Zd.call(window,a);return}ti.default.registered.end&&ti.default.registered.end(r.to,r.target,r.currentPosition)},gp=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},Ds=function(e,n,i,r){n.data=n.data||Px(),window.clearTimeout(n.data.delayTimeout);var a=function(){n.data.cancel=!0};if(CP.default.subscribe(a),gp(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Lx(n):Nx(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){ti.default.registered.end&&ti.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=PP(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=i,n.data.target=r;var o=Rx(n),s=IP.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){ti.default.registered.begin&&ti.default.registered.begin(n.data.to,n.data.target),Zd.call(window,s)},n.delay);return}ti.default.registered.begin&&ti.default.registered.begin(n.data.to,n.data.target),Zd.call(window,s)},dc=function(e){return e=TP({},e),e.data=e.data||Px(),e.absolute=!0,e},UP=function(e){Ds(0,dc(e))},OP=function(e,n){Ds(e,dc(n))},FP=function(e){e=dc(e),gp(e),Ds(e.horizontal?NP(e):DP(e),e)},kP=function(e,n){n=dc(n),gp(n);var i=n.horizontal?Lx(n):Nx(n);Ds(e+i,n)};cc.default={animateTopScroll:Ds,getAnimationType:Rx,scrollToTop:UP,scrollToBottom:FP,scrollTo:OP,scrollMore:kP};Object.defineProperty(ho,"__esModule",{value:!0});var zP=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},BP=Ls,HP=vp(BP),GP=cc,VP=vp(GP),WP=Ns,Nl=vp(WP);function vp(t){return t&&t.__esModule?t:{default:t}}var Dl={},Fv=void 0;ho.default={unmount:function(){Dl={}},register:function(e,n){Dl[e]=n},unregister:function(e){delete Dl[e]},get:function(e){return Dl[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return Fv=e},getActiveLink:function(){return Fv},scrollTo:function(e,n){var i=this.get(e);if(!i){console.warn("target Element not found");return}n=zP({},n,{absolute:!1});var r=n.containerId,a=n.container,o=void 0;r?o=document.getElementById(r):a&&a.nodeType?o=a:o=document,n.absolute=!0;var s=n.horizontal,l=HP.default.scrollOffset(o,i,s)+(n.offset||0);if(!n.smooth){Nl.default.registered.begin&&Nl.default.registered.begin(e,i),o===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):o.scrollTop=l,Nl.default.registered.end&&Nl.default.registered.end(e,i);return}VP.default.animateTopScroll(l,n,e,i)}};var hc={};Object.defineProperty(hc,"__esModule",{value:!0});var XP=Ls,Lf=jP(XP);function jP(t){return t&&t.__esModule?t:{default:t}}var $P={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var i=this.scroller,r=i.get(e);if(r&&(n||e!==i.getActiveLink())){var a=this.containers[e]||document;i.scrollTo(e,{container:a})}},getHash:function(){return Lf.default.getHash()},changeHash:function(e,n){this.isInitialized()&&Lf.default.getHash()!==e&&Lf.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};hc.default=$P;Object.defineProperty(Cs,"__esModule",{value:!0});var Il=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},YP=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),qP=Kt,kv=Is(qP),KP=Rs,Ul=Is(KP),QP=ho,ZP=Is(QP),JP=Es,ct=Is(JP),e3=hc,Xi=Is(e3);function Is(t){return t&&t.__esModule?t:{default:t}}function t3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n3(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function i3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var zv={to:ct.default.string.isRequired,containerId:ct.default.string,container:ct.default.object,activeClass:ct.default.string,activeStyle:ct.default.object,spy:ct.default.bool,horizontal:ct.default.bool,smooth:ct.default.oneOfType([ct.default.bool,ct.default.string]),offset:ct.default.number,delay:ct.default.number,isDynamic:ct.default.bool,onClick:ct.default.func,duration:ct.default.oneOfType([ct.default.number,ct.default.func]),absolute:ct.default.bool,onSetActive:ct.default.func,onSetInactive:ct.default.func,ignoreCancelEvents:ct.default.bool,hashSpy:ct.default.bool,saveHashHistory:ct.default.bool,spyThrottle:ct.default.number};Cs.default=function(t,e){var n=e||ZP.default,i=function(a){i3(o,a);function o(s){t3(this,o);var l=n3(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,s));return r.call(l),l.state={active:!1},l}return YP(o,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();Ul.default.isMounted(l)||Ul.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(Xi.default.isMounted()||Xi.default.mount(n),Xi.default.mapContainer(this.props.to,l)),Ul.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){Ul.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=Il({},this.props.style,this.props.activeStyle):u=Il({},this.props.style);var c=Il({},this.props);for(var d in zv)c.hasOwnProperty(d)&&delete c[d];return c.className=l,c.style=u,c.onClick=this.handleClick,kv.default.createElement(t,c)}}]),o}(kv.default.PureComponent),r=function(){var o=this;this.scrollTo=function(s,l){n.scrollTo(s,Il({},o.state,l))},this.handleClick=function(s){o.props.onClick&&o.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(s,l){var u=o.getScrollSpyContainer();if(!(Xi.default.isMounted()&&!Xi.default.isInitialized())){var c=o.props.horizontal,d=o.props.to,h=null,m=void 0,_=void 0;if(c){var y=0,p=0,f=0;if(u.getBoundingClientRect){var v=u.getBoundingClientRect();f=v.left}if(!h||o.props.isDynamic){if(h=n.get(d),!h)return;var g=h.getBoundingClientRect();y=g.left-f+s,p=y+g.width}var S=s-o.props.offset;m=S>=Math.floor(y)&&S<Math.floor(p),_=S<Math.floor(y)||S>=Math.floor(p)}else{var A=0,b=0,T=0;if(u.getBoundingClientRect){var N=u.getBoundingClientRect();T=N.top}if(!h||o.props.isDynamic){if(h=n.get(d),!h)return;var j=h.getBoundingClientRect();A=j.top-T+l,b=A+j.height}var x=l-o.props.offset;m=x>=Math.floor(A)&&x<Math.floor(b),_=x<Math.floor(A)||x>=Math.floor(b)}var R=n.getActiveLink();if(_){if(d===R&&n.setActiveLink(void 0),o.props.hashSpy&&Xi.default.getHash()===d){var X=o.props.saveHashHistory,K=X===void 0?!1:X;Xi.default.changeHash("",K)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(d,h))}if(m&&(R!==d||o.state.active===!1)){n.setActiveLink(d);var P=o.props.saveHashHistory,W=P===void 0?!1:P;o.props.hashSpy&&Xi.default.changeHash(d,W),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(d,h))}}}};return i.propTypes=zv,i.defaultProps={offset:0},i};Object.defineProperty(hp,"__esModule",{value:!0});var r3=Kt,Bv=Dx(r3),a3=Cs,o3=Dx(a3);function Dx(t){return t&&t.__esModule?t:{default:t}}function s3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Hv(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function l3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u3=function(t){l3(e,t);function e(){var n,i,r,a;s3(this,e);for(var o=arguments.length,s=Array(o),l=0;l<o;l++)s[l]=arguments[l];return a=(i=(r=Hv(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(s))),r),r.render=function(){return Bv.default.createElement("a",r.props,r.props.children)},i),Hv(r,a)}return e}(Bv.default.Component);hp.default=(0,o3.default)(u3);var _p={};Object.defineProperty(_p,"__esModule",{value:!0});var c3=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),f3=Kt,Gv=Ix(f3),d3=Cs,h3=Ix(d3);function Ix(t){return t&&t.__esModule?t:{default:t}}function p3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m3(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function g3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var v3=function(t){g3(e,t);function e(){return p3(this,e),m3(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return c3(e,[{key:"render",value:function(){return Gv.default.createElement("button",this.props,this.props.children)}}]),e}(Gv.default.Component);_p.default=(0,h3.default)(v3);var yp={},pc={};Object.defineProperty(pc,"__esModule",{value:!0});var _3=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},y3=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),x3=Kt,Vv=mc(x3),S3=py;mc(S3);var E3=ho,Wv=mc(E3),M3=Es,Xv=mc(M3);function mc(t){return t&&t.__esModule?t:{default:t}}function T3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w3(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function b3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}pc.default=function(t){var e=function(n){b3(i,n);function i(r){T3(this,i);var a=w3(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return a.childBindings={domNode:null},a}return y3(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Wv.default.unregister(this.props.name)}},{key:"registerElems",value:function(a){Wv.default.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return Vv.default.createElement(t,_3({},this.props,{parentBindings:this.childBindings}))}}]),i}(Vv.default.Component);return e.propTypes={name:Xv.default.string,id:Xv.default.string},e};Object.defineProperty(yp,"__esModule",{value:!0});var jv=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},A3=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),C3=Kt,$v=xp(C3),R3=pc,P3=xp(R3),L3=Es,Yv=xp(L3);function xp(t){return t&&t.__esModule?t:{default:t}}function N3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function D3(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function I3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ux=function(t){I3(e,t);function e(){return N3(this,e),D3(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return A3(e,[{key:"render",value:function(){var i=this,r=jv({},this.props);return delete r.name,r.parentBindings&&delete r.parentBindings,$v.default.createElement("div",jv({},r,{ref:function(o){i.props.parentBindings.domNode=o}}),this.props.children)}}]),e}($v.default.Component);Ux.propTypes={name:Yv.default.string,id:Yv.default.string};yp.default=(0,P3.default)(Ux);var Nf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},qv=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function Kv(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Qv(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Zv(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ol=Kt,Rr=Rs,Df=ho,mt=Es,ji=hc,Jv={to:mt.string.isRequired,containerId:mt.string,container:mt.object,activeClass:mt.string,spy:mt.bool,smooth:mt.oneOfType([mt.bool,mt.string]),offset:mt.number,delay:mt.number,isDynamic:mt.bool,onClick:mt.func,duration:mt.oneOfType([mt.number,mt.func]),absolute:mt.bool,onSetActive:mt.func,onSetInactive:mt.func,ignoreCancelEvents:mt.bool,hashSpy:mt.bool,spyThrottle:mt.number},U3={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=n||Df,r=function(o){Zv(s,o);function s(l){Kv(this,s);var u=Qv(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return a.call(u),u.state={active:!1},u}return qv(s,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Rr.isMounted(u)||Rr.mount(u,this.props.spyThrottle),this.props.hashSpy&&(ji.isMounted()||ji.mount(i),ji.mapContainer(this.props.to,u)),this.props.spy&&Rr.addStateHandler(this.stateHandler),Rr.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Rr.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c=Nf({},this.props);for(var d in Jv)c.hasOwnProperty(d)&&delete c[d];return c.className=u,c.onClick=this.handleClick,Ol.createElement(e,c)}}]),s}(Ol.Component),a=function(){var s=this;this.scrollTo=function(l,u){i.scrollTo(l,Nf({},s.state,u))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.stateHandler=function(){i.getActiveLink()!==s.props.to&&(s.state!==null&&s.state.active&&s.props.onSetInactive&&s.props.onSetInactive(),s.setState({active:!1}))},this.spyHandler=function(l){var u=s.getScrollSpyContainer();if(!(ji.isMounted()&&!ji.isInitialized())){var c=s.props.to,d=null,h=0,m=0,_=0;if(u.getBoundingClientRect){var y=u.getBoundingClientRect();_=y.top}if(!d||s.props.isDynamic){if(d=i.get(c),!d)return;var p=d.getBoundingClientRect();h=p.top-_+l,m=h+p.height}var f=l-s.props.offset,v=f>=Math.floor(h)&&f<Math.floor(m),g=f<Math.floor(h)||f>=Math.floor(m),S=i.getActiveLink();if(g)return c===S&&i.setActiveLink(void 0),s.props.hashSpy&&ji.getHash()===c&&ji.changeHash(),s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive()),Rr.updateStates();if(v&&S!==c)return i.setActiveLink(c),s.props.hashSpy&&ji.changeHash(c),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(c)),Rr.updateStates()}}};return r.propTypes=Jv,r.defaultProps={offset:0},r},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(i){Zv(r,i);function r(a){Kv(this,r);var o=Qv(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,a));return o.childBindings={domNode:null},o}return qv(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Df.unregister(this.props.name)}},{key:"registerElems",value:function(o){Df.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return Ol.createElement(e,Nf({},this.props,{parentBindings:this.childBindings}))}}]),r}(Ol.Component);return n.propTypes={name:mt.string,id:mt.string},n}},O3=U3;Object.defineProperty(xt,"__esModule",{value:!0});xt.Helpers=xt.ScrollElement=xt.ScrollLink=xt.animateScroll=xt.scrollSpy=xt.Events=xt.scroller=eu=xt.Element=xt.Button=Jl=xt.Link=void 0;var F3=hp,Ox=fi(F3),k3=_p,Fx=fi(k3),z3=yp,kx=fi(z3),B3=ho,zx=fi(B3),H3=Ns,Bx=fi(H3),G3=Rs,Hx=fi(G3),V3=cc,Gx=fi(V3),W3=Cs,Vx=fi(W3),X3=pc,Wx=fi(X3),j3=O3,Xx=fi(j3);function fi(t){return t&&t.__esModule?t:{default:t}}var Jl=xt.Link=Ox.default;xt.Button=Fx.default;var eu=xt.Element=kx.default;xt.scroller=zx.default;xt.Events=Bx.default;xt.scrollSpy=Hx.default;xt.animateScroll=Gx.default;xt.ScrollLink=Vx.default;xt.ScrollElement=Wx.default;xt.Helpers=Xx.default;xt.default={Link:Ox.default,Button:Fx.default,Element:kx.default,scroller:zx.default,Events:Bx.default,scrollSpy:Hx.default,animateScroll:Gx.default,ScrollLink:Vx.default,ScrollElement:Wx.default,Helpers:Xx.default};const $3=()=>se.jsx("header",{className:"fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 mb-8 py-1 px-4 bg-opacity-80 bg-blue-950 text-white z-50 rounded-full max-w-xs backdrop-blur-sm",children:se.jsx("nav",{children:se.jsxs("ul",{className:"flex justify-center space-x-4",children:[se.jsx("li",{children:se.jsx(Jl,{to:"about",spy:!0,smooth:!0,duration:500,className:"hover:text-gray-300",children:"About"})}),se.jsx("li",{children:se.jsx(Jl,{to:"projects",spy:!0,smooth:!0,duration:500,className:"hover:text-gray-300",children:"Projects"})}),se.jsx("li",{children:se.jsx(Jl,{to:"contact",spy:!0,smooth:!0,duration:500,className:"hover:text-gray-300",children:"Contact"})})]})})}),Y3=({project:t})=>{const e=Kt.useRef(null);return Kt.useEffect(()=>(VanillaTilt.init(e.current,{max:25,speed:400,glare:!0,"max-glare":.5}),()=>e.current.vanillaTilt.destroy()),[]),se.jsxs("div",{ref:e,className:"rounded-lg overflow-hidden shadow-lg flex flex-col flex-grow bg-blue-900 bg-opacity-80 backdrop-blur","data-tilt":!0,children:[se.jsxs("div",{className:"p-4 flex justify-center items-center",style:{height:"200px"},children:[" ",se.jsx("div",{className:"w-full h-full overflow-hidden rounded-lg border-4 border-blue-950",children:se.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover object-center"})})]}),se.jsxs("div",{className:"p-6 flex-grow",children:[se.jsx("h3",{className:"text-xl text-white font-semibold mb-2",children:t.title}),se.jsx("p",{className:"text-gray-300 text-base mb-4",children:t.description}),se.jsx("div",{className:"flex flex-wrap mb-4",children:t.tech.map((n,i)=>se.jsx("span",{className:"inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2",children:n},i))})]}),se.jsxs("div",{className:"flex justify-between items-center p-4 bg-blue-900 bg-opacity-80 backdrop-blur-md",children:[se.jsxs("a",{href:t.liveLink,target:"_blank",rel:"noopener noreferrer",className:"text-sm bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center",children:[se.jsx(LT,{className:"mr-2"}),"Visit"]}),se.jsxs("a",{href:t.codeLink,target:"_blank",rel:"noopener noreferrer",className:"text-sm bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded inline-flex items-center",children:[se.jsx(NT,{className:"mr-2"}),"Code"]})]})]})},q3="/my-portfolio/assets/eReader-_h_7zAyr.png",K3="/my-portfolio/assets/AI-Scheduler-txodUCFM.png",Q3="/my-portfolio/assets/PlanWise-TA6XaJhn.png",Z3=[{title:"AI Scheduler",description:"This project connects to your Google account and uses OpenAI to generate a schedule for you based on provided input.",image:K3,tech:["React","ASP.NET"],liveLink:"#",codeLink:"#"},{title:"e-Reader",description:"Loads and displays your epub files! Gave me experience working with epubs especially the ones that have a table of contents with sub-sections within sections.",image:q3,tech:["UI","Firebase"],liveLink:"#",codeLink:"#"},{title:"PlanWise",description:"This application retrieves US health insurance information for you based on an input form you fill out. The information can be filtered. It uses a proxy server in Node.JS to talk to the Marketplace API and get the insurance data.",image:Q3,tech:["React","NodeJS"],liveLink:"#",codeLink:"#"}],J3=()=>se.jsxs("div",{className:"mx-auto max-w-6xl p-10",children:[se.jsx("h2",{className:"text-4xl text-white mb-10",children:"Projects"}),se.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full",children:Z3.map((t,e)=>se.jsx("div",{className:"flex flex-col h-full",children:se.jsx(Y3,{project:t})},e))})]});function eL(){return se.jsxs("div",{className:"App",children:[se.jsx($3,{}),se.jsxs("div",{className:"main-content",children:[se.jsx(eu,{name:"about",children:se.jsx(RT,{})}),se.jsxs("div",{className:"additional-content",children:[se.jsx(eu,{name:"projects",children:se.jsx(J3,{})}),se.jsx(eu,{name:"contact",children:se.jsx($R,{})})]})]})]})}If.createRoot(document.getElementById("root")).render(se.jsx(oi.StrictMode,{children:se.jsx(eL,{})}));
