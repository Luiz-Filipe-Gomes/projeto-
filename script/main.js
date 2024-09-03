const arrayText = [
    "OLÁ, meu nome é Luiz!",
    "Desenvolvedor JavaScript",
  ];
  
  const writeTime = 200; // tempo  escrever e apagar.
  const changeTextTime = 1000; // tempo para ir para próxima frase no array
  
  let indexSentence = 0;
  let indexChar = 0;
  
  const element = document.querySelector("#primeira-seção");
  
  function writeText() {
    if (indexChar <= arrayText[indexSentence].length) {
      element.textContent = arrayText[indexSentence].substring(0, indexChar);
      indexChar++;
      setTimeout(writeText, writeTime);
    } else {
      setTimeout(removeText, changeTextTime);
    }
  }
  
  function removeText() {
    if (indexChar >= 0) {
      element.textContent = arrayText[indexSentence].substring(0, indexChar);
      indexChar--;
      setTimeout(removeText, writeTime);
    } else {
      indexSentence++;
      if (indexSentence >= arrayText.length) {
        indexSentence = 0;
      }
      setTimeout(writeText, changeTextTime);
    }
  }
  
  writeText();