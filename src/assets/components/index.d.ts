export interface TextInputProps {
    label?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}