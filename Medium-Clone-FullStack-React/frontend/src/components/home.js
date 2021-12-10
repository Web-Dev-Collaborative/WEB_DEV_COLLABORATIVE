import {Component, consume} from '@layr/component';
import {Routable, route} from '@layr/routable';
import React from 'react';
import {view} from '@layr/react-integration';

export class Home extends Routable(Component) {
  @consume() static Application;
  @consume() static Session;
  @consume() static ArticleList;
  @consume() static Article;

  @route('/') static Main() {
    const {Session} = this;

    if (Session.user) {
      this.UserFeed.redirect();
    } else {
      this.GlobalFeed.redirect();
    }
  }

  @route('/home') static UserFeed() {
    const {Session} = this;

    if (!Session.user) {
      this.Main.redirect();
      return;
    }

    return this.Content({articleQuery: {authorIsFollowedBySessionUser: true}});
  }

  @route('/all') static GlobalFeed() {
    return this.Content({articleQuery: {}});
  }

  @route('/tags/:tag') static TagFeed({tag}) {
    return this.Content({articleQuery: {tags: tag}});
  }

  @view() static Content({articleQuery}) {
    const {Application, Session, ArticleList, Article} = this;

    return (
      <div className="home-page">
        {!Session.user && <Application.Banner />}

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <this.Tabs />
              <ArticleList.Main query={articleQuery} />
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular tags</p>
                <Article.PopularTagList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  @view() static Tabs() {
    const {Session} = this;

    const {tag} = this.getRouter().getCurrentParams();

    return (
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          {Session.user && (
            <li className="nav-item">
              <this.UserFeed.Link className="nav-link" activeClassName="active">
                Your feed
              </this.UserFeed.Link>
            </li>
          )}

          <li className="nav-item">
            <this.GlobalFeed.Link className="nav-link" activeClassName="active">
              Global feed
            </this.GlobalFeed.Link>
          </li>

          {tag && (
            <li className="nav-item">
              <this.TagFeed.Link params={{tag}} className="nav-link" activeClassName="active">
                <i className="ion-pound" /> {tag}
              </this.TagFeed.Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
