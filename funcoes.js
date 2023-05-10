let notas = []
let nota = []
let listaNotas = document.querySelector(".lista-notas")
let titulo = document.querySelector("#titulo")
let texto = document.querySelector("#texto")

mostraNotas()

//busca notas gravadas no armazenamento local 
function mostraNotas(){
	notas = JSON.parse(localStorage.notas)
	listaNotas.innerHTML = ''

	for(let i = 0; i < notas.length; i++){
        listaNotas.innerHTML += `
        <li id="${i}" class="list-group-item">
            <h5 class="font-weight-bold">${notas[i][0]}</h5>
            <p>${notas[i][1]}</p>
        </li>
        `
	}
}

function adicionarNota(){
    	nota.push(titulo.value, texto.value)
    	notas.push(nota)
    	localStorage.setItem("notas", JSON.stringify(notas))
    	nota = []
    	console.log(notas[0])
    	mostraNotas()

}