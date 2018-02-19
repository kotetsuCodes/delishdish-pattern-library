import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import styled from 'styled-components'
import Section from '../Components/Section'
import Theme from '../Helpers/Theme'
import { PrimaryButton, SecondaryButton } from '../Components/Button'
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
          <Section backgroundColor={Theme.MainColors.Empress}>
            <MediumHeading>Welcome to the main component, holmes!</MediumHeading>
          </Section>
        </Cell>

        <Cell left={3} width={8} top={2}>
          {/* <Section backgroundColor={Theme.Blue.SecondaryButton.Fill}>
            <SmallHeading>Default Theme</SmallHeading>
            <Grid columns="repeat(4,minmax(120px,1fr))">
              <Cell center middle>
                <ColorSwatch backgroundColor={Theme.Blue.Background}>
                  Primary Background
                </ColorSwatch>
              </Cell>
              <Cell center middle>
                <ColorSwatch backgroundColor={Theme.Blue.PrimaryButton.Fill}>
                  Primary Fill
                </ColorSwatch>
              </Cell>
              <Cell center middle>
                <ColorSwatch backgroundColor={Theme.Blue.PrimaryButton.Color} textColor="#FFFFFF">
                  Primary Text
                </ColorSwatch>
              </Cell>
              <Cell center middle style={{ border: '1px', 'border-style': 'dashed' }}>
                <ColorSwatch backgroundColor={Theme.Blue.SecondaryButton.Fill}>
                  Secondary Fill
                </ColorSwatch>
              </Cell>
              <Cell center middle>
                <ColorSwatch backgroundColor={Theme.Red.Background}>Primary Background</ColorSwatch>
              </Cell>
              <Cell center middle>
                <ColorSwatch backgroundColor={Theme.Red.PrimaryButton.Fill}>
                  Primary Fill
                </ColorSwatch>
              </Cell>
              <Cell center middle>
                <ColorSwatch backgroundColor={Theme.Red.PrimaryButton.Color} textColor="#FFFFFF">
                  Primary Text
                </ColorSwatch>
              </Cell>
              <Cell center middle>
                <ColorSwatch backgroundColor={Theme.Red.SecondaryButton.Fill}>
                  Secondary Fill
                </ColorSwatch>
              </Cell>
            </Grid>
          </Section> */}
        </Cell>

        <Cell left={3} width={8} top={3}>
          <Section backgroundColor={Theme.MainColors.Empress}>
            <ExtraSmallHeading>Extra Small heading!</ExtraSmallHeading>
            <SmallHeading>Small heading!</SmallHeading>
            <MediumHeading>Medium heading!</MediumHeading>
            <LargeHeading>Large heading!</LargeHeading>
            <ExtraLargeHeading>Extra Large heading!</ExtraLargeHeading>
          </Section>
        </Cell>

        <Cell left={3} width={8} top={4}>
          <Section backgroundColor={Theme.MainColors.Empress}>
            <SmallHeading>Buttons ahoy!</SmallHeading>

            <PrimaryButton>Primary</PrimaryButton>

            <SecondaryButton>Secondary</SecondaryButton>
          </Section>
        </Cell>

        <Cell left={3} width={8} top={5}>
          <Section backgroundColor={Theme.MainColors.Empress}>
            <TextInput placeholder="Regular text input" />
            <Select options={selectOptions} />
            {/* <Toggle /> */}
            <div onClick={e => this.handleClick(e)}>
              <Checkbox size="small" labelDisplay="I'm a small checkbox!" isChecked={isChecked} />
              <Checkbox size="medium" labelDisplay="I'm a medium checkbox!" isChecked={isChecked} />
              <Checkbox size="large" labelDisplay="I'm a large checkbox!" isChecked={isChecked} />
            </div>
          </Section>
        </Cell>
      </Grid>
    )
  }
}
