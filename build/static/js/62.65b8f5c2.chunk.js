(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[62],{671:function(e,t,a){"use strict";t.a=a.p+"static/media/add.b7874215.svg"},849:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var c=a(673),s=a(664),r=a(128),n=a(665),o=a.n(n),l=a(1),i=a.n(l),u=a(671),d=a(670),j=a(663),p=a(100),b=a(667),h=a(24),m=a(18);function f(){var e=Object(h.i)().id,t=Object(h.g)(),a=i.a.useContext(p.b),n=a.user,l=a.setLoad,f=i.a.useState(""),x=Object(r.a)(f,2),O=x[0],v=x[1],_=i.a.useState(""),y=Object(r.a)(_,2),g=y[0],k=y[1],w=i.a.useState(""),F=Object(r.a)(w,2),S=F[0],N=F[1],C=i.a.useState(""),A=Object(r.a)(C,2),T=A[0],P=A[1],q=i.a.useState("None"),B=Object(r.a)(q,2),D=B[0],I=B[1],z=i.a.useState(0),G=Object(r.a)(z,2),R=G[0],E=G[1],V=i.a.useState("percent"),J=Object(r.a)(V,2),M=J[0],L=J[1],Q=i.a.useState(""),W=Object(r.a)(Q,2),H=W[0],K=W[1],U=i.a.useState({label:"cash"}),X=Object(r.a)(U,2),Y=X[0],Z=X[1],$=i.a.useState(0),ee=Object(r.a)($,2),te=ee[0],ae=ee[1],ce=i.a.useState("percent"),se=Object(r.a)(ce,2),re=se[0],ne=se[1],oe=i.a.useState(0),le=Object(r.a)(oe,2),ie=le[0],ue=le[1],de=i.a.useState({value:0,label:0}),je=Object(r.a)(de,2),pe=je[0],be=je[1],he=i.a.useState(1),me=Object(r.a)(he,2),fe=me[0],xe=me[1],Oe=i.a.useState([]),ve=Object(r.a)(Oe,2),_e=ve[0],ye=ve[1],ge=i.a.useState(""),ke=Object(r.a)(ge,2),we=ke[0],Fe=ke[1],Se=i.a.useState([]),Ne=Object(r.a)(Se,2),Ce=Ne[0],Ae=Ne[1],Te=i.a.useState([]),Pe=Object(r.a)(Te,2),qe=Pe[0],Be=Pe[1],De=i.a.useState([]),Ie=Object(r.a)(De,2),ze=Ie[0],Ge=Ie[1],Re=i.a.useState([]),Ee=Object(r.a)(Re,2),Ve=Ee[0],Je=Ee[1],Me=i.a.useState([]),Le=Object(r.a)(Me,2),Qe=Le[0],We=Le[1],He=0,Ke=0,Ue=0,Xe=0,Ye=i.a.useState(0),Ze=Object(r.a)(Ye,2),$e=Ze[0],et=Ze[1],tt=i.a.useState("cash"),at=Object(r.a)(tt,2),ct=(at[0],at[1],i.a.useState(0)),st=Object(r.a)(ct,2),rt=st[0],nt=st[1],ot=i.a.useState(0),lt=Object(r.a)(ot,2),it=lt[0],ut=lt[1],dt=i.a.useState(0),jt=Object(r.a)(dt,2),pt=jt[0],bt=jt[1],ht=i.a.useState(""),mt=Object(r.a)(ht,2),ft=mt[0],xt=mt[1],Ot=0,vt=0,_t=0,yt=0,gt=0,kt=0,wt=0;function Ft(e){return St.apply(this,arguments)}function St(){return(St=Object(s.a)(o.a.mark((function e(t){var a,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch(j.c+"fetchProducts?warehouse=".concat(t),{method:"GET",headers:{Authorization:null===n||void 0===n?void 0:n.token}});case 3:if(!0!==(a=e.sent).ok){e.next=10;break}return e.next=7,a.json();case 7:c=e.sent,l(!1),200===c.status?(s=[],c.inventory_list&&c.inventory_list.map((function(e){s.push({value:e.product_id,label:e.product_name,type:"product",price:e.sale_unit_price,unit:e.product_unit,hsbn:e.product_hsbn,serial_no:e.product_serial_no})})),c.product_list&&c.product_list.map((function(e){s.push({value:e.id,label:e.name,type:e.type,unit:e.unit,price:e.price,hsbn:e.hsbn,serial_no:e.serial_no})})),We(s)):b.b.error(c.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.useEffect((function(){function t(){return(t=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch(j.c+"partylist",{method:"GET",headers:{Authorization:null===n||void 0===n?void 0:n.token}});case 3:if(!0!==(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:a=e.sent,l(!1),200===a.status?Ae(null===a||void 0===a?void 0:a.party_list.map((function(e){return{value:e.id,label:e.name}}))):b.b.error(a.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch(j.c+"getGSTList",{method:"GET",headers:{Authorization:null===n||void 0===n?void 0:n.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(!1),ye(null===a||void 0===a?void 0:a.gst.map((function(e){return{value:e,label:e}})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch(j.c+"warehouselist",{method:"GET",headers:{Authorization:null===n||void 0===n?void 0:n.token}});case 3:if(!0!==(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:a=e.sent,l(!1),200===a.status?Be(null===a||void 0===a?void 0:a.warehouse_list.map((function(e){return{value:e.id,label:e.name}}))):b.b.error(a.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(){return(r=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch(j.c+"getPaymentMethods",{method:"GET",headers:{Authorization:null===n||void 0===n?void 0:n.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(!1),Ge(null===a||void 0===a?void 0:a.payment_methods.map((function(e){return{label:e}})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(s.a)(o.a.mark((function t(){var a,c,s,r,i,u,d,p,h,m,f,x,O,_,y;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,fetch(j.c+"getPurchaseReturnById/"+e,{headers:{Authorization:n.token}});case 3:if(!0!==(a=t.sent).ok){t.next=10;break}return t.next=7,a.json();case 7:if(c=t.sent,l(!1),200===c.status){for(s=c.purchase_return_header,r="",i=0,parseFloat(s.bill_discount_percentage)>0?(r="percent",i=s.bill_discount_percentage):parseFloat(s.bill_discount_amount)>0&&(r="amount",i=s.bill_discount_amount),u=c.purchase_return_items,v(s.invoice_number),k(s.purchase_return_date),N({value:s.party_id,label:s.party_name}),P({value:s.warehouse_id,label:s.warehouse_name}),Ft(s.warehouse_id),I(s.discount_type),d=[],p=0;p<u.length;p++)h=u[p],m="",f=0,h.discount_percent&&parseFloat(h.discount_percent)>0?(m="percent",f=h.discount_percent):h.discount_amount&&(m="amount",f=h.discount_amount),x={item:{value:h.product_id,label:h.product_name,type:h.product_type,price:h.purchase_return_price,unit:h.product_unit,hsbn:h.product_hsbn,serial_no:h.product_serial_no},item_id:h.id,purchase_return_price:h.purchase_return_price,qty:h.qty,discount_type:m,discountValue:f,gst:{label:h.tax_percent,value:h.tax_percent},total:h.total,amount_item:h.total,amount_after_tax:h.amount_after_tax,amount_before_discount:h.amount_before_discount,tax_amount:h.tax_amount,discount_amount:h.discount_amount,amount_after_discount:h.amount_after_discount,warehouse_id:h.warehouse_id,warehouse_name:h.warehouse_name},d.push(x);Je(d),O=0,_=0,y=0,d.map((function(e){O=parseFloat(O)+parseFloat(e.total),_=parseFloat(_)+parseFloat(e.discount_amount),y=parseFloat(y)+parseFloat(e.tax_amount)})),nt(O),ut(_),bt(y),ae(i),ne(r),et(s.amount_paid),Z({label:s.payment_type}),Fe(s.remarks)}else b.b.error(c.message);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),function(){a.apply(this,arguments)}(),function(){c.apply(this,arguments)}(),function(){r.apply(this,arguments)}(),function(){i.apply(this,arguments)}()}),[]);ie>0&&fe>0&&pe&&(_t=parseFloat(ie)*parseFloat(fe),vt=parseFloat(_t)/100*parseFloat(pe.value),Ot=kt=_t+vt,"Item"!==D&&"Both"!==D||(yt=kt,"percent"===M&&(wt=parseFloat(yt)/100*parseFloat(R),Ot=gt=yt-wt),"amount"===M&&(wt=parseFloat(R),Ot=gt=yt-wt)));rt>0&&("Bill"===D||"Both"===D?("percent"===re&&(Ue=rt/100*parseFloat(te),rt,Xe=rt-Ue),"amount"===re&&(Ue=parseFloat(te),rt,Xe=rt-Ue),Ke=(He=Xe)-parseFloat($e)):Ke=(He=rt)-parseFloat($e));return Object(m.jsxs)("div",{className:"container full-size-create-page-main-section",children:[Object(m.jsx)(b.a,{}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"p-sm-5 px-md-3 create-form-field create-purchase-page",children:[Object(m.jsxs)("div",{class:"py-4 px-2 form-row create-purchase-header",children:[Object(m.jsxs)("div",{class:"form-group col-md-3",children:[Object(m.jsx)("label",{for:"invoice-number",children:"Invoice No."}),Object(m.jsx)("input",{readOnly:!0,value:O,type:"text",class:"form-control",id:"invoice-number"})]}),Object(m.jsxs)("div",{class:"form-group col-md-4",children:[Object(m.jsx)("label",{for:"input-party",children:"Warehouse"}),Object(m.jsx)(d.a,{readOnly:!0,options:qe,value:T})]}),Object(m.jsxs)("div",{class:"form-group col-md-4",children:[Object(m.jsx)("label",{for:"date",children:"Purchase Return Date"}),Object(m.jsx)("input",{value:g,onChange:function(e){return k(e.target.value)},type:"date",class:"form-control",id:"date"})]}),Object(m.jsxs)("div",{class:"form-group col-md-4",children:[Object(m.jsxs)("label",{for:"input-party",children:["Party",Object(m.jsx)("span",{className:"required-label",children:"*"})]}),Object(m.jsx)(d.a,{options:Ce,value:S})]}),Object(m.jsxs)("div",{class:"form-group my-md-3 col-md-4",children:[Object(m.jsx)("div",{className:"text-center mb-2 font-weight-bold",children:Object(m.jsxs)("label",{for:"input-party",children:["Discount Type",Object(m.jsx)("span",{className:"required-label",children:"*"})]})}),Object(m.jsxs)("div",{className:"row px-3",children:[Object(m.jsxs)("div",{class:"form-check col-sm-3",children:[Object(m.jsx)("input",{checked:"None"===D&&!0,onClick:function(){return I("None")},class:"form-check-input",name:"discount",type:"radio",value:"",id:"defaultCheck1"}),Object(m.jsx)("label",{class:"form-check-label",for:"defaultCheck1",children:"None"})]}),Object(m.jsxs)("div",{class:"form-check col-sm-3",children:[Object(m.jsx)("input",{checked:"Item"===D&&!0,onClick:function(){return I("Item")},class:"form-check-input",name:"discount",type:"radio",value:"",id:"defaultCheck2"}),Object(m.jsx)("label",{class:"form-check-label",for:"defaultCheck2",children:"Item"})]}),Object(m.jsxs)("div",{class:"form-check col-sm-3",children:[Object(m.jsx)("input",{checked:"Bill"===D&&!0,onClick:function(){return I("Bill")},class:"form-check-input",name:"discount",type:"radio",value:"",id:"defaultCheck3"}),Object(m.jsx)("label",{class:"form-check-label",for:"defaultCheck3",children:"Bill"})]}),Object(m.jsxs)("div",{class:"form-check col-sm-3",children:[Object(m.jsx)("input",{checked:"Both"===D&&!0,onClick:function(){return I("Both")},class:"form-check-input",name:"discount",type:"radio",value:"",id:"defaultCheck3"}),Object(m.jsx)("label",{class:"form-check-label",for:"defaultCheck3",children:"Both"})]})]})]})]}),Object(m.jsxs)("div",{class:"my-4 form-row",children:[Object(m.jsxs)("div",{class:"form-group col-md-4",children:[Object(m.jsxs)("label",{for:"invoice-number",children:["Item",Object(m.jsx)("span",{className:"required-label",children:"*"})]}),Object(m.jsx)(d.a,{options:Qe,value:H,onChange:function(e){return function(e){K(e),ue(e.price)}(e)}})]}),Object(m.jsxs)("div",{class:"form-group col-md-4",children:[Object(m.jsxs)("label",{for:"invoice-number",children:["Price",Object(m.jsx)("span",{className:"required-label",children:"*"})]}),Object(m.jsx)("input",{value:ie,onChange:function(e){return ue(e.target.value)},type:"text",class:"form-control",id:""})]}),Object(m.jsxs)("div",{class:"form-group col-md-4",children:[Object(m.jsxs)("label",{for:"invoice-number",children:["Quantity",H?" (".concat(H.unit,")"):null,Object(m.jsx)("span",{className:"required-label",children:"*"})]}),Object(m.jsx)("input",{value:fe,onChange:function(e){return xe(e.target.value)},type:"text",class:"form-control",id:""})]}),Object(m.jsxs)("div",{class:"form-group col-md-4",children:[Object(m.jsxs)("label",{for:"invoice-number",children:["GST:",Object(m.jsx)("span",{className:"required-label",children:"*"})]}),Object(m.jsx)(d.a,{options:_e,value:pe,onChange:be})]}),"Item"===D&&Object(m.jsxs)("div",{className:"form-group col-md-4",children:[Object(m.jsx)("label",{htmlFor:"",children:"Discount"}),Object(m.jsxs)("div",{className:"m-0 p-0 col-12 row",children:[Object(m.jsx)("div",{className:"px-0 col-5",children:Object(m.jsx)("input",{value:R,onChange:function(e){return E(e.target.value)},class:"form-control",type:"text",name:"",id:""})}),Object(m.jsx)("div",{className:"p-0 col-7",children:Object(m.jsxs)("select",{value:M,onChange:function(e){return L(e.target.value)},class:"form-control",required:!0,children:[Object(m.jsx)("option",{value:"",children:"Select Type"}),Object(m.jsx)("option",{value:"percent",children:"Percent"}),Object(m.jsx)("option",{value:"amount",children:"Amount"})]})})]})]}),"Both"===D&&Object(m.jsxs)("div",{className:"form-group col-md-4",children:[Object(m.jsx)("label",{htmlFor:"",children:"Discount"}),Object(m.jsxs)("div",{className:"m-0 p-0 col-12 row",children:[Object(m.jsx)("div",{className:"px-0 col-5",children:Object(m.jsx)("input",{value:R,onChange:function(e){return E(e.target.value)},class:"form-control",type:"text",name:"",id:""})}),Object(m.jsx)("div",{className:"p-0 col-7",children:Object(m.jsxs)("select",{value:M,onChange:function(e){return L(e.target.value)},class:"form-control",required:!0,children:[Object(m.jsx)("option",{value:"",children:"Select Type"}),Object(m.jsx)("option",{value:"percent",children:"Percent"}),Object(m.jsx)("option",{value:"amount",children:"Amount"})]})})]})]}),Object(m.jsxs)("div",{class:"form-group col-md-4 row",children:[Object(m.jsxs)("div",{class:"form-group col-9",children:[Object(m.jsxs)("label",{for:"invoice-number",children:["Total",Object(m.jsx)("span",{className:"required-label",children:"*"})]}),Object(m.jsx)("input",{value:Ot,readOnly:!0,type:"text",class:"form-control",id:""})]}),Object(m.jsx)("div",{class:"form-group col-3 p-0 purchase-create-mid-plus-img",children:Object(m.jsx)("img",{className:"img-fluid",onClick:function(){return function(){if(O&&g&&H&&T&&S&&ie&&fe){var e={item:H,purchase_return_price:ie,qty:fe,gst:pe,discount_type:M,discountValue:R,total:Ot,amount_item:_t,amount_before_discount:yt,discount_amount:wt,tax_amount:vt,amount_after_discount:gt,warehouse_id:T.value,warehouse_name:T.label};if(ft){xt("");var t=[];Ve.map((function(a,c){c===parseInt(ft)-1?t.push(e):t.push(a)}));var a=0,s=0,r=0;t.map((function(e){a=parseFloat(a)+parseFloat(e.total),s=parseFloat(s)+parseFloat(e.discount_amount),r=parseFloat(r)+parseFloat(e.tax_amount)})),nt(a),ut(s),bt(r),Je(t)}else{var n=[].concat(Object(c.a)(Ve),[e]),o=0,l=0;n.map((function(e){o=parseFloat(o)+parseFloat(e.total),wt=parseFloat(wt)+parseFloat(e.discount_amount),l=parseFloat(l)+parseFloat(e.tax_amount)})),ut(wt),bt(l),nt(o),nt(parseFloat(rt)+parseFloat(Ot)),Je(n)}K(""),ue(0),L(""),E(0),xe(1),be({value:0,label:0}),Ot=0,_t=0,yt=0,gt=0,wt=0,vt=0,kt=0}else b.b.error("Fill all fields having *")}()},style:{cursor:"pointer"},src:u.a,alt:""})})]})]}),Ve.length>0&&Object(m.jsx)("div",{className:"my-table-responsive",children:Object(m.jsxs)("table",{class:"table mt-4",children:[Object(m.jsx)("thead",{class:"thead-dark",children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Item"}),Object(m.jsx)("th",{scope:"col",children:"Price"}),Object(m.jsx)("th",{scope:"col",children:"Quantity"}),Object(m.jsx)("th",{scope:"col",children:"GST"}),Object(m.jsx)("th",{scope:"col",children:"Discount"}),Object(m.jsx)("th",{scope:"col",children:"Total"}),Object(m.jsx)("th",{children:"Actions"})]})}),Object(m.jsx)("tbody",{className:"table-borderless",children:Ve.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[Object(m.jsx)("p",{className:"p-0 m-0",children:e.item.label}),Object(m.jsxs)("p",{children:["(",e.warehouse_name,")"]})]}),Object(m.jsx)("td",{children:e.purchase_return_price}),Object(m.jsx)("td",{children:e.qty}),Object(m.jsxs)("td",{children:[e.gst.value,"%"]}),Object(m.jsxs)("td",{children:[e.discountValue," ",e.discount_type]}),Object(m.jsx)("td",{children:e.total}),Object(m.jsxs)("td",{children:[Object(m.jsx)("i",{style:{cursor:"pointer"},onClick:function(){return function(e,t){xt(t),K(e.item),ue(e.purchase_return_price),xe(e.qty),be(e.gst),L(e.discount_type),E(e.discountValue),Ot=e.total}(e,t+1)},class:"fa fa-pencil","aria-hidden":"true"}),Object(m.jsx)("i",{onClick:function(){return function(e){var t=[];Ve.map((function(a,c){c!==e&&t.push(a)}));var a=0,c=0,s=0;t.map((function(e){a=parseFloat(a)+parseFloat(e.total),c=parseFloat(c)+parseFloat(e.discount_amount),s=parseFloat(s)+parseFloat(e.tax_amount)})),ut(c),bt(s),nt(a),Je(t)}(t)},style:{cursor:"pointer"},class:"fa fa-trash","aria-hidden":"true"})]})]})}))})]})}),Object(m.jsxs)("div",{className:"row mt-5 justify-content-between purchase-create-footer",children:[Object(m.jsxs)("div",{class:"form-group col-md-5",children:[Object(m.jsx)("label",{for:"exampleFormControlTextarea1",children:"Remarks"}),Object(m.jsx)("textarea",{value:we,onChange:function(e){return Fe(e.target.value)},class:"form-control",id:"exampleFormControlTextarea1",rows:"5"})]}),Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Total Value"}),Object(m.jsx)("div",{class:"col-md-8",children:Object(m.jsx)("input",{type:"text",value:rt,class:"form-control",id:""})})]}),"Bill"===D&&Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Discount"}),Object(m.jsxs)("div",{class:"pr-0 col-md-8 row",children:[Object(m.jsx)("div",{className:"pr-0 col-5",children:Object(m.jsx)("input",{class:"form-control",value:te,onChange:function(e){return ae(e.target.value)},type:"text",name:"",id:""})}),Object(m.jsx)("div",{className:"px-0 col-7",children:Object(m.jsxs)("select",{value:re,onChange:function(e){return ne(e.target.value)},class:"form-control",required:!0,children:[Object(m.jsx)("option",{value:"",children:"Select Type"}),Object(m.jsx)("option",{value:"percent",children:"Percent"}),Object(m.jsx)("option",{value:"amount",children:"Amount"})]})})]})]}),"Both"===D&&Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Discount"}),Object(m.jsxs)("div",{class:"pr-0 col-md-8 row",children:[Object(m.jsx)("div",{className:"pr-0 col-5",children:Object(m.jsx)("input",{class:"form-control",type:"text",value:te,onChange:function(e){return ae(e.target.value)}})}),Object(m.jsx)("div",{className:"px-0 col-7",children:Object(m.jsxs)("select",{value:re,onChange:function(e){return ne(e.target.value)},class:"form-control",required:!0,children:[Object(m.jsx)("option",{value:"",children:"Select Type"}),Object(m.jsx)("option",{value:"percent",children:"Percent"}),Object(m.jsx)("option",{value:"amount",children:"Amount"})]})})]})]}),Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Final Amount"}),Object(m.jsx)("div",{class:"col-md-8",children:Object(m.jsx)("input",{readOnly:!0,value:He,type:"text",class:"form-control",id:""})})]}),Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Paid Amount"}),Object(m.jsx)("div",{class:"col-md-8",children:Object(m.jsx)("input",{value:$e,type:"text",class:"form-control",id:""})})]}),$e>0&&Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Payment Method"}),Object(m.jsx)("div",{class:"col-md-8",children:Object(m.jsx)(d.a,{options:ze,value:Y})})]}),Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Remain Amount"}),Object(m.jsx)("div",{class:"col-md-8",children:Object(m.jsx)("input",{type:"text",value:Ke,readOnly:!0,class:"form-control",id:""})})]})]})]})]}),Object(m.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(m.jsxs)("button",{type:"button",onClick:function(){return window.location.reload()},class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(m.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(m.jsxs)("button",{type:"button",onClick:function(){return function(){if(O&&g&&T&&S&&Ve.length>0&&rt){var a=function(){var a=Object(s.a)(o.a.mark((function a(){var c,s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(j.c+"updatePurchaseReturnEntry/"+e,{method:"POST",headers:{Authorization:n.token},body:u});case 2:if(!0!==(c=a.sent).ok){a.next=9;break}return a.next=6,c.json();case 6:s=a.sent,l(!1),200===s.status?(b.b.success(s.message),t.push("/purchaseReturnReport")):b.b.error(s.message);case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();l(!0);var c={invoiceNo:O,purchaseReturnDate:g,currentParty:S,currentWarehouse:T,discountType:D},r={totalValue:rt,finalAmount:He,paidAmount:$e,remainAmount:Ke,finalDiscountValue:te,finalDiscountCriteria:re,remarks:we,paymentMethod:Y.label,discountAmount:it,taxableAmount:pt},i=[];i.push(c),i.push(r);var u=new FormData;u.append("final_array",JSON.stringify(i)),u.append("allItems",JSON.stringify(Ve)),a()}else b.b.error("Please fill the data with *")}()},class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(m.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})]})}}}]);
//# sourceMappingURL=62.65b8f5c2.chunk.js.map