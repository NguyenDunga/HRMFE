
export type FieldValue = string | number | null;

export interface FieldProps {
    name: string;
    autocomplete?: 'on' | 'off';
    
    validateState?: boolean;
    defaultValue?: string;

    onChange?: (value: string | number) => void;
}


export interface ValidateProps {
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number;
}
