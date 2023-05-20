import { Meta, StoryObj } from '@storybook/react';
import IntroSection from './index';

const meta: Meta<typeof IntroSection> = {
    title: 'Components/Sections/IntroSection',
    component: IntroSection,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof IntroSection>;

export const Default: Story = {

};
