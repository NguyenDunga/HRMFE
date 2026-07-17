import type { FieldValue, ValidateProps } from "../type/field";

const useFormData = (formRef: React.RefObject<HTMLFormElement>) => {

    function getValue(name: string): FieldValue {
        const form = formRef.current;
        const fd = new FormData(form);
        const value = fd.get(name);
        return value as FieldValue;
    }

    function getValues(): Record<string, FieldValue> {
        const form = formRef.current;
        const fd = new FormData(form);
        const values = Object.fromEntries(fd.entries());
        return values as Record<string, FieldValue>;
    }

    function setValue(name: string, value: FieldValue): void {
        const form = formRef.current;
        const input = form?.elements.namedItem(name) as HTMLInputElement;
        if (input) {
            input.value = value as string;
        }
    }

    function setValues(values: Record<string, FieldValue>): void {
        const form = formRef.current;
        Object.entries(values).forEach(([name, value]) => {
            const input = form?.elements.namedItem(name) as HTMLInputElement;
            if (input) {
                input.value = value as string;
            }
        });
    }

    function validate(rules: Record<string, ValidateProps>): boolean {
        let isValid = true;
        for (const [name, rule] of Object.entries(rules)) {
            const input = getValue(name);
            if (rule.required && (input === null || input === '')) {
                isValid = false;
                break;
            }
            if (rule.minlength && typeof input === 'string' && input.length < rule.minlength) {
                isValid = false;
                break;
            }
            if (rule.maxlength && typeof input === 'string' && input.length > rule.maxlength) {
                isValid = false;
                break;
            }
            if (rule.min && typeof input === 'number' && input < rule.min) {
                isValid = false;
                break;
            }
            if (rule.max && typeof input === 'number' && input > rule.max) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    return {
        getValue,
        getValues,
        setValue,
        setValues,
        validate,
    }

};

export { useFormData };
