/****************************************************
  CÓDIGO PARA EDIÇÃO DE NOTAS A SER DESENVOLVIDO...
*****************************************************/

// Função para editar notas
let listaNotas = document.querySelector('.lista-notas')
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
	alert('ESTÁ FUNÇÃO AINDA NÃO ESTÁ PRONTA!')
	/*************************
	FUNCAO PARA EDITAR NOTAS
	*************************/
}