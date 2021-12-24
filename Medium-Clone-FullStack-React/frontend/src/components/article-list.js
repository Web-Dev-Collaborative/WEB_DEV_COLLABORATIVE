import {Component, consume, attribute} from '@layr/component';
import React, {useMemo} from 'react';
import {view, useAsyncCall} from '@layr/react-integration';

const PAGE_SIZE = 10;

export class ArticleList extends Component {
  @consume() static Article;
  @consume() static Common;

  @attribute('object') query;

  @attribute('number') pageNumber = 1;

  @attribute('Article[]?') loadedArticles;

  @attribute('number?') totalNumberOfArticles;

  @view() static Main({query}) {
    const articleList = useMemo(() => new this({query}), [query]);

    return <articleList.Main />;
  }

  @view() Main() {
    const {Article, Common} = this.constructor;

    const {query, pageNumber} = this;

    const [isLoading, loadingError, retryLoading] = useAsyncCall(async () => {
      try {
        const [loadedArticles, totalNumberOfArticles] = await Promise.all([
          Article.find(
            query,
            {
              title: true,
              description: true,
              tags: true,
              slug: true,
              author: {username: true, imageURL: true},
              createdAt: true,
              favoritesCount: true,
              isFavoritedBySessionUser: true
            },
            {
              sort: {createdAt: 'desc'},
              skip: (pageNumber - 1) * PAGE_SIZE,
              limit: PAGE_SIZE
            }
          ),
          Article.count(query)
        ]);

        this.loadedArticles = loadedArticles;
        this.totalNumberOfArticles = totalNumberOfArticles;
      } catch (error) {
        error.displayMessage = 'Sorry, something went wrong while loading the articles.';
        throw error;
      }
    }, [pageNumber]);

    if (isLoading) {
      return <Common.LoadingSpinner />;
    }

    if (loadingError) {
      return <Common.ErrorMessage error={loadingError} onRetry={retryLoading} />;
    }

    const {loadedArticles} = this;

    if (loadedArticles === undefined) {
      // Avoid flickering when the user changes the page
      return null;
    }

    if (loadedArticles.length === 0) {
      return <div className="article-preview">No articles are here... yet.</div>;
    }

    return (
      <div>
        {loadedArticles.map((article) => {
          return <article.Preview key={article.slug} />;
        })}

        <this.Pagination />
      </div>
    );
  }

  @view() Pagination() {
    const totalNumberOfPages = Math.floor((this.totalNumberOfArticles - 1) / PAGE_SIZE) + 1;

    if (totalNumberOfPages < 2) {
      return null;
    }

    const pageNumbers = [];

    for (let pageNumber = 1; pageNumber <= totalNumberOfPages; pageNumber++) {
      pageNumbers.push(pageNumber);
    }

    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((pageNumber) => {
            const isCurrentPage = pageNumber === this.pageNumber;

            return (
              <li
                key={pageNumber}
                className={isCurrentPage ? 'page-item active' : 'page-item'}
                onClick={(event) => {
                  event.preventDefault();

                  if (!isCurrentPage) {
                    this.pageNumber = pageNumber;
                    this.loadedArticles = undefined; // Avoid flickering
                    window.scrollTo(0, 0);
                  }
                }}
              >
                <a className="page-link" href="">
                  {pageNumber}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
