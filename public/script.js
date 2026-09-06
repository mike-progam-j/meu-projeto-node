async function testarServidor() {
  const response = await fetch("/users");
  const dados = await response.json();

  console.log(dados.users);
} 


function bE(){nome= document.getElementById("nome").value;
const data = { name: nome };
fetch("/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
}
window.onload = function() {
  testarServidor();
}