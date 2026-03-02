import{C as ht,u as le,c as T,r as B,p as $e,d as W,i as oe,h as a,V as Ee,m as vt,a as mt,o as Ke,b as bt,e as pt,f as ze,t as Z,g as se,j as k,k as g,l as M,N as Ie,n as ae,q as Q,s as gt,v as pe,w as X,x as xt,y as Fe,z as O,A as wt,B as Ct,D as yt,E as kt,F as St,G as Rt,H as Ge,I as zt,J as Oe,K as Je,L as Y,M as ce,O as Tt,P as _t,Q as $t,R as It,S as Ft,T as Pe,U as Ot,W as Lt,X as At,Y as Et,Z as Te,_ as Pt,$ as _e,a0 as Nt,a1 as Bt,a2 as te,a3 as Xe,a4 as Ye,a5 as Vt,a6 as Dt,a7 as Mt,a8 as Ht,a9 as Ut,aa as Wt,ab as U,ac as G,ad as jt,ae as qt,af as ie,ag as ue}from"./index-DGdvpsBV.js";import{u as Ze,a as Le,_ as Qe,b as Kt}from"./Space-BbDrz_BI.js";let me=[];const et=new WeakMap;function Gt(){me.forEach(e=>e(...et.get(e))),me=[]}function Jt(e,...t){et.set(e,t),!me.includes(e)&&me.push(e)===1&&requestAnimationFrame(Gt)}function Ne(e,t){let{target:r}=e;for(;r;){if(r.dataset&&r.dataset[t]!==void 0)return!0;r=r.parentElement}return!1}const{c:Se}=ht(),Xt="vueuc-style";function Be(e){return e&-e}class tt{constructor(t,r){this.l=t,this.min=r;const n=new Array(t+1);for(let o=0;o<t+1;++o)n[o]=0;this.ft=n}add(t,r){if(r===0)return;const{l:n,ft:o}=this;for(t+=1;t<=n;)o[t]+=r,t+=Be(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:r,min:n,l:o}=this;if(t>o)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let l=t*n;for(;t>0;)l+=r[t],t-=Be(t);return l}getBound(t){let r=0,n=this.l;for(;n>r;){const o=Math.floor((r+n)/2),l=this.sum(o);if(l>t){n=o;continue}else if(l<t){if(r===o)return this.sum(r+1)<=t?r+1:o;r=o}else return o}return r}}let fe;function Yt(){return typeof document>"u"?!1:(fe===void 0&&("matchMedia"in window?fe=window.matchMedia("(pointer:coarse)").matches:fe=!1),fe)}let Re;function Ve(){return typeof document>"u"?1:(Re===void 0&&(Re="chrome"in window?window.devicePixelRatio:1),Re)}const rt="VVirtualListXScroll";function Zt({columnsRef:e,renderColRef:t,renderItemWithColsRef:r}){const n=B(0),o=B(0),l=T(()=>{const i=e.value;if(i.length===0)return null;const f=new tt(i.length,0);return i.forEach((s,w)=>{f.add(w,s.width)}),f}),c=le(()=>{const i=l.value;return i!==null?Math.max(i.getBound(o.value)-1,0):0}),d=i=>{const f=l.value;return f!==null?f.sum(i):0},u=le(()=>{const i=l.value;return i!==null?Math.min(i.getBound(o.value+n.value)+1,e.value.length-1):0});return $e(rt,{startIndexRef:c,endIndexRef:u,columnsRef:e,renderColRef:t,renderItemWithColsRef:r,getLeft:d}),{listWidthRef:n,scrollLeftRef:o}}const De=W({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:t,columnsRef:r,getLeft:n,renderColRef:o,renderItemWithColsRef:l}=oe(rt);return{startIndex:e,endIndex:t,columns:r,renderCol:o,renderItemWithCols:l,getLeft:n}},render(){const{startIndex:e,endIndex:t,columns:r,renderCol:n,renderItemWithCols:o,getLeft:l,item:c}=this;if(o!=null)return o({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:r,item:c,getLeft:l});if(n!=null){const d=[];for(let u=e;u<=t;++u){const i=r[u];d.push(n({column:i,left:l(u),item:c}))}return d}return null}}),Qt=Se(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Se("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Se("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),er=W({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=mt();Qt.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Xt,ssr:t}),Ke(()=>{const{defaultScrollIndex:m,defaultScrollKey:v}=e;m!=null?x({index:m}):v!=null&&x({key:v})});let r=!1,n=!1;bt(()=>{if(r=!1,!n){n=!0;return}x({top:S.value,left:c.value})}),pt(()=>{r=!0,n||(n=!0)});const o=le(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let m=0;return e.columns.forEach(v=>{m+=v.width}),m}),l=T(()=>{const m=new Map,{keyField:v}=e;return e.items.forEach((z,L)=>{m.set(z[v],L)}),m}),{scrollLeftRef:c,listWidthRef:d}=Zt({columnsRef:Z(e,"columns"),renderColRef:Z(e,"renderCol"),renderItemWithColsRef:Z(e,"renderItemWithCols")}),u=B(null),i=B(void 0),f=new Map,s=T(()=>{const{items:m,itemSize:v,keyField:z}=e,L=new tt(m.length,v);return m.forEach((N,D)=>{const P=N[z],H=f.get(P);H!==void 0&&L.add(D,H)}),L}),w=B(0),S=B(0),p=le(()=>Math.max(s.value.getBound(S.value-ze(e.paddingTop))-1,0)),y=T(()=>{const{value:m}=i;if(m===void 0)return[];const{items:v,itemSize:z}=e,L=p.value,N=Math.min(L+Math.ceil(m/z+1),v.length-1),D=[];for(let P=L;P<=N;++P)D.push(v[P]);return D}),x=(m,v)=>{if(typeof m=="number"){h(m,v,"auto");return}const{left:z,top:L,index:N,key:D,position:P,behavior:H,debounce:q=!0}=m;if(z!==void 0||L!==void 0)h(z,L,H);else if(N!==void 0)E(N,H,q);else if(D!==void 0){const re=l.value.get(D);re!==void 0&&E(re,H,q)}else P==="bottom"?h(0,Number.MAX_SAFE_INTEGER,H):P==="top"&&h(0,0,H)};let _,$=null;function E(m,v,z){const{value:L}=s,N=L.sum(m)+ze(e.paddingTop);if(!z)u.value.scrollTo({left:0,top:N,behavior:v});else{_=m,$!==null&&window.clearTimeout($),$=window.setTimeout(()=>{_=void 0,$=null},16);const{scrollTop:D,offsetHeight:P}=u.value;if(N>D){const H=L.get(m);N+H<=D+P||u.value.scrollTo({left:0,top:N+H-P,behavior:v})}else u.value.scrollTo({left:0,top:N,behavior:v})}}function h(m,v,z){u.value.scrollTo({left:m,top:v,behavior:z})}function C(m,v){var z,L,N;if(r||e.ignoreItemResize||V(v.target))return;const{value:D}=s,P=l.value.get(m),H=D.get(P),q=(N=(L=(z=v.borderBoxSize)===null||z===void 0?void 0:z[0])===null||L===void 0?void 0:L.blockSize)!==null&&N!==void 0?N:v.contentRect.height;if(q===H)return;q-e.itemSize===0?f.delete(m):f.set(m,q-e.itemSize);const ee=q-H;if(ee===0)return;D.add(P,ee);const K=u.value;if(K!=null){if(_===void 0){const ne=D.sum(P);K.scrollTop>ne&&K.scrollBy(0,ee)}else if(P<_)K.scrollBy(0,ee);else if(P===_){const ne=D.sum(P);q+ne>K.scrollTop+K.offsetHeight&&K.scrollBy(0,ee)}A()}w.value++}const b=!Yt();let F=!1;function I(m){var v;(v=e.onScroll)===null||v===void 0||v.call(e,m),(!b||!F)&&A()}function j(m){var v;if((v=e.onWheel)===null||v===void 0||v.call(e,m),b){const z=u.value;if(z!=null){if(m.deltaX===0&&(z.scrollTop===0&&m.deltaY<=0||z.scrollTop+z.offsetHeight>=z.scrollHeight&&m.deltaY>=0))return;m.preventDefault(),z.scrollTop+=m.deltaY/Ve(),z.scrollLeft+=m.deltaX/Ve(),A(),F=!0,Jt(()=>{F=!1})}}}function R(m){if(r||V(m.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(m.contentRect.height===i.value)return}else if(m.contentRect.height===i.value&&m.contentRect.width===d.value)return;i.value=m.contentRect.height,d.value=m.contentRect.width;const{onResize:v}=e;v!==void 0&&v(m)}function A(){const{value:m}=u;m!=null&&(S.value=m.scrollTop,c.value=m.scrollLeft)}function V(m){let v=m;for(;v!==null;){if(v.style.display==="none")return!0;v=v.parentElement}return!1}return{listHeight:i,listStyle:{overflow:"auto"},keyToIndex:l,itemsStyle:T(()=>{const{itemResizable:m}=e,v=se(s.value.sum());return w.value,[e.itemsStyle,{boxSizing:"content-box",width:se(o.value),height:m?"":v,minHeight:m?v:"",paddingTop:se(e.paddingTop),paddingBottom:se(e.paddingBottom)}]}),visibleItemsStyle:T(()=>(w.value,{transform:`translateY(${se(s.value.sum(p.value))})`})),viewportItems:y,listElRef:u,itemsElRef:B(null),scrollTo:x,handleListResize:R,handleListScroll:I,handleListWheel:j,handleItemResize:C}},render(){const{itemResizable:e,keyField:t,keyToIndex:r,visibleItemsTag:n}=this;return a(Ee,{onResize:this.handleListResize},{default:()=>{var o,l;return a("div",vt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?a("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[a(n,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:c,renderItemWithCols:d}=this;return this.viewportItems.map(u=>{const i=u[t],f=r.get(i),s=c!=null?a(De,{index:f,item:u}):void 0,w=d!=null?a(De,{index:f,item:u}):void 0,S=this.$slots.default({item:u,renderedCols:s,renderedItemWithCols:w,index:f})[0];return e?a(Ee,{key:i,onResize:p=>this.handleItemResize(i,p)},{default:()=>S}):(S.key=i,S)})}})]):(l=(o=this.$slots).empty)===null||l===void 0?void 0:l.call(o)])}})}});function tr(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const rr=W({name:"ChevronLeft",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),nr=W({name:"ChevronRight",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),lr=W({name:"Empty",render(){return a("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),a("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),or=W({name:"Search",render(){return a("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:"enable-background: new 0 0 512 512"},a("path",{d:`M443.5,420.2L336.7,312.4c20.9-26.2,33.5-59.4,33.5-95.5c0-84.5-68.5-153-153.1-153S64,132.5,64,217s68.5,153,153.1,153
  c36.6,0,70.1-12.8,96.5-34.2l106.1,107.1c3.2,3.4,7.6,5.1,11.9,5.1c4.1,0,8.2-1.5,11.3-4.5C449.5,437.2,449.7,426.8,443.5,420.2z
   M217.1,337.1c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-84.9c0-32.1,12.5-62.3,35.2-84.9c22.7-22.7,52.9-35.2,85-35.2
  c32.1,0,62.3,12.5,85,35.2c22.7,22.7,35.2,52.9,35.2,84.9c0,32.1-12.5,62.3-35.2,84.9C279.4,324.6,249.2,337.1,217.1,337.1z`}))}}),ir=k("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[g("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[M("+",[g("description",`
 margin-top: 8px;
 `)])]),g("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),g("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),ar=Object.assign(Object.assign({},Q.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),sr=W({name:"Empty",props:ar,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedComponentPropsRef:n}=ae(e),o=Q("Empty","-empty",ir,gt,e,t),{localeRef:l}=Ze("Empty"),c=T(()=>{var f,s,w;return(f=e.description)!==null&&f!==void 0?f:(w=(s=n==null?void 0:n.value)===null||s===void 0?void 0:s.Empty)===null||w===void 0?void 0:w.description}),d=T(()=>{var f,s;return((s=(f=n==null?void 0:n.value)===null||f===void 0?void 0:f.Empty)===null||s===void 0?void 0:s.renderIcon)||(()=>a(lr,null))}),u=T(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:s},self:{[X("iconSize",f)]:w,[X("fontSize",f)]:S,textColor:p,iconColor:y,extraTextColor:x}}=o.value;return{"--n-icon-size":w,"--n-font-size":S,"--n-bezier":s,"--n-text-color":p,"--n-icon-color":y,"--n-extra-text-color":x}}),i=r?pe("empty",T(()=>{let f="";const{size:s}=e;return f+=s[0],f}),u,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:d,localizedDescription:T(()=>c.value||l.value.description),cssVars:r?void 0:u,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:r}=this;return r==null||r(),a("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?a("div",{class:`${t}-empty__icon`},e.icon?e.icon():a(Ie,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?a("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?a("div",{class:`${t}-empty__extra`},e.extra()):null)}}),{cubicBezierEaseInOut:J,cubicBezierEaseOut:cr,cubicBezierEaseIn:dr}=xt;function ur({overflow:e="hidden",duration:t=".3s",originalTransition:r="",leavingDelay:n="0s",foldPadding:o=!1,enterToProps:l=void 0,leaveToProps:c=void 0,reverse:d=!1}={}){const u=d?"leave":"enter",i=d?"enter":"leave";return[M(`&.fade-in-height-expand-transition-${i}-from,
 &.fade-in-height-expand-transition-${u}-to`,Object.assign(Object.assign({},l),{opacity:1})),M(`&.fade-in-height-expand-transition-${i}-to,
 &.fade-in-height-expand-transition-${u}-from`,Object.assign(Object.assign({},c),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:o?"0 !important":void 0,paddingBottom:o?"0 !important":void 0})),M(`&.fade-in-height-expand-transition-${i}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${J} ${n},
 opacity ${t} ${cr} ${n},
 margin-top ${t} ${J} ${n},
 margin-bottom ${t} ${J} ${n},
 padding-top ${t} ${J} ${n},
 padding-bottom ${t} ${J} ${n}
 ${r?`,${r}`:""}
 `),M(`&.fade-in-height-expand-transition-${u}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${J},
 opacity ${t} ${dr},
 margin-top ${t} ${J},
 margin-bottom ${t} ${J},
 padding-top ${t} ${J},
 padding-bottom ${t} ${J}
 ${r?`,${r}`:""}
 `)]}const fr=Fe("n-checkbox-group"),hr=()=>a("svg",{viewBox:"0 0 64 64",class:"check-icon"},a("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),vr=()=>a("svg",{viewBox:"0 0 100 100",class:"line-icon"},a("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),mr=M([k("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[O("show-label","line-height: var(--n-label-line-height);"),M("&:hover",[k("checkbox-box",[g("border","border: var(--n-border-checked);")])]),M("&:focus:not(:active)",[k("checkbox-box",[g("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),O("inside-table",[k("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),O("checked",[k("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[k("checkbox-icon",[M(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),O("indeterminate",[k("checkbox-box",[k("checkbox-icon",[M(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),M(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),O("checked, indeterminate",[M("&:focus:not(:active)",[k("checkbox-box",[g("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),k("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[g("border",{border:"var(--n-border-checked)"})])]),O("disabled",{cursor:"not-allowed"},[O("checked",[k("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[g("border",{border:"var(--n-border-disabled-checked)"}),k("checkbox-icon",[M(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),k("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[g("border",`
 border: var(--n-border-disabled);
 `),k("checkbox-icon",[M(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),g("label",`
 color: var(--n-text-color-disabled);
 `)]),k("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),k("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[g("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),k("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[M(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),wt({left:"1px",top:"1px"})])]),g("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[M("&:empty",{display:"none"})])]),Ct(k("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),yt(k("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),br=Object.assign(Object.assign({},Q.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),pr=W({name:"Checkbox",props:br,setup(e){const t=oe(fr,null),r=B(null),{mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedRtlRef:l}=ae(e),c=B(e.defaultChecked),d=Z(e,"checked"),u=Le(d,c),i=le(()=>{if(t){const b=t.valueSetRef.value;return b&&e.value!==void 0?b.has(e.value):!1}else return u.value===e.checkedValue}),f=Ge(e,{mergedSize(b){const{size:F}=e;if(F!==void 0)return F;if(t){const{value:I}=t.mergedSizeRef;if(I!==void 0)return I}if(b){const{mergedSize:I}=b;if(I!==void 0)return I.value}return"medium"},mergedDisabled(b){const{disabled:F}=e;if(F!==void 0)return F;if(t){if(t.disabledRef.value)return!0;const{maxRef:{value:I},checkedCountRef:j}=t;if(I!==void 0&&j.value>=I&&!i.value)return!0;const{minRef:{value:R}}=t;if(R!==void 0&&j.value<=R&&i.value)return!0}return b?b.disabled.value:!1}}),{mergedDisabledRef:s,mergedSizeRef:w}=f,S=Q("Checkbox","-checkbox",mr,zt,e,n);function p(b){if(t&&e.value!==void 0)t.toggleCheckbox(!i.value,e.value);else{const{onChange:F,"onUpdate:checked":I,onUpdateChecked:j}=e,{nTriggerFormInput:R,nTriggerFormChange:A}=f,V=i.value?e.uncheckedValue:e.checkedValue;I&&Y(I,V,b),j&&Y(j,V,b),F&&Y(F,V,b),R(),A(),c.value=V}}function y(b){s.value||p(b)}function x(b){if(!s.value)switch(b.key){case" ":case"Enter":p(b)}}function _(b){switch(b.key){case" ":b.preventDefault()}}const $={focus:()=>{var b;(b=r.value)===null||b===void 0||b.focus()},blur:()=>{var b;(b=r.value)===null||b===void 0||b.blur()}},E=Oe("Checkbox",l,n),h=T(()=>{const{value:b}=w,{common:{cubicBezierEaseInOut:F},self:{borderRadius:I,color:j,colorChecked:R,colorDisabled:A,colorTableHeader:V,colorTableHeaderModal:m,colorTableHeaderPopover:v,checkMarkColor:z,checkMarkColorDisabled:L,border:N,borderFocus:D,borderDisabled:P,borderChecked:H,boxShadowFocus:q,textColor:re,textColorDisabled:ee,checkMarkColorDisabledChecked:K,colorDisabledChecked:ne,borderDisabledChecked:ge,labelPadding:xe,labelLineHeight:we,labelFontWeight:Ce,[X("fontSize",b)]:ye,[X("size",b)]:ke}}=S.value;return{"--n-label-line-height":we,"--n-label-font-weight":Ce,"--n-size":ke,"--n-bezier":F,"--n-border-radius":I,"--n-border":N,"--n-border-checked":H,"--n-border-focus":D,"--n-border-disabled":P,"--n-border-disabled-checked":ge,"--n-box-shadow-focus":q,"--n-color":j,"--n-color-checked":R,"--n-color-table":V,"--n-color-table-modal":m,"--n-color-table-popover":v,"--n-color-disabled":A,"--n-color-disabled-checked":ne,"--n-text-color":re,"--n-text-color-disabled":ee,"--n-check-mark-color":z,"--n-check-mark-color-disabled":L,"--n-check-mark-color-disabled-checked":K,"--n-font-size":ye,"--n-label-padding":xe}}),C=o?pe("checkbox",T(()=>w.value[0]),h,e):void 0;return Object.assign(f,$,{rtlEnabled:E,selfRef:r,mergedClsPrefix:n,mergedDisabled:s,renderedChecked:i,mergedTheme:S,labelId:Je(),handleClick:y,handleKeyUp:x,handleKeyDown:_,cssVars:o?void 0:h,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender})},render(){var e;const{$slots:t,renderedChecked:r,mergedDisabled:n,indeterminate:o,privateInsideTable:l,cssVars:c,labelId:d,label:u,mergedClsPrefix:i,focusable:f,handleKeyUp:s,handleKeyDown:w,handleClick:S}=this;(e=this.onRender)===null||e===void 0||e.call(this);const p=kt(t.default,y=>u||y?a("span",{class:`${i}-checkbox__label`,id:d},u||y):null);return a("div",{ref:"selfRef",class:[`${i}-checkbox`,this.themeClass,this.rtlEnabled&&`${i}-checkbox--rtl`,r&&`${i}-checkbox--checked`,n&&`${i}-checkbox--disabled`,o&&`${i}-checkbox--indeterminate`,l&&`${i}-checkbox--inside-table`,p&&`${i}-checkbox--show-label`],tabindex:n||!f?void 0:0,role:"checkbox","aria-checked":o?"mixed":r,"aria-labelledby":d,style:c,onKeyup:s,onKeydown:w,onClick:S,onMousedown:()=>{St("selectstart",window,y=>{y.preventDefault()},{once:!0})}},a("div",{class:`${i}-checkbox-box-wrapper`}," ",a("div",{class:`${i}-checkbox-box`},a(Rt,null,{default:()=>this.indeterminate?a("div",{key:"indeterminate",class:`${i}-checkbox-icon`},vr()):a("div",{key:"check",class:`${i}-checkbox-icon`},hr())}),a("div",{class:`${i}-checkbox-box__border`}))),p)}}),gr=k("collapse","width: 100%;",[k("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[O("disabled",[g("header","cursor: not-allowed;",[g("header-main",`
 color: var(--n-title-text-color-disabled);
 `),k("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),k("collapse-item","margin-left: 32px;"),M("&:first-child","margin-top: 0;"),M("&:first-child >",[g("header","padding-top: 0;")]),O("left-arrow-placement",[g("header",[k("collapse-item-arrow","margin-right: 4px;")])]),O("right-arrow-placement",[g("header",[k("collapse-item-arrow","margin-left: 4px;")])]),g("content-wrapper",[g("content-inner","padding-top: 16px;"),ur({duration:"0.15s"})]),O("active",[g("header",[O("active",[k("collapse-item-arrow","transform: rotate(90deg);")])])]),M("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),ce("disabled",[O("trigger-area-main",[g("header",[g("header-main","cursor: pointer;"),k("collapse-item-arrow","cursor: default;")])]),O("trigger-area-arrow",[g("header",[k("collapse-item-arrow","cursor: pointer;")])]),O("trigger-area-extra",[g("header",[g("header-extra","cursor: pointer;")])])]),g("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[g("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),g("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),k("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),xr=Object.assign(Object.assign({},Q.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),nt=Fe("n-collapse"),wr=W({name:"Collapse",props:xr,slots:Object,setup(e,{slots:t}){const{mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedRtlRef:o}=ae(e),l=B(e.defaultExpandedNames),c=T(()=>e.expandedNames),d=Le(c,l),u=Q("Collapse","-collapse",gr,Tt,e,r);function i(y){const{"onUpdate:expandedNames":x,onUpdateExpandedNames:_,onExpandedNamesChange:$}=e;_&&Y(_,y),x&&Y(x,y),$&&Y($,y),l.value=y}function f(y){const{onItemHeaderClick:x}=e;x&&Y(x,y)}function s(y,x,_){const{accordion:$}=e,{value:E}=d;if($)y?(i([x]),f({name:x,expanded:!0,event:_})):(i([]),f({name:x,expanded:!1,event:_}));else if(!Array.isArray(E))i([x]),f({name:x,expanded:!0,event:_});else{const h=E.slice(),C=h.findIndex(b=>x===b);~C?(h.splice(C,1),i(h),f({name:x,expanded:!1,event:_})):(h.push(x),i(h),f({name:x,expanded:!0,event:_}))}}$e(nt,{props:e,mergedClsPrefixRef:r,expandedNamesRef:d,slots:t,toggleItem:s});const w=Oe("Collapse",o,r),S=T(()=>{const{common:{cubicBezierEaseInOut:y},self:{titleFontWeight:x,dividerColor:_,titlePadding:$,titleTextColor:E,titleTextColorDisabled:h,textColor:C,arrowColor:b,fontSize:F,titleFontSize:I,arrowColorDisabled:j,itemMargin:R}}=u.value;return{"--n-font-size":F,"--n-bezier":y,"--n-text-color":C,"--n-divider-color":_,"--n-title-padding":$,"--n-title-font-size":I,"--n-title-text-color":E,"--n-title-text-color-disabled":h,"--n-title-font-weight":x,"--n-arrow-color":b,"--n-arrow-color-disabled":j,"--n-item-margin":R}}),p=n?pe("collapse",void 0,S,e):void 0;return{rtlEnabled:w,mergedTheme:u,mergedClsPrefix:r,cssVars:n?void 0:S,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),Cr=W({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:It(Z(e,"show"))}},render(){return a(_t,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:r,clsPrefix:n}=this,o=t==="show"&&r,l=a("div",{class:`${n}-collapse-item__content-wrapper`},a("div",{class:`${n}-collapse-item__content-inner`},this.$slots));return o?$t(l,[[Ft,e]]):e?l:null}})}}),yr={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},kr=W({name:"CollapseItem",props:yr,setup(e){const{mergedRtlRef:t}=ae(e),r=Je(),n=le(()=>{var s;return(s=e.name)!==null&&s!==void 0?s:r}),o=oe(nt);o||Lt("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:l,props:c,mergedClsPrefixRef:d,slots:u}=o,i=T(()=>{const{value:s}=l;if(Array.isArray(s)){const{value:w}=n;return!~s.findIndex(S=>S===w)}else if(s){const{value:w}=n;return w!==s}return!0});return{rtlEnabled:Oe("Collapse",t,d),collapseSlots:u,randomName:r,mergedClsPrefix:d,collapsed:i,triggerAreas:Z(c,"triggerAreas"),mergedDisplayDirective:T(()=>{const{displayDirective:s}=e;return s||c.displayDirective}),arrowPlacement:T(()=>c.arrowPlacement),handleClick(s){let w="main";Ne(s,"arrow")&&(w="arrow"),Ne(s,"extra")&&(w="extra"),c.triggerAreas.includes(w)&&o&&!e.disabled&&o.toggleItem(i.value,n.value,s)}}},render(){const{collapseSlots:e,$slots:t,arrowPlacement:r,collapsed:n,mergedDisplayDirective:o,mergedClsPrefix:l,disabled:c,triggerAreas:d}=this,u=Pe(t.header,{collapsed:n},()=>[this.title]),i=t["header-extra"]||e["header-extra"],f=t.arrow||e.arrow;return a("div",{class:[`${l}-collapse-item`,`${l}-collapse-item--${r}-arrow-placement`,c&&`${l}-collapse-item--disabled`,!n&&`${l}-collapse-item--active`,d.map(s=>`${l}-collapse-item--trigger-area-${s}`)]},a("div",{class:[`${l}-collapse-item__header`,!n&&`${l}-collapse-item__header--active`]},a("div",{class:`${l}-collapse-item__header-main`,onClick:this.handleClick},r==="right"&&u,a("div",{class:`${l}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},Pe(f,{collapsed:n},()=>[a(Ie,{clsPrefix:l},{default:()=>this.rtlEnabled?a(rr,null):a(nr,null)})])),r==="left"&&u),Ot(i,{collapsed:n},s=>a("div",{class:`${l}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},s))),a(Cr,{clsPrefix:l,displayDirective:o,show:!n},t))}}),Sr=k("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[ce("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[ce("no-title",`
 display: flex;
 align-items: center;
 `)]),g("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),O("title-position-left",[g("line",[O("left",{width:"28px"})])]),O("title-position-right",[g("line",[O("right",{width:"28px"})])]),O("dashed",[g("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),O("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),g("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),ce("dashed",[g("line",{backgroundColor:"var(--n-color)"})]),O("dashed",[g("line",{borderColor:"var(--n-color)"})]),O("vertical",{backgroundColor:"var(--n-color)"})]),Rr=Object.assign(Object.assign({},Q.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),zr=W({name:"Divider",props:Rr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=ae(e),n=Q("Divider","-divider",Sr,Et,e,t),o=T(()=>{const{common:{cubicBezierEaseInOut:c},self:{color:d,textColor:u,fontWeight:i}}=n.value;return{"--n-bezier":c,"--n-color":d,"--n-text-color":u,"--n-font-weight":i}}),l=r?pe("divider",void 0,o,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:o,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{$slots:t,titlePlacement:r,vertical:n,dashed:o,cssVars:l,mergedClsPrefix:c}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{role:"separator",class:[`${c}-divider`,this.themeClass,{[`${c}-divider--vertical`]:n,[`${c}-divider--no-title`]:!t.default,[`${c}-divider--dashed`]:o,[`${c}-divider--title-position-${r}`]:t.default&&r}],style:l},n?null:a("div",{class:`${c}-divider__line ${c}-divider__line--left`}),!n&&t.default?a(At,null,a("div",{class:`${c}-divider__title`},this.$slots),a("div",{class:`${c}-divider__line ${c}-divider__line--right`})):null)}}),de=Fe("n-transfer"),Tr=k("transfer",`
 width: 100%;
 font-size: var(--n-font-size);
 height: 300px;
 display: flex;
 flex-wrap: nowrap;
 word-break: break-word;
`,[O("disabled",[k("transfer-list",[k("transfer-list-header",[g("title",`
 color: var(--n-header-text-color-disabled);
 `),g("extra",`
 color: var(--n-header-extra-text-color-disabled);
 `)])])]),k("transfer-list",`
 flex: 1;
 min-width: 0;
 height: inherit;
 display: flex;
 flex-direction: column;
 background-clip: padding-box;
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-list-color);
 `,[O("source",`
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[g("border","border-right: 1px solid var(--n-divider-color);")]),O("target",`
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[g("border","border-left: none;")]),g("border",`
 padding: 0 12px;
 border: 1px solid var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),k("transfer-list-header",`
 min-height: var(--n-header-height);
 box-sizing: border-box;
 display: flex;
 padding: 12px 12px 10px 12px;
 align-items: center;
 background-clip: padding-box;
 border-radius: inherit;
 border-bottom-left-radius: 0;
 border-bottom-right-radius: 0;
 line-height: 1.5;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[M("> *:not(:first-child)",`
 margin-left: 8px;
 `),g("title",`
 flex: 1;
 min-width: 0;
 line-height: 1.5;
 font-size: var(--n-header-font-size);
 font-weight: var(--n-header-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-header-text-color);
 `),g("button",`
 position: relative;
 `),g("extra",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-extra-font-size);
 margin-right: 0;
 white-space: nowrap;
 color: var(--n-header-extra-text-color);
 `)]),k("transfer-list-body",`
 flex-basis: 0;
 flex-grow: 1;
 box-sizing: border-box;
 position: relative;
 display: flex;
 flex-direction: column;
 border-radius: inherit;
 border-top-left-radius: 0;
 border-top-right-radius: 0;
 `,[k("transfer-filter",`
 padding: 4px 12px 8px 12px;
 box-sizing: border-box;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),k("transfer-list-flex-container",`
 flex: 1;
 position: relative;
 `,[k("scrollbar",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 height: unset;
 `),k("empty",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 `),k("transfer-list-content",`
 padding: 0;
 margin: 0;
 position: relative;
 `,[k("transfer-list-item",`
 padding: 0 12px;
 min-height: var(--n-item-height);
 display: flex;
 align-items: center;
 color: var(--n-item-text-color);
 position: relative;
 transition: color .3s var(--n-bezier);
 `,[g("background",`
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),g("checkbox",`
 position: relative;
 margin-right: 8px;
 `),g("close",`
 opacity: 0;
 pointer-events: none;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),g("label",`
 position: relative;
 min-width: 0;
 flex-grow: 1;
 `),O("source","cursor: pointer;"),O("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `),ce("disabled",[M("&:hover",[g("background","background-color: var(--n-item-color-pending);"),g("close",`
 opacity: 1;
 pointer-events: all;
 `)])])])])])])])]),Me=W({name:"TransferFilter",props:{value:String,placeholder:String,disabled:Boolean,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:t}=oe(de);return{mergedClsPrefix:t,mergedTheme:e}},render(){const{mergedTheme:e,mergedClsPrefix:t}=this;return a("div",{class:`${t}-transfer-filter`},a(Qe,{value:this.value,onUpdateValue:this.onUpdateValue,disabled:this.disabled,placeholder:this.placeholder,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,clearable:!0,size:"small"},{"clear-icon-placeholder":()=>a(Ie,{clsPrefix:t},{default:()=>a(or,null)})}))}}),He=W({name:"TransferHeader",props:{size:{type:String,required:!0},selectAllText:String,clearText:String,source:Boolean,onCheckedAll:Function,onClearAll:Function,title:[String,Function]},setup(e){const{targetOptionsRef:t,canNotSelectAnythingRef:r,canBeClearedRef:n,allCheckedRef:o,mergedThemeRef:l,disabledRef:c,mergedClsPrefixRef:d,srcOptionsLengthRef:u}=oe(de),{localeRef:i}=Ze("Transfer");return()=>{const{source:f,onClearAll:s,onCheckedAll:w,selectAllText:S,clearText:p}=e,{value:y}=l,{value:x}=d,{value:_}=i,$=e.size==="large"?"small":"tiny",{title:E}=e;return a("div",{class:`${x}-transfer-list-header`},E&&a("div",{class:`${x}-transfer-list-header__title`},typeof E=="function"?E():E),f&&a(Te,{class:`${x}-transfer-list-header__button`,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button,size:$,tertiary:!0,onClick:o.value?s:w,disabled:r.value||c.value},{default:()=>o.value?p||_.unselectAll:S||_.selectAll}),!f&&n.value&&a(Te,{class:`${x}-transfer-list-header__button`,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button,size:$,tertiary:!0,onClick:s,disabled:c.value},{default:()=>_.clearAll}),a("div",{class:`${x}-transfer-list-header__extra`},f?_.total(u.value):_.selected(t.value.length)))}}}),Ue=W({name:"NTransferListItem",props:{source:Boolean,label:{type:String,required:!0},value:{type:[String,Number],required:!0},disabled:Boolean,option:{type:Object,required:!0}},setup(e){const{targetValueSetRef:t,mergedClsPrefixRef:r,mergedThemeRef:n,handleItemCheck:o,renderSourceLabelRef:l,renderTargetLabelRef:c,showSelectedRef:d}=oe(de),u=le(()=>t.value.has(e.value));function i(){e.disabled||o(!u.value,e.value)}return{mergedClsPrefix:r,mergedTheme:n,checked:u,showSelected:d,renderSourceLabel:l,renderTargetLabel:c,handleClick:i}},render(){const{disabled:e,mergedTheme:t,mergedClsPrefix:r,label:n,checked:o,source:l,renderSourceLabel:c,renderTargetLabel:d}=this;return a("div",{class:[`${r}-transfer-list-item`,e&&`${r}-transfer-list-item--disabled`,l?`${r}-transfer-list-item--source`:`${r}-transfer-list-item--target`],onClick:l?this.handleClick:void 0},a("div",{class:`${r}-transfer-list-item__background`}),l&&this.showSelected&&a("div",{class:`${r}-transfer-list-item__checkbox`},a(pr,{theme:t.peers.Checkbox,themeOverrides:t.peerOverrides.Checkbox,disabled:e,checked:o})),a("div",{class:`${r}-transfer-list-item__label`,title:tr(n)},l?c?c({option:this.option}):n:d?d({option:this.option}):n),!l&&!e&&a(Pt,{focusable:!1,class:`${r}-transfer-list-item__close`,clsPrefix:r,onClick:this.handleClick}))}}),We=W({name:"TransferList",props:{virtualScroll:{type:Boolean,required:!0},itemSize:{type:Number,required:!0},options:{type:Array,required:!0},disabled:{type:Boolean,required:!0},source:Boolean},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:t}=oe(de),r=B(null),n=B(null);function o(){var d;(d=r.value)===null||d===void 0||d.sync()}function l(){const{value:d}=n;if(!d)return null;const{listElRef:u}=d;return u}function c(){const{value:d}=n;if(!d)return null;const{itemsElRef:u}=d;return u}return{mergedTheme:e,mergedClsPrefix:t,scrollerInstRef:r,vlInstRef:n,syncVLScroller:o,scrollContainer:l,scrollContent:c}},render(){const{mergedTheme:e,options:t}=this;if(t.length===0)return a(sr,{theme:e.peers.Empty,themeOverrides:e.peerOverrides.Empty});const{mergedClsPrefix:r,virtualScroll:n,source:o,disabled:l,syncVLScroller:c}=this;return a(_e,{ref:"scrollerInstRef",theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,container:n?this.scrollContainer:void 0,content:n?this.scrollContent:void 0},{default:()=>n?a(er,{ref:"vlInstRef",style:{height:"100%"},class:`${r}-transfer-list-content`,items:this.options,itemSize:this.itemSize,showScrollbar:!1,onResize:c,onScroll:c,keyField:"value"},{default:({item:d})=>{const{source:u,disabled:i}=this;return a(Ue,{source:u,key:d.value,value:d.value,disabled:d.disabled||i,label:d.label,option:d})}}):a("div",{class:`${r}-transfer-list-content`},t.map(d=>a(Ue,{source:o,key:d.value,value:d.value,disabled:d.disabled||l,label:d.label,option:d})))})}});function _r(e){const t=B(e.defaultValue),r=Le(Z(e,"value"),t),n=T(()=>{const h=new Map;return(e.options||[]).forEach(C=>h.set(C.value,C)),h}),o=T(()=>new Set(r.value||[])),l=T(()=>{const h=n.value,C=[];return(r.value||[]).forEach(b=>{const F=h.get(b);F&&C.push(F)}),C}),c=B(""),d=B(""),u=T(()=>e.sourceFilterable||!!e.filterable),i=T(()=>{const{showSelected:h,options:C,filter:b}=e;return u.value?C.filter(F=>b(c.value,F,"source")&&(h||!o.value.has(F.value))):h?C:C.filter(F=>!o.value.has(F.value))}),f=T(()=>{if(!e.targetFilterable)return l.value;const{filter:h}=e;return l.value.filter(C=>h(d.value,C,"target"))}),s=T(()=>{const{value:h}=r;return h===null?new Set:new Set(h)}),w=T(()=>{const h=new Set(s.value);return i.value.forEach(C=>{!C.disabled&&!h.has(C.value)&&h.add(C.value)}),h}),S=T(()=>{const h=new Set(s.value);return i.value.forEach(C=>{!C.disabled&&h.has(C.value)&&h.delete(C.value)}),h}),p=T(()=>{const h=new Set(s.value);return f.value.forEach(C=>{C.disabled||h.delete(C.value)}),h}),y=T(()=>i.value.every(h=>h.disabled)),x=T(()=>{if(!i.value.length)return!1;const h=s.value;return i.value.every(C=>C.disabled||h.has(C.value))}),_=T(()=>f.value.some(h=>!h.disabled));function $(h){c.value=h??""}function E(h){d.value=h??""}return{uncontrolledValueRef:t,mergedValueRef:r,targetValueSetRef:o,valueSetForCheckAllRef:w,valueSetForUncheckAllRef:S,valueSetForClearRef:p,filteredTgtOptionsRef:f,filteredSrcOptionsRef:i,targetOptionsRef:l,canNotSelectAnythingRef:y,canBeClearedRef:_,allCheckedRef:x,srcPatternRef:c,tgtPatternRef:d,mergedSrcFilterableRef:u,handleSrcFilterUpdateValue:$,handleTgtFilterUpdateValue:E}}const $r=Object.assign(Object.assign({},Q.props),{value:Array,defaultValue:{type:Array,default:null},options:{type:Array,default:()=>[]},disabled:{type:Boolean,default:void 0},virtualScroll:Boolean,sourceTitle:[String,Function],selectAllText:String,clearText:String,targetTitle:[String,Function],filterable:{type:Boolean,default:void 0},sourceFilterable:Boolean,targetFilterable:Boolean,showSelected:{type:Boolean,default:!0},sourceFilterPlaceholder:String,targetFilterPlaceholder:String,filter:{type:Function,default:(e,t)=>e?~`${t.label}`.toLowerCase().indexOf(`${e}`.toLowerCase()):!0},size:String,renderSourceLabel:Function,renderTargetLabel:Function,renderSourceList:Function,renderTargetList:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),Ir=W({name:"Transfer",props:$r,setup(e){const{mergedClsPrefixRef:t}=ae(e),r=Q("Transfer","-transfer",Tr,Nt,e,t),n=Ge(e),{mergedSizeRef:o,mergedDisabledRef:l}=n,c=T(()=>{const{value:v}=o,{self:{[X("itemHeight",v)]:z}}=r.value;return ze(z)}),{uncontrolledValueRef:d,mergedValueRef:u,targetValueSetRef:i,valueSetForCheckAllRef:f,valueSetForUncheckAllRef:s,valueSetForClearRef:w,filteredTgtOptionsRef:S,filteredSrcOptionsRef:p,targetOptionsRef:y,canNotSelectAnythingRef:x,canBeClearedRef:_,allCheckedRef:$,srcPatternRef:E,tgtPatternRef:h,mergedSrcFilterableRef:C,handleSrcFilterUpdateValue:b,handleTgtFilterUpdateValue:F}=_r(e);function I(v){const{onUpdateValue:z,"onUpdate:value":L,onChange:N}=e,{nTriggerFormInput:D,nTriggerFormChange:P}=n;z&&Y(z,v),L&&Y(L,v),N&&Y(N,v),d.value=v,D(),P()}function j(){I([...f.value])}function R(){I([...s.value])}function A(){I([...w.value])}function V(v,z){I(v?(u.value||[]).concat(z):(u.value||[]).filter(L=>L!==z))}function m(v){I(v)}return $e(de,{targetValueSetRef:i,mergedClsPrefixRef:t,disabledRef:l,mergedThemeRef:r,targetOptionsRef:y,canNotSelectAnythingRef:x,canBeClearedRef:_,allCheckedRef:$,srcOptionsLengthRef:T(()=>e.options.length),handleItemCheck:V,renderSourceLabelRef:Z(e,"renderSourceLabel"),renderTargetLabelRef:Z(e,"renderTargetLabel"),showSelectedRef:Z(e,"showSelected")}),{mergedClsPrefix:t,mergedDisabled:l,itemSize:c,isMounted:Bt(),mergedTheme:r,filteredSrcOpts:p,filteredTgtOpts:S,srcPattern:E,tgtPattern:h,mergedSize:o,mergedSrcFilterable:C,handleSrcFilterUpdateValue:b,handleTgtFilterUpdateValue:F,handleSourceCheckAll:j,handleSourceUncheckAll:R,handleTargetClearAll:A,handleItemCheck:V,handleChecked:m,cssVars:T(()=>{const{value:v}=o,{common:{cubicBezierEaseInOut:z},self:{borderRadius:L,borderColor:N,listColor:D,titleTextColor:P,titleTextColorDisabled:H,extraTextColor:q,itemTextColor:re,itemColorPending:ee,itemTextColorDisabled:K,titleFontWeight:ne,closeColorHover:ge,closeColorPressed:xe,closeIconColor:we,closeIconColorHover:Ce,closeIconColorPressed:ye,closeIconSize:ke,closeSize:ot,dividerColor:it,extraTextColorDisabled:at,[X("extraFontSize",v)]:st,[X("fontSize",v)]:ct,[X("titleFontSize",v)]:dt,[X("itemHeight",v)]:ut,[X("headerHeight",v)]:ft}}=r.value;return{"--n-bezier":z,"--n-border-color":N,"--n-border-radius":L,"--n-extra-font-size":st,"--n-font-size":ct,"--n-header-font-size":dt,"--n-header-extra-text-color":q,"--n-header-extra-text-color-disabled":at,"--n-header-font-weight":ne,"--n-header-text-color":P,"--n-header-text-color-disabled":H,"--n-item-color-pending":ee,"--n-item-height":ut,"--n-item-text-color":re,"--n-item-text-color-disabled":K,"--n-list-color":D,"--n-header-height":ft,"--n-close-size":ot,"--n-close-icon-size":ke,"--n-close-color-hover":ge,"--n-close-color-pressed":xe,"--n-close-icon-color":we,"--n-close-icon-color-hover":Ce,"--n-close-icon-color-pressed":ye,"--n-divider-color":it}})}},render(){const{mergedClsPrefix:e,renderSourceList:t,renderTargetList:r,mergedTheme:n,mergedSrcFilterable:o,targetFilterable:l}=this;return a("div",{class:[`${e}-transfer`,this.mergedDisabled&&`${e}-transfer--disabled`],style:this.cssVars},a("div",{class:`${e}-transfer-list ${e}-transfer-list--source`},a(He,{source:!0,selectAllText:this.selectAllText,clearText:this.clearText,title:this.sourceTitle,onCheckedAll:this.handleSourceCheckAll,onClearAll:this.handleSourceUncheckAll,size:this.mergedSize}),a("div",{class:`${e}-transfer-list-body`},o?a(Me,{onUpdateValue:this.handleSrcFilterUpdateValue,value:this.srcPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,a("div",{class:`${e}-transfer-list-flex-container`},t?a(_e,{theme:n.peers.Scrollbar,themeOverrides:n.peerOverrides.Scrollbar},{default:()=>t({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.srcPattern})}):a(We,{source:!0,options:this.filteredSrcOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),a("div",{class:`${e}-transfer-list__border`})),a("div",{class:`${e}-transfer-list ${e}-transfer-list--target`},a(He,{onClearAll:this.handleTargetClearAll,size:this.mergedSize,title:this.targetTitle}),a("div",{class:`${e}-transfer-list-body`},l?a(Me,{onUpdateValue:this.handleTgtFilterUpdateValue,value:this.tgtPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,a("div",{class:`${e}-transfer-list-flex-container`},r?a(_e,{theme:n.peers.Scrollbar,themeOverrides:n.peerOverrides.Scrollbar},{default:()=>r({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.tgtPattern})}):a(We,{options:this.filteredTgtOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),a("div",{class:`${e}-transfer-list__border`})))}});function Fr(e){return Mt()?(Ht(e),!0):!1}function Ae(e){return typeof e=="function"?e():te(e)}const Or=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Lr=Object.prototype.toString,Ar=e=>Lr.call(e)==="[object Object]",Er=()=>{};function Pr(e,t){function r(...n){return new Promise((o,l)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(o).catch(l)})}return r}const lt=e=>e();function Nr(e=lt){const t=B(!0);function r(){t.value=!1}function n(){t.value=!0}const o=(...l)=>{t.value&&e(...l)};return{isActive:Vt(t),pause:r,resume:n,eventFilter:o}}function Br(e){return Dt()}function Vr(e,t,r={}){const{eventFilter:n=lt,...o}=r;return Ye(e,Pr(n,t),o)}function Dr(e,t,r={}){const{eventFilter:n,...o}=r,{eventFilter:l,pause:c,resume:d,isActive:u}=Nr(n);return{stop:Vr(e,t,{...o,eventFilter:l}),pause:c,resume:d,isActive:u}}function Mr(e,t=!0,r){Br()?Ke(e,r):t?e():Xe(e)}function Hr(e){var t;const r=Ae(e);return(t=r==null?void 0:r.$el)!=null?t:r}const be=Or?window:void 0;function je(...e){let t,r,n,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,n,o]=e,t=be):[t,r,n,o]=e,!t)return Er;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const l=[],c=()=>{l.forEach(f=>f()),l.length=0},d=(f,s,w,S)=>(f.addEventListener(s,w,S),()=>f.removeEventListener(s,w,S)),u=Ye(()=>[Hr(t),Ae(o)],([f,s])=>{if(c(),!f)return;const w=Ar(s)?{...s}:s;l.push(...r.flatMap(S=>n.map(p=>d(f,S,p,w))))},{immediate:!0,flush:"post"}),i=()=>{u(),c()};return Fr(i),i}const he=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ve="__vueuse_ssr_handlers__",Ur=Wr();function Wr(){return ve in he||(he[ve]=he[ve]||{}),he[ve]}function jr(e,t){return Ur[e]||t}function qr(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Kr={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},qe="vueuse-storage";function Gr(e,t,r,n={}){var o;const{flush:l="pre",deep:c=!0,listenToStorageChanges:d=!0,writeDefaults:u=!0,mergeDefaults:i=!1,shallow:f,window:s=be,eventFilter:w,onError:S=R=>{console.error(R)},initOnMounted:p}=n,y=(f?Ut:B)(typeof t=="function"?t():t);if(!r)try{r=jr("getDefaultStorage",()=>{var R;return(R=be)==null?void 0:R.localStorage})()}catch(R){S(R)}if(!r)return y;const x=Ae(t),_=qr(x),$=(o=n.serializer)!=null?o:Kr[_],{pause:E,resume:h}=Dr(y,()=>b(y.value),{flush:l,deep:c,eventFilter:w});s&&d&&Mr(()=>{je(s,"storage",I),je(s,qe,j),p&&I()}),p||I();function C(R,A){s&&s.dispatchEvent(new CustomEvent(qe,{detail:{key:e,oldValue:R,newValue:A,storageArea:r}}))}function b(R){try{const A=r.getItem(e);if(R==null)C(A,null),r.removeItem(e);else{const V=$.write(R);A!==V&&(r.setItem(e,V),C(A,V))}}catch(A){S(A)}}function F(R){const A=R?R.newValue:r.getItem(e);if(A==null)return u&&x!=null&&r.setItem(e,$.write(x)),x;if(!R&&i){const V=$.read(A);return typeof i=="function"?i(V,x):_==="object"&&!Array.isArray(V)?{...x,...V}:V}else return typeof A!="string"?A:$.read(A)}function I(R){if(!(R&&R.storageArea!==r)){if(R&&R.key==null){y.value=x;return}if(!(R&&R.key!==e)){E();try{(R==null?void 0:R.newValue)!==$.write(y.value)&&(y.value=F(R))}catch(A){S(A)}finally{R?Xe(h):h()}}}}function j(R){I(R.detail)}return y}function Jr(e,t,r={}){const{window:n=be}=r;return Gr(e,t,n==null?void 0:n.localStorage,r)}const Xr={class:"container"},Yr=W({__name:"index",setup(e){const t=B(""),r=B([]),n=B([]),o=B([]),l=B(""),c=B(""),d=()=>{t.value.trim()||alert("搜索词为空，请输入搜索词");let S=t.value.split(`
`);S=S.filter(p=>p.trim());for(const p of S)for(const y of[...r.value,...n.value,...o.value])window.open(y.replace("%%%",p),"_blank")},u=()=>{l.value&&c.value&&(w.value.push({value:c.value,label:l.value}),l.value="",c.value="")},i=()=>{w.value=w.value.filter(S=>!o.value.includes(S.value))},f=[{value:"https://bing.com/search?q=%%%",label:"Bing"},{value:"https://www.google.com/search?q=%%%",label:"Google"},{value:"https://www.baidu.com/s?wd=%%%",label:"百度"},{value:"https://search.bilibili.com/all?keyword=%%%",label:"Bilibili"},{value:"https://www.zhihu.com/search?type=content&q=%%%",label:"知乎"},{value:"https://www.xiaohongshu.com/search_result?keyword=%%%",label:"小红书"},{value:"https://kaifa.baidu.com/searchPage?wd=%%%",label:"百度开发者"},{value:"https://so.csdn.net/so/search?t=all&u=&q=%%%",label:"CSDN"},{value:"https://www.jianshu.com/search?page=1&type=note&q=%%%",label:"简书"},{value:"https://github.com/search?type=code&q=%%%",label:"GitHub"}],s=[{value:"https://www.loc.gov/collections/world-digital-library/?q=%%%",label:"LOC World Digital Library"},{value:"https://www.fastsoso.cc/search?k=%%%",label:"Fastsoso网盘搜索"},{value:"https://zh.annas-archive.org/search?index=&page=1&sort=&q=%%%",label:"书籍搜索-安娜的档案"},{value:"https://www.pdfdrive.com/search?pagecount=&pubyear=&searchin=&em=&q=%%%",label:"书籍搜索-pdfDrive"}],w=Jr("custom-engines",[]);return(S,p)=>{const y=Qe,x=Te,_=zr,$=Ir,E=kr,h=Kt,C=wr;return jt(),Wt("div",Xr,[U(h,{vertical:""},{default:G(()=>[p[10]||(p[10]=qt("h1",null,"Multi Search 多重搜索工具",-1)),U(y,{value:te(t),"onUpdate:value":p[0]||(p[0]=b=>ie(t)?t.value=b:null),type:"textarea",placeholder:"每行一个搜索词"},null,8,["value"]),U(x,{onClick:d},{default:G(()=>[...p[6]||(p[6]=[ue("搜索",-1)])]),_:1}),U(_),U(C,{accordion:""},{default:G(()=>[U(E,{title:"编程类"},{default:G(()=>[U($,{value:te(r),"onUpdate:value":p[1]||(p[1]=b=>ie(r)?r.value=b:null),options:f},null,8,["value"])]),_:1}),U(E,{title:"文献类"},{default:G(()=>[U($,{value:te(n),"onUpdate:value":p[2]||(p[2]=b=>ie(n)?n.value=b:null),options:s},null,8,["value"])]),_:1}),U(E,{title:"自定义"},{default:G(()=>[U(h,{vertical:""},{default:G(()=>[U($,{value:te(o),"onUpdate:value":p[3]||(p[3]=b=>ie(o)?o.value=b:null),options:te(w)},null,8,["value","options"]),U(_,null,{default:G(()=>[...p[7]||(p[7]=[ue("设置",-1)])]),_:1}),U(y,{value:te(l),"onUpdate:value":p[4]||(p[4]=b=>ie(l)?l.value=b:null),placeholder:"搜索引擎名称"},null,8,["value"]),U(y,{value:te(c),"onUpdate:value":p[5]||(p[5]=b=>ie(c)?c.value=b:null),placeholder:"URL (搜索关键词占位符: %%%)"},null,8,["value"]),U(h,null,{default:G(()=>[U(x,{type:"info",onClick:u},{default:G(()=>[...p[8]||(p[8]=[ue("添加",-1)])]),_:1}),U(x,{type:"error",onClick:i},{default:G(()=>[...p[9]||(p[9]=[ue("删除已选",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}}),Zr=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r},tn=Zr(Yr,[["__scopeId","data-v-adbfaf0e"]]);export{tn as default};
