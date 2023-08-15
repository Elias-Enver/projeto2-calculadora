const form = document.getElementById('form_atividade')
const imgaprovado='<img src="./aprovado.png" alt="emoji celebrando" />'
const imgreprovado='<img src="./reprovado.png" alt="emoji decepcionado" />'
let linha;
const atividades = []
const notas = []
const spanAprovado= '<span class="resultado aprovado">Aprovado</span>'
const spanreprovado= '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota Minima'))
const corpotabela = document.querySelector('tbody')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    adicionalinha()
    atualizatabela()
    atualizaMedia()
   
})

function adicionalinha(){
    const inputnomeatividade = document.getElementById('nome-atividade')
    const inputnotaatividade = document.getElementById('nota-atividade')
    console.log(atividades)
    corpotabela.innerHTML=""

    if(atividades.includes(inputnomeatividade.value)){
        alert(`A atividade:${inputnomeatividade.value} já foi inserida`)
    }else{
        atividades.push(inputnomeatividade.value)
        notas.push(parseFloat(inputnotaatividade.value))
        linha = '<tr>'
        linha += `<td>${inputnomeatividade.value} </td>`
        linha += `<td>${inputnotaatividade.value} </td>`
        linha += `<td>${inputnotaatividade.value>=notaMinima?imgaprovado:imgreprovado}</td>`
        linha += `</tr>`
    }



    inputnomeatividade.value = ""
    inputnotaatividade.value=""

}

function atualizatabela(){
    
    corpotabela.innerHTML += linha
}

function atualizaMedia(){
    const mediafinal=calculamediafinal()
    document.getElementById('mediafinalvalor').innerHTML=mediafinal
    document.getElementById('mediafinalresultado').innerHTML=mediafinal >=notaMinima?spanAprovado:spanreprovado

    
}

function calculamediafinal(){

    let somadasnotas=0;
    for(let i=0;i<notas.length;i++){
        somadasnotas += notas[i]
    }

    return somadasnotas/notas.length


}