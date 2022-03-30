const etapasNome = document.getElementsByClassName("etapaNome");
const etapas = document.getElementsByClassName("circulo");
const blocos = [
  document.getElementById("blocoCliente"),
  document.getElementById("blocoCs"),
  document.getElementById("blocoDev"),
  document.getElementById("blocoAdm"),
];

blocos.forEach((element) => {
  element.style.display = "none";
});

console.log(etapasNome);
console.log(etapas);

function DesativaTds() {
  blocos.forEach((element) => {
    element.style.display = "none";
  });
  for (const e of etapasNome) {
    e.classList.remove("ativado");
  }
  for (const e of etapas) {
    e.classList.remove("ativado");
  }
}

function AtivaCliente() {
  DesativaTds();
  blocos[0].style.display = "block";
  etapasNome[0].classList.add("ativado");
  etapas[0].classList.add("ativado");
}

function AtivaCs() {
  DesativaTds();
  blocos[1].style.display = "block";
  etapasNome[1].classList.add("ativado");
  etapas[1].classList.add("ativado");
}

function AtivaDev() {
  DesativaTds();
  blocos[2].style.display = "block";
  etapasNome[2].classList.add("ativado");
  etapas[2].classList.add("ativado");
}

function AtivaAdm() {
  DesativaTds();
  blocos[3].style.display = "block";
  etapasNome[3].classList.add("ativado");
  etapas[3].classList.add("ativado");
}
