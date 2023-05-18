import React, { HTMLAttributes } from 'react';
import CardBox from 'components/commons/CardBox';

interface IProps extends HTMLAttributes<HTMLUListElement>, ICardBoxAttribute {
    items: ICardBoxItem[];
}

const CardBoxContainer: React.FC<IProps> = ({ heading, size, items, ...props }) => {
    return (
        <ul {...props}>
            {items.map(({ icon, title, description }, index) => (
                <li key={index}>
                    <CardBox heading={heading}
                             size={size}
                             icon={icon}
                             title={title}
                             description={description}
                    />
                </li>
            ))}
        </ul>
    );
};

export default CardBoxContainer;
