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
import { DateTime } from '../DateTime'

const { now, isValid, browserTimeZone, parse, toLocaleString } = DateTime

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('DateTime', () => {
  const timezone = 'America/Halifax' // -3
  const locale = 'en'

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('checks params', () => {
    let whoops = false
    try {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 0.
      now()
    } catch (ex) {
      whoops = true
    } finally {
      expect(whoops).to.be.true()
    }
    whoops = false
    try {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      now(locale)
    } catch (ex) {
      whoops = true
    } finally {
      expect(whoops).to.be.true()
    }
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('knows when now is', () => {
    // not much of a test, but I need it for coverage stats
    const result = now(locale, timezone)
    expect(result)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it("can figure out the browser's timezone", () => {
    const result = browserTimeZone()
    expect(result)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('validates', () => {
    expect(isValid('2018-04-15T23:30:00Z')).to.be.true()
    expect(isValid('2018-04-15T23:30')).to.be.true()
    expect(isValid('2018-04-15')).to.be.true()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('parses iso8601', () => {
    const result = parse(
      '2018-04-15T20:30:00-03:00',
      locale,
      timezone
    ).toISOString()
    expect(result).to.equal('2018-04-15T23:30:00.000Z')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('parses llll', () => {
    const result = parse(
      'Sun, Apr 15, 2018 8:30 PM',
      locale,
      timezone
    ).toISOString()
    expect(result).to.equal('2018-04-15T23:30:00.000Z')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('parses LLLL', () => {
    const result = parse(
      'Sunday, April 15, 2018 8:30 PM',
      locale,
      timezone
    ).toISOString()
    expect(result).to.equal('2018-04-15T23:30:00.000Z')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('parses lll', () => {
    const result = parse('Apr 15, 2018 8:30 PM', locale, timezone).toISOString()
    expect(result).to.equal('2018-04-15T23:30:00.000Z')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('parses LLL', () => {
    const result = parse(
      'April 15, 2018 8:30 PM',
      locale,
      timezone
    ).toISOString()
    expect(result).to.equal('2018-04-15T23:30:00.000Z')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('parses ll', () => {
    const result = parse('Apr 15, 2018', locale, timezone).toISOString()
    expect(result).to.equal('2018-04-15T03:00:00.000Z')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('parses LL', () => {
    const result = parse('April 15, 2018', locale, timezone).toISOString()
    expect(result).to.equal('2018-04-15T03:00:00.000Z')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('parses l', () => {
    const result = parse('4/15/2018', locale, timezone).toISOString()
    expect(result).to.equal('2018-04-15T03:00:00.000Z')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('parses L', () => {
    const result = parse('04/15/2018', locale, timezone).toISOString()
    expect(result).to.equal('2018-04-15T03:00:00.000Z')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('parses French L', () => {
    const result = parse('15/04/2018', 'fr', timezone).toISOString()
    expect(result).to.equal('2018-04-15T03:00:00.000Z')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('parses French LL', () => {
    const result = parse('15 Avril, 2018', 'fr', timezone).toISOString()
    expect(result).to.equal('2018-04-15T03:00:00.000Z')
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('returns localized string', () => {
    let result = toLocaleString('2018-04-15T13:00Z', 'en', 'UTC', 'LLL')
    expect(result).to.equal('April 15, 2018 1:00 PM')
    result = toLocaleString('2018-04-15T13:00Z', 'fr', 'UTC', 'LLL')
    expect(result).to.equal('15 avril 2018 13:00')
    // iso8601 in given timezone
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 4 arguments, but got 3.
    result = toLocaleString('2018-04-15T13:00Z', 'fr', 'America/Halifax') // -3
    expect(result).to.equal('2018-04-15T10:00:00.000-03:00')
  })
})
