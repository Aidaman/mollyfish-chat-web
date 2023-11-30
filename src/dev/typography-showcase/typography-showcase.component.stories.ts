import { Meta, StoryObj } from "@storybook/angular";
import { TypographyShowcaseComponent } from "./typography-showcase.component";

const meta: Meta<TypographyShowcaseComponent> = {
  title: 'Example Typography',
  component: TypographyShowcaseComponent,
  tags: ['autodocs'],
  render: (args: TypographyShowcaseComponent) => ({
    props: {}
  }),
}

export default meta;
type Story = StoryObj<TypographyShowcaseComponent>

export const typography: Story = {};
