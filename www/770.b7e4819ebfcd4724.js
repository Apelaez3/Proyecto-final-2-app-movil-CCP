"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[770],{333:(y,s,a)=>{a.d(s,{c:()=>u,g:()=>_,h:()=>m,o:()=>v});var t=a(467);const m=(n,i)=>null!==i.closest(n),u=(n,i)=>"string"==typeof n&&n.length>0?Object.assign({"ion-color":!0,[`ion-color-${n}`]:!0},i):i,_=n=>{const i={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(c=>null!=c).map(c=>c.trim()).filter(c=>""!==c):[])(n).forEach(c=>i[c]=!0),i},p=/^[a-z][a-z0-9+\-.]*:/,v=function(){var n=(0,t.A)(function*(i,c,b,d){if(null!=i&&"#"!==i[0]&&!p.test(i)){const h=document.querySelector("ion-router");if(h)return null!=c&&c.preventDefault(),h.push(i,b,d)}return!1});return function(c,b,d,h){return n.apply(this,arguments)}}()},770:(y,s,a)=>{a.r(s),a.d(s,{ion_select_modal:()=>C});var t=a(6317),m=a(4346),u=a(4626),l=a(333);a(8476),a(6221),a(1970),a(9144);const C=(()=>{let g=class{constructor(o){(0,t.r)(this,o),this.header=void 0,this.multiple=void 0,this.options=[]}closeModal(){const o=this.el.closest("ion-modal");o&&o.dismiss()}findOptionFromEvent(o){const{options:e}=this;return e.find(r=>r.value===o.target.value)}getValues(o){const{multiple:e,options:r}=this;if(e)return r.filter(f=>f.checked).map(f=>f.value);const k=o?this.findOptionFromEvent(o):null;return k?k.value:void 0}callOptionHandler(o){const e=this.findOptionFromEvent(o),r=this.getValues(o);null!=e&&e.handler&&(0,u.s)(e.handler,r)}setChecked(o){const{multiple:e}=this,r=this.findOptionFromEvent(o);e&&r&&(r.checked=o.detail.checked)}renderRadioOptions(){const o=this.options.filter(e=>e.checked).map(e=>e.value)[0];return(0,t.h)("ion-radio-group",{value:o,onIonChange:e=>this.callOptionHandler(e)},this.options.map(e=>(0,t.h)("ion-item",{lines:"none",class:Object.assign({"item-radio-checked":e.value===o},(0,l.g)(e.cssClass))},(0,t.h)("ion-radio",{value:e.value,disabled:e.disabled,justify:"start",labelPlacement:"end",onClick:()=>this.closeModal(),onKeyUp:r=>{" "===r.key&&this.closeModal()}},e.text))))}renderCheckboxOptions(){return this.options.map(o=>(0,t.h)("ion-item",{class:Object.assign({"item-checkbox-checked":o.checked},(0,l.g)(o.cssClass))},(0,t.h)("ion-checkbox",{value:o.value,disabled:o.disabled,checked:o.checked,justify:"start",labelPlacement:"end",onIonChange:e=>{this.setChecked(e),this.callOptionHandler(e),(0,t.i)(this)}},o.text)))}render(){return(0,t.h)(t.e,{key:"885198a9f21884e3bfb9bf0af53e0ee3ae37b231",class:(0,m.b)(this)},(0,t.h)("ion-header",{key:"d8b63726869747ac711e4fda78a50ce46f72970c"},(0,t.h)("ion-toolbar",{key:"9ab2a4c1480dd74eeae38d7b580a2e87fb71270e"},void 0!==this.header&&(0,t.h)("ion-title",{key:"87a7034385ef57f55cefdd0371dbb66a64827290"},this.header),(0,t.h)("ion-buttons",{key:"0a35424ea13ca002abc9a43b6138730254f187d0",slot:"end"},(0,t.h)("ion-button",{key:"238bf40b47128d9aa995d14d9ff9ebcae4f79492",onClick:()=>this.closeModal()},"Close")))),(0,t.h)("ion-content",{key:"4a256f3381f8cabbc7194337b8ae4aa1c3ab1066"},(0,t.h)("ion-list",{key:"acd38fc52024632176467ed6a84106a454021544"},!0===this.multiple?this.renderCheckboxOptions():this.renderRadioOptions())))}get el(){return(0,t.f)(this)}};return g.style={ionic:".sc-ion-select-modal-ionic-h{height:100%}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(container){display:none}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-ionic{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-ionic{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-ionic{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}",ios:'.sc-ion-select-modal-ios-h{height:100%}ion-item.sc-ion-select-modal-ios{--inner-padding-end:0}ion-radio.sc-ion-select-modal-ios::after{bottom:0;position:absolute;width:calc(100% - 0.9375rem - 16px);border-width:0px 0px 0.55px 0px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));content:""}ion-radio.sc-ion-select-modal-ios::after{inset-inline-start:calc(0.9375rem + 16px)}',md:".sc-ion-select-modal-md-h{height:100%}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(container){display:none}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}"},g})()}}]);