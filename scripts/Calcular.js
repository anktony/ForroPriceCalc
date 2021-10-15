import MarcaStone from "./stone.js"
import MarcaSumup from "./sumup.js"


let maquininhaSelecionada = document.getElementById('Maquininhas');
let valorTotal = document.getElementById("valorTotal");
let parcelas = document.getElementById("numeroDeParcelas").value;
let botao1 = document.getElementById("botao1");

botao1.onclick = () => Calcular();

export default function Calcular(){

    switch(maquininhaSelecionada.value){
        case 'Sumup': 
            valorTotal.innerHTML = "Total: R$" + MarcaSumup.calcularTotal().toFixed(2);
            break;
        case 'Stone': 
            valorTotal.innerHTML = "Total: R$" + MarcaStone.calcularTotal().toFixed(2);
            break;
    } 
   
    MarcaStone.calcularAPagar(MarcaStone.calcularTotal(), parcelas)
    MarcaSumup.calcularAPagar(MarcaSumup.calcularTotal(), parcelas)
}


