import React, {ChangeEvent} from 'react';
import './TextField.css';

interface TextFieldProps {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    error?: string;
    required?: boolean;
    id?: string;
}

export default function TextField({
                                      label,
                                      value,
                                      onChange,
                                      type = 'text',
                                      placeholder = '',
                                      error,
                                      required = false,
                                      id
                                  }: TextFieldProps) {
    const fieldId = id || `field-${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className={`text-field ${error ? 'has-error' : ''}`}>
            <label htmlFor={fieldId}>
                {label}
                {required && <span className="required">*</span>}
            </label>
            <input
                id={fieldId}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
            {error && <div className="error-message">{error}</div>}
        </div>
    );
}

