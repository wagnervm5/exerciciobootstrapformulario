document.getElementById("gerapreco").addEventListener("click", geraValor);

function geraValor(){
    let custo = Number(document.getElementById('valorcusto').value);
    let calculo = (custo * 50) / 100;
    let venda = custo + calculo;
    
    window.alert(`valor de venda ${venda}`)
  
}