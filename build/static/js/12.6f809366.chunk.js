(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{668:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(661),r=(n(1),n(18));function c(e){var t=e.modal,n=e.setModal,c=e.deleteEntry;return Object(r.jsx)("div",{className:"delete_modal_box",children:Object(r.jsxs)(a.eb,{show:t,onClose:n,children:[Object(r.jsx)(a.hb,{closeButton:!0}),Object(r.jsxs)(a.fb,{className:"delete_modal_body",children:[Object(r.jsx)("p",{children:" Are you sure you want to delete this record ?"}),Object(r.jsxs)("div",{className:"btn-div-modal-group delete_modal_Btns",children:[Object(r.jsx)("button",{onClick:function(){return c()},className:"delete_modal_yes_Btn",children:"Yes, Approve"}),Object(r.jsx)("button",{className:"btn btn-primary delete_modal_cancel_Btn",color:"secondary",onClick:function(){return n(!1)},children:"Cancel"})]})]})]})})}},689:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(661),r=(n(1),n(18));function c(e){var t=e.header,n=e.Label,c=e.showModal,o=e.setShowModal,s=e.adjustAmount,i=e.setAdjustAmount,u=e.submitAdjust;return Object(r.jsx)("div",{className:"delete_modal_box",children:Object(r.jsxs)(a.eb,{show:c,onClose:o,children:[Object(r.jsx)(a.hb,{closeButton:!0,children:t}),Object(r.jsxs)(a.fb,{className:"delete_modal_body",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-12",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"",children:n}),Object(r.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)},className:"form-control"})]})})}),Object(r.jsx)("button",{type:"submit",onClick:function(){return u()},className:"col-12 btn btn-secondary mb-5",children:"Submit"})]})]})})}},830:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(664),r=n(128),c=n(665),o=n.n(c),s=n(1),i=n.n(s),u=n(672),l=n.n(u),d=n(663),p=n(667),b=n(100),m=n(668),j=n(689),f=n(18);function h(){var e=i.a.useContext(b.b),t=e.user,n=e.setLoad,c=i.a.useState([]),u=Object(r.a)(c,2),h=u[0],y=u[1],x=i.a.useState(!1),_=Object(r.a)(x,2),v=_[0],O=_[1],k=i.a.useState(!1),g=Object(r.a)(k,2),w=g[0],A=g[1],N=i.a.useState(""),S=Object(r.a)(N,2),C=S[0],z=S[1],R=i.a.useState(""),T=Object(r.a)(R,2),E=T[0],L=T[1],I=i.a.useState(""),B=Object(r.a)(I,2),G=B[0],M=B[1],P=i.a.useState(""),F=Object(r.a)(P,2),D=F[0],J=F[1],Y=i.a.useState(0),q=Object(r.a)(Y,2),H=q[0],K=q[1],Q=i.a.useState(""),U=Object(r.a)(Q,2),V=U[0],W=U[1];i.a.useEffect((function(){function e(){return(e=Object(a.a)(o.a.mark((function e(){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.c+"fetchRecieptList",{method:"GET",headers:{Authorization:null===t||void 0===t?void 0:t.token}});case 2:if(!0!==(a=e.sent).ok){e.next=9;break}return e.next=6,a.json();case 6:r=e.sent,n(!1),200===r.status?(y(r.list.map((function(e){return{id:e.id,payment_type:e.payment_type,date:Object(d.a)(e.date.split(" ")[0]),type:e.type,amount:e.amount,condition:e.condition,created_by_name:e.created_by_name}}))),K(parseInt(r.total_records))):p.b.error(r.message);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(!0),function(){e.apply(this,arguments)}()}),[]);var X=[{key:"id",text:"Reciept Id",className:"id",sortable:!0},{key:"type",text:"Type",className:"type",sortable:!0},{key:"amount",text:"Amount",className:"amount",sortable:!0},{key:"date",text:"Date",className:"date",sortable:!0},{key:"condition",text:"Condition",className:"condition",sortable:!0},{key:"payment_type",text:"Payment Type",className:"payment_type",sortable:!0},{key:"created_by_name",text:"Created By",className:"created_by_name",sortable:!0},{key:"action",text:"Action",className:"action",width:100,sortable:!1,cell:function(e){return Object(f.jsx)(s.Fragment,{children:Object(f.jsx)("i",{style:{cursor:"pointer"},onClick:function(){return Z(e.id)},class:"fa fa-pencil","aria-hidden":"true"})})}}],Z=function(e){L(e),O(!0)};function $(){return($=Object(a.a)(o.a.mark((function e(a){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,fetch(d.c+a,{method:"GET",headers:{Authorization:null===t||void 0===t?void 0:t.token}});case 3:if(!0!==(r=e.sent).ok){e.next=10;break}return e.next=7,r.json();case 7:c=e.sent,n(!1),200===c.status?(y(c.list.map((function(e){return{id:e.id,payment_type:e.payment_type,date:Object(d.a)(e.date.split(" ")[0]),type:e.type,amount:e.amount,condition:e.condition,created_by_name:e.created_by_name}}))),K(parseInt(c.total_records))):p.b.error(c.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=function(e){var t="";D&&G&&C?t="&to=".concat(D,"&from=").concat(G,"&type=").concat(C):D&&G?t="&to=".concat(D,"&from=").concat(G):C&&(t="&type=".concat(C));var n="fetchRecieptList?page_number=".concat(e.page_number,"&page_size=").concat(e.page_size,"&filter_value=").concat(e.filter_value).concat(t);if(e.sort_order){var a=JSON.stringify(e.sort_order);n="fetchRecieptList?page_number=".concat(e.page_number,"&page_size=").concat(e.page_size,"&filter_value=").concat(e.filter_value,"&sort_order=").concat(a).concat(t)}!function(e){$.apply(this,arguments)}(n)};return Object(f.jsxs)("section",{children:[Object(f.jsx)(p.a,{}),Object(f.jsx)(m.a,{modal:w,setModal:A,deleteEntry:function(){function e(){return e=Object(a.a)(o.a.mark((function e(){var r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.c+"deleteReciept/"+E,{method:"GET",headers:{Authorization:null===t||void 0===t?void 0:t.token}});case 2:return r=e.sent,e.next=5,r.json();case 5:200===(c=e.sent).status?(s=function(){var e=Object(a.a)(o.a.mark((function e(){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.c+"fetchRecieptList",{method:"GET",headers:{Authorization:null===t||void 0===t?void 0:t.token}});case 2:if(!0!==(a=e.sent).ok){e.next=9;break}return e.next=6,a.json();case 6:r=e.sent,n(!1),200===r.status?(y(r.list.map((function(e){return{id:e.id,payment_type:e.payment_type,date:Object(d.a)(e.date.split(" ")[0]),type:e.type,amount:e.amount,condition:e.condition,created_by_name:e.created_by_name}}))),K(parseInt(r.total_records))):p.b.error(r.message);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A(!1),L(""),s()):(A(!1),L(""),n(!1),p.b.error(c.message));case 7:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}n(!0),function(){e.apply(this,arguments)}()}}),Object(f.jsx)(j.a,{header:"Adjust Reciept",Label:"Add/Subtract Amount",showModal:v,setShowModal:O,adjutAmount:V,setAdjustAmount:W,submitAdjust:function(){n(!0),n(!0);var e=new FormData;function r(){return r=Object(a.a)(o.a.mark((function r(){var c,s,i;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch(d.c+"updateReciept/"+E,{method:"POST",headers:{Authorization:t.token},body:e});case 2:if(!0!==(c=r.sent).ok){r.next=9;break}return r.next=6,c.json();case 6:s=r.sent,n(!1),200===s.status?(i=function(){var e=Object(a.a)(o.a.mark((function e(){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.c+"fetchRecieptList",{method:"GET",headers:{Authorization:null===t||void 0===t?void 0:t.token}});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:200===(a=e.sent).status?(y(a.list.map((function(e){return{id:e.id,payment_type:e.payment_type,date:Object(d.a)(e.date.split(" ")[0]),type:e.type,amount:e.amount,condition:e.condition,created_by_name:e.created_by_name}}))),K(parseInt(a.total_records))):p.b.error(a.message);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L(""),W(""),O(!1),i()):p.b.error(s.message);case 9:case"end":return r.stop()}}),r)}))),r.apply(this,arguments)}e.append("new_amount",V),function(){r.apply(this,arguments)}()}}),Object(f.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault();var r="";function c(){return(c=Object(a.a)(o.a.mark((function e(){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.c+"fetchRecieptList?".concat(r),{method:"GET",headers:{Authorization:null===t||void 0===t?void 0:t.token}});case 2:if(!0!==(a=e.sent).ok){e.next=11;break}return e.next=6,a.json();case 6:c=e.sent,n(!1),200===c.status?(y(c.list.map((function(e){return{id:e.id,payment_type:e.payment_type,date:Object(d.a)(e.date.split(" ")[0]),type:e.type,amount:e.amount,condition:e.condition,created_by_name:e.created_by_name}}))),K(parseInt(c.total_records))):p.b.error(c.message),e.next=12;break;case 11:p.b.error("Oops something went wrong!");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}D&&G&&C?r="to=".concat(D,"&from=").concat(G,"&type=").concat(C):D&&G?r="to=".concat(D,"&from=").concat(G):C&&(r="type=".concat(C)),n(!0),function(){return c.apply(this,arguments)}().catch((function(e){return p.b.error("Internal server error!. Please try again later")}))}(e)},children:Object(f.jsxs)("div",{class:"form-row create-purchase-header",children:[Object(f.jsxs)("div",{class:"form-group col-md-3",children:[Object(f.jsx)("label",{for:"date",children:"From"}),Object(f.jsx)("input",{value:G,onChange:function(e){return M(e.target.value)},type:"date",class:"form-control",id:"date"})]}),Object(f.jsxs)("div",{class:"form-group col-md-3",children:[Object(f.jsx)("label",{for:"date",children:"To"}),Object(f.jsx)("input",{value:D,onChange:function(e){return J(e.target.value)},type:"date",class:"form-control",id:"date"})]}),Object(f.jsxs)("div",{class:"form-group col-md-3",children:[Object(f.jsx)("label",{for:"input-type",class:"col-md-4 col-form-label",children:"Type"}),Object(f.jsxs)("select",{value:C,onChange:function(e){return z(e.target.value)},id:"input-type",class:"form-control",children:[Object(f.jsx)("option",{value:"",children:"All"}),Object(f.jsx)("option",{value:"purchase",children:"Purchase"}),Object(f.jsx)("option",{value:"sales",children:"Sales"}),Object(f.jsx)("option",{value:"expense",children:"Expenses"}),Object(f.jsx)("option",{value:"customer",children:"Customer"}),Object(f.jsx)("option",{value:"party",children:"Party"}),Object(f.jsx)("option",{value:"purchase_return",children:"Purchase Return"}),Object(f.jsx)("option",{value:"sales_retrn",children:"Sales Return"})]})]}),Object(f.jsx)("div",{class:"form-group col-md-3",children:Object(f.jsx)("button",{type:"Submit",class:"font-weight-bold my-4 py-2 px-4 btn btn-success",children:"Filter"})})]})}),Object(f.jsx)(l.a,{config:{page_size:10,length_menu:[10,20,50],button:{excel:!1,print:!1,extra:!1}},records:h,columns:X,total_record:H,onChange:function(e){return ee(e)},dynamic:!0})]})}}}]);
//# sourceMappingURL=12.6f809366.chunk.js.map