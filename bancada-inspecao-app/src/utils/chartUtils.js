export function atualizarLinha(chart, dados, datasetIndex, callback) {
	let index = 0;
	const valorAtualElemento = document.getElementById('valor-atual');
  
	const interval = setInterval(() => {
	  if (index < dados.length) {
		const valorAtual = dados[index];
		chart.data.datasets[datasetIndex].data[index] = valorAtual;
		valorAtualElemento.innerText = valorAtual.toFixed(2);
		chart.update();
		index++;
	  } else {
		clearInterval(interval);
		if (callback) callback();
	  }
	}, 10);
  }
  
  export function calcularDiferencas(chart) {
	const azul = chart.data.datasets[0].data;
	const vermelho = chart.data.datasets[1].data;
  
	const minAzul = Math.min(...azul);
	const maxAzul = Math.max(...azul);
	const minVermelho = Math.min(...vermelho);
	const maxVermelho = Math.max(...vermelho);
  
	document.getElementById("minAzul").innerText = minAzul.toFixed(2);
	document.getElementById("maxAzul").innerText = maxAzul.toFixed(2);
	document.getElementById("minVermelho").innerText = minVermelho.toFixed(2);
	document.getElementById("maxVermelho").innerText = maxVermelho.toFixed(2);
  }
  