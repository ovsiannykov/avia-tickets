(this["webpackJsonpavia-app"]=this["webpackJsonpavia-app"]||[]).push([[0],{80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},90:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(18),c=a.n(n),s=(a(80),a(81),a(8)),l=a.p+"static/media/logo.4f30ccd1.png",o=a(102),d=a(99),j=a(71),b=a(103),m=a(73),u=a(98),h=a(101),p=a(100),O=(a(82),a(63),a(50)),x=a(55),v=a(97),f=a(67),_=(a(83),a(84),a(43)),N=a.n(_),g=a(1);var k=function(e){var t=e.item,a=Object(r.useState)(!1),i=Object(s.a)(a,2),n=i[0],c=i[1];return Object(g.jsxs)("div",{className:"ticket",children:[Object(g.jsxs)(v.a,{className:"ticket-card",children:[Object(g.jsxs)(f.a,{sm:3,className:"hz",children:[Object(g.jsx)("img",{src:"https://cdn.turkishairlines.com/m/397dae0cba906e9/original/CIFT-SATIR-DIKEY-TIRE-png.png",height:"120",width:"120",className:"company-logo"}),Object(g.jsxs)("div",{className:"transfer",children:[t.stops," transfer"]}),Object(g.jsx)("div",{className:"prise-btn-container",children:Object(g.jsxs)(u.a,{className:"prise-btn",onClick:function(){return c(!0)},children:["Buy ",t.price," ",t.priseName?t.priseName:"RUB"]})})]}),Object(g.jsx)(f.a,{sm:9,children:Object(g.jsxs)(v.a,{children:[Object(g.jsxs)(f.a,{sm:6,className:"departure-info",children:[Object(g.jsx)("div",{className:"departure-time time",children:t.departure_time}),Object(g.jsx)("div",{className:"departure-point point",children:t.origin_name}),Object(g.jsx)("div",{className:"departure-date date",children:t.departure_date})]}),Object(g.jsxs)(f.a,{sm:6,className:"arrival-info",children:[Object(g.jsx)("div",{className:"arrival-time time",children:t.arrival_time}),Object(g.jsx)("div",{className:"arrival-point point",children:t.destination_name}),Object(g.jsx)("div",{className:"arrival-date date",children:t.arrival_date})]})]})})]}),Object(g.jsxs)(h.a,{show:n,onHide:function(){return c(!1)},children:[Object(g.jsx)(h.a.Header,{closeButton:!0,children:Object(g.jsxs)(h.a.Title,{children:["Buy Ticket: \xa0",t.origin_name,"\xa0 \u2014\xa0"," ",t.destination_name]})}),Object(g.jsx)(h.a.Body,{children:Object(g.jsxs)(p.a,{children:[Object(g.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(g.jsx)(p.a.Label,{className:"special-label",children:"Name"}),Object(g.jsx)(p.a.Control,{type:"text",placeholder:"Your name",required:!0,minlength:"2",maxlength:"15"})]}),Object(g.jsx)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(g.jsx)(N.a,{required:!0,country:"ua",placeholder:"Phone"})}),Object(g.jsxs)(u.a,{id:"send-btn",variant:"primary",type:"submit",className:"header-btn",children:["BUY ",t.price," ",t.priseName?t.priseName:"RUB"]})]})})]})]})},T=a(2),V=a(74),y={tiket:[{origin:"VVO",origin_name:"New-York",destination:"TLV",destination_name:"Stockholm",departure_date:"12.05.21",departure_time:"16:20",arrival_date:"12.05.21",arrival_time:"22:10",carrier:"TK",stops:3,price:12400},{origin:"VVO",origin_name:"Moscow",destination:"TLV",destination_name:"Los-Angeles",departure_date:"12.05.21",departure_time:"17:20",arrival_date:"12.05.21",arrival_time:"23:50",carrier:"S7",stops:1,price:13100},{origin:"VVO",origin_name:"Berlin",destination:"TLV",destination_name:"London",departure_date:"12.05.21",departure_time:"12:10",arrival_date:"12.05.21",arrival_time:"18:10",carrier:"SU",stops:0,price:15300},{origin:"VVO",origin_name:"Pekin",destination:"TLV",destination_name:"Tokio",departure_date:"12.05.21",departure_time:"17:00",arrival_date:"12.05.21",arrival_time:"23:30",carrier:"TK",stops:2,price:11e3},{origin:"VVO",origin_name:"Kiev",destination:"TLV",destination_name:"Varshava",departure_date:"12.05.21",departure_time:"12:10",arrival_date:"12.05.21",arrival_time:"20:15",carrier:"BA",stops:3,price:13400},{origin:"VVO",origin_name:"Sidney",destination:"TLV",destination_name:"Rio",departure_date:"12.05.21",departure_time:"9:40",arrival_date:"12.05.21",arrival_time:"19:25",carrier:"SU",stops:3,price:12450},{origin:"VVO",origin_name:"Madrid",destination:"TLV",destination_name:"Tel-Aviv",departure_date:"12.05.21",departure_time:"17:10",arrival_date:"12.05.21",arrival_time:"23:45",carrier:"TK",stops:1,price:13600},{origin:"VVO",origin_name:"Dresden",destination:"TLV",destination_name:"Copenhagen",departure_date:"12.05.21",departure_time:"6:10",arrival_date:"12.05.21",arrival_time:"15:25",carrier:"TK",stops:0,price:14250},{origin:"VVO",origin_name:"Kharkiv",destination:"TLV",destination_name:"Minsk",departure_date:"12.05.21",departure_time:"16:50",arrival_date:"12.05.21",arrival_time:"23:35",carrier:"SU",stops:1,price:16700},{origin:"VVO",origin_name:"Sidney",destination:"TLV",destination_name:"Monako",departure_date:"12.05.21",departure_time:"6:10",arrival_date:"12.05.21",arrival_time:"16:15",carrier:"S7",stops:0,price:17400}]},S=function(e,t){return{type:"CHANGE_PRISE",coof:e,priseName:t}},C=function(e){return{type:"TRANSFER_SORT",value:e}},R=Object(V.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;if("SORT"===t.type){var a=e.tiket.sort((function(e,t){return e.price-t.price}));return{tiket:a}}if("CHANGE_PRISE"===t.type){var r=y.tiket.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{price:Math.round(e.price/t.coof),priseName:t.priseName})}));return{tiket:r}}if("TRANSFER_SORT"===t.type){var i=y.tiket.filter((function(e){return e.stops===t.value}));return{tiket:i}}return e})),A=a(37);var L=function(){var e=Object(A.b)(),t=Object(A.c)((function(e){return e}));return Object(r.useEffect)((function(){e({type:"SORT"})}),[e]),Object(g.jsx)(d.a,{className:"main-container",children:Object(g.jsxs)(v.a,{children:[Object(g.jsx)(f.a,{sm:5,children:Object(g.jsxs)("div",{className:"form-search-tickets",children:[Object(g.jsx)("h2",{children:"Search tickets"}),Object(g.jsxs)(v.a,{children:[Object(g.jsx)("label",{className:"your-currency",children:"Your Currency:"}),Object(g.jsx)(f.a,{children:Object(g.jsx)(u.a,{size:"lg",className:"find-btn",variant:"outline-primary",onClick:function(){e(S(1,"RUB"))},children:"RUB"})}),Object(g.jsx)(f.a,{children:Object(g.jsx)(u.a,{size:"lg",className:"find-btn",variant:"outline-primary",onClick:function(){e(S(3,"UAH"))},children:"UAH"})}),Object(g.jsx)(f.a,{children:Object(g.jsx)(u.a,{size:"lg",className:"find-btn",variant:"outline-primary",onClick:function(){e(S(74,"USD"))},children:"USD"})})]}),Object(g.jsxs)(v.a,{children:[Object(g.jsx)("label",{className:"your-currency",children:"Transfers:"}),Object(g.jsxs)("div",{className:"transers-buttons-block",children:[Object(g.jsx)(u.a,{className:"find-btn transfers-btn",onClick:function(){e(C(0))},children:"0"}),Object(g.jsx)(u.a,{className:"find-btn transfers-btn",onClick:function(){e(C(1))},children:"1"}),Object(g.jsx)(u.a,{className:"find-btn transfers-btn",onClick:function(){e(C(2))},children:"2"}),Object(g.jsx)(u.a,{className:"find-btn transfers-btn",onClick:function(){e(C(3))},children:"3"})]})]})]})}),Object(g.jsx)(f.a,{sm:7,children:t.tiket.map((function(e){return Object(g.jsx)(k,{item:e})}))},y.toString())]})})};a(90);var B=function(){return Object(g.jsx)(d.a,{className:"about-block",children:Object(g.jsxs)(v.a,{className:"about-row",children:[Object(g.jsx)(f.a,{children:Object(g.jsx)("img",{src:"https://cdn.dribbble.com/users/4479253/screenshots/12231271/git_developer_4x.jpg",alt:"about_image",className:"about-img"})}),Object(g.jsxs)(f.a,{children:[Object(g.jsx)("h1",{className:"about-title",children:"About project"}),Object(g.jsx)("p",{className:"about-text",children:"This Pet-Project was developed for educational purposes, as part of the training of React and Redux. The project does not pursue commercial goals."}),Object(g.jsxs)("div",{className:"about-author",children:["Author:\xa0",Object(g.jsx)("a",{href:"https://github.com/ovsiannykov",target:"blank",className:"about-link",children:"OVSIANNYKOV"})]})]})]})})},E=a(69),I=a(9);var P=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(g.jsxs)("div",{children:[Object(g.jsxs)(E.a,{children:[Object(g.jsx)(o.a,{collapseOnSelect:!0,expand:"md",bg:"light",variant:"light",className:"header",children:Object(g.jsxs)(d.a,{className:"header-container",children:[Object(g.jsx)(j.a,{href:"/",children:Object(g.jsx)("img",{src:l,height:"60",width:"80",className:"d-inline-block align-top",alt:"Logo"})}),Object(g.jsx)(O.a,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsxs)(x.a,{id:"responsive-navbar-nav",children:[Object(g.jsxs)(b.a,{className:"mr-auto",children:[Object(g.jsx)(m.a,{href:"/",children:"Home"}),Object(g.jsx)(m.a,{href:"/about",children:"About"})]}),Object(g.jsx)(u.a,{className:"header-btn btn-mobile-none",onClick:function(){return i(!0)},children:"CALL ME"})]})]})}),Object(g.jsxs)(I.c,{children:[Object(g.jsx)(I.a,{exact:!0,path:"/",children:Object(g.jsx)(L,{})}),Object(g.jsx)(I.a,{path:"/about",children:Object(g.jsx)(B,{})})]})]}),Object(g.jsxs)(h.a,{show:a,onHide:function(){return i(!1)},children:[Object(g.jsx)(h.a.Header,{closeButton:!0,children:Object(g.jsx)(h.a.Title,{children:Object(g.jsx)("div",{className:"modal-title",children:"Request a call"})})}),Object(g.jsx)(h.a.Body,{children:Object(g.jsxs)(p.a,{name:"modal-form",children:[Object(g.jsxs)(p.a.Group,{className:"mb-3",children:[Object(g.jsx)(p.a.Label,{className:"special-label",children:"Name"}),Object(g.jsx)(p.a.Control,{type:"text",placeholder:"Your name",required:!0,minlength:"2",maxlength:"15"})]}),Object(g.jsx)(p.a.Group,{className:"mb-3",children:Object(g.jsx)(N.a,{required:!0,country:"ua",placeholder:"Phone",id:"modal-phone-input"})}),Object(g.jsx)(u.a,{id:"send-btn",variant:"primary",type:"submit",children:"SEND"})]})})]})]})};a(94);var U=function(){return Object(g.jsx)("footer",{children:Object(g.jsx)("a",{href:"/",children:"AVIA TICKETS APP"})})};var w=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(P,{}),Object(g.jsx)(U,{})]})};var H=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(w,{})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,104)).then((function(t){var a=t.getCLS,r=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),i(e),n(e),c(e)}))};c.a.render(Object(g.jsx)(A.a,{store:R,children:Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(H,{})})}),document.getElementById("root")),K()}},[[95,1,2]]]);
//# sourceMappingURL=main.2a08992c.chunk.js.map