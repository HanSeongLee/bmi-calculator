import { Meta, StoryObj } from '@storybook/react';
import BMIForm from './index';
import { MeasurementType } from 'types/bmi';

const meta: Meta<typeof BMIForm> = {
    title: 'Components/Forms/BMIForm',
    component: BMIForm,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
        measurementType: {
            control: 'select',
            options: Object.values(MeasurementType),
        },
    },
};

export default meta;

type Story = StoryObj<typeof BMIForm>;

export const Metric: Story = {
    args: {
        measurementType: MeasurementType.METRIC,
        bmiResult: 0,
    },
};

export const Imperial: Story = {
    args: {
        measurementType: MeasurementType.IMPERIAL,
        bmiResult: 0,
    },
};
