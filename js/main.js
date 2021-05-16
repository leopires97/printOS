//pega o ID formulario sendo "chamado" pelo botão com a classe Submit	

document.getElementById("formulario").addEventListener("submit", qtdArquivo);	/*pega a form e tem o evento que é o click do submit*/

function	criarArrayArquivo(nomeArquivo) {
	var arrayArquivo = [];
	for (i = 0; i < nomeArquivo.length; i++)	{ //criar array
	arrayArquivo.push(nomeArquivo[i]);
	}
	qtdArquivo(nomeArquivo, arrayArquivo);
}


function	qtdArquivo(nomeArquivo, arrayArquivo)	{
	var qtdRodar = document.getElementById("qtdRodar");
	var qtdTemp = '';
	var	qtd = '';

	for (i = arrayArquivo.length -2; i > 0; i--)	{
		if(nomeArquivo[i] != "_") {
			qtdTemp += nomeArquivo[i];
		}	else	{
			break;
		}
	}

	for (i = qtdTemp.length -1; i >= 0; i--)	{
		qtd += qtdTemp[i];
	}

	qtdRodar.value = qtd;
	numOsValor(nomeArquivo, arrayArquivo);
}

function	numOsValor(nomeArquivo, arrayArquivo)	{
	var numOs = document.getElementById("numOs");
	var os = '';

	for (i = 0; i < nomeArquivo.length; i++)	{
		if(nomeArquivo[i] != '_')	{
			os += nomeArquivo[i];
		}	else	{
			break;
		}
	}
	numOs.value = os;
	qtdItens(nomeArquivo, arrayArquivo, os);
}

function	qtdItens(nomeArquivo, arrayArquivo, os)	{
	var qtdTemp = 2;

	/*for (i = os.length + 1; i < nomeArquivo.length; i++)	{
		if(nomeArquivo[i] >= 00 && nomeArquivo[i] <= 99 )	{
			qtdTemp++;
		}	else if(nomeArquivo[i] == '_')	{
			break;
		}
	}*/
	document.getElementById("caminhoArquivo").value = qtdTemp;
	for (i = 1; i <= qtdTemp; i++)	{
		document.getElementById("formulario").innerHTML += '<div class="input-group" style="margin-top: 10px;"><label>Qtd. Mont. Item ' + i + ':</label><input type="text" id="numOs" class="form-control-aditional" disabled><span class="input-group-addon" style="opacity: 0%"></span><label>Qtd. Final ' + i + '</label><input type="text" id="qtdRodar" class="form-control-aditional" disabled></div>'
	}
}

/*function mostraPatio(){
	var carros = JSON.parse(localStorage.getItem("patio"));
	var carrosResultado = document.getElementById("resultado");
	
	carrosResultado.innerHTML = "";
	
	for(var i = 0; i < carros.length; i++){
		var modelo = carros[i].modelo;
		var placa = carros[i].placa;
		var hora = carros[i].hora + ":" + carros[i].minutos + ":" + carros[i].segundos;	

		carrosResultado.innerHTML += "<tr><td>" + modelo +
									"</td><td>" + placa +
									"</td><td>" + hora + "</td>" +
		'<td><button class="btn btn-danger" onClick="apagarVeiculo(\'' + placa + '\')">Excluir</button></td></tr>';
	}
}*/