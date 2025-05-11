import React, {ReactNode} from 'react';
import './Card.css';

interface CardProps {
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
    className?: string;
}

export default function Card({
                                 children,
                                 header,
                                 footer,
                                 className = ''
                             }: CardProps) {
    return (
        <div className={`card ${className}`}>
            {header && <div className="card-header">{header}</div>}
            <div className="card-body">{children}</div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
}

