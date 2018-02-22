import styled from 'styled-components'
import Theme from '../Helpers/Theme'

export const DefaultButton = styled.button`
  font-size: 1rem;
  margin: 5px;
  background-color: ${Theme.Default.Fill};
  color: ${Theme.Default.Color};
  padding: 16px;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`

export const PrimaryButton = styled.button`
  font-size: 1rem;
  margin: 5px;
  background-color: ${Theme.Primary.Fill};
  color: ${Theme.Primary.Color};
  padding: 16px;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`

export const InfoButton = styled.button`
  font-size: 1rem;
  margin: 5px;
  background-color: ${Theme.Info.Fill};
  color: ${Theme.Info.Color};
  padding: 16px;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`

export const SuccessButton = styled.button`
  font-size: 1rem;
  margin: 5px;
  background-color: ${Theme.Success.Fill};
  color: ${Theme.Success.Color};
  padding: 16px;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`

export const WarningButton = styled.button`
  font-size: 1rem;
  margin: 5px;
  background-color: ${Theme.Warning.Fill};
  color: ${Theme.Warning.Color};
  padding: 16px;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`

export const DangerButton = styled.button`
  font-size: 1rem;
  margin: 5px;
  background-color: ${Theme.Danger.Fill};
  color: ${Theme.Danger.Color};
  padding: 16px;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`
