function skjulElementViaCssSelector(cssSelector) {
  if (document.querySelector(cssSelector)) {
    document.querySelector(cssSelector).style.display = "none";
  }
}

skjulElementViaCssSelector(".placeholder__img");
