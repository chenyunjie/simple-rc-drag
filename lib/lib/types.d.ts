export interface DragProps {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    background?: string;
    container: string;
    anchorBorderColor?: string;
    anchorColor?: string;
    anchorBorderWidth?: number;
    anchorSize?: number;
    containerStyle?: any;
    minWidth?: number;
    minHeight?: number;
    children?: any;
    childrenParentStyle?: any;
    onChange?: DragChangeHandler;
}
export type DragChangeHandler = (value: Rect) => void;
export interface Rect {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
