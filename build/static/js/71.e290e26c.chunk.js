(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[71],{680:function(t,e,o){"use strict";var r=o(56),a=o(182),n=(o(1),o(675)),s=o(676),i=o(18),c=["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],l=function(t){var e=t.borderColor,o=t.backgroundColor,l=t.pointHoverBackgroundColor,d=t.dataPoints,u=t.label,b=t.pointed,p=Object(a.a)(t,c),j=l||("transparent"!==o?o:e),g=[{data:d,borderColor:Object(n.getColor)(e),backgroundColor:Object(n.getColor)(o),pointBackgroundColor:Object(n.getColor)(j),pointHoverBackgroundColor:Object(n.getColor)(j),label:u}],h={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,d)-5,max:Math.max.apply(Math,d)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},x={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},O=function(){var t=b?h:x;return Object.assign({},t,{maintainAspectRatio:!1,legend:{display:!1}})}(),m=Object(n.deepObjectsMerge)(g,p.datasets||{}),f=Object(n.deepObjectsMerge)(O,p.options||{});return Object(i.jsx)(s.c,Object(r.a)(Object(r.a)({},p),{},{datasets:m,options:f,labels:u}))};l.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},e.a=l},688:function(t,e,o){"use strict";o.r(e);var r=o(664),a=o(128),n=o(665),s=o.n(n),i=o(1),c=o.n(i),l=o(661),d=o(100),u=o(663),b=(o(669),o(680),o(679),o(18));e.default=function(){var t=c.a.useContext(d.b),e=t.user,o=t.setLoad,n=c.a.useState(0),i=Object(a.a)(n,2),p=i[0],j=i[1],g=c.a.useState(0),h=Object(a.a)(g,2),x=h[0],O=h[1],m=c.a.useState(0),f=Object(a.a)(m,2),C=f[0],y=f[1],k=c.a.useState(0),v=Object(a.a)(k,2),S=v[0],B=v[1];return c.a.useEffect((function(){function t(){return(t=Object(r.a)(s.a.mark((function t(){var r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,fetch(u.c+"fetchTotalCount",{method:"GET",headers:{Authorization:null===e||void 0===e?void 0:e.token}});case 3:if(!0!==(r=t.sent).ok){t.next=10;break}return t.next=7,r.json();case 7:a=t.sent,o(!1),200===a.status?(j(a.customer_count),O(a.party_count),y(a.category_count),B(a.product_count)):alert(a.message);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(b.jsxs)(l.ub,{children:[Object(b.jsx)(l.u,{sm:"6",lg:"6",children:Object(b.jsx)(l.Sb,{color:"primary",header:"Customers",style:{paddingBottom:30},text:p.toString()})}),Object(b.jsx)(l.u,{sm:"6",lg:"6",children:Object(b.jsx)(l.Sb,{color:"info",header:"Products",style:{paddingBottom:30},text:S.toString()})}),Object(b.jsx)(l.u,{sm:"6",lg:"6",children:Object(b.jsx)(l.Sb,{color:"warning",header:"Parties",style:{paddingBottom:30},text:x.toString()})}),Object(b.jsx)(l.u,{sm:"6",lg:"6",children:Object(b.jsx)(l.Sb,{color:"gradient-primary",header:"Categories",style:{paddingBottom:30},text:C.toString()})})]})}}}]);
//# sourceMappingURL=71.e290e26c.chunk.js.map