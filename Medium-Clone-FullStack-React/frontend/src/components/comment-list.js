import {Component, consume, attribute} from '@layr/component';
import React from 'react';
import {view, useAsyncMemo} from '@layr/react-integration';

export class CommentList extends Component {
  @consume() static Session;
  @consume() static User;
  @consume() static Comment;
  @consume() static Common;

  @attribute('Article') article;

  @attribute('Comment[]') comments;

  @attribute('Comment?') userComment;

  @view() static Main({article}) {
    const {Session, Comment, Common} = this;

    const [commentList, isLoading, loadingError, retryLoading] = useAsyncMemo(async () => {
      try {
        const comments = await Comment.find(
          {article},
          {body: true, author: {username: true, imageURL: true}, createdAt: true},
          {sort: {createdAt: 'desc'}}
        );

        const userComment = Session.user && new Comment({article});

        return new this({article, comments, userComment});
      } catch (error) {
        error.displayMessage = 'Sorry, something went wrong while loading the comments.';
        throw error;
      }
    }, [article]);

    if (isLoading) {
      return <Common.LoadingSpinner />;
    }

    if (loadingError) {
      return <Common.ErrorMessage error={loadingError} onRetry={retryLoading} />;
    }

    return <commentList.Main />;
  }

  @view() Main() {
    const {Session, User, Comment} = this.constructor;

    return (
      <div className="col-xs-12 col-md-8 offset-md-2">
        {this.userComment ? (
          <div>
            <this.userComment.Creator
              onSave={() => {
                this.comments = [this.userComment, ...this.comments];
                this.userComment = new Comment({article: this.article});
              }}
            />
          </div>
        ) : (
          <p>
            <User.SignIn.Link>Sign in</User.SignIn.Link>
            &nbsp;or&nbsp;
            <User.SignUp.Link>Sign up</User.SignUp.Link>
            &nbsp;to add comments on this article.
          </p>
        )}

        <div>
          {this.comments.map((comment) => {
            return (
              <comment.Main
                key={comment.id}
                onDelete={() => {
                  const deletedComment = comment;
                  this.comments = this.comments.filter((comment) => comment !== deletedComment);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
