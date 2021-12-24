## Gist : Understand and perform TF-IDF, PMI and Entropy calculations on set of documents
Please refer [handout](3.week3_beyondFrequencies/handout.pdf) for objectives

### Main Tasks performed:

1. **Term Frequency (TF):** tf(i,j) = (term 'i' in doc 'j') / (total words in doc 'j')  
        
2. **Inverse Document Frequency (IDF):** idf(i, J) = log(total documents(J) /documents with term 'i')    

3. **TF-IDF:**  tf(i, j) * idf(i, J)

3. **PMI:**  It measures how much more likely the words co-occur than if they were independent in the text. It is calculated as: PMI(word1, word2) = Probability(word1, word2)/ Prob(word1) P(Word2)  

4. **Emtropy:**  It is defined as the sum of the probability of each label times the log probability of that same
label -> H(A) = -sum(p * log(p))  

For more implementation details refer [notebook](3.week3_beyondFrequencies/code/practical.ipynb) and [report](3.week3_beyondFrequencies/report.pdf)