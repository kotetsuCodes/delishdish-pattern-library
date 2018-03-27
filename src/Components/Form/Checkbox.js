import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

function getFontSize(size) {
  switch (size) {
    case 'small':
      return '0.8rem'
    case 'medium':
      return '1rem'
    case 'large':
      return '1.2rem'
    default:
      return ''
  }
}

const CheckboxStyle = styled.div`
  padding-left: 10px;
  margin: 5px 0 5px 0;
`

const CheckboxLabelStyle = styled.label`
  padding-left: 10px;
  font-size: ${props => getFontSize(props.size)};
`

export default class extends React.Component {
  state = {
    isChecked: false,
  }

  handleCheckToggle = (e) => {
    this.setState({ isChecked: !this.state.isChecked })
  }

  render() {
    const { id, labelDisplay, size } = this.props

    return (
      <div
        onClick={this.handleCheckToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {this.state.isChecked ? (
          <Icon size={size} className="fas fa-check-square" />
        ) : (
          <Icon size={size} className="fas fa-square" />
        )}
        <CheckboxLabelStyle size={size} htmlFor={id}>
          {labelDisplay}
        </CheckboxLabelStyle>
      </div>
    )
  }
}
