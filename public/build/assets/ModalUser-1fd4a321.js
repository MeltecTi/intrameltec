import{W as x,j as t}from"./app-1e18f165.js";import{T as h}from"./toastify-e61f9dad.js";import{S as f}from"./sweetalert2.all-e79fa271.js";import{w as j}from"./sweetalert2-react-content.es-29b1c2f4.js";import{M as g}from"./Modal-3351711c.js";import{s as b,l as v}from"./chunk-2YPZVDEL-bf6f6b01.js";import{b as w}from"./chunk-DBLREEYE-6b14ae71.js";import"./transition-ae3f1835.js";import"./useMenuTriggerState-2cd95046.js";import"./SelectionManager-72778fb6.js";import"./FocusScope-34698c61.js";import"./focusSafely-0d0e41b4.js";import"./useCollator-f8b7b7a1.js";import"./getScrollParent-84ae6cc8.js";import"./useFocusable-37bc966c.js";import"./useControlledState-0b6c3be6.js";import"./useLocalizedStringFormatter-6dfb6611.js";import"./useOverlayTrigger-69319b45.js";import"./useOverlayPosition-f27a92c9.js";import"./useResizeObserver-1f814b9f.js";import"./useOverlayTriggerState-20dfbcae.js";import"./chunk-UWE6H66T-765a7095.js";import"./index-4be7962f.js";import"./chunk-XHQUSKIE-c5e0d731.js";import"./chunk-RJKRL3AU-284c64b8.js";import"./index-dc85cc98.js";import"./chunk-RFEIBVIG-7ed02666.js";import"./useHover-fbcb60c8.js";import"./useListBoxSection-2ad159ad.js";import"./useLabel-5cfcb98f.js";import"./useLabels-bd056dc8.js";import"./useFormValidation-711bb887.js";import"./useField-e75fa2b3.js";import"./index-43d4f642.js";import"./chunk-ELWWYGWQ-69dda2d8.js";import"./chunk-WQVQ7P2I-846db4ca.js";import"./chunk-GQT3YUX3-05826e1a.js";import"./Overlay-e3689e7a.js";import"./useDialog-1281e82d.js";import"./VisuallyHidden-6788c411.js";import"./mergeRefs-2b78dc7b.js";import"./chunk-736YWA4T-0c999bc3.js";import"./proxy-1822e291.js";import"./create-factory-27ee3d52.js";import"./chunk-YBBOLEEC-f43d4461.js";import"./useFormReset-2e1c4ba3.js";import"./chunk-7F3ZLNJ6-bf78ceb0.js";import"./chunk-TDOFO53L-d21b4ec9.js";import"./chunk-6NL67ZRH-a7aa1da5.js";const jt=({modal:a,closeModal:s,dataModal:o,roles:l})=>{const p=j(f),{data:e,setData:m,put:n,reset:d}=x({id:"",role:""}),c=r=>{m({id:o.id,role:r.target.value})},u=r=>{r.preventDefault(),m({...e,id:o.id});try{if(e.role==="")throw new Error("El campo de Seleccionar Rol no puede ir vacio");n(`/users/${e.id}`,e),h({text:"Rol Actualizado",duration:3e3,position:"right",style:{background:"#1CAC78"}}).showToast(),d(),s()}catch(i){p.fire({title:"Error!!",icon:"error",text:i.message})}};return t.jsx(g,{show:a,onClose:s,children:t.jsxs("div",{className:"p-6",children:[t.jsx("h2",{className:"text-lg font-medium text-gray-600 text-center",children:`Editar el rol de ${o.name}`}),t.jsxs("p",{className:"text-xs text-center text-red-500",children:[t.jsx("span",{children:"*"}),"Para actualizar los datos personales del usuario, dirigete a la ",t.jsx("a",{className:"underline hover:text-blue-500 transition duration-200 ease-in-out",href:"https://admin.google.com/ac/home",target:"_blank",rel:"no noreferrer",children:"Consola de Administrador de Google"})," ",t.jsx("span",{children:"*"})]}),t.jsxs("form",{onSubmit:u,children:[t.jsx("div",{className:"my-6",children:t.jsx(b,{label:"Seleccione el Nuevo Rol",className:"max-w",onChange:c,isRequired:!0,children:l.map(({id:r,name:i})=>t.jsx(v,{value:r,children:i},r))})}),t.jsx("div",{className:"mt-6 flex justify-end",children:t.jsx(w,{type:"submit",className:"text-white bg-blue-700 hover:bg-green-600",children:"Actualizar Rol del Usuario"})})]})]})})};export{jt as ModalUser};
