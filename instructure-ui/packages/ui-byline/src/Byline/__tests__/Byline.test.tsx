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

import { expect, mount, within, stub } from '@instructure/ui-test-utils'
import { View } from '@instructure/ui-view'
import { Byline } from '../index'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Byline />', async () => {
  // eslint-disable-next-line max-len
  const image = (
    <img
      alt=""
      src="data:image/gif;base64,R0lGODlhFAAUAJEAAP/9/fYQEPytrflWViH5BAAAAAAALAAAAAAUABQAQAJKhI+pGe09lnhBnEETfodatVHNh1BR+ZzH9LAOCYrVYpiAfWWJOxrC/5MASbyZT4d6AUIBlUYGoR1FsAXUuTN5YhxAEYbrpKRkQwEAOw=="
    />
  )

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <Byline title="Hello World" description="Test Image">
        {image}
      </Byline>
    )

    expect(subject.getDOMNode()).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should pass down div and its contents via the description property', async () => {
    const description = (
      <div>
        <h2>
          <a href="https://instructure.design">Clickable Heading</a>
        </h2>
        <p>Something here</p>
      </div>
    )

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <Byline description={description}>{image}</Byline>
    )

    const media = within(subject.getDOMNode())
    expect(await media.find(':contains(Clickable Heading)')).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should meet a11y standards', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <Byline title="Hello World" description="Test Image">
        {image}
      </Byline>
    )

    const media = within(subject.getDOMNode())
    expect(await media.accessible()).to.be.true()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it(`should render a figure by default`, async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    expect(await mount(<Byline>{image}</Byline>))

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'find'.
    expect(await find('figure')).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it(`should not allow the 'as' prop`, async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
    const consoleError = stub(console, 'error')
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(<Byline as="foo">{image}</Byline>)
    expect(consoleError).to.be.calledWith(
      "Warning: [Byline] prop 'as' is not allowed."
    )
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('when passing down props to View', async () => {
    const allowedProps = {
      margin: 'small'
    }

    const ignoreProps = [
      'theme',
      'children',
      'styles',
      'makeStyles',
      'elementRef'
    ]

    Object.keys(View.propTypes)
      .filter((prop) => !ignoreProps.includes(prop))
      .forEach((prop) => {
        if (Object.keys(allowedProps).indexOf(prop) < 0) {
          // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
          it(`should NOT allow the '${prop}' prop`, async () => {
            // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
            const consoleError = stub(console, 'error')
            const warning = `Warning: [Byline] prop '${prop}' is not allowed.`
            const props = {
              [prop]: 'foo'
            }
            // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
            await mount(<Byline {...props}>{image}</Byline>)
            expect(consoleError).to.be.calledWith(warning)
          })
        } else {
          // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
          it(`should allow the '${prop}' prop`, async () => {
            // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            const props = { [prop]: allowedProps[prop] }
            // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
            const consoleError = stub(console, 'error')
            // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
            await mount(<Byline {...props}>{image}</Byline>)
            expect(consoleError).to.not.be.called()
          })
        }
      })
  })
})
