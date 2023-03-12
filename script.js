let btn_open = document.getElementById("btnOpenModalRegister")
let btn_close = document.getElementById("btn_cancel")
let modal = document.getElementById("modal_bg")
let upload_img = document.getElementById("file_input")
let register = document.getElementById("btn_register")
let nome = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let main = document.getElementById("all_cards")

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

register.addEventListener("click", () =>{
  modal.style.display = "none"
  main.innerHTML += 
  `<div class='card'>
  <div class='informations'>
      <h3>Name:</h3>
      <p>${nome.value}</p>
      <h3>Email:</h3>
      <p>${email.value}</p>
      <h3>Senha: </h3>
      <p>${password.value}</p>
  </div>
  <div class='cardFooter'>
  </div>
</div>`;
nome.value = ""
email.value = ""
password.value = ""
})
