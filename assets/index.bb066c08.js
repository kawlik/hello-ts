var D=Object.defineProperty;var E=(s,e,n)=>e in s?D(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var b=(s,e,n)=>(E(s,typeof e!="symbol"?e+"":e,n),n);import{i as M,g as j,s as O,a as W,G as z,b as G,r as f,j as t,c as o,F as m,d as q,e as F,f as J,h as Q,k as B,l as H,m as K,n as V,o as X,p as Y,q as Z,t as ee,u as te,v as w,w as se,x as ne,y as ae,z as re,A as ie,B as oe,C as le,D as ce,E as C,H as de,_ as he,I as pe,J as ue,R as me,K as u,N as S,L as fe,M as ge,O as be,P as Ne}from"./vendor.84944e6e.js";const ye=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}};ye();var ve={apiKey:"AIzaSyAR6S5l9UiabY1TpO1DelUprklAJ6V5A8w",authDomain:"sockets-717fc.firebaseapp.com",projectId:"sockets-717fc",storageBucket:"sockets-717fc.appspot.com",messagingSenderId:"1073692013836",appId:"1:1073692013836:web:1af80e41fe3cc3c6a50529"};class Ae{constructor(){b(this,"firebaseApp");b(this,"firebaseAuth");this.firebaseApp=M(ve),this.firebaseAuth=j()}async getAuthAnonymously(){var e;try{return(e=await O(this.firebaseAuth))==null?void 0:e.user}catch{return null}}async getAuthWithGoogle(){var e;try{return(e=await W(this.firebaseAuth,new z))==null?void 0:e.user}catch{return null}}}var k=new Ae,$={path:"hello",next:{user:{path:"user"}}};class xe{constructor(){}save(e,n){localStorage.setItem(e,JSON.stringify(n))}read(e){return JSON.parse(localStorage.getItem(e)||"null")}delete(e){localStorage.removeItem(e)}get pathUser(){var e;return`${$.path}.${(e=$.next)==null?void 0:e.user.path}`}saveUser(e){this.save(this.pathUser,e)}readUser(){return this.read(this.pathUser)}deleteUser(){this.delete(this.pathUser)}}var A=new xe;class we{constructor(){b(this,"base","http://localhost:8080")}async verifyOnServer(e){var n,i,a;try{const r=(n=await G.post(this.base+"/user/verify",e))==null?void 0:n.data;return r?{displayName:(i=r==null?void 0:r.body)==null?void 0:i.displayName,photoURL:(a=r==null?void 0:r.body)==null?void 0:a.photoURL,uid:r==null?void 0:r.auth}:null}catch{return null}}}var Ue=new we;const _=f.exports.createContext(null);function N(){return f.exports.useContext(_)}function Se(s){const[e,n]=f.exports.useState(null);function i(){A.deleteUser(),n(null)}function a(){e||n(A.readUser())}function r(){!e||A.saveUser(e)}async function c(){const d=await k.getAuthAnonymously();n({uid:(d==null?void 0:d.uid)||"Anonymous"})}async function p(){const d=await k.getAuthWithGoogle(),v=await Ue.verifyOnServer({displayName:(d==null?void 0:d.displayName)||"",photoURL:(d==null?void 0:d.photoURL)||"",uid:(d==null?void 0:d.uid)||""});n(v)}return f.exports.useEffect(()=>{a(),r(),console.log(e)},[e]),t(_.Provider,{value:{user:e,logout:i,loginAnonymously:c,loginWithGoogle:p},children:s.children})}function ke(s){const[e,n]=f.exports.useState(!1),[i,a]=f.exports.useState(!1);!e&&s.getInstallPrompt().then(()=>n(!0)).then(()=>a(!0));async function r(){const p=await s.getInstallPrompt();p.prompt();const{outcome:d}=await p.userChoice;d==="accepted"&&c()}function c(){a(!1)}return t("section",{className:"app-prompt-pwa",children:i&&o(m,{children:[o("button",{className:"btn btn-dark shadow",onClick:()=>r(),children:[t(q,{}),t("small",{className:"align-middle fw-bold p-2",children:"Install as PWA"})]}),o("button",{className:"btn btn-secondary shadow",onClick:()=>c(),children:[t(F,{}),t("small",{className:"align-middle fw-bold p-2",children:"Dismiss"})]})]})})}var h={name:"Hello",path:"hello",next:{apps:{name:"Apps",path:"apps",next:{test:{name:"App Test",path:"test"},todo:{name:"App Todo",path:"todo"},shoping_list:{name:"App Shoping List",path:"shoping-list"}}},login:{name:"Login",path:"login"},news:{name:"News",path:"news"},user:{name:"User",path:"user",next:{add:{name:"Add friend",path:"add"},qrs:{name:"QR Code scaner",path:"qrs"},uid:{name:"User ID",path:"uid"}}}}};class $e{constructor(){b(this,"parser",new Map);this.parser.set("/"+this.pathApps,this.nameApps),this.parser.set("/"+this.pathApps+"/"+this.pathAppTest,this.nameAppTest),this.parser.set("/"+this.pathApps+"/"+this.pathAppTodo,this.nameAppTodo),this.parser.set("/"+this.pathApps+"/"+this.pathAppShoppingList,this.nameAppShoppingList),this.parser.set("/"+this.pathNews,this.nameNews),this.parser.set("/"+this.pathUser,this.nameUser),this.parser.set("/"+this.pathUser+"/"+this.pathUserAdd,this.nameUserAdd),this.parser.set("/"+this.pathUser+"/"+this.pathUserQRS,this.nameUserQRS),this.parser.set("/"+this.pathUser+"/"+this.pathUserUID,this.nameUserUID),this.parser.set("/"+this.pathLogin,this.nameLogin)}parse(e){return this.parser.get(e)||""}get pathApps(){var e;return`${(e=h.next)==null?void 0:e.apps.path}`}get nameApps(){var e;return`${(e=h.next)==null?void 0:e.apps.name}`}get pathAppTest(){var e,n;return`${(n=(e=h.next)==null?void 0:e.apps.next)==null?void 0:n.test.path}`}get nameAppTest(){var e,n;return`${(n=(e=h.next)==null?void 0:e.apps.next)==null?void 0:n.test.name}`}get pathAppTodo(){var e,n;return`${(n=(e=h.next)==null?void 0:e.apps.next)==null?void 0:n.todo.path}`}get nameAppTodo(){var e,n;return`${(n=(e=h.next)==null?void 0:e.apps.next)==null?void 0:n.todo.name}`}get pathAppShoppingList(){var e,n;return`${(n=(e=h.next)==null?void 0:e.apps.next)==null?void 0:n.shoping_list.path}`}get nameAppShoppingList(){var e,n;return`${(n=(e=h.next)==null?void 0:e.apps.next)==null?void 0:n.shoping_list.name}`}get pathNews(){var e;return`${(e=h.next)==null?void 0:e.news.path}`}get nameNews(){var e;return`${(e=h.next)==null?void 0:e.news.name}`}get pathUser(){var e;return`${(e=h.next)==null?void 0:e.user.path}`}get nameUser(){var e;return`${(e=h.next)==null?void 0:e.user.name}`}get pathUserAdd(){var e,n;return`${(n=(e=h.next)==null?void 0:e.user.next)==null?void 0:n.add.path}`}get nameUserAdd(){var e,n;return`${(n=(e=h.next)==null?void 0:e.user.next)==null?void 0:n.add.name}`}get pathUserQRS(){var e,n;return`${(n=(e=h.next)==null?void 0:e.user.next)==null?void 0:n.qrs.path}`}get nameUserQRS(){var e,n;return`${(n=(e=h.next)==null?void 0:e.user.next)==null?void 0:n.qrs.name}`}get pathUserUID(){var e,n;return`${(n=(e=h.next)==null?void 0:e.user.next)==null?void 0:n.uid.path}`}get nameUserUID(){var e,n;return`${(n=(e=h.next)==null?void 0:e.user.next)==null?void 0:n.uid.name}`}get pathLogin(){var e;return`${(e=h.next)==null?void 0:e.login.path}`}get nameLogin(){var e;return`${(e=h.next)==null?void 0:e.login.name}`}}var l=new $e;let g,L,I;class Le{constructor(e){b(this,"x",0);b(this,"y",0);this.selector=e}start(e){g=document.querySelector(this.selector),L=e==null?void 0:e.prev,I=e==null?void 0:e.next,e==null||e.curr,g.addEventListener("touchstart",this.onTouchStart),g.addEventListener("touchmove",this.onTouchMove),g.addEventListener("touchend",this.onTouchEnd)}stop(){g.removeEventListener("touchstart",this.onTouchStart),g.removeEventListener("touchmove",this.onTouchMove),g.removeEventListener("touchend",this.onTouchEnd)}onTouchStart(e){this.x=e.touches[0].clientX,this.y=e.touches[0].clientY}onTouchMove(e){const n=Math.min(window.innerWidth/3,333),i=.33,a=e.touches[0].clientX,r=e.touches[0].clientY,c=this.x-a,p=this.y-r;if(Math.abs(c)>Math.abs(p)){const d=c<=0?1:-1,v=Math.max(1-(Math.abs(c)-Math.abs(p))/n,0),P=d*i*(Math.abs(c)-Math.abs(p));g.style.opacity=`${v}`,g.style.transform=`translateX( ${P}px )`,g.style.transition="none"}if(Math.abs(c)>Math.abs(p)&&Math.abs(c)-Math.abs(p)>n){if(c<0)return L();if(c>0)return I()}}onTouchEnd(e){g.style.opacity="",g.style.transform="",g.style.transition="",this.x=0,this.y=0}}var R=new Le("#app-main-content");function Ie(s){return t("section",{className:"app-infobar-bottom",children:s.userUID?o(m,{children:[o("button",{className:`btn ${s.current===s.paths.news?"active":""}`,onClick:()=>s.toNews(),children:[t(J,{}),t("small",{className:"text-muted d-block",children:s.names.news})]}),o("button",{className:`btn ${s.current===s.paths.apps?"active":""}`,onClick:()=>s.toApps(),children:[t(Q,{}),t("small",{className:"text-muted d-block",children:s.names.apps})]}),o("button",{className:`btn ${s.current===s.paths.user?"active":""}`,onClick:()=>s.toUser(),children:[t(B,{}),t("small",{className:"text-muted d-block",children:s.names.user})]})]}):t(m,{children:o("button",{className:"btn",onClick:()=>{},children:[t(H,{}),t("small",{className:"text-muted d-block",children:"Our policy"})]})})},s.userUID)}function Re(s){return t(m,{children:t("section",{className:"app-infobar-top",children:s.userUID?o(m,{children:[o("button",{className:"btn",onClick:()=>s.goBack(),children:[t(K,{}),t("small",{className:"text-muted align-middle p-2",children:s.pathURL})]}),t("button",{className:"btn",onClick:()=>s.logout(),children:t(V,{})})]}):t(m,{children:o("button",{className:"btn",children:[t(X,{}),t("small",{className:"text-muted align-middle p-2",children:"Need help?"})]})})},s.userUID)})}function Ce(s){return o("form",{className:"app-login-form",children:[t("h2",{className:"fw-bold mb-0",children:"Join for free"}),t("hr",{className:"my-3"}),t("h3",{className:"fs-5 fw-bold mb-3",children:"Use a third-party"}),o("button",{className:"w-100 py-2 mb-2 btn btn-outline-primary btn-facebook",disabled:!0,children:[t(Y,{}),t("span",{className:"align-middle p-2",children:"Join with Facebook"})]}),o("button",{className:"w-100 py-2 mb-2 btn btn-outline-success btn-google",onClick:()=>s.loginWithGoogle(),children:[t(Z,{}),t("span",{className:"align-middle p-2",children:"Join with Google"})]}),o("button",{className:"w-100 py-2 mb-2 btn btn-outline-dark btn-github",disabled:!0,children:[t(ee,{}),t("span",{className:"align-middle p-2",children:"Join with GitHub"})]}),t("hr",{className:"my-3"}),t("h3",{className:"fs-5 fw-bold mb-3",children:"Or join as anonymous"}),o("button",{className:"w-100 py-2 mb-2 btn btn-outline-secondary",onClick:()=>s.loginAnonymously(),children:[t(te,{}),t("span",{className:"align-middle p-2",children:"Join anonymously"})]})]})}function x(s){return o("button",{className:"app-button-app btn btn-light",onClick:()=>s.open(),disabled:s==null?void 0:s.disabled,children:[s.icon,t("small",{className:"text-muted d-block",children:s.name})]})}function _e(){const s=w();return o("section",{id:"app-apps-container",children:[t(x,{open:()=>s(l.pathAppTest),icon:t(se,{}),name:l.nameAppTest}),t(x,{open:()=>s(l.pathAppTodo),icon:t(ne,{}),name:l.nameAppTodo}),t(x,{open:()=>s(l.pathAppShoppingList),icon:t(ae,{}),name:l.nameAppShoppingList})]})}function Te(){return t(m,{children:t("h1",{children:"News"})})}var Pe="/hello-ts/assets/anonymous.20c3dde4.png";function De(s){return o("section",{className:"app-user-view",children:[t("img",{src:s.user.photoURL||Pe,alt:s.user.displayName||"Anonymous",className:"user-photo"}),t("h2",{className:"lead mb-4",children:s.user.displayName||"Anonymous"}),t("div",{className:"info-block",children:o("button",{className:"btn btn-dark btn-id",onClick:()=>s.getID(),children:[t(re,{}),t("small",{className:"ms-2",children:"Get ID"})]})}),t("div",{className:"info-block",children:o("button",{className:"btn btn-dark btn-id",children:[t(ie,{}),t("small",{className:"ms-2",children:"Share"})]})})]})}function T(s){return o("section",{className:"app-display-user",children:[t("span",{className:"item lead",children:t("span",{children:s.selectedUser})}),t("span",{className:"item btn p-0",onClick:()=>s.unselectUser(),children:s.onClickName||"change"})]})}function Ee(){const{user:s}=N(),e=w(),n=["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii","jjj","kkk","lll","mmm","nnn","ooo","ppp","rrr","sss","ttt","uuu","www","zzz"];return o("section",{id:"app-user",children:[t(De,{getID:()=>e(l.pathUserUID),user:{displayName:(s==null?void 0:s.displayName)||"",photoURL:(s==null?void 0:s.photoURL)||""}}),t("div",{className:"user-firends",children:n.map(i=>t(T,{onClickName:"delete",selectedUser:i,unselectUser:()=>confirm(`Are you sure you want to remove ${i} from your Friends List?`)},i))}),o("aside",{className:"app-add-user",children:[t("button",{className:"btn btn-light",onClick:()=>e(l.pathUserQRS),children:t(oe,{})}),t("button",{className:"btn btn-light",onClick:()=>e(l.pathUserAdd),children:t(le,{})})]})]})}function U(s){return t("section",{className:"app-content",children:s.children})}function Me(){const[s,e]=f.exports.useState("");f.exports.useState([]);async function n(i){i.preventDefault(),e("")}return t(m,{children:o("article",{id:"app-layout-shopping-list",children:[t("h2",{className:"lead",children:"Add new thing to buy"}),o("div",{className:"input-group",children:[t("input",{type:"text",className:"form-control",value:s,onChange:i=>e(i.target.value)}),t("button",{className:"btn btn-success input-group-text",onClick:i=>n(i),disabled:s.length<3,children:t(ce,{})})]}),t(U,{})]})})}function je(s){const e=["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii","jjj","kkk","lll","mmm","nnn","ooo","ppp","rrr","sss","ttt","uuu","www","zzz"],[n,i]=f.exports.useState("");return o("section",{className:"app-select-user",children:[t("h2",{className:"lead",children:"Select user"}),o("div",{className:"input-group",children:[t("input",{type:"text",className:"form-control",onChange:a=>i(a.target.value)}),t("span",{className:"input-group-text",children:t(C,{})})]}),t("div",{className:"outcome-users",children:e.filter(a=>a.match(new RegExp(n,"gi"))).map(a=>t("button",{className:"btn",onClick:()=>s.setSelectedUser(a),children:a},a))})]})}function Oe(){const[s,e]=f.exports.useState("");return t(m,{children:s?o("article",{id:"app-layout-test",children:[t(T,{selectedUser:s,unselectUser:()=>e("")}),t(U,{})]}):t(je,{setSelectedUser:n=>e(n)})})}function We(){const[s,e]=f.exports.useState("");f.exports.useState([]);async function n(i){i.preventDefault(),e("")}return t(m,{children:o("article",{id:"app-layout-todo",children:[t("h2",{className:"lead",children:"Add new thing to do"}),o("div",{className:"input-group",children:[t("input",{type:"text",className:"form-control",value:s,onChange:i=>e(i.target.value)}),t("button",{className:"btn btn-success input-group-text",onClick:i=>n(i),disabled:s.length<3,children:t(de,{})})]}),t(U,{})]})})}function ze(s){const e=["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii","jjj","kkk","lll","mmm","nnn","ooo","ppp","rrr","sss","ttt","uuu","www","zzz"],[n,i]=f.exports.useState([]);async function a(r){r.preventDefault(),r.target.value.length<3?i([]):i(e.filter(c=>c.match(new RegExp(r.target.value,"gi"))))}return o("section",{className:"app-find-user",children:[t("h2",{className:"lead",children:"Find user"}),o("div",{className:"input-group",children:[t("input",{type:"text",className:"form-control",onChange:r=>a(r)}),t("span",{className:"input-group-text",children:t(C,{})})]}),t("div",{className:"outcome-users",children:n.map(r=>t("button",{className:"btn",onClick:()=>s.setSelectedUser(r),children:r},r))})]})}function Ge(){return N(),t("section",{id:"app-user-add",children:t(ze,{setSelectedUser:()=>confirm("Add selected user?")})})}function qe(){const{user:s}=N();return t("section",{id:"app-user-uid",children:t(he,{value:(s==null?void 0:s.uid)||"",className:"user-qr-code"})})}function Fe(){return N(),t("section",{id:"app-user-qrs",children:t(pe,{className:"user-qr-reader",onResult:s=>s&&confirm("Add scaned user?"),constraints:{facingMode:"environment",aspectRatio:1}})})}function Je(){const s=ue(),e=w(),n=[l.pathNews,l.pathApps,l.pathUser],i=s.pathname.split(/\//g)[1],{user:a,logout:r,loginAnonymously:c,loginWithGoogle:p}=N();return f.exports.useEffect(()=>(R.start({curr:i,prev:()=>n[n.indexOf(i)-1]&&e(n[n.indexOf(i)-1]),next:()=>n[n.indexOf(i)+1]&&e(n[n.indexOf(i)+1])}),()=>{R.stop()})),o(m,{children:[t(Re,{goBack:()=>e(-1),logout:()=>r(),userUID:a==null?void 0:a.uid,pathURL:l.parse(s.pathname)}),t("main",{id:"app-main-content",children:t(me,{children:a?o(m,{children:[o(u,{path:l.pathApps,children:[t(u,{path:"",element:t(_e,{})}),t(u,{path:l.pathAppTest,element:t(Oe,{})}),t(u,{path:l.pathAppTodo,element:t(We,{})}),t(u,{path:l.pathAppShoppingList,element:t(Me,{})})]}),t(u,{path:l.pathNews,element:t(Te,{})}),o(u,{path:l.pathUser,children:[t(u,{path:"",element:t(Ee,{})}),t(u,{path:l.pathUserAdd,element:t(Ge,{})}),t(u,{path:l.pathUserQRS,element:t(Fe,{})}),t(u,{path:l.pathUserUID,element:t(qe,{})})]}),t(u,{path:"*",element:t(S,{to:l.pathApps})})]}):o(m,{children:[t(u,{path:l.pathLogin,element:t(Ce,{loginAnonymously:()=>c(),loginWithGoogle:()=>p()})}),t(u,{path:"*",element:t(S,{to:l.pathLogin})})]})})},s.pathname),t(Ie,{toApps:()=>e(l.pathApps),toNews:()=>e(l.pathNews),toUser:()=>e(l.pathUser),userUID:a==null?void 0:a.uid,current:s.pathname.split(/\//g)[1],names:{apps:l.nameApps,news:l.nameNews,user:l.nameUser},paths:{apps:l.pathApps,news:l.pathNews,user:l.pathUser}})]})}function Qe(s={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:i,onRegistered:a,onRegisterError:r}=s;let c;const p=async(d=!0)=>{};return"serviceWorker"in navigator&&(c=new fe("/hello-ts/sw.js",{scope:"/hello-ts/",type:"classic"}),c.addEventListener("activated",d=>{d.isUpdate?window.location.reload():i==null||i()}),c.register({immediate:e}).then(d=>{a==null||a(d)}).catch(d=>{r==null||r(d)})),p}let y;class Be{constructor(){b(this,"updateSW");b(this,"installPromptReady",new Event("isInstallPromptReady"));this.updateSW=Qe({onNeedRefresh(){},onOfflineReady(){}}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),y=e,window.dispatchEvent(this.installPromptReady)}),this.getInstallPrompt()}async getInstallPrompt(){return new Promise((e,n)=>{if(y)return e(y);window.addEventListener("isInstallPromptReady",i=>e(y))})}}var He=new Be;function Ke(){return o(m,{children:[t(ke,{getInstallPrompt:He.getInstallPrompt}),t(ge,{children:t(Se,{children:t(Je,{})})})]})}be.exports.render(t(Ne.StrictMode,{children:t(Ke,{})}),document.getElementById("root"));
