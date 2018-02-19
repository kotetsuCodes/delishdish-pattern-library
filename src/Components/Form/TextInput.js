import styled from 'styled-components'
import Theme from '../../Helpers/Theme'

export default styled.input`
  margin: 5px;
  width: 97.5%;
  border-radius: 2px;
  border: 2px solid ${Theme.MainColors.Empress};
  outline: none;
  padding: 16px;
  font-size: 1.25rem;

  transition: border 500ms;

  &:focus {
    outline: none;
    border: 2px solid ${Theme.MainColors.Empress};
  }

  &:hover {
    outline: none;
    border: 2px solid ${Theme.MainColors.Empress};
  }
`
