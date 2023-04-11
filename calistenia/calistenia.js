function calcularIMC() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    var resultadoLabel = document.getElementById("resultado");
    resultadoLabel.innerHTML =
      "Por favor, ingrese valores válidos de peso y altura";
    return;
  }

  var imc = peso / (altura * altura);

  var resultadoLabel = document.getElementById("resultado");
  resultadoLabel.innerHTML = "su indice de masa corporal es: " + imc.toFixed(2);
}
