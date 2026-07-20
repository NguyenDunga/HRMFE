import type { SelectSingleProps } from "./select";
import { StyledInputSelect, StyledPopupSelect, StyledSelect } from "./select.style";

export function SelectSingle(props: SelectSingleProps) {

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
        <StyledPopupSelect>
        </StyledPopupSelect>
    </div>
}

export default SelectSingle;