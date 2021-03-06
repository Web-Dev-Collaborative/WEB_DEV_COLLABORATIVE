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
import { expect, mount, stub, wait, spy } from '@instructure/ui-test-utils'

import { View } from '@instructure/ui-view'

import { Tag } from '../index'
import { TagLocator } from '../TagLocator'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Tag />', async () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should display text', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(<Tag text="Summer" />)

    const tag = await TagLocator.find()

    expect(await tag.find(':contains(Summer)')).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render as a button and respond to onClick event', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onClick = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(<Tag text="Summer" onClick={onClick} />)
    const tag = await TagLocator.find()
    const button = await tag.find('button')
    await button.click()

    await wait(() => {
      expect(onClick).to.have.been.called()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render a close icon when it is dismissible and clickable', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onClick = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(<Tag text="Summer" onClick={onClick} dismissible={true} />)
    const tag = await TagLocator.find()
    expect(await tag.find('svg[name="IconX"]')).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should meet a11y standards', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(<Tag text="Summer" />)
    const tag = await TagLocator.find()
    expect(await tag.accessible()).to.be.true()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('when passing down props to View', async () => {
    const allowedProps = {
      margin: 'small',
      elementRef: () => {}
    }

    Object.keys(View.propTypes)
      .filter(
        (prop) =>
          prop !== 'theme' &&
          prop !== 'children' &&
          prop !== 'styles' &&
          prop !== 'makeStyles'
      )
      .forEach((prop) => {
        if (Object.keys(allowedProps).indexOf(prop) < 0) {
          // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
          it(`should NOT allow the '${prop}' prop`, async () => {
            const warning = `Warning: [Tag] prop '${prop}' is not allowed.`
            const props = {
              [prop]: 'foo'
            }
            const consoleError = spy(console, 'error')
            // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
            await mount(<Tag text="Summer" {...props} />)
            expect(consoleError.firstCall.args[0]).to.be.equal(warning)
          })
        } else {
          // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
          it(`should allow the '${prop}' prop`, async () => {
            // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            const props = { [prop]: allowedProps[prop] }
            // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
            const consoleError = stub(console, 'error')
            // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
            await mount(<Tag text="Summer" {...props} />)
            expect(consoleError).to.not.be.called()
          })
        }
      })
  })
})
