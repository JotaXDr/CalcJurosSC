function calcularJurosSimples() {
    var montante = parseFloat(document.getElementById('principal').value);
    var taxa = parseFloat(document.getElementById('taxa').value);
    var tempo = parseFloat(document.getElementById('tempo').value);
    var jurosSimples = montante * taxa * tempo;
    document.getElementById('resultado').innerHTML = "Juros Simples: R$ " + jurosSimples.toFixed(2);
  }
  
  function calcularJurosCompostos() {
    var montante = parseFloat(document.getElementById('principal').value);
    var taxa = parseFloat(document.getElementById('taxa').value);
    var tempo = parseFloat(document.getElementById('tempo').value);
    var n = 12;
  
    var jurosCompostos = montante * Math.pow(1 + taxa/n, n * tempo) - montante;
    document.getElementById('resultado').innerHTML = "Juros Compostos: R$ " + jurosCompostos.toFixed(2);
  }
  