import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let e={email:"",message:""};const t=document.querySelector(".feedback-form"),m=document.querySelector("#input-email"),s=document.querySelector("#input-text"),l=localStorage.getItem("feedback-form-state");l&&(e=JSON.parse(l),t.elements.email.value=e.email||"",t.elements.message.value=e.message||"");t.addEventListener("input",function(a){e.email=t.elements.email.value.trim(),e.message=t.elements.message.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",a=>{a.preventDefault(),m.value.trim()!==""&&s.value.trim()!==""?(console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",t.reset()):console.log("Fill please all fields")});
//# sourceMappingURL=commonHelpers2.js.map
