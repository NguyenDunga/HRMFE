import styled from "styled-components";

export const StyledOptionSingle = styled.div`
    display: flex;
    align-items: center;
    padding: var(--space-sm) var(--space-md);
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height);
    color: var(--color-text);
    background-color: transparent;
    cursor: pointer;
    user-select: none;
    transition: background-color var(--transition-fast), color var(--transition-fast);

    &:hover {
        background-color: var(--color-hover-bg);
        color: var(--color-hover-text);
    }

    &.selected {
        background-color: var(--color-primary-muted);
        color: var(--color-primary);
        font-weight: var(--font-weight-medium);
    }

    &.focused,
    &:focus-visible {
        background-color: var(--color-focus-bg);
        color: var(--color-focus-text);
        outline: none;
        box-shadow: inset 0 0 0 var(--border-width-focus) var(--color-focus-border);
    }

    &[aria-disabled="true"] {
        color: var(--color-disabled-text);
        background-color: var(--color-disabled-bg);
        cursor: not-allowed;
        pointer-events: none;
    }
`;