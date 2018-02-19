import styled from 'styled-components'
import Theme from '../Helpers/Theme'

export const PrimaryButton = styled.button`
  font-size: 1rem;
  margin: 5px;
  background-color: ${Theme.MainColors.GrayNurse};
  color: ${Theme.MainColors.Empress};
  padding: 16px;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`

export const SecondaryButton = styled.button`
  font-size: 1rem;
  margin: 5px;
  background-color: ${Theme.MainColors.Empress};
  color: ${Theme.MainColors.GrayNurse};
  padding: 16px;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`
