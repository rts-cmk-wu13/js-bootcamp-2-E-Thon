//! Hide via element:
function skjulElement(element) {
  if (element != null) element.style.display = "none";
}

//! Hide via css selector:
function skjulElementerViaCssSelector(cssSelector) {
  let selectors = document.querySelectorAll(cssSelector);
  selectors.forEach(function (selector) {
    skjulElement(selector);
  });
}

skjulElementerViaCssSelector(".placeholder__img img");
