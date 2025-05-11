import React, {ReactNode} from 'react';
import './Navbar.css';

interface NavbarProps {
    brand: ReactNode;
    children?: ReactNode;
}

export default function Navbar({brand, children}: NavbarProps) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">{brand}</div>
            <div className="navbar-menu">
                {children}
            </div>
            <button className="navbar-toggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}

