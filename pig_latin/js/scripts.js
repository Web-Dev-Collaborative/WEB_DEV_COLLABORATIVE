// Helper Functions
function isVowel(letter) {
  const vowels = ["a","e","i","o","u"];
  if (vowels.includes(letter)) {
    return true
  } else {
    return false
  }
}

function isFirstLetterY(word) {
  const firstLetter = word[0];
  if (firstLetter === "y") {
    return true
  } else {
    return false
  }
}

function isFirstLetterVowel(word) {
  if (isVowel(word[0])) {
    return true
  } else {
    return false
  }
}

function replacePunctuationWithSpace(text) {
  return text.replace(/[!@#$%^&*()?,;:\.\s]+/g," ").trim()
}

// Business Logic
function pigLatinize(word) {
  let pigLatinWord = "";

  if (isFirstLetterVowel(word)) {
    pigLatinWord = word.concat("way");
  } else {
    let endConsonants = [];
    const wordArray = word.split("");

    while (wordArray.length > 0 && !isVowel(wordArray[0])) {
      if (wordArray[0] === "q" && wordArray[1] && wordArray[1] === "u") {
        endConsonants.push(wordArray.shift())
        endConsonants.push(wordArray.shift())
      } else {
        endConsonants.push(wordArray.shift())
      }
    }

    const wordString = wordArray.join("");
    const endConsonantsString = endConsonants.join("");

    pigLatinWord += wordString + endConsonantsString;
    pigLatinWord += "ay";
  }

  return pigLatinWord;
}

function pigLatin(phrase) {
  const noPunctuationPhraseArray = replacePunctuationWithSpace(phrase).split(" ");
  const pigLatinPhraseArray = [];

  while (noPunctuationPhraseArray.length > 0) {
    pigLatinPhraseArray.push(pigLatinize(noPunctuationPhraseArray.shift()))
  }

  const pigLatinPhrase = pigLatinPhraseArray.join(" ");
  return pigLatinPhrase;
}

// UI Logic
$(document).ready(function() {
  $(".btn").click(function() {
    const val = $(".input").val();
    const pig = pigLatin(val)
    $(".result").text(pig)
  })
})
