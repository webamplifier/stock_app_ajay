(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[90],{831:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return h}));var n=c(664),r=c(128),s=c(665),a=c.n(s),i=c(1),o=c.n(i),l=c(670),d=c(663),j=c(667),u=c(100),b=c(18);function h(){var e=o.a.useContext(u.b),t=e.user,c=e.setLoad,s=o.a.useState([]),i=Object(r.a)(s,2),h=i[0],m=i[1],p=o.a.useState(new Date),x=Object(r.a)(p,2),O=x[0],f=x[1],v=o.a.useState(new Date),y=Object(r.a)(v,2),g=y[0],w=y[1],_=o.a.useState(""),k=Object(r.a)(_,2),F=k[0],S=k[1],q=o.a.useState(0),C=Object(r.a)(q,2),D=C[0],N=C[1],P=o.a.useState(0),T=Object(r.a)(P,2),A=T[0],E=T[1],R=o.a.useState([]),J=Object(r.a)(R,2),z=J[0],G=J[1],I=o.a.useState([]),K=Object(r.a)(I,2),L=K[0],H=K[1],Q=0,U=0;return o.a.useEffect((function(){function e(){return(e=Object(n.a)(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.c+"clientlist",{method:"GET",headers:{Authorization:null===t||void 0===t?void 0:t.token}});case 2:if(!0!==(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:r=e.sent,c(!1),200===r.status?H(null===r||void 0===r?void 0:r.client_list.map((function(e){return{value:e.id,label:e.name,normal:e.normal,star:e.star,vinyl:e.vinyl,one_way:e.one_way,backlit:e.backlit,premium:e.premium,card12_18:e.card_12_18,sticker12_18:e.sticker_12_18,due_amount:e.due_amount}}))):j.b.error(r.message);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(!0),function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)("section",{children:[Object(b.jsx)(j.a,{}),Object(b.jsxs)("div",{class:"d-flex",children:[Object(b.jsx)("form",{class:"col-md-10 m-0 p-0",children:Object(b.jsxs)("div",{class:"form-row m-0 p-0 create-purchase-header",children:[Object(b.jsxs)("div",{class:"form-group col-md-3",children:[Object(b.jsxs)("label",{for:"date",children:["From",Object(b.jsx)("span",{className:"required-label",children:"*"})]}),Object(b.jsx)("input",{value:O,onChange:function(e){return f(e.target.value)},type:"date",class:"form-control",id:"date",required:!0})]}),Object(b.jsxs)("div",{class:"form-group col-md-3",children:[Object(b.jsxs)("label",{for:"date",children:["To",Object(b.jsx)("span",{className:"required-label",children:"*"})]}),Object(b.jsx)("input",{value:g,onChange:function(e){return w(e.target.value)},type:"date",class:"form-control",id:"date",required:!0})]}),Object(b.jsxs)("div",{class:"form-group col-md-3",children:[Object(b.jsxs)("label",{for:"input-customer",children:["Customer",Object(b.jsx)("span",{className:"required-label",children:"*"})]}),Object(b.jsx)(l.a,{options:L,value:F,onChange:S})]}),Object(b.jsx)("div",{class:"form-group col-md-2",children:Object(b.jsx)("button",{type:"button",class:"font-weight-bold my-4 py-2 px-4 btn btn-success",onClick:function(){return function(){if(g&&O&&F){var e=function(){var e=Object(n.a)(a.a.mark((function e(){var n,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.c+"detailCustomerReport",{method:"POST",headers:{Authorization:null===t||void 0===t?void 0:t.token},body:r});case 2:if(!0!==(n=e.sent).ok){e.next=11;break}return e.next=6,n.json();case 6:s=e.sent,c(!1),200===s.status?(N(parseFloat(s.total_amount).toFixed(2)),m(s.customer_detail),E(s.due_amount),console.log(s.payment_list),G(s.payment_list)):j.b.error(s.message),e.next=12;break;case 11:j.b.error("Oops something went wrong!");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c(!0);var r=new FormData;r.append("to",g),r.append("from",O),r.append("customer",JSON.stringify(F)),e().catch((function(e){return j.b.error("Internal server error!. Please try again later")}))}else j.b.error("Please fill the to and from date")}()},children:"Submit"})})]})}),Object(b.jsx)("div",{class:"col-md-2",children:Object(b.jsx)("button",{onClick:function(){return function(){var e=document.getElementById("export-table").innerHTML,t=window.open("","Receipt");t.document.write("<html><head><title>Receipt</title>"),t.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">'),t.document.write("</head><body>"),t.document.write(e),t.document.write("</body></html>"),t.document.close(),t.onload=function(){t.focus(),t.print()}}()},class:"font-weight-bold my-4 px-3 py-2 btn btn-success",children:"Export as PDF"})})]}),Object(b.jsxs)("div",{id:"export-table",children:[Object(b.jsx)("h6",{className:"text-center font-weight-bold",children:null===F||void 0===F?void 0:F.label}),Object(b.jsxs)("table",{class:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"#"}),Object(b.jsx)("th",{scope:"col",children:"Date"}),Object(b.jsx)("th",{scope:"col",children:"Item"}),Object(b.jsx)("th",{scope:"col",children:"Width"}),Object(b.jsx)("th",{scope:"col",children:"Height"}),Object(b.jsx)("th",{scope:"col",children:"Sq.Ft"}),Object(b.jsx)("th",{scope:"col",children:"Price"}),Object(b.jsx)("th",{scope:"col",children:"Qty"}),Object(b.jsx)("th",{scope:"col",children:"Total"})]})}),Object(b.jsx)("tbody",{children:h.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:++Q}),Object(b.jsx)("td",{children:Object(d.a)(e.sale_date.split(" ")[0])}),Object(b.jsx)("td",{children:e.sale_items.map((function(e){return Object(b.jsxs)("p",{children:[e.item_name," (",e.material_name,")"]})}))}),Object(b.jsx)("td",{children:e.sale_items.map((function(e){return Object(b.jsx)("p",{children:e.width})}))}),Object(b.jsx)("td",{children:e.sale_items.map((function(e){return Object(b.jsx)("p",{children:e.height})}))}),Object(b.jsx)("td",{children:e.sale_items.map((function(e){return Object(b.jsx)("p",{children:e.sqFt})}))}),Object(b.jsx)("td",{children:e.sale_items.map((function(e){return Object(b.jsx)("p",{children:e.sale_price})}))}),Object(b.jsx)("td",{children:e.sale_items.map((function(e){return Object(b.jsx)("p",{children:e.qty})}))}),Object(b.jsx)("td",{children:e.sale_items.map((function(e){return Object(b.jsx)("p",{children:parseFloat(e.total).toFixed(2)})}))})]})}))})]}),z.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h6",{className:"text-center font-weight-bold",children:"Payment Recieved"}),Object(b.jsxs)("table",{class:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"#"}),Object(b.jsx)("th",{scope:"col",children:"Reciept Number"}),Object(b.jsx)("th",{scope:"col",children:"Date"}),Object(b.jsx)("th",{scope:"col",children:"Amount"})]})}),Object(b.jsx)("tbody",{children:z.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:++U}),Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:Object(d.a)(e.date.split(" ")[0])}),Object(b.jsx)("td",{children:e.amount})]})}))})]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("h6",{className:"float-right mr-3",children:["Total Amount :- ",parseFloat(D).toFixed(2)]}),Object(b.jsxs)("h6",{className:"float-right mr-3",children:["Due Amount :- ",parseFloat(A).toFixed(2)]})]})]})}}}]);
//# sourceMappingURL=90.534d86e0.chunk.js.map