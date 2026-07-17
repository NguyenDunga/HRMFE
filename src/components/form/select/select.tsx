import styled from "styled-components";
import type { FieldProps, FieldValue } from "../../../type/field";

interface SelectSingleProps extends FieldProps {
    isValid?: boolean;
    option: Record<string, FieldValue>

}

const StyledSelect = styled.select`
    
`;

export default function Select(props: SelectSingleProps) {


    return <StyledSelect
        name={props.name}
        className={`form-field`}

        defaultValue={props.defaultValue}
        data-validate={props.validateState}

        onChange={(e) => props.onChange?.(e.target.value)}
    >
         {Object.entries(props?.option).map(e => (
                <option key={e[0]}>{e[1]}</option>
            )) }
    </StyledSelect>
}