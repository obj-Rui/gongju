/*
 * @Author: wangrui
 * @Date: 2022-03-22 15:47:53
 * @LastEditors: wangrui
 * @Description: 
 * @LastEditTime: 2022-03-22 15:51:05
 */
import { ScrollbarPlugin } from "smooth-scrollbar";

export class ModalPlugin extends ScrollbarPlugin {
  static pluginName = "modal";

  static defaultOptions = {
    open: false,
  };

  transformDelta(delta:any) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}
