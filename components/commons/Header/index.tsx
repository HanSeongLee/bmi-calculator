import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Logo from 'components/commons/Logo';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const Header: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <header className={cn(styles.header, className)}
                {...props}
        >
            <Logo />
        </header>
    );
};

export default Header;
