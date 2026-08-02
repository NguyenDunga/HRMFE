import type { DataListProps, SelectOptionsProps } from "./select";
import { flip, offset, useFloating } from '@floating-ui/react';
import { StyledInputSelect, StyledOption, StyledPopupSelect, StyledIconPseudo, StyledSelectPseudoRight, StyledSelect, StyledSelectContainer } from "./select.style";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "feather-icons-react";
import type { FieldValue } from "../form";

export function SelectMultiple(props: SelectOptionsProps) {

    const selectRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [options, setOptions] = useState<DataListProps>({
        list: [],
        key: '',
        value: '',
    });

    useEffect(() => {
        if (!props.dataList) return;
        setOptions(props.dataList);
    }, [props.dataList]);


    const handleToggle = (item: Record<string, FieldValue>) => {
        if (!selectRef.current) return;
        const key = item[options.key]?.toString() ?? '';

        const current = selectRef.current?.value?.split(",").filter(Boolean) || [];
        const nextKeys = current.includes(key) ? current.filter(k => k !== key) : [...current, key];
        selectRef.current.value = nextKeys.join(',');

        const selecteds = options.list.filter(i => nextKeys.includes(i[options.key]?.toString() ?? ''));
        const labels = selecteds.map(i => i[options.value]?.toString() ?? '');
        if (inputRef.current) inputRef.current.value = labels.join(', ');

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
            {...props}
            ref={selectRef}
            className={`${props.className} controlled`}
            multiple={true}
        >
        </StyledSelect>
        <StyledInputSelect
            type="text"
            ref={inputRef}
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
                    key={item[options.key]?.toString()}
                    className={inputRef.current?.value?.includes(item[options.key]?.toString() ?? "") ? "selected" : undefined}
                    onMouseDown={(e) => {
                        e.preventDefault(); // stop input blur before click registers
                        handleToggle(item);
                    }}
                >
                    {item[options.value]}
                </StyledOption>
            ))}
        </StyledPopupSelect>
        <StyledSelectPseudoRight>
            {/* <StyledIconPseudo>
                <X></X>
            </StyledIconPseudo> */}
            <StyledIconPseudo className="field-select-icon">
                <ChevronDown></ChevronDown>
            </StyledIconPseudo>
        </StyledSelectPseudoRight>
    </StyledSelectContainer>
}

export default SelectMultiple;