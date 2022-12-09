import React from "react";
import { DragProps } from "./types";
import "./index.css";
export default class Drag extends React.Component<DragProps, any> {
    isMouseDown: boolean;
    startX: number;
    startY: number;
    width: number;
    height: number;
    currentX: number;
    currentY: number;
    dragDirection?: string;
    element?: any;
    constructor(props: DragProps);
    componentDidMount(): void;
    transform: (translateX: number, translateY: number) => void;
    extendToLeft: (translateX: number) => void;
    extendToRight: (translateX: number) => void;
    extendToUp: (translateY: number) => void;
    extendToDown: (translateY: number) => void;
    render(): React.ReactNode;
}
