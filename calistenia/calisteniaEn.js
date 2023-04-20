var btnesCalistenia = document.getElementById("esCalistenia");

btnesCalistenia.onclick = function () {
  window.location.href = "index.html";
};

function calcularIMC() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    var resultadoLabel = document.getElementById("resultado");
    resultadoLabel.innerHTML =
      "Please enter valid values for weight and height.";
    return;
  }

  var imc = peso / (altura * altura);
  var pesoMax = 25 * (altura * altura);
  var resultado_peso;

  if (imc <= 18.4) {
    resultado_peso = "your weight is low";
  } else if (imc >= 18.5 && imc <= 24.99) {
    resultado_peso = "your weight is normal";
  } else if (imc >= 25 && imc <= 29.9) {
    resultado_peso = "you are overweight";
  } else if (imc >= 30) {
    resultado_peso = "you are obese";
  }
  var resultadoLabel = document.getElementById("resultado");
  resultadoLabel.innerHTML =
    "your body mass index is: " +
    imc.toFixed(2) +
    " your maximum potential is: " +
    pesoMax.toFixed(2) +
    "kg " +
    resultado_peso;
}
