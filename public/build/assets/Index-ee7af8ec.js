import{r as e,j as t,a as x,b as u}from"./app-1e18f165.js";import{H as h}from"./Header-e2437195.js";import f from"./AuthenticatedLayout-35ef529f.js";import{S as j}from"./SapLoader-1dbbbffd.js";import{c as g,a as y}from"./chunk-J333S7JQ-f24c5987.js";import{c as b}from"./chunk-H4VOEXHF-94a8cce7.js";import"./Icons-b91f86eb.js";import"./chunk-GQT3YUX3-05826e1a.js";import"./chunk-UWE6H66T-765a7095.js";import"./index-4be7962f.js";import"./chunk-RFEIBVIG-7ed02666.js";import"./transition-ae3f1835.js";import"./chunk-XHQUSKIE-c5e0d731.js";import"./focusSafely-0d0e41b4.js";import"./useFocusable-37bc966c.js";import"./useHover-fbcb60c8.js";import"./index-dc85cc98.js";import"./chunk-RJKRL3AU-284c64b8.js";import"./chunk-6NL67ZRH-a7aa1da5.js";import"./proxy-1822e291.js";import"./create-factory-27ee3d52.js";function z({auth:m,unreadNotifications:n}){const[o,i]=e.useState([]),[p,l]=e.useState(!1),[d,a]=e.useState(null);return e.useEffect(()=>{(async()=>{l(!0),a(null),i([]);try{const r=await u("https://my345513.sapbydesign.com/sap/byd/odata/cust/v1/vmumaterial/MaterialCollection?$format=json&$select=ObjectID,InternalID,Description,CreationDateTime,LastChangeDateTime,Text&$expand=Text&$top=12000",{auth:{username:"MSRODRIGUEZ",password:"*0caUt1J4ufkzE*"}});if(l(!1),a(null),i(r.data.d.results),r.status!==200)throw new Error("Error al obtener los datos: ")}catch(s){a(s)}})()},[]),t.jsxs(f,{auth:m,unreadNotifications:n,header:t.jsx(h,{title:"Productos desde SAP"}),children:[t.jsx(x,{title:"Productos desde SAP"}),t.jsx("section",{className:"py-12",children:t.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:t.jsxs("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:[p&&t.jsx(j,{}),d&&t.jsx(Error,{message:d}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 m-5 gap-5",children:o&&o.map(({ObjectID:c,InternalID:s,Text:[{Text:r}]})=>t.jsxs(b,{className:"py-4",children:[t.jsxs(g,{className:'"pb-0 pt-2 px-4 flex-col items-start',children:[t.jsx("p",{children:r}),t.jsx("small",{children:s})]}),t.jsx(y,{className:"overflow-visible py-2",children:t.jsx("p",{children:"Otro texto"})})]},c))})]})})})]})}export{z as default};
