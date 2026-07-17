import type { ReactNode, RefObject } from "react";


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