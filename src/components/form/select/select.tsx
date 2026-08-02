import type { FieldValue } from "../form";


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


export interface SelectOptionsProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean;
    dataList?: DataListProps,
    dataTree?: DataTreeProps,
}
