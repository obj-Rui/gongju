/*
 * @Author: wangrui
 * @Date: 2022-01-20 11:18:46
 * @LastEditors: wangrui
 * @Description: 
 * @LastEditTime: 2022-02-07 16:15:23
 */
import { defineComponent, ref } from "vue";
import img from './../../assets/logo.png'

const home = defineComponent({
  setup() {
    const title = ref("ceshihahhaha");
    return {
      title,
    };
  },
  render () {
    console.log('ss')
    return (
      <div id="container">
        <p >{this.title}</p>
        <img src={img} alt="" />
      </div>
    );
  },
});

export default home;
