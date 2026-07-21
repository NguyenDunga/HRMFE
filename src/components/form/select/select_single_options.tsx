import type { DataListProps, SelectSingleProps } from "./select";
import { flip, offset, useFloating } from '@floating-ui/react';
import { StyledInputSelect, StyledPopupSelect, StyledSelect, StyledSelectContainer } from "./select.style";
import { useEffect, useRef, useState } from "react";
import { StyledOptionSingle } from "./select_single_options.style";
import type { FieldValue } from "../../../type/field";

export function SelectSingle(props: SelectSingleProps) {

    const selectRef = useRef<HTMLSelectElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState<DataListProps>({
        list: [],
        key: '',
        value: '',
    });

    useEffect(() => {
        if (!props.dataList) return;
        setOptions(props.dataList);
    }, [props.dataList])


    const handleOnClick = (item: Record<string, FieldValue>) => {
        const displayValue = item[options.value];
        const actualValue = item[options.key];
        // if (inputRef.current) inputRef.current.value = displayValue?.toString() || '';
        setInputValue(displayValue?.toString() || '');
        if (selectRef.current) selectRef.current.value = actualValue?.toString() || '';
        props.onChange?.(actualValue);
        inputRef.current?.blur();
    };

    const { refs, floatingStyles } = useFloating({
        middleware: [offset(5), flip()],
        placement: 'bottom-end'
    });

    return <StyledSelectContainer
        className="field-select-container"
        ref={refs.setReference}
    >
        <StyledSelect
            className="controlled"
            ref={selectRef}
            name={props.name}
            disabled={props.disabled}
            defaultValue={props.defaultValue}
            multiple={props.multiple}
            onChange={(e) => props.onChange?.(e.target.value)}
        >
        </StyledSelect>
        <StyledInputSelect
            ref={inputRef}
            value={inputValue}
            type="text"
            name={props.name}
            className={`form-field`}
            placeholder={props.placeholder}
            disabled={props.disabled}
            autoComplete={"off"}
            autoCorrect={"off"}
            autoCapitalize={"off"}
            spellCheck={"false"}

            data-validate={props.validateState}
            defaultValue={props.defaultValue}

            onInput={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
        >
        </StyledInputSelect>
        <StyledPopupSelect
            className="dropdown-field"
            style={floatingStyles}
            ref={refs.setFloating}
        >
            {options.list.map((item) => (
                <StyledOptionSingle
                    key={item[options.key]}
                    onMouseDown={(e) => {
                        e.preventDefault(); // stop input blur before click registers
                        handleOnClick(item);
                    }}
                >
                    {item[options.value]}
                </StyledOptionSingle>
            ))}
        </StyledPopupSelect>
    </StyledSelectContainer>
}

export default SelectSingle;