// Business Logic

function wordCounter(text) {
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(word) {
    wordCount++;
  });
  return wordCount;
}


function wordCounter(text) {
  let wordCount = 0; 
  if (text === "") {
    return 0;
  } else {
    wordArray = text.split(" ");
    wordArray.forEach(function(word) { 
    wordCount++;
    }
  });
  return wordCount;

