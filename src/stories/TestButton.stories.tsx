import TestButton from '../components/TestButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Example/TestButton',
  component: TestButton,
} as ComponentMeta<typeof TestButton>;

const Template: ComponentStory<typeof TestButton> = (args) => <TestButton />;

export const Default = Template.bind({});
