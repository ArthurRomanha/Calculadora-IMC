const calcular = () => {
    let nome = document.getElementById('nome').value;
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let resultado = parseFloat(peso / (altura * altura)).toFixed(2);
    let divResultado = document.getElementById("resultado");

    if (resultado < 18.5) {
        divResultado.textContent = `Olá ${nome}, seu IMC é de: ${resultado} e você se enquadra em: Baixo Peso`;
    } else if (resultado > 18.5 && resultado < 24.99) {
        divResultado.textContent = `Olá ${nome}, seu IMC é de: ${resultado} e você se enquadra em: Peso Normal`;
    } else if (resultado > 25 && resultado < 29.99) {
        divResultado.textContent = `Olá ${nome}, seu IMC é de: ${resultado} e você se enquadra em: Sobrepeso`;
    } else if(resultado > 30 && resultado < 34.99){
        divResultado.textContent = `Olá ${nome}, seu IMC é de: ${resultado} e você se enquadra em: Obesidade Grau I`;
    }else if(resultado > 35 && resultado < 39.99){
        divResultado.textContent = `Olá ${nome}, seu IMC é de: ${resultado} e você se enquadra em: Obesidade Grau II`;
    }else if(resultado >= 40){
        divResultado.textContent = `Olá ${nome}, seu IMC é de: ${resultado} e você se enquadra em: Obesidade Grau III`;
    }
}