import type { ReactNode, RefObject } from "react";


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


interface FormProps {
    ref: RefObject<HTMLFormElement>,
    children: ReactNode
}

const Form = (props: FormProps) => {
    return (
        <form {...props}>
        </form>
    );
};

export default Form;