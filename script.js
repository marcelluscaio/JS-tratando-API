async function buscaEndereco(cep){
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            throw Error("CEP não encontrado")
        }
        return consultaCEPConvertida;
    } catch (e) {
        return e;
    }
};

let ceps = ["01001001","01001089","01001algo","01001011","01001666"];
let cepsAPI = ceps.map(cep => buscaEndereco(cep))

//console.log(cepsAPI);
Promise.all(cepsAPI).then(resposta => console.log(resposta));


/* Primeira resolução, Isso pode gerar o callback hell

let consultaCEP = fetch("https://viacep.com.br/ws/01001010/json/")
.then(r => r.json())
.then(r => {
    if(r.erro){
        throw Error ("CEP não existe");
    } else{
    console.log(r)}
    })
.catch(e => console.log(e))
.finally(m => console.log("Processamento concluído"));

console.log(consultaCEP) */


/*  Código veio assim
    async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https:viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value)); */