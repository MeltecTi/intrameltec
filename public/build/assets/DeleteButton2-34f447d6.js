import{j as n,b as p}from"./app-1e18f165.js";import{s as l,h as d,a as c}from"./swalHelper-619e6f4c.js";import{b as u}from"./chunk-DBLREEYE-6b14ae71.js";import"./sweetalert2.all-e79fa271.js";import"./sweetalert2-react-content.es-29b1c2f4.js";import"./chunk-XHQUSKIE-c5e0d731.js";import"./useFocusable-37bc966c.js";import"./focusSafely-0d0e41b4.js";import"./chunk-RJKRL3AU-284c64b8.js";import"./chunk-GQT3YUX3-05826e1a.js";import"./chunk-UWE6H66T-765a7095.js";import"./index-4be7962f.js";import"./index-dc85cc98.js";import"./useHover-fbcb60c8.js";import"./chunk-6NL67ZRH-a7aa1da5.js";import"./proxy-1822e291.js";import"./create-factory-27ee3d52.js";import"./chunk-RFEIBVIG-7ed02666.js";import"./chunk-TDOFO53L-d21b4ec9.js";function P({id:o}){const s=async a=>{l({title:"Advertencia",icon:"warning",text:"¿seguro desea eliminar el elemento?"}).then(async i=>{var t,r;if(i.isConfirmed)try{const e=await p.delete(`/kpis/delete/${a}`);if(e.status!==200)throw new Error(e.data.message);d({message:e.data.message}).then(m=>{m.isConfirmed&&window.location.reload()})}catch(e){c({message:((r=(t=e.response)==null?void 0:t.data)==null?void 0:r.message)||e.message})}})};return n.jsx(u,{className:"text-white bg-red-800 px-5 py-2 rounded-lg mx-1 hover:bg-red-600 transition ease-out",color:"danger",size:"sm",onPress:()=>s(o),children:"Borrar"})}export{P as default};
