import styled from "styled-components";

const StyledSelectContainer = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;

  .dropdown-field {
    opacity: 0;
  visibility: hidden;
  }

  .form-field:focus + .dropdown-field {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: opacity 0.15s ease, transform 0.15s ease, visibility 0s linear 0s; 
  }

  &:has(.form-field:focus) .field-select-icon {
    transform: rotate(90deg);
  }
`;


const StyledSelect = styled.select`
    display: none;
`;


const StyledInputSelect = styled.input`
    height: var(--input-height);
    padding: 0 var(--space-md);
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    color: var(--color-text);
    background-color: var(--color-bg);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-md);
    outline: none;
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast);
    padding-right: var(--input-height);
    text-overflow: ellipsis;

    &::placeholder {
        color: var(--color-placeholder);
    }

    &:hover:not(:disabled) {
        border-color: var(--color-border-hover);
    }

    &:focus {
        border-color: var(--color-primary);
        box-shadow: var(--shadow-focus);
    }

    &:disabled {
        background-color: var(--color-disabled-bg);
        color: var(--color-disabled-text);
        border-color: var(--color-disabled-border);
        cursor: not-allowed;
    }

    &:read-only {
        background-color: var(--color-surface);
        cursor: default;
    }

    &.invalid {
        border-color: var(--color-error);
        box-shadow: var(--shadow-error-focus);
    }

    & > .controlled{
        display: none;
    }
`;
const StyledPopupSelect = styled.div`
  min-width: 100%;
  min-height: 100px;
  max-height: 40vh;
  background-color: var(--color-bg);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: translateY(-6px);
  transition: opacity 0.15s ease, transform 0.15s ease, visibility 0s linear 0.15s; 
  transform-origin: top center;
  overflow-x: hidden;
  overflow-y: auto;
`;


const StyledOptionArrow = styled.div`
    position: absolute;
    right: 0;
    height: 100%;
    aspect-ratio: 1/1;
    justify-content: center;
    display: flex;
    align-items: center;
    transform: rotate(0);
    transition: transform 0.15s ease;
`;



const StyledOption = styled.div`
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

export {
    StyledSelectContainer,
    StyledInputSelect,
    StyledPopupSelect,
    StyledOptionArrow,
    StyledOption,
    StyledSelect
}