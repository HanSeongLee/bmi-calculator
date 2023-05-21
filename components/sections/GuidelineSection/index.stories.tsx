import { Meta, StoryObj } from '@storybook/react';
import GuidelineSection from './index';

const meta: Meta<typeof GuidelineSection> = {
    title: 'Components/Sections/GuidelineSection',
    component: GuidelineSection,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof GuidelineSection>;

export const Default: Story = {

};
