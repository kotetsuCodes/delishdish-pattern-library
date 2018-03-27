import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Theme from '../../Helpers/Theme'

export const SideNav = styled.ul`
  margin-top: 50px;
  list-style-type: 'none';
`
export const ActiveLink = 'active'

const NavItemStyled = styled(NavLink).attrs({
  ActiveLink,
})`
  background-color: ${Theme.MainColors.Pink};
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 400;
  width: 100%;
  height: 100%;
  padding-left: 10px;

  &:hover {
    background-color: ${Theme.Blue};
  }

  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }

  &.${ActiveLink} {
    background-color: ${Theme.MainColors.LighterPink};
  }
`

const NavItemWrapper = styled.li`
  height: 40px;
`

export const SidebarStyled = styled.div`
  width: ${props => props.width || '260px'};
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.fill || Theme.MainColors.Pink};
  height: 100vh;
`

export const Sidebar = props => (
  <SidebarStyled width={props.width}>
    <SideNav>{props.children}</SideNav>
  </SidebarStyled>
)

export const NavItem = ({ linkText, icon, linkTo }) => (
  <NavItemWrapper style={{ display: 'flex', alignItems: 'center' }}>
    <NavItemStyled to={linkTo} linkText={linkText}>
      {icon} <span style={{ paddingLeft: '24px' }}>{linkText}</span>
    </NavItemStyled>
  </NavItemWrapper>
)
