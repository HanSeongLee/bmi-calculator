import React, { HTMLAttributes } from 'react';
import styles from 'components/sections/IntroSection/style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const IntroSection: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.introSection, className)}
                 {...props}
        >
            <img className={styles.image}
                 src={'/img/image-man-eating.webp'}
                 alt={''}
            />
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    What your BMI result means
                </h2>
                <p className={styles.description}>
                    A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower
                    your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a
                    nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables.
                    Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a
                    week.
                </p>
            </Container>
        </section>
    );
};

export default IntroSection;
