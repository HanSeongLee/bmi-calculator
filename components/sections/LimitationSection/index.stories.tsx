import { Meta, StoryObj } from '@storybook/react';
import LimitationSection from './index';

const meta: Meta<typeof LimitationSection> = {
    title: 'Components/Sections/LimitationSection',
    component: LimitationSection,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof LimitationSection>;

export const Default: Story = {

};
