## Gist : Calculate similarity between documents using different metrics

Please refer [handout](4.week4_similarity/handout.pdf) for objectives

### Main Tasks performed:

1. **Jaccard Index:**  J(A,B) = |A & B|/|A|B|.

2. **Jaccard Distance:** d(A,B) = 1- J(A,B).

3. **Triangle Inequality Property:** d(a,c) <= d(a,b) + d(b,c).

4. **Dice Coefficient:** DSC(A,B) = 2*|A & B|/|A|B|.

5. **Dice Distance:** d(A,B) = 1- DSC(A,B).

6. **Cosine Similarity:** It is a metric used to measure how similar the documents are irrespective of their size. It is based on count of the maximum number of common words between the documents. The smaller the cosine,
more similar the vectors. similarity(A,B) => cos(theta) = A.B / ||A||.||B||

For more implementation details refer [notebook](4.week4_similarity/code/practical.ipynb) and [report](4.week4_similarity/report.pdf)