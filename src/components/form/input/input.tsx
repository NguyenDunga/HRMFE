import styled from 'styled-components';
import type { FieldProps, FieldValue, InputProps } from '../form';
import { forwardRef, useImperativeHandle, useRef } from 'react';

interface InputTextProps extends InputProps {
    maxlength?: number;
    minlength?: number;
    required?: boolean;


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

const InputText = forwardRef<FieldProps, InputTextProps>((props, ref) => {

    const inputRef = useRef<HTMLInputElement>(null);
    
    useImperativeHandle(ref, () => ({
        setValue: (value: FieldValue) => {
            if (inputRef.current) {
                inputRef.current.value = value as string;
            }
        },
        getValue: () => {
            return inputRef.current?.value || '';
        }
    }));
    

    return (
        <StyledInputText
            type="text"
            ref={inputRef}
            defaultValue={props.defaultValue}
            name={props.name}
            className={`input-text-field`}
            placeholder={props.placeholder}
            disabled={props.disabled}
            readOnly={props.readonly}
            required={props.required}
            maxLength={props.maxlength}
            minLength={props.minlength}

            onChange={(e) => props.onChange?.(e.target.value)}
            onInput={(e) => props.onInput?.(e.currentTarget.value)}
        />
    );
});

export default InputText;