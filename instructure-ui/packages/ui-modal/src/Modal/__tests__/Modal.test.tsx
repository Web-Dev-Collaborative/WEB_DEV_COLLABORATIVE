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
import { expect, mount, stub, wait, within } from '@instructure/ui-test-utils'

import { Modal } from '../index'
import { ModalLocator } from '../ModalLocator'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Modal />', async () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render nothing and have a node with no parent when closed', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Modal label="Modal Dialog" shouldReturnFocus={false}>
        <Modal.Body>Foo Bar Baz</Modal.Body>
      </Modal>
    )
    const modal = await ModalLocator.find(':label(Modal Dialog)', {
      expectEmpty: true
    })

    expect(modal).to.not.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should apply theme overrides when open', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Modal
        open
        size="small"
        label="Modal Dialog"
        shouldReturnFocus={false}
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: Element; open: true; size: "smal... Remove this comment to see the full error message
        themeOverride={{ smallMaxWidth: '10em' }}
      >
        <Modal.Body>Foo Bar Baz</Modal.Body>
      </Modal>
    )

    const modal = await ModalLocator.find()
    const body = await modal.findBody()

    await wait(() => {
      expect(body.getComputedStyle().width).to.equal('158px') // subtract the borders
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render its own positioning context if constrained to parent', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Modal
        open
        label="Modal Dialog"
        shouldReturnFocus={false}
        constrain="parent"
      >
        <Modal.Body>Foo Bar Baz</Modal.Body>
      </Modal>
    )

    const modal = await ModalLocator.find(':label(Modal Dialog)')
    const constrain = await modal.find('[class*="-modal__constrainContext"]')

    expect(constrain).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it("should not inherit its parent's font color", async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <div style={{ color: 'rgb(255, 255, 255)' }}>
        <Modal
          open
          label="Modal Dialog"
          shouldReturnFocus={false}
          constrain="parent"
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: Element; open: true; label: stri... Remove this comment to see the full error message
          themeOverride={{ textColor: 'rgb(0, 0, 0)' }}
        >
          <Modal.Body>Foo Bar Baz</Modal.Body>
        </Modal>
      </div>
    )

    const modal = await ModalLocator.find()
    const body = await modal.findBody()

    expect(body.getComputedStyle().color).to.equal('rgb(0, 0, 0)')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should pass `as` prop to the dialog', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <Modal open label="Modal Dialog" shouldReturnFocus={false}>
        <Modal.Body>Foo Bar Baz</Modal.Body>
      </Modal>
    )
    const modal = await ModalLocator.find()
    let dialog = await modal.find('[role="dialog"]')

    expect(dialog.getTagName()).to.equal('span')

    await subject.setProps({ as: 'form' })

    dialog = await modal.find('[role="dialog"]')
    expect(dialog.getTagName()).to.equal('form')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should handle null children', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Modal open label="Modal Dialog" shouldReturnFocus={false}>
        {null}
        <Modal.Body>Foo Bar Baz</Modal.Body>
        {null}
      </Modal>
    )
    const modal = await ModalLocator.find()

    expect(modal).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should apply the aria attributes', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Modal open label="Modal Dialog" shouldReturnFocus={false}>
        <Modal.Body>Foo Bar Baz</Modal.Body>
      </Modal>
    )
    const modal = await ModalLocator.find()
    const dialog = await modal.find(':label(Modal Dialog)')

    expect(dialog.getAttribute('role')).to.equal('dialog')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should use transition', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onEnter = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onEntering = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onEntered = stub()

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Modal
        open
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
        transition="fade"
        label="Modal Dialog"
        shouldReturnFocus={false}
      >
        <Modal.Body>Foo Bar Baz</Modal.Body>
      </Modal>
    )

    await wait(() => {
      expect(onEnter).to.have.been.calledOnce()
      expect(onEntering).to.have.been.calledOnce()
      expect(onEntered).to.have.been.calledOnce()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should support onOpen prop', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onOpen = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Modal
        open
        onOpen={onOpen}
        label="Modal Dialog"
        shouldReturnFocus={false}
      >
        <Modal.Body>Foo Bar Baz</Modal.Body>
      </Modal>
    )

    await wait(() => {
      expect(onOpen).to.have.been.calledOnce()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should support onClose prop', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onClose = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <Modal
        open
        onClose={onClose}
        label="Modal Dialog"
        shouldReturnFocus={false}
      >
        <Modal.Body>Foo Bar Baz</Modal.Body>
      </Modal>
    )

    await subject.setProps({ open: false })

    await wait(() => {
      expect(onClose).to.have.been.calledOnce()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should dismiss when overlay clicked by default', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onDismiss = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Modal
        open
        onDismiss={onDismiss}
        label="Modal Dialog"
        shouldReturnFocus={false}
      >
        <Modal.Body>
          Foo Bar Baz <button>click me</button>
        </Modal.Body>
      </Modal>
    )

    const modal = await ModalLocator.find()

    await wait(() => {
      expect(modal.containsFocus()).to.be.true()
    })

    await within(modal.getOwnerDocument().documentElement).click()

    await wait(() => {
      expect(onDismiss).to.have.been.calledOnce()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should NOT dismiss when overlay clicked with shouldCloseOnDocumentClick=false', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onDismiss = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Modal
        open
        onDismiss={onDismiss}
        label="Modal Dialog"
        shouldReturnFocus={false}
        shouldCloseOnDocumentClick={false}
      >
        <Modal.Body>
          Foo Bar Baz <button>click me</button>
        </Modal.Body>
      </Modal>
    )

    const modal = await ModalLocator.find()

    await wait(() => {
      expect(modal.containsFocus()).to.be.true()
    })

    await within(modal.getOwnerDocument().documentElement).click()

    await wait(() => {
      expect(onDismiss).to.not.have.been.called()
    })

    expect(modal).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render children', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Modal open label="Modal Dialog" shouldReturnFocus={false}>
        <Modal.Body>
          <button>Cancel</button>
        </Modal.Body>
      </Modal>
    )
    const modal = await ModalLocator.find(':label(Modal Dialog)')
    const cancelButton = await modal.find(':label(Cancel)')

    expect(cancelButton).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('children validation', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should pass validation when children are valid', async () => {
      await expect(
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        mount(
          <Modal open label="Modal Dialog" shouldReturnFocus={false}>
            <Modal.Header>Hello World</Modal.Header>
            <Modal.Body>Foo Bar Baz</Modal.Body>
            <Modal.Footer>
              <button>Cancel</button>
            </Modal.Footer>
          </Modal>
        )
      ).to.not.be.rejected()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not pass validation when children are invalid', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
      const consoleError = stub(console, 'error')
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Modal open label="Modal Dialog" shouldReturnFocus={false}>
          <Modal.Body>Foo Bar Baz</Modal.Body>
          <Modal.Footer>
            <button>Cancel</button>
          </Modal.Footer>
          <Modal.Header>Hello World</Modal.Header>
        </Modal>
      )
      expect(consoleError).to.have.been.calledWithMatch(
        'Expected children of Modal in one of the following formats:'
      )
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should pass inverse variant to children when set', async () => {
      let headerRef
      let bodyRef
      let footerRef

      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Modal
          open
          label="Dark Modal"
          shouldReturnFocus={false}
          variant="inverse"
        >
          <Modal.Header ref={(el) => (headerRef = el)}>
            Hello Dark World
          </Modal.Header>
          <Modal.Body ref={(el) => (bodyRef = el)}>Foo Bar Baz</Modal.Body>
          <Modal.Footer ref={(el) => (footerRef = el)}>
            <button>Cancel</button>
          </Modal.Footer>
        </Modal>
      )

      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      expect(headerRef.props.variant).to.equal('inverse')
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      expect(bodyRef.props.variant).to.equal('inverse')
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      expect(footerRef.props.variant).to.equal('inverse')
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should pass overflow to Modal.Body', async () => {
      let bodyRef

      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Modal open label="Modal" shouldReturnFocus={false} overflow="fit">
          <Modal.Body ref={(el) => (bodyRef = el)}>Foo Bar Baz</Modal.Body>
        </Modal>
      )
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      expect(bodyRef.props.overflow).to.equal('fit')
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('managed focus', async () => {
    class ModalExample extends React.Component {
      static propTypes = {
        ...Modal.propTypes
      }

      render() {
        return (
          <div>
            <input type="text" />
            {/* @ts-expect-error ts-migrate(2741) FIXME: Property 'label' is missing in type '{ children: E... Remove this comment to see the full error message */}
            <Modal {...this.props}>
              <Modal.Header>
                <button>Close</button>
              </Modal.Header>
              <Modal.Body>
                <input type="text" id="input-one" />
                <input type="text" id="input-two" />
              </Modal.Body>
              <Modal.Footer>
                <button>Cancel</button>
              </Modal.Footer>
            </Modal>
          </div>
        )
      }
    }

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should focus closeButton by default', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<ModalExample open label="A Modal" />)

      const modal = await ModalLocator.find(':label(A Modal)')
      const closeButton = await modal.find(':label(Close)')

      await wait(() => {
        expect(closeButton.focused()).to.be.true()
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should take a prop for finding default focus', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <ModalExample
          open
          label="A Modal"
          defaultFocusElement={() => {
            return document.getElementById('input-one')
          }}
        />
      )

      const modal = await ModalLocator.find(':label(A Modal)')
      const input = await modal.find('#input-one')

      await wait(() => {
        expect(input.focused()).to.be.true()
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should call onDismiss prop when Esc key pressed by default', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
      const onDismiss = stub()
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <ModalExample
          open
          onDismiss={onDismiss}
          label="A Modal"
          defaultFocusElement={() => {
            return document.getElementById('input-one')
          }}
        />
      )

      const modal = await ModalLocator.find()

      await wait(() => {
        expect(modal.containsFocus()).to.be.true()
      })

      await within(modal.getOwnerDocument().documentElement).keyUp(
        'escape',
        null,
        { focusable: false }
      )

      await wait(() => {
        expect(onDismiss).to.have.been.called()
      })
    })
  })
})
