export interface DragProps {

  // 宽度
  width?: number;

  // 高度
  height?: number;

  // 位置
  x?: number;

  y?: number;

  // 背景色
  background?: string;

  // 所在容器id 或容器dom对象
  container: string;

  // 锚点边框颜色
  anchorBorderColor?: string;

  // 锚点背景色
  anchorColor?: string;

  // 锚点边框宽度
  anchorBorderWidth?: number;

  // 锚点大小
  anchorSize?: number;

  // 容器样式
  containerStyle?: any;

  // 最小大小
  minWidth?: number;

  // 最小高度
  minHeight?: number;

  // 子元素
  children?: any;

  // 子元素父级元素样式
  childrenParentStyle?: any;

  // 位置或大小变更
  onChange?: DragChangeHandler;

}

export type DragChangeHandler = (value: Rect) => void;

export interface Rect {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}