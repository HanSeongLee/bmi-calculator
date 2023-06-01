import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import CardBoxContainer from 'containers/CardBoxContainer';

interface IProps extends HTMLAttributes<HTMLDivElement>{

}

const LimitationSection: React.FC<IProps> = ({ className, ...props }) => {
    const items: ICardBoxItem[] = [
        {
            icon: '/icons/icon-gender.svg',
            title: 'Gender',
            description: 'The development and body fat composition of girls and boys vary with age. Consequently, a child\'s age and gender are considered when evaluating their BMI.',
        },
        {
            icon: '/icons/icon-age.svg',
            title: 'Age',
            description: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
        },
        {
            icon: '/icons/icon-muscle.svg',
            title: 'Muscle',
            description: 'BMI may misclassify muscular individuals as overweight or obese, as it doesn\'t differentiate muscle from fat.',
        },
        {
            icon: '/icons/icon-pregnancy.svg',
            title: 'Pregnancy',
            description: 'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
        },
        {
            icon: '/icons/icon-race.svg',
            title: 'Race',
            description: 'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
        },
    ];

    return (
        <section className={cn(styles.limitationSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <header className={styles.header}>
                    <h2 className={styles.title}>
                        Limitations of BMI
                    </h2>
                    <p className={styles.description}>
                        Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.
                    </p>
                </header>
                <CardBoxContainer className={styles.cardBoxContainer}
                                  heading={'h3'}
                                  size={'sm'}
                                  items={items}
                />
            </Container>
        </section>
    );
};

export default LimitationSection;
