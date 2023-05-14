import React, { FormHTMLAttributes, useState } from 'react';
import styles from 'components/forms/BMIForm/style.module.scss';
import cn from 'classnames';
import RadioButton from 'components/commons/RadioButton';
import TextField from 'components/commons/TextField';
import { MeasurementType } from 'types/bmi';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    measurementType: MeasurementType;
    onChangeMeasurement: (value: MeasurementType) => void;
    onChangeHeight: (value: number) => void;
    onChangeWeight: (value: number) => void;
    bmiResult: number;
}

const FT_PER_CM = 30.48;
const IN_PER_CM = 2.56;
const ST_PER_KG = 6.35029;
const LBS_PER_KG = 0.453592;

const BMIForm: React.FC<IProps> = ({
                                       measurementType, onChangeMeasurement, bmiResult, onChangeHeight,
                                       onChangeWeight, className, ...props
                                   }) => {
    return (
        <form className={cn(styles.bmiForm, className)}
              {...props}
        >
            <fieldset>
                <legend>
                    Enter your details below
                </legend>
                <div className={styles.fieldWrapper}>
                    <RadioButton id={'metric'}
                                 name={'measurement'}
                                 label={'Metric'}
                                 value={'metric'}
                                 onChange={(e) => {
                                     onChangeMeasurement(MeasurementType.METRIC);
                                 }}
                                 checked={measurementType === MeasurementType.METRIC}
                    />
                    <RadioButton id={'imperial'}
                                 name={'measurement'}
                                 label={'Imperial'}
                                 value={'imperial'}
                                 onChange={(e) => {
                                     onChangeMeasurement(MeasurementType.IMPERIAL);
                                 }}
                                 checked={measurementType === MeasurementType.IMPERIAL}
                    />
                </div>
                {measurementType === MeasurementType.METRIC && (
                    <div className={styles.metricFieldContainer}>
                        <TextField type={'number'}
                                   id={'height'}
                                   name={'height'}
                                   label={'Height'}
                                   unitName={'cm'}
                                   onChange={(e) => {
                                       onChangeHeight(Number(e.target.value));
                                   }}
                        />
                        <TextField type={'number'}
                                   id={'weight'}
                                   name={'weight'}
                                   label={'Weight'}
                                   unitName={'kg'}
                                   onChange={(e) => {
                                       onChangeWeight(Number(e.target.value));
                                   }}
                        />
                    </div>
                )}
                {measurementType === MeasurementType.IMPERIAL && (
                    <div className={styles.metricFieldContainer}>
                        <div className={styles.inputFieldWrapper}>
                            <ConvertableNumberTextFieldSet label={'Height'}
                                                           firstUnitName={'ft'}
                                                           secondUnitName={'in'}
                                                           firstUnitPer={FT_PER_CM}
                                                           secondUnitPer={IN_PER_CM}
                                                           onChange={onChangeHeight}
                            />
                        </div>
                        <div className={styles.inputFieldWrapper}>
                            <ConvertableNumberTextFieldSet label={'Weight'}
                                                           firstUnitName={'st'}
                                                           secondUnitName={'lbs'}
                                                           firstUnitPer={ST_PER_KG}
                                                           secondUnitPer={LBS_PER_KG}
                                                           onChange={onChangeWeight}
                            />
                        </div>
                    </div>
                )}
            </fieldset>

            <div className={styles.resultBox}>
                <div className={styles.title}>
                    Your BMI is...
                    <strong className={styles.result}>
                        {bmiResult.toFixed(1)}
                    </strong>
                </div>
                <p className={styles.description}>
                    Your BMI suggests you’re a healthy weight. Your ideal weight is
                    between <strong>63.3kgs</strong> - <strong>85.2kgs</strong>.
                </p>
            </div>
        </form>
    );
};

const ConvertableNumberTextFieldSet = (
    {
        label, firstUnitName, secondUnitName, firstUnitPer,
        secondUnitPer, onChange,
    }:
        {
            label: string;
            firstUnitName: string,
            secondUnitName: string,
            firstUnitPer: number,
            secondUnitPer: number,
            onChange: (value: number) => void,
        }) => {

    const [first, setFirst] = useState<number>(0);
    const [second, setSecond] = useState<number>(0);

    const handleChangeFirst = (value: number) => {
        const result = value * firstUnitPer + second * secondUnitPer;
        setFirst(value);
        onChange(result);
    };

    const handleChangeSecond = (value: number) => {
        const result = first * firstUnitPer + value * secondUnitPer;
        setSecond(value);
        onChange(result);
    };

    return (
        <>
            <TextField type={'number'}
                       id={`${label.toLowerCase()}-${firstUnitName}`}
                       name={`${label.toLowerCase()}-${firstUnitName}`}
                       label={label}
                       unitName={firstUnitName}
                       onChange={(e) => {
                           handleChangeFirst(Number(e.target.value));
                       }}
            />
            <TextField type={'number'}
                       id={`${label.toLowerCase()}-${secondUnitName}`}
                       name={`${label.toLowerCase()}-${secondUnitName}`}
                       label={''}
                       unitName={secondUnitName}
                       onChange={(e) => {
                           handleChangeSecond(Number(e.target.value));
                       }}
            />
        </>
    );
};

export default BMIForm;
