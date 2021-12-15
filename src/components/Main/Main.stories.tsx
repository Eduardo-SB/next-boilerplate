import { Story, Meta } from '@storybook/react/types-6-0';
import Main from './Main';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title default',
    description: 'Description default'
  }
} as Meta;

export const Default: Story = (args) => <Main {...args} />;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'Titulo',
  description: 'Description'
};
