import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    unitName: string;
}

const TextField: React.FC<IProps> = ({ label, unitName, className, id, ...props }) => {
    return (
        <div className={cn(styles.textField, className)}>
            <label className={styles.label}
                   htmlFor={id}
            >
                {label}
            </label>
            <div className={styles.inputWrapper}>
                <input className={styles.input}
                       data-unit-name={unitName}
                       id={id}
                       {...props}
                />
                <span className={styles.unitName}>
                    {unitName}
                </span>
            </div>
        </div>
    );
};

export default TextField;
