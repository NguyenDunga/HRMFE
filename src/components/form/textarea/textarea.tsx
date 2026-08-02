import type { FieldProps } from '../form';
import StyledTextArea from './textarea.style';

interface TextAreaProps extends FieldProps {
    onTextarea?: (value: string) => void;
}


const TextArea = (props: TextAreaProps) => {


    return (
        <StyledTextArea
            name={props.name}
            className={`form-field`}
            placeholder={props.placeholder}
            disabled={props.disabled}

            data-validate={props.validateState}
            defaultValue={props.defaultValue}

            onChange={(e) => props.onChange?.(e.target.value)}
            onInput={(e) => props.onTextarea?.(e.currentTarget.value)}
        >

        </StyledTextArea>
    );
};



export default TextArea;