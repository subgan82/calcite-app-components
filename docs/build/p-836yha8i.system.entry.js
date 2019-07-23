System.register(["./p-7441af2f.system.js","./p-3fdb945e.system.js"],function(e){"use strict";var t,n,i,s,r;return{setters:[function(e){t=e.r;n=e.h;i=e.H;s=e.g},function(e){r=e.x}],execute:function(){function o(){return typeof Storage!=="undefined"}function l(e){if(!e||!o()){return null}return localStorage.getItem(e)}function u(e,t){if(!e||!o()){return}localStorage.setItem(e,t)}var c={close:"close",content:"content",link:"link"};var a=function(){function e(e){t(this,e);this.nonDismissible=false;this.dismissed=l(this.el.tagName.toLowerCase()+"-"+this.storageId)!==null}e.prototype.hideTip=function(){this.dismissed=true;var e=this.storageId;if(e){u(this.el.tagName.toLowerCase()+"-"+e,"dismissed")}};e.prototype.render=function(){var e=this;return n(i,{hidden:this.dismissed},n("slot",{name:"heading"}),!this.nonDismissible?n("div",{class:c.close,onClick:function(){return e.hideTip()}},n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},n("path",{d:r}))):null,n("div",{class:c.content},n("slot",{name:"thumbnail"}),n("div",null,n("slot",null),this.el.querySelector("[slot=link]")?n("p",{class:c.link},n("slot",{name:"link"})):null)))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{--line-height:1.3rem;--base-font-size:14px;--font-size-2:1.429rem;--font-size-1:1.143rem;--font-size-0:1rem;--font-size--1:0.858rem;--font-weight:400;--font-weight-heading:600;--font-weight-bold:600;font-size:var(--font-size-0);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:2px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:125ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#2b2b2b;--calcite-app-foreground-active:#59d6ff;--calcite-app-border:#eaeaea}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}html{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;font-size:14px;line-height:1.3rem}:host{position:relative;display:block;padding:24px 12px;background-color:#fff;color:#6e6e6e;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75)}:host([hidden]){display:none}.close,.title{font-size:24px}.close{position:absolute;top:0;right:0;width:24px;height:24px;margin:24px 12px;cursor:pointer}:host-context([dir=rtl]) .close{right:auto;left:0}.content{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.content>:last-child{margin-left:12px;margin-right:auto}:host-context([dir=rtl]) .content>:last-child{margin-right:12px;margin-left:auto}"},enumerable:true,configurable:true});return e}();e("calcite_tip",a)}}});