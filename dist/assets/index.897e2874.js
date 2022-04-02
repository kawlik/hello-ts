var v=Object.defineProperty;var A=(n,e,s)=>e in n?v(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var h=(n,e,s)=>(A(n,typeof e!="symbol"?e+"":e,s),s);import{i as U,g as x,s as S,r as f,j as t,a as i,F as d,d as k,b as $,c as I,e as L,f as R,h as P,k as C,l as _,m as O,n as D,o as E,u as J,p as j,R as W,q as p,N as b,v as B,H as F,t as H,w as M}from"./vendor.d0540878.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}};q();var z={apiKey:"AIzaSyAR6S5l9UiabY1TpO1DelUprklAJ6V5A8w",authDomain:"sockets-717fc.firebaseapp.com",projectId:"sockets-717fc",storageBucket:"sockets-717fc.appspot.com",messagingSenderId:"1073692013836",appId:"1:1073692013836:web:1af80e41fe3cc3c6a50529"};class G{constructor(){h(this,"firebaseApp");h(this,"firebaseAuth");this.firebaseApp=U(z),this.firebaseAuth=x()}async getAuthAnonymously(){var e;return(e=await S(this.firebaseAuth))==null?void 0:e.user}}var K=new G,w={path:"hello",next:{user:{path:"user"}}};class T{constructor(){}save(e,s){localStorage.setItem(e,JSON.stringify(s))}read(e){return JSON.parse(localStorage.getItem(e)||"null")}delete(e){localStorage.removeItem(e)}get pathUser(){var e;return`${w.path}.${(e=w.next)==null?void 0:e.user.path}`}saveUser(e){this.save(this.pathUser,e)}readUser(){return this.read(this.pathUser)}deleteUser(){this.delete(this.pathUser)}}var g=new T;const y=f.exports.createContext(null);function V(){return f.exports.useContext(y)}function Y(n){const[e,s]=f.exports.useState(null);function o(){g.deleteUser(),s(null)}function a(){e||s(g.readUser())}function r(){!e||g.saveUser(e)}async function c(){s(await K.getAuthAnonymously())}return f.exports.useEffect(()=>{a(),r(),console.log(e)},[e]),t(y.Provider,{value:{user:e,logout:o,loginAnonymously:c},children:n.children})}var u={name:"Hello",path:"hello",next:{apps:{name:"Apps",path:"apps"},login:{name:"Login",path:"login"},news:{name:"News",path:"news"},user:{name:"User",path:"user"}}};class Q{constructor(){h(this,"parser",new Map);this.parser.set("/"+this.pathApps,this.nameApps),this.parser.set("/"+this.pathNews,this.nameNews),this.parser.set("/"+this.pathUser,this.nameUser),this.parser.set("/"+this.pathLogin,this.nameLogin)}parse(e){return this.parser.get(e)||""}get pathApps(){var e;return`${(e=u.next)==null?void 0:e.apps.path}`}get nameApps(){var e;return`${(e=u.next)==null?void 0:e.apps.name}`}get pathNews(){var e;return`${(e=u.next)==null?void 0:e.news.path}`}get nameNews(){var e;return`${(e=u.next)==null?void 0:e.news.name}`}get pathUser(){var e;return`${(e=u.next)==null?void 0:e.user.path}`}get nameUser(){var e;return`${(e=u.next)==null?void 0:e.user.name}`}get pathLogin(){var e;return`${(e=u.next)==null?void 0:e.login.path}`}get nameLogin(){var e;return`${(e=u.next)==null?void 0:e.login.name}`}}var l=new Q;function X(n){return t("section",{className:"app-infobar-bottom",children:n.userUID?i(d,{children:[i("button",{className:`btn ${n.current===n.names.news?"active":""}`,onClick:()=>n.toNews(),children:[t(k,{}),t("small",{className:"text-muted d-block",children:n.names.news})]}),i("button",{className:`btn ${n.current===n.names.apps?"active":""}`,onClick:()=>n.toApps(),children:[t($,{}),t("small",{className:"text-muted d-block",children:n.names.apps})]}),i("button",{className:`btn ${n.current===n.names.user?"active":""}`,onClick:()=>n.toUser(),children:[t(I,{}),t("small",{className:"text-muted d-block",children:n.names.user})]})]}):t(d,{children:i("button",{className:"btn",onClick:()=>{},children:[t(L,{}),t("small",{className:"text-muted d-block",children:"Our policy"})]})})},n.userUID)}function Z(n){return t(d,{children:t("section",{className:"app-infobar-top",children:n.userUID?i(d,{children:[i("button",{className:"btn",onClick:()=>n.goBack(),children:[t(R,{}),t("small",{className:"text-muted align-middle p-2",children:n.pathURL})]}),t("button",{className:"btn",onClick:()=>n.logout(),children:t(P,{})})]}):t(d,{children:i("button",{className:"btn",children:[t(C,{}),t("small",{className:"text-muted align-middle p-2",children:"Need help?"})]})})},n.userUID)})}function ee(n){return i("form",{className:"app-login-form",children:[t("h2",{className:"fw-bold mb-0",children:"Join for free"}),t("hr",{className:"my-3"}),t("h3",{className:"fs-5 fw-bold mb-3",children:"Use a third-party"}),i("button",{className:"w-100 py-2 mb-2 btn btn-outline-primary btn-facebook",disabled:!0,children:[t(_,{}),t("span",{className:"align-middle p-2",children:"Join with Facebook"})]}),i("button",{className:"w-100 py-2 mb-2 btn btn-outline-success btn-google",disabled:!0,children:[t(O,{}),t("span",{className:"align-middle p-2",children:"Join with Google"})]}),i("button",{className:"w-100 py-2 mb-2 btn btn-outline-dark btn-github",disabled:!0,children:[t(D,{}),t("span",{className:"align-middle p-2",children:"Join with GitHub"})]}),t("hr",{className:"my-3"}),t("h3",{className:"fs-5 fw-bold mb-3",children:"Or join as anonymous"}),i("button",{className:"w-100 py-2 mb-2 btn btn-outline-secondary",onClick:()=>n.loginAnonymously(),children:[t(E,{}),t("span",{className:"align-middle p-2",children:"Join anonymously"})]})]})}function te(){const n=J(),e=j(),{user:s,logout:o,loginAnonymously:a}=V();return i(d,{children:[t(Z,{goBack:()=>e(-1),logout:()=>o(),userUID:s==null?void 0:s.uid,pathURL:l.parse(n.pathname)}),t("main",{id:"app-main-content",children:t(W,{children:s?i(d,{children:[t(p,{path:l.pathApps,element:t("h1",{children:"Apps"})}),t(p,{path:l.pathNews,element:t("h1",{children:"News"})}),t(p,{path:l.pathUser,element:t("h1",{children:"User"})}),t(p,{path:"*",element:t(b,{to:l.pathApps})})]}):i(d,{children:[t(p,{path:l.pathLogin,element:t(ee,{loginAnonymously:()=>a()})}),t(p,{path:"*",element:t(b,{to:l.pathLogin})})]})},s==null?void 0:s.uid)}),t(X,{toApps:()=>e(l.pathApps),toNews:()=>e(l.pathNews),toUser:()=>e(l.pathUser),userUID:s==null?void 0:s.uid,current:l.parse(n.pathname),names:{apps:l.nameApps,news:l.nameNews,user:l.nameUser}})]})}function ne(n={}){const{immediate:e=!1,onNeedRefresh:s,onOfflineReady:o,onRegistered:a,onRegisterError:r}=n;let c;const N=async(m=!0)=>{};return"serviceWorker"in navigator&&(c=new B("/hello-ts/sw.js",{scope:"/hello-ts/",type:"classic"}),c.addEventListener("activated",m=>{m.isUpdate?window.location.reload():o==null||o()}),c.register({immediate:e}).then(m=>{a==null||a(m)}).catch(m=>{r==null||r(m)})),N}class se{constructor(){h(this,"updateSW");h(this,"installPromptReady",new Event("isInstallPromptReady"));h(this,"installPrompt",null);this.updateSW=ne({onNeedRefresh(){},onOfflineReady(){}}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.installPrompt=e,window.dispatchEvent(this.installPromptReady)})}async getInstallPrompt(){return new Promise((e,s)=>{if(this.installPrompt)return e(this.installPrompt);window.addEventListener("isInstallPromptReady",o=>e(this.installPrompt))})}}var ae=new se;function re(){return ae.getInstallPrompt(),t(F,{children:t(Y,{children:t(te,{})})})}H.exports.render(t(M.StrictMode,{children:t(re,{})}),document.getElementById("root"));
