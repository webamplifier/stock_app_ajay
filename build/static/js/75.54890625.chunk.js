(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[75],{860:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var s=n(664),a=n(128),c=n(665),r=n.n(c),o=n(1),i=n.n(o),l=n(667),u=n(100),d=n(663),b=n(24),j=n(18);function p(){var e=Object(b.i)().id,t=i.a.useContext(u.b),n=t.user,c=t.setLoad,o=i.a.useState(""),p=Object(a.a)(o,2),f=p[0],m=p[1],x=i.a.useState(""),h=Object(a.a)(x,2),O=h[0],v=h[1],w=i.a.useState(""),g=Object(a.a)(w,2),y=g[0],k=g[1],P=i.a.useState(""),C=Object(a.a)(P,2),S=C[0],N=C[1],q=i.a.useState(0),A=Object(a.a)(q,2),B=A[0],T=A[1];return i.a.useEffect((function(){function t(){return(t=Object(s.a)(r.a.mark((function t(){var s,a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d.c+"bankById/"+e,{method:"GET",headers:{Authorization:n.token}});case 2:if(!0!==(s=t.sent).ok){t.next=14;break}return t.next=6,s.json();case 6:a=t.sent,c(!1),o=a.bank_detail,m(o.name),N(o.accno),k(o.branch),v(o.ifsc),T(o.total_amount);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c(!0),function(){t.apply(this,arguments)}()}),[e]),Object(j.jsxs)("div",{className:"container create-page-main-section",children:[Object(j.jsx)(l.a,{}),Object(j.jsxs)("form",{onSubmit:function(t){return function(t){function a(){return(a=Object(s.a)(r.a.mark((function t(){var s,a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(s=new FormData).append("name",f),s.append("accno",S),s.append("ifsc",O),s.append("branch",y),s.append("total_amount",B),t.next=8,fetch(d.c+"updatebank/"+e,{method:"POST",headers:{Authorization:null===n||void 0===n?void 0:n.token},body:s});case 8:if(!0!==(a=t.sent).ok){t.next=19;break}return t.next=12,a.json();case 12:if(o=t.sent,c(!1),200!==o.status){t.next=18;break}return t.abrupt("return",window.location=window.location.origin+"/#/bankList");case 18:l.b.error(o.message);case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c(!0),t.preventDefault(),function(){a.apply(this,arguments)}()}(t)},children:[Object(j.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Bank No",Object(j.jsx)("span",{className:"required-label",children:"*"})]}),Object(j.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(j.jsx)("input",{required:!0,value:S,onChange:function(e){return N(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Name",Object(j.jsx)("span",{className:"required-label",children:"*"})]}),Object(j.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(j.jsx)("input",{required:!0,value:f,onChange:function(e){return m(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsx)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:"IFSC"}),Object(j.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(j.jsx)("input",{value:O,onChange:function(e){return v(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsx)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:"Branch"}),Object(j.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(j.jsx)("input",{value:y,onChange:function(e){return k(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsx)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:"Total Amount"}),Object(j.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(j.jsx)("input",{value:B,onChange:function(e){return T(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]})]}),Object(j.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(j.jsxs)("button",{onClick:function(){return window.location.reload()},type:"submit",class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(j.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(j.jsxs)("button",{type:"submit",class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(j.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})]})}}}]);
//# sourceMappingURL=75.54890625.chunk.js.map