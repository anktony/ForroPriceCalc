const debitoSumup = 1.9;
const debitoStone = 1.8;

var taxasSumup = [4.60, 6.10, 7.60, 9.10, 10.60, 12.10, 13.60, 15.10, 16.60, 18.10, 19.60, 21.10];

var taxasStone = [4.94, 6.35, 7.46, 8.58, 9.69, 10.81, 12.33, 13.44, 14.55, 15.66, 16.77, 17.88];



const calcularSumup = (valor, parcelas) =>{
    let  total = valor /(1 - taxasSumup[parcelas -1]/100);
    let aPagar = total*(taxasSumup[parcelas -1]/100);
    let aReceber = total - total*(taxasSumup[parcelas -1]/100);
    
    document.getElementById('total').innerHTML= "Total: R$" + total;
    document.getElementById('pagoASumup').value = aPagar;
    document.getElementById('recebidoViaSumup').value = aReceber; 
}

const calcularStone = ( valor, parcelas) =>{
    let  total = valor /(1 - taxasStone[parcelas -1]/100);
    let aPagar = total*(taxasStone[parcelas -1]/100);
    let aReceber = total - total*(taxasStone[parcelas -1]/100);
    
    document.getElementById('total').innerHTML= "Total: R$" + total;
    document.getElementById('pagoAStone').value = aPagar;
    document.getElementById('recebidoViaStone').value = aReceber; 
}





const calcularValores =() => {
    let valorDoServico = parseFloat(document.getElementById('valorDoServico').value);
    let numeroDeParcelas = parseInt(document.getElementById('numeroDeParcelas').value);
        calcularSumup(valorDoServico, numeroDeParcelas);
        calcularStone(valorDoServico, numeroDeParcelas);

  

}  





