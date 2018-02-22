import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import styled from 'styled-components'
import { Card, CardTitle, CardContent } from '../Components/Card'
import Theme from '../Helpers/Theme'
import {
  DefaultButton,
  PrimaryButton,
  InfoButton,
  SuccessButton,
  WarningButton,
  DangerButton,
} from '../Components/Button'
import {
  ExtraSmallHeading,
  SmallHeading,
  MediumHeading,
  LargeHeading,
  ExtraLargeHeading,
} from '../Components/Heading'
import TextInput from '../Components/Form/TextInput'
import Select from '../Components/Form/Select'
// import Toggle from '../Components/Form/Toggle'
import Checkbox from '../Components/Form/Checkbox'

const ColorSwatch = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  padding: 110px 32px 110px 32px;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkboxChecked: false,
    }
  }

  handleClick = (e) => {
    console.log('handleClick was called')
    this.setState({ checkboxChecked: !this.state.checkboxChecked })
    alert(this.state.checkboxChecked)
  }

  render() {
    const selectOptions = [
      { display: 'This is an option!', value: 'This is an option' },
      { display: 'This is also an option!', value: 'This is also an option' },
    ]

    const isChecked = this.state.checkboxChecked

    return (
      <Grid columns={12}>
        <Cell left={3} width={8} top={1}>
          <Card
            backgroundColor={Theme.Cards.White.Fill}
            textColor={Theme.Cards.White.Color}
            borderRadius={Theme.Cards.BorderRadius}
          >
            <CardTitle />
            <CardContent>
              <MediumHeading>Welcome to the main component, holmes!</MediumHeading>
            </CardContent>
          </Card>
        </Cell>

        <Cell left={3} width={8} top={2}>
          <Card
            backgroundColor={Theme.Cards.White.Fill}
            textColor="#FFFFFF"
            borderRadius={Theme.Cards.BorderRadius}
          >
            <CardTitle textColor={Theme.Cards.White.Color}>Default Theme</CardTitle>
            <CardContent>
              <Grid columns="repeat(4,minmax(120px,1fr))">
                <Cell center middle>
                  <ColorSwatch backgroundColor={Theme.MainColors.DarkBlue}>Background</ColorSwatch>
                </Cell>
                <Cell center middle>
                  <ColorSwatch backgroundColor={Theme.MainColors.LightBlue}>Light Blue</ColorSwatch>
                </Cell>
                <Cell center middle>
                  <ColorSwatch backgroundColor={Theme.MainColors.Pink}>Pink</ColorSwatch>
                </Cell>
                <Cell center middle>
                  <ColorSwatch backgroundColor={Theme.MainColors.White}>White</ColorSwatch>
                </Cell>
                <Cell center middle>
                  <ColorSwatch backgroundColor={Theme.MainColors.Yellow}>Yellow</ColorSwatch>
                </Cell>
              </Grid>
            </CardContent>
          </Card>
        </Cell>

        <Cell left={3} width={8} top={3}>
          <Card
            backgroundColor={Theme.Cards.Pink.Fill}
            textColor={Theme.Cards.Pink.Color}
            borderRadius={Theme.Cards.BorderRadius}
          >
            <CardTitle>Headings</CardTitle>

            <CardContent>
              <ExtraSmallHeading>Extra Small heading!</ExtraSmallHeading>
              <SmallHeading>Small heading!</SmallHeading>
              <MediumHeading>Medium heading!</MediumHeading>
              <LargeHeading>Large heading!</LargeHeading>
              <ExtraLargeHeading>Extra Large heading!</ExtraLargeHeading>
            </CardContent>
          </Card>
        </Cell>

        <Cell left={3} width={8} top={4}>
          <Card
            backgroundColor={Theme.Cards.White.Fill}
            textColor={Theme.Cards.White.Color}
            borderRadius={Theme.Cards.BorderRadius}
          >
            <CardTitle textColor={Theme.Cards.White.Color}>Buttons ahoy!</CardTitle>
            <CardContent>
              <DefaultButton>Default</DefaultButton>
              <PrimaryButton>Primary</PrimaryButton>
              <InfoButton>Info</InfoButton>
              <SuccessButton>Success</SuccessButton>
              <WarningButton>Warning</WarningButton>
              <DangerButton>Danger</DangerButton>
            </CardContent>
          </Card>
        </Cell>

        <Cell left={3} width={8} top={5}>
          <Card
            backgroundColor={Theme.Cards.LightBlue.Fill}
            textColor={Theme.Cards.LightBlue.Color}
            borderRadius={Theme.Cards.BorderRadius}
          >
            <CardTitle>Here be inputs!</CardTitle>

            <CardContent>
              <TextInput placeholder="Regular text input" />
              <Select options={selectOptions} />
              {/* <Toggle /> */}
              <div onClick={e => this.handleClick(e)}>
                <Checkbox size="small" labelDisplay="I'm a small checkbox!" isChecked={isChecked} />
                <Checkbox
                  size="medium"
                  labelDisplay="I'm a medium checkbox!"
                  isChecked={isChecked}
                />
                <Checkbox size="large" labelDisplay="I'm a large checkbox!" isChecked={isChecked} />
              </div>
            </CardContent>
          </Card>
        </Cell>
      </Grid>
    )
  }
}
