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
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { DrawerLayout } from '../index'

export default class DrawerLayoutFixture extends Component {
  static propTypes = {
    layoutWidth: PropTypes.string,
    trayWidth: PropTypes.string,
    placement: PropTypes.string,
    open: PropTypes.bool,
    onOverlayTrayChange: PropTypes.func
  }

  static defaultProps = {
    layoutWidth: '600px',
    trayWidth: '200px',
    open: false,
    placement: 'start',
    onOverlayTrayChange: () => {}
  }

  render() {
    const {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'layoutWidth' does not exist on type 'Rea... Remove this comment to see the full error message
      layoutWidth,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'trayWidth' does not exist on type 'Reado... Remove this comment to see the full error message
      trayWidth,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'open' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      open,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'placement' does not exist on type 'Reado... Remove this comment to see the full error message
      placement,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'onOverlayTrayChange' does not exist on t... Remove this comment to see the full error message
      onOverlayTrayChange
    } = this.props

    return (
      <div style={{ width: layoutWidth }}>
        <DrawerLayout
          minWidth="500px"
          onOverlayTrayChange={onOverlayTrayChange}
        >
          {/* @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call. */}
          <DrawerLayout.Tray
            open={open}
            placement={placement}
            label="Test DrawerTray"
          >
            <div style={{ width: trayWidth }}>Hello from tray</div>
          </DrawerLayout.Tray>
          <DrawerLayout.Content label="Test DrawerContent">
            {/* @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call. */}
            <div>
              Hello from content
              <button>Expand</button>
            </div>
          </DrawerLayout.Content>
        </DrawerLayout>
      </div>
    )
  }
}
