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
import { expect, mount, stub, locator } from '@instructure/ui-test-utils'

import { TreeCollection } from '../index'

// TODO: if we make a TreeBrowserItem component + locator we could use it here.
const TreeBrowserItemLocator = locator('[role="treeitem"]')

// @ts-expect-error ts-migrate(2339) FIXME: Property 'selector' does not exist on type 'typeof... Remove this comment to see the full error message
const TreeCollectionLocator = locator(TreeCollection.selector, {
  // @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'args' implicitly has an 'any[]' ty... Remove this comment to see the full error message
  findAllItems: (...args) => {
    return TreeBrowserItemLocator.findAll(...args)
  },
  // @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'args' implicitly has an 'any[]' ty... Remove this comment to see the full error message
  findItem: (...args) => {
    return TreeBrowserItemLocator.find(...args)
  }
})

const IconFolder = (
  <svg height="100" width="100">
    <title>Folder icon</title>
    <circle cx="50" cy="50" r="40" />
  </svg>
)

const IconDocument = (
  <svg height="100" width="100">
    <title>Document icon</title>
    <circle cx="50" cy="50" r="40" />
  </svg>
)

const IconUser = (
  <svg height="100" width="100">
    <title>User icon</title>
    <circle cx="50" cy="50" r="40" />
  </svg>
)

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<TreeCollection />', async () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <TreeCollection
        id={1}
        name="Coll 1"
        collections={[
          { id: 2, name: 'Coll 2', descriptor: 'Another Descriptor' }
        ]}
        items={[{ id: 1, name: 'Item 1' }]}
      />
    )
    const collection = await TreeCollectionLocator.find()
    expect(collection).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('collections', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render icons on children', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeCollection
          id={1}
          name="Coll 1"
          collections={[
            { id: 2, name: 'Coll 2', descriptor: 'Another Descriptor' }
          ]}
          items={[{ id: 1, name: 'Item 1' }]}
          collectionIcon={() => IconFolder}
          collectionIconExpanded={() => IconFolder}
          itemIcon={() => IconDocument}
          expanded={true}
        />
      )
      const collection = await TreeCollectionLocator.find()

      const folderIcons = await collection.findAll('svg:title(Folder icon)')
      expect(folderIcons.length).to.equal(2)

      const documentIcons = await collection.findAll('svg:title(Document icon)')
      expect(documentIcons.length).to.equal(1)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should support the containerRef prop', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
      const containerRef = stub()
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeCollection
          id={1}
          containerRef={containerRef}
          name="Coll 1"
          collections={[
            { id: 2, name: 'Coll 2', descriptor: 'Another Descriptor' }
          ]}
          items={[{ id: 1, name: 'Item 1' }]}
        />
      )
      const collection = await TreeCollectionLocator.find()
      const item = await collection.findItem()
      expect(containerRef).to.have.been.calledWith(item.getDOMNode())
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should pass an aria-expanded attribute to its list item', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeCollection
          id={1}
          name="Coll 1"
          collections={[
            { id: 2, name: 'Coll 2', descriptor: 'Another Descriptor' }
          ]}
          items={[{ id: 1, name: 'Item 1' }]}
        />
      )

      const collection = await TreeCollectionLocator.find()
      const item = await collection.findItem()

      expect(item.getAttribute('aria-expanded')).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should pass an aria-selected attribute to its list item', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeCollection
          id={1}
          name="Coll 1"
          collections={[
            { id: 2, name: 'Coll 2', descriptor: 'Another Descriptor' }
          ]}
          items={[{ id: 1, name: 'Item 1' }]}
          selection="collection_1"
        />
      )

      const collection = await TreeCollectionLocator.find()
      const item = await collection.findItem()

      expect(item.getAttribute('aria-selected')).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should correctly evaluate `getCollectionProps` for each item', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeCollection
          id={1}
          name="Coll 1"
          collections={[
            { id: 2, name: 'Coll 2', descriptor: 'Another Descriptor' }
          ]}
          items={[
            { id: 1, name: 'Item 1', icon: () => IconFolder },
            { id: 2, name: 'Item 2', icon: () => IconUser },
            { id: 2, name: 'Item 3' }
          ]}
          collectionIcon={IconFolder}
          getCollectionProps={({ ...props }) => {
            let icon = props.collectionIcon

            if (props.name === 'Coll 2') {
              icon = IconUser
            }

            return {
              ...props,
              collectionIcon: icon
            }
          }}
          expanded={true}
        />
      )
      const collection = await TreeCollectionLocator.find()

      const item1 = await collection.find('button:contains(Coll 2)')
      expect(item1).to.exist()
      expect(await item1.find('svg:title(User icon)')).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('onCollectionClick', async () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should return the correct collection params on click', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onCollectionClick = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          <TreeCollection
            id={1}
            name="Coll 1"
            collections={[
              { id: 2, name: 'Coll 2', descriptor: 'Another Descriptor' }
            ]}
            items={[{ id: 1, name: 'Item 1' }]}
            onCollectionClick={onCollectionClick}
          />
        )

        const collection = await TreeCollectionLocator.find()
        const item = await collection.findItem()

        await item.click()

        expect(onCollectionClick).to.have.been.calledOnce()
        expect(onCollectionClick.lastCall.lastArg).to.deep.equal({
          id: 1,
          expanded: true,
          type: 'collection'
        })
      })
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('items', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not pass an aria-expanded attribute to its button', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeCollection
          id={1}
          name="Coll 1"
          collections={[
            { id: 2, name: 'Coll 2', descriptor: 'Another Descriptor' }
          ]}
          items={[{ id: 1, name: 'Item 1' }]}
          expanded={true}
        />
      )

      const collection = await TreeCollectionLocator.find()
      const item = await collection.findItem()
      const button = await item.find('button')

      expect(button.getAttribute('aria-expanded')).to.not.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should call custom functions passed by onItemClick', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
      const onItemClick = stub()
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeCollection
          id={1}
          name="Coll 1"
          collections={[
            { id: 2, name: 'Coll 2', descriptor: 'Another Descriptor' }
          ]}
          items={[{ id: 1, name: 'Item 1' }]}
          onItemClick={onItemClick}
          expanded={true}
        />
      )

      const collection = await TreeCollectionLocator.find()
      const item = await collection.findItem(':label(Item 1)')

      await item.click()

      expect(onItemClick).to.have.been.calledOnce()
      expect(onItemClick.lastCall.lastArg).to.deep.equal({
        id: 1,
        type: 'item'
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should correctly evaluate `getItemProps` for each item', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <TreeCollection
          id={1}
          name="Coll 1"
          collections={[
            { id: 2, name: 'Coll 2', descriptor: 'Another Descriptor' }
          ]}
          items={[
            { id: 1, name: 'Item 1', icon: () => IconFolder },
            { id: 2, name: 'Item 2', icon: () => IconUser },
            { id: 2, name: 'Item 3' }
          ]}
          getItemProps={({ name, ...props }) => {
            let itemIcon = IconDocument

            if (name === 'Item 1') {
              itemIcon = IconFolder
            }

            if (name === 'Item 2') {
              itemIcon = IconUser
            }

            return {
              ...props,
              itemIcon,
              name
            }
          }}
          expanded={true}
        />
      )
      const collection = await TreeCollectionLocator.find()

      const item1 = await collection.find('button:contains(Item 1)')
      expect(await item1.find('svg:title(Folder icon)')).to.exist()

      const item2 = await collection.find('button:contains(Item 2)')
      expect(await item2.find('svg:title(User icon)')).to.exist()

      const item3 = await collection.find('button:contains(Item 3)')
      expect(await item3.find('svg:title(Document icon)')).to.exist()
    })
  })
})
