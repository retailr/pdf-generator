(this.webpackJsonpexcel2pdf=this.webpackJsonpexcel2pdf||[]).push([[0],{33:function(e,t,c){},59:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(1),s=c.n(n),i=c(18),l=c.n(i),r=c(12),o=c(38),d=c(30),u=c(21),b=c(13),j=c(39),m=c.n(j),f=c(40),p=c.n(f),x={alertType:"info",message:""},A={loading:!1,success:!1,request:null,response:null,error:null},O={notification:x,apiRequest:{}},h=c(7),v=c(8),g=Object(u.b)({name:"apiRequest",initialState:{},reducers:{apiRequestLoading:function(e,t){e[t.payload.key]=Object(v.a)(Object(v.a)({},e[t.payload.key]),{},{loading:!0,request:t.payload.request||null})},apiRequestSuccess:function(e,t){e[t.payload.key]=Object(v.a)(Object(v.a)({},e[t.payload.key]),{},{loading:!1,success:!0,response:t.payload.response,error:null})},apiRequestFailure:function(e,t){e[t.payload.key]=Object(v.a)(Object(v.a)({},e[t.payload.key]),{},{loading:!1,success:!1,error:t.payload.error||null})},apiRequestReset:function(e,t){e[t.payload.key]=Object(v.a)(Object(v.a)({},e[t.payload.key]),A)},apiRequestResetAll:function(e,t){({})},apiRequestUpdateResponse:function(e,t){var c;e[t.payload.key]=Object(v.a)(Object(v.a)({},e[t.payload.key]),{},{loading:!1,success:!0,response:Object(v.a)(Object(v.a)({},null===(c=e[t.payload.key])||void 0===c?void 0:c.response),t.payload.response)})},apiRequestReplaceResponse:function(e,t){e[t.payload.key]=Object(v.a)(Object(v.a)({},e[t.payload.key]),{},{loading:!1,success:!0,response:t.payload.response,error:null})}}}),w=g.actions,E=(w.apiRequestFailure,w.apiRequestLoading,w.apiRequestReplaceResponse,w.apiRequestReset,w.apiRequestResetAll,w.apiRequestSuccess,w.apiRequestUpdateResponse,g.reducer),y=Object(u.b)({name:"notification",initialState:x,reducers:{show:function(e,t){e.alertType=t.payload.alertType,e.message=t.payload.message},clear:function(e,t){}}}),N=y.actions,C=(N.show,N.clear,y.reducer),k=Object(h.c)({notification:C,apiRequest:E}),R={key:"retailr-xceltopdf",storage:p.a},T=Object(b.a)(),P=Object(d.a)(R,k),I=Object(u.a)({reducer:P,middleware:function(e){return e().concat(m.a)},devTools:!1,preloadedState:O}),D=(c(59),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))}),J=c(41),Q=c(42),S=c(47),L=c(46),M=c(43),q=function(e){var t=e.title,c=e.description;return Object(a.jsx)("div",{className:"application",children:Object(a.jsxs)(M.a,{titleTemplate:"%s | Excel to PDF",defaultTitle:"Excel to PDF",children:[Object(a.jsx)("meta",{charSet:"utf-8"}),Object(a.jsx)("title",{children:t}),Object(a.jsx)("meta",{name:"description",content:c}),Object(a.jsx)("link",{rel:"canonical",href:"http://mysite.com/example"})]})})},F=function(e){var t=e.error,c=e.description;return Object(a.jsxs)("div",{className:"container mx-auto h-screen",children:[Object(a.jsx)(q,{title:t,description:c}),Object(a.jsxs)("div",{className:"flex w-full flex-col h-screen justify-center items-center",children:[Object(a.jsx)("h2",{title:t,className:"font-semibold text-8xl",children:t}),Object(a.jsx)("p",{color:"textSecondary",children:c}),Object(a.jsx)("button",{className:"mt-10 bg-primary text-white p-2 rounded",onClick:function(){return T.push("/")},children:"Back to Overview"})]})]})},G=function(e){Object(S.a)(c,e);var t=Object(L.a)(c);function c(e){var a;return Object(J.a)(this,c),(a=t.call(this,e)).state={hasError:!1},a}return Object(Q.a)(c,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)(F,{error:"Oops!",description:"Something went wrong. Please contact you administrator"}):this.props.children}}]),c}(s.a.Component),Y=c(10),B=c(3),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e){if("serviceWorker"in navigator){if(new URL("/excel2pdf",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/excel2pdf","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var a=c.headers.get("content-type");404===c.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(t,e)}))}}function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var W=c(27);function K(){var e=Object(B.g)().pathname,t=Object(B.i)("/offers/:status/:userId/:offerId/file"),c=Object(B.i)("/offers/:status/:userId/:offerId/file"),a=Object(B.i)("/offers/:status");return Object(n.useEffect)((function(){t||a||c||window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t,c,a,e]),null}var z=c(26),Z=[{id:"generate-pdf",path:"/generate-pdf",title:"Generate PDF",icon:z.a},{id:"manage-template",path:"/templates",title:"Manage Templates",icon:z.b}],H=c(23),_=s.a.memo((function(e){var t=e.menu;return Object(a.jsxs)(H.b,{activeClassName:"text-primary",to:t.disabled?"":t.path,className:"w-full text-xs hover:bg-gray-200 flex justify-center flex-wrap text-center items-center text-gray-500 p-3",children:[Object(a.jsx)(t.icon,{fontSize:24,className:"mb-2"}),Object(a.jsx)("span",{className:"w-full",children:t.title})]})})),$=function(e){return Object(a.jsxs)("div",{className:"w-1/12 h-screen flex flex-wrap items-start justify-start flex-col border-r border-gray-100 bg-white z-0",children:[Object(a.jsx)("div",{className:"w-full flex justify-center py-3",children:Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"Retailr Logo",className:"h-24"})}),Object(a.jsx)("div",{className:"w-full flex-wrap flex",children:Z.map((function(e){return!e.hide&&Object(a.jsx)(_,{menu:e},e.id)}))})]})},ee=function(e){var t=e.component;return Object(a.jsxs)("div",{className:"flex font-serif w-full",children:[Object(a.jsx)($,{}),Object(a.jsx)("main",{className:"w-11/12",children:Object(a.jsx)("section",{children:t})})]})},te=Object(r.b)((function(e){return{}}),{})(ee),ce=(c(61),c(19)),ae=(c(33),function(e){var t=e.setStep,c=Object(ce.b)(),n=c.register,s=c.handleSubmit,i=c.errors;return Object(a.jsx)("div",{className:"py-6",children:Object(a.jsxs)("form",{onSubmit:s((function(e){return t(2)})),children:[Object(a.jsxs)("div",{className:"mb-6 w-full",children:[Object(a.jsx)("label",{className:"form-label",children:"Upload Excel template"}),Object(a.jsx)("input",{type:"file",id:"excelFile",name:"excelFile",className:"w-full form-control",ref:n({required:!0})}),i.excelFile&&Object(a.jsx)("span",{className:"text-xs text-primary",children:"This field is required"})]}),Object(a.jsxs)("div",{className:"mb-6 w-full",children:[Object(a.jsx)("label",{className:"form-label",children:"Select PDF template"}),Object(a.jsx)("select",{id:"template",name:"template",className:"w-full form-control",ref:n({required:!0}),children:Object(a.jsx)("option",{value:"2",children:"VTL Pricing Template"})}),i.template&&Object(a.jsx)("span",{className:"text-xs text-primary",children:"This field is required"})]}),Object(a.jsx)("div",{className:"w-full text-center mb-6 ",children:Object(a.jsx)("button",{className:"btn-primary",type:"submit",children:"Proceed to PDF Configuration"})})]})})}),ne=function(e){var t=Object(ce.b)({defaultValues:{configuration:[]}}),c=t.register,n=t.control,s=t.handleSubmit,i=t.errors,l=Object(ce.a)({control:n,name:"configuration"}).fields;return console.log(i),Object(a.jsx)("div",{className:"py-6",children:Object(a.jsxs)("form",{onSubmit:s((function(e){return console.log("data",e)})),children:[Object(a.jsx)("h1",{className:"form-label",children:"Map excel fields to template fields"}),Object(a.jsxs)("div",{className:"w-full flex",children:[Object(a.jsx)("div",{className:"w-1/2 font-bold p-4",children:"Excel Field"}),Object(a.jsx)("div",{className:"w-1/2 font-bold p-4",children:"Template Field"})]}),Object(a.jsx)("ul",{children:l.map((function(e,t){return Object(a.jsxs)("li",{className:"w-full flex",children:[Object(a.jsx)("span",{className:"w-1/2 px-4 py-2",children:Object(a.jsx)("select",{id:"configuration[".concat(t,"].excelField"),name:"configuration[".concat(t,"].excelField"),className:"w-full form-control",defaultValue:"".concat(e.excelField),ref:c({required:!0}),children:Object(a.jsx)("option",{value:"2",children:"VTL Pricing Template"})})}),Object(a.jsx)("span",{className:"w-1/2 px-4 py-2",children:Object(a.jsx)("select",{id:"configuration[".concat(t,"].pdfField"),name:"configuration[".concat(t,"].pdfField"),className:"w-full form-control",defaultValue:"".concat(e.pdfField),ref:c({required:!0}),children:Object(a.jsx)("option",{value:"2",children:"VTL Pricing Template"})})})]},e.id)}))}),Object(a.jsx)("div",{className:"w-full text-center",children:Object(a.jsx)("button",{className:"btn-primary",type:"submit",children:"Generate PDF"})})]})})},se=function(e){var t=Object(n.useState)(1),c=Object(Y.a)(t,2),s=c[0],i=c[1];return Object(a.jsxs)("div",{className:"py-6 h-screen",children:[1===s&&Object(a.jsx)(ae,{setStep:i}),2===s&&Object(a.jsx)(ne,{setStep:i})]})},ie=Object(r.b)((function(e){return{}}),{})(se),le=function(e){return Object(a.jsxs)("div",{className:"w-1/2 h-screen py-6 flex flex-col justify-between pb-0",children:[Object(a.jsx)("div",{className:"w-full font-semibold text-lg text-center text-primary",children:"Template Preview"}),Object(a.jsx)("button",{className:"self-end w-full font-semibold bg-primary text-white p-4",children:"Download PDF"})]})},re=Object(r.b)((function(e){return{}}),{})(le),oe=function(e){return Object(a.jsxs)("div",{className:"w-full flex",children:[Object(a.jsx)(q,{title:"Generate PDF",description:"Convert Excel Sheets to PDF templates"}),Object(a.jsxs)("div",{className:"w-1/2 shadow-md bg-white p-6",children:[Object(a.jsx)("h4",{className:"text-primary font-semibold text-lg",children:"Convert Excel Sheets to PDF templates"}),Object(a.jsx)(ie,{})]}),Object(a.jsx)(re,{})]})},de=Object(r.b)((function(e){return{}}),{})(oe),ue=c(17),be=c(31),je=[{id:Object(ue.a)(8),title:"VTL Pricing template",template_url:"",sample_data:"",updated_at:"2020-12-08:09:00:00",created_at:"2020-12-08:09:00:00"},{id:Object(ue.a)(8),title:"Retail Test template",template_url:"",sample_data:"",updated_at:"2020-12-08:09:00:00",created_at:"2020-12-08:09:00:00"},{id:Object(ue.a)(8),title:"Test template",template_url:"",sample_data:"",updated_at:"2020-12-08:09:00:00",created_at:"2020-12-08:09:00:00"},{id:Object(ue.a)(8),title:"User template",template_url:"",sample_data:"",updated_at:"2020-12-08:09:00:00",created_at:"2020-12-08:09:00:00"}],me=[{id:Object(ue.a)(8),title:"ID",colspan:2,key:"id"},{id:Object(ue.a)(8),title:"Title",colspan:5,key:"title"},{id:Object(ue.a)(8),title:"Upload Date",colspan:4,key:"created_at"}],fe=function(e){var t=Object(n.useState)(e),c=Object(Y.a)(t,2),a=c[0],s=c[1],i=Object(n.useRef)(null),l=function(e){"Escape"===e.key&&s(!1)},r=function(e){i.current&&!i.current.contains(e.target)&&s(!1)};return Object(n.useEffect)((function(){return document.addEventListener("keydown",l,!0),document.addEventListener("click",r,!0),function(){document.removeEventListener("keydown",l,!0),document.removeEventListener("click",r,!0)}})),{ref:i,isComponentVisible:a,setIsComponentVisible:s}},pe=(c(63),function(e){var t=e.children,c=fe(!1),n=c.ref,s=c.isComponentVisible,i=c.setIsComponentVisible;return Object(a.jsxs)("div",{ref:n,className:"w-full text-right relative",children:[Object(a.jsx)("button",{className:"p-2 hover:bg-gray-200 rounded",onClick:function(){return i(!s)},children:Object(a.jsx)(z.c,{})}),s?Object(a.jsx)("div",{className:"absolute border-gray-100 border text-left right-0 top-full shadow-sm z-10 rounded bg-white w-40",children:t}):null]})}),xe=function(e){var t=e.template,c=e.columns,n=e.actions;return Object(a.jsxs)("div",{className:"flex text-left text-sm w-full border-b p-2 border-gray-200",children:[c.map((function(e){return Object(a.jsx)("div",{className:"w-".concat(e.colspan,"/12 p-2"),children:t[e.key]},e.id)})),Object(a.jsx)("div",{className:"w-1/12 text-sm flex items-center",children:Object(a.jsx)(pe,{children:n.map((function(e){return Object(a.jsxs)("button",{onClick:function(){return e.action(t)},className:"text-left p-2 px-4 w-full flex items-center hover:text-primary",children:[Object(a.jsx)(e.icon,{className:"mr-2"}),e.title]},e.id)}))})})]})},Ae=function(e){var t=Object(B.i)().url;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"flex flex-wrap w-full",children:[Object(a.jsx)("div",{className:"w-full flex",children:me.map((function(e){return Object(a.jsx)("div",{className:"w-".concat(e.colspan,"/12 font-semibold p-2"),children:e.title},e.id)}))}),Object(a.jsx)("div",{className:"w-full",children:je.map((function(e){return Object(a.jsx)(xe,{actions:(c=t,[{id:Object(ue.a)(8),title:"View Details",icon:be.c,action:function(e){T.push("".concat(c,"/").concat(e.id,"/view"))}},{id:Object(ue.a)(8),title:"Edit",icon:be.b,action:function(e){T.push("".concat(c,"/").concat(e.id,"/edit"))}},{id:Object(ue.a)(8),title:"Delete",icon:be.a,action:function(e){console.log(e.id)}}]),columns:me,template:e},e.id);var c}))}),Object(a.jsx)("div",{className:"w-full text-center my-8",children:Object(a.jsx)("button",{className:"p-2 border text-sm border-gray-200 hover:bg-gray-200 rounded",children:"Load More"})})]})})},Oe=Object(r.b)((function(e){return{}}),{})(Ae),he=(c(6),c(16),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,c=e||"";t&&(c=c.toLowerCase());for(var a=c.split(" "),n=0;n<a.length;n++)a[n]=a[n].charAt(0).toUpperCase()+a[n].substring(1);return a.join(" ")});var ve=function(e){var t=e.mode,c=e.setPreviewMode,n=e.previewMode,s=Object(ce.b)(),i=s.register,l=s.handleSubmit,r=s.errors,o=Object(B.h)().templateId;return Object(a.jsxs)("div",{className:"py-6",children:[Object(a.jsx)(q,{title:"".concat(he(t)," Template"),description:"".concat(he(t)," PDF Template")}),Object(a.jsxs)("h4",{className:"text-primary font-semibold text-lg",children:[he(t)," PDF Template ",!!o&&"(".concat(o,")")]}),Object(a.jsxs)("form",{onSubmit:l((function(e){return console.log(e)})),children:[Object(a.jsxs)("div",{className:"mb-6 w-full",children:[Object(a.jsx)("label",{className:"form-label",children:"Template name"}),Object(a.jsx)("input",{id:"template",name:"template",type:"text",className:"w-full font-mono form-control",ref:i({required:!0})}),r.template&&Object(a.jsx)("span",{className:"text-xs text-primary",children:"This field is required"})]}),Object(a.jsxs)("div",{className:"mb-6 w-full",children:[Object(a.jsx)("label",{className:"form-label",children:"Upload JS/HTML template"}),Object(a.jsx)("input",{type:"file",id:"excelFile",name:"excelFile",className:"w-full form-control",ref:i({required:!0})}),r.excelFile&&Object(a.jsx)("span",{className:"text-xs text-primary",children:"This field is required"})]}),Object(a.jsxs)("div",{className:"mb-6 w-full",children:[Object(a.jsx)("label",{className:"form-label",children:"Upload Sample JSON Data"}),Object(a.jsx)("textarea",{id:"sampledata",name:"sampledata",rows:10,className:"w-full font-mono form-control",ref:i({required:!0})}),r.sampledata&&Object(a.jsx)("span",{className:"text-xs text-primary",children:"This field is required"})]}),Object(a.jsxs)("div",{className:"w-full text-center mb-6 ",children:[Object(a.jsx)("button",{onClick:function(){return c(!n)},className:"btn-primary-outlined",type:"button",children:n?"Close Preview":"Preview Template"})," ",Object(a.jsx)("button",{className:"btn-primary",type:"submit",children:"Upload Template"})]})]})]})},ge=function(e){var t=Object(n.useState)(!1),c=Object(Y.a)(t,2),s=c[0],i=c[1],l=Object(B.i)();return Object(a.jsxs)("div",{className:"w-full flex",children:[Object(a.jsx)(q,{title:"Manage Templates",description:"Manage PDF Templates"}),!s&&Object(a.jsxs)("div",{className:"w-".concat(l.isExact?"full":"1/2"," h-screen shadow-md bg-white p-6"),children:[Object(a.jsx)("h4",{className:"text-primary font-semibold text-lg",children:"Manage PDF Templates"}),Object(a.jsx)("div",{className:"w-full my-8 text-right",children:Object(a.jsx)(H.a,{className:"btn-primary text-sm",to:"".concat(l.url,"/add"),children:"Add Template"})}),Object(a.jsx)("div",{className:"w-full my-8",children:Object(a.jsx)(Oe,{})})]}),!l.isExact&&Object(a.jsxs)("div",{className:"w-1/2 p-6 ".concat(s&&"shadow-md"),children:[Object(a.jsx)(B.b,{path:"".concat(l.path,"/add"),children:Object(a.jsx)(ve,{previewMode:s,setPreviewMode:i,mode:"new"})}),Object(a.jsx)(B.b,{path:"".concat(l.path,"/:templateId/view"),children:Object(a.jsx)(ve,{previewMode:s,setPreviewMode:i,mode:"view"})}),Object(a.jsx)(B.b,{path:"".concat(l.path,"/:templateId/edit"),children:Object(a.jsx)(ve,{previewMode:s,setPreviewMode:i,mode:"edit"})})]}),s&&Object(a.jsx)(re,{})]})},we=Object(r.b)((function(e){return{}}),{})(ge),Ee=function(e){var t=e.closeToast,c=e.action;return Object(a.jsxs)("div",{children:["New updates available",Object(a.jsx)("button",{onClick:function(){c(),t&&t()},children:"Reload"})]})},ye=function(){var e=Object(n.useState)(!1),t=Object(Y.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)({postMessage:function(e){return e}}),l=Object(Y.a)(i,2),r=l[0],o=l[1],d=function(e){o(null===e||void 0===e?void 0:e.waiting),e&&s(!0)};return Object(n.useEffect)((function(){X({onUpdate:d})}),[]),Object(n.useEffect)((function(){var e=function(){r&&r.postMessage({type:"SKIP_WAITING"}),s(!1),window.location.reload()};return c&&Object(W.b)((function(t){var c=t.closeToast,n=t.toastProps;return Object(a.jsx)(Ee,{closeToast:c,toastProps:n,action:e})}),{position:W.b.POSITION.BOTTOM_RIGHT,autoClose:!1}),function(){W.b.dismiss()}}),[c,r]),Object(a.jsxs)(B.c,{history:T,children:[Object(a.jsx)(W.a,{}),Object(a.jsx)(K,{}),Object(a.jsxs)(B.d,{children:[Object(a.jsx)(B.b,{exact:!0,path:"/",children:Object(a.jsx)(B.a,{to:"/generate-pdf"})}),Object(a.jsx)(B.b,{exact:!0,path:"/generate-pdf",children:Object(a.jsx)(te,{component:Object(a.jsx)(de,{})})}),Object(a.jsx)(B.b,{path:"/templates",children:Object(a.jsx)(te,{component:Object(a.jsx)(we,{})})}),Object(a.jsx)(B.b,{children:Object(a.jsx)(te,{component:Object(a.jsx)(F,{error:"404",description:"The page you are looking for does not exist"})})})]})]})},Ne=Object(d.b)(I);l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(r.a,{store:I,children:Object(a.jsx)(o.a,{loading:null,persistor:Ne,children:Object(a.jsx)(G,{children:Object(a.jsx)(ye,{})})})})}),document.getElementById("root")),D()}},[[64,1,2]]]);
//# sourceMappingURL=main.9eb3b920.chunk.js.map