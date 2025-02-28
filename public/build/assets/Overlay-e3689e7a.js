import{m as T,b as h,a as x}from"./focusSafely-0d0e41b4.js";import{$ as y}from"./getScrollParent-84ae6cc8.js";import{r as s,R as $,s as S,n as M,z as H}from"./app-1e18f165.js";import{a as R}from"./FocusScope-34698c61.js";function L({children:e}){let t=s.useMemo(()=>({register:()=>{}}),[]);return $.createElement(T.Provider,{value:t},e)}const b=typeof document<"u"&&window.visualViewport,W=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let p=0,v;function I(e={}){let{isDisabled:t}=e;h(()=>{if(!t)return p++,p===1&&(S()?v=F():v=D()),()=>{p--,p===0&&v()}},[t])}function D(){return x(u(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),u(document.documentElement,"overflow","hidden"))}function F(){let e,t,n=c=>{e=y(c.target,!0),!(e===document.documentElement&&e===document.body)&&e instanceof HTMLElement&&window.getComputedStyle(e).overscrollBehavior==="auto"&&(t=u(e,"overscrollBehavior","contain"))},o=c=>{if(!e||e===document.documentElement||e===document.body){c.preventDefault();return}e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth&&c.preventDefault()},l=c=>{let r=c.target;g(r)&&r!==document.activeElement&&(c.preventDefault(),f(),r.style.transform="translateY(-2000px)",r.focus(),requestAnimationFrame(()=>{r.style.transform=""})),t&&t()},a=c=>{let r=c.target;g(r)&&(f(),r.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{r.style.transform="",b&&(b.height<window.innerHeight?requestAnimationFrame(()=>{E(r)}):b.addEventListener("resize",()=>E(r),{once:!0}))}))},i=null,f=()=>{if(i)return;let c=()=>{window.scrollTo(0,0)},r=window.pageXOffset,w=window.pageYOffset;i=x(m(window,"scroll",c),u(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),u(document.documentElement,"overflow","hidden"),u(document.body,"marginTop",`-${w}px`),()=>{window.scrollTo(r,w)}),window.scrollTo(0,0)},d=x(m(document,"touchstart",n,{passive:!1,capture:!0}),m(document,"touchmove",o,{passive:!1,capture:!0}),m(document,"touchend",l,{passive:!1,capture:!0}),m(document,"focus",a,!0));return()=>{t==null||t(),i==null||i(),d()}}function u(e,t,n){let o=e.style[t];return e.style[t]=n,()=>{e.style[t]=o}}function m(e,t,n,o){return e.addEventListener(t,n,o),()=>{e.removeEventListener(t,n,o)}}function E(e){let t=document.scrollingElement||document.documentElement,n=e;for(;n&&n!==t;){let o=y(n);if(o!==document.documentElement&&o!==document.body&&o!==n){let l=o.getBoundingClientRect().top,a=n.getBoundingClientRect().top;a>l+n.clientHeight&&(o.scrollTop+=a-l)}n=o.parentElement}}function g(e){return e instanceof HTMLInputElement&&!W.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}const A=s.createContext({});function B(){var e;return(e=s.useContext(A))!==null&&e!==void 0?e:{}}const C=$.createContext(null);function P(e){let t=M(),{portalContainer:n=t?null:document.body,isExiting:o}=e,[l,a]=s.useState(!1),i=s.useMemo(()=>({contain:l,setContain:a}),[l,a]),{getContainer:f}=B();if(!e.portalContainer&&f&&(n=f()),!n)return null;let d=e.children;return e.disableFocusManagement||(d=$.createElement(R,{restoreFocus:!0,contain:l&&!o},d)),d=$.createElement(C.Provider,{value:i},$.createElement(L,null,d)),H.createPortal(d,n)}function z(){let e=s.useContext(C),t=e==null?void 0:e.setContain;h(()=>{t==null||t(!0)},[t])}export{I as $,z as a,P as b};
