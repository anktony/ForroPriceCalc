import MarcaMaquininha from "./calculadora.js";

let MarcaSumup = new MarcaMaquininha("Sumup", [1.9, 4.60, 6.10, 7.60, 9.10, 10.60, 12.10, 13.60, 15.10, 16.60, 18.10, 19.60, 21.10])


var botao1 = document.getElementById("botao1");

botao1.onclick = function funfa(){alert(MarcaSumup.calcularTotal())};







// const calcularSumup = (total, parcelas) =>{
    
//     let aPagar = total*(taxasSumup[parcelas -1]/100);
//     let aReceber = total - total*(taxasSumup[parcelas -1]/100);
    
//     document.getElementById('pagoASumup').value = aPagar.toFixed(2);
//     document.getElementById('recebidoViaSumup').value = aReceber.toFixed(2); 
// }

