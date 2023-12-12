//const form = document.querySelector("#formulario")
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputTelefone = document.querySelector("#telefone");
const inputInteresse = document.querySelector("#interesse");
const inputInvestimento = document.querySelector("#investimento");
const inputDescricao = document.querySelector("#descricao");

function Enviar(){
  var nomeValue = document.getElementById('nome').value;
var emailValue = document.getElementById('email').value;
var telefoneValue = document.getElementById('telefone').value;

var formValue = {
  name: nomeValue,
  email: emailValue,
  telefone:telefoneValue
}
console.log(formValue);
}
