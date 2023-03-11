let btn_open = document.getElementById("btnOpenModalRegister")
let btn_close = document.getElementById("btn_cancel")
let modal = document.getElementById("modal_bg")



btn_open.addEventListener("click", () =>{
    modal.style.display = "flex"
})
btn_close.addEventListener("click", () =>{
    modal.style.display = "none"
})

window.onclick = function(click) {
    if (click.target == modal) {
      modal.style.display = "none";
    }
  };