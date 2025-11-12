

import React, { ReactNode } from 'react';

// FIX: Extended CardProps with React.HTMLAttributes<HTMLDivElement> to allow passing standard div props like 'id'.
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
    return (
        <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;