(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[86],{818:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return b}));var a=s(664),c=s(128),r=s(665),n=s.n(r),l=s(1),o=s.n(l),i=s(667),u=s(100),d=s(663),j=s(18);function b(){var e=o.a.useContext(u.b),t=e.user,s=e.setLoad,r=o.a.useState(""),l=Object(c.a)(r,2),b=l[0],m=l[1],p=o.a.useState(""),f=Object(c.a)(p,2),x=f[0],h=f[1],O=o.a.useState(""),v=Object(c.a)(O,2),g=v[0],w=v[1],y=o.a.useState(""),C=Object(c.a)(y,2),P=C[0],S=C[1],k=o.a.useState(""),N=Object(c.a)(k,2),q=N[0],T=N[1],A=o.a.useState(0),D=Object(c.a)(A,2),F=D[0],J=D[1];return Object(j.jsxs)("div",{className:"container create-page-main-section",children:[Object(j.jsx)(i.a,{}),Object(j.jsxs)("form",{onSubmit:function(e){return function(e){function c(){return(c=Object(a.a)(n.a.mark((function e(){var a,c,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("name",b),a.append("email",x),a.append("mobile",g),a.append("address",P),a.append("gst",q),a.append("due_amount",F),e.next=9,fetch(d.c+"createparty",{method:"POST",headers:{Authorization:null===t||void 0===t?void 0:t.token},body:a});case 9:if(!0!==(c=e.sent).ok){e.next=16;break}return e.next=13,c.json();case 13:r=e.sent,s(!1),200===r.status?(i.b.success(r.message),m(""),h(""),w(""),S(""),T(""),J(0)):i.b.error(r.message);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s(!0),e.preventDefault(),function(){c.apply(this,arguments)}()}(e)},children:[Object(j.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Name:",Object(j.jsx)("span",{className:"required-label",children:"*"})]}),Object(j.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(j.jsx)("input",{required:!0,value:b,onChange:function(e){return m(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsx)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:"Email:"}),Object(j.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(j.jsx)("input",{value:x,onChange:function(e){return h(e.target.value)},type:"email",class:"form-control",id:"inputPassword"})})]}),Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Mobile No:",Object(j.jsx)("span",{className:"required-label",children:"*"})]}),Object(j.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(j.jsx)("input",{value:g,onChange:function(e){return w(e.target.value)},type:"text",class:"form-control",id:"inputPassword",required:!0})})]}),Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsx)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:"GST:"}),Object(j.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(j.jsx)("input",{value:q,onChange:function(e){return T(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsx)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:"Due Amount:"}),Object(j.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(j.jsx)("input",{value:F,onChange:function(e){return J(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsx)("label",{class:"col-sm-2 col-form-label",for:"exampleFormControlTextarea1",children:"Address:"}),Object(j.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(j.jsx)("textarea",{value:P,onChange:function(e){return S(e.target.value)},class:"form-control",id:"exampleFormControlTextarea1",rows:"3"})})]})]}),Object(j.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(j.jsxs)("button",{onClick:function(){return window.location.reload()},type:"submit",class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(j.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(j.jsxs)("button",{type:"submit",class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(j.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})]})}}}]);
//# sourceMappingURL=86.e6cc6eb7.chunk.js.map