/***********************
  PESQUISA DE NOTAS
************************/

let listaNotas = document.querySelector('.lista-notas')
let tituloAPesquisar = document.querySelector('#tituloAPesquisar')
let texto = document.querySelector('#texto')
let indexID = ''
notas = []

function pesquisaNotas(){
	notas = JSON.parse(localStorage.notas)
	listaNotas.innerHTML = ''
	for (let i = 0; i < notas.length; i++) {
		let digitado = tituloAPesquisar.value
		let trechoTitulo = notas[i][0].slice(0, digitado.length)
		if(digitado === trechoTitulo){
		listaNotas.innerHTML += `
		<li id="${i}" class="list-group-item">
		  <h5 class="font-weight-bold">
		    ${notas[i][0]}
		  </h5>
		  <p>${notas[i][1]}</p>
		  <p>${notas[i][2]}</p>
		</li>

		`
		}
	}
}

