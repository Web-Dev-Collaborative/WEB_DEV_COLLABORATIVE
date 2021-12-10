import {Component, provide} from '@layr/component';

import {Session} from './session';
import {User} from './user';
import {Article} from './article';
import {Comment} from './comment';
import {JWT} from './jwt';

export class Application extends Component {
  @provide() static Session = Session;
  @provide() static User = User;
  @provide() static Article = Article;
  @provide() static Comment = Comment;
  @provide() static JWT = JWT;
}
