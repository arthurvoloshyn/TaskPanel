(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,a){t.exports={"nav-bar":"styles_nav-bar__3V52z",link:"styles_link__2qSb0","active-link":"styles_active-link__29aSE"}},19:function(t,e,a){t.exports={"note-list":"styles_note-list__2cBw9","add-note":"styles_add-note__-W4lB","note-list-item":"styles_note-list-item__3spRs"}},31:function(t,e,a){t.exports={button:"styles_button__3Slax"}},33:function(t,e,a){t.exports=a(48)},47:function(t,e,a){},48:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(27),s=a.n(o),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}var c=a(16),u=a(51),d=a(14),m=a(52),h=a(12),p=a(13),_=a(25),v=Object(p.load)({namespace:"todo-list"});v&&v.notes&&v.notes.length||(v={notes:["note 1","note 2","note 3","note 4"]});var f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v.notes,e=arguments.length>1?arguments[1]:void 0,a=e.type,n=e.afterIndex,r=e.text;switch(a){case"ADD_NOTE":return[].concat(Object(_.a)(t.slice(0,n+2)),[r],Object(_.a)(t.slice(n+2)));default:return t}},g=Object(h.c)({notes:f}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):h.d,b=function(t){return Object(h.e)(g,t,w(Object(h.a)(Object(p.save)({namespace:"todo-list"}))))},k=a(7),E=a(8),y=a(10),N=a(9),O=a(11),j=a(50),A=a(53),x=a(18),S=a.n(x),C=function(t){function e(){var t,a;Object(k.a)(this,e);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(y.a)(this,(t=Object(N.a)(e)).call.apply(t,[this].concat(o))))._renderLink=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return r.a.createElement(A.a,{key:e,className:S.a.link,activeClassName:S.a["active-link"],to:"/".concat(t)},t)},a}return Object(O.a)(e,t),Object(E.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:S.a["nav-bar"]},["notes","artists","artworks"].map(this._renderLink))}}]),e}(n.Component),L=Object(j.a)(C),I=function(){return r.a.createElement("div",null,r.a.createElement(L,null))},P=a(5),B=a.n(P),T=function(t){function e(){var t,a;Object(k.a)(this,e);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(y.a)(this,(t=Object(N.a)(e)).call.apply(t,[this].concat(o)))).renderArtistList=function(){return a.props.artists.map(function(t){var e=t._id,a=t.firstName,n=t.lastName;return r.a.createElement(A.a,{key:e,to:"/artists/".concat(e),className:B.a["artist-row"],activeClassName:B.a["active-artist-row"]},r.a.createElement("div",{className:B.a["artist-avatar"],style:{backgroundImage:"url(imgs/artists/".concat(e,".png)")}}),r.a.createElement("span",null,"".concat(a," ").concat(n)))})},a.renderSpotLight=function(){var t=a.props,e=t.match.params,n=t.artists,o=e&&e.artistId;if(!o)return null;var s=n.find(function(t){return t._id===o}),i=s.firstName,l=s.lastName,c=s._id,u="".concat(i," ").concat(l),d="imgs/artists/".concat(c,".png");return r.a.createElement("div",{className:B.a.spotlight},r.a.createElement("div",{className:B.a["spotlight-img"],style:{backgroundImage:"url(".concat(d,")")}}),r.a.createElement("div",{className:B.a["spotlight-label"]},u))},a}return Object(O.a)(e,t),Object(E.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:B.a.dashboard},r.a.createElement("div",null,r.a.createElement("h3",{className:B.a.header},"Artists"),this.renderArtistList()),this.renderSpotLight())}}]),e}(n.Component);T.defaultProps={artists:[],match:null};var W=Object(j.a)(T),D=[{_id:"1",firstName:"Annie",lastName:"Walker"},{_id:"2",firstName:"Lynda",lastName:"Dubovich"},{_id:"3",firstName:"Jessica",lastName:"Gonsalez"},{_id:"4",firstName:"Kate",lastName:"Banksy"}],R=function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(W,{artists:D}))},U=a(6),H=a.n(U),M=function(t){function e(){var t,a;Object(k.a)(this,e);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(y.a)(this,(t=Object(N.a)(e)).call.apply(t,[this].concat(o)))).renderArtworkList=function(){return a.props.artworks.map(function(t){var e=t._id,a=t.title;return r.a.createElement(A.a,{key:e,to:"/artworks/".concat(e),className:H.a["artwork-row"],activeClassName:H.a["active-artwork-row"]},r.a.createElement("div",{className:H.a["artwork-avatar"],style:{backgroundImage:"url(imgs/artworks/".concat(e,".jpg)")}}),r.a.createElement("span",null,"".concat(a)))})},a.renderSpotLight=function(){var t=a.props,e=t.match.params,n=t.artworks,o=e&&e.artworkId;if(!o)return null;var s=n.find(function(t){return t._id===o}),i=s.title,l=s._id,c="imgs/artworks/".concat(l,".jpg");return r.a.createElement("div",{className:H.a.spotlight},r.a.createElement("div",{className:H.a["spotlight-img"],style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:H.a["spotlight-label"]},i))},a}return Object(O.a)(e,t),Object(E.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:H.a["artwork-list"]},r.a.createElement("div",null,r.a.createElement("h3",{className:H.a.header},"Artworks"),this.renderArtworkList()),this.renderSpotLight())}}]),e}(n.Component);M.defaultProps={artworks:[],match:null};var X=Object(j.a)(M),z=[{_id:"1",title:"In the event of sinking"},{_id:"2",title:"Refugees in a nutshell"},{_id:"3",title:"Solidarity"},{_id:"4",title:"The rehearsal"}],J=function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(X,{artworks:z}))},V=a(32),F=a(31),q=a.n(F),G=function(t){var e=t.children,a=Object(V.a)(t,["children"]);return r.a.createElement("button",Object.assign({className:q.a.button},a),e)};G.defaultProps={children:""};var K=G,Q=a(19),Y=a.n(Q),Z=Object(c.b)(function(t){return{notes:t.notes}},{addNote:function(t,e){return{type:"ADD_NOTE",text:t,afterIndex:e}}}),$=function(t){function e(){var t,a;Object(k.a)(this,e);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(y.a)(this,(t=Object(N.a)(e)).call.apply(t,[this].concat(o)))).renderNote=function(t){return r.a.createElement("div",{className:Y.a["note-list-item"]},t)},a.renderAddButton=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.createElement(K,{"data-index":t,className:Y.a["add-note"],onClick:a.onAddButtonClick},"+ add note")},a.onAddButtonClick=function(t){var e=t.target.dataset.index,n=window.prompt("Note text:");n?a.props.addNote(n,e-1):""===n?alert("Error! Note has no name."):alert("Operation is over.")},a}return Object(O.a)(e,t),Object(E.a)(e,[{key:"render",value:function(){var t=this,e=this.props.notes;return e.length?r.a.createElement("ul",{className:Y.a["note-list"]},e.map(function(e,a){return r.a.createElement("li",{key:a},t.renderNote(e),t.renderAddButton(a))})):this.renderAddButton()}}]),e}(n.Component);$.defaultProps={notes:[],addNote:function(){}};var tt=Z($),et=function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(tt,null))},at=b({}),nt=function(){return r.a.createElement(c.a,{store:at},r.a.createElement(m.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:I}),r.a.createElement(d.a,{path:"/notes",component:et}),r.a.createElement(d.a,{path:"/artists/:artistId*",component:R}),r.a.createElement(d.a,{path:"/artworks/:artworkId*",component:J}))))};a(47);s.a.render(r.a.createElement(nt,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/TaskPanel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/TaskPanel","/service-worker.js");i?(function(t,e){fetch(t).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):l(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):l(e,t)})}}()},5:function(t,e,a){t.exports={dashboard:"styles_dashboard__1YrEp",header:"styles_header__1EUbM","artist-row":"styles_artist-row__2rcHa","active-artist-row":"styles_active-artist-row__EeOL8","artist-avatar":"styles_artist-avatar__2NPWW",spotlight:"styles_spotlight__1j0Au","spotlight-img":"styles_spotlight-img__3U6jr","spotlight-label":"styles_spotlight-label__3FDs0"}},6:function(t,e,a){t.exports={"artwork-list":"styles_artwork-list__1PZBf",header:"styles_header__2wkiE","artwork-row":"styles_artwork-row__3rtAk","active-artwork-row":"styles_active-artwork-row__3HHrQ","artwork-avatar":"styles_artwork-avatar__1Euld",spotlight:"styles_spotlight__2xHbF","spotlight-img":"styles_spotlight-img__1a4lM","spotlight-label":"styles_spotlight-label__1zCNl"}}},[[33,1,2]]]);
//# sourceMappingURL=main.39c45efa.chunk.js.map