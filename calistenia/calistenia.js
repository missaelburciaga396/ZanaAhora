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
  var pesoMax = 25 * (altura * altura);
  var resultado_peso;

  if (imc <= 18.4) {
    resultado_peso = "su peso está bajo";
  } else if (imc >= 18.5 && imc <= 24.99) {
    resultado_peso = "su peso es normal";
  } else if (imc >= 25 && imc <= 29.9) {
    resultado_peso = "usted tiene sobrepeso";
  } else if (imc >= 30) {
    resultado_peso = "usted tiene obesidad";
  }
  var resultadoLabel = document.getElementById("resultado");
  resultadoLabel.innerHTML =
    "su indice de masa corporal es: " +
    imc.toFixed(2) +
    " su máximo potencial es: " +
    pesoMax.toFixed(2) +
    "kg " +
    resultado_peso;
}

var btnEncalistenia = document.getElementById("btn-encalistenia");

btnEncalistenia.onclick = function () {
  window.location.href = "indexEnCalistenia.html";
};
