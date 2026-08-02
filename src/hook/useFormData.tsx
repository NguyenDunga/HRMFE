import type { FieldValue } from "../components/form/form";

const useFormData = (selector: React.RefObject<HTMLFormElement> | string) => {

    function _getForm(): HTMLFormElement {
        if (typeof selector === 'string') {
            const el = document.querySelector<HTMLFormElement>(selector);
            if (!el) throw new Error(`Element is not found from selector ${selector}`);
            return el;
        }
        return selector.current;
    }

    function getValue(name: string): FieldValue {
        const form = _getForm();
        const fd = new FormData(form);
        const value = fd.get(name);
        return value as FieldValue;
    }

    function getValues(): Record<string, FieldValue> {
        const form = _getForm();
        const fd = new FormData(form);
        const values = Object.fromEntries(fd.entries());
        return values as Record<string, FieldValue>;
    }

    function setValue(name: string, value: FieldValue): void {
        const form = _getForm();
        const input = form?.elements.namedItem(name) as HTMLInputElement;
        if (input) {
            input.value = value as string;
        }
    }

    function setValues(values: Record<string, FieldValue>): void {
        const form = _getForm();
        Object.entries(values).forEach(([name, value]) => {
            const input = form?.elements.namedItem(name) as HTMLInputElement;
            if (input) input.value = value as string;
        });
    }
    return {
        getValue,
        getValues,
        setValue,
        setValues,
    }

};

export { useFormData };
