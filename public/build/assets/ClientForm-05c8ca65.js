import{j as e}from"./app-1e18f165.js";import{u}from"./useLocalStorage-c370666f.js";import{i as r}from"./chunk-I5HUX6BY-4a12b416.js";import{b as c}from"./chunk-DBLREEYE-6b14ae71.js";import"./chunk-Y3N5MZNS-a1e06c6b.js";import"./chunk-UWE6H66T-765a7095.js";import"./index-4be7962f.js";import"./index-43d4f642.js";import"./useFocusable-37bc966c.js";import"./focusSafely-0d0e41b4.js";import"./chunk-XHQUSKIE-c5e0d731.js";import"./chunk-RJKRL3AU-284c64b8.js";import"./useHover-fbcb60c8.js";import"./chunk-CAFRINWI-f16a5c27.js";import"./chunk-RFUEKIFS-0ac119b0.js";import"./chunk-RFEIBVIG-7ed02666.js";import"./useControlledState-0b6c3be6.js";import"./useFormReset-2e1c4ba3.js";import"./useField-e75fa2b3.js";import"./useLabel-5cfcb98f.js";import"./useLabels-bd056dc8.js";import"./useFormValidation-711bb887.js";import"./chunk-YBBOLEEC-f43d4461.js";import"./mergeRefs-2b78dc7b.js";import"./chunk-GQT3YUX3-05826e1a.js";import"./index-dc85cc98.js";import"./chunk-6NL67ZRH-a7aa1da5.js";import"./proxy-1822e291.js";import"./create-factory-27ee3d52.js";import"./chunk-TDOFO53L-d21b4ec9.js";const J=({onClientUpdate:l})=>{const[t,m]=u("client",{nameClient:"",email:"",phone:"",identification:""}),i=n=>{const s=n.target.name,p=n.target.value,a={...t};a[s]=p,m(a)},o=n=>{n.preventDefault(),l(t)};return e.jsxs("form",{onSubmit:o,children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{type:"text",value:t.nameClient,name:"nameClient",label:"Nombre del cliente",radius:"sm",labelPlacement:"inside",isRequired:!0,onChange:i}),e.jsx(r,{type:"email",name:"email",value:t.email,label:"Correo electronico del cliente",radius:"sm",labelPlacement:"inside",isRequired:!0,onChange:i})]}),e.jsxs("div",{className:"flex gap-2 py-4",children:[e.jsx(r,{type:"tel",name:"phone",label:"Celular del cliente",value:t.phone,radius:"sm",labelPlacement:"inside",isRequired:!0,onChange:i}),e.jsx(r,{type:"number",onChange:i,name:"identification",value:t.identification,label:"Nùmero de Identificacion",radius:"sm",labelPlacement:"inside",isRequired:!0,startContent:e.jsx("div",{className:"pointer-events-none flex items-center",children:e.jsx("span",{className:"text-default-400 text-small",children:"C.C"})})})]}),e.jsx(c,{type:"submit",children:"Continuar"})]})};export{J as ClientForm};
