# Text Analyzer via TDD

## By Usarneme/Tom

---
Describe: threeMostCommonWords
  Test: "it outputs nothing when it receives nothing"
  Code:
  const input = "";
  let word1 = threeMostCommonWords(input);
  Expected Output: word1 will return an empty array

  Test: "when it receives a single word, it outputs an array containing that word"
  Code:
  const input = "word";
  let result = threeMostCommonWords(input);
  Expected Output: result is ["word"]

  Test: "when it receives two words, it outputs an array containing those words"
  Code:
  const input = "word1 word2";
  let result = threeMostCommonWords(input);
  Expected Output: result is ["word1", "word2"]

  Test: "when it receives three words, it outputs an array containing those words"
  Code:
  const input = "word1 word2 word3";
  let result = threeMostCommonWords(input);
  Expected Output: result is ["word1", "word2", "word3"]

  Test: "when it receives four dissimilar words, it outputs an empty array"
  Code:
  const input = "word1 word2 word3 word4";
  let result = threeMostCommonWords(input);
  Expected Output: result is []

  

"Hi there hey yo hi hi yay yo whoa there whoa... yay!"
