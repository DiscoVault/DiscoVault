import React, {useState} from 'react';
import './Dropdown.css';

interface Option {
    value: string;
    label: string;
}

interface DropdownProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
}

export default function Dropdown({
                                     options,
                                     value,
                                     onChange,
                                     placeholder = 'Select an option',
                                     label
                                 }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = options.find(option => option.value === value);

    return (
        <div className="dropdown-container">
            {label && <label className="dropdown-label">{label}</label>}
            <div className="dropdown">
                <div
                    className="dropdown-header"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="dropdown-selected">
                        {selectedOption ? selectedOption.label : placeholder}
                    </div>
                    <div className={`dropdown-arrow ${isOpen ? 'open' : ''}`}></div>
                </div>
                {isOpen && (
                    <ul className="dropdown-options">
                        {options.map(option => (
                            <li
                                key={option.value}
                                className={option.value === value ? 'selected' : ''}
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

