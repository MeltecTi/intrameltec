function f(...t){return t.length===1&&t[0]?t[0]:e=>{for(let n of t)typeof n=="function"?n(e):n!=null&&(n.current=e)}}export{f as $};
