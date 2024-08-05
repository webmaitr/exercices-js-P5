// votre code ici
function checkAge (age) {
  if (age < 18) {
    console.log("vous êtes mineur.");
  } else if (age >= 18 && age <=65) {
    console.log("vous êtes majeur.");
  } else {
    console.log("vous êtes senior.");
  }
}
export default checkAge;
