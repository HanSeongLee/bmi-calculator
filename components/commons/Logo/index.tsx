import React, { AnchorHTMLAttributes } from 'react';
import styles from './style.module.scss';
import LogoImage from '/public/logo.svg';
import Link from 'next/link';
import cn from 'classnames';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {

}

const Logo: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <Link className={cn(styles.logo, className)}
              href={'/'}
              {...props}
        >
            <h1 aria-label={process.env.NEXT_PUBLIC_TITLE}>
                <LogoImage />
            </h1>
        </Link>
    );
};

export default Logo;
