import React, {ReactNode} from 'react';
import './Button.css';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export default function Button({
       children,
       onClick,
       variant = 'primary',
       type = 'button',
       disabled = false
   }: ButtonProps) {
    return (
        <button
            className={`button ${variant}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
