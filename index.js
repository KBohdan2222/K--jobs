function checkAge() {
  const age = prompt("Будь ласка, введіть ваш вік:");
  const ageNumber = Number(age);
  if (ageNumber < 18) {
    alert("Вам заборонено вхід");
  } else if (ageNumber >= 18 && ageNumber <= 65) {
    alert("Ласкаво просимо!");
  } else if (ageNumber > 65) {
    alert("Будь ласка, будьте обережні!");
  } else {
    alert("Введено некоректне значення віку");
  }
}
checkAge();
