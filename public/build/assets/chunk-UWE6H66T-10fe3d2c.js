import{r as h}from"./app-1e18f165.js";import{i as f}from"./index-4be7962f.js";var v=new Set(["id","type","style","title","role","tabIndex","htmlFor","width","height","abbr","accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","challenge","charset","checked","cite","class","className","cols","colSpan","command","content","contentEditable","contextMenu","controls","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","dropzone","encType","enterKeyHint","for","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","hidden","high","href","hrefLang","httpEquiv","icon","inputMode","isMap","itemId","itemProp","itemRef","itemScope","itemType","kind","label","lang","list","loop","manifest","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","open","optimum","pattern","ping","placeholder","poster","preload","radioGroup","referrerPolicy","readOnly","rel","required","rows","rowSpan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","slot","sortable","span","spellCheck","src","srcDoc","srcSet","start","step","target","translate","typeMustMatch","useMap","value","wmode","wrap"]),M=new Set(["onCopy","onCut","onPaste","onLoad","onError","onWheel","onScroll","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerEnter","onPointerLeave","onPointerUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd"]),c=/^(data-.*)$/,b=/^(aria-.*)$/,l=/^(on[A-Z].*)$/;function C(e,o={}){let{labelable:i=!0,enabled:a=!0,propNames:r,omitPropNames:n,omitEventNames:s,omitDataProps:p,omitEventProps:g}=o,u={};if(!a)return e;for(const t in e)n!=null&&n.has(t)||s!=null&&s.has(t)&&l.test(t)||l.test(t)&&!M.has(t)||p&&c.test(t)||g&&l.test(t)||(Object.prototype.hasOwnProperty.call(e,t)&&(v.has(t)||i&&b.test(t)||r!=null&&r.has(t)||c.test(t))||l.test(t))&&(u[t]=e[t]);return u}function P(e){return h.forwardRef(e)}var D=(e,o,i=!0)=>{if(!o)return[e,{}];const a=o.reduce((r,n)=>n in e?{...r,[n]:e[n]}:r,{});return i?[Object.keys(e).filter(n=>!o.includes(n)).reduce((n,s)=>({...n,[s]:e[s]}),{}),a]:[e,a]},d=["small","medium","large"],m={theme:{opacity:["disabled"],spacing:["divider"],borderWidth:d,borderRadius:d},classGroups:{shadow:[{shadow:d}],"font-size":[{text:["tiny",...d]}],"bg-image":["bg-stripe-gradient-default","bg-stripe-gradient-primary","bg-stripe-gradient-secondary","bg-stripe-gradient-success","bg-stripe-gradient-warning","bg-stripe-gradient-danger"]}},E=(e,o)=>{var i,a,r;return f(e,{...o,twMerge:(i=o==null?void 0:o.twMerge)!=null?i:!0,twMergeConfig:{...o==null?void 0:o.twMergeConfig,theme:{...(a=o==null?void 0:o.twMergeConfig)==null?void 0:a.theme,...m.theme},classGroups:{...(r=o==null?void 0:o.twMergeConfig)==null?void 0:r.classGroups,...m.classGroups}}})};export{C as a,P as f,D as m,E as t};
