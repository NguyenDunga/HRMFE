
export type FieldValue = string | number | null;

export interface FieldProps {
    name: string;
    autocomplete?: 'on' | 'off';
    placeholder?: string;
    
    disabled?: boolean;
    validateState?: boolean;
    defaultValue?: string;

    onChange?: (value: FieldValue) => void;
}


export interface ValidateProps {
    readonly?: boolean;
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number;
}
