/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react'
import { expect, mount, within } from '@instructure/ui-test-utils'

import { ApplyTextDirection } from '../index'
import { bidirectional } from '../../bidirectional'

@bidirectional()
class BidirectionalComponent extends React.Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'dir' does not exist on type 'Readonly<{}... Remove this comment to see the full error message
    return <div data-dir={this.props.dir}>Hello world</div>
  }
}

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<ApplyTextDirection />', async () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should take on the direction of the document element by default', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <ApplyTextDirection>Hello world</ApplyTextDirection>
    )

    expect(subject.getDOMNode().getAttribute('dir')).to.equal('ltr')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should take on the context direction if dir prop is not supplied', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <ApplyTextDirection dir="rtl">Hello World</ApplyTextDirection>
    )

    expect(subject.getDOMNode().getAttribute('dir')).to.equal('rtl')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should give dir prop preference over context and default document element when supplied', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <ApplyTextDirection dir="rtl">
        <ApplyTextDirection dir="ltr">Hello world</ApplyTextDirection>
      </ApplyTextDirection>
    )

    expect(subject.getDOMNode().childNodes[0].getAttribute('dir')).to.equal(
      'ltr'
    )
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should pass direction via context to bidirectional children', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <ApplyTextDirection dir="rtl">
        <BidirectionalComponent />
      </ApplyTextDirection>
    )

    const component = within(subject.getDOMNode())
    const text = await component.findWithText('Hello world')

    expect(text.getAttribute('data-dir')).to.equal('rtl')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('when nested, should override parent ApplyTextDirection context', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <ApplyTextDirection dir="rtl">
        <ApplyTextDirection dir="ltr">
          <BidirectionalComponent />
        </ApplyTextDirection>
      </ApplyTextDirection>
    )

    const component = within(subject.getDOMNode())
    const text = await component.findWithText('Hello world')

    expect(text.getAttribute('data-dir')).to.equal('ltr')
  })
})
