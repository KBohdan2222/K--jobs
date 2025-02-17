function printEvenNumbers() {
    const n = prompt("Будь ласка, введіть число n:");
    const nNumber = Number(n);
    if (isNaN(nNumber) || nNumber < 2) {
      console.log("Будь ласка, введіть коректне число, більше або рівне 2.");
      return;
    }
    for (let i = 2; i <= nNumber; i += 2) {
      console.log(i);
    }
  }
  printEvenNumbers();