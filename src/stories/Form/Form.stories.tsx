import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import  Form, {FormProps}  from '../../components/Form/form.component';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Form',
  component: Form,
  decorators: [withDesign]
} as Meta;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
    inputValue: "",
    setInputValue: (input: string) => {},
    handleSubmit: () => {}
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/snA5AUgw7UPdIK8gHpamRh/TodoList?node-id=18%3A0',
  },
}

export const Typing = Template.bind({});
Typing.args = {
    ...Default.args,
    inputValue: "Some Text"
}
Typing.parameters = {
  ...Default.parameters
}