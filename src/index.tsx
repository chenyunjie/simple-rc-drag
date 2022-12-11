import React from "react";
import { DragProps, Rect } from "./types";
import "./index.css";

// 锚点集合
const anchors = ['u', 'd', 'l', 'r', 'lu', 'ru', 'rd', 'ld'];

// 默认宽度
const DEFAULT_MIN_WIDTH = 50;
// 默认高度
const DEFAULT_MIN_HEIGHT = 50;

export default class Drag extends React.Component<DragProps, any> {

  // 鼠标是否按下了
  isMouseDown: boolean = false;

  // 拖动起点
  startX: number = 0;

  startY: number = 0;

  // 宽高
  width: number = 0;

  height: number = 0;

  // 当前位置
  currentX: number = 0;

  currentY: number = 0;

  // 拖拽方向
  dragDirection?: string;

  // 当前元素节点
  element?: any;

  constructor(props: DragProps) {
    super(props);

    this.currentX = props.x || 0;
    this.currentY = props.y || 0;

    this.width = props.width || 100;
    this.height = props.height || 100;

  }

  componentDidMount(): void {

    window.addEventListener('mousedown', (e: any) => {
      this.startX = e.clientX;
      this.startY = e.clientY;
      
      if (e.target == this.element) {
        this.isMouseDown = true;

        if (this.element) {
          this.currentX = this.element.parentElement.offsetLeft;
          this.currentY = this.element.parentElement.offsetTop;
        }
      } else {

        if (e.target && e.target.parentElement === this.element) {
          const { key } = e.target.dataset;
          if (anchors.includes(key)) {
            this.isMouseDown = true;
            this.dragDirection = key;
          }
        }
      }
    });

    window.addEventListener('mousemove', (e) => {
      const translateX = e.clientX - this.startX;
      const translateY = e.clientY - this.startY;
  
      if (this.isMouseDown) {

        if (!this.dragDirection) {
          if (this.element) {
            let left = this.currentX + translateX;
            let top = this.currentY + translateY;

            const container = document.getElementById(this.props.container);
            if (left < 0) {
              left = 0;
            }

            if (top < 0) {
              top = 0;
            }

            if (container) {
              if (left > container.clientWidth - this.width) {
                left = container.clientWidth - this.width;
              }

              if (top > container.clientHeight - this.height) {
                top = container.clientHeight - this.height;
              }
            }
            
            this.element.parentElement.style.left = `${left}px`;
            this.element.parentElement.style.top = `${top}px`;
          } 
        } else {
          this.transform(translateX, translateY);
        }

        if (this.props.onChange) {
          this.props.onChange({
            x: this.element.parentElement.offsetLeft,
            y: this.element.parentElement.offsetTop,
            width: this.width,
            height: this.height
          })
        }
      }
    });

    window.addEventListener('mouseup', (e) => { 
      this.isMouseDown = false;
      if (this.element) {
        this.currentX = this.element.parentElement.offsetLeft;
        this.currentY = this.element.parentElement.offsetTop;
        this.width = this.element.parentElement.clientWidth;
        this.height = this.element.parentElement.clientHeight;
      }
      
      this.dragDirection = '';
    });
  }

  // 变更大小及位置
  transform = (translateX: number, translateY: number) => {
    
    switch (this.dragDirection) {
      case "l":
        // 向左增加宽度
        this.extendToLeft(translateX);
        break;
      case "r":
        // 向右增加宽度
        this.extendToRight(translateX);
        break;
      case "u":
        // 向上增加高度
        this.extendToUp(translateY);
        break;
      case "d":
        // 向下增加高度
        this.extendToDown(translateY);
        break;
      case "lu":
        this.extendToLeft(translateX);
        this.extendToUp(translateY);
        break;
      case "ru":
        this.extendToRight(translateX);
        this.extendToUp(translateY);
        break;
      case "ld":
        this.extendToLeft(translateX);
        this.extendToDown(translateY);
        break;
      case "rd":
        this.extendToRight(translateX);
        this.extendToDown(translateY);
      
    }

    const rect = {
      x: this.element.parentElement.offsetLeft,
      y: this.element.parentElement.offsetTop,
      width: this.element.parentElement.clientWidth,
      height: this.element.parentElement.clientHeight
    } as Rect;

    if (this.props.onChange) {
      this.props.onChange(rect);
    }
  }

  // 向左扩展大小
  extendToLeft = (translateX: number) => {
    if (this.element) {
      let left = this.currentX + translateX;
      if (left < 0) {
        left = 0;
        this.element.parentElement.style.left = `${left}px`;
      } else {
        const { minWidth = DEFAULT_MIN_WIDTH } = this.props;
        let w = this.width - translateX;
        if (w < minWidth) {
          w = minWidth;
        } else {
          this.element.parentElement.style.left = `${left}px`;
        }
        
        this.element.parentElement.style.width = `${w}px`;
      }
    } 
  }

