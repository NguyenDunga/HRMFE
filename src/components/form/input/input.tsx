import styled from 'styled-components';
import type { FieldProps } from '../../../type/field';

interface InputTextProps extends FieldProps {
    readonly?: boolean;
    placeholder?: string;
    disabled?: boolean;

    onInput?: (value: string) => void;
}

const StyledInputText = styled.input`
    height: var(--input-height);
    padding: 0 var(--space-md);
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    color: var(--color-text);
    background-color: var(--color-bg);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-md);
    outline: none;
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast);

    &::placeholder {
        color: var(--color-placeholder);
    }

    &:hover:not(:disabled) {
        border-color: var(--color-border-hover);
    }

    &:focus {
        border-color: var(--color-primary);
        box-shadow: var(--shadow-focus);
    }

    &:disabled {
        background-color: var(--color-disabled-bg);
        color: var(--color-disabled-text);
        border-color: var(--color-disabled-border);
        cursor: not-allowed;
    }

    &:read-only {
        background-color: var(--color-surface);
        cursor: default;
    }

    &.invalid {
        border-color: var(--color-error);
        box-shadow: var(--shadow-error-focus);
    }
`;

const InputText = (props: InputTextProps) => {

    return (
        <StyledInputText
            type="text"
            name={props.name}
            className={`form-field`}
            placeholder={props.placeholder}
            disabled={props.disabled}

            data-validate={props.validateState}
            defaultValue={props.defaultValue}

            onChange={(e) => props.onChange?.(e.target.value)}
            onInput={(e) => props.onInput?.(e.currentTarget.value)}
        >

        </StyledInputText>
    );
};



export default InputText;