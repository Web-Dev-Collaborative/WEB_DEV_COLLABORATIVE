import styled from 'styled-components'

const ExternalLinks = styled('ul')`
  display: inline-block;
  float: right;
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    padding: 0 16px 0 0;
  }
  text-align: right;
  li {
    display: inline-block;
    width: auto;
    padding: 16px;
    cursor: pointer;

    svg {
      fill: white;
      width: 34px;
      margin: -11px;
      @media (min-width: 768px) {
        margin: -7px;
        width: 42px;
      }
    }

    a {
      color: white;
      text-decoration: none;
      display: block;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const NavMenu = styled('ul')`
  z-index: 3;
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;

  list-style-type: none;
  margin: 0;
  padding: 0 16px;
  text-align: right;
  overflow: hidden;
  li {
    padding: 4px 0;
    float: left;
    width: 100%;
    font-size: 24px;

    a {
      color: white;
      text-decoration: none;
      display: block;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 768px) {
    li {
      display: inline-block;
      width: auto;
      padding: 16px;
    }
    clear: none;
    float: right;
    max-height: none;
    padding: 0;
  }
`

const MenuIcon = styled('label')`
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 24px 20px;
  position: relative;
  user-select: none;
  @media (min-width: 768px) {
    display: none;
  }
`

const Navicon = styled('span')`
  background: #fff;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;

  &:before,
  &:after {
    background: #fff;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  &:before {
    top: 5px;
  }

  &:after {
    top: -5px;
  }
`

const MenuButton = styled('input')`
  display: none;
  &:checked ~ ${NavMenu} {
    max-height: 155px;
  }
  &:checked ~ ${MenuIcon} ${Navicon} {
    background: transparent;
  }
  &:checked ~ ${MenuIcon} ${Navicon}:before {
    transform: rotate(-45deg);
    top: 0;
  }
  &:checked ~ ${MenuIcon} ${Navicon}:after {
    transform: rotate(45deg);
    top: 0;
  }
`

export { NavMenu, MenuButton, MenuIcon, Navicon, ExternalLinks }
