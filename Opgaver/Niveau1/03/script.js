function skjulElementViaCssSelector(cssSelector) {
  let selector = document.querySelector(cssSelector);
  if (selector)
    selector.style.display = "none";
}

skjulElementViaCssSelector(".placeholder__img");
