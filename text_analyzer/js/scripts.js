function noInputtedWord(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return true
  } else {
    return false
  }
}

function replacePunctuationWithSpace(text) {
  return text.replace(/[!@#$%^&*()?,;:\.\s]+/g," ").trim()
}

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  // console.log("Counting words...")
  let wordCount = 0;
  const noPunctuationText = replacePunctuationWithSpace(text).trim();
  // console.dir(noPunctuationText)
  const wordArray = noPunctuationText.split(" ");
  // console.dir(wordArray)

  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  // console.log("Counting # occurrences...")
  const noPunctuationText = replacePunctuationWithSpace(text).trim();
  // console.dir(noPunctuationText)

  const wordArray = noPunctuationText.split(" ");
  // console.dir(wordArray)

  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase() === word.toLowerCase()) {
      wordCount++;
    }
  });
  return wordCount;
}

// Test: "when it receives four dissimilar words, it outputs an empty array"
// [a,b,c,d], text = "a b c d"
function threeMostCommonWords(text) {
  let mostCommonWords = [];
  const noPunctuationText = replacePunctuationWithSpace(text).trim();
  const allWords = noPunctuationText.split(" ");

  if (allWords.length === 0) return mostCommonWords;
  if (allWords.length === 1) return allWords;
  // from here on down, there is are least 2 elements in the array

  // TODO - this doesn't check if there are duplicates; move down? remove?
  // if ((allWords.length >= 1) && (allWords.length <= 3)) return allWords;

  // have something to keep track of the counts of each word
  const wordCounts = [];
  // loop through all of the words

  // we also need to keep track of each word that has already been processed/counted
  let alreadyCountedWords = [];

  // allWords = ["a","b","c","a","d"]
  // text = "a b c a"
  allWords.forEach(function(element, index) {
    // if we've already counted this word, then skip it
    if (!alreadyCountedWords.includes(element)) {
      // count the number of occurrences of that word, 
      const count = numberOfOccurrencesInText(element, text);
      // and store that count in our wordCounts at the right index
      wordCounts[index] = count;
      // now this word has been counted
      alreadyCountedWords.push(element);
    }
  })
  // wordCounts = [2,1,1,,1]
  // if all the counts are equal, return an empty array
  let allCountsAreEqual = true;
  const firstCount = wordCounts[0];

  // at this point we have:
  // text = "a b c d"
  // allWords = [a,b,c,d]
  // wordCounts = [1,1,1,1]
  // firstCount = 1 (which is wordCounts[0] = 1)
  wordCounts.forEach(function(element, index) {
    if (index !== 0) {
      if (element !== firstCount) {
        allCountsAreEqual = false;
      }
    }
  })
  if (allCountsAreEqual) return mostCommonWords; // return an empty array as they all occur at the same frequency
  // now we know there is at least one duplicated word...

  // compare the counts of each word, looking for the highest numbers
  // when we change the position of wordCounts (sorting big to small), we also must change the position in allWords
  let largest1 = 0
  const newAllWords = []
  wordCounts.forEach(function(element, index) {
    console.log(`looping wordsCount[${index}]: ${element}`)
    console.log('allWords val at that index: ', allWords[index])
    if (allWords[index] > largest1) {
      largest1 = allWords[index]
      // remove the element from wordCounts and allWords

    }
  })

  let largest2 = 0
  let newAllWords2 = []
  wordCounts.forEach(function(element, index) {
    console.log(`looping wordsCount[${index}]: ${element}`)
    console.log('allWords val at that index: ', allWords[index])
    if (allWords[index] > largest1) {
      largest2 = allWords[index]
      // remove the element from wordCounts and allWords
    }
  })

  let largest3 = 0
  wordCounts.forEach(function(element, index) {
    console.log(`looping wordsCount[${index}]: ${element}`)
    console.log('allWords val at that index: ', allWords[index])
    if (allWords[index] > largest1) {
      largest3 = allWords[index]
      // remove the element from wordCounts and allWords
    }
  })

  return [largest1, largest2, largest3];
}


// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>"
  const noPunctuationText = replacePunctuationWithSpace(text).trim();
  let textArray = noPunctuationText.split(" ");

  textArray.forEach(function(element, index) {
    if (element.toLowerCase() === word.toLowerCase()) {
      htmlString += "<b>" + element + "</b>";
    } else {
      htmlString += element;
    }
    if (index !== (textArray.length - 1)) {
      htmlString += " ";
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    const topThreeWords = threeMostCommonWords(passage);

    console.log('got top 3 words back of: ',topThreeWords)

    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});


