import type { Meta, StoryObj } from '@storybook/react';
import TextField from './index';

const meta: Meta<typeof TextField> = {
    title: 'Components/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
        id: { control: 'text' },
        label: { control: 'text' },
        unitName: { control: 'text' },
        placeholder: { control: 'text' },
        value: { control: 'text' },
        type: {
            control: {
                type: 'select',
                options: ['text', 'number'],
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
        id: 'default',
        type: 'number',
        label: 'Default',
        unitName: 'cm',
        placeholder: '0',
    },
};

export const Active: Story = {
    args: {
        id: 'active',
        type: 'number',
        label: 'Active',
        unitName: 'cm',
        value: '185',
        placeholder: '0',
    },
    parameters: {
        pseudo: {
            focus: true,
        },
    },
};

export const Filled: Story = {
    args: {
        id: 'filled',
        type: 'number',
        label: 'Filled',
        unitName: 'cm',
        value: '185',
        placeholder: '0',
    },
};
