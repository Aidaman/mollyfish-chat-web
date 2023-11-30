import { Meta, StoryObj } from "@storybook/angular";
import { ColorsShowcaseComponent } from "./colors-showcase.component";

const meta: Meta<ColorsShowcaseComponent> = {
  title: 'Example Colors',
  component: ColorsShowcaseComponent,
  tags: ['autodocs'],
  render: (args: ColorsShowcaseComponent) => ({
    props: {}
  }),
}

export default meta;
type Story = StoryObj<ColorsShowcaseComponent>

export const colors: Story = {};
