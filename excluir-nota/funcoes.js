// Função para excluir nota
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
		    <button onclick="deletarNota(this)" class="btn bg-danger text-white">DEL</button>
		    ${notas[i][0]}
		  </h5>
		  <p>${notas[i][1]}</p>
		  <p>${notas[i][2]}</p>
		</li>

		`
	}
}

function deletarNota(e){
	if (confirm('Tem certeza que deseja excluir esta nota?') === true){
		notas = JSON.parse(localStorage.notas)
		notas.splice(e.parentElement.parentElement.id, 1)
		localStorage.setItem("notas", JSON.stringify(notas))
		listarNotas()
    }
}