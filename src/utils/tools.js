/*
 * @Author: wangrui
 * @Date: 2022-03-01 18:15:11
 * @LastEditors: wangrui
 * @Description: 
 * @LastEditTime: 2022-03-01 18:20:04
 */
export const throttle = (fn, wait) => {
    let timer = true
    return function throttleFunc() {
        if (timer) {
            setTimeout(() => {
                // fn()
                fn.call(this)
                timer = true
            }, wait)
        }
        timer = false
    }

}