(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[31],{668:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(661),r=(n(1),n(18));function c(e){var t=e.modal,n=e.setModal,c=e.deleteEntry;return Object(r.jsx)("div",{className:"delete_modal_box",children:Object(r.jsxs)(a.eb,{show:t,onClose:n,children:[Object(r.jsx)(a.hb,{closeButton:!0}),Object(r.jsxs)(a.fb,{className:"delete_modal_body",children:[Object(r.jsx)("p",{children:" Are you sure you want to delete this record ?"}),Object(r.jsxs)("div",{className:"btn-div-modal-group delete_modal_Btns",children:[Object(r.jsx)("button",{onClick:function(){return c()},className:"delete_modal_yes_Btn",children:"Yes, Approve"}),Object(r.jsx)("button",{className:"btn btn-primary delete_modal_cancel_Btn",color:"secondary",onClick:function(){return n(!1)},children:"Cancel"})]})]})]})})}},832:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n(664),r=n(128),c=n(665),s=n.n(c),o=n(1),i=n.n(o),u=n(672),l=n.n(u),m=n(181),d=n(663),f=n(667),p=n(100),b=n(668),h=n(18);function j(){var e=i.a.useState(null),t=Object(r.a)(e,2),n=t[0],c=t[1],u=i.a.useState(!1),j=Object(r.a)(u,2),x=j[0],_=j[1],y=i.a.useContext(p.b),v=y.user,O=y.setLoad,k=i.a.useState(0),g=Object(r.a)(k,2),N=g[0],w=g[1],A=i.a.useState([]),z=Object(r.a)(A,2),C=z[0],E=z[1];i.a.useEffect((function(){function e(){return(e=Object(a.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.c+"fetchUserList",{method:"GET",headers:{Authorization:null===v||void 0===v?void 0:v.token}});case 2:if(!0!==(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:n=e.sent,O(!1),200===n.status&&(E(n.list.map((function(e,t){return{"#":t+1,id:e.id,name:e.name,email:e.email,role:2===e.role?"Admin":"Accountant",company_name:e.company_name}}))),w(parseInt(n.total_records)));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O(!0),function(){e.apply(this,arguments)}()}),[]);var U=[{key:"#",text:"#",className:"#",sortable:!1},{key:"name",text:"User Name",className:"name",sortable:!0},{key:"email",text:"Email",className:"email",sortable:!0},{key:"company_name",text:"Company Name",className:"company_name",sortable:!0},{key:"role",text:"Role",className:"role",sortable:!0},{key:"action",text:"Action",className:"action",width:100,sortable:!1,cell:function(e){return Object(h.jsxs)(o.Fragment,{children:[Object(h.jsx)(m.b,{to:"/edit/user/".concat(e.id),style:{marginRight:"5px"},children:Object(h.jsx)("i",{className:"fa fa-pencil mr-1"})}),Object(h.jsx)("i",{style:{cursor:"pointer"},onClick:function(){return L(e.id)},class:"fa fa-trash","aria-hidden":"true"})]})}}],L=function(e){c(e),_(!0)};function S(){return(S=Object(a.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch(d.c+t,{method:"GET",headers:{Authorization:null===v||void 0===v?void 0:v.token}});case 3:if(!0!==(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:a=e.sent,O(!1),200===a.status?(E(a.list.map((function(e,t){return{"#":t+1,id:e.id,name:e.name,email:e.email,role:2===e.role?"Admin":"Accountant",company_name:e.company_name}}))),w(parseInt(a.total_records))):f.b.error(a.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(e){var t="fetchUserList?page_number=".concat(e.page_number,"&page_size=").concat(e.page_size,"&filter_value=").concat(e.filter_value);if(e.sort_order){var n=JSON.stringify(e.sort_order);t="fetchUserList?page_number=".concat(e.page_number,"&page_size=").concat(e.page_size,"&filter_value=").concat(e.filter_value,"&sort_order=").concat(n)}!function(e){S.apply(this,arguments)}(t)};return Object(h.jsxs)("section",{children:[Object(h.jsx)(f.a,{}),Object(h.jsx)(b.a,{modal:x,setModal:_,deleteEntry:function(){function e(){return e=Object(a.a)(s.a.mark((function e(){var t,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.c+"deleteuser/"+n,{method:"GET",headers:{Authorization:null===v||void 0===v?void 0:v.token}});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,O(!1),200===r.status?(o=function(){var e=Object(a.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.c+"fetchUserList",{method:"GET",headers:{Authorization:null===v||void 0===v?void 0:v.token}});case 2:if(!0!==(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:n=e.sent,O(!1),200===n.status&&(E(n.list.map((function(e,t){return{"#":t+1,id:e.id,name:e.name,email:e.email,role:2===e.role?"Admin":"Accountant",company_name:e.company_name}}))),w(parseInt(n.total_records)));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_(!1),c(""),o()):f.b.error(r.message);case 8:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}O(!0),function(){e.apply(this,arguments)}()}}),Object(h.jsx)(m.b,{className:"btn btn-primary float-right",to:"/create/user",children:"Create User"}),Object(h.jsx)(l.a,{config:{page_size:10,length_menu:[10,20,50],button:{excel:!1,print:!1,extra:!1}},records:C,columns:U,total_record:N,onChange:function(e){return B(e)},dynamic:!0})]})}}}]);
//# sourceMappingURL=31.9e847e8e.chunk.js.map