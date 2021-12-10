import {consume} from '@layr/component';
import {Routable} from '@layr/routable';
import React from 'react';
import {view, useAsyncCallback} from '@layr/react-integration';

import {Entity} from './entity';

export const Comment = (Base) =>
  class Comment extends Routable(Entity(Base)) {
    @consume() static Session;
    @consume() static User;
    @consume() static Common;

    @view() Main({onDelete}) {
      const {Session, User} = this.constructor;

      const [handleDelete, isDeleting] = useAsyncCallback(async () => {
        await this.delete();
        onDelete();
      }, []);

      return (
        <div className="card" style={{opacity: isDeleting ? 0.3 : 1}}>
          <div className="card-block">
            <p className="card-text">{this.body}</p>
          </div>

          <div className="card-footer">
            <User.Main.Link params={this.author} className="comment-author">
              <this.author.ProfileImage className="comment-author-img" />
            </User.Main.Link>
            &nbsp;
            <User.Main.Link params={this.author} className="comment-author">
              {this.author.username}
            </User.Main.Link>
            <span className="date-posted">{this.createdAt.toDateString()}</span>
            {this.author === Session.user && (
              <span className="mod-options">
                <i className="ion-trash-a" onClick={handleDelete} />
              </span>
            )}
          </div>
        </div>
      );
    }

    @view() Creator({onSave}) {
      const {Common} = this.constructor;

      const [handleSave, , savingError] = useAsyncCallback(async () => {
        await this.save();
        onSave();
      }, []);

      return (
        <div>
          {savingError && <Common.ErrorMessage error={savingError} />}

          <this.Form onSubmit={handleSave} />
        </div>
      );
    }

    @view() Form({onSubmit}) {
      const {Session} = this.constructor;

      const [handleSubmit, isSubmitting] = useAsyncCallback(
        async (event) => {
          event.preventDefault();
          await onSubmit();
        },
        [onSubmit]
      );

      return (
        <form onSubmit={handleSubmit} autoComplete="off" className="card comment-form">
          <div className="card-block">
            <textarea
              className="form-control"
              placeholder="Write a comment..."
              value={this.body}
              onChange={(event) => {
                this.body = event.target.value;
              }}
              rows="3"
              disabled={isSubmitting}
            />
          </div>

          <div className="card-footer">
            <Session.user.ProfileImage className="comment-author-img" />
            <button type="submit" disabled={isSubmitting} className="btn btn-sm btn-primary">
              Post comment
            </button>
          </div>
        </form>
      );
    }
  };
