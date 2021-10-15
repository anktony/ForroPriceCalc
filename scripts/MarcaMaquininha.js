
export default class MarcaMaquininha{
    constructor(nome, taxas=[]){
    this.nome = nome,
    this.taxas = taxas;
    }
    
    calcularTotal = () => {

        let valorDoServico = parseFloat(document.getElementById('valorDoServico').value);
        let numeroDeParcelas = parseInt(document.getElementById('numeroDeParcelas').value);

        return valorDoServico/(1 - this.taxas[numeroDeParcelas]/100);
    }

    calcularAPagar = (total, parcelas) => {
        let aPagar = total*(this.taxas[parcelas]/100);
        let aReceber = total - total*(this.taxas[parcelas]/100);
    
        document.getElementById('pagoA'+this.nome).value = aPagar.toFixed(2);
        document.getElementById('recebidoVia'+this.nome).value = aReceber.toFixed(2); 

        return [aPagar, aReceber];
    }
    
}













