import{r as t,c as e,h as i,H as s,g as h}from"./p-aef71dcb.js";import{S as c,E as r,L as a,R as l,U as o,D as n,H as d,b as m}from"./p-6415f679.js";import{a as u,g as f,n as p,c as g}from"./p-73b84262.js";import{b}from"./p-12295034.js";var v;!function(t){t.Single="single",t.Multi="multi",t.Children="children",t.MultiChildren="multi-children"}(v||(v={}));const k=class{constructor(i){t(this,i),this.lines=!1,this.root=!0,this.theme="light",this.size="m",this.selectionMode=v.Single,this.calciteTreeSelect=e(this,"calciteTreeSelect",7)}componentWillUpdate(){}componentWillRender(){const t=this.el.parentElement.closest("calcite-tree");this.theme=u(this.el),this.lines=t?t.lines:this.lines,this.size=t?t.size:this.size,this.selectionMode=t?t.selectionMode:this.selectionMode,this.root=!t}render(){const t=f(this.el);return i(s,{tabindex:this.root?"1":void 0,dir:t,"aria-role":this.root?"tree":void 0,"aria-multiselectable":this.selectionMode===v.Multi||this.selectionMode===v.MultiChildren},i("slot",null))}onFocus(){if(this.root){const t=this.el.querySelector("calcite-tree-item[selected]"),e=this.el.querySelector("calcite-tree-item");(t||e).focus()}}onClick(t){const e=t.target,i=p(e.querySelectorAll("calcite-tree-item")),s=t.detail.modifyCurrentSelection&&(this.selectionMode===v.Multi||this.selectionMode===v.MultiChildren),h=this.selectionMode===v.MultiChildren||this.selectionMode===v.Children,c=!s&&((this.selectionMode===v.Single||this.selectionMode===v.Multi)&&i.length<=0||this.selectionMode===v.Children||this.selectionMode===v.MultiChildren),r=this.selectionMode===v.Children||this.selectionMode===v.MultiChildren;if(this.root){const a=[];null!==this.selectionMode&&(!e.hasChildren||e.hasChildren&&(this.selectionMode===v.Children||this.selectionMode===v.MultiChildren))&&a.push(e),h&&i.forEach(t=>{a.push(t)}),c&&p(this.el.querySelectorAll("calcite-tree-item[selected]")).forEach(t=>{a.includes(t)||(t.selected=!1)}),r&&!t.detail.forceToggle&&(e.expanded=!0),s&&window.getSelection().removeAllRanges(),a.forEach(s&&e.selected||h&&t.detail.forceToggle?t=>{t.selected=!1}:t=>{t.selected=!0})}this.root&&(t.preventDefault(),t.stopPropagation()),this.calciteTreeSelect.emit({selected:p(this.el.querySelectorAll("calcite-tree-item")).filter(t=>t.selected)})}get el(){return h(this)}static get style(){return":host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:block;outline:none;--calcite-tree-text:#404040;--calcite-tree-text-hover:#151515;--calcite-tree-text-active:#0b0b0b;--calcite-tree-chevron:#bfbfbf;--calcite-tree-chevron-hover:#6a6a6a;--calcite-tree-chevron-active:#007ac2;--calcite-tree-vertical-padding:0.375rem;--calcite-tree-indicator:#bfbfbf;--calcite-tree-indicator-active:#007ac2;--calcite-tree-indicator-first-start:0.1rem;--calcite-tree-indicator-first-end:0;--calcite-tree-indicator-distance-start:0.15rem;--calcite-tree-indicator-distance-end:0;--calcite-tree-icon-edge-distance-start:-0.2rem;--calcite-tree-icon-edge-distance-end:0;--calcite-tree-icon-content-distance-start:0.375rem;--calcite-tree-icon-content-distance-end:0;--calcite-tree-indent-start:1.4rem;--calcite-tree-indent-end:0;--calcite-tree-children-indent-start:0.25rem;--calcite-tree-children-indent-end:0;--calcite-tree-children-padding-start:1rem;--calcite-tree-children-padding-end:0;--calcite-tree-line-position-start:0.05rem;--calcite-tree-line-position-end:0;--calcite-tree-parent-line-position-start:-0.95rem;--calcite-tree-parent-line-position-end:0;--calcite-tree-line-width:1px;--calcite-tree-hover-line-width:3px}:host([theme=dark]){--calcite-tree-text:#d4d4d4;--calcite-tree-text-hover:#eaeaea;--calcite-tree-text-active:#f3f3f3;--calcite-tree-chevron:#555;--calcite-tree-chevron-hover:#959595;--calcite-tree-chevron-active:#3db8ff;--calcite-tree-indicator:#555;--calcite-tree-indicator-active:#3db8ff}:host([lines]){--calcite-tree-line:#eaeaea;--calcite-tree-line-hover:#cacaca;--calcite-tree-line-active:#007ac2}:host([lines][theme=dark]){--calcite-tree-line:#555;--calcite-tree-line-hover:grey;--calcite-tree-line-active:#3db8ff}:host([size=s]){--calcite-tree-hover-line-width:2px;--calcite-tree-vertical-padding:0.1875rem;--calcite-tree-children-indent-start:0rem;--calcite-tree-children-padding-start:0.8rem;--calcite-tree-line-position-start:0.3rem;--calcite-tree-parent-line-position-start:-0.5rem}:host([dir=rtl]){--calcite-tree-indicator-first-start:0;--calcite-tree-indicator-first-end:0.1rem;--calcite-tree-indicator-distance-start:0;--calcite-tree-indicator-distance-end:0.15rem;--calcite-tree-icon-edge-distance-start:0;--calcite-tree-icon-edge-distance-end:-0.2rem;--calcite-tree-icon-content-distance-start:0;--calcite-tree-icon-content-distance-end:0.375rem;--calcite-tree-indent-start:0;--calcite-tree-indent-end:1.4rem;--calcite-tree-children-indent-start:0;--calcite-tree-children-indent-end:0.25rem;--calcite-tree-children-padding-start:0;--calcite-tree-children-padding-end:1rem;--calcite-tree-line-position-start:0;--calcite-tree-line-position-end:0.05rem;--calcite-tree-parent-line-position-start:0;--calcite-tree-parent-line-position-end:-0.95rem}:host([dir=rtl][size=s]){--calcite-tree-children-indent-end:0rem;--calcite-tree-children-padding-end:0.8rem;--calcite-tree-line-position-end:0.3rem;--calcite-tree-parent-line-position-end:-0.5rem}"}},w=class{constructor(i){t(this,i),this.selected=!1,this.depth=-1,this.hasChildren=null,this.expanded=!1,this.parentExpanded=!1,this.calciteTreeItemSelect=e(this,"calciteTreeItemSelect",7)}expandedHandler(t){const[e]=g(this.childrenSlotWrapper,"calcite-tree");g(e,"calcite-tree-item").forEach(e=>e.parentExpanded=t)}componentWillRender(){this.hasChildren=!!this.el.querySelector("calcite-tree");let t,e=this.el.closest("calcite-tree");for(this.selectionMode=e.selectionMode,this.depth=0;e&&(t=e.parentElement.closest("calcite-tree"))!==e;)e=t,this.depth=this.depth+1}render(){const t=f(this.el),e=this.hasChildren?i("svg",{class:"calcite-tree-chevron",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 16 16"},i("path",{d:b})):null;return i(s,{tabindex:this.parentExpanded||1===this.depth?"0":"-1",dir:t,"aria-role":"treeitem","aria-hidden":this.parentExpanded||1===this.depth?void 0:"true","aria-selected":this.selected?"true":this.selectionMode===v.Multi||this.selectionMode===v.MultiChildren?"false":void 0,"aria-expanded":this.hasChildren?this.expanded?"true":"false":void 0},i("div",{class:"calcite-tree-node"},e,i("slot",null)),i("div",{class:"calcite-tree-children",role:this.hasChildren?"group":void 0,ref:t=>this.childrenSlotWrapper=t},i("slot",{name:"children"})))}onClick(t){const e=t.target,i=t.originalTarget||t.path[0],s=i&&!!i.closest("svg"),h=e.parentElement===this.el||this.el===t.target,c=p(this.el.children).find(t=>t.matches("a"));if(c&&!s&&e===this.el)return this.calciteTreeItemSelect.emit({modifyCurrentSelection:t.shiftKey,forceToggle:s}),void("A"!==i.tagName&&c.click());h&&this.hasChildren&&(this.expanded=!this.expanded),h&&this.calciteTreeItemSelect.emit({modifyCurrentSelection:t.shiftKey,forceToggle:s})}keyDownHandler(t){let e;switch(t.keyCode){case c:this.selected=!this.selected,t.preventDefault(),t.stopPropagation();break;case r:const i=p(this.el.children).find(t=>t.matches("a"));i?(i.click(),this.selected=!0):this.selected=!this.selected,t.preventDefault(),t.stopPropagation();break;case a:if(this.hasChildren&&this.expanded){this.expanded=!1,t.preventDefault(),t.stopPropagation();break}const s=this.el.parentElement.closest("calcite-tree-item");if(s&&(!this.hasChildren||!1===this.expanded)){s.focus(),t.preventDefault(),t.stopPropagation();break}break;case l:if(this.hasChildren&&!1===this.expanded){this.expanded=!0,t.preventDefault(),t.stopPropagation();break}if(this.hasChildren&&this.expanded){this.el.querySelector("calcite-tree-item").focus();break}break;case o:const h=this.el.previousElementSibling;h&&h.matches("calcite-tree-item")&&h.focus();break;case n:const u=this.el.nextElementSibling;u&&u.matches("calcite-tree-item")&&u.focus();break;case d:(e=this.el.closest("calcite-tree[root]")).querySelector("calcite-tree-item").focus();break;case m:let f=(e=this.el.closest("calcite-tree[root]")).children[e.children.length-1],g=p(f.children).find(t=>t.matches("calcite-tree"));for(;g;)g=p((f=g.children[e.children.length-1]).children).find(t=>t.matches("calcite-tree"));f.focus()}}get el(){return h(this)}static get watchers(){return{expanded:["expandedHandler"]}}static get style(){return"\@charset \"UTF-8\";:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:block;color:var(--calcite-tree-text);cursor:pointer;outline:none;max-width:100%}::slotted(*),:host{font-size:.875rem;line-height:1.5}::slotted(*){color:var(--calcite-tree-text)!important}::slotted(*),::slotted(*):hover{text-decoration:none!important}.calcite-tree-children{z-index:1;margin-left:var(--calcite-tree-children-indent-start);margin-right:var(--calcite-tree-children-indent-end);padding-left:var(--calcite-tree-children-padding-start);padding-right:var(--calcite-tree-children-padding-end);position:relative;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;overflow:hidden;-webkit-transition:.15s cubic-bezier(.215,.44,.42,.88),opacity .15s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.15s cubic-bezier(.215,.44,.42,.88),opacity .15s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;height:0;-webkit-transform-origin:top;transform-origin:top}.calcite-tree-children:after{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-line-position-start);right:var(--calcite-tree-line-position-end);top:0;position:absolute}:host([expanded])>.calcite-tree-children{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}:host([has-children]) .calcite-tree-children:focus:after,:host([has-children]) .calcite-tree-children:hover:after{background:var(--calcite-tree-line-hover)}.calcite-tree-node{display:-ms-flexbox;display:flex;padding:var(--calcite-tree-vertical-padding) 0;padding-left:var(--calcite-tree-indent-start);padding-right:var(--calcite-tree-indent-end);position:relative}.calcite-tree-node:before{content:\"•\";left:var(--calcite-tree-indicator-distance-start);right:var(--calcite-tree-indicator-distance-end);opacity:0;color:var(--calcite-tree-indicator)}.calcite-tree-node:after,.calcite-tree-node:before{position:absolute;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.calcite-tree-node:after{content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-parent-line-position-start);right:var(--calcite-tree-parent-line-position-end);top:0}:host([depth=\"1\"])>.calcite-tree-node:after{display:none}:host([has-children])>.calcite-tree-node{padding-left:0;padding-right:0}:host([has-children])>.calcite-tree-node:before{display:none}:host([depth=\"1\"])>.calcite-tree-children:before,:host([depth=\"1\"])>.calcite-tree-node:before{left:var(--calcite-tree-indicator-first-start);right:var(--calcite-tree-indicator-first-end)}.calcite-tree-node:hover:before,:host(:focus) .calcite-tree-node:before,:host([selected]) .calcite-tree-node:hover:before{opacity:1}.calcite-tree-node:hover:after,:host(:focus) .calcite-tree-node:after,:host([selected]) .calcite-tree-node:hover:after{width:var(--calcite-tree-hover-line-width);background:var(--calcite-tree-line-hover);z-index:2}.calcite-tree-node:hover ::slotted(*),:host(:focus) .calcite-tree-node ::slotted(*),:host([selected]) .calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-hover)}.calcite-tree-node:hover .calcite-tree-chevron,:host(:focus) .calcite-tree-node .calcite-tree-chevron,:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover)}.calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator{fill:var(--calcite-tree-indicator-hover)}:host([selected])>.calcite-tree-node,:host([selected])>.calcite-tree-node:hover{color:var(--calcite-tree-text-active);font-weight:500}:host([selected])>.calcite-tree-node:before,:host([selected])>.calcite-tree-node:hover:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([selected])>.calcite-tree-node:after,:host([selected])>.calcite-tree-node:hover:after{background:var(--calcite-tree-line-active);width:var(--calcite-tree-hover-line-width);z-index:2}:host([selected])>.calcite-tree-node ::slotted(*),:host([selected])>.calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded])>.calcite-tree-node{color:var(--calcite-tree-text-active);font-weight:500}:host([has-children][expanded])>.calcite-tree-node:after{background:var(--calcite-tree-line-active)}:host([has-children][expanded])>.calcite-tree-node:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([has-children][expanded])>.calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded][selected])>.calcite-tree-node:after{background:var(--calcite-tree-line-active);width:var(--calcite-tree-hover-line-width);z-index:2}.calcite-tree-chevron{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:0 0 auto;flex:0 0 auto;position:relative;-ms-flex-item-align:center;align-self:center;left:var(--calcite-tree-icon-edge-distance-start);right:var(--calcite-tree-icon-edge-distance-end);margin-right:var(--calcite-tree-icon-content-distance-start);margin-left:var(--calcite-tree-icon-content-distance-end);-webkit-transform:rotate(0deg);transform:rotate(0deg);fill:var(--calcite-tree-chevron)}:host([dir=rtl]) .calcite-tree-chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(:focus) .calcite-tree-chevron,:host(:hover) .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover);stroke:var(--calcite-tree-chevron-hover);stroke-width:.75}:host([expanded])>.calcite-tree-node>.calcite-tree-chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg);fill:var(--calcite-tree-chevron-active);stroke-width:.75;stroke:var(--calcite-tree-chevron-active)}"}};export{k as calcite_tree,w as calcite_tree_item};