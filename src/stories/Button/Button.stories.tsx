import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import  Button, {ButtonProps}  from '../../components/Button/button.component';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withDesign]
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  disabled: false
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/snA5AUgw7UPdIK8gHpamRh/TodoList?node-id=7%3A4',
  },
}

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  primary: true
};
Primary.parameters = {
  ...Default.parameters
}

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  secondary: true
};
Secondary.parameters = {
  ...Default.parameters
}