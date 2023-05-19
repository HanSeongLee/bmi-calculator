import React, { HTMLAttributes } from 'react';
import styles from 'components/sections/HeroSection/style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import BMIFormContainer from 'containers/BMIFormContainer';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const HeroSection: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.heroSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    Body Mass Index Calculator
                </h2>
                <p className={styles.description}>
                    Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                </p>
                <BMIFormContainer />
            </Container>
        </section>
    );
};

export default HeroSection;
