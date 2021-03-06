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
import { expect, mount, stub } from '@instructure/ui-test-utils'

import { MenuItem } from '../../MenuItem'
import { MenuItemSeparator } from '../../MenuItemSeparator'
import { MenuItemGroup } from '../index'

import { MenuItemGroupLocator } from '../MenuItemGroupLocator'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<MenuItemGroup />', async () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select one">
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItemSeparator />
      </MenuItemGroup>
    )

    const group = await MenuItemGroupLocator.find(':label(Select one)')

    expect(group).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should set the role to "menu"', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select one">
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItemSeparator />
      </MenuItemGroup>
    )

    const container = await MenuItemGroupLocator.find()
    const group = await container.find(':label(Select one)')

    expect(group.getAttribute('role')).to.equal('menu')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should set the list item role to "none"', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select one">
        <MenuItem>Food</MenuItem>
        <MenuItem>Bar</MenuItem>
      </MenuItemGroup>
    )

    const container = await MenuItemGroupLocator.find()
    const menuItem = await container.find(':label(Select one) li')

    expect(menuItem.getAttribute('role')).to.equal('none')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should default to children with type "radio"', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select one">
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItemSeparator />
      </MenuItemGroup>
    )

    const group = await MenuItemGroupLocator.find(':label(Select one)')
    const items = await group.findAllItems('[role="menuitemradio"]')

    expect(items.length).to.equal(2)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render children with type "checkbox" if allowMultiple is true', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select a few" allowMultiple>
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItemSeparator />
      </MenuItemGroup>
    )

    const group = await MenuItemGroupLocator.find(':label(Select a few)')
    const items = await group.findAllItems('[role="menuitemcheckbox"]')

    expect(items.length).to.equal(2)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should set aria-disabled', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select one" disabled>
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItemSeparator />
      </MenuItemGroup>
    )
    const group = await MenuItemGroupLocator.find(':label(Select one)')
    const items = await group.findAllItems('[aria-disabled]')

    expect(items.length).to.equal(2)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should set selected from defaultSelected prop', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select one" defaultSelected={[1]}>
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItemSeparator />
      </MenuItemGroup>
    )

    const group = await MenuItemGroupLocator.find(':label(Select one)')
    const item = await group.findItem(':label(Bar)')

    expect(item.getAttribute('aria-checked')).to.equal('true')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should set selected from selected prop', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onSelect = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select one" onSelect={onSelect} selected={[1]}>
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItemSeparator />
      </MenuItemGroup>
    )

    const group = await MenuItemGroupLocator.find(':label(Select one)')
    const item = await group.findItem(':label(Bar)')

    expect(item.getAttribute('aria-checked')).to.equal('true')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should set selected from children', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select a few" allowMultiple>
        <MenuItem key="foo" defaultSelected>
          Foo
        </MenuItem>
        <MenuItem key="bar" selected>
          Bar
        </MenuItem>
      </MenuItemGroup>
    )
    const group = await MenuItemGroupLocator.find(':label(Select a few)')
    const items = await group.findAllItems('[aria-checked]')

    expect(items.length).to.equal(2)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should honor the allowMultiple prop (defaults to false)', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select one">
        <MenuItem defaultSelected>Foo</MenuItem>
        <MenuItem selected>Bar</MenuItem>
      </MenuItemGroup>
    )
    const group = await MenuItemGroupLocator.find(':label(Select one)')
    const items = await group.findAllItems('[aria-checked="true"]')

    expect(items.length).to.equal(1)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls onSelect when items are selected', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onSelect = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select one" onSelect={onSelect} selected={[1]}>
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItemSeparator />
      </MenuItemGroup>
    )

    const group = await MenuItemGroupLocator.find(':label(Select one)')
    const item = await group.findItem(':label(Foo)')

    await item.click()

    expect(onSelect).to.have.been.called()
    expect(onSelect.args[0][1]).to.deep.equal([0])
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('does not call onSelect when disabled', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onSelect = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select one" onSelect={onSelect} disabled>
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItemSeparator />
      </MenuItemGroup>
    )

    const group = await MenuItemGroupLocator.find(':label(Select one)')
    const item = await group.findItem(':label(Foo)')

    await item.click(null, { clickable: false })

    expect(onSelect).to.not.have.been.called()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('updates the selected items when allowMultiple is true', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onSelect = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select some" allowMultiple onSelect={onSelect}>
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItemSeparator />
      </MenuItemGroup>
    )

    const group = await MenuItemGroupLocator.find(':label(Select some)')
    const items = await group.findAllItems()

    await items[0].click()

    expect(items[0].getAttribute('aria-checked')).to.equal('true')

    expect(onSelect).to.have.been.calledOnce()
    expect(onSelect.getCall(0).args[1]).to.deep.equal([0])
    expect(onSelect.getCall(0).args[2]).to.be.true()

    await items[1].click()

    expect(items[1].getAttribute('aria-checked')).to.equal('true')

    expect(onSelect).to.have.been.calledTwice()
    expect(onSelect.getCall(1).args[1]).to.deep.equal([0, 1])
    expect(onSelect.getCall(1).args[2]).to.be.true()

    await items[0].click()

    expect(items[0].getAttribute('aria-checked')).to.equal('false')

    expect(onSelect).to.have.been.calledThrice()
    expect(onSelect.getCall(2).args[1]).to.deep.equal([1])
    expect(onSelect.getCall(2).args[2]).to.be.false()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('updates the selected items when allowMultiple is false', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onSelect = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <MenuItemGroup label="Select one" onSelect={onSelect}>
        <MenuItem>Foo</MenuItem>
        <MenuItem>Bar</MenuItem>
        <MenuItemSeparator />
      </MenuItemGroup>
    )

    const group = await MenuItemGroupLocator.find(':label(Select one)')
    const items = await group.findAllItems()

    await items[0].click()

    expect(items[0].getAttribute('aria-checked')).to.equal('true')
    expect(items[1].getAttribute('aria-checked')).to.equal('false')

    expect(onSelect).to.have.been.calledOnce()
    expect(onSelect.getCall(0).args[1]).to.deep.equal([0])
    expect(onSelect.getCall(0).args[2]).to.be.true()

    await items[1].click()

    expect(items[1].getAttribute('aria-checked')).to.equal('true')
    expect(items[0].getAttribute('aria-checked')).to.equal('false')

    expect(onSelect).to.have.been.calledTwice()
    expect(onSelect.getCall(1).args[1]).to.deep.equal([1])
    expect(onSelect.getCall(1).args[2]).to.be.true()
  })
})
