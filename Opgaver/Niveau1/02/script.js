function beregnForhold(a, b) {
  let division = a / b;
  return division;
}
let resultat = beregnForhold(4, 3);
console.log(resultat);

function beregnForhold2(a, b) {
  let division2 = a / b;
  if (b === 0) {
    return null;
  } else {
    return division2;
  }
}
let resultat2 = beregnForhold2(4, 0);
console.log(resultat2);
