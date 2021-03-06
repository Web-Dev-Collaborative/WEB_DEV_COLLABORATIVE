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
import { expect, mount, stub, wait } from '@instructure/ui-test-utils'
import { TreeBrowser } from '../index'
import { TreeNode } from '../TreeNode'

import { TreeBrowserLocator } from '../TreeBrowserLocator'

const COLLECTIONS_DATA = {
  2: { id: 2, name: 'Root Directory', collections: [3, 4], items: [1] },
  3: { id: 3, name: 'Sub Root 1', collections: [5] },
  4: { id: 4, name: 'Sub Root 2' },
  5: { id: 5, name: 'Nested Sub Collection' }
}

const ITEMS_DATA = {
  1: { id: 1, name: 'Item 1' }
}

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<TreeBrowser />', async () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render a tree', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <TreeBrowser
        collections={COLLECTIONS_DATA}
        items={ITEMS_DATA}
        rootId={2}
      />
    )
    const tree = await TreeBrowserLocator.find()
    expect(tree).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render subcollections', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <TreeBrowser
        collections={COLLECTIONS_DATA}
        items={ITEMS_DATA}
        rootId={2}
      />
    )

    const tree = await TreeBrowserLocator.find()
    const items = await tree.findAllItems()

    expect(items.length).to.equal(1)

    await items[0].click()

    const itemsAfterClick = await tree.findAllItems()

    expect(itemsAfterClick.length).to.equal(4)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render all collections at top level if showRootCollection is true and rootId is undefined', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <TreeBrowser
        collections={COLLECTIONS_DATA}
        items={ITEMS_DATA}
        rootId={undefined}
      />
    )

    const tree = await TreeBrowserLocator.find()
    const items = await tree.findAllItems()

    expect(items.length).to.equal(4)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('expanded', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not expand collections or items without defaultExpanded prop', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
        />
      )
      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      await wait(() => {
        expect(items.length).to.equal(1)
        expect(items[0]).to.have.text('Root Directory')
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should accept an array of default expanded collections', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          defaultExpanded={[2, 3]}
        />
      )
      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      expect(items.length).to.equal(5)

      expect(await tree.findItem(':label(Sub Root 2)')).to.exist()
      expect(await tree.findItem(':label(Nested Sub Collection)')).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should persist the state of expanded children when parent collapsed', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
        />
      )

      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      const rootCollection = items[0]

      await rootCollection.click()

      expect((await tree.findAllItems()).length).to.equal(4)

      const subCollection = await tree.findItem(':label(Sub Root 1)')

      await subCollection.click()

      expect((await tree.findAllItems()).length).to.equal(5)

      await rootCollection.click()

      expect((await tree.findAllItems()).length).to.equal(1)

      await rootCollection.click()

      expect((await tree.findAllItems()).length).to.equal(5)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not update expanded on click when set as explicit prop', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          expanded={[2]}
        />
      )

      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      expect(items.length).to.equal(4)

      await items[0].click()

      expect((await tree.findAllItems()).length).to.equal(4)

      await (await tree.findItem(':label(Sub Root 1)')).click()

      expect((await tree.findAllItems()).length).to.equal(4)

      expect(
        await tree.findItem(':label(Nested Sub Collection)', {
          expectEmpty: true
        })
      ).to.not.exist()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('selected', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not show the selection if selectionType is none', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
        />
      )
      const tree = await TreeBrowserLocator.find()

      const item = await tree.findItem()

      item.click()

      await wait(() => {
        expect(item).to.not.have.attribute('aria-selected')
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should show the selection indicator on last clicked collection or item', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          selectionType="single"
        />
      )

      const tree = await TreeBrowserLocator.find()

      const item = await tree.findItem(':label(Root Directory)')

      await item.click()

      await wait(() => {
        expect(item).to.have.attribute('aria-selected')
      })

      const nestedItem = await tree.findItem(':label(Item 1)')

      await nestedItem.click()

      await wait(() => {
        expect(nestedItem).to.have.attribute('aria-selected')
      })
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('collections', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not show the first keyed collection if showRootCollection is false', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          showRootCollection={false}
        />
      )

      const tree = await TreeBrowserLocator.find()

      const items = await tree.findAllItems()

      expect(items.length).to.equal(3)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render first keyed collection if showRootCollection is true and rootId specified', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
        />
      )
      const tree = await TreeBrowserLocator.find()

      const item = await tree.findItem(':label(Root Directory)')

      expect(item).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render a folder icon by default', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
        />
      )
      const tree = await TreeBrowserLocator.find()

      const iconFolder = await tree.findAll('[name="IconFolder"]')

      expect(iconFolder.length).to.equal(1)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render a custom icon', async () => {
      const IconCustom = (
        <svg height="100" width="100">
          <title>Custom icon</title>
          <circle cx="50" cy="50" r="40" />
        </svg>
      )

      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          collectionIcon={() => IconCustom}
        />
      )
      const tree = await TreeBrowserLocator.find()
      const item = await tree.findItem(':label(Root Directory)')
      const icons = await item.findAll('svg:title(Custom icon)')

      expect(icons.length).to.equal(1)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render without icon if set to null', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          collectionIcon={null}
        />
      )
      const tree = await TreeBrowserLocator.find()

      expect(await tree.find('svg', { expectEmpty: true })).to.not.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should call onCollectionToggle when expanding and collapsing with mouse', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
      const onCollectionToggle = stub()
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          onCollectionToggle={onCollectionToggle}
        />
      )
      const tree = await TreeBrowserLocator.find()
      const item = await tree.findItem()

      await item.click()

      await wait(() => {
        expect(onCollectionToggle).to.have.been.called()
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should call onCollectionToggle on arrow key expansion or collapse', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
      const onCollectionToggle = stub()
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          onCollectionToggle={onCollectionToggle}
        />
      )

      const tree = await TreeBrowserLocator.find()
      const item = await tree.find(':label(Root Directory)')

      await item.focus()

      await wait(() => {
        expect(item).to.contain.focus()
      })

      await item.keyDown('right')
      await item.keyDown('left')
      await item.keyDown('left')

      await wait(() => {
        expect(onCollectionToggle).to.have.been.calledTwice()
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should call onCollectionClick on button activation (space/enter or click)', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
      const onCollectionClick = stub()
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          onCollectionClick={onCollectionClick}
        />
      )
      const tree = await TreeBrowserLocator.find()

      const item = await tree.findItem(':label(Root Directory)')

      await item.click()
      await item.keyDown('space')
      await item.keyDown('enter')

      await wait(() => {
        expect(onCollectionClick).to.have.been.calledThrice()
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render before, after nodes of the provided collection', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={{
            2: {
              id: 2,
              name: 'Root Directory',
              collections: [],
              items: [],
              renderBeforeItems: (
                <TreeNode>
                  <input id="input-before" />
                </TreeNode>
              ),
              renderAfterItems: (
                <TreeNode>
                  <input id="input-after" />
                </TreeNode>
              )
            }
          }}
          items={{}}
          expanded={[2]}
          rootId={2}
        />
      )
      const tree = await TreeBrowserLocator.find()
      const contentBefore = await tree.find('#input-before')
      expect(contentBefore).to.exist()
      const contentAfter = await tree.find('#input-after')
      expect(contentAfter).to.exist()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('items', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render a document icon by default', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          defaultExpanded={[2]}
        />
      )

      const tree = await TreeBrowserLocator.find()
      const iconDoc = await tree.findAll('[name="IconDocument"]')

      expect(iconDoc.length).to.equal(1)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render a custom icon', async () => {
      const IconCustom = (
        <svg height="100" width="100">
          <title>Custom icon</title>
          <circle cx="50" cy="50" r="40" />
        </svg>
      )

      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          defaultExpanded={[2]}
          itemIcon={() => IconCustom}
        />
      )

      const tree = await TreeBrowserLocator.find()
      const item = await tree.findItem(':label(Item 1)')
      const icons = await item.findAll('svg:title(Custom icon)')

      expect(icons.length).to.equal(1)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render without icon if set to null', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
        />
      )
      const tree = await TreeBrowserLocator.find()
      const icon = await tree.find('[name="IconDocument"]', {
        expectEmpty: true
      })

      expect(icon).to.not.exist()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('for a11y', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should meet a11y standards', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
        />
      )
      const tree = await TreeBrowserLocator.find()
      expect(await tree.accessible()).to.be.true()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should accept a treeLabel prop', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          treeLabel="Test treeLabel"
        />
      )
      const tree = await TreeBrowserLocator.find(':label(Test treeLabel)')
      expect(tree).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should toggle aria-expanded', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
        />
      )
      const tree = await TreeBrowserLocator.find()
      const item = await tree.findItem()

      await wait(() => {
        expect(item).to.have.attribute('aria-expanded', 'false')
      })

      await item.click()

      await wait(() => {
        expect(item).to.have.attribute('aria-expanded', 'true')
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should use aria-selected when selectionType is not none', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          selectionType="single"
        />
      )
      const tree = await TreeBrowserLocator.find()
      const item = await tree.findItem()

      expect(item).to.not.have.attribute('aria-selected')

      await item.click()

      await wait(() => {
        expect(item).to.have.attribute('aria-selected', 'true')
      })

      const nestedItem = await tree.findItem(':label(Sub Root 1)')

      await wait(() => {
        expect(nestedItem).to.have.attribute('aria-selected', 'false')
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should move focus with the up/down arrow keys', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          defaultExpanded={[2]}
        />
      )

      const tree = await TreeBrowserLocator.find(':focusable')
      const items = await tree.findAllItems()

      await tree.focus()

      await wait(() => {
        expect(tree.focused()).to.be.true()
      })

      await tree.keyDown('down')

      await wait(() => {
        expect(items[0].focused()).to.be.true()
      })

      await tree.keyDown('down')

      await wait(() => {
        expect(items[0].focused()).to.be.false()
        expect(items[1].focused()).to.be.true()
      })

      await tree.keyDown('up')

      await wait(() => {
        expect(items[0].focused()).to.be.true()
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should move focus via keyboard shortcuts', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          defaultExpanded={[2]}
        />
      )

      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      await tree.focus()

      await wait(() => {
        expect(tree.focused()).to.be.true()
      })

      await tree.keyDown('j')

      await wait(() => {
        expect(items[0].focused()).to.be.true()
      })

      await tree.keyDown('j')

      await wait(() => {
        expect(items[0].focused()).to.be.false()
        expect(items[1].focused()).to.be.true()
      })

      await tree.keyDown('k')

      await wait(() => {
        expect(items[0].focused()).to.be.true()
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should open collapsed collection with right arrow', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
        />
      )

      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      expect(items.length).to.equal(1)

      await items[0].focus()

      await wait(() => {
        expect(items[0].focused()).to.be.true()
      })

      await items[0].keyDown('right')

      expect((await tree.findAllItems()).length).to.equal(4)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should move focus down when right arrow is pressed on expanded collection', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          defaultExpanded={[2]}
        />
      )

      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      expect(items.length).to.equal(4)

      await items[0].focus()

      await wait(() => {
        expect(items[0].focused()).to.be.true()
      })

      await items[0].keyDown('right')

      await wait(() => {
        expect(items[1].focused()).to.be.true()
      })

      expect((await tree.findAllItems()).length).to.equal(4)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should collapse expanded collection when left arrow is pressed', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          defaultExpanded={[2]}
        />
      )

      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      expect(items.length).to.equal(4)

      await items[0].focus()
      await items[0].keyDown('left')

      await wait(() => {
        expect(items[0].focused()).to.be.true()
      })

      expect((await tree.findAllItems()).length).to.equal(1)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should move focus up when left arrow is pressed on collapsed collection', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          defaultExpanded={[2]}
        />
      )

      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      expect(items.length).to.equal(4)

      const firstItem = items[0]
      const secondItem = items[1]

      await secondItem.focus()
      await secondItem.keyDown('left')

      await wait(() => {
        expect(firstItem.focused()).to.be.true()
      })

      expect((await tree.findAllItems()).length).to.equal(4)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should select the node on enter or space if selectionType is not "none"', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          defaultExpanded={[2]}
          selectionType="single"
        />
      )

      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      const firstItem = items[0]
      const secondItem = items[1]

      await firstItem.focus()
      await firstItem.keyDown('enter')

      await wait(() => {
        expect(firstItem).to.have.attribute('aria-selected', 'true')
      })

      await secondItem.focus()
      await secondItem.keyDown('space')

      await wait(() => {
        expect(secondItem).to.have.attribute('aria-selected', 'true')
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not expand the node on enter or space if selectionType is not "none"', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          selectionType="single"
        />
      )

      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      expect(items.length).to.equal(1)

      const firstItem = items[0]

      await firstItem.focus()

      await firstItem.keyDown('enter')

      expect((await tree.findAllItems()).length).to.equal(1)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should move to the top node without expanding/collapsing anything when home is pressed', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          defaultExpanded={[2]}
        />
      )

      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      expect(items.length).to.equal(4)

      const firstItem = items[0]
      const lastItem = items[3]

      await lastItem.focus()
      await firstItem.keyDown('home')

      expect(firstItem.focused()).to.be.true()

      expect((await tree.findAllItems()).length).to.equal(4)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should move to the bottom node without expanding/collapsing anything when end is pressed', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeBrowser
          collections={COLLECTIONS_DATA}
          items={ITEMS_DATA}
          rootId={2}
          defaultExpanded={[2]}
        />
      )

      const tree = await TreeBrowserLocator.find()
      const items = await tree.findAllItems()

      const firstItem = items[0]
      const lastItem = items[3]

      await firstItem.focus()

      await firstItem.keyDown('end')

      expect(lastItem.focused()).to.be.true()

      expect((await tree.findAllItems()).length).to.equal(4)
    })
  })
})
