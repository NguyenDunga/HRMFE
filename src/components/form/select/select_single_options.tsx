import { useEffect, useRef, useState } from "react";
import { flip, offset, useFloating } from '@floating-ui/react';
import { ChevronDown } from "feather-icons-react";

import { StyledIconPseudo, StyledInputSelect, StyledOption, StyledPopupSelect, StyledSelectPseudoRight, StyledSelect, StyledSelectContainer } from "./select.style";

import type { DataListProps, SelectOptionsProps } from "./select";
import type { FieldValue } from "../form";

export function SelectSingle(props: SelectOptionsProps) {
    const { ...rest } = props;

    const selectRef = useRef<HTMLInputElement>(null);
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
        setInputValue(displayValue?.toString() || '');

        if (selectRef.current) {
            selectRef.current.value = actualValue?.toString() || '';
            const changeEvent = new Event("change", { bubbles: true });
            selectRef.current?.dispatchEvent(changeEvent);
        }

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
            {...rest}
            className="controlled"
            ref={selectRef}
        >
        </StyledSelect>
        <StyledInputSelect
            type="text"
            ref={inputRef}
            value={inputValue}
            className={`form-field`}
            placeholder={props.placeholder}
            disabled={props.disabled}
            autoComplete={"off"}
            autoCorrect={"off"}
            autoCapitalize={"off"}
            spellCheck={"false"}
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
                <StyledOption
                    key={item[options.key]}
                    className={item[options.key] == selectRef.current?.value ? "selected" : undefined}
                    onMouseDown={(e) => {
                        e.preventDefault(); // stop input blur before click registers
                        handleOnClick(item);
                    }}
                >
                    {item[options.value]}
                </StyledOption>
            ))}
        </StyledPopupSelect>
        <StyledSelectPseudoRight>
            <StyledIconPseudo
                className="field-select-icon"
            >
                <ChevronDown></ChevronDown>
            </StyledIconPseudo>
        </StyledSelectPseudoRight>
    </StyledSelectContainer>
}

export default SelectSingle;