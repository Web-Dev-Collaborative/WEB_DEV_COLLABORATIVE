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
import { DrawerTray } from '../index'
import { DrawerTrayLocator } from '../DrawerTrayLocator'
import { EmotionThemeProvider } from '@instructure/emotion'
import { canvas } from '@instructure/ui-themes'
import { DrawerLayoutContext } from '../../index'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<DrawerTray />', async () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it(`should place the tray correctly with placement=start`, async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      <DrawerTray
        label="DrawerTray Example"
        open={true}
        placement="start"
        render={() => {
          return 'Hello from layout tray'
        }}
      />
    )
    const drawerTray = await DrawerTrayLocator.find()
    expect(drawerTray).to.exist()
    await wait(() => {
      expect(drawerTray.getComputedStyle().left).to.equal('0px')
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it(`should place the tray correctly with placement=end`, async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      <DrawerTray
        label="DrawerTray Example"
        open={true}
        placement="end"
        render={() => {
          return 'Hello from layout tray'
        }}
      />
    )
    const drawerTray = await DrawerTrayLocator.find()
    expect(drawerTray).to.exist()
    await wait(() => {
      expect(drawerTray.getComputedStyle().right).to.equal('0px')
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render tray content when open', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      <DrawerTray
        label="DrawerTray Example"
        open={true}
        render={() => {
          return 'Hello from layout tray'
        }}
      />
    )
    const drawerTray = await DrawerTrayLocator.find(
      ':label(DrawerTray Example):contains(Hello from layout tray)'
    )

    expect(drawerTray).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should not render tray content when closed', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      <DrawerTray
        label="DrawerTray Example"
        render={() => {
          return 'Hello from layout tray'
        }}
      />
    )
    const drawerTray = await DrawerTrayLocator.find({ expectEmpty: true })

    expect(drawerTray).to.not.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should apply theme overrides when open', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      <DrawerTray
        label="DrawerTray Example"
        open={true}
        themeOverride={{ zIndex: '333' }}
        render={() => {
          return 'Hello from layout tray'
        }}
      />
    )
    const drawerTray = await DrawerTrayLocator.find()

    expect(drawerTray).to.exist()
    expect(drawerTray.getComputedStyle().zIndex).to.equal('333')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should call the contentRef', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const contentRef = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      <DrawerTray
        label="DrawerTray Example"
        open={true}
        contentRef={contentRef}
        render={() => {
          return 'Hello from layout tray'
        }}
      />
    )
    const drawerTray = (await DrawerTrayLocator.find()).getDOMNode()

    expect(contentRef).to.have.been.calledWith(drawerTray)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should call onOpen ', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onOpen = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      <DrawerTray
        label="DrawerTray Example"
        open={false}
        onOpen={onOpen}
        render={() => {
          return 'Hello from layout tray'
        }}
      />
    )

    expect(onOpen).to.not.have.been.called()

    subject.setProps({
      open: true
    })

    await wait(() => {
      expect(onOpen).to.have.been.called()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should call onOpen when open initially', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onOpen = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      <DrawerTray
        label="DrawerTray Example"
        open={true}
        onOpen={onOpen}
        render={() => {
          return 'Hello from layout tray'
        }}
      />
    )

    await wait(() => {
      expect(onOpen).to.have.been.called()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should call onClose ', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onClose = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      <DrawerTray
        label="DrawerTray Example"
        open={true}
        onClose={onClose}
        render={() => {
          return 'Hello from layout tray'
        }}
      />
    )

    expect(onClose).to.not.have.been.called()

    subject.setProps({
      open: false
    })

    await wait(() => {
      expect(onClose).to.have.been.called()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('drops a shadow if the prop is set, and it is overlaying content', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onEntered = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <DrawerLayoutContext.Provider value={true}>
        {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: Element; theme: { 'ic-brand-prim... Remove this comment to see the full error message */}
        <EmotionThemeProvider theme={canvas}>
          {/* @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call. */}
          <DrawerTray
            label="DrawerTray Example"
            open={true}
            shadow={true}
            onEntered={onEntered}
            render={() => {
              return 'Hello from layout tray'
            }}
          />
        </EmotionThemeProvider>
      </DrawerLayoutContext.Provider>
    )
    const drawerTray = await DrawerTrayLocator.find()

    expect(drawerTray.getComputedStyle().boxShadow.toString()).to.not.equal(
      'none'
    )
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should apply the a11y attributes', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      <DrawerTray
        label="a tray test"
        open={true}
        render={() => {
          return 'Hello from layout tray'
        }}
      />
    )
    const drawerTray = await DrawerTrayLocator.find()
    const dialog = await drawerTray.find(':label(a tray test)')

    expect(dialog).to.exist()
    expect(dialog.getAttribute('role')).to.equal('dialog')
  })
})
