const debitoSumup = 1.9;
const debitoStone = 1.8;

var taxasSumup = [4.60, 6.10, 7.60, 9.10, 10.60, 12.10, 13.60, 15.10, 16.60, 18.10, 19.60, 21.10];

var taxasStone = [4.94, 6.35, 7.46, 8.58, 9.69, 10.81, 12.33, 13.44, 14.55, 15.66, 16.77, 17.88];


const calcularSumup = (total, parcelas) =>{
    
    let aPagar = total*(taxasSumup[parcelas -1]/100);
    let aReceber = total - total*(taxasSumup[parcelas -1]/100);
    
    document.getElementById('pagoASumup').value = aPagar;
    document.getElementById('recebidoViaSumup').value = aReceber; 
}

const calcularStone = (total, parcelas) =>{
    
    let aPagar = total*(taxasStone[parcelas -1]/100);
    let aReceber = total - total*(taxasStone[parcelas -1]/100);
    
    document.getElementById('pagoAStone').value = aPagar;
    document.getElementById('recebidoViaStone').value = aReceber; 
}

const calcularDiferencaAReceber = () =>{
    let recebidoViaSumup = document.getElementById('recebidoViaSumup').value;
    let recebidoViaStone = document.getElementById('recebidoViaStone').value;
    
   if(recebidoViaSumup>recebidoViaStone){
        document.getElementById('diferencaAReceber').value = recebidoViaSumup - recebidoViaStone;
        document.getElementById('diferencaAReceber').style.color = "blue";
    }

   else if(recebidoViaSumup<recebidoViaStone){
        document.getElementById('diferencaAReceber').value = recebidoViaStone - recebidoViaSumup;
        document.getElementById('diferencaAReceber').style.color = "green";
   }

   else{
        document.getElementById('diferencaAReceber').value = 0.0;
   }
}

const calcularDiferencaAPagar = () =>{
    let pagoASumup = document.getElementById('pagoASumup').value;
    let pagoAStone = document.getElementById('pagoAStone').value;
    let inputDiferencaPaga  = document.getElementById('diferencaAPagar');

    if(pagoASumup>pagoAStone){
        inputDiferencaPaga.value = pagoASumup - pagoAStone;
        inputDiferencaPaga.style.color = "#ff0000";
    }
    else if(pagoASumup>pagoAStone){
        inputDiferencaPaga.value = pagoAStone - pagoASumup;
        inputDiferencaPaga.style.color = "#ff0000";
    }
}





const calcularValores =() => {
    let valorDoServico = parseFloat(document.getElementById('valorDoServico').value);
    let numeroDeParcelas = parseInt(document.getElementById('numeroDeParcelas').value);

    let  total = valorDoServico /(1 - taxasStone[numeroDeParcelas -1]/100);

    document.getElementById('total').innerHTML= "Total: R$" + total;

    calcularSumup(total, numeroDeParcelas);
    calcularStone(total, numeroDeParcelas);
    calcularDiferencaAReceber();
    calcularDiferencaAPagar();
    
}  







