import { Meta, StoryObj } from '@storybook/react';
import CardBox from 'components/commons/CardBox/index';

const meta: Meta<typeof CardBox> = {
    title: 'Components/CardBox',
    component: CardBox,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
        heading: {
            control: 'select',
            options: [
                'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            ],
            defaultValue: 'h1',
        },
        size: {
            control: 'select',
            options: [
                'lg', 'sm',
            ],
            defaultValue: 'lg',
        },
        icon: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof CardBox>;

export const Large: Story = {
    args: {
        heading: 'h2',
        size: 'lg',
        icon: '/icons/icon-eating.svg',
        title: 'Healthy eating',
        description: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
    },
};

export const Small: Story = {
    args: {
        heading: 'h2',
        size: 'sm',
        icon: '/icons/icon-gender.svg',
        title: 'Gender',
        description: 'The development and body fat composition of girls and boys vary with age. Consequently, a child\'s age and gender are considered when evaluating their BMI.',
    },
};
