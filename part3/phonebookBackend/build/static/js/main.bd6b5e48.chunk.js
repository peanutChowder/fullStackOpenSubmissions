(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(52)},28:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(18),c=t.n(o),u=t(2),l=(t(28),t(4)),s=t.n(l),i="https://jf-phonebook.fly.dev/api/persons",m={getAll:function(){return s.a.get(i).then(function(e){return e.data})},getPerson:function(e){return s.a.get("".concat(i,"/").concat(e)).then(function(e){return e.data})},create:function(e){return s.a.post(i,e).then(function(e){return e.data})},update:function(e,n){return s.a.put("".concat(i,"/").concat(e),n).then(function(e){return e.data})},delPerson:function(e){return s.a.delete("".concat(i,"/").concat(e)).then(function(e){return e.data})}},d=function(e){var n=e.displayedPeople,t=e.persons,a=e.setPersons;return console.log("Current people: ".concat(n.map(function(e){return"name: ".concat(e.name,", id: ").concat(e.id," |")}))),n.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("span",null,e.name," ",e.number),r.a.createElement("input",{type:"submit",value:"delete",onClick:function(){return function(e){if(window.confirm("Delete ".concat(e.name,"?"))){var n=t.filter(function(n){return n.id!==e.id});console.log("Deleting person '".concat(e.name,"' with id ").concat(e.id)),m.delPerson(e.id),a(n)}}(e)}}))})},f=t(19),p=function(e){var n=e.persons,t=e.setPersons,a=e.newName,o=e.setNewName,c=e.newNumber,u=e.setNewNumber,l=e.addPersonToServer,s=e.updatePerson,i=e.setDisplayMsg,m=e.setDisplayType;return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),n.some(function(e){return e.name===a})){if(!window.confirm("".concat(a," is already added to phonebook, replace the old number with a new one?")))return;var r=n.find(function(e){return e.name===a}),d=Object(f.a)({},r,{number:c});s(d.id,d).then(function(e){console.log(e),t(n.map(function(e){return e.name===a?d:e}))}).catch(function(e){m("error"),i("Information of ".concat(a," has already been removed from server!"))})}else l({name:a,number:c}).then(function(e){console.log(e),t(n.concat(e)),m("message"),i("Added ".concat(e.name))});o(""),u("")}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:a,onChange:function(e){console.log(e.target.value),o(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:c,onChange:function(e){u(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},b=function(e){var n=e.setSearchTerm,t=e.searchTerm;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:t,onChange:function(e){n(e.target.value)}}))},h=function(e){var n=e.message,t=e.displayType;return""===n?null:r.a.createElement("div",{className:t},n)},v=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),s=l[0],i=l[1],f=Object(a.useState)(""),v=Object(u.a)(f,2),g=v[0],w=v[1],E=Object(a.useState)(""),y=Object(u.a)(E,2),j=y[0],P=y[1],N=Object(a.useState)(""),O=Object(u.a)(N,2),S=O[0],T=O[1],k=Object(a.useState)("message"),C=Object(u.a)(k,2),D=C[0],A=C[1],M=""===j?t:t.filter(function(e){return e.name.toLowerCase().includes(j.toLowerCase())});return Object(a.useEffect)(function(){console.log("Effect"),m.getAll().then(function(e){console.log("Promise Fufilled"),o(e)})},[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(h,{message:S,displayType:D}),r.a.createElement(b,{setSearchTerm:P,searchTerm:j}),r.a.createElement("h2",null,"add a new"),r.a.createElement(p,{persons:t,setPersons:o,newName:s,setNewName:i,newNumber:g,setNewNumber:w,addPersonToServer:m.create,updatePerson:m.update,setDisplayMsg:T,setDisplayType:A}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{displayedPeople:M,persons:t,setPersons:o}))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)))}},[[20,2,1]]]);
//# sourceMappingURL=main.bd6b5e48.chunk.js.map