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
import { expect, mount, spy, within } from '@instructure/ui-test-utils'
import { Pages, Page } from '../index'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Pages />', async () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <Pages>
        <Page>{() => 'Foo'}</Page>
        <Page>{() => 'Bar'}</Page>
      </Pages>
    )

    expect(subject.getDOMNode()).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render a Page', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <Pages>
        <Page>{() => 'Hello World'}</Page>
      </Pages>
    )

    expect(subject.getDOMNode().textContent).to.equal('Hello World')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the 0th Page by default', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <Pages>
        <Page>{() => 'Foo'}</Page>
        <Page>{() => 'Bar'}</Page>
      </Pages>
    )
    expect(subject.getDOMNode().textContent).to.equal('Foo')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the active Page', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <Pages activePageIndex={1}>
        <Page>{() => 'Foo'}</Page>
        <Page>{() => 'Bar'}</Page>
      </Pages>
    )

    expect(subject.getDOMNode().textContent).to.equal('Bar')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should pass history and navigateToPreviousPage to Page', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 0.
    const pageSpy = spy()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Pages>
        <Page>{pageSpy}</Page>
      </Pages>
    )
    // Called twice because props.makeStyles() is called in Pages.componentDidMount()
    expect(pageSpy).to.have.been.called()
    expect(Array.isArray(pageSpy.args[0][0])).to.equal(true)
    expect(typeof pageSpy.args[0][1]).to.equal('function')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should fire onPageIndexChange event', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 0.
    const onPageIndexChange = spy()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <Pages activePageIndex={0} onPageIndexChange={onPageIndexChange}>
        <Page key={0}>{() => 'Foo'}</Page>
        <Page key={1}>
          {/* @ts-expect-error ts-migrate(6133) FIXME: 'history' is declared but its value is never read. */}
          {(history, navigate) => <button onClick={navigate}>Back</button>}
        </Page>
      </Pages>
    )

    await subject.setProps({ activePageIndex: 1 })

    const pages = within(subject.getDOMNode())
    const button = await pages.find('button')

    await button.click()

    expect(onPageIndexChange).to.have.been.calledOnce()
    expect(onPageIndexChange).to.have.been.calledWith(0, 1)
  })
})
