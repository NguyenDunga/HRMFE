import styled from "styled-components";

const StyledSelectContainer = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    position: relative;

    
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


export {
    StyledSelectContainer,
    StyledInputSelect,
    StyledPopupSelect,
    StyledSelect
}