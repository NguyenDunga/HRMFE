interface InputProps extends FieldProps {
    name: string;

    placeholder?: string;
    defaultValue?: string;
    autocomplete?: 'on' | 'off';
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;

    onChange?: (value: string | number) => void;
}


type FieldValue = string | number | null;

interface FieldProps {
    value?: FieldValue;
    setValue?: (value: FieldValue) => void;
}


interface ValidateProps {
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number;
    function?: (value: FieldValue) => boolean;
}


export type { InputProps, FieldProps, FieldValue, ValidateProps };
