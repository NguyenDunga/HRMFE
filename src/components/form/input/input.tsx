import StyledInputText from './input.style';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const InputText = (props: InputTextProps) => {
    const { 
        ...rest 
    }
     = props;

    return (
        <StyledInputText
            {...rest}
            type="text"
        />
    );
};

export default InputText;