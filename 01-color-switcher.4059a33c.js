const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let o=null;t.addEventListener("click",(function(){t.setAttribute("disabled","true"),e.removeAttribute("disabled"),o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled","true"),t.removeAttribute("disabled"),clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.4059a33c.js.map