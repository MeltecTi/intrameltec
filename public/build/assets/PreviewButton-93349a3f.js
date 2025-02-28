import{j as i,b as d}from"./app-1e18f165.js";const r=({fileId:t,fileName:o})=>{const s=async()=>{const e=(await d.get(route("resources.hseq.filepreview",{id:t}))).data.url;if(o.endsWith(".pdf"))window.open(e,"_blank");else if(o.endsWith(".docx")||o.endsWith(".xlsx")){const n=`https://docs.google.com/viewer?url=${encodeURIComponent(e)}&embedded=true`;window.open(n,"_blank")}else o.endsWith(".jpg")||o.endsWith(".jpeg")||o.endsWith(".png")||o.endsWith(".gif")?window.open("","_blank").document.write(`<img src="${e}" alt="Imagen" style="width:100%; height:auto;">`):o.endsWith(".mp4")||o.endsWith(".webm")||o.endsWith(".ogg")?window.open("","_blank").document.write(`
        <video controls autoplay style="width:100%; height:auto;">
          <source src="${e}" type="video/${o.split(".").pop()}">
          Tu navegador no soporta reproducción de video.
        </video>
      `):alert("Tipo de archivo no soportado para previsualización.")};return i.jsx("button",{className:"btn btn-primary",onClick:s,children:"Previsualizar"})},c=r;export{c as default};
