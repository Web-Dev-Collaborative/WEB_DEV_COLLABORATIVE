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
  stub,
  wait,
  generateA11yTests
} from '@instructure/ui-test-utils'

import { Select } from '../index'
import { SelectLocator } from '../SelectLocator'
import SelectExamples from '../__examples__/Select.examples'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Select />', async () => {
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'spy' implicitly has an 'any' type.
  const lastCall = (spy) => spy.lastCall.args
  const defaultOptions = ['foo', 'bar', 'baz']
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'highlighted' implicitly has an 'any' ty... Remove this comment to see the full error message
  const getOptions = (highlighted, selected, disabled) =>
    defaultOptions.map((opt) => (
      <Select.Option
        id={opt}
        key={opt}
        isHighlighted={opt === highlighted}
        isSelected={opt === selected}
        isDisabled={opt === disabled}
      >
        {opt}
      </Select.Option>
    ))

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render an input and a list', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Select renderLabel="Choose an option" isShowingOptions>
        {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
        {getOptions()}
      </Select>
    )
    const select = await SelectLocator.find()
    const input = await select.findInput()
    const list = await select.findOptionsList()

    expect(input).to.exist()
    expect(list).to.exist()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render groups', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Select renderLabel="Choose an option" isShowingOptions>
        <Select.Option id="0">ungrouped option one</Select.Option>
        <Select.Group renderLabel="Group one">
          <Select.Option id="1">grouped option one</Select.Option>
        </Select.Group>
        <Select.Group renderLabel="Group two">
          <Select.Option id="2">grouped option two</Select.Option>
        </Select.Group>
        <Select.Option id="3">ungrouped option two</Select.Option>
      </Select>
    )
    const select = await SelectLocator.find()
    const list = await select.findOptionsList()
    const listbox = await list.find('ul[role="listbox"]')
    const groups = await listbox.findAll('ul[role="group"]')
    const label = await listbox.find(':textContent("Group one")')

    expect(label.getAttribute('role')).to.equal('presentation')
    expect(groups[0].getAttribute('aria-labelledby')).to.equal(
      label.getAttribute('id')
    )
    expect(groups).to.have.length(2)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should ignore invalid children', async () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
    const consoleError = stub(console, 'error')
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Select renderLabel="Choose an option" isShowingOptions>
        <Select.Option id="0">valid</Select.Option>
        <div>invalid</div>
      </Select>
    )
    const select = await SelectLocator.find()
    const list = await select.findOptionsList()
    const div = await list.find(':textContent("invalid")', {
      expectEmpty: true
    })

    expect(div).to.not.exist()
    await wait(() => {
      expect(consoleError).to.have.been.calledWithMatch(
        'Expected one of Group, Option'
      )
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should provide a focus method', async () => {
    let selectRef
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Select
        renderLabel="Choose an option"
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        componentRef={(el) => {
          selectRef = el
        }}
      >
        {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
        {getOptions()}
      </Select>
    )
    const select = await SelectLocator.find()
    const input = await select.findInput()

    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    selectRef.focus()
    await wait(() => {
      expect(input.focused()).to.be.true()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should provide a focused getter', async () => {
    // @ts-expect-error ts-migrate(7034) FIXME: Variable 'selectRef' implicitly has type 'any' in ... Remove this comment to see the full error message
    let selectRef
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    await mount(
      <Select
        renderLabel="Choose an option"
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        componentRef={(el) => {
          selectRef = el
        }}
      >
        {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
        {getOptions()}
      </Select>
    )

    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    expect(selectRef.focused).to.be.false()

    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    selectRef.focus()
    await wait(() => {
      // @ts-expect-error ts-migrate(7005) FIXME: Variable 'selectRef' implicitly has an 'any' type.
      expect(selectRef.focused).to.be.true()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('input', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render with a generated id by default', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<Select renderLabel="Choose an option" />)
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('id')).to.startWith('Select')
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render with a custom id if given', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<Select renderLabel="Choose an option" id="customSelect" />)
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('id')).to.equal('customSelect')
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render readonly when interaction="enabled" with no onInputChange', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<Select renderLabel="Choose an option" />)
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('readonly')).to.exist()
      expect(input.getAttribute('disabled')).to.not.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not render readonly when interaction="enabled" with onInputChange', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select renderLabel="Choose an option" onInputChange={() => {}} />
      )
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('readonly')).to.not.exist()
      expect(input.getAttribute('disabled')).to.not.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render readonly when interaction="readonly"', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select
          renderLabel="Choose an option"
          interaction="readonly"
          onInputChange={() => {}}
        />
      )
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('readonly')).to.exist()
      expect(input.getAttribute('disabled')).to.not.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render disabled when interaction="disabled"', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select
          renderLabel="Choose an option"
          interaction="disabled"
          onInputChange={() => {}}
        />
      )
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('disabled')).to.exist()
      expect(input.getAttribute('readonly')).to.not.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not render readonly when disabled', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select renderLabel="Choose an option" interaction="disabled" />
      )
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('disabled')).to.exist()
      expect(input.getAttribute('readonly')).to.not.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render required when isRequired={true}', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<Select renderLabel="Choose an option" isRequired />)
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('required')).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should render with inputValue', async () => {
      const val = 'hello world'
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(<Select renderLabel="Choose an option" inputValue={val} />)
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('value')).to.equal(val)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should set aria-activedescendant based on the highlighted option', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select renderLabel="Choose an option" isShowingOptions>
          {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 1. */}
          {getOptions(defaultOptions[1])}
        </Select>
      )
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('aria-activedescendant')).to.equal(
        defaultOptions[1]
      )
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should not set aria-activedescendant when not showing options', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select renderLabel="Choose an option">
          {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 1. */}
          {getOptions(defaultOptions[1])}
        </Select>
      )
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('aria-activedescendant')).to.not.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should set input role to "button" without onInputChange', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select renderLabel="Choose an option">
          {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 1. */}
          {getOptions(defaultOptions[1])}
        </Select>
      )
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('role')).to.equal('button')
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should set input role to "combobox" with onInputChange', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select renderLabel="Choose an option" onInputChange={() => {}}>
          {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 1. */}
          {getOptions(defaultOptions[1])}
        </Select>
      )
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('role')).to.equal('combobox')
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should allow assistive text', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select renderLabel="Choose an option" assistiveText="hello world">
          {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
          {getOptions()}
        </Select>
      )
      const select = await SelectLocator.find()
      const input = await select.findInput()
      const text = await select.find(':textContent("hello world")')

      expect(input.getAttribute('aria-describedby')).to.equal(
        text.getAttribute('id')
      )
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should allow custom props to pass through', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select renderLabel="Choose an option" data-custom-attr="true">
          {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
          {getOptions()}
        </Select>
      )
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('data-custom-attr')).to.equal('true')
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should allow override of autoComplete prop', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const subject = await mount(
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        <Select renderLabel="Choose an option">{getOptions()}</Select>
      )
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(input.getAttribute('autocomplete')).to.equal('off')

      await subject.setProps({ autoComplete: 'false' })
      expect(input.getAttribute('autocomplete')).to.equal('false')
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should provide a ref to the input element', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
      const inputRef = stub()
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select renderLabel="Choose an option" inputRef={inputRef}>
          {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
          {getOptions()}
        </Select>
      )
      const select = await SelectLocator.find()
      const input = await select.findInput()

      expect(inputRef).to.have.been.calledWith(input.getDOMNode())
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('list', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should set aria-selected on options with isSelected={true}', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select renderLabel="Choose an option" isShowingOptions>
          {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2. */}
          {getOptions(null, defaultOptions[1])}
        </Select>
      )
      const select = await SelectLocator.find()
      const list = await select.findOptionsList()
      const options = await list.findAll('[role="option"]')

      expect(options[1].getAttribute('aria-selected')).to.equal('true')
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should set aria-disabled on options when isDisabled={true}', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select renderLabel="Choose an option" isShowingOptions>
          {getOptions(null, null, defaultOptions[2])}
        </Select>
      )
      const select = await SelectLocator.find()
      const list = await select.findOptionsList()
      const options = await list.findAll('[role="option"]')

      expect(options[0].getAttribute('aria-disabled')).to.not.exist()
      expect(options[2].getAttribute('aria-disabled')).to.equal('true')
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should set list element role to "listbox"', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select renderLabel="Choose an option" isShowingOptions>
          {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
          {getOptions()}
        </Select>
      )
      const select = await SelectLocator.find()
      const list = await select.findOptionsList()
      const listbox = await list.find('ul[role="listbox"]')

      expect(listbox).to.exist()
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should provide a ref to the list element', async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
      const listRef = stub()
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      await mount(
        <Select
          renderLabel="Choose an option"
          isShowingOptions
          listRef={listRef}
        >
          {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
          {getOptions()}
        </Select>
      )
      const select = await SelectLocator.find()
      const list = await select.findOptionsList()
      const listbox = await list.find('ul[role="listbox"]')

      expect(listRef).to.have.been.calledWith(listbox.getDOMNode())
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('with callbacks', async () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('should fire onRequestShowOptions', async () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when root is clicked', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestShowOptions = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const subject = await mount(
          <Select
            renderLabel="Choose an option"
            onRequestShowOptions={onRequestShowOptions}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
            {getOptions()}
          </Select>
        )
        const select = await SelectLocator.find()
        const label = await select.find('label')
        const icon = await select.find('[name="IconArrowOpenDown"]')

        await label.click()
        expect(onRequestShowOptions).to.have.been.calledOnce()

        await icon.click()
        expect(onRequestShowOptions).to.have.been.calledTwice()

        await subject.setProps({ isShowingOptions: true })

        await label.click()
        expect(onRequestShowOptions).to.have.been.calledTwice()
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when input is clicked', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestShowOptions = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const subject = await mount(
          <Select
            renderLabel="Choose an option"
            onRequestShowOptions={onRequestShowOptions}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
            {getOptions()}
          </Select>
        )
        const select = await SelectLocator.find()
        const input = await select.findInput()

        await input.click()
        expect(onRequestShowOptions).to.have.been.calledOnce()

        await subject.setProps({ isShowingOptions: true })

        await input.click()
        expect(onRequestShowOptions).to.have.been.calledOnce()
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when up/down arrows are pressed', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestShowOptions = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          <Select
            renderLabel="Choose an option"
            onRequestShowOptions={onRequestShowOptions}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
            {getOptions()}
          </Select>
        )
        const select = await SelectLocator.find()
        const input = await select.findInput()

        await input.keyDown('down')
        expect(onRequestShowOptions).to.have.been.calledOnce()

        await input.keyDown('up')
        expect(onRequestShowOptions).to.have.been.calledTwice()
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when space is pressed', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestShowOptions = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const subject = await mount(
          <Select
            renderLabel="Choose an option"
            onRequestShowOptions={onRequestShowOptions}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
            {getOptions()}
          </Select>
        )
        const select = await SelectLocator.find()
        const input = await select.findInput()

        await input.keyDown('space')
        await subject.setProps({ isShowingOptions: true })
        await input.keyDown('space')

        expect(onRequestShowOptions).to.have.been.calledOnce()
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('should fire onRequestHideOptions', async () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when root is clicked', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestHideOptions = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const subject = await mount(
          <Select
            renderLabel="Choose an option"
            isShowingOptions
            onRequestHideOptions={onRequestHideOptions}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
            {getOptions()}
          </Select>
        )
        const select = await SelectLocator.find()
        const label = await select.find('label')
        const icon = await select.find('[name="IconArrowOpenUp"]')

        await label.click()
        expect(onRequestHideOptions).to.have.been.calledOnce()

        await icon.click()
        expect(onRequestHideOptions).to.have.been.calledTwice()

        await subject.setProps({ isShowingOptions: false })

        await label.click()
        expect(onRequestHideOptions).to.have.been.calledTwice()
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when input is clicked', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestHideOptions = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const subject = await mount(
          <Select
            renderLabel="Choose an option"
            isShowingOptions
            onRequestHideOptions={onRequestHideOptions}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
            {getOptions()}
          </Select>
        )
        const select = await SelectLocator.find()
        const input = await select.findInput()

        await input.click()
        expect(onRequestHideOptions).to.have.been.calledOnce()

        await subject.setProps({ isShowingOptions: false })

        await input.click()
        expect(onRequestHideOptions).to.have.been.calledOnce()
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when escape is pressed', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestHideOptions = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          <Select
            renderLabel="Choose an option"
            isShowingOptions
            onRequestHideOptions={onRequestHideOptions}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
            {getOptions()}
          </Select>
        )
        const select = await SelectLocator.find()
        const input = await select.findInput()

        await input.keyUp('esc')
        expect(onRequestHideOptions).to.have.been.calledOnce()
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('should fire onRequestHighlightOption', async () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when options are hovered', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestHighlightOption = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          <Select
            renderLabel="Choose an option"
            isShowingOptions
            onRequestHighlightOption={onRequestHighlightOption}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
            {getOptions()}
          </Select>
        )
        const select = await SelectLocator.find()
        const list = await select.findOptionsList()
        const options = await list.findAll('[role="option"]')

        await options[0].mouseOver()
        expect(lastCall(onRequestHighlightOption)[1].id).to.equal(
          defaultOptions[0]
        )

        await options[1].mouseOver()
        expect(lastCall(onRequestHighlightOption)[1].id).to.equal(
          defaultOptions[1]
        )
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when up/down arrows are pressed', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestShowOptions = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestHighlightOption = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const subject = await mount(
          <Select
            renderLabel="Choose an option"
            onRequestShowOptions={onRequestShowOptions}
            onRequestHighlightOption={onRequestHighlightOption}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
            {getOptions()}
          </Select>
        )
        const select = await SelectLocator.find()
        const input = await select.findInput()

        await input.keyDown('down')
        expect(onRequestShowOptions).to.have.been.calledOnce()
        expect(onRequestHighlightOption).to.not.have.been.called()

        await subject.setProps({ isShowingOptions: true })

        await input.keyDown('down')
        expect(lastCall(onRequestHighlightOption)[1].id).to.equal(
          defaultOptions[0]
        )

        await subject.setProps({
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 1.
          children: getOptions(defaultOptions[0])
        })

        await input.keyDown('down')
        expect(lastCall(onRequestHighlightOption)[1].id).to.equal(
          defaultOptions[1]
        )

        await subject.setProps({
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 1.
          children: getOptions(defaultOptions[1])
        })

        await input.keyDown('up')
        expect(lastCall(onRequestHighlightOption)[1].id).to.equal(
          defaultOptions[0]
        )

        // should skip disabled option...
        await subject.setProps({
          children: getOptions(defaultOptions[0], null, defaultOptions[1])
        })

        await input.keyDown('down')
        expect(lastCall(onRequestHighlightOption)[1].id).to.equal(
          defaultOptions[2]
        )

        await subject.setProps({
          children: getOptions(defaultOptions[2], null, defaultOptions[1])
        })

        await input.keyDown('up')
        expect(lastCall(onRequestHighlightOption)[1].id).to.equal(
          defaultOptions[0]
        )
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when home/end is pressed', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestHighlightOption = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const subject = await mount(
          <Select
            renderLabel="Choose an option"
            isShowingOptions
            onRequestHighlightOption={onRequestHighlightOption}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 1. */}
            {getOptions(defaultOptions[1])}
          </Select>
        )
        const select = await SelectLocator.find()
        const input = await select.findInput()

        await input.keyDown('home')
        expect(lastCall(onRequestHighlightOption)[1].id).to.equal(
          defaultOptions[0]
        )

        await input.keyDown('end')
        expect(lastCall(onRequestHighlightOption)[1].id).to.equal(
          defaultOptions[2]
        )

        // with a disabled option...
        await subject.setProps({
          children: getOptions(null, null, defaultOptions[2])
        })

        await input.keyDown('end')
        expect(lastCall(onRequestHighlightOption)[1].id).to.equal(
          defaultOptions[1]
        )
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when onRequestShowOptions is called with selected options', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestHighlightOption = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          <Select
            renderLabel="Choose an option"
            onRequestHighlightOption={onRequestHighlightOption}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2. */}
            {getOptions(null, defaultOptions[1])}
          </Select>
        )
        const select = await SelectLocator.find()
        const input = await select.findInput()

        await input.click()
        expect(lastCall(onRequestHighlightOption)[1].id).to.equal(
          defaultOptions[1]
        )
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('should fire onRequestSelectOption', async () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when enter is pressed', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestSelectOption = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          <Select
            renderLabel="Choose an option"
            isShowingOptions
            onRequestSelectOption={onRequestSelectOption}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 1. */}
            {getOptions(defaultOptions[1])}
          </Select>
        )
        const select = await SelectLocator.find()
        const input = await select.findInput()

        await input.keyDown('enter')
        expect(lastCall(onRequestSelectOption)[1].id).to.equal(
          defaultOptions[1]
        )
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('when options are clicked', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestSelectOption = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          <Select
            renderLabel="Choose an option"
            isShowingOptions
            onRequestSelectOption={onRequestSelectOption}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
            {getOptions()}
          </Select>
        )
        const select = await SelectLocator.find()
        const list = await select.findOptionsList()
        const options = await list.findAll('[role="option"]')

        await options[1].click()
        expect(lastCall(onRequestSelectOption)[1].id).to.equal(
          defaultOptions[1]
        )
      })
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('input callbacks', async () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should fire onInputChange when input is typed in', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onInputChange = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          <Select renderLabel="Choose an option" onInputChange={onInputChange}>
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
            {getOptions()}
          </Select>
        )
        const select = await SelectLocator.find()
        const input = await select.findInput()

        await input.typeIn('h')
        expect(onInputChange).to.have.been.called()
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should fire onFocus when input gains focus', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onFocus = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          <Select renderLabel="Choose an option" onFocus={onFocus}>
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0. */}
            {getOptions()}
          </Select>
        )
        const select = await SelectLocator.find()
        const input = await select.findInput()

        await input.focus()

        await wait(() => {
          expect(onFocus).to.have.been.called()
        })
      })

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should fire onKeyDown while preserving default behavior', async () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onRequestHighlightOption = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 0.
        const onKeyDown = stub()
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        await mount(
          <Select
            isShowingOptions
            renderLabel="Choose an option"
            onRequestHighlightOption={onRequestHighlightOption}
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            onKeyDown={onKeyDown}
          >
            {/* @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 1. */}
            {getOptions(defaultOptions[0])}
          </Select>
        )
        const select = await SelectLocator.find()
        const input = await select.findInput()

        await input.keyDown('down')
        await input.keyDown('a')

        expect(onRequestHighlightOption).to.have.been.calledOnce()
        expect(onKeyDown).to.have.been.calledTwice()
      })
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('with generated examples', async () => {
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ sectionProp: string; maxExampl... Remove this comment to see the full error message
    generateA11yTests(SelectExamples)
  })
})
