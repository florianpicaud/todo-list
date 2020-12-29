import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import  TodoComponent, {TodoProps}  from '../../components/Todo/todo.component';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Todo',
  component: TodoComponent,
  decorators: [withDesign]
} as Meta;

const Template: Story<TodoProps> = (args) => <TodoComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    todo: {
        id: 1,
        text: "Text"
    },
    index: 0,
    handleDeleteTodo: () => {}
}
Default.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/snA5AUgw7UPdIK8gHpamRh/TodoList?node-id=18%3A8',
    },
  }
