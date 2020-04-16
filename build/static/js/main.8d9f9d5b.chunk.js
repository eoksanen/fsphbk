(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(39)},19:function(e,n,t){},20:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),l=t.n(o),c=(t(19),t(2)),u=(t(20),t(21),function(e){var n=e.addPerson,t=e.newName,a=e.newNumber,o=e.handleNameChange,l=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{type:"text",value:t,onChange:o})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:l})),r.a.createElement("button",{type:"submit"},"add"))}),i=function(e){var n=e.person,t=e.deleteContact;return r.a.createElement("tr",null,r.a.createElement("td",null,n.name),r.a.createElement("td",null,n.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:t},"delete")))},m=function(e){var n=e.filteredContacts,t=e.deletePersonOf;return r.a.createElement("table",{className:"listOfContacts"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name:"),r.a.createElement("td",null,"Number:"))),r.a.createElement("tbody",null,n().map((function(e,n){return r.a.createElement(i,{key:n,person:e,deleteContact:function(){return t(e.id)}})}))))},s=function(e){var n=e.filter,t=e.handleFilter;return r.a.createElement("form",null,"Filter: ",r.a.createElement("input",{value:n,onChange:t}))},d=t(3),f=t.n(d),h="/api/persons",v=function(){return f.a.get(h).then((function(e){return e.data}))},p=function(e){return f.a.post(h,e).then((function(e){return e.data}))},b=function(e,n,t){return f.a.put("".concat(h,"/").concat(e),n).catch((function(e){return t(["Cannot update person was removed from server","error"]),setTimeout((function(){t([null])}),5e3),Promise.reject()})).then((function(e){return e.data}))},E=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Phonebook app, Department of Computer Science, University of Helsinki 2020"))};var w=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],l=Object(a.useState)("Mickhael"),i=Object(c.a)(l,2),d=i[0],f=i[1],h=Object(a.useState)(""),w=Object(c.a)(h,2),C=w[0],O=w[1],k=Object(a.useState)(""),N=Object(c.a)(k,2),j=N[0],y=N[1],S=Object(a.useState)([null]),P=Object(c.a)(S,2),x=P[0],T=P[1];Object(a.useEffect)((function(){v().then((function(e){console.log("promise fulfilled"),o(e)}))}),[]);var F=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:n[1]},n[0])};return r.a.createElement("div",null,r.a.createElement(F,{message:x}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(s,{filter:j,handleFilter:function(e){console.log("filter: ",e.target.value),y(e.target.value)}}),r.a.createElement("h2",null,"add new"),r.a.createElement(u,{addPerson:function(e){e.preventDefault();var n={name:d,number:C};if(t.map((function(e){return e.name})).indexOf(d)>0&&console.log("test Index ",t.map((function(e){return e.name})).indexOf(d)),t.map((function(e){return e.name})).indexOf(d)<0)p(n).then((function(e){o(t.concat(e)),f(""),O(""),T(["'".concat(e.name,"' added to server"),"add"]),setTimeout((function(){T([null])}),5e3)})).catch((function(e){T([e.response.data.error,"error"]),setTimeout((function(){T([null])}),5e3),console.log(e.response.data.error)}));else if(window.confirm("".concat(d," is already added to the phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===d}));b(a.id,n,T).then((function(e){o(t.map((function(n){return n.id!==a.id?n:e})))})),T(["successfully updated contact","update"]),setTimeout((function(){T([null])}),5e3)}},newName:d,newNumber:C,handleNameChange:function(e){console.log("name: ",e.target.value),f(e.target.value)},handleNumberChange:function(e){console.log("number: ",e.target.value),O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{filteredContacts:function(){return t.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}))},deletePersonOf:function(e){var n=t.find((function(n){return n.id===e}));console.log("person ".concat(e," needs to be deleted")),window.confirm("are u sure u want to remove ".concat(n.name,"?"))&&(E(e).catch((function(e){T(["Person '".concat(n.name,"' was already removed from server"),"error"]),setTimeout((function(){T([null])}),5e3)})),o(t.filter((function(n){return n.id!==e})))),T(["'".concat(n.name,"' removed from server"),"remove"]),setTimeout((function(){T([null])}),5e3)}}),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.8d9f9d5b.chunk.js.map