/*********************************
  CÓDIGO PARA EDIÇÃO DE NOTAS
**********************************/

// Função para editar notas
let listaNotas = document.querySelector('.lista-notas')
let titulo = document.querySelector('#titulo')
let texto = document.querySelector('#texto')
let indexID = ''
notas = []

listarNotas()

function listarNotas(){
	notas = JSON.parse(localStorage.notas)
	listaNotas.innerHTML = ''
	for (let i = 0; i < notas.length; i++) {
		listaNotas.innerHTML += `
		<li id="${i}" class="list-group-item">
		  <h5 class="font-weight-bold">
		    <button onclick="editarNota(this)" class="btn bg-success text-white">EDIT</button>
		    ${notas[i][0]}
		  </h5>
		  <p>${notas[i][1]}</p>
		  <p>${notas[i][2]}</p>
		</li>

		`
	}
}

function editarNota(e){
    titulo.value = notas[e.parentElement.parentElement.id][0]
	console.log(e.parentElement.parentElement.id)
	texto.value = notas[e.parentElement.parentElement.id][1]
	indexID = e.parentElement.parentElement.id
}

function gravaEditado(){
	if(titulo.value === ''){
		alert('Escolha uma nota para editar e clique no botão EDIT')
	}else{
		console.log(indexID)
		notas[indexID][0] = titulo.value
		notas[indexID][1] = texto.value
		localStorage.setItem('notas', JSON.stringify(notas))
		titulo.value = ''
		texto.value = ''
		listarNotas()
	}
}