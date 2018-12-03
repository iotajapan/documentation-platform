import React from 'react'
import styled, { css } from 'styled-components'
import logo from './../../assets/Logo.svg'

class FloatingMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<ul class="floating-menu" style={this.props.styles}>
  <li class="floating-menu__item">New to IOTA?</li>
  <li class="floating-menu__item floating-menu__item--selected">IOTA Basic</li>
  <li class="floating-menu__item">Tangle Concepts</li>
  <li class="floating-menu__item">IRI</li>
  <li class="floating-menu__item">Hub</li>
  <li class="floating-menu__item">Trinity</li>
  <li class="floating-menu__item">Client Libraries</li>
</ul>)
  }
}
 export default FloatingMenu
