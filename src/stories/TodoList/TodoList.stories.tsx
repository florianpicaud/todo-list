import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import  TodoList  from '../../components/TodoList/todo-list.component';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/TodoList',
  component: TodoList,
  decorators: [withDesign]
} as Meta;

const Template: Story = () => <TodoList />;

export const Default = Template.bind({});
Default.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/snA5AUgw7UPdIK8gHpamRh/TodoList?node-id=17%3A1',
    },
  }