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

import { expect } from '@instructure/ui-test-utils'
import { parseUnit } from '../parseUnit'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('parseUnit', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('unitless', () => {
    expect(parseUnit('50')[0]).to.equal(50)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('integer', () => {
    expect(parseUnit(50)[0]).to.equal(50)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('decimal', () => {
    expect(parseUnit(47.89101)[0]).to.equal(47.89101)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('negative', () => {
    expect(parseUnit('-20px')[0]).to.equal(-20)
    expect(parseUnit('-20px')[1]).to.equal('px')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('px', () => {
    expect(parseUnit('100.0792px')[0]).to.equal(100.0792)
    expect(parseUnit('100.0792px')[1]).to.equal('px')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('rem', () => {
    expect(parseUnit('4000rem')[0]).to.equal(4000)
    expect(parseUnit('4000rem')[1]).to.equal('rem')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('em', () => {
    expect(parseUnit('300em')[0]).to.equal(300)
    expect(parseUnit('300em')[1]).to.equal('em')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('s', () => {
    expect(parseUnit('5s')[0]).to.equal(5)
    expect(parseUnit('5s')[1]).to.equal('s')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('ms', () => {
    expect(parseUnit('20ms')[0]).to.equal(20)
    expect(parseUnit('20ms')[1]).to.equal('ms')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('vh', () => {
    expect(parseUnit('327vh')[0]).to.equal(327)
    expect(parseUnit('327vh')[1]).to.equal('vh')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('vmin', () => {
    expect(parseUnit('70vmin')[0]).to.equal(70)
    expect(parseUnit('70vmin')[1]).to.equal('vmin')
  })
})
