import { Meta, StoryObj } from '@storybook/react';
import HeroSection from './index';

const meta: Meta<typeof HeroSection> = {
    title: 'Components/Sections/HeroSection',
    component: HeroSection,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {

};
