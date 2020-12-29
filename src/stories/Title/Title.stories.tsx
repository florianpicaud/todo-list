import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import  Title, {TitleProps}  from '../../components/Title/title.component';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Title',
  component: Title,
  decorators: [withDesign]
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args={
    name: "Header"
}
Default.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/snA5AUgw7UPdIK8gHpamRh/TodoList?node-id=3%3A7',
    },
  }