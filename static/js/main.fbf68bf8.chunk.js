(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),l=n.n(o),c=(n(10),n(1)),i=function(){return r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous"})},s={width:500},u=(n(11),function(e){return r.a.createElement("header",{className:"App-header"},e.children)}),d=function(e){return r.a.createElement("form",null,e.children)},m=function(e){var t=e.disabled,n=void 0!==t&&t,a=e.onChange,o=e.title,l=e.value;return r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon3"},o)),r.a.createElement("input",{className:"form-control",style:s,type:"text",value:l,onChange:a,disabled:n}))},p=function(e){var t=e.text,n=e.disabled,a=e.onClick;return r.a.createElement("button",{className:"btn btn-secondary",disabled:n,onClick:a,type:"button"},t)},b=function(e){return e.disabled?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},h="Peter please answer the following question",v=["I don't know...","I won't answer...","Who cares?","You are becoming annoying..","If you don't ask properly, I will never answer"];var f=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(""),s=Object(c.a)(l,2),f=s[0],g=s[1],E=Object(a.useState)(!1),w=Object(c.a)(E,2),y=w[0],O=w[1],k=Object(a.useState)(!1),j=Object(c.a)(k,2),N=j[0],x=j[1],C=Object(a.useState)(""),I=Object(c.a)(C,2),M=I[0],S=I[1];return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(u,null,r.a.createElement(d,null,r.a.createElement(m,{disabled:N,onChange:function(e){var t=e.target.value,a=t.length-1,r=t[a],l="."===r,c=t;return l&&O(!y),(l||y)&&(c=n+(h[a]||" "),g(l?f:f+r)),o(c)},title:"Petition",value:n}),r.a.createElement(m,{disabled:N,title:"Question"}),r.a.createElement(p,{disabled:N,onClick:function(){x(!0),S("");var e=function(){if(0===f.length){var e=Math.floor(Math.random()*v.length);return v[e]}return f}();setTimeout(function(){x(!1),S(e),g("")},1500)},text:"Ask"})),r.a.createElement(b,{disabled:!N}),r.a.createElement("div",null,r.a.createElement("h4",null,M))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.fbf68bf8.chunk.js.map