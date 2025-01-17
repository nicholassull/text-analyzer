
// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;

  function boldPassage(word, text) {
    let htmlString = "<p>";
    let textArray = text.split(" ");
    textArray.forEach(function(element, index) {
      if (word === element) {
        htmlString = htmlString.concat("<b>" + element + "</b>");
      } else {
        htmlString = htmlString.concat(element);
      }
      if (index !== (textArray.length - 1)) {
        htmlString = htmlString.concat(" ");
      }
    });
    return htmlString + "</p>";
  }

}

function offensiveWords(text) {
  const textArray = text.toLowerCase().split(" ");
  const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
  let newArray = []
  textArray.forEach(function(word) {
    if (!word.includes(offensiveWords[0] || offensiveWords[1] || offensiveWords[2] || offensiveWords[3])) {
      newArray.push(word);
    }
  });
  return newArray.join(" ");
}




//  UI Logic
$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
  });
});


// function wordCounter(text) {
//   let wordCount = 0; 
//   if (text === "") {
//     return 0;
//   } else {
//     wordArray = text.split(" ");
//     wordArray.forEach(function(word) { 
//     wordCount++;
//     return wordCount;
//     });
//   });
// });


