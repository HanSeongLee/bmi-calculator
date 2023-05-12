import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const RadioButton: React.FC<IProps> = ({ label, className, id, ...props }) => {
    return (
        <div className={cn(styles.radioButton, className)}>
            <input className={styles.input}
                   id={id}
                   type={'radio'}
                   {...props}
            />
            <label className={styles.label}
                   htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
};

export default RadioButton;
