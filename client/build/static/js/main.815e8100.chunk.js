(window.webpackJsonpmpp=window.webpackJsonpmpp||[]).push([[0],{146:function(e,t,n){e.exports=n.p+"static/media/logo.2054d5e3.png"},172:function(e,t,n){e.exports=n(220)},177:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),o=(n(177),n(16)),i=n(149),u=n(267),s=a.createContext({notes:[],setNotes:function(){}}),m=Object(a.createContext)({workshops:[],setWorkshops:function(){}}),d=Object(a.createContext)({dropdowns:{},setDropdowns:function(){}}),p=n(23),b=n(17),f=n(65),E=n(12),h=n(247),v=n(78),g=n(251),O=n(85),y=n.n(O),j=(n(178),n(99)),w=n(13),x=n(18),C=n.n(x),k=n(28),P=n(132),S=n.n(P),N="https://api.mpp.reconnect.fr",B="".concat(N,"/oauth/trigger"),D="".concat(N,"/admin"),q="".concat(N,"/api"),A="".concat(q,"/centers"),I="".concat(q,"/dropdowns"),V="".concat(N,"/login"),R="".concat(N,"/logout"),T="".concat(q,"/notes"),F="".concat(q,"/tags"),K="".concat(q,"/workshops"),W=function(e){return"".concat(N).concat(e["@id"])},L=S.a.create();L.defaults.withCredentials=!0;var M=function(){var e=Object(k.a)(C.a.mark(function e(t){var n,a,r=arguments;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"get",a=r.length>2&&void 0!==r[2]?r[2]:{},e.abrupt("return",L({method:n,url:t,headers:{},data:a}));case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return a.useCallback(Object(k.a)(C.a.mark(function a(){var r,c,l=arguments;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=l.length>0&&void 0!==l[0]?l[0]:{},a.prev=1,a.next=4,M(e,n,r);case 4:c=a.sent,null!==t&&t(c.data),c.request.responseURL===V&&"/login"!==window.location.pathname&&window.location.replace("login"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log("Error making http call",e,a.t0.message);case 12:case"end":return a.stop()}},a,null,[[1,9]])})),[e])},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r=z(e,t,n);return a.useEffect(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(e)},[e])};function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function J(){var e=Object(E.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return J=function(){return e},e}var $=Object(w.a)(h.a)(J()),H=Object(b.h)(function(e){var t=e.history,n=Object(a.useContext)(s);U("".concat(T),function(e){n.setNotes(e["hydra:member"])});var c={},l={},o={};return n.notes.forEach(function(e,t){c=G({},c,Object(f.a)({},e.date,e.nbProAccounts)),l=G({},l,Object(f.a)({},e.date,e.nbBeneficiariesAccounts)),o=G({},o,Object(f.a)({},e.date,e.nbStoredDocs))}),r.a.createElement(g.a,{maxWidth:"sm"},r.a.createElement($,{size:"small",color:"primary","aria-label":"add",onClick:function(){return t.push("")}},r.a.createElement(y.a,null)),r.a.createElement(v.a,{variant:"h3",component:"h2",gutterBottom:!0,color:"textPrimary"},"Statistiques"),r.a.createElement(v.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de comptes b\xe9n\xe9ficiaires cr\xe9es par permanence"),r.a.createElement(j.a,{data:l,colors:["white"]}),r.a.createElement(v.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de comptes pros cr\xe9es par permanence"),r.a.createElement(j.a,{data:c,colors:["#d35400"]}),r.a.createElement(v.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"},"Nombre de documents stock\xe9s par permanence"),r.a.createElement(j.a,{data:o,colors:["#8e44ad"]}))}),X=n(252),Y=n(275),Z=n(274),_=n(256),ee=n(222),te=n(257),ne=n(258),ae=n(140),re=n.n(ae),ce=n(141),le=n.n(ce),oe=n(142),ie=n.n(oe),ue=n(143),se=n.n(ue);function me(){var e=Object(E.a)(["\n  position: absolute !important;\n  left: 50px;\n  top: 10px;\n"]);return me=function(){return e},e}function de(){var e=Object(E.a)(["\n  position: absolute !important;\n  right: 100px;\n  top: 10px;\n"]);return de=function(){return e},e}function pe(){var e=Object(E.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return pe=function(){return e},e}function be(){var e=Object(E.a)(["\n  background-color: #212121;\n  color: white;\n  cursor: pointer;\n  border-radius: 12px;\n  padding: 10px;\n"]);return be=function(){return e},e}function fe(){var e=Object(E.a)(["\n  display: flex;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  justify-content: space-around;\n"]);return fe=function(){return e},e}function Ee(){var e=Object(E.a)(["\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n"]);return Ee=function(){return e},e}var he=w.a.div(Ee()),ve=w.a.div(fe()),ge=w.a.a(be()),Oe=Object(w.a)(h.a)(pe()),ye=Object(w.a)(X.a)(de()),je=Object(w.a)(X.a)(me()),we=function(){var e=Object(b.e)(),t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)([]),u=Object(o.a)(i,2),s=u[0],m=u[1],d=Object(a.useState)([]),p=Object(o.a)(d,2),f=p[0],E=p[1];U(A,function(e){l(e["hydra:member"]),E(e["hydra:member"])}),U(F,function(e){return m(e["hydra:member"])});return r.a.createElement(g.a,{maxWidth:"md"},r.a.createElement(he,null,r.a.createElement(ye,{onClick:Object(k.a)(C.a.mark(function e(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(R);case 2:window.location.replace("/");case 3:case"end":return e.stop()}},e)}))},"D\xe9connexion"),r.a.createElement(je,{onClick:function(){window.location.replace(D)}},"Admin"),r.a.createElement(Oe,{size:"small",color:"primary","aria-label":"add",onClick:function(){return e.push("/charts")}},r.a.createElement(re.a,null)),r.a.createElement(v.a,{variant:"h2",component:"h2",gutterBottom:!0,color:"textPrimary"},"Centres"),r.a.createElement(ve,null,s?s.map(function(e){return r.a.createElement(Y.a,{key:e.id,label:e.name,clickable:!0,color:"secondary",onClick:function(){return t=e.id,void E(c.filter(function(e){return e.tags.includes("/api/tags/".concat(t))}));var t}})}):null),r.a.createElement(Z.a,{id:"outlined-basic",label:"Rechercher",variant:"outlined",onChange:function(e){var t=e.target.value;E(c.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}}),r.a.createElement(_.a,{dense:!1},f?f.map(function(t){return r.a.createElement(ee.a,{key:t.id},r.a.createElement(te.a,null,r.a.createElement(le.a,{htmlColor:"white"})),r.a.createElement(ne.a,{secondary:t.name}),t.permanence?r.a.createElement(ge,{style:{textAlign:"center",width:200},onClick:function(){return e.push("/centers/".concat(t.id,"/notes"))}},r.a.createElement(ie.a,{htmlColor:"white"}),r.a.createElement(ne.a,{primary:"Permanences"})):null,t.workshop?r.a.createElement(ge,{style:{marginLeft:8,textAlign:"center",width:200},onClick:function(){return e.push("/centers/".concat(t.id,"/workshops"))}},r.a.createElement(se.a,{htmlColor:"white"}),r.a.createElement(ne.a,{primary:"Ateliers"})):null)}):null)))},xe=n(147),Ce=n.n(xe),ke=n(73),Pe=n(146),Se=n.n(Pe);function Ne(){var e=Object(E.a)(["\n  padding-top: 100px;\n  margin-bottom: 200px;\n  display: flex;\n  flex-direction: column;\n"]);return Ne=function(){return e},e}function Be(){var e=Object(E.a)(["\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Be=function(){return e},e}function De(){var e=Object(E.a)(["\n  width: 140px;\n  height: 140px;\n  align-self: center;\n"]);return De=function(){return e},e}var qe=w.a.img(De()),Ae=w.a.div(Be()),Ie=w.a.form(Ne()),Ve=function(){var e=Object(b.e)(),t=Object(a.useContext)(d),n=(t.dropdowns,t.setDropdowns),r=z(I,n),c=function(){var t=Object(k.a)(C.a.mark(function t(n){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(V,"POST",n);case 2:return t.next=4,r();case 4:e.push("/");case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return a.createElement(g.a,{maxWidth:"sm"},a.createElement(Ae,null,a.createElement(v.a,{variant:"h3",component:"h2",gutterBottom:!0,color:"textPrimary"},"Ma petite permanence"),a.createElement(qe,{src:Se.a,alt:"logo"})),a.createElement(ke.a,{initialValues:{email:"",password:""},onSubmit:c,render:function(e){return a.createElement(Ie,{onSubmit:e.handleSubmit},a.createElement(Z.a,{id:"email",name:"email",type:"email",label:"Email",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.email&&a.createElement("div",{id:"feedback"},e.errors.email),a.createElement(Z.a,{id:"password",name:"password",type:"password",label:"Password",margin:"normal",variant:"outlined",onChange:e.handleChange}),e.errors.password&&a.createElement("div",{id:"feedback"},e.errors.password),a.createElement(X.a,{variant:"outlined",color:"primary",type:"submit"},"Login"),a.createElement(X.a,{color:"primary",variant:"contained",style:{marginTop:50,marginBottom:100,fontSize:20},href:B},a.createElement(Ce.a,{style:{marginRight:20}}),"Me connecter avec Reconnect Pro"))}}))},Re=n(261),Te=n(270),Fe=n(94),Ke=n.n(Fe),We=n(50),Le=n(259),Me=n(260),ze=n(279),Ue=n(89),Qe=n.n(Ue),Ge=n(150);function Je(e){return e.match(/\d+/)}function $e(){var e=Object(E.a)(["\n  margin: 8px;\n"]);return $e=function(){return e},e}function He(){var e=Object(E.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return He=function(){return e},e}function Xe(){var e=Object(E.a)(["\n  margin-bottom: 10px;\n"]);return Xe=function(){return e},e}var Ye=Object(w.a)(Le.a)(Xe()),Ze=Object(w.a)(h.a)(He()),_e=Object(w.a)(Y.a)($e()),et=Object(b.h)(function(e){var t=e.note,n=Object(b.e)();return r.a.createElement(Ye,{key:t.id},r.a.createElement(Me.a,{style:{position:"relative",backgroundColor:"#212121"}},r.a.createElement(Ze,{size:"small",color:"primary","aria-label":"add",onClick:function(){return n.push("/note/".concat(Je(t["@id"]),"/edit"))}},r.a.createElement(Qe.a,null)),r.a.createElement(v.a,{color:"textPrimary",gutterBottom:!0},"Date : ",Object(Ge.a)(new Date(t.date),"dd-MM-yyyy")),r.a.createElement(v.a,{variant:"body2",component:"p"},"Dur\xe9e : ",t.hours," h"),t.attendees?r.a.createElement(v.a,{variant:"body2",component:"p"},"Participants : ",t.attendees):null,t.place?r.a.createElement(v.a,{variant:"body2",component:"p"},"Lieu : ",t.place):null,r.a.createElement(_e,{avatar:r.a.createElement(ze.a,null,t.nbPros),label:"Professionnels rencontr\xe9s"}),r.a.createElement(_e,{avatar:r.a.createElement(ze.a,null,t.nbProAccounts),label:"Comptes pro cr\xe9es"}),r.a.createElement(_e,{avatar:r.a.createElement(ze.a,null,t.nbBeneficiaries),label:"B\xe9n\xe9ficiaires rencontr\xe9s"}),r.a.createElement(_e,{avatar:r.a.createElement(ze.a,null,t.nbBeneficiariesAccounts),label:"Comptes b\xe9n\xe9ficiaires cr\xe9es"}),r.a.createElement(_e,{avatar:r.a.createElement(ze.a,null,t.nbStoredDocs),label:"Documents stock\xe9s"}),r.a.createElement(v.a,{variant:"subtitle1"},"Remarques concernant les b\xe9n\xe9ficiaires"),r.a.createElement(v.a,{variant:"body2",component:"p"},t.beneficiariesNotes),r.a.createElement(v.a,{variant:"subtitle1"},"Remarques concernant les professionnels"),r.a.createElement(v.a,{variant:"body2",component:"p"},t.proNotes),r.a.createElement(v.a,{variant:"subtitle1"},"Remarques concernant Reconnect"),r.a.createElement(v.a,{variant:"body2",component:"p"},t.reconnectNotes)))}),tt=function(){var e=Object(b.e)();return r.a.createElement(X.a,{onClick:function(){return e.push("/")}},r.a.createElement(y.a,null),"Accueil")};function nt(){var e=Object(E.a)(["\n  position: absolute;\n  right: 0;\n"]);return nt=function(){return e},e}function at(){var e=Object(E.a)(["\n  flex: 1;\n"]);return at=function(){return e},e}function rt(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n  margin-bottom: 32px;\n"]);return rt=function(){return e},e}function ct(){var e=Object(E.a)(["\n  position: absolute;\n  left: 140px;\n  top: 10px;\n"]);return ct=function(){return e},e}function lt(){var e=Object(E.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  color: whitesmoke;\n"]);return lt=function(){return e},e}var ot=w.a.div(lt()),it=w.a.div(ct()),ut=w.a.div(rt()),st=Object(w.a)(v.a)(at()),mt=Object(w.a)(h.a)(nt()),dt=Object(b.h)(function(e){var t=e.history,n=e.match,c=Object(We.useNumber)(0),l=Object(o.a)(c,2),i=l[0],u=l[1],m=Object(We.useNumber)(1),d=Object(o.a)(m,2),p=d[0],b=d[1],f=n.params.centerId,E=Object(a.useContext)(s),h=E.notes,O=E.setNotes,y=r.a.useState({}),j=Object(o.a)(y,2),w=j[0],x=j[1];U("".concat(A,"/").concat(f),x);var C=z("".concat(T,"?center=").concat(f,"&page=").concat(p),function(e){u.setValue(e["hydra:totalItems"]),O(e["hydra:member"])});return r.a.useEffect(function(){C()},[C]),r.a.createElement(g.a,{maxWidth:"sm"},r.a.createElement(it,null,r.a.createElement(tt,null)),r.a.createElement(ot,null,w?r.a.createElement(r.a.Fragment,null,r.a.createElement(st,{variant:"h4",gutterBottom:!0,color:"textPrimary"},w.name),r.a.createElement(v.a,null,"Nb permanences: ",w.notes?w.notes.length:0),r.a.createElement(v.a,null,"Nb b\xe9nef rencontr\xe9s: ",w.beneficiaryCount),r.a.createElement(v.a,null,"Nb CFN cr\xe9es: ",w.createdBeneficiaryCount),r.a.createElement(v.a,null,"Nb docs stock\xe9s: ",w.documentsCount)):null,r.a.createElement("br",null),r.a.createElement(Re.a,null),r.a.createElement(st,{variant:"h4",gutterBottom:!0,color:"textPrimary"},"Permanences"),null===w?null:r.a.createElement(mt,{size:"medium",color:"primary","aria-label":"add",onClick:function(){return t.push("/centers/".concat(w.id,"/create-note"))}},r.a.createElement(Ke.a,null)),r.a.createElement(ut,null,r.a.createElement(Te.a,{count:Math.ceil(i/30),variant:"outlined",page:p,onChange:function(e,t){return b.setValue(t)}})),h.map(function(e){return r.a.createElement(et,{note:e,key:e.id})})))}),pt=n(113),bt=n(265),ft=n(273),Et=n(266),ht=n(263),vt=n(148),gt=n(24),Ot=n(268),yt=function(e){var t=e.label,n=e.handleChange,a=e.value;return r.a.createElement(gt.a,{utils:vt.a},r.a.createElement(Ot.a,{disableToolbar:!0,format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:t,onChange:n,variant:"inline",value:a,KeyboardButtonProps:{"aria-label":"change date"},style:{margin:8,flex:1}}))},jt=n(255),wt=n(253),xt=n(277),Ct=n(264),kt=n(271);function Pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function St(e,t){return e[t]?e[t].name:""}function Nt(e,t){return e[t]?e[t]:{}}function Bt(e,t){var n=Nt(e,t);return Object.keys(n).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pt(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n[e],{"@id":e})})}var Dt=function(e){var t=e.id,n=e.label,c=e.value,l=e.setFieldValue,o=e.required,i=void 0!==o&&o,u=Bt(Object(a.useContext)(d).dropdowns,t),s=u||[];return r.a.createElement(jt.a,{style:{marginLeft:8,marginRight:8,flex:1}},r.a.createElement(xt.a,{id:t},n),r.a.createElement(kt.a,{labelId:t,id:t,multiple:!0,value:c||[],required:i,onChange:function(e){l(t,e.target.value)},input:r.a.createElement(wt.a,{id:t}),renderValue:function(e){return r.a.createElement("div",null,e.map(function(e){var t=s.find(function(t){return t["@id"]===e});return r.a.createElement(Y.a,{key:e,label:t?t.name:""})}))}},s.map(function(e){return r.a.createElement(Ct.a,{key:e["@id"],value:e["@id"]},e.name)})))},qt=function(e){var t=e.id,n=e.label,a=e.handleChange,c=e.value,l=e.required,o=void 0!==l&&l;return r.a.createElement(Z.a,{id:t,label:n,name:t,onChange:a,type:"number",variant:"outlined",style:{marginLeft:8,marginRight:8,flex:1},value:c,required:o})};function At(){var e=Object(E.a)(["\n  display: flex;\n  margin-top: 16px;\n"]);return At=function(){return e},e}var It=w.a.div(At()),Vt=function(e){var t=e.children;return r.a.createElement(It,null,t)},Rt=function(e){var t=e.id,n=e.label,c=e.value,l=e.setFieldValue,o=e.required,i=Bt(Object(a.useContext)(d).dropdowns,"".concat(t,"s")),u=i||[];return r.a.createElement(jt.a,{style:{flex:1,margin:8}},r.a.createElement(xt.a,{id:t},n),r.a.createElement(kt.a,{labelId:t,id:t,value:c||[],required:o,onChange:function(e){l(t,e.target.value)}},u.map(function(e){return r.a.createElement(Ct.a,{key:e["@id"],value:e["@id"]},e.name)})))},Tt=function(e){var t=e.id,n=e.label,a=e.value,c=e.handleChange,l=e.rows,o=e.multiline,i=void 0!==o&&o,u=e.required,s=void 0!==u&&u;return r.a.createElement(Z.a,{id:t,name:t,type:"text",label:n,variant:"outlined",value:a,onChange:c,rows:l,multiline:i,required:s,style:{marginLeft:8,marginRight:8,flex:1}})},Ft=function(e){return r.a.createElement(X.a,{variant:"contained",color:"primary",type:"submit",disabled:e.disabled,style:{margin:8,flex:1}},e.children)},Kt=function(e){var t=e.workshop,n=e.onSubmit,c=Object(b.e)(),l=Object(We.useBoolean)(!1),i=Object(o.a)(l,2),u=i[0],s=i[1],m=Object(a.useContext)(d).dropdowns,p=Nt(m,"skills"),f=Bt(m,"skills");return r.a.createElement(ke.a,{initialValues:t,onSubmit:function(){var e=Object(k.a)(C.a.mark(function e(t){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s.setTrue(),e.next=3,n(t);case 3:setTimeout(function(){s.setFalse(),c.goBack()},500);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),render:function(e){var n=e.handleChange,a=e.handleSubmit,c=e.values,l=e.setFieldValue;return r.a.createElement("form",{onSubmit:a},r.a.createElement(Vt,null,r.a.createElement(yt,{label:"Date",handleChange:function(e){l("date",new Date(e.toISOString()))},value:c.date}),r.a.createElement(qt,{id:"nbParticipants",value:c.nbParticipants,label:"Nombre de participants",handleChange:n,required:!0})),r.a.createElement(Vt,null,r.a.createElement(Rt,{id:"duration",label:"Dur\xe9e",value:c.duration,setFieldValue:l,required:!0}),r.a.createElement(Tt,{id:"attendees",value:c.attendees,label:"Qui a anim\xe9 l'atelier",required:!0,handleChange:n,style:{marginLeft:8,marginRight:8,flex:1}})),r.a.createElement(Vt,null,r.a.createElement(Dt,{id:"topics",label:"Th\xe8mes",value:c.topics,required:!0,setFieldValue:function(e,t){l("topics",t),l("skills",function(e,t){var n=e;return t.reduce(function(e,t){return[].concat(Object(pt.a)(e),Object(pt.a)(f.filter(function(e){return e.topic["@id"]===t})))},[]).forEach(function(e){n.includes(e["@id"])||n.push(e["@id"])}),n}(c.skills,t))}})),r.a.createElement(Vt,null,r.a.createElement("div",null,c.skills.map(function(e){return r.a.createElement(Y.a,{key:e,label:St(p,e),variant:"outlined",onDelete:function(){return l("skills",c.skills.filter(function(t){return t!==e}))}})}))),r.a.createElement(Vt,null,r.a.createElement(Dt,{id:"participantKinds",label:"Types de participants",value:c.participantKinds,setFieldValue:l})),r.a.createElement(Vt,null,r.a.createElement(Dt,{id:"ageBreakpoints",label:"Tranches d'\xe2ge",value:c.ageBreakpoints,setFieldValue:l})),r.a.createElement(Vt,null,r.a.createElement(Dt,{id:"usedEquipments",label:"Outils utilis\xe9s",value:c.usedEquipments,setFieldValue:l})),r.a.createElement(Vt,null,r.a.createElement(Dt,{id:"equipmentSuppliers",label:"\xc9quipement fourni par",value:c.equipmentSuppliers,setFieldValue:l})),r.a.createElement(Vt,null,r.a.createElement(Tt,{id:"globalReport",value:c.globalReport,label:"Bilan global",required:!0,multiline:!0,rows:"4",handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Tt,{id:"improvementAxis",value:c.improvementAxis,label:"Axes d'am\xe9lioration",multiline:!0,rows:"4",handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(bt.a,{control:r.a.createElement(ft.a,{style:{marginLeft:8},value:c.usedVault,onChange:function(e,t){l("usedVault",t)},color:"primary"}),label:r.a.createElement("span",{style:{color:"white"}},"Coffre-fort num\xe9rique")})),c.usedVault?r.a.createElement(Et.a,null,r.a.createElement(Vt,null,r.a.createElement(qt,{id:"nbBeneficiariesAccounts",value:c.nbBeneficiariesAccounts,label:"Nombre de cfn cr\xe9es",handleChange:n}),r.a.createElement(qt,{id:"nbStoredDocs",value:c.nbStoredDocs,label:"Nombre de documents stock\xe9s",handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(qt,{id:"nbCreatedEvents",value:c.nbCreatedEvents,label:"\xc9v\xe8nements ajout\xe9s",handleChange:n}),r.a.createElement(qt,{id:"nbCreatedContacts",value:c.nbCreatedContacts,label:"Contacts ajout\xe9s",handleChange:n}),r.a.createElement(qt,{id:"nbCreatedNotes",value:c.nbCreatedNotes,label:"Notes ajout\xe9es",handleChange:n}))):null,r.a.createElement(Vt,null,u?r.a.createElement(Ft,{disabled:!0},r.a.createElement(ht.a,{size:20})):r.a.createElement(Ft,null,t["@id"]?"Mettre \xe0 jour":"Cr\xe9er")))}})},Wt=function(){var e=Object(b.g)().workshopId,t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],l=n[1],i=c?W(c):"";U("".concat(K,"/").concat(parseInt(e)),l);var u=z(i,function(){},"PUT");return r.a.createElement(g.a,{maxWidth:"sm"},null===c?r.a.createElement(r.a.Fragment,null):r.a.createElement(Kt,{workshop:c,onSubmit:u}))},Lt=function(e){var t=e.list,n=e.dropdownKind,c=Object(a.useContext)(d).dropdowns,l=n?Nt(c,n):{};return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(Y.a,{key:e,label:St(l,e),variant:"outlined"})}))},Mt=function(e){var t=e.iri,n=e.dropdownKind,c=Object(a.useContext)(d).dropdowns,l=n?Nt(c,n):{};return r.a.createElement("span",null,St(l,t))};function zt(){var e=Object(E.a)(["\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n"]);return zt=function(){return e},e}function Ut(){var e=Object(E.a)(["\n  margin-bottom: 10px;\n"]);return Ut=function(){return e},e}var Qt=Object(w.a)(Le.a)(Ut()),Gt=Object(w.a)(h.a)(zt()),Jt=function(e){var t=e.workshop,n=Object(b.e)();return r.a.createElement(Qt,null,r.a.createElement(Me.a,{style:{position:"relative",backgroundColor:"#212121"}},r.a.createElement(Gt,{size:"small",color:"primary","aria-label":"add",onClick:function(){return n.push("/workshop/".concat(Je(t["@id"]),"/edit"))}},r.a.createElement(Qe.a,null)),r.a.createElement(v.a,{color:"textPrimary",gutterBottom:!0},"Date : ",Object(Ge.a)(new Date(t.date),"dd-MM-yyyy")),r.a.createElement(v.a,null,"Qui a anim\xe9 l'atelier : ",t.attendees),r.a.createElement(v.a,null,"Nombre de participants : ",t.nbParticipants),"Dur\xe9e : ",r.a.createElement(Mt,{iri:t.duration,dropdownKind:"durations"})," minutes",r.a.createElement("div",null,"Th\xe8mes : ",r.a.createElement(Lt,{list:t.topics,dropdownKind:"topics"})),t.topicPrecision?r.a.createElement(v.a,{variant:"body2",component:"p"},"Pr\xe9cisions sur le th\xe8me : ",t.topicPrecision):null,r.a.createElement("div",null,"Comp\xe9tences : ",r.a.createElement(Lt,{list:t.skills,dropdownKind:"skills"})),r.a.createElement("div",null,"Types de participants : ",r.a.createElement(Lt,{list:t.participantKinds,dropdownKind:"participantKinds"})),r.a.createElement("div",null,"Tranches d'\xe2ge : ",r.a.createElement(Lt,{list:t.ageBreakpoints,dropdownKind:"ageBreakpoints"})),r.a.createElement("div",null,"Outils utilis\xe9s : ",r.a.createElement(Lt,{list:t.usedEquipments,dropdownKind:"usedEquipments"})),r.a.createElement("div",null,"Equipement fourni par : ",r.a.createElement(Lt,{list:t.equipmentSuppliers,dropdownKind:"equipmentSuppliers"})),r.a.createElement(v.a,{style:{whiteSpace:"pre-line"}},"Bilan global : ",t.globalReport),r.a.createElement(v.a,null,"Axes d'am\xe9lioration : ",t.improvementAxis),t.usedVault?r.a.createElement("div",null,r.a.createElement(v.a,null,"Coffre-fort num\xe9rique"),r.a.createElement(v.a,{variant:"body2",component:"p"},"Nb CFN cr\xe9\xe9s : ",t.nbBeneficiariesAccounts),r.a.createElement(v.a,{variant:"body2",component:"p"},"Nb documents : ",t.nbStoredDocs),r.a.createElement(v.a,{variant:"body2",component:"p"},"Nb rappels : ",t.nbCreatedEvents),r.a.createElement(v.a,{variant:"body2",component:"p"},"Nb contacts : ",t.nbCreatedContacts),r.a.createElement(v.a,{variant:"body2",component:"p"},"Nb notes : ",t.nbCreatedNotes)):null))};function $t(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n  margin-bottom: 32px;\n"]);return $t=function(){return e},e}function Ht(){var e=Object(E.a)(["\n  position: absolute;\n  right: 0;\n"]);return Ht=function(){return e},e}function Xt(){var e=Object(E.a)(["\n  flex: 1;\n"]);return Xt=function(){return e},e}function Yt(){var e=Object(E.a)(["\n  position: absolute;\n  left: 140px;\n  top: 10px;\n"]);return Yt=function(){return e},e}function Zt(){var e=Object(E.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  color: whitesmoke;\n"]);return Zt=function(){return e},e}var _t=w.a.div(Zt()),en=w.a.div(Yt()),tn=Object(w.a)(v.a)(Xt()),nn=Object(w.a)(h.a)(Ht()),an=w.a.div($t()),rn=function(){var e=r.a.useState(null),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(b.e)(),i=Object(b.g)().centerId,u=Object(a.useContext)(m),s=u.workshops,d=u.setWorkshops,p=Object(We.useNumber)(0),f=Object(o.a)(p,2),E=f[0],h=f[1],O=Math.ceil(E/30),y=function(){var e=Object(b.f)().search;return r.a.useMemo(function(){return new URLSearchParams(e)},[e])}().get("page"),j=null===y?1:y;U("".concat(A,"/").concat(i),c),U("".concat(K,"?center=").concat(i,"&page=").concat(j),function(e){d(e["hydra:member"]),h.setValue(e["hydra:totalItems"])});var w=function(){var e=Object(k.a)(C.a.mark(function e(t,n){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l.push("/centers/".concat(i,"/workshops?page=").concat(null===n?"1":n));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement(g.a,{maxWidth:"sm"},r.a.createElement(en,null,r.a.createElement(tt,null)),null===n?null:r.a.createElement(_t,null,r.a.createElement(tn,{variant:"h4",gutterBottom:!0,color:"textPrimary"},n.name),r.a.createElement(v.a,null,"Nb d'ateliers : ",n.workshops?n.workshops.length:0),r.a.createElement(v.a,null,"Nb CFN cr\xe9es : ",n.createdBeneficiaryCount?n.createdBeneficiaryCount:0),r.a.createElement(v.a,null,"Nb docs stock\xe9s : ",n.documentsCount?n.documentsCount:0)),r.a.createElement(Re.a,null),r.a.createElement(tn,{variant:"h4",gutterBottom:!0,color:"textPrimary"},"Ateliers"),null===n?null:r.a.createElement(nn,{size:"medium",color:"primary","aria-label":"add",onClick:function(){return l.push("/centers/".concat(n.id,"/create-workshop"))}},r.a.createElement(Ke.a,null)),r.a.createElement(an,null,r.a.createElement(Te.a,{count:O,variant:"outlined",page:parseInt(j),onChange:w})),s.map(function(e){return r.a.createElement(Jt,{key:e["@id"],workshop:e})}))},cn=function(){var e=Object(b.g)().centerId,t={center:"".concat(A,"/").concat(e),date:new Date,skills:[],nbBeneficiariesAccounts:0,nbStoredDocs:0,nbCreatedEvents:0,nbCreatedContacts:0,nbCreatedNotes:0},n=z(K,function(){},"POST");return r.a.createElement(g.a,{maxWidth:"sm"},r.a.createElement(Kt,{workshop:t,onSubmit:n}))},ln=function(e){var t=e.note,n=e.onSubmit,a=Object(b.e)(),c=Object(We.useBoolean)(!1),l=Object(o.a)(c,2),i=l[0],u=l[1];return r.a.createElement(ke.a,{initialValues:t,onSubmit:function(){var e=Object(k.a)(C.a.mark(function e(t){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u.setTrue(),e.next=3,n(t);case 3:setTimeout(function(){u.setFalse(),a.goBack()},500);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),render:function(e){var n=e.handleChange,a=e.handleSubmit,c=e.values,l=e.setFieldValue;return r.a.createElement("form",{onSubmit:a},r.a.createElement(Vt,null,r.a.createElement(yt,{label:"Date",handleChange:function(e){l("date",new Date(e.toISOString()))},value:c.date}),r.a.createElement(qt,{id:"hours",value:c.hours,label:"Nombre d'heures",handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(qt,{id:"nbPros",value:c.nbPros,label:"Nb pros rencontr\xe9s",handleChange:n}),r.a.createElement(qt,{id:"nbProAccounts",value:c.nbProAccounts,label:"Nb comptes pros cr\xe9\xe9s",handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(qt,{id:"nbBeneficiaries",value:c.nbBeneficiaries,label:"Nb benef rencontr\xe9s",handleChange:n}),r.a.createElement(qt,{id:"nbBeneficiariesAccounts",value:c.nbBeneficiariesAccounts,label:"Nb comptes benef cr\xe9\xe9s",handleChange:n}),r.a.createElement(qt,{id:"nbStoredDocs",value:c.nbStoredDocs,label:"Nb doc stock\xe9s",handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Tt,{id:"attendees",type:"text",label:"Qui a fait la perm",value:c.attendees,handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Tt,{id:"place",label:"Lieu (optionnel)",value:c.place,handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Tt,{id:"beneficiariesNotes",label:"Remarques en rapport avec les b\xe9n\xe9ficiaires",multiline:!0,rows:"4",value:c.beneficiariesNotes,handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Tt,{id:"proNotes",label:"Remarques en rapport avec les professionnels",multiline:!0,rows:"4",value:c.proNotes,handleChange:n})),r.a.createElement(Vt,null,r.a.createElement(Tt,{id:"reconnectNotes",label:"Remarques en rapport avec Reconnect",multiline:!0,rows:"4",value:c.reconnectNotes,handleChange:n})),r.a.createElement(Vt,null,i?r.a.createElement(Ft,{disabled:!0},r.a.createElement(ht.a,{size:20})):r.a.createElement(Ft,null,t["@id"]?"Mettre \xe0 jour":"Cr\xe9er")))}})},on=function(){var e=Object(b.g)().centerId,t={center:"".concat(A,"/").concat(e),date:new Date,hours:0,attendees:"",place:"",nbPros:0,nbProAccounts:0,nbBeneficiaries:0,nbBeneficiariesAccounts:0,nbStoredDocs:0,beneficiariesNotes:"",proNotes:"",reconnectNotes:""},n=z(T,function(){},"POST");return r.a.createElement(g.a,{maxWidth:"sm"},r.a.createElement(ln,{note:t,onSubmit:n}))},un=function(){var e=Object(b.g)().noteId,t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],l=n[1],i=c?W(c):"";U("".concat(T,"/").concat(parseInt(e)),l);var u=z(i,function(){},"PUT");return r.a.createElement(g.a,{maxWidth:"sm"},null===c?r.a.createElement(r.a.Fragment,null):r.a.createElement(ln,{note:c,onSubmit:u}))},sn=function(){return a.createElement(p.a,null,a.createElement(b.a,{path:"/",exact:!0,component:we}),a.createElement(b.a,{path:"/login",component:Ve}),a.createElement(b.a,{path:"/charts",component:H}),a.createElement(b.a,{path:"/centers/:centerId/notes",component:dt}),a.createElement(b.a,{path:"/centers/:centerId/create-note",component:on}),a.createElement(b.a,{path:"/note/:noteId/edit",component:un}),a.createElement(b.a,{path:"/centers/:centerId/workshops",component:rn}),a.createElement(b.a,{path:"/workshop/:workshopId/edit",component:Wt}),a.createElement(b.a,{path:"/centers/:centerId/create-workshop",component:cn}))},mn=Object(i.a)({palette:{type:"dark",background:{default:"#203468",paper:"#203468"},text:{primary:"#eff1f7",secondary:"#eff1f7"},primary:{main:"#eff1f7",contrastText:"#677273"}}}),dn=function(){var e=a.useState([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=a.useState([]),l=Object(o.a)(c,2),i=l[0],p=l[1],b=a.useState({}),f=Object(o.a)(b,2),E=f[0],h=f[1];return U(I,h),a.createElement(u.a,{theme:mn},a.createElement(m.Provider,{value:{workshops:i,setWorkshops:p}},a.createElement(s.Provider,{value:{notes:n,setNotes:r}},a.createElement(d.Provider,{value:{dropdowns:E,setDropdowns:h}},a.createElement(sn,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(dn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[172,1,2]]]);
//# sourceMappingURL=main.815e8100.chunk.js.map