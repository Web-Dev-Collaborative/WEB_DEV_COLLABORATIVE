# Pig Latinizer

Turn a word phrase into Pig Latin!
## By Usarneme + Shane

---
#### Tech Stack:
1. HTML/CSS/JS
2. jQuery
3. Bootstrap
---
#### Instructions:
1. Clone this repo: `git clone <this repo url>`
2. Enter new directory `cd <repo dir name>`
3. Open the index.html in your Browser of choice
---
#### Known Issues:
1. Does not account for capitalization
* Please open a pull request if you have any issues!
---

#### Specification
* pigLatin function takes in a string called phrase
* pigLatin function looks at the string for one or more words
* pigLatin function looks at each word to transform it into Pig Latin
* pigLatin transforms each word into Pig Latin by:
  * For words beginning with a vowel, add "way" to the end.
  * For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
  * For words beginning with "y", treat "y" as a consonant.
  * If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
* pigLatin combines the transformed words into a phrase
* pigLatin returns the phrase to the caller

---
#### Test Suite
Describe: pigLatin()

```
  Test: "It will add 'way' to the end of words that begin with a vowel."
  Code: pigLatin("a");
  Expected Output: "away"

  Test: "It will move the first consonant to the end"
  Code: pigLatin("ba")
  Expected Output: "ab"

  Test: "It will move the first consecutive consonants to the end"
  Code: pigLatin("ba")
  Expected Output: "ab"

  Test: "It will move the first consecutive consonants to the end and add 'ay'"
  Code: pigLatin("ba")
  Expected Output: "abay"

  Test: For words beginning with "y", treat "y" as a consonant.
  Code: pigLatin("yodel")
  Expected Output: "odelyay"

  Test: If the first consonants include "qu", move the "u" along with the "q".
  Code: pigLatin("quest")
  Expected Output: "estquay"
```
