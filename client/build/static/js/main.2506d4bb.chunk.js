(window.webpackJsonpmpp=window.webpackJsonpmpp||[]).push([[0],{151:function(e,t,n){e.exports=n.p+"static/media/logo.2054d5e3.png"},177:function(e,t,n){e.exports=n(233)},182:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),l=n.n(o),c=(n(182),n(9)),i=n(154),s=n(282),u=Object(a.createContext)({ageBreakpoints:[],setAgeBreakpoints:function(){}}),m=Object(a.createContext)({equipmentSuppliers:[],setEquipmentSuppliers:function(){}}),d=a.createContext({notes:[],setNotes:function(){}}),p=Object(a.createContext)({participantKinds:[],setParticipantKinds:function(){}}),b=Object(a.createContext)({topics:[],setTopics:function(){}}),f=Object(a.createContext)({usedEquipments:[],setUsedEquipments:function(){}}),v=Object(a.createContext)({workshops:[],setWorkshops:function(){}}),E=n(25),h=n(17),g=n(35),y=n(10),O=n(260),j=n(80),C=n(264),x=n(143),k=n.n(x),w=(n(183),n(103)),P=n(11),N=n(38),S=n.n(N),B=n(77),D=n.n(B),I=n(87),q=n(58),A=n.n(q),M="https://api.mpp.reconnect.fr",R="".concat(M,"/api"),z="".concat(R,"/centers"),V="".concat(R,"/tags"),F="".concat(M,"/login"),T="".concat(M,"/admin_login"),W="".concat(R,"/notes"),K="".concat(R,"/workshops"),L="".concat(R,"/topics"),_="".concat(R,"/participant_kinds"),U="".concat(R,"/equipment_suppliers"),J="".concat(R,"/age_breakpoints"),Q="".concat(R,"/used_equipments"),$=function(){var e=Object(I.a)(D.a.mark(function e(t,n){var a,r,o,l=arguments;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>2&&void 0!==l[2]?l[2]:"get",null===(r=localStorage.getItem("token"))&&t.push("/login"),o={Authorization:"Bearer ".concat(r)},e.abrupt("return",A()({method:a,url:n,headers:o}));case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach(function(t){Object(g.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function X(){var e=Object(y.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return X=function(){return e},e}var Y=Object(P.a)(O.a)(X()),Z=Object(h.g)(function(e){var t=e.history,n=(e.match,Object(a.useContext)(d)),o=Object(a.useCallback)(function(){var e=localStorage.getItem("token");null!==e?S.a.get("".concat(W)).set("Authorization","Bearer ".concat(e)).then(function(e){n.setNotes(e.body["hydra:member"])}):t.push("/login")},[t,n]);Object(a.useEffect)(function(){o()},[o]);var l={},c={},i={};return n.notes.forEach(function(e,t){l=H({},l,Object(g.a)({},e.date,e.nbProAccounts)),c=H({},c,Object(g.a)({},e.date,e.nbBeneficiariesAccounts)),i=H({},i,Object(g.a)({},e.date,e.nbStoredDocs))}),r.a.createElement(C.a,{maxWidth:"sm"},r.a.createElement(Y,{size:"small",color:"primary","aria-label":"add",onClick:function(){return t.push("")}},r.a.createElement(k.a,null)),r.a.createElement(j.a,{variant:"h3",component:"h2",gutterBottom:!0,color:"textPrimary"},"Statistiques"),r.a.createElement(j.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de comptes b\xe9n\xe9ficiaires cr\xe9es par permanence"),r.a.createElement(w.a,{data:c,colors:["white"]}),r.a.createElement(j.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de comptes pros cr\xe9es par permanence"),r.a.createElement(w.a,{data:l,colors:["#d35400"]}),r.a.createElement(j.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de documents stock\xe9s par permanence"),r.a.createElement(w.a,{data:i,colors:["#8e44ad"]}))}),ee=n(265),te=n(291),ne=n(290),ae=n(269),re=n(235),oe=n(270),le=n(271),ce=n(144),ie=n.n(ce),se=n(145),ue=n.n(se),me=n(146),de=n.n(me),pe=n(147),be=n.n(pe),fe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",r=Object(h.e)();return a.useCallback(Object(I.a)(D.a.mark(function a(){var o,l;return D.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,$(r,e,n);case 3:o=a.sent,l=o.data,t(l["hydra:member"]),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),r.push("/login");case 11:case"end":return a.stop()}},a,null,[[0,8]])})),[r])},ve=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",r=fe(e,t,n);return a.useEffect(function(){r()},[r])};function Ee(){var e=Object(y.a)(["\n  position: absolute !important;\n  left: 50px;\n\n  top: 10px;\n"]);return Ee=function(){return e},e}function he(){var e=Object(y.a)(["\n  position: absolute !important;\n  right: 100px;\n  top: 10px;\n"]);return he=function(){return e},e}function ge(){var e=Object(y.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return ge=function(){return e},e}function ye(){var e=Object(y.a)(["\n  background-color: #212121;\n  color: white;\n  cursor: pointer;\n  border-radius: 12px;\n  padding: 10px;\n"]);return ye=function(){return e},e}function Oe(){var e=Object(y.a)(["\n  display: flex;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  justify-content: space-around;\n"]);return Oe=function(){return e},e}function je(){var e=Object(y.a)(["\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n"]);return je=function(){return e},e}var Ce=P.a.div(je()),xe=P.a.div(Oe()),ke=P.a.a(ye()),we=Object(P.a)(O.a)(ge()),Pe=Object(P.a)(ee.a)(he()),Ne=Object(P.a)(ee.a)(Ee()),Se=function(){var e=Object(h.e)(),t=Object(a.useState)([]),n=Object(c.a)(t,2),o=n[0],l=n[1],i=Object(a.useState)([]),s=Object(c.a)(i,2),u=s[0],m=s[1],d=Object(a.useState)([]),p=Object(c.a)(d,2),b=p[0],f=p[1];ve(z,function(e){l(e),f(e)}),ve(V,m);return r.a.createElement(C.a,{maxWidth:"md"},r.a.createElement(Ce,null,r.a.createElement(Pe,{onClick:function(){localStorage.removeItem("token"),e.push("/login")}},"D\xe9connexion"),r.a.createElement(Ne,{onClick:function(){var e=localStorage.getItem("token");window.location.replace("".concat(T,"?token=").concat(e))}},"Admin"),r.a.createElement(we,{size:"small",color:"primary","aria-label":"add",onClick:function(){return e.push("/charts")}},r.a.createElement(ie.a,null)),r.a.createElement(j.a,{variant:"h2",component:"h2",gutterBottom:!0,color:"textPrimary"},"Centres"),r.a.createElement(xe,null,u.map(function(e){return r.a.createElement(te.a,{label:e.name,clickable:!0,color:"secondary",onClick:function(){return t=e.id,void f(o.filter(function(e){return e.tags.includes("/api/tags/".concat(t))}));var t}})})),r.a.createElement(ne.a,{id:"outlined-basic",label:"Rechercher",variant:"outlined",onChange:function(e){var t=e.target.value;f(o.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}}),r.a.createElement(ae.a,{dense:!1},b.map(function(t){return r.a.createElement(re.a,{key:t.id},r.a.createElement(oe.a,null,r.a.createElement(ue.a,{htmlColor:"white"})),r.a.createElement(le.a,{secondary:t.name}),t.permanence?r.a.createElement(ke,{style:{textAlign:"center",width:200},onClick:function(){return e.push("/notes/".concat(t.id))}},r.a.createElement(de.a,{htmlColor:"white"}),r.a.createElement(le.a,{primary:"Permanences"})):null,t.workshop?r.a.createElement(ke,{style:{marginLeft:8,textAlign:"center",width:200},onClick:function(){return e.push("/workshops/".concat(t.id))}},r.a.createElement(be.a,{htmlColor:"white"}),r.a.createElement(le.a,{primary:"Ateliers"})):null)}))))},Be=n(152),De=n.n(Be),Ie=n(61),qe=n(150),Ae=n.n(qe),Me=n(151),Re=n.n(Me);function ze(){var e=Object(y.a)(["\n  padding-top: 100px;\n  margin-bottom: 200px;\n  display: flex;\n  flex-direction: column;\n"]);return ze=function(){return e},e}function Ve(){var e=Object(y.a)(["\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Ve=function(){return e},e}function Fe(){var e=Object(y.a)(["\n  width: 140px;\n  height: 140px;\n  align-self: center;\n"]);return Fe=function(){return e},e}var Te=P.a.img(Fe()),We=P.a.div(Ve()),Ke=P.a.form(ze()),Le=Object(h.g)(function(e){var t=e.history,n=e.location,r=Ae.a.parse(n.search);r&&r.token&&"string"===typeof r.token&&(localStorage.setItem("token",r.token.toString()),t.push("/"));return a.createElement(C.a,{maxWidth:"sm"},a.createElement(We,null,a.createElement(j.a,{variant:"h3",component:"h2",gutterBottom:!0,color:"textPrimary"},"Ma petite permanence"),a.createElement(Te,{src:Re.a,alt:"logo"})),a.createElement(Ie.a,{initialValues:{email:"",password:""},onSubmit:function(e){var n,a;n=e.email,a=e.password,A.a.post(F,{email:n,password:a}).then(function(e){localStorage.setItem("token",e.data.token),t.push("/")})},render:function(e){return a.createElement(Ke,{onSubmit:e.handleSubmit},a.createElement(ne.a,{id:"email",name:"email",type:"email",label:"Email",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.email&&a.createElement("div",{id:"feedback"},e.errors.email),a.createElement(ne.a,{id:"password",name:"password",type:"password",label:"Password",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.password&&a.createElement("div",{id:"feedback"},e.errors.password),a.createElement(ee.a,{variant:"outlined",color:"primary",type:"submit"},"Login"),a.createElement(ee.a,{color:"primary",variant:"contained",style:{marginTop:50,marginBottom:100,fontSize:20},href:"".concat(M,"/oauth/trigger")},a.createElement(De.a,{style:{marginRight:20}}),"Me connecter avec Reconnect Pro"))}}))}),_e=n(289),Ue=n(277),Je=n(273),Qe=n(274),$e=n(278),Ge=n(285),He=n(98),Xe=n.n(He),Ye=n(84),Ze=n(79),et=n(51),tt=n(76),nt=n(22),at=n(283);function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function ot(){var e=Object(y.a)(["\n  margin-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n"]);return ot=function(){return e},e}var lt=P.a.form(ot()),ct=Object(h.g)(function(e){var t=e.history,n=e.centerId,r=e.closeModal,o=a.useContext(d),l=o.notes,i=o.setNotes,s=a.useState(new Date),u=Object(c.a)(s,2),m=u[0],p=u[1];function b(e){p(e)}return a.createElement(C.a,{maxWidth:"sm"},a.createElement(Ie.a,{initialValues:{date:new Date,center:"",hours:0,attendees:"",place:"",nbPros:0,nbProAccounts:0,nbBeneficiaries:0,nbBeneficiariesAccounts:0,nbStoredDocs:0,beneficiariesNotes:"",proNotes:"",reconnectNotes:""},onSubmit:function(e){!function(e){var n=localStorage.getItem("token");null!==n?S.a.post(W).send(e).set("Authorization","Bearer ".concat(n)).then(function(e){r(),i([e.body].concat(Object(et.a)(l)))}):(alert("Il semble que vous ne soyez pas connect\xe9, veuillex vous reconnecter"),t.push("/login"))}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?rt(n,!0).forEach(function(t){Object(g.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{date:m,center:"/api/centers/".concat(n)}))},render:function(e){return a.createElement(lt,{onSubmit:e.handleSubmit},a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1}},a.createElement(nt.a,{utils:tt.a},a.createElement(at.a,{disableToolbar:!0,format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:"Date",onChange:b,variant:"inline",value:m,KeyboardButtonProps:{"aria-label":"change date"}}))),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(ne.a,{id:"hours",label:"Nombre d'heures",name:"hours",onChange:e.handleChange,type:"number",variant:"outlined"}))),a.createElement("div",{style:{height:16}}),a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(ne.a,{id:"nb-pros",label:"Nb pros rencontr\xe9s",name:"nbPros",onChange:e.handleChange,type:"number",variant:"outlined"})),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(ne.a,{id:"nb-pro-accounts",label:"Nb comptes pros cr\xe9es",name:"nbProAccounts",onChange:e.handleChange,type:"number",variant:"outlined"}))),a.createElement("div",{style:{height:16}}),a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(ne.a,{id:"nb-beneficiaries",label:"Nb benefs rencontr\xe9s",name:"nbBeneficiaries",onChange:e.handleChange,type:"number",variant:"outlined"})),a.createElement("div",{style:{width:8}}),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(ne.a,{id:"nb-beneficiaries-accounts",label:"Nb comptes benef cr\xe9es",name:"nbBeneficiariesAccounts",onChange:e.handleChange,type:"number",variant:"outlined"})),a.createElement("div",{style:{width:8}}),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(ne.a,{id:"nb-docs-stored",label:"Nb doc stock\xe9s",name:"nbStoredDocs",onChange:e.handleChange,type:"number",variant:"outlined"}))),a.createElement(ne.a,{id:"attendees",name:"attendees",type:"text",label:"Qui a fait la perm",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.attendees&&a.createElement("div",{id:"feedback"},e.errors.attendees),a.createElement(ne.a,{id:"place",name:"place",type:"text",label:"Lieu (optionnel)",margin:"normal",variant:"outlined",value:e.values.place,onChange:e.handleChange}),e.errors.place&&a.createElement("div",{id:"feedback"},e.errors.place),a.createElement(ne.a,{id:"beneficiaries-notes",name:"beneficiariesNotes",type:"text",label:"Remarques en rapport avec les b\xe9n\xe9ficiaires",margin:"normal",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.beneficiariesNotes&&a.createElement("div",{id:"feedback"},e.errors.beneficiariesNotes),a.createElement(ne.a,{id:"pro-notes",name:"proNotes",type:"text",label:"Remarques en rapport avec les professionnels",margin:"normal",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.proNotes&&a.createElement("div",{id:"feedback"},e.errors.proNotes),a.createElement(ne.a,{id:"reconnect-notes",name:"reconnectNotes",type:"text",label:"Remarques en rapport avec Reconnect",margin:"normal",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.reconnectNotes&&a.createElement("div",{id:"feedback"},e.errors.reconnectNotes),a.createElement(ee.a,{variant:"contained",color:"primary",type:"submit"},"Cr\xe9er"))}}))});function it(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function st(){var e=Object(y.a)(["\n  margin-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n"]);return st=function(){return e},e}var ut=P.a.form(st()),mt=Object(h.g)(function(e){var t=e.history,n=e.centerId,r=e.closeModal,o=e.note,l=a.useContext(d),i=l.setNotes,s=l.notes,u=a.useState(new Date),m=Object(c.a)(u,2),p=m[0],b=m[1];function f(e){b(e)}return a.createElement(C.a,{maxWidth:"sm"},a.createElement(Ie.a,{enableReinitialize:!0,initialValues:o,onSubmit:function(e){!function(e){var n=localStorage.getItem("token");null!==n?S.a.put("".concat(W,"/").concat(e.id)).send(e).set("Authorization","Bearer ".concat(n)).then(function(e){r(),i(s.map(function(t){return t.id===e.body.id?e.body:t}))}):(alert("Il semble que vous ne soyez pas connect\xe9, veuillex vous reconnecter"),t.push("/login"))}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?it(n,!0).forEach(function(t){Object(g.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):it(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{date:p,center:"/api/centers/".concat(n)}))}},function(e){return a.createElement(ut,{onSubmit:e.handleSubmit},a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1}},a.createElement(nt.a,{utils:tt.a},a.createElement(at.a,{disableToolbar:!0,format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:"Date",onChange:f,variant:"inline",value:p,KeyboardButtonProps:{"aria-label":"change date"}}))),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(ne.a,{id:"hours",label:"Nombre d'heures",name:"hours",onChange:e.handleChange,value:e.values.hours,type:"number",variant:"outlined"}))),a.createElement("div",{style:{height:16}}),a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(ne.a,{id:"nb-pros",label:"Nb pros rencontr\xe9s",name:"nbPros",onChange:e.handleChange,type:"number",value:e.values.nbPros,variant:"outlined"})),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(ne.a,{id:"nb-pro-accounts",label:"Nb comptes pros cr\xe9es",name:"nbProAccounts",onChange:e.handleChange,value:e.values.nbProAccounts,type:"number",variant:"outlined"}))),a.createElement("div",{style:{height:16}}),a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(ne.a,{id:"nb-beneficiaries",label:"Nb benefs rencontr\xe9s",name:"nbBeneficiaries",onChange:e.handleChange,type:"number",value:e.values.nbBeneficiaries,variant:"outlined"})),a.createElement("div",{style:{width:8}}),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(ne.a,{id:"nb-beneficiaries-accounts",label:"Nb comptes benef cr\xe9es",name:"nbBeneficiariesAccounts",value:e.values.nbBeneficiariesAccounts,onChange:e.handleChange,type:"number",variant:"outlined"})),a.createElement("div",{style:{width:8}}),a.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center",display:"flex"}},a.createElement(ne.a,{id:"nb-docs-stored",label:"Nb doc stock\xe9s",name:"nbStoredDocs",onChange:e.handleChange,value:e.values.nbStoredDocs,type:"number",variant:"outlined"}))),a.createElement(ne.a,{id:"attendees",name:"attendees",type:"text",label:"Qui a fait la perm",margin:"normal",variant:"outlined",value:e.values.attendees,onChange:e.handleChange}),e.errors.attendees&&a.createElement("div",{id:"feedback"},e.errors.attendees),a.createElement(ne.a,{id:"place",name:"place",type:"text",label:"Lieu (optionnel)",margin:"normal",variant:"outlined",value:e.values.place,onChange:e.handleChange}),e.errors.place&&a.createElement("div",{id:"feedback"},e.errors.place),a.createElement(ne.a,{id:"beneficiaries-notes",name:"beneficiariesNotes",type:"text",label:"Remarques en rapport avec les b\xe9n\xe9ficiaires",margin:"normal",variant:"outlined",multiline:!0,rows:"4",value:e.values.beneficiariesNotes,onChange:e.handleChange}),e.errors.beneficiariesNotes&&a.createElement("div",{id:"feedback"},e.errors.beneficiariesNotes),a.createElement(ne.a,{id:"pro-notes",name:"proNotes",type:"text",label:"Remarques en rapport avec les professionnels",margin:"normal",variant:"outlined",value:e.values.proNotes,multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.proNotes&&a.createElement("div",{id:"feedback"},e.errors.proNotes),a.createElement(ne.a,{id:"reconnect-notes",name:"reconnectNotes",value:e.values.reconnectNotes,type:"text",label:"Remarques en rapport avec Reconnect",margin:"normal",variant:"outlined",multiline:!0,rows:"4",onChange:e.handleChange}),e.errors.reconnectNotes&&a.createElement("div",{id:"feedback"},e.errors.reconnectNotes),a.createElement(ee.a,{variant:"contained",color:"primary",type:"submit"},"Mettre \xe0 jour"))}))}),dt=n(275),pt=n(276),bt=n(295),ft=n(153),vt=n.n(ft),Et=n(155);function ht(){var e=Object(y.a)(["\n  margin: 8px;\n"]);return ht=function(){return e},e}function gt(){var e=Object(y.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return gt=function(){return e},e}function yt(){var e=Object(y.a)(["\n  margin-bottom: 10px;\n"]);return yt=function(){return e},e}var Ot=Object(P.a)(dt.a)(yt()),jt=Object(P.a)(O.a)(gt()),Ct=Object(P.a)(te.a)(ht()),xt=Object(h.g)(function(e){e.history,e.match;var t=e.note,n=e.editNote;return r.a.createElement(Ot,{key:t.id},r.a.createElement(pt.a,{style:{position:"relative",backgroundColor:"#212121"}},r.a.createElement(jt,{size:"small",color:"primary","aria-label":"add",onClick:function(){return n(t.id)}},r.a.createElement(vt.a,null)),r.a.createElement(j.a,{color:"textPrimary",gutterBottom:!0},"Date : ",Object(Et.a)(new Date(t.date),"dd-MM-yyyy")),r.a.createElement(j.a,{variant:"body2",component:"p"},"Dur\xe9e : ",t.hours," h"),t.attendees?r.a.createElement(j.a,{variant:"body2",component:"p"},"Participants : ",t.attendees):null,t.place?r.a.createElement(j.a,{variant:"body2",component:"p"},"Lieu : ",t.place):null,r.a.createElement(Ct,{avatar:r.a.createElement(bt.a,null,t.nbPros),label:"Professionnels rencontr\xe9s"}),r.a.createElement(Ct,{avatar:r.a.createElement(bt.a,null,t.nbProAccounts),label:"Comptes pro cr\xe9es"}),r.a.createElement(Ct,{avatar:r.a.createElement(bt.a,null,t.nbBeneficiaries),label:"B\xe9n\xe9ficiaires rencontr\xe9s"}),r.a.createElement(Ct,{avatar:r.a.createElement(bt.a,null,t.nbBeneficiariesAccounts),label:"Comptes b\xe9n\xe9ficiaires cr\xe9es"}),r.a.createElement(Ct,{avatar:r.a.createElement(bt.a,null,t.nbStoredDocs),label:"Documents stock\xe9s"}),r.a.createElement(j.a,{variant:"subtitle1"},"Remarques concernant les b\xe9n\xe9ficiaires"),r.a.createElement(j.a,{variant:"body2",component:"p"},t.beneficiariesNotes),r.a.createElement(j.a,{variant:"subtitle1"},"Remarques concernant les professionnels"),r.a.createElement(j.a,{variant:"body2",component:"p"},t.proNotes),r.a.createElement(j.a,{variant:"subtitle1"},"Remarques concernant Reconnect"),r.a.createElement(j.a,{variant:"body2",component:"p"},t.reconnectNotes)))}),kt={name:"",workshops:[],notes:[],beneficiaryCount:"",createdBeneficiaryCount:"",documentsCount:""};var wt=function(){var e=r.a.useState(kt),t=Object(c.a)(e,2),n=t[0],o=t[1],l=Object(h.e)();return{center:n,fetchCenter:Object(a.useCallback)(function(e){var t=localStorage.getItem("token");null!==t?A.a.get("".concat(z,"/").concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){o(e.data)}):l.push("/login")},[l])}};function Pt(){var e=Object(y.a)(["\n  position: absolute;\n  right: 0;\n"]);return Pt=function(){return e},e}function Nt(){var e=Object(y.a)(["\n  position: relative;\n  align-self: stretch;\n  flex: 1;\n"]);return Nt=function(){return e},e}function St(){var e=Object(y.a)(["\n  flex: 1;\n"]);return St=function(){return e},e}function Bt(){var e=Object(y.a)(["\n  display: flex;\n  position: relative;\n"]);return Bt=function(){return e},e}function Dt(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n  margin-bottom: 32px;\n"]);return Dt=function(){return e},e}function It(){var e=Object(y.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  color: whitesmoke;\n"]);return It=function(){return e},e}var qt=P.a.div(It()),At=P.a.div(Dt()),Mt=P.a.div(Bt()),Rt=Object(P.a)(j.a)(St()),zt=Object(P.a)(Mt)(Nt()),Vt=Object(P.a)(O.a)(Pt()),Ft=Object(h.g)(function(e){var t=e.history,n=e.match,o=Object(Ye.a)(!1),l=Object(Ye.a)(!1),i=Object(Ze.useNumber)(0),s=Object(c.a)(i,2),u=s[0],m=s[1],p=Object(Ze.useNumber)(0),b=Object(c.a)(p,2),f=b[0],v=b[1],E=Object(Ze.useNumber)(1),h=Object(c.a)(E,2),g=h[0],y=h[1],O=n.params.centerId,x=Object(a.useContext)(d),k=x.notes,w=x.setNotes,P=wt(),N=P.center,B=P.fetchCenter;Object(a.useEffect)(function(){B(O)},[B,O]);var D=Object(a.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=localStorage.getItem("token");null!==n?S.a.get("".concat(W,"?center=").concat(O,"&page=").concat(e)).set("Authorization","Bearer ".concat(n)).then(function(e){v.setValue(e.body["hydra:totalItems"]),w(e.body["hydra:member"])}):t.push("/login")},[O,t]);Object(a.useEffect)(function(){D()},[D,O]);var I=function(e){m.setValue(e),l.setTrue()};return r.a.createElement(C.a,{maxWidth:"sm"},r.a.createElement(_e.a,{fullScreen:!0,open:o.value,onClose:o.setFalse,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ue.a,{id:"form-dialog-title"},"Cr\xe9er une note"),r.a.createElement(Je.a,null,r.a.createElement(ct,{centerId:O,closeModal:o.setFalse})),r.a.createElement(Qe.a,null,r.a.createElement(ee.a,{onClick:o.setFalse,color:"primary"},"Annuler"))),r.a.createElement(_e.a,{fullScreen:!0,open:l.value,onClose:l.setFalse,"aria-labelledby":"edit-note"},r.a.createElement(Ue.a,{id:"edit-note"},"Modifier la note"),r.a.createElement(Je.a,null,r.a.createElement(mt,{centerId:O,note:k.find(function(e){return e.id===u}),closeModal:l.setFalse})),r.a.createElement(Qe.a,null,r.a.createElement(ee.a,{onClick:l.setFalse,color:"primary"},"Annuler"))),r.a.createElement(qt,null,r.a.createElement(Rt,{variant:"h4",gutterBottom:!0,color:"textPrimary"},N.name),r.a.createElement(j.a,null,"Nb permanences: ",N.notes.length),r.a.createElement(j.a,null,"Nb b\xe9nef rencontr\xe9s: ",N.beneficiaryCount),r.a.createElement(j.a,null,"Nb CFN cr\xe9es: ",N.createdBeneficiaryCount),r.a.createElement(j.a,null,"Nb docs stock\xe9s: ",N.documentsCount),r.a.createElement("br",null),r.a.createElement(Mt,null,r.a.createElement($e.a,null),r.a.createElement(zt,null,r.a.createElement($e.a,null),r.a.createElement(Rt,{variant:"h4",gutterBottom:!0,color:"textPrimary"},"Permanences"),r.a.createElement(Vt,{size:"medium",color:"primary","aria-label":"add",onClick:o.setTrue},r.a.createElement(Xe.a,null)))),r.a.createElement(At,null,r.a.createElement(Ge.a,{count:Math.ceil(f/30),variant:"outlined",page:g,onChange:function(e,t){y.setValue(t),D(t)}})),k.map(function(e){return r.a.createElement(xt,{note:e,key:e.id,editNote:I})})))});var Tt=function(){var e=Object(a.useContext)(v).setWorkshops,t=Object(h.e)();return Object(a.useCallback)(function(n){var a=localStorage.getItem("token");null!==a?A.a.get("".concat(K,"?center=").concat(n),{headers:{Authorization:"Bearer ".concat(a)}}).then(function(t){e(t.data["hydra:member"])}):t.push("/login")},[t])},Wt=function(e){return e.list.map(function(e){return r.a.createElement(te.a,{key:e.id,label:e.name,variant:"outlined"})})};function Kt(){var e=Object(y.a)(["\n  margin-bottom: 10px;\n"]);return Kt=function(){return e},e}var Lt=Object(P.a)(dt.a)(Kt()),_t=function(e){var t=e.workshop;return r.a.createElement(Lt,{key:t.id},r.a.createElement(pt.a,{style:{position:"relative",backgroundColor:"#212121"}},r.a.createElement(j.a,{color:"textPrimary",gutterBottom:!0},"Date : ",Object(Et.a)(new Date(t.date),"dd-MM-yyyy")),r.a.createElement(j.a,null,"Nombre de participants : ",t.nbParticipants),r.a.createElement(j.a,null,"Th\xe8mes : ",r.a.createElement(Wt,{list:t.topics})),t.topicPrecision?r.a.createElement(j.a,{variant:"body2",component:"p"},"Pr\xe9cisions sur le th\xe8me : ",t.topicPrecision):null,r.a.createElement(j.a,null,"Comp\xe9tences : ",r.a.createElement(Wt,{list:t.skills})),r.a.createElement(j.a,null,"Types de participants : ",r.a.createElement(Wt,{list:t.participantKinds})),r.a.createElement(j.a,null,"Tranches d'\xe2ge : ",r.a.createElement(Wt,{list:t.ageBreakpoints})),r.a.createElement(j.a,null,"Outils utilis\xe9s : ",r.a.createElement(Wt,{list:t.usedEquipments})),r.a.createElement(j.a,null,"Equipement fourni par : ",r.a.createElement(Wt,{list:t.equipmentSuppliers})),r.a.createElement(j.a,null,"Bilan global : ",t.globalReport),t.usedVault?r.a.createElement("div",null,r.a.createElement(j.a,null,"Coffre-fort num\xe9rique"),r.a.createElement(j.a,{variant:"body2",component:"p"},"Nb CFN cr\xe9\xe9s : ",t.nbBeneficiariesAccounts),r.a.createElement(j.a,{variant:"body2",component:"p"},"Nb documents : ",t.nbStoredDocs),r.a.createElement(j.a,{variant:"body2",component:"p"},"Nb rappels : ",t.nbCreatedEvents),r.a.createElement(j.a,{variant:"body2",component:"p"},"Nb contacts : ",t.nbCreatedContacts),r.a.createElement(j.a,{variant:"body2",component:"p"},"Nb notes : ",t.nbCreatedNotes)):null))},Ut=n(280),Jt=n(288),Qt=n(281),$t=function(e){var t=e.label,n=e.handleChange,a=e.value;return r.a.createElement(nt.a,{utils:tt.a},r.a.createElement(at.a,{disableToolbar:!0,format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:t,onChange:n,variant:"inline",value:a,KeyboardButtonProps:{"aria-label":"change date"}}))},Gt=n(268),Ht=n(266),Xt=n(293),Yt=n(279),Zt=n(286),en=function(e){var t=e.id,n=e.label,a=e.value,o=e.setFieldValue,l=e.options;return r.a.createElement(Gt.a,{style:{flex:1}},r.a.createElement(Xt.a,{id:t},n),r.a.createElement(Zt.a,{labelId:t,id:t,multiple:!0,value:a,onChange:function(e){o(t,e.target.value)},input:r.a.createElement(Ht.a,{id:t}),renderValue:function(e){return r.a.createElement("div",null,e.map(function(e){var t=l.find(function(t){return t["@id"]===e});return r.a.createElement(te.a,{key:e,label:t.name})}))}},l.map(function(e){return r.a.createElement(Yt.a,{key:e["@id"],value:e["@id"]},e.name)})))},tn=function(e){var t=e.id,n=e.label,a=e.handleChange;return r.a.createElement(ne.a,{id:t,label:n,name:t,onChange:a,type:"number",variant:"outlined",style:{marginLeft:8,marginRight:8,flex:1}})};function nn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function an(){var e=Object(y.a)(["\n  display: flex;\n  margin-top: 16px;\n"]);return an=function(){return e},e}function rn(){var e=Object(y.a)(["\n  margin-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n"]);return rn=function(){return e},e}var on=P.a.form(rn()),ln=P.a.div(an()),cn={date:new Date,center:"",globalReport:"",nbParticipants:0,nbBeneficiariesAccounts:0,nbStoredDocs:0,nbCreatedEvents:0,nbCreatedContacts:0,nbCreatedNotes:0,author:"",usedVault:!1,participantKinds:[],equipmentSuppliers:[],ageBreakpoints:[],usedEquipments:[],topics:[],skills:[]},sn=function(e,t){return function(n,a){e("topics",a),e("skills",function(e,t){return t.map(function(t){return function(e){return void 0!==e?e.skills:[]}(e.find(function(e){return t===e["@id"]}))}).flat()}(t,a))}},un=function(e){var t=e.centerId,n=e.closeModal,o=r.a.useState(new Date),l=Object(c.a)(o,2),i=l[0],s=l[1],d=Object(a.useContext)(v),E=d.workshops,y=d.setWorkshops,O=localStorage.getItem("token"),j=Object(h.e)(),x=Object(a.useContext)(p),k=x.participantKinds,w=x.setParticipantKinds,P=Object(a.useContext)(m),N=P.equipmentSuppliers,B=P.setEquipmentSuppliers,D=Object(a.useContext)(u),I=D.ageBreakpoints,q=D.setAgeBreakpoints,A=Object(a.useContext)(f),M=A.usedEquipments,R=A.setUsedEquipments,z=Object(a.useContext)(b),V=z.topics,F=z.setTopics,T=Object(Ze.useBoolean)(cn.usedVault),W=Object(c.a)(T,2),$=W[0],G=W[1];ve(_,w),ve(U,B),ve(J,q),ve(Q,R),ve(L,F);return r.a.createElement(C.a,{maxWidth:"sm"},r.a.createElement(Ie.a,{initialValues:cn,onSubmit:function(e){console.log(e),null!==O?S.a.post(K).send(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?nn(n,!0).forEach(function(t){Object(g.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nn(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{date:i,center:"/api/centers/".concat(t),skills:e.skills.map(function(e){return e["@id"]}),usedVault:$})).set("Authorization","Bearer ".concat(O)).then(function(e){n(),y([e.body].concat(Object(et.a)(E)))}):(alert("Il semble que vous ne soyez pas connect\xe9, veuillez vous reconnecter"),j.push("/login"))},render:function(e){var t=e.handleChange,n=e.handleSubmit,a=e.values,o=e.setFieldValue;return r.a.createElement(on,{onSubmit:n},r.a.createElement(ln,null,r.a.createElement($t,{label:"Date",handleChange:s,value:i}),r.a.createElement(tn,{id:"nbParticipants",label:"Nombre de participants",handleChange:t})),r.a.createElement(ln,null,r.a.createElement(en,{id:"topics",label:"Th\xe8mes",value:a.topics,setFieldValue:sn(o,V),options:V})),r.a.createElement(ln,null,r.a.createElement("div",null,a.skills.map(function(e){return r.a.createElement(te.a,{key:e["@id"],label:e.name,variant:"outlined",onDelete:function(){return o("skills",(t=a.skills,n=e,t.filter(function(e){return n["@id"]!==e["@id"]})));var t,n}})}))),r.a.createElement(ln,null,r.a.createElement(en,{id:"participantKinds",label:"Types de participants",value:a.participantKinds,setFieldValue:o,options:k})),r.a.createElement(ln,null,r.a.createElement(en,{id:"ageBreakpoints",label:"Tranches d'\xe2ge",value:a.ageBreakpoints,setFieldValue:o,options:I})),r.a.createElement(ln,null,r.a.createElement(en,{id:"usedEquipments",label:"Outils utilis\xe9s",value:a.usedEquipments,setFieldValue:o,options:M})),r.a.createElement(ln,null,r.a.createElement(en,{id:"equipmentSuppliers",label:"Equipement fourni par",value:a.equipmentSuppliers,setFieldValue:o,options:N})),r.a.createElement(ln,null,r.a.createElement(ne.a,{id:"globalReport",label:"Bilan global",name:"globalReport",type:"text",variant:"outlined",multiline:!0,rows:"4",onChange:t,style:{flex:1}})),r.a.createElement(ln,null,r.a.createElement(Ut.a,{control:r.a.createElement(Jt.a,{checked:$,onChange:G.toggle,inputProps:{"aria-label":"controlled"},color:"primary"}),label:"Coffre-fort num\xe9rique"})),$?r.a.createElement(Qt.a,null,r.a.createElement(ln,null,r.a.createElement(tn,{id:"nbBeneficiariesAccounts",label:"Nombre de cfn cr\xe9es",handleChange:t}),r.a.createElement(tn,{id:"nbStoredDocs",label:"Nombre de documents stock\xe9s",handleChange:t})),r.a.createElement(ln,null,r.a.createElement(tn,{id:"nbCreatedEvents",label:"\xc9v\xe8nements ajout\xe9s",handleChange:t}),r.a.createElement(tn,{id:"nbCreatedContacts",label:"Contacts ajout\xe9s",handleChange:t}),r.a.createElement(tn,{id:"nbCreatedNotes",label:"Notes ajout\xe9es",handleChange:t}))):null,r.a.createElement(ln,null,r.a.createElement(ee.a,{variant:"contained",color:"primary",type:"submit"},"Cr\xe9er")))}}))};function mn(){var e=Object(y.a)(["\n  position: absolute;\n  right: 0;\n"]);return mn=function(){return e},e}function dn(){var e=Object(y.a)(["\n  flex: 1;\n"]);return dn=function(){return e},e}function pn(){var e=Object(y.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  color: whitesmoke;\n"]);return pn=function(){return e},e}var bn=P.a.div(pn()),fn=Object(P.a)(j.a)(dn()),vn=Object(P.a)(O.a)(mn()),En=function(){var e=Object(Ye.a)(!1),t=Object(h.f)().centerId,n=Object(a.useContext)(v).workshops,o=wt(),l=o.center,c=o.fetchCenter,i=Tt();return Object(a.useEffect)(function(){c(t)},[c,t]),Object(a.useEffect)(function(){i(t)},[i,t]),r.a.createElement(C.a,{maxWidth:"sm"},r.a.createElement(_e.a,{fullScreen:!0,open:e.value,onClose:e.setFalse,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ue.a,{id:"form-dialog-title"},"Cr\xe9er un atelier"),r.a.createElement(Je.a,null,r.a.createElement(un,{centerId:t,closeModal:e.setFalse})),r.a.createElement(Qe.a,null,r.a.createElement(ee.a,{onClick:e.setFalse,color:"primary"},"Annuler"))),r.a.createElement(bn,null,r.a.createElement(fn,{variant:"h4",gutterBottom:!0,color:"textPrimary"},l.name),r.a.createElement(j.a,null,"Nb d'ateliers : ",l.workshops.length)),r.a.createElement(fn,{variant:"h4",gutterBottom:!0,color:"textPrimary"},"Ateliers"),r.a.createElement(vn,{size:"medium",color:"primary","aria-label":"add",onClick:e.setTrue},r.a.createElement(Xe.a,null)),n.map(function(e){return r.a.createElement(_t,{key:e.id,workshop:e})}))},hn=function(){return a.createElement(E.a,null,a.createElement(h.a,{path:"/",exact:!0,component:Se}),a.createElement(h.a,{path:"/login",exact:!0,component:Le}),a.createElement(h.a,{path:"/charts",exact:!0,component:Z}),a.createElement(h.a,{path:"/notes/:centerId",component:Ft}),a.createElement(h.a,{path:"/workshops/:centerId",component:En}))},gn=Object(i.a)({palette:{type:"dark",background:{default:"#203468",paper:"#203468"},text:{primary:"#eff1f7",secondary:"#eff1f7"},primary:{main:"#eff1f7",contrastText:"#677273"}}}),yn=function(){var e=a.useState([]),t=Object(c.a)(e,2),n=t[0],r=t[1],o=a.useState([]),l=Object(c.a)(o,2),i=l[0],E=l[1],h=a.useState([]),g=Object(c.a)(h,2),y=g[0],O=g[1],j=a.useState([]),C=Object(c.a)(j,2),x=C[0],k=C[1],w=a.useState([]),P=Object(c.a)(w,2),N=P[0],S=P[1],B=a.useState([]),D=Object(c.a)(B,2),I=D[0],q=D[1],A=a.useState([]),M=Object(c.a)(A,2),R=M[0],z=M[1];return a.createElement(s.a,{theme:gn},a.createElement(v.Provider,{value:{workshops:i,setWorkshops:E}},a.createElement(d.Provider,{value:{notes:n,setNotes:r}},a.createElement(b.Provider,{value:{topics:y,setTopics:O}},a.createElement(p.Provider,{value:{participantKinds:x,setParticipantKinds:k}},a.createElement(m.Provider,{value:{equipmentSuppliers:N,setEquipmentSuppliers:S}},a.createElement(u.Provider,{value:{ageBreakpoints:I,setAgeBreakpoints:q}},a.createElement(f.Provider,{value:{usedEquipments:R,setUsedEquipments:z}},a.createElement(hn,null)))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(yn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[177,1,2]]]);
//# sourceMappingURL=main.2506d4bb.chunk.js.map