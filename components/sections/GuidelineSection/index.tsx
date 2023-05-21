import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import CardBoxContainer from 'containers/CardBoxContainer';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const GuidelineSection: React.FC<IProps> = ({ className, ...props }) => {
    const items: ICardBoxItem[] = [
        {
            icon: '/icons/icon-eating.svg',
            title: 'Healthy eating',
            description: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
        },
        {
            icon: '/icons/icon-exercise.svg',
            title: 'Regular exercise',
            description: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
        },
        {
            icon: '/icons/icon-sleep.svg',
            title: 'Adequate sleep',
            description: 'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
        },
    ];

    return (
        <section className={cn(styles.guidelineSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <CardBoxContainer className={styles.cardBoxContainer}
                                  heading={'h2'}
                                  size={'lg'}
                                  items={items}
                />
            </Container>
        </section>
    );
};

export default GuidelineSection;
