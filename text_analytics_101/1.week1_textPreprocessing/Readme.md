## Gist : Perform basic steps of Text preprocessing
Please refer [handout](1.week1_textPreprocessing/handout.pdf) for objectives

### Main Tasks performed:

1. **Text Normalisation:**
    a. converting all letters to lower or upper case  
    b. converting numbers into words or removing numbers  
    c. removing punctuations, accent marks and other diacritics  
    d. removing white spaces  
    e. expanding abbreviations  
    f. removing stop words, sparse terms, and particular words  
    g. text canonicalization

2. **Tokenisation:** It is the process of splitting the given text into smaller pieces called tokens. Words, numbers, punctuation marks, and others can be considered as tokens  

3. **Stop word removal:** They are the most common words in a language like “the”, “a”, “on”, “is”, “all”. These words do not carry important meaning and are usually removed from texts  

4. **Stemming:** It is a process of reducing words to their word stem, base or root form (for example, books — book, looked — look)

5. **Lemmatization:** It is used to reduce inflectional forms to a common base form. As opposed to stemming, lemmatization does not simply chop off inflections. Instead it uses lexical knowledge bases to get the correct base forms of words

6. **Part of speech tagging (POS):** It aims to assign parts of speech to each word of a given text (such as nouns, verbs, adjectives, and others) based on its definition and its context

7. **Entity extraction:** The process of identifying the conceptual identities behind the words rather than the dictionary knowledge.

For more implementation details refer [notebook](1.week1_textPreprocessing/code/practical.ipynb) and [report](1.week1_textPreprocessing/report.pdf)