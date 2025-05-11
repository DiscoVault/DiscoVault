import React, {ReactNode} from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({children, onClick, className = ''}) => {
    return (
        <button
            className={`${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;