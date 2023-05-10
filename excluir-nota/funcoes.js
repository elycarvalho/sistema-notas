// Função para excluir nota
listaNotas.innerHTML = 'teste'
listarNotas()
function listarNotas(){
	for (let i = 0; i < notas.length; i++) {
		listaNotas.innerHTML += `
		  <h5>${notas[i][0]}</h5>
		  <p>${notas[i][1]}</p>
		  <button class="botaoDeletar">Del</button>
		`
	}
}