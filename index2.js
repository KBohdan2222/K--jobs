function calculateFactorial() {
    const n = prompt("Будь ласка, введіть число n:");
    const nNumber = Number(n);
    if (isNaN(nNumber) || nNumber < 0) {
      console.log("Будь ласка, введіть коректне додатнє число.");
      return;
    }
    let factorial = 1;
    let i = 1;
    while (i <= nNumber) {
      factorial *= i;
      i++;
    }
    console.log(`Факторіал числа ${nNumber} дорівнює ${factorial}`);
  }
  calculateFactorial();