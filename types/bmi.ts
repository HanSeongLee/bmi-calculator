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

