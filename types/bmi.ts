export enum MeasurementType {
    METRIC = 'metric',
    IMPERIAL = 'imperial',
}

export type BMIResult = {
    bmi: number;
    idealWeightRange: {
        lower: number;
        upper: number;
    },
};

export const HEALTHY_BMI_LOWER = 18.5;
export const HEALTHY_BMI_UPPER = 24.9;
