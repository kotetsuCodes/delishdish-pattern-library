import React from 'react'
import styled from 'styled-components'
import Theme from '../../Helpers/Theme'

const SelectStyle = styled.select`
  font-size: 1.25rem;
  margin: 5px;
  display: 'block';
  padding: 16px;
  border-radius: 2px;
  border: 2px solid ${Theme.MainColors.Empress};
  width: 100%;
  transition: border 500ms;

  &:foucs {
    border: 2px solid ${Theme.MainColors.Empress};
  }

  &:hover {
    border: 2px solid ${Theme.MainColors.Empress};
  }
`

const OptionStyle = styled.option`
  padding: 16px;
`

export default class Select extends React.Component {
  render() {
    const { options, onChange } = this.props
    return (
      <div>
        <SelectStyle onChange={onChange}>
          {options.map(option => <OptionStyle value={option.value}>{option.display}</OptionStyle>)}
        </SelectStyle>
      </div>
    )
  }
}
