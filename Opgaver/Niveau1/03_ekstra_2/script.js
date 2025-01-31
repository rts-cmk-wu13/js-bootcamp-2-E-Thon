//! Hide via element:
function skjulElement(element) {
  if (element != null)
    element.style.display = "none";
}


//! Hide via css selector:
function skjulElementViaCssSelector(cssSelector) {
  let selector = document.querySelector(cssSelector);
  if (selector) skjulElement(selector);
}

skjulElementViaCssSelector(".placeholder__img");