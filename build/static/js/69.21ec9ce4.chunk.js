(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[69],{671:function(e,t,c){"use strict";t.a=c.p+"static/media/add.b7874215.svg"},850:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return m}));var a=c(673),n=c(664),s=c(128),r=c(665),l=c.n(r),o=c(1),i=c.n(o),u=c(671),d=c(670),j=c(663),b=c(100),p=c(667),h=c(18);function m(){var e=i.a.useContext(b.b),t=e.user,c=e.setLoad,r=i.a.useState(""),o=Object(s.a)(r,2),m=o[0],f=o[1],x=i.a.useState(""),O=Object(s.a)(x,2),v=O[0],g=O[1],y=i.a.useState(!1),k=Object(s.a)(y,2),w=k[0],_=k[1],C=i.a.useState(""),S=Object(s.a)(C,2),N=S[0],F=S[1],A=i.a.useState(""),T=Object(s.a)(A,2),q=T[0],P=T[1],D=i.a.useState("None"),B=Object(s.a)(D,2),G=B[0],I=B[1],z=i.a.useState(0),E=Object(s.a)(z,2),V=E[0],R=E[1],J=i.a.useState("percent"),M=Object(s.a)(J,2),L=M[0],Q=M[1],W=i.a.useState(""),H=Object(s.a)(W,2),K=H[0],U=H[1],X=i.a.useState(""),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1],ee=i.a.useState(0),te=Object(s.a)(ee,2),ce=te[0],ae=te[1],ne=i.a.useState("percent"),se=Object(s.a)(ne,2),re=se[0],le=se[1],oe=i.a.useState(0),ie=Object(s.a)(oe,2),ue=ie[0],de=ie[1],je=i.a.useState({value:0,label:0}),be=Object(s.a)(je,2),pe=be[0],he=be[1],me=i.a.useState(1),fe=Object(s.a)(me,2),xe=fe[0],Oe=fe[1],ve=i.a.useState([]),ge=Object(s.a)(ve,2),ye=ge[0],ke=ge[1],we=i.a.useState(""),_e=Object(s.a)(we,2),Ce=_e[0],Se=_e[1],Ne=i.a.useState([]),Fe=Object(s.a)(Ne,2),Ae=Fe[0],Te=Fe[1],qe=i.a.useState([]),Pe=Object(s.a)(qe,2),De=Pe[0],Be=Pe[1],Ge=i.a.useState([]),Ie=Object(s.a)(Ge,2),ze=Ie[0],Ee=Ie[1],Ve=i.a.useState([]),Re=Object(s.a)(Ve,2),Je=Re[0],Me=Re[1],Le=i.a.useState([]),Qe=Object(s.a)(Le,2),We=Qe[0],He=Qe[1],Ke=0,Ue=0,Xe=0,Ye=0,Ze=i.a.useState(0),$e=Object(s.a)(Ze,2),et=$e[0],tt=$e[1],ct=i.a.useState(0),at=Object(s.a)(ct,2),nt=at[0],st=at[1],rt=i.a.useState(0),lt=Object(s.a)(rt,2),ot=lt[0],it=lt[1],ut=i.a.useState(0),dt=Object(s.a)(ut,2),jt=dt[0],bt=dt[1],pt=i.a.useState(""),ht=Object(s.a)(pt,2),mt=ht[0],ft=ht[1],xt=0,Ot=0,vt=0,gt=0,yt=0,kt=0,wt=0;function _t(){return Ct.apply(this,arguments)}function Ct(){return(Ct=Object(n.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,fetch(j.c+"fetchDefaultGST",{headers:{Authorization:t.token}});case 3:if(!0!==(a=e.sent).ok){e.next=10;break}return e.next=7,a.json();case 7:n=e.sent,c(!1),200==n.status?("false"==n.default_gst?_(!1):_(!0),f(n.invoice_number),he({value:0,label:0})):p.b.error(n.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function St(){return(St=Object(n.a)(l.a.mark((function e(a){var n,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,fetch(j.c+"fetchProducts?warehouse=".concat(a.value),{method:"GET",headers:{Authorization:null===t||void 0===t?void 0:t.token}});case 3:if(!0!==(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:s=e.sent,c(!1),200===s.status?(r=[],s.inventory_list&&s.inventory_list.map((function(e){r.push({value:e.product_id,name:e.product_name,label:"".concat(e.product_name," ").concat(e.total_qty),type:"product",unit:e.product_unit,price:e.sale_unit_price,hsbn:e.product_hsbn,serial_no:e.product_serial_no})})),s.product_list&&s.product_list.map((function(e){r.push({value:e.id,name:e.name,label:e.name,price:e.price,type:e.type,unit:e.unit,hsbn:e.hsbn,serial_no:e.serial_no})})),He(r)):p.b.error(s.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.useEffect((function(){function e(){return(e=Object(n.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,fetch(j.c+"getPaymentMethods",{method:"GET",headers:{Authorization:null===t||void 0===t?void 0:t.token}});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,c(!1),Ee(null===n||void 0===n?void 0:n.payment_methods.map((function(e){return{label:e}}))),$({label:"cash"});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(n.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,fetch(j.c+"clientlist",{method:"GET",headers:{Authorization:null===t||void 0===t?void 0:t.token}});case 3:if(!0!==(a=e.sent).ok){e.next=10;break}return e.next=7,a.json();case 7:n=e.sent,c(!1),200===n.status?Te(null===n||void 0===n?void 0:n.client_list.map((function(e){return{value:e.id,label:e.name,amount:e.due_amount}}))):p.b.error(n.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=Object(n.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,fetch(j.c+"getGSTList",{method:"GET",headers:{Authorization:null===t||void 0===t?void 0:t.token}});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,c(!1),ke(null===n||void 0===n?void 0:n.gst.map((function(e){return{value:e,label:e}})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(){return(r=Object(n.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,fetch(j.c+"warehouselist",{method:"GET",headers:{Authorization:null===t||void 0===t?void 0:t.token}});case 3:if(!0!==(a=e.sent).ok){e.next=10;break}return e.next=7,a.json();case 7:n=e.sent,c(!1),200===n.status?Be(null===n||void 0===n?void 0:n.warehouse_list.map((function(e){return{value:e.id,label:e.name}}))):p.b.error(n.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){a.apply(this,arguments)}(),function(){s.apply(this,arguments)}(),function(){r.apply(this,arguments)}(),_t()}),[]);ue>0&&xe>0&&(vt=parseFloat(ue)*parseFloat(xe),Ot=0,pe&&w&&(Ot=parseFloat(vt)/100*parseFloat(pe.value)),xt=kt=vt+Ot,"Item"!==G&&"Both"!==G||(gt=kt,"percent"===L&&(wt=parseFloat(gt)/100*parseFloat(V),xt=yt=gt-wt),"amount"===L&&(wt=parseFloat(V),xt=yt=gt-wt)));nt>0&&("Bill"===G||"Both"===G?("percent"===re&&(Xe=nt/100*parseFloat(ce),nt,Ye=nt-Xe),"amount"===re&&(Xe=parseFloat(ce),nt,Ye=nt-Xe),Ue=(Ke=Ye)-parseFloat(et)):Ue=(Ke=nt)-parseFloat(et));var Nt=function(e){P(e),function(e){St.apply(this,arguments)}(e)};return Object(h.jsxs)("div",{className:"container full-size-create-page-main-section",children:[Object(h.jsx)(p.a,{}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"p-sm-5 px-md-3 create-form-field create-purchase-page",children:[Object(h.jsxs)("div",{class:"py-4 px-2 form-row create-purchase-header",children:[Object(h.jsxs)("div",{class:"form-group col-md-3",children:[Object(h.jsxs)("label",{for:"invoice-number",children:["Invoice No.",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)("input",{readOnly:!0,value:m,type:"text",class:"form-control",id:"invoice-number",required:!0})]}),Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsxs)("label",{for:"input-party",children:["Warehouse",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)(d.a,{options:De,value:q,onChange:function(e){return Nt(e)}})]}),Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsx)("label",{for:"date",children:"Sale Return Date"}),Object(h.jsx)("input",{value:v,onChange:function(e){return g(e.target.value)},type:"date",class:"form-control",id:"date"})]}),Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsxs)("label",{for:"input-party",children:["Customer",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)(d.a,{options:Ae,value:N,onChange:F})]}),Object(h.jsxs)("div",{class:"form-group my-md-3 col-md-4",children:[Object(h.jsx)("div",{className:"text-center mb-2 font-weight-bold",children:Object(h.jsxs)("label",{for:"input-party",children:["Discount Type",Object(h.jsx)("span",{className:"required-label",children:"*"})]})}),Object(h.jsxs)("div",{className:"row px-3",children:[Object(h.jsxs)("div",{class:"form-check col-sm-3",children:[Object(h.jsx)("input",{checked:"None"===G&&!0,onClick:function(){return I("None")},class:"form-check-input",name:"discount",type:"radio",value:"",id:"defaultCheck1"}),Object(h.jsx)("label",{class:"form-check-label",for:"defaultCheck1",children:"None"})]}),Object(h.jsxs)("div",{class:"form-check col-sm-3",children:[Object(h.jsx)("input",{onClick:function(){return I("Item")},class:"form-check-input",name:"discount",type:"radio",value:"",id:"defaultCheck2"}),Object(h.jsx)("label",{class:"form-check-label",for:"defaultCheck2",children:"Item"})]}),Object(h.jsxs)("div",{class:"form-check col-sm-3",children:[Object(h.jsx)("input",{onClick:function(){return I("Bill")},class:"form-check-input",name:"discount",type:"radio",value:"",id:"defaultCheck3"}),Object(h.jsx)("label",{class:"form-check-label",for:"defaultCheck3",children:"Bill"})]}),Object(h.jsxs)("div",{class:"form-check col-sm-3",children:[Object(h.jsx)("input",{onClick:function(){return I("Both")},class:"form-check-input",name:"discount",type:"radio",value:"",id:"defaultCheck3"}),Object(h.jsx)("label",{class:"form-check-label",for:"defaultCheck3",children:"Both"})]})]})]}),Object(h.jsxs)("div",{class:"form-group col-md-2",children:[Object(h.jsx)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:"GST:"}),Object(h.jsx)("div",{class:"d-flex b-0 col-sm-1",children:Object(h.jsx)("input",{checked:w,type:"checkbox",onChange:function(e){return function(){var e=!w;function a(){return(a=Object(n.a)(l.a.mark((function a(){var n,s;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(!0),a.next=3,fetch(j.c+"fetchInvoiceNumber?default_gst=".concat(e),{headers:{Authorization:t.token}});case 3:if(!0!==(n=a.sent).ok){a.next=11;break}return a.next=7,n.json();case 7:s=a.sent,c(!1),console.log(s),200==s.status&&f(s.invoice_number);case 11:case"end":return a.stop()}}),a)})))).apply(this,arguments)}_(!w),function(){a.apply(this,arguments)}()}()},id:"inputPassword"})})]})]}),Object(h.jsxs)("div",{class:"my-4 form-row",children:[Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsxs)("label",{for:"invoice-number",children:["Item",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)(d.a,{options:We,value:K,onChange:function(e){return function(e){U(e),de(e.price)}(e)}})]}),Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsxs)("label",{for:"invoice-number",children:["Price",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)("input",{value:ue,onChange:function(e){return de(e.target.value)},type:"text",class:"form-control",id:""})]}),Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsxs)("label",{for:"invoice-number",children:["Quantity",K?" (".concat(K.unit,")"):null,Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)("input",{value:xe,onChange:function(e){return Oe(e.target.value)},type:"text",class:"form-control",id:""})]}),w&&Object(h.jsxs)("div",{class:"form-group col-md-4",children:[Object(h.jsxs)("label",{for:"invoice-number",children:["GST:",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)(d.a,{options:ye,value:pe,onChange:he})]}),"Item"===G&&Object(h.jsxs)("div",{className:"form-group col-md-4",children:[Object(h.jsx)("label",{htmlFor:"",children:"Discount"}),Object(h.jsxs)("div",{className:"m-0 p-0 col-12 row",children:[Object(h.jsx)("div",{className:"px-0 col-5",children:Object(h.jsx)("input",{value:V,onChange:function(e){return R(e.target.value)},class:"form-control",type:"text",name:"",id:""})}),Object(h.jsx)("div",{className:"p-0 col-7",children:Object(h.jsxs)("select",{value:L,onChange:function(e){return Q(e.target.value)},class:"form-control",required:!0,children:[Object(h.jsx)("option",{value:"",children:"Select Type"}),Object(h.jsx)("option",{value:"percent",children:"Percent"}),Object(h.jsx)("option",{value:"amount",children:"Amount"})]})})]})]}),"Both"===G&&Object(h.jsxs)("div",{className:"form-group col-md-4",children:[Object(h.jsx)("label",{htmlFor:"",children:"Discount"}),Object(h.jsxs)("div",{className:"m-0 p-0 col-12 row",children:[Object(h.jsx)("div",{className:"px-0 col-5",children:Object(h.jsx)("input",{value:V,onChange:function(e){return R(e.target.value)},class:"form-control",type:"text",name:"",id:""})}),Object(h.jsx)("div",{className:"p-0 col-7",children:Object(h.jsxs)("select",{value:L,onChange:function(e){return Q(e.target.value)},class:"form-control",required:!0,children:[Object(h.jsx)("option",{value:"",children:"Select Type"}),Object(h.jsx)("option",{value:"percent",children:"Percent"}),Object(h.jsx)("option",{value:"amount",children:"Amount"})]})})]})]}),Object(h.jsxs)("div",{class:"form-group col-md-4 row",children:[Object(h.jsxs)("div",{class:"form-group col-9",children:[Object(h.jsxs)("label",{for:"invoice-number",children:["Total",Object(h.jsx)("span",{className:"required-label",children:"*"})]}),Object(h.jsx)("input",{value:xt,readOnly:!0,type:"text",class:"form-control",id:""})]}),Object(h.jsx)("div",{class:"form-group col-3 p-0 purchase-create-mid-plus-img",children:Object(h.jsx)("img",{className:"img-fluid",onClick:function(){return function(){if(m&&K&&q&&N&&ue&&xe){var e={item:K,sale_return_price:ue,qty:xe,gst:pe,discount_type:L,discountValue:V,total:xt,amount_item:vt,amount_before_discount:gt,discount_amount:wt,tax_amount:Ot,amount_after_discount:yt,warehouse_id:q.value,warehouse_name:q.label};if(mt){ft("");var t=[];Je.map((function(c,a){a===parseInt(mt)-1?t.push(e):t.push(c)}));var c=0,n=0,s=0;t.map((function(e){c=parseFloat(c)+parseFloat(e.total),n=parseFloat(n)+parseFloat(e.discount_amount),s=parseFloat(s)+parseFloat(e.tax_amount)})),st(c),it(n),bt(s),Me(t),tt(c)}else{var r=[].concat(Object(a.a)(Je),[e]),l=0,o=0;r.map((function(e){l=parseFloat(l)+parseFloat(e.total),wt=parseFloat(wt)+parseFloat(e.discount_amount),o=parseFloat(o)+parseFloat(e.tax_amount)})),it(wt),bt(o),st(l),tt(l),st(parseFloat(nt)+parseFloat(xt)),Me(r)}U(""),de(0),Q(""),R(0),Oe(1),he({value:0,label:0}),xt=0,vt=0,gt=0,yt=0,wt=0,Ot=0,kt=0}else p.b.error("Fill all fields having *")}()},style:{cursor:"pointer"},src:u.a,alt:""})})]})]}),Je.length>0&&Object(h.jsx)("div",{className:"my-table-responsive",children:Object(h.jsxs)("table",{class:"table mt-4",children:[Object(h.jsx)("thead",{class:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Item"}),Object(h.jsx)("th",{scope:"col",children:"Price"}),Object(h.jsx)("th",{scope:"col",children:"Quantity"}),Object(h.jsx)("th",{scope:"col",children:"GST"}),Object(h.jsx)("th",{scope:"col",children:"Discount"}),Object(h.jsx)("th",{scope:"col",children:"Total"}),Object(h.jsx)("th",{children:"Actions"})]})}),Object(h.jsx)("tbody",{className:"table-borderless",children:Je.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("p",{className:"p-0 m-0",children:e.item.name}),Object(h.jsxs)("p",{children:["(",e.warehouse_name,")"]})]}),Object(h.jsx)("td",{children:e.sale_return_price}),Object(h.jsx)("td",{children:e.qty}),Object(h.jsxs)("td",{children:[e.gst.value,"%"]}),Object(h.jsxs)("td",{children:[e.discountValue," ",e.discount_type]}),Object(h.jsx)("td",{children:e.total}),Object(h.jsxs)("td",{children:[Object(h.jsx)("i",{style:{cursor:"pointer"},onClick:function(){return function(e,t){ft(t),U(e.item),de(e.sale_return_price),Oe(e.qty),he(e.gst),Q(e.discount_type),R(e.discountValue),xt=e.total}(e,t+1)},class:"fa fa-pencil","aria-hidden":"true"}),Object(h.jsx)("i",{onClick:function(){return function(e){var t=[];Je.map((function(c,a){a!==e&&t.push(c)})),Me(t)}(t)},style:{cursor:"pointer"},class:"fa fa-trash","aria-hidden":"true"})]})]})}))})]})}),Object(h.jsxs)("div",{className:"row mt-5 justify-content-between purchase-create-footer",children:[Object(h.jsxs)("div",{class:"form-group col-md-5",children:[Object(h.jsx)("label",{for:"exampleFormControlTextarea1",children:"Remarks"}),Object(h.jsx)("textarea",{value:Ce,onChange:function(e){return Se(e.target.value)},class:"form-control",id:"exampleFormControlTextarea1",rows:"5"}),N?Object(h.jsxs)("div",{children:["Due Amount: ",N.amount]}):null]}),Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Total Value"}),Object(h.jsx)("div",{class:"col-md-8",children:Object(h.jsx)("input",{type:"text",value:nt,class:"form-control",id:""})})]}),"Bill"===G&&Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Discount"}),Object(h.jsxs)("div",{class:"pr-0 col-md-8 row",children:[Object(h.jsx)("div",{className:"pr-0 col-5",children:Object(h.jsx)("input",{class:"form-control",value:ce,onChange:function(e){return ae(e.target.value)},type:"text",name:"",id:""})}),Object(h.jsx)("div",{className:"px-0 col-7",children:Object(h.jsxs)("select",{value:re,onChange:function(e){return le(e.target.value)},class:"form-control",required:!0,children:[Object(h.jsx)("option",{value:"",children:"Select Type"}),Object(h.jsx)("option",{value:"percent",children:"Percent"}),Object(h.jsx)("option",{value:"amount",children:"Amount"})]})})]})]}),"Both"===G&&Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Discount"}),Object(h.jsxs)("div",{class:"pr-0 col-md-8 row",children:[Object(h.jsx)("div",{className:"pr-0 col-5",children:Object(h.jsx)("input",{class:"form-control",type:"text",value:ce,onChange:function(e){return ae(e.target.value)}})}),Object(h.jsx)("div",{className:"px-0 col-7",children:Object(h.jsxs)("select",{value:re,onChange:function(e){return le(e.target.value)},class:"form-control",required:!0,children:[Object(h.jsx)("option",{value:"",children:"Select Type"}),Object(h.jsx)("option",{value:"percent",children:"Percent"}),Object(h.jsx)("option",{value:"amount",children:"Amount"})]})})]})]}),Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Final Amount"}),Object(h.jsx)("div",{class:"col-md-8",children:Object(h.jsx)("input",{readOnly:!0,value:Ke,type:"text",class:"form-control",id:""})})]}),Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Paid Amount"}),Object(h.jsx)("div",{class:"col-md-8",children:Object(h.jsx)("input",{value:et,onChange:function(e){return tt(e.target.value)},type:"text",class:"form-control",id:""})})]}),et>0&&Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Payment Method"}),Object(h.jsx)("div",{class:"col-md-8",children:Object(h.jsx)(d.a,{options:ze,value:Z,onChange:$})})]}),Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"",class:"col-md-4 col-form-label",children:"Remain Amount"}),Object(h.jsx)("div",{class:"col-md-8",children:Object(h.jsx)("input",{type:"text",value:Ue,readOnly:!0,class:"form-control",id:""})})]})]})]})]}),Object(h.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(h.jsxs)("button",{type:"button",onClick:function(){return window.location.reload()},class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(h.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(h.jsxs)("button",{type:"button",onClick:function(){return function(){if(m&&q&&N&&Je.length>0&&nt){var e=function(){var e=Object(n.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j.c+"createSalesReturn",{method:"POST",headers:{Authorization:t.token},body:o});case 2:if(!0!==(a=e.sent).ok){e.next=9;break}return e.next=6,a.json();case 6:n=e.sent,c(!1),200===n.status?(p.b.success(n.message),g(""),F(""),I("None"),it(0),_(!1),bt(0),le("percent"),ae(0),U(""),P(""),st(0),tt(0),Me([]),He([]),$({label:"cash"}),Ke=0,Ue=0,Xe=0,0,Ye=0,_t()):p.b.error(n.message);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c(!0);var a={invoiceNo:m,saleReturnDate:v,default_gst:w,currentCustomer:N,currentWarehouse:q,discountType:G},s={totalValue:nt,finalAmount:Ke,paidAmount:et,remainAmount:Ue,finalDiscountValue:ce,finalDiscountCriteria:re,remarks:Ce,paymentMethod:Z.label,discountAmount:ot,taxableAmount:jt},r=[];r.push(a),r.push(s);var o=new FormData;o.append("final_array",JSON.stringify(r)),o.append("allItems",JSON.stringify(Je)),e()}else p.b.error("Please fill the data with *")}()},class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(h.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})]})}}}]);
//# sourceMappingURL=69.21ec9ce4.chunk.js.map