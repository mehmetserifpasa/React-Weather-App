(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var c=a(15),n=a(6),r=a.n(n),s=a(16),i=a(19),o=a(2),u=a(17),l=a.n(u),p=a(18),b=a(0),d=function(e){var t=e.weather;return t?Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h3",{className:"box__name",children:t.name}),Object(b.jsx)("h4",{className:"box__state",children:t.weather.map((function(e){return e.description})).join(", ")}),Object(b.jsxs)("p",{className:"box__temp",children:[t.main.temp," \xb0C"]}),Object(b.jsx)("p",{className:"box__date",children:new Date(1e3*t.dt).toLocaleDateString()})]}):Object(b.jsx)("h1",{className:"loading",children:"Y\xdcKLEN\u0130YOR..."})},j=function(){var e=Object(o.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(p.usePosition)(),u=n.latitude,j=n.longitude,h=function(){var e=Object(s.a)(r.a.mark((function e(t,a){var n,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"41bf076b7171dff613d6a0e0fec57fce",n=navigator.language.split("-")[0],e.prev=2,e.next=5,l.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&appid=").concat("41bf076b7171dff613d6a0e0fec57fce","&lang=").concat(n,"&units=metric"));case 5:s=e.sent,i=s.data,c(i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert("Veri al\u0131n\u0131rken hata olu\u015ftu.");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){u&&j&&h(u,j)}),[u,j]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"title",children:"Hava durumu"}),Object(b.jsx)(d,{weather:a})]})},h=(a(44),document.querySelector("#root"));Object(c.render)(Object(b.jsx)(j,{}),h)}},[[45,1,2]]]);
//# sourceMappingURL=main.508a0291.chunk.js.map