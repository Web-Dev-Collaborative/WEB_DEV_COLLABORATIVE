import {Component, provide} from '@layr/component';
import {Storable} from '@layr/storable';
import {ComponentHTTPClient} from '@layr/component-http-client';
import React, {useEffect} from 'react';
import {view, useBrowserRouter} from '@layr/react-integration';

import {Home} from './home';
import {Session} from './session';
import {User} from './user';
import {ArticleList} from './article-list';
import {Article} from './article';
import {CommentList} from './comment-list';
import {Comment} from './comment';
import {Common} from './common';

export const getApplication = async ({name, description, backendURL}) => {
  const client = new ComponentHTTPClient(backendURL, {mixins: [Storable]});

  const BackendApplication = await client.getComponent();

  class Application extends BackendApplication {
    @provide() static Home = Home;
    @provide() static Session = Session(BackendApplication.Session);
    @provide() static User = User(BackendApplication.User);
    @provide() static ArticleList = ArticleList;
    @provide() static Article = Article(BackendApplication.Article);
    @provide() static CommentList = CommentList;
    @provide() static Comment = Comment(BackendApplication.Comment);
    @provide() static Common = Common;

    @view() static Main() {
      const {Common} = this;

      useEffect(() => {
        document.title = this.getTitle();
      }, [this.getTitle()]);

      const [router, isReady] = useBrowserRouter(this);

      if (!isReady) {
        return null;
      }

      const content = router.callCurrentRoute({fallback: Common.RouteNotFound});

      return (
        <div>
          <this.Header />
          {content}
        </div>
      );
    }

    static getTitle() {
      return name;
    }

    @view() static Header() {
      const {Home} = this;

      return (
        <nav className="navbar navbar-light">
          <div className="container">
            <Home.Main.Link className="navbar-brand">{name.toLowerCase()}</Home.Main.Link>

            <this.Menu />
          </div>
        </nav>
      );
    }

    @view() static Menu() {
      const {Home, User, Article, Session} = this;

      const {user} = Session;

      if (user !== undefined) {
        return (
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Home.Main.Link className="nav-link">Home</Home.Main.Link>
            </li>

            <li className="nav-item">
              <Article.Creator.Link className="nav-link">
                <i className="ion-compose" /> New post
              </Article.Creator.Link>
            </li>

            <li className="nav-item">
              <User.Settings.Link className="nav-link">
                <i className="ion-gear-a" /> Settings
              </User.Settings.Link>
            </li>

            <li className="nav-item">
              <User.Main.Link params={user} className="nav-link">
                <user.ProfileImage />
                {user.username}
              </User.Main.Link>
            </li>
          </ul>
        );
      }

      return (
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Home.Main.Link className="nav-link">Home</Home.Main.Link>
          </li>

          <li className="nav-item">
            <User.SignIn.Link className="nav-link">Sign in</User.SignIn.Link>
          </li>

          <li className="nav-item">
            <User.SignUp.Link className="nav-link">Sign up</User.SignUp.Link>
          </li>
        </ul>
      );
    }

    @view() static Banner() {
      return (
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">{name.toLowerCase()}</h1>
            <p>{description}</p>
          </div>
        </div>
      );
    }
  }

  return Application;
};
