var $=Object.defineProperty;var k=(n,e,a)=>e in n?$(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var u=(n,e,a)=>(k(n,typeof e!="symbol"?e+"":e,a),a);import{i as I,g as E,s as M,r as b,j as t,a as c,F as p,d as R,b as P,c as _,e as C,f as O,h as T,k as D,l as J,m as j,n as W,o as B,u as F,p as H,R as q,q as g,N as y,v as X,H as Y,t as z,w as G}from"./vendor.d0540878.js";const K=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}};K();var V={apiKey:"AIzaSyAR6S5l9UiabY1TpO1DelUprklAJ6V5A8w",authDomain:"sockets-717fc.firebaseapp.com",projectId:"sockets-717fc",storageBucket:"sockets-717fc.appspot.com",messagingSenderId:"1073692013836",appId:"1:1073692013836:web:1af80e41fe3cc3c6a50529"};class Q{constructor(){u(this,"firebaseApp");u(this,"firebaseAuth");this.firebaseApp=I(V),this.firebaseAuth=E()}async getAuthAnonymously(){var e;return(e=await M(this.firebaseAuth))==null?void 0:e.user}}var Z=new Q,w={path:"hello",next:{user:{path:"user"}}};class ee{constructor(){}save(e,a){localStorage.setItem(e,JSON.stringify(a))}read(e){return JSON.parse(localStorage.getItem(e)||"null")}delete(e){localStorage.removeItem(e)}get pathUser(){var e;return`${w.path}.${(e=w.next)==null?void 0:e.user.path}`}saveUser(e){this.save(this.pathUser,e)}readUser(){return this.read(this.pathUser)}deleteUser(){this.delete(this.pathUser)}}var v=new ee;const U=b.exports.createContext(null);function te(){return b.exports.useContext(U)}function ne(n){const[e,a]=b.exports.useState(null);function l(){v.deleteUser(),a(null)}function s(){e||a(v.readUser())}function r(){!e||v.saveUser(e)}async function i(){a(await Z.getAuthAnonymously())}return b.exports.useEffect(()=>{s(),r(),console.log(e)},[e]),t(U.Provider,{value:{user:e,logout:l,loginAnonymously:i},children:n.children})}var m={name:"Hello",path:"hello",next:{apps:{name:"Apps",path:"apps"},login:{name:"Login",path:"login"},news:{name:"News",path:"news"},user:{name:"User",path:"user"}}};class se{constructor(){u(this,"parser",new Map);this.parser.set("/"+this.pathApps,this.nameApps),this.parser.set("/"+this.pathNews,this.nameNews),this.parser.set("/"+this.pathUser,this.nameUser),this.parser.set("/"+this.pathLogin,this.nameLogin)}parse(e){return this.parser.get(e)||""}get pathApps(){var e;return`${(e=m.next)==null?void 0:e.apps.path}`}get nameApps(){var e;return`${(e=m.next)==null?void 0:e.apps.name}`}get pathNews(){var e;return`${(e=m.next)==null?void 0:e.news.path}`}get nameNews(){var e;return`${(e=m.next)==null?void 0:e.news.name}`}get pathUser(){var e;return`${(e=m.next)==null?void 0:e.user.path}`}get nameUser(){var e;return`${(e=m.next)==null?void 0:e.user.name}`}get pathLogin(){var e;return`${(e=m.next)==null?void 0:e.login.path}`}get nameLogin(){var e;return`${(e=m.next)==null?void 0:e.login.name}`}}var o=new se;let h,N,x;class ae{constructor(e){u(this,"x",0);u(this,"y",0);this.selector=e}start(e){h=document.querySelector(this.selector),N=e==null?void 0:e.prev,x=e==null?void 0:e.next,e==null||e.curr,h.addEventListener("touchstart",this.onTouchStart),h.addEventListener("touchmove",this.onTouchMove),h.addEventListener("touchend",this.onTouchEnd)}stop(){h.removeEventListener("touchstart",this.onTouchStart),h.removeEventListener("touchmove",this.onTouchMove),h.removeEventListener("touchend",this.onTouchEnd)}onTouchStart(e){this.x=e.touches[0].clientX,this.y=e.touches[0].clientY}onTouchMove(e){const a=Math.min(window.innerWidth/3,333),l=.33,s=e.touches[0].clientX,r=e.touches[0].clientY,i=this.x-s,f=this.y-r;if(Math.abs(i)>Math.abs(f)){const d=i<=0?1:-1,S=Math.max(1-(Math.abs(i)-Math.abs(f))/a,0),L=d*l*(Math.abs(i)-Math.abs(f));h.style.opacity=`${S}`,h.style.transform=`translateX( ${L}px )`,h.style.transition="none"}if(Math.abs(i)>Math.abs(f)&&Math.abs(i)-Math.abs(f)>a){if(i<0)return N();if(i>0)return x()}}onTouchEnd(e){h.style.opacity="",h.style.transform="",h.style.transition="",this.x=0,this.y=0}}var A=new ae("#app-main-content");function re(n){return t("section",{className:"app-infobar-bottom",children:n.userUID?c(p,{children:[c("button",{className:`btn ${n.current===n.names.news?"active":""}`,onClick:()=>n.toNews(),children:[t(R,{}),t("small",{className:"text-muted d-block",children:n.names.news})]}),c("button",{className:`btn ${n.current===n.names.apps?"active":""}`,onClick:()=>n.toApps(),children:[t(P,{}),t("small",{className:"text-muted d-block",children:n.names.apps})]}),c("button",{className:`btn ${n.current===n.names.user?"active":""}`,onClick:()=>n.toUser(),children:[t(_,{}),t("small",{className:"text-muted d-block",children:n.names.user})]})]}):t(p,{children:c("button",{className:"btn",onClick:()=>{},children:[t(C,{}),t("small",{className:"text-muted d-block",children:"Our policy"})]})})},n.userUID)}function ie(n){return t(p,{children:t("section",{className:"app-infobar-top",children:n.userUID?c(p,{children:[c("button",{className:"btn",onClick:()=>n.goBack(),children:[t(O,{}),t("small",{className:"text-muted align-middle p-2",children:n.pathURL})]}),t("button",{className:"btn",onClick:()=>n.logout(),children:t(T,{})})]}):t(p,{children:c("button",{className:"btn",children:[t(D,{}),t("small",{className:"text-muted align-middle p-2",children:"Need help?"})]})})},n.userUID)})}function oe(n){return c("form",{className:"app-login-form",children:[t("h2",{className:"fw-bold mb-0",children:"Join for free"}),t("hr",{className:"my-3"}),t("h3",{className:"fs-5 fw-bold mb-3",children:"Use a third-party"}),c("button",{className:"w-100 py-2 mb-2 btn btn-outline-primary btn-facebook",disabled:!0,children:[t(J,{}),t("span",{className:"align-middle p-2",children:"Join with Facebook"})]}),c("button",{className:"w-100 py-2 mb-2 btn btn-outline-success btn-google",disabled:!0,children:[t(j,{}),t("span",{className:"align-middle p-2",children:"Join with Google"})]}),c("button",{className:"w-100 py-2 mb-2 btn btn-outline-dark btn-github",disabled:!0,children:[t(W,{}),t("span",{className:"align-middle p-2",children:"Join with GitHub"})]}),t("hr",{className:"my-3"}),t("h3",{className:"fs-5 fw-bold mb-3",children:"Or join as anonymous"}),c("button",{className:"w-100 py-2 mb-2 btn btn-outline-secondary",onClick:()=>n.loginAnonymously(),children:[t(B,{}),t("span",{className:"align-middle p-2",children:"Join anonymously"})]})]})}function le(){const n=F(),e=H(),a=[o.pathNews,o.pathApps,o.pathUser],l=n.pathname.split(/\//g)[1],{user:s,logout:r,loginAnonymously:i}=te();return b.exports.useEffect(()=>(A.start({curr:l,prev:()=>e(a[a.indexOf(l)-1]||l),next:()=>e(a[a.indexOf(l)+1]||l)}),()=>{A.stop()})),c(p,{children:[t(ie,{goBack:()=>e(-1),logout:()=>r(),userUID:s==null?void 0:s.uid,pathURL:o.parse(n.pathname)}),t("main",{id:"app-main-content",children:t(q,{children:s?c(p,{children:[t(g,{path:o.pathApps,element:t("h1",{children:"Apps"})}),t(g,{path:o.pathNews,element:t("h1",{children:"News"})}),t(g,{path:o.pathUser,element:t("h1",{children:"User"})}),t(g,{path:"*",element:t(y,{to:o.pathApps})})]}):c(p,{children:[t(g,{path:o.pathLogin,element:t(oe,{loginAnonymously:()=>i()})}),t(g,{path:"*",element:t(y,{to:o.pathLogin})})]})})},n.pathname),t(re,{toApps:()=>e(o.pathApps),toNews:()=>e(o.pathNews),toUser:()=>e(o.pathUser),userUID:s==null?void 0:s.uid,current:o.parse(n.pathname),names:{apps:o.nameApps,news:o.nameNews,user:o.nameUser}})]})}function ce(n={}){const{immediate:e=!1,onNeedRefresh:a,onOfflineReady:l,onRegistered:s,onRegisterError:r}=n;let i;const f=async(d=!0)=>{};return"serviceWorker"in navigator&&(i=new X("/hello-ts/sw.js",{scope:"/hello-ts/",type:"classic"}),i.addEventListener("activated",d=>{d.isUpdate?window.location.reload():l==null||l()}),i.register({immediate:e}).then(d=>{s==null||s(d)}).catch(d=>{r==null||r(d)})),f}class he{constructor(){u(this,"updateSW");u(this,"installPromptReady",new Event("isInstallPromptReady"));u(this,"installPrompt",null);this.updateSW=ce({onNeedRefresh(){},onOfflineReady(){}}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.installPrompt=e,window.dispatchEvent(this.installPromptReady)})}async getInstallPrompt(){return new Promise((e,a)=>{if(this.installPrompt)return e(this.installPrompt);window.addEventListener("isInstallPromptReady",l=>e(this.installPrompt))})}}var ue=new he;function de(){return ue.getInstallPrompt(),t(Y,{children:t(ne,{children:t(le,{})})})}z.exports.render(t(G.StrictMode,{children:t(de,{})}),document.getElementById("root"));
