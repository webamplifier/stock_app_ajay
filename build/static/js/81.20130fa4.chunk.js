(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[81],{824:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return j}));var a=s(664),n=s(128),r=s(665),c=s.n(r),o=s(1),l=s.n(o),i=s(667),u=s(100),d=s(663),b=s(24),m=s(18);function j(){var e=Object(b.i)().id,t=l.a.useContext(u.b),s=t.user,r=t.setLoad,o=l.a.useState(""),j=Object(n.a)(o,2),p=j[0],f=j[1],x=l.a.useState(""),h=Object(n.a)(x,2),O=h[0],v=h[1],g=l.a.useState(""),w=Object(n.a)(g,2),y=w[0],k=w[1],C=l.a.useState(""),P=Object(n.a)(C,2),S=P[0],N=P[1],T=l.a.useState(0),q=Object(n.a)(T,2),A=q[0],_=q[1],D=l.a.useState(""),E=Object(n.a)(D,2),F=E[0],z=E[1];return l.a.useEffect((function(){function t(){return(t=Object(a.a)(c.a.mark((function t(){var a,n,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d.c+"clientById/"+e,{method:"GET",headers:{Authorization:s.token}});case 2:if(!0!==(a=t.sent).ok){t.next=15;break}return t.next=6,a.json();case 6:n=t.sent,r(!1),o=n.client_detail,f(o.name),v(o.email),k(o.mobile),N(o.address),z(o.gst_number),_(o.due_amount);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r(!0),function(){t.apply(this,arguments)}()}),[e]),Object(m.jsxs)("div",{className:"container create-page-main-section",children:[Object(m.jsx)(i.a,{}),Object(m.jsxs)("form",{onSubmit:function(t){return function(t){function n(){return(n=Object(a.a)(c.a.mark((function t(){var a,n,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new FormData).append("name",p),a.append("email",O),a.append("mobile",y),a.append("address",S),a.append("gst",F),a.append("due_amount",A),t.next=9,fetch(d.c+"updateclient/"+e,{method:"POST",headers:{Authorization:null===s||void 0===s?void 0:s.token},body:a});case 9:if(!0!==(n=t.sent).ok){t.next=20;break}return t.next=13,n.json();case 13:if(o=t.sent,r(!1),200!==o.status){t.next=19;break}return t.abrupt("return",window.location=window.location.origin+"/#/customerList");case 19:i.b.error(o.message);case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r(!0),t.preventDefault(),function(){n.apply(this,arguments)}()}(t)},children:[Object(m.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Name:",Object(m.jsx)("span",{className:"required-label",children:"*"})]}),Object(m.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(m.jsx)("input",{required:!0,value:p,onChange:function(e){return f(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:"Email:"}),Object(m.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(m.jsx)("input",{value:O,onChange:function(e){return v(e.target.value)},type:"email",class:"form-control",id:"inputPassword"})})]}),Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Mobile No:",Object(m.jsx)("span",{className:"requires-label",children:"*"})]}),Object(m.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(m.jsx)("input",{value:y,onChange:function(e){return k(e.target.value)},type:"text",class:"form-control",id:"inputPassword",required:!0})})]}),Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:"GST:"}),Object(m.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(m.jsx)("input",{value:F,onChange:function(e){return z(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:"Due Amount:"}),Object(m.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(m.jsx)("input",{value:A,onChange:function(e){return _(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{class:"col-sm-2 col-form-label",for:"exampleFormControlTextarea1",children:"Address:"}),Object(m.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(m.jsx)("textarea",{value:S,onChange:function(e){return N(e.target.value)},class:"form-control",id:"exampleFormControlTextarea1",rows:"3"})})]})]}),Object(m.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(m.jsxs)("button",{onClick:function(){return window.location.reload()},type:"button",class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(m.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(m.jsxs)("button",{type:"submit",class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(m.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})]})}}}]);
//# sourceMappingURL=81.20130fa4.chunk.js.map