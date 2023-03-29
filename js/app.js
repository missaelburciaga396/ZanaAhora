var check = document.querySelector(".check");
check.addEventListener("click", idioma);

function idioma() {
  //>console.log(check.checked);
  let id = check.checked;
  if (id == true) {
    location.href =
      "file:///C:/Users/Yagami/Documents/My%Web%Sites/ZanaAhora/en/index.html";
  } else {
    location.href =
      "file:///c:/users/Yagami/Documents/My%Web%Sites/ZanaAhora/js/index.html";
  }
}