  // 向右扩展大小
  extendToRight = (translateX: number) => {
    if (this.element) {
      let w = this.width + translateX;
      const parent = document.getElementById(this.props.container);
      if (parent && this.currentX + w >= parent.clientWidth) {
        w = parent.clientWidth - this.currentX;
      }

      const { minWidth = DEFAULT_MIN_WIDTH } = this.props;

      if (w < minWidth) {
        w = minWidth;
      }
      this.element.parentElement.style.width = `${w}px`;
    }
  }

  // 向上扩展大小
  extendToUp = (translateY: number) => {
    if (this.element) {
      let top = this.currentY + translateY;
      if (top <= 0) {
        top = 0;
        this.element.parentElement.style.top = `${top}px`;
      } else {
        

        let h = this.height - translateY;

        const { minHeight = DEFAULT_MIN_HEIGHT } = this.props;

        if (h < minHeight) {
          h = minHeight;
        } else {
          this.element.parentElement.style.top = `${top}px`;
        }

        this.element.parentElement.style.height = `${h}px`;
      }
    }
  }

  // 向下扩展大小
  extendToDown = (translateY: number) => {
    if (this.element) {
      let h = this.height + translateY;
      const parent = document.getElementById(this.props.container);
      if (parent && h + this.currentY > parent.clientHeight) {
        h = parent.clientHeight - this.currentY;
      }

      const { minHeight = DEFAULT_MIN_HEIGHT } = this.props;
      if (h < minHeight) {
        h = minHeight;
      }

      this.element.parentElement.style.height = `${h}px`;
    }
  }

  render(): React.ReactNode {

    const { anchorBorderColor = '#666666', anchorBorderWidth = 1, anchorSize = 6, anchorColor="#ffffff" } = this.props;

    const border = `solid ${anchorBorderWidth}px ${anchorBorderColor}`;

    const { background = 'rgba(243,255,226,.8)', containerStyle = {} } = this.props;

    const style = {
      background,
      border: 'solid 1px #000000'
    } 

    const mergeStyle = Object.assign({}, style, containerStyle);

    mergeStyle.position = 'absolute';

    return (
      <div style={mergeStyle}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }} ref={
          (r) => {
            this.element = r;
            if (this.element) {
              this.element.parentElement.style.left = `${this.currentX}px`;
              this.element.parentElement.style.top = `${this.currentY}px`;
              this.element.parentElement.style.width = `${this.width}px`;
              this.element.parentElement.style.height = `${this.height}px`;
            }
          }
        }>
          <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              {this.props.children}
            </div>
          </div>
          { /* 上部分 */ }
          <div data-key="lu" style={{ border, position: 'absolute', backgroundColor: anchorColor, width: anchorSize, height: anchorSize, left: -anchorSize/2 - anchorBorderWidth, top: -anchorSize/2 - anchorBorderWidth }}></div>
          <div data-key="u" style={{ border, position: 'absolute',  backgroundColor: anchorColor,width: anchorSize, height: anchorSize, left: `calc(50% - ${anchorSize/2}px)`, top: -anchorSize/2 - anchorBorderWidth }}></div>
          <div data-key="ru" style={{ border, position: 'absolute', backgroundColor: anchorColor,width: anchorSize, height: anchorSize, left: `calc(100% - ${anchorSize / 2}px)`, top: -anchorSize / 2 - anchorBorderWidth }}></div>
          

          {/* 下部分 */}
          <div data-key="ld" style={{ border, position: 'absolute', backgroundColor: anchorColor,width: anchorSize, height: anchorSize, left: -anchorSize/2 - anchorBorderWidth, top: `calc(100% - ${anchorSize/2}px)`}}></div>
          <div data-key="d" style={{ border, position: 'absolute',  backgroundColor: anchorColor,width: anchorSize, height: anchorSize, left: `calc(50% - ${anchorSize/2}px)`, top: `calc(100% - ${anchorSize/2}px)` }}></div>
          <div data-key="rd" style={{ border, position: 'absolute', backgroundColor: anchorColor,width: anchorSize, height: anchorSize, left: `calc(100% - ${anchorSize / 2}px)`, top: `calc(100% - ${anchorSize / 2}px)` }}></div>
          
          { /* 中间部分 */ }
          <div data-key="l" style={{ border, position: 'absolute', backgroundColor: anchorColor,width: anchorSize, height: anchorSize, left: -anchorSize / 2 - anchorBorderWidth, top: `calc(50% - ${anchorSize / 2}px)` }}></div>
          <div data-key="r" style={{ border, position: 'absolute', backgroundColor: anchorColor,width: anchorSize, height: anchorSize, left: `calc(100% - ${anchorSize / 2}px)`, top: `calc(50% - ${anchorSize / 2}px)` }}></div>
        </div>
        
      </div>
    );
  }
}