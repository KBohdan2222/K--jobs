function calculate(num1, num2, operation) {
    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) return "Ділення на нуль неможливе";
        return num1 / num2;
      default:
        return "Невідома операція";
    }
  }
  
  console.log(calculate(10, 5, "+")); // 15
  console.log(calculate(10, 0, "/"));  // "Ділення на нуль неможливе"
  console.log(calculate(5, 3, "^"));  // "Невідома операція"