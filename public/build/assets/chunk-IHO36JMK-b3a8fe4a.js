import{t as f,a as c,f as m}from"./chunk-UWE6H66T-10fe3d2c.js";import{r as l,j as u}from"./app-1e18f165.js";var h=f({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}});function P(r){let a=c(r,{enabled:typeof r.elementType=="string"}),t;return r.orientation==="vertical"&&(t="vertical"),r.elementType!=="hr"?{separatorProps:{...a,role:"separator","aria-orientation":t}}:{separatorProps:a}}function y(r){const{as:a,className:t,orientation:e,...o}=r;let i=a||"hr";i==="hr"&&e==="vertical"&&(i="div");const{separatorProps:n}=P({elementType:typeof i=="string"?i:"hr",orientation:e}),s=l.useMemo(()=>h({orientation:e,className:t}),[e,t]),p=l.useCallback((v={})=>({className:s,role:"separator","data-orientation":e,...n,...o,...v}),[s,e,n,o]);return{Component:i,getDividerProps:p}}var d=m((r,a)=>{const{Component:t,getDividerProps:e}=y({...r});return u.jsx(t,{ref:a,...e()})});d.displayName="HeroUI.Divider";var g=d;export{g as d};
