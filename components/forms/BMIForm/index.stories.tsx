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
        result: {
            bmi: 0,
            idealWeightRange: {
                lower: 0,
                upper: 0,
            },
        },
    },
};

export const Imperial: Story = {
    args: {
        measurementType: MeasurementType.IMPERIAL,
        result: {
            bmi: 0,
            idealWeightRange: {
                lower: 0,
                upper: 0,
            },
        },
    },
};
