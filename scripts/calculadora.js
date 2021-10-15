
export default class MarcaMaquininha{
    constructor(nome, taxas=[]){
    this.nome = nome,
    this.taxas = taxas;
    }
    

    calcularTotal(){

        let valorDoServico = parseFloat(document.getElementById('valorDoServico').value);
        let numeroDeParcelas = parseInt(document.getElementById('numeroDeParcelas').value);

        return valorDoServico/(1 - this.taxas[numeroDeParcelas]/100);
    }
    
}




// var taxasSumup = [1.9, 4.60, 6.10, 7.60, 9.10, 10.60, 12.10, 13.60, 15.10, 16.60, 18.10, 19.60, 21.10];

// var taxasStone = [1.8, 4.94, 6.35, 7.46, 8.58, 9.69, 10.81, 12.33, 13.44, 14.55, 15.66, 16.77, 17.88];


// const calcularValores = () => {
//     let valorDoServico = parseFloat(document.getElementById('valorDoServico').value);
//     let numeroDeParcelas = parseInt(document.getElementById('numeroDeParcelas').value);

//     let  total = valorDoServico /(1 - taxasStone[numeroDeParcelas]/100);

//     document.getElementById('total').innerHTML= "Total: R$" + total.toFixed(2);

//     calcularSumup(total, numeroDeParcelas);
//     calcularStone(total, numeroDeParcelas);
//     calcularDiferencaAReceber();
//     calcularDiferencaAPagar();
// }  





// const calcularDiferencaAReceber = () =>{
//     let recebidoViaSumup = document.getElementById('recebidoViaSumup').value;
//     let recebidoViaStone = document.getElementById('recebidoViaStone').value;
    
//    if(recebidoViaSumup>recebidoViaStone){
//         document.getElementById('diferencaAReceber').value = "SUMUP: " + (recebidoViaSumup - recebidoViaStone).toFixed(2);
//         document.getElementById('diferencaAReceber').style.color = "blue";
//     }

//    else if(recebidoViaSumup<recebidoViaStone){
//         document.getElementById('diferencaAReceber').value = "STONE: " + (recebidoViaStone - recebidoViaSumup).toFixed(2);
//         document.getElementById('diferencaAReceber').style.color = "green";
//    }

//    else{
//         document.getElementById('diferencaAReceber').value = 0.0;
//    }
// }

// const calcularDiferencaAPagar = () =>{
//     let pagoASumup = document.getElementById('pagoASumup').value;
//     let pagoAStone = document.getElementById('pagoAStone').value;
//     let inputDiferencaPaga  = document.getElementById('diferencaAPagar');

//     if(pagoASumup>pagoAStone){
//         inputDiferencaPaga.value = (pagoASumup - pagoAStone).toFixed(2);
//         inputDiferencaPaga.style.color = "#0000ff";
//     }
//     else if(pagoASumup<pagoAStone){
//         inputDiferencaPaga.value = (pagoAStone - pagoASumup).toFixed(2);
//         inputDiferencaPaga.style.color = "#00ff00";
//     }
    
// }











