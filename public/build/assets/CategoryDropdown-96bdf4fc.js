import{r as u,j as e}from"./app-1e18f165.js";function f({categories:g,onCategorySelect:l}){const[s,p]=u.useState([""]),[n,c]=u.useState(!1),h=()=>{c(!n)},i=t=>{const r=t.target.value,d=t.target.checked;let o;r===""?o=d?[""]:[]:(o=d?s.filter(a=>a!=="").concat(r):s.filter(a=>a!==r),o.length===0&&(o=[""])),p(o),l&&l(o.join(",")),c(!1)};return e.jsxs("div",{className:"relative w-full",children:[e.jsxs("button",{type:"button",className:"w-full bg-gray-100 border border-gray-300 text-gray-700 rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500",onClick:h,children:[s.length>0?s.includes("")?"Todos los datos":s.join(", "):"-- Selecciona categorías --",e.jsx("span",{className:"float-right text-gray-500",children:"▼"})]}),n&&e.jsxs("div",{className:"absolute z-10 bg-white border border-gray-300 rounded-lg shadow-md w-full mt-1 max-h-60 overflow-y-auto",children:[e.jsxs("label",{className:"flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer",children:[e.jsx("input",{type:"checkbox",value:"",checked:s.includes(""),onChange:i,className:"mr-2"}),"Todos los datos"]}),g.map((t,r)=>e.jsxs("label",{className:"flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer",children:[e.jsx("input",{type:"checkbox",value:t,checked:s.includes(t),onChange:i,className:"mr-2"}),t]},r))]})]})}export{f as CategoryDropdown};
