(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),o=n(5),s=n.n(o),i=(n(12),n(4)),l=n.n(i),u=n(6),j=n(2);n.p,n(14);var h=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),s=Object(j.a)(o,2),i=s[0],h=s[1],p=Object(a.useState)(!0),b=Object(j.a)(p,2),d=b[0],O=b[1],f=function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("btn pressed"),e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&appid=").concat("232909a388e5ff0acd1c8a18bd2a5176"));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c),r(c),console.log("PErsonal ",i),console.log("arry data: ",n),O(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{style:{fontSize:"3em"},children:" Weather App "}),Object(c.jsx)("h1",{children:"City Name"}),Object(c.jsx)("input",{type:"text",placeholder:"Enter City Name",value:i,onChange:function(e){h(e.target.value),console.log(e.target.value)}}),Object(c.jsx)("button",{onClick:f,children:"Done"}),d?Object(c.jsx)("h1",{children:" Searching..."}):Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:["City Name: ",n.name]}),Object(c.jsxs)("h3",{children:["Temperature: ",Math.floor(n.main.temp-273.15)," ",Object(c.jsx)("sup",{children:"o"}),"C"]})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.22669774.chunk.js.map