import type { FieldProps } from '../../../type/field';
import StyledInputText from './input.style';

interface InputTextProps extends FieldProps {
    

    onInput?: (value: string) => void;
}


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