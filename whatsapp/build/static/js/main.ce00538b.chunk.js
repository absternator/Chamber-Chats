(this.webpackJsonpwhatsapp=this.webpackJsonpwhatsapp||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},138:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),l=a.n(r),o=(a(101),a(5)),i=(a(102),a(31)),s=a.n(i),u=a(43),m=a(39),d=(a(104),a(179)),h=a(73),f=a.n(h);var E=function(e){var t=e.message,a=e.userValue,r=e.deleteState,l=e.addDeleted,i=e.removeDeleted,s=Object(n.useState)(""),u=Object(o.a)(s,2),m=u[0],h=u[1],E=Object(n.useState)(!1),b=Object(o.a)(E,2),g=b[0],v=b[1];Object(n.useEffect)((function(){r||(h(""),v(!1))}),[m,r]);var p=new Date(t.createdAt);return c.a.createElement("p",{className:"chat-message ".concat((null===a||void 0===a?void 0:a.displayName)===t.name&&"chat-reciever")},(null===a||void 0===a?void 0:a.displayName)===t.name&&r&&c.a.createElement(d.a,{className:!g&&"unchecked-color",size:"small",checkedIcon:c.a.createElement(f.a,null),inputProps:{"aria-label":"uncontrolled-checkbox"},value:t._id,checked:g,onChange:function(e){var t=e.target,a=t.value,n=t.checked;v(n),n?(h(a),l(a)):(i(a),h(""))}}),c.a.createElement("span",{className:"chat-name"},t.name),t.message,c.a.createElement("span",{className:"chat-timestamp"},p.getDay()!==(new Date).getDay()?p.toLocaleString().slice(0,-3):p.toLocaleTimeString().slice(0,-3)))},b=a(181),g=a(180),v=a(169),p=a(74),j=a.n(p),O=a(170);var C=function(e){var t=e.chatName,a=e.messages,r=e.handleDelete,l=e.searchedMessage,i=Object(n.useState)(""),s=Object(o.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)("..."),h=Object(o.a)(d,2),f=h[0],E=h[1],p=Object(n.useState)(!1),C=Object(o.a)(p,2),y=C[0],S=C[1],N=Object(n.useState)([]),w=Object(o.a)(N,2),k=w[0],D=w[1];function x(e){e.preventDefault(),l(k,!0)}return Object(n.useEffect)((function(){m(Math.floor(5e3*Math.random())),E((function(e){if(void 0===a||0===a.length)return e;var t=new Date(a[a.length-1].createdAt);return t.getDay()!==(new Date).getDay()?t.toLocaleString().slice(0,-3):t.toLocaleTimeString().slice(0,-3)}))}),[t,a]),c.a.createElement("div",{className:"chat-header"},c.a.createElement(g.a,{src:"https://avatars.dicebear.com/api/human/".concat(u,".svg")}),c.a.createElement("div",{className:"chat-header-info"},c.a.createElement("h3",null,t),c.a.createElement("p",null,"last seen at ",f)),c.a.createElement("div",{className:"chat-header-right"},y?c.a.createElement(O.a,{onClickAway:function(){S(!1),D(""),l(k,!1)}},c.a.createElement("form",{onSubmit:x},c.a.createElement("div",{className:"sidebar-search-container"},c.a.createElement(v.a,{onClick:x},c.a.createElement(b.a,null)),c.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;D(t.toLowerCase())},value:k,autoFocus:!0})))):c.a.createElement("div",{className:"chat-header-right"},c.a.createElement(v.a,{onClick:function(){S(!y)}},c.a.createElement(b.a,null)),c.a.createElement(v.a,{onClick:function(){r()}},c.a.createElement(j.a,null)))))},y=a(78),S=a.n(y),N=a(79),w=a.n(N),k=a(172),D=a(171),x=a(173),A=a(75),I=a.n(A).a.create({baseURL:"https://quiet-mesa-25509.herokuapp.com"}),L=a(76),M=a.n(L),V=a(77),_=a.n(V),P=Object(D.a)((function(e){return{button:{marginLeft:".5vw"}}}));var T=function(e){var t=e.chatName,a=e.userValue,r=P(),l=Object(n.useState)(""),i=Object(o.a)(l,2),m=i[0],d=i[1],h=function(){var e=Object(u.a)(s.a.mark((function e(n){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=(c=m.toString()).replace(","," "),console.log(c),e.next=6,I.post("/messages/new",{name:null===a||void 0===a?void 0:a.displayName,message:c,chatName:t}).then((function(e){return console.log(e.data)}));case 6:d("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=Object(n.useState)(!1),E=Object(o.a)(f,2),b=E[0],g=E[1];return c.a.createElement("div",{className:"chat-footer"},c.a.createElement(v.a,{onClick:function(){return g(!b)}},c.a.createElement(S.a,null)),b&&c.a.createElement(M.a,{onEmojiClick:function(e,t){d((function(e){return e+" "+t.emoji+" "}))},disableSearchBar:"true"}),c.a.createElement("form",null,c.a.createElement("input",{type:"text",placeholder:"Type a message",onChange:function(e){var t=e.target.value;d(t)},value:m}),c.a.createElement(k.a,{variant:"outlined",size:"small",className:r.button,endIcon:c.a.createElement(x.a,null,"send"),type:"submit",onClick:h},"Send")),c.a.createElement(_.a,{className:"my-dictate-button",grammar:"#JSGF V1.0; grammar districts; public <district> = Tuen Mun | Yuen Long;",onDictate:function(e){var t=e.result;void 0===t?(console.log(typeof t),alert("Error: couldnt recognize speech")):(d(null===t||void 0===t?void 0:t.transcript),console.log(null===t||void 0===t?void 0:t.confidence))},onProgress:function(){},onError:function(e){console.log(e)}},c.a.createElement(w.a,null)))},U=a(80),G=a.n(U),R=a(8),z=a(81),J=a.n(z);var B=function(e){var t=e.userValue,a=Object(R.f)().chatId,r=Object(n.useState)(""),l=Object(o.a)(r,2),i=l[0],d=l[1],h=Object(n.useState)(!1),f=Object(o.a)(h,2),b=f[0],g=f[1],v=Object(n.useState)([]),p=Object(o.a)(v,2),j=p[0],O=p[1];Object(n.useEffect)((function(){a&&I.get("/chat/sync/"+a).then((function(e){d(e.data.name)})).catch((function(e){console.log(e)}))}),[a]);var y=Object(n.useState)([]),S=Object(o.a)(y,2),N=S[0],w=S[1];function D(e){O((function(t){return[].concat(Object(m.a)(t),[e])}))}function x(e){O((function(t){return t.filter((function(t){return e!==t}))}))}function A(){return(A=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(j),e.next=3,I.post("/messages/delete",j).then((function(e){console.log(e),g(!1),O([])})).catch((function(e){console.log(e),alert("Refresh before attempting to delete"),g(!1),O([])}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){I.get("/messages/sync").then((function(e){w((function(){return e.data.filter((function(e){return e.chatName===i}))}))})).catch((function(e){console.log(e)}))}),[i]),Object(n.useEffect)((function(){var e=new G.a("903ce939fb72109083a5",{cluster:"ap1"}).subscribe("messages");return e.bind("inserted",(function(e){w([].concat(Object(m.a)(N),[e]))})),e.bind("deleted",(function(e){console.log(e),w((function(t){return t.filter((function(t){return t._id!==e._id}))}))})),function(){e.unbind_all(),e.unsubscribe()}}),[N]),Object(n.useEffect)((function(){document.querySelector(".chat-body").scrollTop=document.querySelector(".chat-body").scrollHeight}),[]);var L=Object(n.useState)(!1),M=Object(o.a)(L,2),V=M[0],_=M[1],P=Object(n.useState)(""),U=Object(o.a)(P,2),z=U[0],B=U[1];return c.a.createElement("div",{className:"chat"},b&&c.a.createElement(k.a,{variant:"contained",color:"secondary",onClick:function(){return A.apply(this,arguments)},startIcon:c.a.createElement(J.a,null)},"Delete"),c.a.createElement(C,{chatName:i,messages:N,handleDelete:function(){g(!b)},searchedMessage:function(e,t){_(t),B(e),console.log(e)}}),c.a.createElement("div",{className:"chat-body"},V?c.a.createElement("div",{className:"chat-body-search"},c.a.createElement("h1",null,"Matched search messages"),c.a.createElement("br",null),N.map((function(e,a){return e.message.toLowerCase().includes(z)&&c.a.createElement(E,{userValue:t,message:e,key:a,deleteState:b,addDeleted:D,removeDeleted:x})}))):N.map((function(e,a){return c.a.createElement(E,{userValue:t,message:e,key:a,deleteState:b,addDeleted:D,removeDeleted:x})}))),c.a.createElement(T,{userValue:t,chatName:i}))},F=(a(132),a(85)),W=a.n(F),q=(a(133),a(28)),H=a(82),Y=a.n(H),K=a(55),Q=a.n(K),Z=a(178),$=a(177),X=a(175),ee=a(176),te=a(174);var ae=function(e){var t=e.name,a=e.id,r=e.deleteChat,l=e.showEditChat,i=Object(n.useState)(""),s=Object(o.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),f=h[0],E=h[1],b=Object(n.useState)(!1),p=Object(o.a)(b,2),j=p[0],C=p[1],y=Object(n.useState)(""),S=Object(o.a)(y,2),N=S[0],w=S[1],D=Object(n.useState)(!1),x=Object(o.a)(D,2),A=x[0],L=x[1],M=function(){L(!1)};function V(e){e.preventDefault(),I.patch("/chats/update/"+a,{oldChatName:t,newChatName:N}).then((function(e){console.log(e),C(!1),w(""),l()})).catch((function(e){console.log(e),C(!1),w("")}))}return Object(n.useEffect)((function(){m(Math.floor(5e3*Math.random())),I.get("/messages/sync").then((function(e){var a=e.data.filter((function(e){return e.chatName===t}));E(a[a.length-1])})).catch((function(e){return console.log(e)}))}),[t]),c.a.createElement(q.b,{to:"/chats/".concat(a),className:"link"},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(g.a,{src:"https://avatars.dicebear.com/api/human/".concat(u,".svg")}),c.a.createElement("div",{className:"sidebarChat-info"},c.a.createElement("h2",null,t),c.a.createElement("p",null,null===f||void 0===f?void 0:f.name,": ",null===f||void 0===f?void 0:f.message)),c.a.createElement("div",{className:"sidebarChat-icons"},j?c.a.createElement(O.a,{onClickAway:function(){C(!1),w("")}},c.a.createElement("form",{onSubmit:V},c.a.createElement("div",{className:"sidebar-search-container"},c.a.createElement(v.a,{onClick:V},c.a.createElement(Q.a,null)),c.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;w(t)},value:N,autoFocus:!0})))):c.a.createElement(v.a,{onClick:function(){C(!0)}},c.a.createElement(Q.a,null)),c.a.createElement("div",{className:"sidebar-chat-delete"},c.a.createElement(v.a,{onClick:function(){L(!0)}},c.a.createElement(Y.a,null)),c.a.createElement(Z.a,{open:A,onClose:M,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},c.a.createElement(te.a,{id:"alert-dialog-title"},"Are you sure you want to delete ".concat(t," Chat for yourself?")),c.a.createElement(X.a,null,c.a.createElement(ee.a,{id:"alert-dialog-description"},"Warning chat visbility would be deleted but all the message contents remain.Click on ",c.a.createElement("strong",null,"add new chat")," and type"," ",c.a.createElement("em",null,t)," to redo action. Click on ",c.a.createElement("em",null,"ACCEPT")," to delete or ",c.a.createElement("em",null)," DISAGREE to go back.")),c.a.createElement($.a,null,c.a.createElement(k.a,{onClick:M,variant:"outlined",color:"primary"},"Disagree"),c.a.createElement(k.a,{onClick:function(){I.delete("/chats/delete/"+a).then((function(e){console.log(e),r(a),L(!1)})).catch((function(e){console.log(e)}))},variant:"outlined",color:"secondary",autoFocus:!0},"Agree")))))))},ne=a(40);var ce=function(e){var t=e.addChat,a=Object(n.useState)({}),r=Object(o.a)(a,2),l=r[0],i=r[1];return c.a.createElement("div",{onClick:function(){var e=prompt("Please enter name for chat");e&&I.post("/chat/new",{name:e}).then((function(e){i(Object(ne.a)({},e.data)),t(l)})).catch((function(e){console.log(e),alert("Cannot create Chat with existing name")}))},className:"sidebarChat addNewChat"},c.a.createElement("h2",null,"Add a new Chat"))},re=a(83),le=a.n(re),oe=a(48),ie=a.n(oe),se=(a(136),ie.a.initializeApp({apiKey:"AIzaSyDJA3-_lSZTP8Iv5jnMGxHchiQfacOn_UU",authDomain:"whatsapp-clone-25e68.firebaseapp.com",databaseURL:"https://whatsapp-clone-25e68.firebaseio.com",projectId:"whatsapp-clone-25e68",storageBucket:"whatsapp-clone-25e68.appspot.com",messagingSenderId:"277063334087",appId:"1:277063334087:web:90583053c7ec6c7b8166e2",measurementId:"G-S5Y9JGB06J"}),ie.a.auth()),ue=new ie.a.auth.GoogleAuthProvider,me=a(84),de=a.n(me);var he=function(e){var t=e.userValue,a=Object(n.useState)([]),r=Object(o.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),d=u[0],h=u[1];Object(n.useEffect)((function(){I.get("/chat/sync").then((function(e){i(e.data)})).catch((function(e){console.log(e)}))}),[l.length,d]);var f=Object(n.useState)(!1),E=Object(o.a)(f,2),b=E[0],p=E[1],j=Object(n.useState)([]),C=Object(o.a)(j,2),y=C[0],S=C[1];function N(e){i((function(t){return t.filter((function(t){return t._id!==e}))}))}function w(){h(!d)}return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar-header"},c.a.createElement(g.a,{src:null===t||void 0===t?void 0:t.photoURL,alt:"display-image"}),c.a.createElement("div",{className:"sidebar-header-right"},c.a.createElement(v.a,{onClick:function(){se.signOut().then((function(){return console.log("Signed out")})).catch((function(e){return console.log(e)})),window.location="/"}},c.a.createElement(le.a,null),c.a.createElement("strong",null,"Logout")))),b?c.a.createElement("div",{className:"sidebar-fix"},c.a.createElement(O.a,{onClickAway:function(){p(!1),S("")}},c.a.createElement("div",{className:"sidebar-search"},c.a.createElement("div",{className:"sidebar-search-container"},c.a.createElement(v.a,{onClick:function(){p(!1),S("")}},c.a.createElement(de.a,null)),c.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;S(t.toLowerCase())},value:y,autoFocus:!0})))),c.a.createElement("div",{className:"sidebar-chats"},l.map((function(e,t){return e.name.toLowerCase().includes(y)&&c.a.createElement(ae,{name:e.name,id:e._id,key:t})})))):c.a.createElement("div",{className:"sidebar-fix"},c.a.createElement("div",{className:"sidebar-search"},c.a.createElement("div",{className:"sidebar-search-container"},c.a.createElement(v.a,{onClick:function(){p(!0)}},c.a.createElement(W.a,null)),c.a.createElement("input",{type:"text",placeholder:"Search for Chat",onClick:function(){p(!0)}}))),c.a.createElement("div",{className:"sidebar-chats"},c.a.createElement(ce,{addChat:function(e){i((function(t){return[].concat(Object(m.a)(t),[e])}))}}),l.map((function(e,t){return c.a.createElement(ae,{name:e.name,id:e._id,key:t,deleteChat:N,showEditChat:w})})))))},fe=(a(138),a(139),Object(n.createContext)()),Ee=function(e){var t=e.reducer,a=e.initialState,r=e.children;return c.a.createElement(fe.Provider,{value:Object(n.useReducer)(t,a)},r)},be="SET_USER",ge=function(e,t){switch(console.log(t),t.type){case be:return Object(ne.a)(Object(ne.a)({},e),{},{user:t.user});default:return e}},ve=a(86),pe=a.n(ve),je=a(87),Oe=a.n(je);var Ce=function(e){var t=e.getUser,a=Object(n.useContext)(fe),r=Object(o.a)(a,2),l=(r[0].user,r[1]);return Object(n.useEffect)((function(){se.onAuthStateChanged((function(e){e?(console.log("user signed in"),t(e)):console.log("user not signed in")}))}),[t]),c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login-container"},c.a.createElement("h1",null,c.a.createElement(Oe.a,null)," Chamber || Chats"),c.a.createElement("br",null),c.a.createElement("img",{src:pe.a,alt:"logo"}),c.a.createElement("div",{className:"login-text"},c.a.createElement("h3",null,"Enter into the Chamber below")),c.a.createElement(k.a,{size:"large",onClick:function(){se.signInWithPopup(ue).then((function(e){var t=e.user;l({type:be,user:t})})).catch((function(e){console.log(e)}))}},c.a.createElement("i",{className:"fab fa-google"}),"Sign in With Google")))};var ye=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"app"},a?c.a.createElement("div",{className:"app-body"},c.a.createElement(q.a,null,c.a.createElement(he,{userValue:a}),c.a.createElement(R.c,null,c.a.createElement(R.a,{path:"/chats/:chatId"},c.a.createElement(B,{userValue:a})),c.a.createElement(R.a,{path:"/"},c.a.createElement(B,null))))):c.a.createElement(q.a,null,c.a.createElement(R.a,{path:"/"},c.a.createElement(Ce,{getUser:function(e){r(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Ee,{initialState:{user:null},reducer:ge},c.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a.p+"static/media/blackClover.54ebc630.png"},96:function(e,t,a){e.exports=a(140)}},[[96,1,2]]]);
//# sourceMappingURL=main.ce00538b.chunk.js.map