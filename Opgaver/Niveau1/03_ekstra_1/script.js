//! Hide via css selector:
function skjulElementViaCssSelector(cssSelector) {
  if (document.querySelector(cssSelector))
    document.querySelector(cssSelector).style.display = "none";
}

skjulElementViaCssSelector(".placeholder__img");

//! Hide via element:
function skjulElement(element) {
  if (document.querySelector(element) != null)
    document.querySelector(element).style.display = "none";
}

skjulElement(".placeholder__img");