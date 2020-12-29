import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import  Input, {InputProps}  from '../../components/Input/input.component';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [withDesign]
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder...",
  onChange: (s: string) => {}
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/snA5AUgw7UPdIK8gHpamRh/TodoList?node-id=14%3A2',
  },
}

export const Typing = Template.bind({});
Typing.args = {
  ...Default.args,
  value:"Some text",
  onChange: (s: string) => {}
}
Typing.parameters = {
  ...Default.parameters
}