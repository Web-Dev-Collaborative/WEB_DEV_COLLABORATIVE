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
import { expect, mount, wait, stub } from '@instructure/ui-test-utils'

import { RadioInput } from '../../RadioInput'
import { RadioInputGroup } from '../index'

import { RadioInputGroupLocator } from '../RadioInputGroupLocator'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<RadioInputGroup />', async () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('adds the name props to all RadioInput types', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <RadioInputGroup name="fruit" description="Select a fruit">
        <RadioInput label="Apple" value="apple" />
        <RadioInput label="Banana" value="banana" />
        <RadioInput label="Orange" value="orange" />
      </RadioInputGroup>
    )
    const group = await RadioInputGroupLocator.find()
    const inputs = await group.findAll('input[name="fruit"]')
    expect(inputs.length).to.equal(3)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('requires an `onChange` prop with a `value` prop', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
    const consoleError = stub(console, 'error')
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <RadioInputGroup name="fruit" description="Select a fruit" value="banana">
        <RadioInput label="Apple" value="apple" />
        <RadioInput label="Banana" value="banana" />
        <RadioInput label="Orange" value="orange" />
      </RadioInputGroup>
    )

    await wait(() => {
      expect(consoleError).to.have.been.calledWithMatch(
        `provided a 'value' prop without an 'onChange' handler`
      )
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls the onChange prop', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onChange = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <RadioInputGroup
        name="fruit"
        description="Select a fruit"
        onChange={onChange}
      >
        <RadioInput label="Apple" value="apple" />
        <RadioInput label="Banana" value="banana" />
        <RadioInput label="Orange" value="orange" />
      </RadioInputGroup>
    )
    const group = await RadioInputGroupLocator.find()
    const input = await group.find('input')

    await input.click()

    await wait(() => {
      expect(onChange).to.have.been.called()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('does not call the onChange prop when disabled', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onChange = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <RadioInputGroup
        disabled
        name="fruit"
        description="Select a fruit"
        onChange={onChange}
      >
        <RadioInput label="Apple" value="apple" />
        <RadioInput label="Banana" value="banana" />
        <RadioInput label="Orange" value="orange" />
      </RadioInputGroup>
    )
    const group = await RadioInputGroupLocator.find()
    const input = await group.find('input')

    await input.click(null, { clickable: false })

    await wait(() => {
      expect(onChange).to.not.have.been.called()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('does not call the onChange prop when readOnly', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
    const onChange = stub()
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <RadioInputGroup
        readOnly
        name="fruit"
        description="Select a fruit"
        onChange={onChange}
      >
        <RadioInput label="Apple" value="apple" />
        <RadioInput label="Banana" value="banana" />
        <RadioInput label="Orange" value="orange" />
      </RadioInputGroup>
    )
    const group = await RadioInputGroupLocator.find()
    const input = await group.find('input')

    await input.click()

    await wait(() => {
      expect(onChange).to.not.have.been.called()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should not update the value when the value prop is set', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <RadioInputGroup
        name="fruit"
        description="Select a fruit"
        value="orange"
        onChange={() => {}}
      >
        <RadioInput label="Apple" value="apple" />
        <RadioInput label="Banana" value="banana" />
        <RadioInput label="Orange" value="orange" />
      </RadioInputGroup>
    )
    const group = await RadioInputGroupLocator.find()

    const banana = await group.find('input:label(Banana)')

    await banana.click()

    const orange = await group.find(':label(Orange)')

    await wait(() => {
      expect(orange).to.be.checked()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('adds the correct tabindex to RadioInputs when none are checked', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <RadioInputGroup name="fruit" description="Select a fruit">
        <RadioInput label="Apple" value="apple" />
        <RadioInput label="Banana" value="banana" />
        <RadioInput label="Orange" value="orange" />
      </RadioInputGroup>
    )
    const group = await RadioInputGroupLocator.find()
    const inputs = await group.findAll('input[name="fruit"]')

    await wait(() => {
      expect(inputs[0]).to.have.attribute('tabindex', '0')
      expect(inputs[1]).to.attribute('tabindex', '-1')
      expect(inputs[2]).to.attribute('tabindex', '-1')
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('adds the correct tabindex to RadioInputs when checked', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <RadioInputGroup
        name="fruit"
        description="Select a fruit"
        defaultValue="banana"
      >
        <RadioInput label="Apple" value="apple" />
        <RadioInput label="Banana" value="banana" />
        <RadioInput label="Orange" value="orange" />
      </RadioInputGroup>
    )
    const group = await RadioInputGroupLocator.find()
    const inputs = await group.findAll('input[name="fruit"]')

    await wait(() => {
      expect(inputs[0]).to.have.attribute('tabindex', '-1')
      expect(inputs[1]).to.attribute('tabindex', '0')
      expect(inputs[2]).to.attribute('tabindex', '-1')
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('for a11y', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should meet standards', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <RadioInputGroup name="fruit" description="Select a fruit">
          <RadioInput label="Apple" value="apple" />
          <RadioInput label="Banana" value="banana" />
          <RadioInput label="Orange" value="orange" />
        </RadioInputGroup>
      )
      const group = await RadioInputGroupLocator.find()

      expect(
        await group.accessible({
          ignores: [
            'radiogroup'
          ] /* https://github.com/dequelabs/axe-core/issues/176 */
        })
      ).to.be.true()
    })
  })
})
