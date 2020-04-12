let cep = document.querySelector('#cep')
let rua = document.querySelector('#rua')
let complemento = document.querySelector('#complemento')
let bairro = document.querySelector('#bairro')
let uf = document.querySelector('#UF')

cep.onkeyup = async (event)=>{
    if(cep.value.length == 8){
        console.log("Faz a pesquisa na api")
        let resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json`)
        let dadosCep = await resposta.json()

        rua.value = dadosCep.logradouro
        complemento.value = dadosCep.complemento
        bairro.value = dadosCep.bairro
        UF.value = dadosCep.uf  
    }
}
