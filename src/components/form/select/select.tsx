import type { FieldProps, FieldValue } from "../../../type/field";
import { StyledInputSelect, StyledSelect } from "./select.style";


export type DataListProps = {
    list: Array<Record<string, FieldValue>>,
    key: string
    value: string,
    render?: (key: string, value: FieldValue, object: object) => FieldValue
}

export type DataTreeProps = {
    list: Array<Record<string, FieldValue>>,
    key: string,
    name: string
    childrenKey: string,
    render?: (key: string, value: FieldValue, object: object, children: Array<object>) => FieldValue
}


export interface SelectSingleProps extends FieldProps {
    isValid?: boolean;
    dataList?: DataListProps,
    dataTree?: DataTreeProps,
    multiple?: boolean,
}

export function Select(props: SelectSingleProps) {

    return <div className="field-select-container">
        <StyledSelect
            className="controlled"
            name={props.name}
            disabled={props.disabled}
            defaultValue={props.defaultValue}
            multiple={props.multiple}
            onChange={(e) => props.onChange?.(e.target.value)}
        >
        </StyledSelect>
        <StyledInputSelect
            type="text"
            name={props.name}
            className={`form-field`}
            placeholder={props.placeholder}
            disabled={props.disabled}

            data-validate={props.validateState}
            defaultValue={props.defaultValue}
        >
        </StyledInputSelect>
    </div>
}

export default Select;