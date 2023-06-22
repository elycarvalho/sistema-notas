let notas = []
let nota = []
let listaNotas = document.querySelector(".lista-notas")
let titulo = document.querySelector("#titulo")
let texto = document.querySelector("#texto")

mostraNotas()

//busca notas gravadas no armazenamento local 
function mostraNotas(ordem){
	notas = JSON.parse(localStorage.notas)
	listaNotas.innerHTML = ''
    if(ordem === 'alfa'){
        notas.sort()
    }
    if(ordem === 'reverso'){
        notas.sort()
        notas.reverse()
    }

	for(let i = 0; i < notas.length; i++){
        listaNotas.innerHTML += `
        <li id="${i}" class="list-group-item">
            <h5 class="font-weight-bold">${notas[i][0]}</h5>
            <p>${notas[i][1]}</p>
            <p>${notas[i][2]}</p>
        </li>
        `
	}
}


function adicionarNota(){
    if(titulo.value == ''){
        alert('titulo não pode ficar em branco')
    }else{
        let data = new Date()
        dataFormatada = data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear()
        console.log(dataFormatada)
        nota.push(titulo.value, texto.value, dataFormatada)
        notas.push(nota)
        localStorage.setItem("notas", JSON.stringify(notas))
        nota = []
	titulo.value = ''
	texto.value = ''
        console.log(notas)
        mostraNotas()
    }
}
