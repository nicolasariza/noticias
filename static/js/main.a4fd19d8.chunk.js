(this.webpackJsonpnoticias=this.webpackJsonpnoticias||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),l=t.n(c),o=t(3),s=t.n(o),i=t(6),u=t(1),m=function(e){var a=e.titulo;return r.a.createElement("nav",{className:"nav-wrapper light-blue darken-3 s12 m12 l12"},r.a.createElement("a",{href:"#!",className:"brand-logo center"},a))},v=t(2),d=t.n(v),f=function(e,a){var t=Object(n.useState)(e),c=Object(u.a)(t,2),l=c[0],o=c[1];return[l,function(){return r.a.createElement("select",{className:"browser-default",onChange:function(e){return o(e.target.value)},value:l},a.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))}]},b=function(e){var a=e.setCategoria,t=f("general",[{value:"general",label:"General"},{value:"technology",label:"Tecnolog\xeda"},{value:"sports",label:"Deportes"},{value:"health",label:"Salud"},{value:"business",label:"Negocios"}]),n=Object(u.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{className:"".concat(d.a.buscador," row")},r.a.createElement("div",{className:"col s12 m8 offset-m2"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(c)}},r.a.createElement("h2",{className:d.a.heading},"Encuentra noticias por categor\xeda"),r.a.createElement(l,null),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"submit",className:"".concat(d.a["btn-block"]," btn-large amber darken-2"),value:"Buscar"})))))},E=function(e){var a=e.noticia,t=a.urlToImage,n=a.url,c=a.title,l=a.description,o=a.source,s=t?r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:t,alt:c}),r.a.createElement("span",{className:"card-title"},o.name)):null;return r.a.createElement("div",{className:"col s12 m6 l4"},r.a.createElement("div",{className:"card"},s,r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,c),r.a.createElement("p",null,l)),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"waves-effect waves-light btn"},"Ver noticia completa"))))},p=function(e){var a=e.noticias;return r.a.createElement("div",{className:"row "},a.map((function(e){return r.a.createElement(E,{key:e.url,noticia:e})})))};var h=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),o=Object(u.a)(l,2),v=o[0],d=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://newsapi.org/v2/top-headlines?category=".concat(t,"&country=co&apiKey=176cef8317e94f059318b3ee7e643ac6"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,d(r.articles);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement(n.Fragment,null,r.a.createElement(m,{titulo:"Noticias"}),r.a.createElement("div",{className:"container white s12"},r.a.createElement(b,{setCategoria:c}),r.a.createElement(p,{noticias:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},2:function(e,a,t){e.exports={heading:"Formulario_heading__2Uh5B",buscador:"Formulario_buscador__2yER3","btn-block":"Formulario_btn-block__3rlJs"}},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.a4fd19d8.chunk.js.map