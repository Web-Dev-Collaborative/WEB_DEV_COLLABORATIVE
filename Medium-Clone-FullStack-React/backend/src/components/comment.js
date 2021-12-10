import {expose, validators} from '@layr/component';
import {attribute} from '@layr/storable';

import {Entity} from './entity';
import {WithAuthor} from './with-author';

const {rangeLength} = validators;

@expose({
  find: {call: true},
  prototype: {
    load: {call: true},
    save: {call: 'author'},
    delete: {call: 'author'}
  }
})
export class Comment extends WithAuthor(Entity) {
  @expose({get: true, set: 'author'}) @attribute('Article') article;

  @expose({get: true, set: 'author'})
  @attribute('string', {validators: [rangeLength([1, 50000])]})
  body = '';
}
