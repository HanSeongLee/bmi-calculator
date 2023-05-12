import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './index';

const meta: Meta<typeof RadioButton> = {
    title: 'Components/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
        id: { control: 'text' },
        label: { control: 'text' },
        checked: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        id: 'default',
        label: 'Default',
        checked: false,
    },
};

export const Hover: Story = {
    args: {
        id: 'hover',
        label: 'Hover',
        checked: false,
    },
    parameters: {
        pseudo: {
            hover: true,
        },
    },
};

export const Active: Story = {
    args: {
        id: 'active',
        label: 'Active',
        checked: true,
    },
};
