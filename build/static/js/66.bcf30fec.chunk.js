(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[66],{671:function(e,t,a){"use strict";t.a=a.p+"static/media/add.b7874215.svg"},855:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var c=a(673),s=a(664),n=a(128),r=a(665),o=a.n(r),l=a(1),i=a.n(l),u=a(671),d=a(670),j=a(663),p=a(100),b=a(667),m=a(24),h=a(18);function f(){var e=Object(m.i)().id,t=Object(m.g)(),a=i.a.useContext(p.b),r=a.user,l=a.setLoad,f=i.a.useState(""),x=Object(n.a)(f,2),O=x[0],v=x[1],_=i.a.useState(""),y=Object(n.a)(_,2),g=y[0],k=y[1],F=i.a.useState(!1),C=Object(n.a)(F,2),w=C[0],N=C[1],S=i.a.useState(""),q=Object(n.a)(S,2),T=q[0],A=q[1],B=i.a.useState("None"),P=Object(n.a)(B,2),D=P[0],I=P[1],V=i.a.useState(0),G=Object(n.a)(V,2),Q=G[0],z=G[1],E=i.a.useState("percent"),J=Object(n.a)(E,2),R=J[0],L=J[1],M=i.a.useState(""),H=Object(n.a)(M,2),K=H[0],U=H[1],W=i.a.useState(0),X=Object(n.a)(W,2),Y=X[0],Z=X[1],$=i.a.useState("percent"),ee=Object(n.a)($,2),te=ee[0],ae=ee[1],ce=i.a.useState(0),se=Object(n.a)(ce,2),ne=se[0],re=se[1],oe=i.a.useState({value:0,label:0}),le=Object(n.a)(oe,2),ie=le[0],ue=le[1],de=i.a.useState(1),je=Object(n.a)(de,2),pe=je[0],be=je[1],me=i.a.useState([]),he=Object(n.a)(me,2),fe=he[0],xe=he[1],Oe=i.a.useState(""),ve=Object(n.a)(Oe,2),_e=ve[0],ye=ve[1],ge=i.a.useState([]),ke=Object(n.a)(ge,2),Fe=ke[0],Ce=ke[1],we=i.a.useState([]),Ne=Object(n.a)(we,2),Se=Ne[0],qe=Ne[1],Te=i.a.useState([]),Ae=Object(n.a)(Te,2),Be=Ae[0],Pe=Ae[1],De=0,Ie=0,Ve=0,Ge=0,Qe=i.a.useState(0),ze=Object(n.a)(Qe,2),Ee=ze[0],Je=ze[1],Re=i.a.useState("cash"),Le=Object(n.a)(Re,2),Me=Le[0],He=Le[1],Ke=i.a.useState(0),Ue=Object(n.a)(Ke,2),We=Ue[0],Xe=Ue[1],Ye=i.a.useState(0),Ze=Object(n.a)(Ye,2),$e=Ze[0],et=Ze[1],tt=i.a.useState(0),at=Object(n.a)(tt,2),ct=at[0],st=at[1],nt=i.a.useState(""),rt=Object(n.a)(nt,2),ot=rt[0],lt=rt[1],it=0,ut=0,dt=0,jt=0,pt=0,bt=0,mt=0;i.a.useEffect((function(){function t(){return(t=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j.c+"clientlist",{method:"GET",headers:{Authorization:null===r||void 0===r?void 0:r.token}});case 2:if(!0!==(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:a=e.sent,l(!1),200===a.status?Ce(null===a||void 0===a?void 0:a.client_list.map((function(e){return{value:e.id,label:e.name,amount:e.due_amount}}))):b.b.error(a.message);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch(j.c+"getGSTList",{method:"GET",headers:{Authorization:null===r||void 0===r?void 0:r.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(!1),xe(null===a||void 0===a?void 0:a.gst.map((function(e){return{value:e,label:e}})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j.c+"fetchQuotationProducts",{method:"GET",headers:{Authorization:null===r||void 0===r?void 0:r.token}});case 2:if(!0!==(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:a=e.sent,l(!1),200===a.status?Pe(a.product_list.map((function(e){return"product"===e.type?{value:e.id,label:e.name,type:e.type,unit:e.unit,hsbn:e.hsbn,serial_no:e.serial_no,price:parseFloat(parseFloat(e.price)/parseFloat(e.sales_unit)).toFixed(2)}:{value:e.id,label:e.name,type:e.type,unit:e.unit,hsbn:e.hsbn,serial_no:e.serial_no,price:e.price}}))):b.b.error(a.message);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(s.a)(o.a.mark((function t(){var a,c,s,n,i,u,d,p,m,h,f,x,O,_,y;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(j.c+"getQuotationById/"+e,{headers:{Authorization:r.token}});case 2:if(!0!==(a=t.sent).ok){t.next=9;break}return t.next=6,a.json();case 6:if(c=t.sent,l(!1),200===c.status){for(s=c.quotation_header,n="",i=0,parseFloat(s.bill_discount_percentage)>0?(n="percent",i=s.bill_discount_percentage):parseFloat(s.bill_discount_amount)>0&&(n="amount",i=s.bill_discount_amount),u=c.quotation_items,v(s.quotation_number),k(s.quotation_date),A({value:s.customer_id,label:s.customer_name}),I(s.discount_type),d=[],p=0;p<u.length;p++)m=u[p],h="",f=0,m.discount_percent&&parseFloat(m.discount_percent)>0?(h="percent",f=m.discount_percent):m.discount_amount&&(h="amount",f=m.discount_amount),x={},"true"===s.default_gst?(N(!0),x={item:{value:m.product_id,label:m.product_name,type:m.product_type,price:m.price,unit:m.product_unit,hsbn:m.product_hsbn,serial_no:m.product_serial_no},item_id:m.id,price:m.price,qty:m.qty,discount_type:h,discountValue:f,gst:{label:m.tax_percent,value:m.tax_percent},total:m.total,amount_item:m.total,amount_after_tax:m.amount_after_tax,amount_before_discount:m.amount_before_discount,tax_amount:m.tax_amount,discount_amount:m.discount_amount,amount_after_discount:m.amount_after_discount}):(N(!1),x={item:{value:m.product_id,label:m.product_name,type:m.product_type,price:m.price,unit:m.product_unit,hsbn:m.product_hsbn,serial_no:m.product_serial_no},item_id:m.id,price:m.price,qty:m.qty,discount_type:h,discountValue:f,total:m.total,gst:{value:0,label:0},amount_item:m.total,amount_after_tax:m.amount_after_tax,amount_before_discount:m.amount_before_discount,tax_amount:m.tax_amount,discount_amount:m.discount_amount,amount_after_discount:m.amount_after_discount}),d.push(x);qe(d),O=0,_=0,y=0,d.map((function(e){O=parseFloat(O)+parseFloat(e.total),_=parseFloat(_)+parseFloat(e.discount_amount),y=parseFloat(y)+parseFloat(e.tax_amount)})),Xe(O),et(_),st(y),Z(i),ae(n),Je(s.amount_paid),He(s.payment_type),ye(s.remarks)}else b.b.error(c.message);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}l(!0),function(){t.apply(this,arguments)}(),function(){a.apply(this,arguments)}(),function(){c.apply(this,arguments)}(),function(){n.apply(this,arguments)}()}),[]);ne>0&&pe>0&&(dt=parseFloat(ne)*parseFloat(pe),ut=0,w&&ie&&(ut=parseFloat(dt)/100*parseFloat(ie.value)),it=bt=dt+ut,"Item"!==D&&"Both"!==D||(jt=bt,"percent"===R&&(mt=parseFloat(jt)/100*parseFloat(Q),it=pt=jt-mt),"amount"===R&&(mt=parseFloat(Q),it=pt=jt-mt)));We>0&&("Bill"===D||"Both"===D?("percent"===te&&(Ve=We/100*parseFloat(Y),We,Ge=We-Ve),"amount"===te&&(Ve=parseFloat(Y),We,Ge=We-Ve),Ie=(De=Ge)-parseFloat(Ee)):Ie=(De=We)-parseFloat(Ee));return Object(h.jsxs)("div",{className:"container full-size-create-page-main-section",children:[Object(h.jsx)(b.a,{}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"p-sm-5 px-md-3 create-form-field create-purchase-page",children:[Object(h.jsxs)("div",{class:"py-4 px-2 form-row create-purchase-header",children:[Object(h.jsxs)("div",{class:"form-group col-md-3",children:[Object(h.jsxs)("label",{for:"invoice-number",children:["Quotation No.",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)("input",{readOnly:!0,value:O,type:"text",class:"form-control",id:"invoice-number",required:!0})]}),Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsxs)("label",{for:"date",children:["Quotation Date",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)("input",{value:g,onChange:function(e){return k(e.target.value)},type:"date",class:"form-control",id:"date"})]}),Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsxs)("label",{for:"input-party",children:["Customer",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)(d.a,{options:Fe,value:T,onChange:A})]}),Object(h.jsxs)("div",{class:"form-group my-md-3 col-md-4",children:[Object(h.jsx)("div",{className:"text-center mb-2 font-weight-bold",children:Object(h.jsxs)("label",{for:"input-party",children:["Discount Type",Object(h.jsx)("span",{className:"required-label",children:"*"})]})}),Object(h.jsxs)("div",{className:"row px-3",children:[Object(h.jsxs)("div",{class:"form-check col-sm-3",children:[Object(h.jsx)("input",{checked:"None"===D&&!0,onClick:function(){return I("None")},class:"form-check-input",name:"discount",type:"radio",value:"",id:"defaultCheck1"}),Object(h.jsx)("label",{class:"form-check-label",for:"defaultCheck1",children:"None"})]}),Object(h.jsxs)("div",{class:"form-check col-sm-3",children:[Object(h.jsx)("input",{checked:"Item"===D&&!0,onClick:function(){return I("Item")},class:"form-check-input",name:"discount",type:"radio",value:"",id:"defaultCheck2"}),Object(h.jsx)("label",{class:"form-check-label",for:"defaultCheck2",children:"Item"})]}),Object(h.jsxs)("div",{class:"form-check col-sm-3",children:[Object(h.jsx)("input",{checked:"Bill"===D&&!0,onClick:function(){return I("Bill")},class:"form-check-input",name:"discount",type:"radio",value:"",id:"defaultCheck3"}),Object(h.jsx)("label",{class:"form-check-label",for:"defaultCheck3",children:"Bill"})]}),Object(h.jsxs)("div",{class:"form-check col-sm-3",children:[Object(h.jsx)("input",{checked:"Both"===D&&!0,onClick:function(){return I("Both")},class:"form-check-input",name:"discount",type:"radio",value:"",id:"defaultCheck3"}),Object(h.jsx)("label",{class:"form-check-label",for:"defaultCheck3",children:"Both"})]})]})]}),Object(h.jsxs)("div",{class:"form-group col-md-2",children:[Object(h.jsx)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:"GST:"}),Object(h.jsx)("div",{class:"d-flex b-0 col-sm-1",children:Object(h.jsx)("input",{readOnly:!0,checked:w,type:"checkbox",id:"inputPassword"})})]})]}),Object(h.jsxs)("div",{class:"my-4 form-row",children:[Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsxs)("label",{for:"invoice-number",children:["Item",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)(d.a,{options:Be,value:K,onChange:U})]}),Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsxs)("label",{for:"invoice-number",children:["Price",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)("input",{value:ne,onChange:function(e){return re(e.target.value)},type:"text",class:"form-control",id:""})]}),Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsxs)("label",{for:"invoice-number",children:["Quantity",K?" (".concat(K.unit,")"):null,Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)("input",{value:pe,onChange:function(e){return be(e.target.value)},type:"text",class:"form-control",id:""})]}),w&&Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsxs)("label",{for:"invoice-number",children:["GST:",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)(d.a,{options:fe,value:ie,onChange:ue})]}),"Item"===D&&Object(h.jsxs)("div",{className:"form-group col-md-4",children:[Object(h.jsx)("label",{htmlFor:"",children:"Discount"}),Object(h.jsxs)("div",{className:"m-0 p-0 col-12 row",children:[Object(h.jsx)("div",{className:"px-0 col-5",children:Object(h.jsx)("input",{value:Q,onChange:function(e){return z(e.target.value)},class:"form-control",type:"text",name:"",id:""})}),Object(h.jsx)("div",{className:"p-0 col-7",children:Object(h.jsxs)("select",{value:R,onChange:function(e){return L(e.target.value)},class:"form-control",required:!0,children:[Object(h.jsx)("option",{value:"",children:"Select Type"}),Object(h.jsx)("option",{value:"percent",children:"Percent"}),Object(h.jsx)("option",{value:"amount",children:"Amount"})]})})]})]}),"Both"===D&&Object(h.jsxs)("div",{className:"form-group col-md-4",children:[Object(h.jsx)("label",{htmlFor:"",children:"Discount"}),Object(h.jsxs)("div",{className:"m-0 p-0 col-12 row",children:[Object(h.jsx)("div",{className:"px-0 col-5",children:Object(h.jsx)("input",{value:Q,onChange:function(e){return z(e.target.value)},class:"form-control",type:"text",name:"",id:""})}),Object(h.jsx)("div",{className:"p-0 col-7",children:Object(h.jsxs)("select",{value:R,onChange:function(e){return L(e.target.value)},class:"form-control",required:!0,children:[Object(h.jsx)("option",{value:"",children:"Select Type"}),Object(h.jsx)("option",{value:"percent",children:"Percent"}),Object(h.jsx)("option",{value:"amount",children:"Amount"})]})})]})]}),Object(h.jsxs)("div",{class:"form-group col-md-4 row",children:[Object(h.jsxs)("div",{class:"form-group col-9",children:[Object(h.jsxs)("label",{for:"invoice-number",children:["Total",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)("input",{value:it,readOnly:!0,type:"text",class:"form-control",id:""})]}),Object(h.jsx)("div",{class:"form-group col-3 p-0 purchase-create-mid-plus-img",children:Object(h.jsx)("img",{className:"img-fluid",onClick:function(){return function(){if(O&&K&&T&&ne&&pe){var e={item:K,price:ne,qty:pe,gst:ie,discount_type:R,discountValue:Q,total:it,amount_item:dt,amount_before_discount:jt,discount_amount:mt,tax_amount:ut,amount_after_discount:pt};if(ot){lt("");var t=[];Se.map((function(a,c){c===parseInt(ot)-1?t.push(e):t.push(a)}));var a=0,s=0,n=0;t.map((function(e){a=parseFloat(a)+parseFloat(e.total),s=parseFloat(s)+parseFloat(e.discount_amount),n=parseFloat(n)+parseFloat(e.tax_amount)})),Xe(a),et(s),st(n),qe(t)}else{var r=[].concat(Object(c.a)(Se),[e]),o=0,l=0;r.map((function(e){o=parseFloat(o)+parseFloat(e.total),mt=parseFloat(mt)+parseFloat(e.discount_amount),l=parseFloat(l)+parseFloat(e.tax_amount)})),et(mt),st(l),Xe(o),Xe(parseFloat(We)+parseFloat(it)),qe(r)}U(""),re(0),L(""),z(0),be(1),ue({value:0,label:0}),it=0,dt=0,jt=0,pt=0,mt=0,ut=0,bt=0}else b.b.error("Fill all fields having *")}()},style:{cursor:"pointer"},src:u.a,alt:""})})]})]}),Se.length>0&&Object(h.jsx)("div",{className:"my-table-responsive",children:Object(h.jsxs)("table",{class:"table mt-4",children:[Object(h.jsx)("thead",{class:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Item"}),Object(h.jsx)("th",{scope:"col",children:"Price"}),Object(h.jsx)("th",{scope:"col",children:"Quantity"}),Object(h.jsx)("th",{scope:"col",children:"GST"}),Object(h.jsx)("th",{scope:"col",children:"Discount"}),Object(h.jsx)("th",{scope:"col",children:"Total"}),Object(h.jsx)("th",{children:"Actions"})]})}),Object(h.jsx)("tbody",{className:"table-borderless",children:Se.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.item.label}),Object(h.jsx)("td",{children:e.price}),Object(h.jsx)("td",{children:e.qty}),Object(h.jsxs)("td",{children:[e.gst.value,"%"]}),Object(h.jsxs)("td",{children:[e.discountValue," ",e.discount_type]}),Object(h.jsx)("td",{children:e.total}),Object(h.jsxs)("td",{children:[Object(h.jsx)("i",{style:{cursor:"pointer"},onClick:function(){return function(e,t){lt(t),U(e.item),re(e.price),be(e.qty),ue(e.gst),L(e.discount_type),z(e.discountValue),it=e.total}(e,t+1)},class:"fa fa-pencil","aria-hidden":"true"}),Object(h.jsx)("i",{onClick:function(){return function(e){var t=[];Se.map((function(a,c){c!==e&&t.push(a)}));var a=0,c=0,s=0;t.map((function(e){a=parseFloat(a)+parseFloat(e.total),c=parseFloat(c)+parseFloat(e.discount_amount),s=parseFloat(s)+parseFloat(e.tax_amount)})),et(c),st(s),Xe(a),qe(t)}(t)},style:{cursor:"pointer"},class:"fa fa-trash","aria-hidden":"true"})]})]})}))})]})}),Object(h.jsxs)("div",{className:"row mt-5 justify-content-between purchase-create-footer",children:[Object(h.jsxs)("div",{class:"form-group col-md-5",children:[Object(h.jsx)("label",{for:"exampleFormControlTextarea1",children:"Remarks"}),Object(h.jsx)("textarea",{value:_e,onChange:function(e){return ye(e.target.value)},class:"form-control",id:"exampleFormControlTextarea1",rows:"5"})]}),Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Total Value"}),Object(h.jsx)("div",{class:"col-md-8",children:Object(h.jsx)("input",{type:"text",value:We,class:"form-control",id:""})})]}),"Bill"===D&&Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Discount"}),Object(h.jsxs)("div",{class:"pr-0 col-md-8 row",children:[Object(h.jsx)("div",{className:"pr-0 col-5",children:Object(h.jsx)("input",{class:"form-control",value:Y,onChange:function(e){return Z(e.target.value)},type:"text",name:"",id:""})}),Object(h.jsx)("div",{className:"px-0 col-7",children:Object(h.jsxs)("select",{value:te,onChange:function(e){return ae(e.target.value)},class:"form-control",required:!0,children:[Object(h.jsx)("option",{value:"",children:"Select Type"}),Object(h.jsx)("option",{value:"percent",children:"Percent"}),Object(h.jsx)("option",{value:"amount",children:"Amount"})]})})]})]}),"Both"===D&&Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Discount"}),Object(h.jsxs)("div",{class:"pr-0 col-md-8 row",children:[Object(h.jsx)("div",{className:"pr-0 col-5",children:Object(h.jsx)("input",{class:"form-control",type:"text",value:Y,onChange:function(e){return Z(e.target.value)}})}),Object(h.jsx)("div",{className:"px-0 col-7",children:Object(h.jsxs)("select",{value:te,onChange:function(e){return ae(e.target.value)},class:"form-control",required:!0,children:[Object(h.jsx)("option",{value:"",children:"Select Type"}),Object(h.jsx)("option",{value:"percent",children:"Percent"}),Object(h.jsx)("option",{value:"amount",children:"Amount"})]})})]})]}),Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Final Amount"}),Object(h.jsx)("div",{class:"col-md-8",children:Object(h.jsx)("input",{readOnly:!0,value:De,type:"text",class:"form-control",id:""})})]}),Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Paid Amount"}),Object(h.jsx)("div",{class:"col-md-8",children:Object(h.jsx)("input",{value:Ee,onChange:function(e){return Je(e.target.value)},type:"text",class:"form-control",id:""})})]}),Ee>0&&Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Payment Method"}),Object(h.jsx)("div",{class:"col-md-8",children:Object(h.jsxs)("select",{value:Me,onChange:function(e){return He(e.target.value)},id:"input-party",class:"form-control",required:!0,children:[Object(h.jsx)("option",{value:"",children:"Select payment mode"}),Object(h.jsx)("option",{value:"cash",children:"Cash"}),Object(h.jsx)("option",{value:"bank",children:"Bank"})]})})]}),Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Remain Amount"}),Object(h.jsx)("div",{class:"col-md-8",children:Object(h.jsx)("input",{type:"text",value:Ie,readOnly:!0,class:"form-control",id:""})})]})]})]})]}),Object(h.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(h.jsxs)("button",{type:"button",onClick:function(){return window.location.reload()},class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(h.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(h.jsxs)("button",{type:"button",onClick:function(){return function(){if(O&&g&&T&&Se.length>0&&We){var a=function(){var a=Object(s.a)(o.a.mark((function a(){var c,s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(j.c+"updateQuotation/"+e,{method:"POST",headers:{Authorization:r.token},body:u});case 2:if(!0!==(c=a.sent).ok){a.next=9;break}return a.next=6,c.json();case 6:s=a.sent,l(!1),200===s.status?(b.b.success(s.message),t.push("/quotationReport")):b.b.error(s.message);case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();l(!0);var c={quotationNo:O,quotationDate:g,currentCustomer:T,discountType:D,default_gst:w},n={totalValue:We,finalAmount:De,paidAmount:Ee,remainAmount:Ie,finalDiscountValue:Y,finalDiscountCriteria:te,remarks:_e,paymentMethod:Me,discountAmount:$e,taxableAmount:ct},i=[];i.push(c),i.push(n);var u=new FormData;u.append("final_array",JSON.stringify(i)),u.append("allItems",JSON.stringify(Se)),a()}else b.b.error("Please fill the data with *")}()},class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(h.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})]})}}}]);
//# sourceMappingURL=66.bcf30fec.chunk.js.map