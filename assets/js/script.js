
  let nome = window.document.getElementById('nome')
  let email = window.querySelector("#email")
  let assunto = document.querySelector("#assunto")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
  let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
      txt.innerHTML = "nome invalido"
      txt.style.color = "red"

  }else{
    txt.innerHTML ="Nome Valido"
     txt.style.color = "green"
  }
  }








    /* 
  case sensitive = reconhece letras maiusculas e minusculas

  por tag: getElementByTagName()
  por id: getElementById()
  por nome: getElementsByName()
  por Classes: getElementByClassName()
  por seletor: querySelector()
  */