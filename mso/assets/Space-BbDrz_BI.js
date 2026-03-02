import{a4 as se,c as _,aj as Y,ak as X,al as vn,am as be,i as De,an as mn,d as I,h as o,ao as gn,j as S,l as T,k as c,A as bn,G as yn,ap as Z,N as ce,aq as $e,t as we,ar as wn,y as xn,z as R,M as J,r as z,T as Cn,E as ae,$ as Sn,X as Pn,V as Mn,n as Ee,q as de,as as zn,H as Fn,u as Fe,o as Tn,a6 as An,at as Te,J as We,v as _n,a3 as Ae,F as _e,L as F,au as ke,av as kn,w as le,aw as Rn,p as Bn,ax as Dn,ay as $n,az as En,aA as Wn,aB as In,f as Re}from"./index-DGdvpsBV.js";function Ln(t,i){return se(t,l=>{l!==void 0&&(i.value=l)}),_(()=>t.value===void 0?i.value:t.value)}function Vn(t,i="default",l=[]){const u=t.$slots[i];return u===void 0?l:u()}const Nn={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:t=>`Please load all ${t}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"YYYY-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:t=>`Total ${t} items`,selected:t=>`${t} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"},Heatmap:{less:"less",more:"more",monthFormat:"MMM",weekdayFormat:"eee"}},On={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},jn=(t,i,l)=>{let f;const u=On[t];return typeof u=="string"?f=u:i===1?f=u.one:f=u.other.replace("{{count}}",i.toString()),l!=null&&l.addSuffix?l.comparison&&l.comparison>0?"in "+f:f+" ago":f},Hn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Un=(t,i,l,f)=>Hn[t],qn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Kn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Gn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Yn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Xn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Jn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Zn=(t,i)=>{const l=Number(t),f=l%100;if(f>20||f<10)switch(f%10){case 1:return l+"st";case 2:return l+"nd";case 3:return l+"rd"}return l+"th"},Qn={ordinalNumber:Zn,era:Y({values:qn,defaultWidth:"wide"}),quarter:Y({values:Kn,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Y({values:Gn,defaultWidth:"wide"}),day:Y({values:Yn,defaultWidth:"wide"}),dayPeriod:Y({values:Xn,defaultWidth:"wide",formattingValues:Jn,defaultFormattingWidth:"wide"})},er=/^(\d+)(th|st|nd|rd)?/i,tr=/\d+/i,nr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},rr={any:[/^b/i,/^(a|c)/i]},or={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ar={any:[/1/i,/2/i,/3/i,/4/i]},ir={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},lr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},sr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},cr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},dr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ur={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},hr={ordinalNumber:vn({matchPattern:er,parsePattern:tr,valueCallback:t=>parseInt(t,10)}),era:X({matchPatterns:nr,defaultMatchWidth:"wide",parsePatterns:rr,defaultParseWidth:"any"}),quarter:X({matchPatterns:or,defaultMatchWidth:"wide",parsePatterns:ar,defaultParseWidth:"any",valueCallback:t=>t+1}),month:X({matchPatterns:ir,defaultMatchWidth:"wide",parsePatterns:lr,defaultParseWidth:"any"}),day:X({matchPatterns:sr,defaultMatchWidth:"wide",parsePatterns:cr,defaultParseWidth:"any"}),dayPeriod:X({matchPatterns:dr,defaultMatchWidth:"any",parsePatterns:ur,defaultParseWidth:"any"})},fr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},pr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},vr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},mr={date:be({formats:fr,defaultWidth:"full"}),time:be({formats:pr,defaultWidth:"full"}),dateTime:be({formats:vr,defaultWidth:"full"})},gr={code:"en-US",formatDistance:jn,formatLong:mr,formatRelative:Un,localize:Qn,match:hr,options:{weekStartsOn:0,firstWeekContainsDate:1}},br={name:"en-US",locale:gr};function yr(t){const{mergedLocaleRef:i,mergedDateLocaleRef:l}=De(mn,null)||{},f=_(()=>{var d,h;return(h=(d=i==null?void 0:i.value)===null||d===void 0?void 0:d[t])!==null&&h!==void 0?h:Nn[t]});return{dateLocaleRef:_(()=>{var d;return(d=l==null?void 0:l.value)!==null&&d!==void 0?d:br}),localeRef:f}}const wr=I({name:"ChevronDown",render(){return o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),xr=gn("clear",()=>o("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Cr=I({name:"Eye",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),o("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Sr=I({name:"EyeOff",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),o("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),o("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),o("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),o("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Pr=S("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[T(">",[c("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[T("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),T("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),c("placeholder",`
 display: flex;
 `),c("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[bn({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),xe=I({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return $e("-base-clear",Pr,we(t,"clsPrefix")),{handleMouseDown(i){i.preventDefault()}}},render(){const{clsPrefix:t}=this;return o("div",{class:`${t}-base-clear`},o(yn,null,{default:()=>{var i,l;return this.show?o("div",{key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Z(this.$slots.icon,()=>[o(ce,{clsPrefix:t},{default:()=>o(xr,null)})])):o("div",{key:"icon",class:`${t}-base-clear__placeholder`},(l=(i=this.$slots).placeholder)===null||l===void 0?void 0:l.call(i))}}))}}),Mr=I({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:i}){return()=>{const{clsPrefix:l}=t;return o(wn,{clsPrefix:l,class:`${l}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?o(xe,{clsPrefix:l,show:t.showClear,onClear:t.onClear},{placeholder:()=>o(ce,{clsPrefix:l,class:`${l}-base-suffix__arrow`},{default:()=>Z(i.default,()=>[o(wr,null)])})}):null})}}}),Ie=xn("n-input"),zr=S("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[c("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),c("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),c("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[T("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),T("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),T("&:-webkit-autofill ~",[c("placeholder","display: none;")])]),R("round",[J("textarea","border-radius: calc(var(--n-height) / 2);")]),c("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[T("span",`
 width: 100%;
 display: inline-block;
 `)]),R("textarea",[c("placeholder","overflow: visible;")]),J("autosize","width: 100%;"),R("autosize",[c("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),S("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),c("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),c("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[T("&[type=password]::-ms-reveal","display: none;"),T("+",[c("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),J("textarea",[c("placeholder","white-space: nowrap;")]),c("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),R("textarea","width: 100%;",[S("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),R("resizable",[S("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),c("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),c("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),R("pair",[c("input-el, placeholder","text-align: center;"),c("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[S("icon",`
 color: var(--n-icon-color);
 `),S("base-icon",`
 color: var(--n-icon-color);
 `)])]),R("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[c("border","border: var(--n-border-disabled);"),c("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),c("placeholder","color: var(--n-placeholder-color-disabled);"),c("separator","color: var(--n-text-color-disabled);",[S("icon",`
 color: var(--n-icon-color-disabled);
 `),S("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),S("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),c("suffix, prefix","color: var(--n-text-color-disabled);",[S("icon",`
 color: var(--n-icon-color-disabled);
 `),S("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),J("disabled",[c("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[T("&:hover",`
 color: var(--n-icon-color-hover);
 `),T("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),T("&:hover",[c("state-border","border: var(--n-border-hover);")]),R("focus","background-color: var(--n-color-focus);",[c("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),c("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),c("state-border",`
 border-color: #0000;
 z-index: 1;
 `),c("prefix","margin-right: 4px;"),c("suffix",`
 margin-left: 4px;
 `),c("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[S("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),S("base-clear",`
 font-size: var(--n-icon-size);
 `,[c("placeholder",[S("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),T(">",[S("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),S("base-icon",`
 font-size: var(--n-icon-size);
 `)]),S("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(t=>R(`${t}-status`,[J("disabled",[S("base-loading",`
 color: var(--n-loading-color-${t})
 `),c("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${t});
 `),c("state-border",`
 border: var(--n-border-${t});
 `),T("&:hover",[c("state-border",`
 border: var(--n-border-hover-${t});
 `)]),T("&:focus",`
 background-color: var(--n-color-focus-${t});
 `,[c("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]),R("focus",`
 background-color: var(--n-color-focus-${t});
 `,[c("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]),Fr=S("input",[R("disabled",[c("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);function Tr(t){let i=0;for(const l of t)i++;return i}function ie(t){return t===""||t==null}function Ar(t){const i=z(null);function l(){const{value:d}=t;if(!(d!=null&&d.focus)){u();return}const{selectionStart:h,selectionEnd:r,value:b}=d;if(h==null||r==null){u();return}i.value={start:h,end:r,beforeText:b.slice(0,h),afterText:b.slice(r)}}function f(){var d;const{value:h}=i,{value:r}=t;if(!h||!r)return;const{value:b}=r,{start:B,beforeText:g,afterText:C}=h;let M=b.length;if(b.endsWith(C))M=b.length-C.length;else if(b.startsWith(g))M=g.length;else{const y=g[B-1],s=b.indexOf(y,B-1);s!==-1&&(M=s+1)}(d=r.setSelectionRange)===null||d===void 0||d.call(r,M,M)}function u(){i.value=null}return se(t,u),{recordCursor:l,restoreCursor:f}}const Be=I({name:"InputWordCount",setup(t,{slots:i}){const{mergedValueRef:l,maxlengthRef:f,mergedClsPrefixRef:u,countGraphemesRef:d}=De(Ie),h=_(()=>{const{value:r}=l;return r===null||Array.isArray(r)?0:(d.value||Tr)(r)});return()=>{const{value:r}=f,{value:b}=l;return o("span",{class:`${u.value}-input-word-count`},Cn(i.default,{value:b===null||Array.isArray(b)?"":b},()=>[r===void 0?h.value:`${h.value} / ${r}`]))}}}),_r=Object.assign(Object.assign({},de.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),Dr=I({name:"Input",props:_r,slots:Object,setup(t){const{mergedClsPrefixRef:i,mergedBorderedRef:l,inlineThemeDisabled:f,mergedRtlRef:u}=Ee(t),d=de("Input","-input",zr,kn,t,i);zn&&$e("-input-safari",Fr,i);const h=z(null),r=z(null),b=z(null),B=z(null),g=z(null),C=z(null),M=z(null),y=Ar(M),s=z(null),{localeRef:v}=yr("Input"),w=z(t.defaultValue),A=we(t,"value"),P=Ln(A,w),k=Fn(t),{mergedSizeRef:E,mergedDisabledRef:D,mergedStatusRef:$}=k,O=z(!1),H=z(!1),W=z(!1),U=z(!1);let ue=null;const he=_(()=>{const{placeholder:e,pair:n}=t;return n?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[v.value.placeholder]:[e]}),Le=_(()=>{const{value:e}=W,{value:n}=P,{value:a}=he;return!e&&(ie(n)||Array.isArray(n)&&ie(n[0]))&&a[0]}),Ve=_(()=>{const{value:e}=W,{value:n}=P,{value:a}=he;return!e&&a[1]&&(ie(n)||Array.isArray(n)&&ie(n[1]))}),fe=Fe(()=>t.internalForceFocus||O.value),Ne=Fe(()=>{if(D.value||t.readonly||!t.clearable||!fe.value&&!H.value)return!1;const{value:e}=P,{value:n}=fe;return t.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(H.value||n):!!e&&(H.value||n)}),pe=_(()=>{const{showPasswordOn:e}=t;if(e)return e;if(t.showPasswordToggle)return"click"}),q=z(!1),Oe=_(()=>{const{textDecoration:e}=t;return e?Array.isArray(e)?e.map(n=>({textDecoration:n})):[{textDecoration:e}]:["",""]}),Ce=z(void 0),je=()=>{var e,n;if(t.type==="textarea"){const{autosize:a}=t;if(a&&(Ce.value=(n=(e=s.value)===null||e===void 0?void 0:e.$el)===null||n===void 0?void 0:n.offsetWidth),!r.value||typeof a=="boolean")return;const{paddingTop:m,paddingBottom:x,lineHeight:p}=window.getComputedStyle(r.value),L=Number(m.slice(0,-2)),V=Number(x.slice(0,-2)),N=Number(p.slice(0,-2)),{value:K}=b;if(!K)return;if(a.minRows){const G=Math.max(a.minRows,1),ge=`${L+V+N*G}px`;K.style.minHeight=ge}if(a.maxRows){const G=`${L+V+N*a.maxRows}px`;K.style.maxHeight=G}}},He=_(()=>{const{maxlength:e}=t;return e===void 0?void 0:Number(e)});Tn(()=>{const{value:e}=P;Array.isArray(e)||me(e)});const Ue=An().proxy;function Q(e,n){const{onUpdateValue:a,"onUpdate:value":m,onInput:x}=t,{nTriggerFormInput:p}=k;a&&F(a,e,n),m&&F(m,e,n),x&&F(x,e,n),w.value=e,p()}function ee(e,n){const{onChange:a}=t,{nTriggerFormChange:m}=k;a&&F(a,e,n),w.value=e,m()}function qe(e){const{onBlur:n}=t,{nTriggerFormBlur:a}=k;n&&F(n,e),a()}function Ke(e){const{onFocus:n}=t,{nTriggerFormFocus:a}=k;n&&F(n,e),a()}function Ge(e){const{onClear:n}=t;n&&F(n,e)}function Ye(e){const{onInputBlur:n}=t;n&&F(n,e)}function Xe(e){const{onInputFocus:n}=t;n&&F(n,e)}function Je(){const{onDeactivate:e}=t;e&&F(e)}function Ze(){const{onActivate:e}=t;e&&F(e)}function Qe(e){const{onClick:n}=t;n&&F(n,e)}function et(e){const{onWrapperFocus:n}=t;n&&F(n,e)}function tt(e){const{onWrapperBlur:n}=t;n&&F(n,e)}function nt(){W.value=!0}function rt(e){W.value=!1,e.target===C.value?te(e,1):te(e,0)}function te(e,n=0,a="input"){const m=e.target.value;if(me(m),e instanceof InputEvent&&!e.isComposing&&(W.value=!1),t.type==="textarea"){const{value:p}=s;p&&p.syncUnifiedContainer()}if(ue=m,W.value)return;y.recordCursor();const x=ot(m);if(x)if(!t.pair)a==="input"?Q(m,{source:n}):ee(m,{source:n});else{let{value:p}=P;Array.isArray(p)?p=[p[0],p[1]]:p=["",""],p[n]=m,a==="input"?Q(p,{source:n}):ee(p,{source:n})}Ue.$forceUpdate(),x||Ae(y.restoreCursor)}function ot(e){const{countGraphemes:n,maxlength:a,minlength:m}=t;if(n){let p;if(a!==void 0&&(p===void 0&&(p=n(e)),p>Number(a))||m!==void 0&&(p===void 0&&(p=n(e)),p<Number(a)))return!1}const{allowInput:x}=t;return typeof x=="function"?x(e):!0}function at(e){Ye(e),e.relatedTarget===h.value&&Je(),e.relatedTarget!==null&&(e.relatedTarget===g.value||e.relatedTarget===C.value||e.relatedTarget===r.value)||(U.value=!1),ne(e,"blur"),M.value=null}function it(e,n){Xe(e),O.value=!0,U.value=!0,Ze(),ne(e,"focus"),n===0?M.value=g.value:n===1?M.value=C.value:n===2&&(M.value=r.value)}function lt(e){t.passivelyActivated&&(tt(e),ne(e,"blur"))}function st(e){t.passivelyActivated&&(O.value=!0,et(e),ne(e,"focus"))}function ne(e,n){e.relatedTarget!==null&&(e.relatedTarget===g.value||e.relatedTarget===C.value||e.relatedTarget===r.value||e.relatedTarget===h.value)||(n==="focus"?(Ke(e),O.value=!0):n==="blur"&&(qe(e),O.value=!1))}function ct(e,n){te(e,n,"change")}function dt(e){Qe(e)}function ut(e){Ge(e),Se()}function Se(){t.pair?(Q(["",""],{source:"clear"}),ee(["",""],{source:"clear"})):(Q("",{source:"clear"}),ee("",{source:"clear"}))}function ht(e){const{onMousedown:n}=t;n&&n(e);const{tagName:a}=e.target;if(a!=="INPUT"&&a!=="TEXTAREA"){if(t.resizable){const{value:m}=h;if(m){const{left:x,top:p,width:L,height:V}=m.getBoundingClientRect(),N=14;if(x+L-N<e.clientX&&e.clientX<x+L&&p+V-N<e.clientY&&e.clientY<p+V)return}}e.preventDefault(),O.value||Pe()}}function ft(){var e;H.value=!0,t.type==="textarea"&&((e=s.value)===null||e===void 0||e.handleMouseEnterWrapper())}function pt(){var e;H.value=!1,t.type==="textarea"&&((e=s.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function vt(){D.value||pe.value==="click"&&(q.value=!q.value)}function mt(e){if(D.value)return;e.preventDefault();const n=m=>{m.preventDefault(),ke("mouseup",document,n)};if(_e("mouseup",document,n),pe.value!=="mousedown")return;q.value=!0;const a=()=>{q.value=!1,ke("mouseup",document,a)};_e("mouseup",document,a)}function gt(e){t.onKeyup&&F(t.onKeyup,e)}function bt(e){switch(t.onKeydown&&F(t.onKeydown,e),e.key){case"Escape":ve();break;case"Enter":yt(e);break}}function yt(e){var n,a;if(t.passivelyActivated){const{value:m}=U;if(m){t.internalDeactivateOnEnter&&ve();return}e.preventDefault(),t.type==="textarea"?(n=r.value)===null||n===void 0||n.focus():(a=g.value)===null||a===void 0||a.focus()}}function ve(){t.passivelyActivated&&(U.value=!1,Ae(()=>{var e;(e=h.value)===null||e===void 0||e.focus()}))}function Pe(){var e,n,a;D.value||(t.passivelyActivated?(e=h.value)===null||e===void 0||e.focus():((n=r.value)===null||n===void 0||n.focus(),(a=g.value)===null||a===void 0||a.focus()))}function wt(){var e;!((e=h.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function xt(){var e,n;(e=r.value)===null||e===void 0||e.select(),(n=g.value)===null||n===void 0||n.select()}function Ct(){D.value||(r.value?r.value.focus():g.value&&g.value.focus())}function St(){const{value:e}=h;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&ve()}function Pt(e){if(t.type==="textarea"){const{value:n}=r;n==null||n.scrollTo(e)}else{const{value:n}=g;n==null||n.scrollTo(e)}}function me(e){const{type:n,pair:a,autosize:m}=t;if(!a&&m)if(n==="textarea"){const{value:x}=b;x&&(x.textContent=`${e??""}\r
`)}else{const{value:x}=B;x&&(e?x.textContent=e:x.innerHTML="&nbsp;")}}function Mt(){je()}const Me=z({top:"0"});function zt(e){var n;const{scrollTop:a}=e.target;Me.value.top=`${-a}px`,(n=s.value)===null||n===void 0||n.syncUnifiedContainer()}let re=null;Te(()=>{const{autosize:e,type:n}=t;e&&n==="textarea"?re=se(P,a=>{!Array.isArray(a)&&a!==ue&&me(a)}):re==null||re()});let oe=null;Te(()=>{t.type==="textarea"?oe=se(P,e=>{var n;!Array.isArray(e)&&e!==ue&&((n=s.value)===null||n===void 0||n.syncUnifiedContainer())}):oe==null||oe()}),Bn(Ie,{mergedValueRef:P,maxlengthRef:He,mergedClsPrefixRef:i,countGraphemesRef:we(t,"countGraphemes")});const Ft={wrapperElRef:h,inputElRef:g,textareaElRef:r,isCompositing:W,clear:Se,focus:Pe,blur:wt,select:xt,deactivate:St,activate:Ct,scrollTo:Pt},Tt=We("Input",u,i),ze=_(()=>{const{value:e}=E,{common:{cubicBezierEaseInOut:n},self:{color:a,borderRadius:m,textColor:x,caretColor:p,caretColorError:L,caretColorWarning:V,textDecorationColor:N,border:K,borderDisabled:G,borderHover:ge,borderFocus:At,placeholderColor:_t,placeholderColorDisabled:kt,lineHeightTextarea:Rt,colorDisabled:Bt,colorFocus:Dt,textColorDisabled:$t,boxShadowFocus:Et,iconSize:Wt,colorFocusWarning:It,boxShadowFocusWarning:Lt,borderWarning:Vt,borderFocusWarning:Nt,borderHoverWarning:Ot,colorFocusError:jt,boxShadowFocusError:Ht,borderError:Ut,borderFocusError:qt,borderHoverError:Kt,clearSize:Gt,clearColor:Yt,clearColorHover:Xt,clearColorPressed:Jt,iconColor:Zt,iconColorDisabled:Qt,suffixTextColor:en,countTextColor:tn,countTextColorDisabled:nn,iconColorHover:rn,iconColorPressed:on,loadingColor:an,loadingColorError:ln,loadingColorWarning:sn,fontWeight:cn,[le("padding",e)]:dn,[le("fontSize",e)]:un,[le("height",e)]:hn}}=d.value,{left:fn,right:pn}=Rn(dn);return{"--n-bezier":n,"--n-count-text-color":tn,"--n-count-text-color-disabled":nn,"--n-color":a,"--n-font-size":un,"--n-font-weight":cn,"--n-border-radius":m,"--n-height":hn,"--n-padding-left":fn,"--n-padding-right":pn,"--n-text-color":x,"--n-caret-color":p,"--n-text-decoration-color":N,"--n-border":K,"--n-border-disabled":G,"--n-border-hover":ge,"--n-border-focus":At,"--n-placeholder-color":_t,"--n-placeholder-color-disabled":kt,"--n-icon-size":Wt,"--n-line-height-textarea":Rt,"--n-color-disabled":Bt,"--n-color-focus":Dt,"--n-text-color-disabled":$t,"--n-box-shadow-focus":Et,"--n-loading-color":an,"--n-caret-color-warning":V,"--n-color-focus-warning":It,"--n-box-shadow-focus-warning":Lt,"--n-border-warning":Vt,"--n-border-focus-warning":Nt,"--n-border-hover-warning":Ot,"--n-loading-color-warning":sn,"--n-caret-color-error":L,"--n-color-focus-error":jt,"--n-box-shadow-focus-error":Ht,"--n-border-error":Ut,"--n-border-focus-error":qt,"--n-border-hover-error":Kt,"--n-loading-color-error":ln,"--n-clear-color":Yt,"--n-clear-size":Gt,"--n-clear-color-hover":Xt,"--n-clear-color-pressed":Jt,"--n-icon-color":Zt,"--n-icon-color-hover":rn,"--n-icon-color-pressed":on,"--n-icon-color-disabled":Qt,"--n-suffix-text-color":en}}),j=f?_n("input",_(()=>{const{value:e}=E;return e[0]}),ze,t):void 0;return Object.assign(Object.assign({},Ft),{wrapperElRef:h,inputElRef:g,inputMirrorElRef:B,inputEl2Ref:C,textareaElRef:r,textareaMirrorElRef:b,textareaScrollbarInstRef:s,rtlEnabled:Tt,uncontrolledValue:w,mergedValue:P,passwordVisible:q,mergedPlaceholder:he,showPlaceholder1:Le,showPlaceholder2:Ve,mergedFocus:fe,isComposing:W,activated:U,showClearButton:Ne,mergedSize:E,mergedDisabled:D,textDecorationStyle:Oe,mergedClsPrefix:i,mergedBordered:l,mergedShowPasswordOn:pe,placeholderStyle:Me,mergedStatus:$,textAreaScrollContainerWidth:Ce,handleTextAreaScroll:zt,handleCompositionStart:nt,handleCompositionEnd:rt,handleInput:te,handleInputBlur:at,handleInputFocus:it,handleWrapperBlur:lt,handleWrapperFocus:st,handleMouseEnter:ft,handleMouseLeave:pt,handleMouseDown:ht,handleChange:ct,handleClick:dt,handleClear:ut,handlePasswordToggleClick:vt,handlePasswordToggleMousedown:mt,handleWrapperKeydown:bt,handleWrapperKeyup:gt,handleTextAreaMirrorResize:Mt,getTextareaScrollContainer:()=>r.value,mergedTheme:d,cssVars:f?void 0:ze,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender})},render(){var t,i,l,f,u,d,h;const{mergedClsPrefix:r,mergedStatus:b,themeClass:B,type:g,countGraphemes:C,onRender:M}=this,y=this.$slots;return M==null||M(),o("div",{ref:"wrapperElRef",class:[`${r}-input`,B,b&&`${r}-input--${b}-status`,{[`${r}-input--rtl`]:this.rtlEnabled,[`${r}-input--disabled`]:this.mergedDisabled,[`${r}-input--textarea`]:g==="textarea",[`${r}-input--resizable`]:this.resizable&&!this.autosize,[`${r}-input--autosize`]:this.autosize,[`${r}-input--round`]:this.round&&g!=="textarea",[`${r}-input--pair`]:this.pair,[`${r}-input--focus`]:this.mergedFocus,[`${r}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},o("div",{class:`${r}-input-wrapper`},ae(y.prefix,s=>s&&o("div",{class:`${r}-input__prefix`},s)),g==="textarea"?o(Sn,{ref:"textareaScrollbarInstRef",class:`${r}-input__textarea`,container:this.getTextareaScrollContainer,theme:(i=(t=this.theme)===null||t===void 0?void 0:t.peers)===null||i===void 0?void 0:i.Scrollbar,themeOverrides:(f=(l=this.themeOverrides)===null||l===void 0?void 0:l.peers)===null||f===void 0?void 0:f.Scrollbar,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var s,v;const{textAreaScrollContainerWidth:w}=this,A={width:this.autosize&&w&&`${w}px`};return o(Pn,null,o("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${r}-input__textarea-el`,(s=this.inputProps)===null||s===void 0?void 0:s.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:C?void 0:this.maxlength,minlength:C?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(v=this.inputProps)===null||v===void 0?void 0:v.style,A],onBlur:this.handleInputBlur,onFocus:P=>{this.handleInputFocus(P,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`,style:[this.placeholderStyle,A],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?o(Mn,{onResize:this.handleTextAreaMirrorResize},{default:()=>o("div",{ref:"textareaMirrorElRef",class:`${r}-input__textarea-mirror`,key:"mirror"})}):null)}}):o("div",{class:`${r}-input__input`},o("input",Object.assign({type:g==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":g},this.inputProps,{ref:"inputElRef",class:[`${r}-input__input-el`,(u=this.inputProps)===null||u===void 0?void 0:u.class],style:[this.textDecorationStyle[0],(d=this.inputProps)===null||d===void 0?void 0:d.style],tabindex:this.passivelyActivated&&!this.activated?-1:(h=this.inputProps)===null||h===void 0?void 0:h.tabindex,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:C?void 0:this.maxlength,minlength:C?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:s=>{this.handleInputFocus(s,0)},onInput:s=>{this.handleInput(s,0)},onChange:s=>{this.handleChange(s,0)}})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[0])):null,this.autosize?o("div",{class:`${r}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&ae(y.suffix,s=>s||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?o("div",{class:`${r}-input__suffix`},[ae(y["clear-icon-placeholder"],v=>(this.clearable||v)&&o(xe,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>v,icon:()=>{var w,A;return(A=(w=this.$slots)["clear-icon"])===null||A===void 0?void 0:A.call(w)}})),this.internalLoadingBeforeSuffix?null:s,this.loading!==void 0?o(Mr,{clsPrefix:r,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?s:null,this.showCount&&this.type!=="textarea"?o(Be,null,{default:v=>{var w;const{renderCount:A}=this;return A?A(v):(w=y.count)===null||w===void 0?void 0:w.call(y,v)}}):null,this.mergedShowPasswordOn&&this.type==="password"?o("div",{class:`${r}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Z(y["password-visible-icon"],()=>[o(ce,{clsPrefix:r},{default:()=>o(Cr,null)})]):Z(y["password-invisible-icon"],()=>[o(ce,{clsPrefix:r},{default:()=>o(Sr,null)})])):null]):null)),this.pair?o("span",{class:`${r}-input__separator`},Z(y.separator,()=>[this.separator])):null,this.pair?o("div",{class:`${r}-input-wrapper`},o("div",{class:`${r}-input__input`},o("input",{ref:"inputEl2Ref",type:this.type,class:`${r}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:C?void 0:this.maxlength,minlength:C?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:s=>{this.handleInputFocus(s,1)},onInput:s=>{this.handleInput(s,1)},onChange:s=>{this.handleChange(s,1)}}),this.showPlaceholder2?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[1])):null),ae(y.suffix,s=>(this.clearable||s)&&o("div",{class:`${r}-input__suffix`},[this.clearable&&o(xe,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var v;return(v=y["clear-icon"])===null||v===void 0?void 0:v.call(y)},placeholder:()=>{var v;return(v=y["clear-icon-placeholder"])===null||v===void 0?void 0:v.call(y)}}),s]))):null,this.mergedBordered?o("div",{class:`${r}-input__border`}):null,this.mergedBordered?o("div",{class:`${r}-input__state-border`}):null,this.showCount&&g==="textarea"?o(Be,null,{default:s=>{var v;const{renderCount:w}=this;return w?w(s):(v=y.count)===null||v===void 0?void 0:v.call(y,s)}}):null)}});let ye;function kr(){if(!Dn)return!0;if(ye===void 0){const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.rowGap="1px",t.appendChild(document.createElement("div")),t.appendChild(document.createElement("div")),document.body.appendChild(t);const i=t.scrollHeight===1;return document.body.removeChild(t),ye=i}return ye}const Rr=Object.assign(Object.assign({},de.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),$r=I({name:"Space",props:Rr,setup(t){const{mergedClsPrefixRef:i,mergedRtlRef:l}=Ee(t),f=de("Space","-space",void 0,Wn,t,i),u=We("Space",l,i);return{useGap:kr(),rtlEnabled:u,mergedClsPrefix:i,margin:_(()=>{const{size:d}=t;if(Array.isArray(d))return{horizontal:d[0],vertical:d[1]};if(typeof d=="number")return{horizontal:d,vertical:d};const{self:{[le("gap",d)]:h}}=f.value,{row:r,col:b}=In(h);return{horizontal:Re(b),vertical:Re(r)}})}},render(){const{vertical:t,reverse:i,align:l,inline:f,justify:u,itemClass:d,itemStyle:h,margin:r,wrap:b,mergedClsPrefix:B,rtlEnabled:g,useGap:C,wrapItem:M,internalUseGap:y}=this,s=$n(Vn(this),!1);if(!s.length)return null;const v=`${r.horizontal}px`,w=`${r.horizontal/2}px`,A=`${r.vertical}px`,P=`${r.vertical/2}px`,k=s.length-1,E=u.startsWith("space-");return o("div",{role:"none",class:[`${B}-space`,g&&`${B}-space--rtl`],style:{display:f?"inline-flex":"flex",flexDirection:t&&!i?"column":t&&i?"column-reverse":!t&&i?"row-reverse":"row",justifyContent:["start","end"].includes(u)?`flex-${u}`:u,flexWrap:!b||t?"nowrap":"wrap",marginTop:C||t?"":`-${P}`,marginBottom:C||t?"":`-${P}`,alignItems:l,gap:C?`${r.vertical}px ${r.horizontal}px`:""}},!M&&(C||y)?s:s.map((D,$)=>D.type===En?D:o("div",{role:"none",class:d,style:[h,{maxWidth:"100%"},C?"":t?{marginBottom:$!==k?A:""}:g?{marginLeft:E?u==="space-between"&&$===k?"":w:$!==k?v:"",marginRight:E?u==="space-between"&&$===0?"":w:"",paddingTop:P,paddingBottom:P}:{marginRight:E?u==="space-between"&&$===k?"":w:$!==k?v:"",marginLeft:E?u==="space-between"&&$===0?"":w:"",paddingTop:P,paddingBottom:P}]},D)))}});export{Dr as _,Ln as a,$r as b,yr as u};
