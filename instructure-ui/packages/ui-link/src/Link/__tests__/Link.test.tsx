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
import { expect, mount, stub, within, wait } from '@instructure/ui-test-utils'
import { Link } from '../index'
import { LinkLocator } from '../LinkLocator'

class TruncateText extends React.Component {
  render() {
    return <span>{this.props.children}</span>
  }
}

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Link />', async () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the children as text content', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(<Link href="https://instructure.design">Hello World</Link>)
    expect(await LinkLocator.find(':contains(Hello World)')).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render a button', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onClick = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(<Link onClick={onClick}>Hello World</Link>)
    expect(await LinkLocator.find('button[type="button"]')).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should meet a11y standards', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(<Link href="https://instructure.design">Hello World</Link>)
    const link = await LinkLocator.find()
    expect(await link.accessible()).to.be.true()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should focus with the focus helper', async () => {
    let linkRef
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Link
        href="https://instructure.design"
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        componentRef={(el) => {
          linkRef = el
        }}
      >
        Hello World
      </Link>
    )

    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    linkRef.focus()
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    expect(linkRef.focused).to.be.true()

    const link = await LinkLocator.find()
    const focusable = await link.find(':focusable')
    expect(focusable.focused()).to.be.true()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should display block when TruncateText is a child', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <Link href="example.html">
        <TruncateText>Hello World</TruncateText>
      </Link>
    )

    const link = within(subject.getDOMNode())
    expect(link.getComputedStyle().display).to.equal('block')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should display inline-flex when TruncateText is a child and there is an icon', async () => {
    const customIcon = (
      <svg height="24" width="24">
        <title>Custom icon</title>
        <circle cx="50" cy="50" r="40" />
      </svg>
    )

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const subject = await mount(
      <Link href="example.html" renderIcon={customIcon}>
        <TruncateText>Hello World</TruncateText>
      </Link>
    )

    const link = within(subject.getDOMNode())
    expect(link.getComputedStyle().display).to.equal('inline-flex')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should call the onClick prop when clicked', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onClick = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(<Link onClick={onClick}>Hello World</Link>)

    const link = await LinkLocator.find()

    await link.click()

    await wait(() => {
      expect(onClick).to.have.been.called()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should pass down an icon via the icon property', async () => {
    const customIcon = (
      <svg height="100" width="100">
        <title>Custom icon</title>
        <circle cx="50" cy="50" r="40" />
      </svg>
    )

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Link href="https://instructure.design" renderIcon={customIcon}>
        Hello World
      </Link>
    )

    const link = await LinkLocator.find()
    const icon = await link.find('svg')

    expect(icon).to.have.title('Custom icon')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('when interaction is disabled', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should apply aria-disabled when interaction is disabled', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Link href="example.html" interaction="disabled">
          Hello World
        </Link>
      )
      expect(await LinkLocator.find('a[aria-disabled]')).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should apply aria-disabled when `disabled` is set', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        <Link href="example.html" disabled>
          Hello World
        </Link>
      )
      expect(await LinkLocator.find('a[aria-disabled]')).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not be clickable when interaction is disabled', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
      const onClick = stub()
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Link onClick={onClick} interaction="disabled">
          Hello World
        </Link>
      )

      const link = await LinkLocator.find()
      await link.click(null, { clickable: false })

      expect(onClick).to.not.have.been.called()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not be clickable when `disabled` is set', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
      const onClick = stub()
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        <Link onClick={onClick} disabled>
          Hello World
        </Link>
      )

      const link = await LinkLocator.find()
      await link.click(null, { clickable: false })

      expect(onClick).to.not.have.been.called()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('with `as` prop', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('with `onClick`', async () => {
      // @ts-expect-error ts-migrate(7034) FIXME: Variable 'onClick' implicitly has type 'any' in so... Remove this comment to see the full error message
      let onClick

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'before'.
      before(() => {
        onClick = Function.prototype
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should render designated tag', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          <Link as="a" onClick={onClick}>
            Hello World
          </Link>
        )
        const componentRoot = await LinkLocator.find()
        const link = await componentRoot.findWithText('Hello World')
        expect(link.getTagName()).to.equal('a')
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should set role="button"', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          <Link as="span" onClick={onClick}>
            Hello World
          </Link>
        )
        expect(await LinkLocator.find('[role="button"]')).to.exist()
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
      describe('should not set type="button", unless it is actually a button', async () => {
        // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
        it('should not set type="button" on other things like <span>s', async () => {
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
          await mount(
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            <Link as="span" onClick={onClick}>
              Hello World
            </Link>
          )
          expect(
            await LinkLocator.find('[type="button"]', {
              expectEmpty: true
            })
          ).to.not.exist()
        })

        // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
        it('should set type="button" on <button>s', async () => {
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
          await mount(
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            <Link as="button" onClick={onClick}>
              Hello World
            </Link>
          )
          expect(await LinkLocator.find('[type="button"]')).to.exist()
        })
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should set tabIndex="0"', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          <Link as="span" onClick={onClick}>
            Hello World
          </Link>
        )
        expect(await LinkLocator.find('[tabIndex="0"]')).to.exist()
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('without `onClick`', async () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should render designated tag', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(<Link as="a">Hello World</Link>)
        const componentRoot = await LinkLocator.find()
        const link = await componentRoot.findWithText('Hello World')
        expect(link.getTagName()).to.equal('a')
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should not set role="button"', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(<Link as="span">Hello World</Link>)
        expect(
          await LinkLocator.find('[role="button"]', {
            expectEmpty: true
          })
        ).to.not.exist()
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should not set type="button"', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(<Link as="span">Hello World</Link>)
        expect(
          await LinkLocator.find('[type="button"]', {
            expectEmpty: true
          })
        ).to.not.exist()
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should not set tabIndex="0"', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(<Link as="span">Hello World</Link>)
        expect(
          await LinkLocator.find('[tabIndex="0"]', {
            expectEmpty: true
          })
        ).to.not.exist()
      })
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('when an href is provided', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render an anchor element', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<Link href="example.html">Hello World</Link>)
      expect(await LinkLocator.find('a')).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should set the href attribute', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<Link href="example.html">Hello World</Link>)
      expect(await LinkLocator.find('[href="example.html"]')).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not set role="button"', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<Link href="example.html">Hello World</Link>)
      expect(
        await LinkLocator.find('[role="button"]', {
          expectEmpty: true
        })
      ).to.not.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not set type="button"', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<Link href="example.html">Hello World</Link>)
      expect(
        await LinkLocator.find('[type="button"]', {
          expectEmpty: true
        })
      ).to.not.exist()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('when a `to` is provided', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render an anchor element', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<Link to="/example">Hello World</Link>)
      expect(await LinkLocator.find('a')).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should set the to attribute', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<Link to="/example">Hello World</Link>)
      expect(await LinkLocator.find('[to="/example"]')).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not set role="button"', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<Link to="/example">Hello World</Link>)
      expect(
        await LinkLocator.find('[role="button"]', {
          expectEmpty: true
        })
      ).to.not.exist()
    })
  })
})
