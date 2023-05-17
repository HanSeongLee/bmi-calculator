import React, { HTMLAttributes, useEffect, useState } from 'react';
import BMIForm from 'components/forms/BMIForm';
import { BMIResult, HEALTHY_BMI_LOWER, HEALTHY_BMI_UPPER, MeasurementType } from 'types/bmi';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const BMIFormContainer: React.FC<IProps> = (props) => {
    const [measurementType, setMeasurementType] = useState<MeasurementType>(MeasurementType.METRIC);
    const [height, setHeight] = useState<number | undefined>(undefined);
    const [weight, setWeight] = useState<number | undefined>(undefined);
    const [bmiResult, setBMIResult] = useState<BMIResult>({
        bmi: 0,
        idealWeightRange: {
            lower: 0,
            upper: 0,
        },
    });

    const calculateBMI = (height: number, weight: number): number => {
        return weight / Math.pow(height / 100, 2);
    };

    const handleChangeMeasurement = (value: MeasurementType) => {
        setMeasurementType(value);
    };

    const handleChangeHeight = (value: number) => {
        setHeight(value);
    };

    const handleChangeWeight = (value: number) => {
        setWeight(value);
    };

    useEffect(() => {
        if (!height || !weight) {
            return;
        }

        const bmi = calculateBMI(height, weight);
        const lower = HEALTHY_BMI_LOWER * Math.pow(height / 100, 2);
        const upper = HEALTHY_BMI_UPPER * Math.pow(height / 100, 2);

        setBMIResult({
            bmi,
            idealWeightRange: {
                lower,
                upper,
            },
        });
    }, [height, weight]);

    return (
        <div {...props}>
            <BMIForm measurementType={measurementType}
                     onChangeMeasurement={handleChangeMeasurement}
                     onChangeHeight={handleChangeHeight}
                     onChangeWeight={handleChangeWeight}
                     result={bmiResult}
            />
        </div>
    );
};

export default BMIFormContainer;
