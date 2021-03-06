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
import { expect, find, mount, stub } from '@instructure/ui-test-utils'

import { Tab } from '../index'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Tabs.Tab />', async () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render children', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Tab id="foo" index={0} controls="foo-panel">
        Tab Label
      </Tab>
    )

    const tab = await find('[role="tab"]')

    expect(tab.getTextContent()).to.equal('Tab Label')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should have appropriate role attribute', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Tab id="foo" index={0} controls="foo-panel">
        Tab Label
      </Tab>
    )
    expect(await find('[role="tab"]')).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should have appropriate aria attributes', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Tab id="foo" index={0} controls="foo-panel">
        Tab Label
      </Tab>
    )

    const tab = await find('[role="tab"]')

    expect(tab.getAttribute('aria-selected')).to.not.exist()
    expect(tab.getAttribute('aria-disabled')).to.not.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should set the aria-selected attribute', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Tab id="foo" index={0} controls="foo-panel" isSelected>
        Tab Label
      </Tab>
    )
    expect(await find('[role="tab"][aria-selected="true"]')).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should set the aria-disabled attribute', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Tab id="foo" index={0} controls="foo-panel" isDisabled>
        Tab Label
      </Tab>
    )
    expect(await find('[role="tab"][aria-disabled="true"]')).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should set the tabindex to 0 when selected', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Tab id="foo" index={0} controls="foo-panel" isSelected>
        Tab Label
      </Tab>
    )
    expect(await find('[role="tab"][tabindex="0"]')).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should not set the tabindex when not selected', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Tab id="foo" index={0} controls="foo-panel">
        Tab Label
      </Tab>
    )
    const tab = await find('[role="tab"]')
    expect(tab).to.not.have.attribute('tabindex')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should remove the tabindex attribute when disabled', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Tab id="foo" index={0} controls="foo-panel" isDisabled>
        Tab Label
      </Tab>
    )

    const tab = await find('[role="tab"]')

    expect(tab.getAttribute('tabindex')).to.not.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should call onClick when clicked', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onClick = stub()
    const index = 2

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Tab id="foo" index={index} controls="foo-panel" onClick={onClick}>
        Tab Label
      </Tab>
    )

    const tab = await find('[role="tab"]')
    await tab.click()

    expect(onClick).to.have.been.called()
    expect(onClick.args[0][1].index).to.equal(index)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should NOT call onClick when clicked and tab is disabled', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onClick = stub()

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Tab id="foo" index={0} controls="foo-panel" onClick={onClick} isDisabled>
        Tab Label
      </Tab>
    )
    const tab = await find('[role="tab"]')
    await tab.click()

    expect(onClick).to.not.have.been.called()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should call onKeyDown when keys are pressed and tab is selected', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onKeyDown = stub()
    const index = 2

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Tab
        id="foo"
        isSelected
        index={index}
        controls="foo-panel"
        onKeyDown={onKeyDown}
      >
        Tab Label
      </Tab>
    )

    const tab = await find('[role="tab"]')
    await tab.keyDown('enter')

    expect(onKeyDown).to.have.been.called()
    expect(onKeyDown.args[0][1].index).to.equal(index)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should NOT call onKeyDown when keys are pressed and tab is disabled', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onKeyDown = stub()

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Tab
        id="foo"
        index={0}
        controls="foo-panel"
        onKeyDown={onKeyDown}
        isDisabled
      >
        Tab Label
      </Tab>
    )
    const tab = await find('[role="tab"]')

    let error = false
    try {
      await tab.keyDown('enter')
    } catch (event) {
      error = true
    }

    expect(error).to.be.true()
    expect(onKeyDown).to.not.have.been.called()
  })
})
