(window.webpackJsonpmpp=window.webpackJsonpmpp||[]).push([[0],{150:function(e,t,n){e.exports=n.p+"static/media/logo.2054d5e3.png"},177:function(e,t,n){e.exports=n(233)},182:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),l=(n(182),n(9)),i=n(279),s=n(153),u=a.createContext({notes:[],setNotes:function(){}}),m=n(25),d=n(17),p=n(33),b=n(10),f=n(260),h=n(82),v=n(264),g=n(142),y=n.n(g),E=(n(183),n(101)),O=n(11),j=n(36),x=n.n(j),C=n(76),k=n.n(C),w=n(85),P=n(57),N=n.n(P),S="https://api.mpp.reconnect.fr",B="".concat(S,"/api"),I="".concat(B,"/centers"),D="".concat(B,"/tags"),A="".concat(S,"/login"),q="".concat(S,"/admin_login"),M="".concat(B,"/notes"),R="".concat(B,"/workshops"),z=("".concat(B,"/topics"),"".concat(B,"/participant_kinds")),F="".concat(B,"/equipment_suppliers"),W=function(){var e=Object(w.a)(k.a.mark(function e(t,n){var a,r,o,c=arguments;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:"get",null===(r=localStorage.getItem("token"))&&t.push("/login"),o={Authorization:"Bearer ".concat(r)},e.abrupt("return",N()({method:a,url:n,headers:o}));case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach(function(t){Object(p.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function T(){var e=Object(b.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return T=function(){return e},e}var L=Object(O.a)(f.a)(T()),_=Object(d.g)(function(e){var t=e.history,n=(e.match,Object(a.useContext)(u)),o=Object(a.useCallback)(function(){var e=localStorage.getItem("token");null!==e?x.a.get("".concat(M)).set("Authorization","Bearer ".concat(e)).then(function(e){n.setNotes(e.body["hydra:member"])}):t.push("/login")},[t,n]);Object(a.useEffect)(function(){o()},[o]);var c={},l={},i={};return n.notes.forEach(function(e,t){c=K({},c,Object(p.a)({},e.date,e.nbProAccounts)),l=K({},l,Object(p.a)({},e.date,e.nbBeneficiariesAccounts)),i=K({},i,Object(p.a)({},e.date,e.nbStoredDocs))}),r.a.createElement(v.a,{maxWidth:"sm"},r.a.createElement(L,{size:"small",color:"primary","aria-label":"add",onClick:function(){return t.push("")}},r.a.createElement(y.a,null)),r.a.createElement(h.a,{variant:"h3",component:"h2",gutterBottom:!0,color:"textPrimary"},"Statistiques"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de comptes b\xe9n\xe9ficiaires cr\xe9es par permanence"),r.a.createElement(E.a,{data:l,colors:["white"]}),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de comptes pros cr\xe9es par permanence"),r.a.createElement(E.a,{data:c,colors:["#d35400"]}),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de documents stock\xe9s par permanence"),r.a.createElement(E.a,{data:i,colors:["#8e44ad"]}))}),J=n(265),Q=n(287),$=n(286),G=n(269),H=n(235),U=n(270),X=n(271),Y=n(143),Z=n.n(Y),ee=n(144),te=n.n(ee),ne=n(145),ae=n.n(ne),re=n(146),oe=n.n(re),ce=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",r=Object(d.e)();return a.useCallback(Object(w.a)(k.a.mark(function a(){var o,c;return k.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,W(r,e,n);case 3:o=a.sent,c=o.data,t(c["hydra:member"]),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),r.push("/login");case 11:case"end":return a.stop()}},a,null,[[0,8]])})),[r])},le=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",r=ce(e,t,n);return a.useEffect(function(){r()},[r])};function ie(){var e=Object(b.a)(["\n  position: absolute !important;\n  left: 50px;\n\n  top: 10px;\n"]);return ie=function(){return e},e}function se(){var e=Object(b.a)(["\n  position: absolute !important;\n  right: 100px;\n  top: 10px;\n"]);return se=function(){return e},e}function ue(){var e=Object(b.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return ue=function(){return e},e}function me(){var e=Object(b.a)(["\n  background-color: #212121;\n  color: white;\n  cursor: pointer;\n  border-radius: 12px;\n  padding: 10px;\n  flex: 1;\n  display: flex;\n"]);return me=function(){return e},e}function de(){var e=Object(b.a)(["\n  display: flex;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  justify-content: space-around;\n"]);return de=function(){return e},e}function pe(){var e=Object(b.a)(["\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n"]);return pe=function(){return e},e}var be=O.a.div(pe()),fe=O.a.div(de()),he=O.a.a(me()),ve=Object(O.a)(f.a)(ue()),ge=Object(O.a)(J.a)(se()),ye=Object(O.a)(J.a)(ie()),Ee=function(){var e=Object(d.e)(),t=Object(a.useState)([]),n=Object(l.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)([]),s=Object(l.a)(i,2),u=s[0],m=s[1],p=Object(a.useState)([]),b=Object(l.a)(p,2),f=b[0],g=b[1];le(I,function(e){c(e),g(e)}),le(D,m);return r.a.createElement(v.a,{maxWidth:"md"},r.a.createElement(be,null,r.a.createElement(ge,{onClick:function(){localStorage.removeItem("token"),e.push("/login")}},"D\xe9connexion"),r.a.createElement(ye,{onClick:function(){var e=localStorage.getItem("token");window.location.replace("".concat(q,"?token=").concat(e))}},"Admin"),r.a.createElement(ve,{size:"small",color:"primary","aria-label":"add",onClick:function(){return e.push("/charts")}},r.a.createElement(Z.a,null)),r.a.createElement(h.a,{variant:"h2",component:"h2",gutterBottom:!0,color:"textPrimary"},"Centres"),r.a.createElement(fe,null,u.map(function(e){return r.a.createElement(Q.a,{label:e.name,clickable:!0,color:"secondary",onClick:function(){return t=e.id,void g(o.filter(function(e){return e.tags.includes("/api/tags/".concat(t))}));var t}})})),r.a.createElement($.a,{id:"outlined-basic",label:"Rechercher",variant:"outlined",onChange:function(e){var t=e.target.value;g(o.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}}),r.a.createElement(G.a,{dense:!1},f.map(function(t){return r.a.createElement(H.a,{key:t.id},r.a.createElement(U.a,null,r.a.createElement(te.a,{htmlColor:"white"})),r.a.createElement(X.a,{secondary:t.name}),t.permanence?r.a.createElement(he,{style:{textAlign:"center"},onClick:function(){return e.push("/notes/".concat(t.id))}},r.a.createElement(ae.a,{htmlColor:"white"}),r.a.createElement(X.a,{primary:"Permanences"})):null,t.workshop?r.a.createElement(he,{style:{marginLeft:8,textAlign:"center"},onClick:function(){return e.push("/workshops/".concat(t.id))}},r.a.createElement(oe.a,{htmlColor:"white"}),r.a.createElement(X.a,{primary:"Ateliers"})):null)}))))},Oe=n(151),je=n.n(Oe),xe=n(60),Ce=n(149),ke=n.n(Ce),we=n(150),Pe=n.n(we);function Ne(){var e=Object(b.a)(["\n  padding-top: 100px;\n  margin-bottom: 200px;\n  display: flex;\n  flex-direction: column;\n"]);return Ne=function(){return e},e}function Se(){var e=Object(b.a)(["\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Se=function(){return e},e}function Be(){var e=Object(b.a)(["\n  width: 140px;\n  height: 140px;\n  align-self: center;\n"]);return Be=function(){return e},e}var Ie=O.a.img(Be()),De=O.a.div(Se()),Ae=O.a.form(Ne()),qe=Object(d.g)(function(e){var t=e.history,n=e.location,r=ke.a.parse(n.search);r&&r.token&&"string"===typeof r.token&&(localStorage.setItem("token",r.token.toString()),t.push("/"));return a.createElement(v.a,{maxWidth:"sm"},a.createElement(De,null,a.createElement(h.a,{variant:"h3",component:"h2",gutterBottom:!0,color:"textPrimary"},"Ma petite permanence"),a.createElement(Ie,{src:Pe.a,alt:"logo"})),a.createElement(xe.a,{initialValues:{email:"",password:""},onSubmit:function(e){var n,a;n=e.email,a=e.password,N.a.post(A,{email:n,password:a}).then(function(e){localStorage.setItem("token",e.data.token),t.push("/")})},render:function(e){return a.createElement(Ae,{onSubmit:e.handleSubmit},a.createElement($.a,{id:"email",name:"email",type:"email",label:"Email",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.email&&a.createElement("div",{id:"feedback"},e.errors.email),a.createElement($.a,{id:"password",name:"password",type:"password",label:"Password",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.password&&a.createElement("div",{id:"feedback"},e.errors.password),a.createElement(J.a,{variant:"outlined",color:"primary",type:"submit"},"Login"),a.createElement(J.a,{color:"primary",variant:"contained",style:{marginTop:50,marginBottom:100,fontSize:20},href:"".concat(S,"/oauth/trigger")},a.createElement(je.a,{style:{marginRight:20}}),"Me connecter avec Reconnect Pro"))}}))}),Me=n(285),Re=n(276),ze=n(272),Fe=n(273),We=n(277),Ve=n(282),Ke=n(96),Te=n.n(Ke),Le=n(81),_e=n(102),Je=n(49),Qe=n(75),$e=n(22),Ge=n(280);function He(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Ue(){var e=Object(b.a)(["\n  margin-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n"]);return Ue=function(){return e},e}var Xe=O.a.form(Ue()),Ye=Object(d.g)(function(e){var t=e.history,n=e.centerId,r=e.closeModal,o=a.useContext(u),c=o.notes,i=o.setNotes,s=a.useState(new Date),m=Object(l.a)(s,2),d=m[0],b=m[1];function f(e){b(e)}return a.createElement(v.a,{maxWidth:"sm"},a.createElement(xe.a,{initialValues:{date:new Date,center:"",hours:0,attendees:"",place:"",nbPros:0,nbProAccounts:0,nbBeneficiaries:0,nbBeneficiariesAccounts:0,nbStoredDocs:0,beneficiariesNotes:"",proNotes:"",reconnectNotes:""},onSubmit:function(e){!function(e){var n=localStorage.getItem("token");null!==n?x.a.post(M).send(e).set("Authorization","Bearer ".concat(n)).then(function(e){r(),i([e.body].concat(Object(Je.a)(c)))}):(alert("Il semble que vous ne soyez pas connect\xe9, veuillex vous reconnecter"),t.push("/login"))}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?He(n,!0).forEach(function(t){Object(p.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):He(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{date:d,center:"/api/centers/".concat(n)}))},render:function(e){return a.createElement(Xe,{onSubmit:e.handleSubmit},a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1}},a.createElement($e.a,{utils:Qe.a},a.createElement(Ge.a,{disableToolbar:!0,format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:"Date",onChange:f,variant:"inline",value:d,KeyboardButtonProps:{"aria-label":"change date"}}))),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement($.a,{id:"hours",label:"Nombre d'heures",name:"hours",onChange:e.handleChange,type:"number",variant:"outlined"}))),a.createElement("div",{style:{height:16}}),a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement($.a,{id:"nb-pros",label:"Nb pros rencontr\xe9s",name:"nbPros",onChange:e.handleChange,type:"number",variant:"outlined"})),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement($.a,{id:"nb-pro-accounts",label:"Nb comptes pros cr\xe9es",name:"nbProAccounts",onChange:e.handleChange,type:"number",variant:"outlined"}))),a.createElement("div",{style:{height:16}}),a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement($.a,{id:"nb-beneficiaries",label:"Nb benefs rencontr\xe9s",name:"nbBeneficiaries",onChange:e.handleChange,type:"number",variant:"outlined"})),a.createElement("div",{style:{width:8}}),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement($.a,{id:"nb-beneficiaries-accounts",label:"Nb comptes benef cr\xe9es",name:"nbBeneficiariesAccounts",onChange:e.handleChange,type:"number",variant:"outlined"})),a.createElement("div",{style:{width:8}}),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement($.a,{id:"nb-docs-stored",label:"Nb doc stock\xe9s",name:"nbStoredDocs",onChange:e.handleChange,type:"number",variant:"outlined"}))),a.createElement($.a,{id:"attendees",name:"attendees",type:"text",label:"Qui a fait la perm",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.attendees&&a.createElement("div",{id:"feedback"},e.errors.attendees),a.createElement($.a,{id:"place",name:"place",type:"text",label:"Lieu (optionnel)",margin:"normal",variant:"outlined",value:e.values.place,onChange:e.handleChange}),e.errors.place&&a.createElement("div",{id:"feedback"},e.errors.place),a.createElement($.a,{id:"beneficiaries-notes",name:"beneficiariesNotes",type:"text",label:"Remarques en rapport avec les b\xe9n\xe9ficiaires",margin:"normal",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.beneficiariesNotes&&a.createElement("div",{id:"feedback"},e.errors.beneficiariesNotes),a.createElement($.a,{id:"pro-notes",name:"proNotes",type:"text",label:"Remarques en rapport avec les professionnels",margin:"normal",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.proNotes&&a.createElement("div",{id:"feedback"},e.errors.proNotes),a.createElement($.a,{id:"reconnect-notes",name:"reconnectNotes",type:"text",label:"Remarques en rapport avec Reconnect",margin:"normal",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.reconnectNotes&&a.createElement("div",{id:"feedback"},e.errors.reconnectNotes),a.createElement(J.a,{variant:"contained",color:"primary",type:"submit"},"Cr\xe9er"))}}))});function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function et(){var e=Object(b.a)(["\n  margin-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n"]);return et=function(){return e},e}var tt=O.a.form(et()),nt=Object(d.g)(function(e){var t=e.history,n=e.centerId,r=e.closeModal,o=e.note,c=a.useContext(u),i=c.setNotes,s=c.notes,m=a.useState(new Date),d=Object(l.a)(m,2),b=d[0],f=d[1];function h(e){f(e)}return a.createElement(v.a,{maxWidth:"sm"},a.createElement(xe.a,{enableReinitialize:!0,initialValues:o,onSubmit:function(e){!function(e){var n=localStorage.getItem("token");null!==n?x.a.put("".concat(M,"/").concat(e.id)).send(e).set("Authorization","Bearer ".concat(n)).then(function(e){r(),i(s.map(function(t){return t.id===e.body.id?e.body:t}))}):(alert("Il semble que vous ne soyez pas connect\xe9, veuillex vous reconnecter"),t.push("/login"))}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(n,!0).forEach(function(t){Object(p.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{date:b,center:"/api/centers/".concat(n)}))}},function(e){return a.createElement(tt,{onSubmit:e.handleSubmit},a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1}},a.createElement($e.a,{utils:Qe.a},a.createElement(Ge.a,{disableToolbar:!0,format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:"Date",onChange:h,variant:"inline",value:b,KeyboardButtonProps:{"aria-label":"change date"}}))),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement($.a,{id:"hours",label:"Nombre d'heures",name:"hours",onChange:e.handleChange,value:e.values.hours,type:"number",variant:"outlined"}))),a.createElement("div",{style:{height:16}}),a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement($.a,{id:"nb-pros",label:"Nb pros rencontr\xe9s",name:"nbPros",onChange:e.handleChange,type:"number",value:e.values.nbPros,variant:"outlined"})),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement($.a,{id:"nb-pro-accounts",label:"Nb comptes pros cr\xe9es",name:"nbProAccounts",onChange:e.handleChange,value:e.values.nbProAccounts,type:"number",variant:"outlined"}))),a.createElement("div",{style:{height:16}}),a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement($.a,{id:"nb-beneficiaries",label:"Nb benefs rencontr\xe9s",name:"nbBeneficiaries",onChange:e.handleChange,type:"number",value:e.values.nbBeneficiaries,variant:"outlined"})),a.createElement("div",{style:{width:8}}),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement($.a,{id:"nb-beneficiaries-accounts",label:"Nb comptes benef cr\xe9es",name:"nbBeneficiariesAccounts",value:e.values.nbBeneficiariesAccounts,onChange:e.handleChange,type:"number",variant:"outlined"})),a.createElement("div",{style:{width:8}}),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement($.a,{id:"nb-docs-stored",label:"Nb doc stock\xe9s",name:"nbStoredDocs",onChange:e.handleChange,value:e.values.nbStoredDocs,type:"number",variant:"outlined"}))),a.createElement($.a,{id:"attendees",name:"attendees",type:"text",label:"Qui a fait la perm",margin:"normal",variant:"outlined",value:e.values.attendees,onChange:e.handleChange}),e.errors.attendees&&a.createElement("div",{id:"feedback"},e.errors.attendees),a.createElement($.a,{id:"place",name:"place",type:"text",label:"Lieu (optionnel)",margin:"normal",variant:"outlined",value:e.values.place,onChange:e.handleChange}),e.errors.place&&a.createElement("div",{id:"feedback"},e.errors.place),a.createElement($.a,{id:"beneficiaries-notes",name:"beneficiariesNotes",type:"text",label:"Remarques en rapport avec les b\xe9n\xe9ficiaires",margin:"normal",variant:"outlined",multiline:!0,rows:"4",value:e.values.beneficiariesNotes,onChange:e.handleChange}),e.errors.beneficiariesNotes&&a.createElement("div",{id:"feedback"},e.errors.beneficiariesNotes),a.createElement($.a,{id:"pro-notes",name:"proNotes",type:"text",label:"Remarques en rapport avec les professionnels",margin:"normal",variant:"outlined",value:e.values.proNotes,multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.proNotes&&a.createElement("div",{id:"feedback"},e.errors.proNotes),a.createElement($.a,{id:"reconnect-notes",name:"reconnectNotes",value:e.values.reconnectNotes,type:"text",label:"Remarques en rapport avec Reconnect",margin:"normal",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.reconnectNotes&&a.createElement("div",{id:"feedback"},e.errors.reconnectNotes),a.createElement(J.a,{variant:"contained",color:"primary",type:"submit"},"Mettre \xe0 jour"))}))}),at=n(274),rt=n(275),ot=n(291),ct=n(152),lt=n.n(ct),it=n(154);function st(){var e=Object(b.a)(["\n  margin: 8px;\n"]);return st=function(){return e},e}function ut(){var e=Object(b.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return ut=function(){return e},e}function mt(){var e=Object(b.a)(["\n  margin-bottom: 10px;\n"]);return mt=function(){return e},e}var dt=Object(O.a)(at.a)(mt()),pt=Object(O.a)(f.a)(ut()),bt=Object(O.a)(Q.a)(st()),ft=Object(d.g)(function(e){e.history,e.match;var t=e.note,n=e.editNote;return r.a.createElement(dt,{key:t.id},r.a.createElement(rt.a,{style:{position:"relative",backgroundColor:"#212121"}},r.a.createElement(pt,{size:"small",color:"primary","aria-label":"add",onClick:function(){return n(t.id)}},r.a.createElement(lt.a,null)),r.a.createElement(h.a,{color:"textPrimary",gutterBottom:!0},"Date : ",Object(it.a)(new Date(t.date),"dd-MM-yyyy")),r.a.createElement(h.a,{variant:"body2",component:"p"},"Dur\xe9e : ",t.hours," h"),t.attendees?r.a.createElement(h.a,{variant:"body2",component:"p"},"Participants : ",t.attendees):null,t.place?r.a.createElement(h.a,{variant:"body2",component:"p"},"Lieu : ",t.place):null,r.a.createElement(bt,{avatar:r.a.createElement(ot.a,null,t.nbPros),label:"Professionnels rencontr\xe9s"}),r.a.createElement(bt,{avatar:r.a.createElement(ot.a,null,t.nbProAccounts),label:"Comptes pro cr\xe9es"}),r.a.createElement(bt,{avatar:r.a.createElement(ot.a,null,t.nbBeneficiaries),label:"B\xe9n\xe9ficiaires rencontr\xe9s"}),r.a.createElement(bt,{avatar:r.a.createElement(ot.a,null,t.nbBeneficiariesAccounts),label:"Comptes b\xe9n\xe9ficiaires cr\xe9es"}),r.a.createElement(bt,{avatar:r.a.createElement(ot.a,null,t.nbStoredDocs),label:"Documents stock\xe9s"}),r.a.createElement(h.a,{variant:"subtitle1"},"Remarques concernant les b\xe9n\xe9ficiaires"),r.a.createElement(h.a,{variant:"body2",component:"p"},t.beneficiariesNotes),r.a.createElement(h.a,{variant:"subtitle1"},"Remarques concernant les professionnels"),r.a.createElement(h.a,{variant:"body2",component:"p"},t.proNotes),r.a.createElement(h.a,{variant:"subtitle1"},"Remarques concernant Reconnect"),r.a.createElement(h.a,{variant:"body2",component:"p"},t.reconnectNotes)))}),ht={name:"",workshops:[],notes:[],beneficiaryCount:"",createdBeneficiaryCount:"",documentsCount:""};var vt=function(){var e=r.a.useState(ht),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(d.e)();return{center:n,fetchCenter:Object(a.useCallback)(function(e){var t=localStorage.getItem("token");null!==t?N.a.get("".concat(I,"/").concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){o(e.data)}):c.push("/login")},[c])}};function gt(){var e=Object(b.a)(["\n  position: absolute;\n  right: 0;\n"]);return gt=function(){return e},e}function yt(){var e=Object(b.a)(["\n  position: relative;\n  align-self: stretch;\n  flex: 1;\n"]);return yt=function(){return e},e}function Et(){var e=Object(b.a)(["\n  flex: 1;\n"]);return Et=function(){return e},e}function Ot(){var e=Object(b.a)(["\n  display: flex;\n  position: relative;\n"]);return Ot=function(){return e},e}function jt(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n  margin-bottom: 32px;\n"]);return jt=function(){return e},e}function xt(){var e=Object(b.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  color: whitesmoke;\n"]);return xt=function(){return e},e}var Ct=O.a.div(xt()),kt=O.a.div(jt()),wt=O.a.div(Ot()),Pt=Object(O.a)(h.a)(Et()),Nt=Object(O.a)(wt)(yt()),St=Object(O.a)(f.a)(gt()),Bt=Object(d.g)(function(e){var t=e.history,n=e.match,o=Object(Le.a)(!1),c=Object(Le.a)(!1),i=Object(_e.useNumber)(0),s=Object(l.a)(i,2),m=s[0],d=s[1],p=Object(_e.useNumber)(0),b=Object(l.a)(p,2),f=b[0],g=b[1],y=Object(_e.useNumber)(1),E=Object(l.a)(y,2),O=E[0],j=E[1],C=n.params.centerId,k=Object(a.useContext)(u),w=k.notes,P=k.setNotes,N=vt(),S=N.center,B=N.fetchCenter;Object(a.useEffect)(function(){B(C)},[B,C]);var I=Object(a.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=localStorage.getItem("token");null!==n?x.a.get("".concat(M,"?center=").concat(C,"&page=").concat(e)).set("Authorization","Bearer ".concat(n)).then(function(e){g.setValue(e.body["hydra:totalItems"]),P(e.body["hydra:member"])}):t.push("/login")},[C,t]);Object(a.useEffect)(function(){I()},[I,C]);var D=function(e){d.setValue(e),c.setTrue()};return r.a.createElement(v.a,{maxWidth:"sm"},r.a.createElement(Me.a,{fullScreen:!0,open:o.value,onClose:o.setFalse,"aria-labelledby":"form-dialog-title"},r.a.createElement(Re.a,{id:"form-dialog-title"},"Cr\xe9er une note"),r.a.createElement(ze.a,null,r.a.createElement(Ye,{centerId:C,closeModal:o.setFalse})),r.a.createElement(Fe.a,null,r.a.createElement(J.a,{onClick:o.setFalse,color:"primary"},"Annuler"))),r.a.createElement(Me.a,{fullScreen:!0,open:c.value,onClose:c.setFalse,"aria-labelledby":"edit-note"},r.a.createElement(Re.a,{id:"edit-note"},"Modifier la note"),r.a.createElement(ze.a,null,r.a.createElement(nt,{centerId:C,note:w.find(function(e){return e.id===m}),closeModal:c.setFalse})),r.a.createElement(Fe.a,null,r.a.createElement(J.a,{onClick:c.setFalse,color:"primary"},"Annuler"))),r.a.createElement(Ct,null,r.a.createElement(Pt,{variant:"h4",gutterBottom:!0,color:"textPrimary"},S.name),r.a.createElement(h.a,null,"Nb permanences: ",S.notes.length),r.a.createElement(h.a,null,"Nb b\xe9nef rencontr\xe9s: ",S.beneficiaryCount),r.a.createElement(h.a,null,"Nb CFN cr\xe9es: ",S.createdBeneficiaryCount),r.a.createElement(h.a,null,"Nb docs stock\xe9s: ",S.documentsCount),r.a.createElement("br",null),r.a.createElement(wt,null,r.a.createElement(We.a,null),r.a.createElement(Nt,null,r.a.createElement(We.a,null),r.a.createElement(Pt,{variant:"h4",gutterBottom:!0,color:"textPrimary"},"Permanences"),r.a.createElement(St,{size:"medium",color:"primary","aria-label":"add",onClick:o.setTrue},r.a.createElement(Te.a,null)))),r.a.createElement(kt,null,r.a.createElement(Ve.a,{count:Math.ceil(f/30),variant:"outlined",page:O,onChange:function(e,t){j.setValue(t),I(t)}})),w.map(function(e){return r.a.createElement(ft,{note:e,key:e.id,editNote:D})})))}),It=Object(a.createContext)({workshops:[],setWorkshops:function(){}});var Dt=function(){var e=Object(a.useContext)(It).setWorkshops,t=Object(d.e)();return Object(a.useCallback)(function(n){var a=localStorage.getItem("token");null!==a?N.a.get("".concat(R,"?center=").concat(n),{headers:{Authorization:"Bearer ".concat(a)}}).then(function(t){e(t.data["hydra:member"])}):t.push("/login")},[t])};function At(){var e=Object(b.a)(["\n  margin-bottom: 10px;\n"]);return At=function(){return e},e}var qt=Object(O.a)(at.a)(At()),Mt=function(e){var t=e.workshop;return r.a.createElement(qt,{key:t.id},r.a.createElement(rt.a,{style:{position:"relative",backgroundColor:"#212121"}},r.a.createElement(h.a,{color:"textPrimary",gutterBottom:!0},"Date : ",Object(it.a)(new Date(t.date),"dd-MM-yyyy")),r.a.createElement(h.a,{variant:"body2",component:"p"},"Nombre de participants : ",t.nbParticipants),r.a.createElement(h.a,{variant:"body2",component:"p"},"Bilan global : ",t.globalReport)))},Rt=function(e){var t=e.label,n=e.handleChange,a=e.value;return r.a.createElement($e.a,{utils:Qe.a},r.a.createElement(Ge.a,{disableToolbar:!0,format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:t,onChange:n,variant:"inline",value:a,KeyboardButtonProps:{"aria-label":"change date"}}))},zt=n(268),Ft=n(266),Wt=n(289),Vt=n(278),Kt=n(283),Tt=function(e){var t=e.id,n=e.label,a=e.value,o=e.setFieldValue,c=e.options;return r.a.createElement(zt.a,{style:{flex:1}},r.a.createElement(Wt.a,{id:t},n),r.a.createElement(Kt.a,{labelId:t,id:t,multiple:!0,value:a,onChange:function(e){o(t,e.target.value)},input:r.a.createElement(Ft.a,{id:t}),renderValue:function(e){return r.a.createElement("div",null,e.map(function(e){var t=c.find(function(t){return t["@id"]===e});return r.a.createElement(Q.a,{key:e,label:t.name})}))}},c.map(function(e){return r.a.createElement(Vt.a,{key:e["@id"],value:e["@id"]},e.name)})))},Lt=function(e){var t=e.id,n=e.label,a=e.handleChange;return r.a.createElement($.a,{id:t,label:n,name:t,onChange:a,type:"number",variant:"outlined",style:{marginLeft:8,marginRight:8,flex:1}})},_t=Object(a.createContext)({participantKinds:[],setParticipantKinds:function(){}}),Jt=Object(a.createContext)({equipmentSuppliers:[],setEquipmentSuppliers:function(){}});function Qt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function $t(){var e=Object(b.a)(["\n  display: flex;\n  margin-top: 16px;\n"]);return $t=function(){return e},e}function Gt(){var e=Object(b.a)(["\n  margin-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n"]);return Gt=function(){return e},e}var Ht=O.a.form(Gt()),Ut=O.a.div($t()),Xt={date:new Date,center:"",globalReport:"",nbParticipants:0,nbBeneficiariesAccounts:0,nbStoredDocs:0,nbCreatedEvents:0,nbCreatedContacts:0,nbCreatedNotes:0,author:"",participantKinds:[],equipmentSuppliers:[]},Yt=function(e){var t=e.centerId,n=e.closeModal,o=r.a.useState(new Date),c=Object(l.a)(o,2),i=c[0],s=c[1],u=Object(a.useContext)(It),m=u.workshops,b=u.setWorkshops,f=localStorage.getItem("token"),h=Object(d.e)(),g=Object(a.useContext)(_t),y=g.participantKinds,E=g.setParticipantKinds,O=Object(a.useContext)(Jt),j=O.equipmentSuppliers,C=O.setEquipmentSuppliers;le(z,E),le(F,C);return r.a.createElement(v.a,{maxWidth:"sm"},r.a.createElement(xe.a,{initialValues:Xt,onSubmit:function(e){console.log(e),null!==f?x.a.post(R).send(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qt(n,!0).forEach(function(t){Object(p.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{date:i,center:"/api/centers/".concat(t)})).set("Authorization","Bearer ".concat(f)).then(function(e){n(),b([e.body].concat(Object(Je.a)(m)))}):(alert("Il semble que vous ne soyez pas connect\xe9, veuillez vous reconnecter"),h.push("/login"))},render:function(e){return r.a.createElement(Ht,{onSubmit:e.handleSubmit},r.a.createElement(Ut,null,r.a.createElement(Rt,{label:"Date",handleChange:s,value:i}),r.a.createElement(Lt,{id:"nbParticipants",label:"Nombre de participants",handleChange:e.handleChange})),r.a.createElement(Ut,null,r.a.createElement(Lt,{id:"nbBeneficiariesAccounts",label:"Nombre de cfn cr\xe9es",handleChange:e.handleChange}),r.a.createElement(Lt,{id:"nbStoredDocs",label:"Nombre de documents stock\xe9s",handleChange:e.handleChange})),r.a.createElement(Ut,null,r.a.createElement(Lt,{id:"nbCreatedEvents",label:"Nombre d'\xe9v\xe8nements cr\xe9\xe9s",handleChange:e.handleChange}),r.a.createElement(Lt,{id:"nbCreatedContacts",label:"Nombre de contacts ajout\xe9es",handleChange:e.handleChange}),r.a.createElement(Lt,{id:"nbCreatedNotes",label:"Nombre de notes ajout\xe9es",handleChange:e.handleChange})),r.a.createElement(Ut,null,r.a.createElement(Tt,{id:"participantKinds",label:"Types de participants",value:e.values.participantKinds,setFieldValue:e.setFieldValue,options:y})),r.a.createElement(Ut,null,r.a.createElement(Tt,{id:"equipmentSuppliers",label:"Equipement fourni par",value:e.values.equipmentSuppliers,setFieldValue:e.setFieldValue,options:j})),r.a.createElement(Ut,null,r.a.createElement($.a,{id:"globalReport",label:"Bilan global",name:"globalReport",type:"text",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange,style:{flex:1}})),r.a.createElement(Ut,null,r.a.createElement(J.a,{variant:"contained",color:"primary",type:"submit"},"Cr\xe9er")))}}))};function Zt(){var e=Object(b.a)(["\n  position: absolute;\n  right: 0;\n"]);return Zt=function(){return e},e}function en(){var e=Object(b.a)(["\n  flex: 1;\n"]);return en=function(){return e},e}function tn(){var e=Object(b.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  color: whitesmoke;\n"]);return tn=function(){return e},e}var nn=O.a.div(tn()),an=Object(O.a)(h.a)(en()),rn=Object(O.a)(f.a)(Zt()),on=function(){var e=Object(Le.a)(!1),t=Object(d.f)().centerId,n=Object(a.useContext)(It).workshops,o=vt(),c=o.center,l=o.fetchCenter,i=Dt();return Object(a.useEffect)(function(){l(t)},[l,t]),Object(a.useEffect)(function(){i(t)},[i,t]),r.a.createElement(v.a,{maxWidth:"sm"},r.a.createElement(Me.a,{fullScreen:!0,open:e.value,onClose:e.setFalse,"aria-labelledby":"form-dialog-title"},r.a.createElement(Re.a,{id:"form-dialog-title"},"Cr\xe9er un atelier"),r.a.createElement(ze.a,null,r.a.createElement(Yt,{centerId:t,closeModal:e.setFalse})),r.a.createElement(Fe.a,null,r.a.createElement(J.a,{onClick:e.setFalse,color:"primary"},"Annuler"))),r.a.createElement(nn,null,r.a.createElement(an,{variant:"h4",gutterBottom:!0,color:"textPrimary"},c.name),r.a.createElement(h.a,null,"Nb d'ateliers : ",c.workshops.length)),r.a.createElement(an,{variant:"h4",gutterBottom:!0,color:"textPrimary"},"Ateliers"),r.a.createElement(rn,{size:"medium",color:"primary","aria-label":"add",onClick:e.setTrue},r.a.createElement(Te.a,null)),n.map(function(e){return r.a.createElement(Mt,{key:e.id,workshop:e})}))},cn=function(){return a.createElement(m.a,null,a.createElement(d.a,{path:"/",exact:!0,component:Ee}),a.createElement(d.a,{path:"/login",exact:!0,component:qe}),a.createElement(d.a,{path:"/charts",exact:!0,component:_}),a.createElement(d.a,{path:"/notes/:centerId",component:Bt}),a.createElement(d.a,{path:"/workshops/:centerId",component:on}))},ln=Object(a.createContext)({topics:[],setTopics:function(){}}),sn=Object(s.a)({palette:{type:"dark",background:{default:"#28ad7a",paper:"#28ad7a"},text:{primary:"#eff1f7",secondary:"#eff1f7"},primary:{main:"#eff1f7",contrastText:"#677273"}}}),un=function(){var e=a.useState([]),t=Object(l.a)(e,2),n=t[0],r=t[1],o=a.useState([]),c=Object(l.a)(o,2),s=c[0],m=c[1],d=a.useState([]),p=Object(l.a)(d,2),b=p[0],f=p[1],h=a.useState([]),v=Object(l.a)(h,2),g=v[0],y=v[1],E=a.useState([]),O=Object(l.a)(E,2),j=O[0],x=O[1];return a.createElement(i.a,{theme:sn},a.createElement(It.Provider,{value:{workshops:s,setWorkshops:m}},a.createElement(u.Provider,{value:{notes:n,setNotes:r}},a.createElement(ln.Provider,{value:{topics:b,setTopics:f}},a.createElement(_t.Provider,{value:{participantKinds:g,setParticipantKinds:y}},a.createElement(Jt.Provider,{value:{equipmentSuppliers:j,setEquipmentSuppliers:x}},a.createElement(cn,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(un,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[177,1,2]]]);
//# sourceMappingURL=main.65627b48.chunk.js.map