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
import {
  expect,
  mount,
  generateA11yTests,
  stub,
  wait,
  within
} from '@instructure/ui-test-utils'

import AppNavExamples from '../__examples__/AppNav.examples'
import { AppNav } from '../index'
import { AppNavLocator } from '../AppNavLocator'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<AppNav />', async () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('for a11y', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render a nav element with an aria-label', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <AppNav screenReaderLabel="Screen reader label" visibleItemsCount={2}>
          <AppNav.Item
            renderLabel="Some label"
            href="http://instructure.design"
          />
          <AppNav.Item
            renderLabel="Some other label"
            href="http://instructure.design"
          />
        </AppNav>
      )

      const nav = await AppNavLocator.find()
      expect(await nav.find('ul[aria-label="Screen reader label"]')).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render a semantic list of items', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <AppNav screenReaderLabel="App navigation" visibleItemsCount={2}>
          <AppNav.Item
            renderLabel="Some first label"
            href="http://instructure.design"
          />
          <AppNav.Item
            renderLabel="Some second label"
            onClick={() => 'clicked'}
          />
        </AppNav>
      )

      const nav = await AppNavLocator.find()

      const list = await nav.findAll('ul')
      const items = await nav.findAll('li')
      const link = await nav.findAll('a')
      const button = await nav.findAll('button')

      expect(list).to.have.length(1)
      expect(items).to.have.length(2)
      expect(link).to.have.length(1)
      expect(button).to.have.length(1)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render with a single item', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <AppNav screenReaderLabel="App navigation" visibleItemsCount={1}>
          <AppNav.Item
            renderLabel="Some label"
            href="http://instructure.design"
          />
        </AppNav>
      )

      const nav = await AppNavLocator.find()

      const list = await nav.findAll('ul')
      const items = await nav.findAll('li')
      const link = await nav.findAll('a')

      expect(list).to.have.length(1)
      expect(items).to.have.length(1)
      expect(link).to.have.length(1)
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('with rendered content', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render content after the navigation', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <AppNav
          screenReaderLabel="App navigation"
          renderAfterItems={<button type="button">I am rendered after!</button>}
          visibleItemsCount={2}
        >
          <AppNav.Item
            renderLabel="Some label"
            href="http://instructure.design"
          />
          <AppNav.Item
            renderLabel="Some other label"
            href="http://instructure.design"
          />
        </AppNav>
      )
      const nav = await AppNavLocator.find()
      expect(await nav.find('button:contains(I am rendered after!)')).to.exist()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('with item truncation', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should hide and show items based on the containing element width', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
      const onUpdate = stub()
      const itemWidth = 70

      // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'width' implicitly has an 'any' ty... Remove this comment to see the full error message
      const Nav = ({ width }) => (
        <div style={{ width }}>
          <AppNav screenReaderLabel="App navigation" onUpdate={onUpdate}>
            <AppNav.Item
              renderLabel={<div style={{ width: itemWidth }}>coolLabel</div>}
              href="http://instructure.design"
            />
            <AppNav.Item
              renderLabel={<div style={{ width: itemWidth }}>coolLabel</div>}
              href="http://instructure.design"
            />
            <AppNav.Item
              renderLabel={<div style={{ width: itemWidth }}>coolLabel</div>}
              href="http://instructure.design"
            />
            <AppNav.Item
              renderLabel={<div style={{ width: itemWidth }}>coolLabel</div>}
              href="http://instructure.design"
            />
          </AppNav>
        </div>
      )

      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const subject = await mount(<Nav width={800} />)

      await wait(() => {
        expect(onUpdate).to.have.been.calledWith({ visibleItemsCount: 4 })
      })

      onUpdate.reset()
      await subject.setProps({ width: 400 })

      await wait(() => {
        expect(onUpdate).to.have.been.calledWith({ visibleItemsCount: 2 })
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should pass a custom label to the menu trigger', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const subject = await mount(
        <AppNav
          screenReaderLabel="App navigation"
          visibleItemsCount={2}
          renderTruncateLabel={function () {
            return 'I am sooo custom!'
          }}
        >
          <AppNav.Item renderLabel="Label" href="http://instructure.design" />
          <AppNav.Item renderLabel="Label" href="http://instructure.design" />
          <AppNav.Item renderLabel="Label" href="http://instructure.design" />
          <AppNav.Item renderLabel="Label" href="http://instructure.design" />
        </AppNav>
      )

      const nav = within(subject.getDOMNode())
      const trigger = await nav.findAll('li:contains(I am sooo custom!)')

      expect(trigger).to.have.length(1)
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('with generated examples', async () => {
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ getComponentProps: (props: any... Remove this comment to see the full error message
    generateA11yTests(AppNavExamples)
  })
})
