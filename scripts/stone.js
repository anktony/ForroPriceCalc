import MarcaMaquininha from "./calculadora.js";

let MarcaStone = new MarcaMaquininha("Stone", [1.8, 4.94, 6.35, 7.46, 8.58, 9.69, 10.81, 12.33, 13.44, 14.55, 15.66, 16.77, 17.88]);

alert(MarcaStone.calcularTotal());
// const calcularStone = (total, parcelas) =>{
    
//     let aPagar = total*(taxasStone[parcelas -1]/100);
//     let aReceber = total - total*(taxasStone[parcelas -1]/100);
    
//     document.getElementById('pagoAStone').value = aPagar.toFixed(2);
//     document.getElementById('recebidoViaStone').value = aReceber.toFixed(2); 
// }