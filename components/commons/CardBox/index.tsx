import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, ICardBoxAttribute, ICardBoxItem {

}

const CardBox: React.FC<IProps> = ({
                                       heading, size, icon, title,
                                       description, className, ...props
                                   }) => {
    return (
        <article className={cn(styles.cardBox, {
            [styles.sm]: size === 'sm',
            [styles.lg]: size === 'lg',
        }, className)}
                 {...props}
        >
            <header className={styles.header}>
                <img className={styles.icon}
                     src={icon}
                     alt={''}
                />

                {React.createElement(heading, {
                    className: styles.title,
                }, title)}
            </header>
            <p className={styles.description}>
                {description}
            </p>
        </article>
    );
};

export default CardBox;
