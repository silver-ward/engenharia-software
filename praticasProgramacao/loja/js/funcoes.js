function alterarQtd(produto, acao){
    const qtd = document.getElementById(`qtd-${produto}`);
    const valor = document.getElementById(`valor-${produto}`);
    const total = document.getElementById(`total-${produto}`);

    if (acao == '+')
        qtd.innerHTML++;
    if(acao == '-' && qtd.innerHTML > 0)
        qtd.innerHTML--;

    total.innerHTML = valor.innerHTML * qtd.innerHTML;

    somaSubtotal();
}

function somaSubtotal(){
    let soma = 0;

    for(let i=1; i<=3; i++){
        soma += Number(document.getElementById(`total-${i}`).innerHTML);
    }

    document.getElementById('subtotal').innerHTML = soma;
}