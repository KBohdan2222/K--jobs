function filterLongWords(words, n) {
    return words.filter(word => word.length > n);
  }
  
  const wordsArray = ["яблуко", "банан", "ананас", "кіт", "сонце"];
  console.log(filterLongWords(wordsArray, 5)); // ["яблуко", "ананас"]