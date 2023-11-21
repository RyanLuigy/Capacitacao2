const dados = [
    { nome: "Matheus", telefone: "91234-5678", email: "email@gmail.com", empresa:"Ford"},
    { nome: "João", telefone: "91234-5678", email: "email@gmail.com", empresa:"McDonalds"},
    { nome: "Mariana", telefone: "91234-5678", email: "email@gmail.com", empresa:"Subway" },
    { nome: "Pedro", telefone: "91234-5678", email: "email@gmail.com", empresa:"Samsung"},
    { nome: "Érica", telefone: "91234-5678", email: "email@gmail.com", empresa:"Apple" },
  ];
  
  // 1 - filter: Cria um novo array com os elementos que passaram no teste provido por uma função.
  const apple = dados.filter((user)=>(user.empresa) == "Apple");
  
  console.log(apple);
  
  // 2 - map: permite a você iterar sobre o array e modificar seus elementos usando uma função de callback.
  // A função de callback será executada em cada um dos elementos do array.

  dados.map((user) => (user.projetoDesejado = "Site"));
  
  console.log(dados);
  
  // 3 - destructing
const dadosLocal = {...dados[1], local: "Salvador"};
console.log(dadosLocal)
    