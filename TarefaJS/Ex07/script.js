const valorFinalDisplay = document.querySelector('.valorfinal');
const botaoCalcular = document.querySelector('.btncalcular');

const inputCustoFabrica = document.querySelector('#custoFabrica');
const inputPercentualDistribuidor = document.querySelector('#percDistribuidor');
const inputPercentualImpostos = document.querySelector('#percImpostos');

const handleCalcular = () => {
  const custoFabrica = +inputCustoFabrica.value;
  const percDistribuidor = +inputPercentualDistribuidor.value;
  const percImpostos = +inputPercentualImpostos.value;

  if (
    inputCustoFabrica.value.length &&
    inputPercentualDistribuidor.value.length &&
    inputPercentualImpostos.value.length
  ) {
    const resultado =
      custoFabrica +
      (custoFabrica * percDistribuidor) / 100 +
      (custoFabrica * percImpostos) / 100;

    valorFinalDisplay.innerText = `R$ ${resultado}`;
  }
};

botaoCalcular.addEventListener('click', handleCalcular);