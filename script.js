let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')

function validaNome() {

    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3)  {
        txt.innerHTML='Nome Inválido'
        txt.style.color = 'red'
    }
    else {
        txt.innerHTML="Nome válido"
        txt.style.color = 'green'
    }
}
      
function validaEmail() {

    let texto = document.querySelector('#txtEmail')
    if(email.value.length < 5) {
        texto.innerHTML='Email inválido'
        texto.style.color = 'red'
    }

    else{
        texto.innerHTML='Email válido'
        texto.style.color='green'
    }
}