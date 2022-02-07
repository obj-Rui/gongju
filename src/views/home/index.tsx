/*
 * @Author: wangrui
 * @Date: 2022-01-20 11:18:46
 * @LastEditors: wangrui
 * @Description: 
 * @LastEditTime: 2022-01-20 11:26:49
 */
import { defineComponent, ref } from "vue";

const home = defineComponent({
  setup() {
    const title = ref("ceshihahhaha");

    return {
      title,
    };
  },
  render() {
    return (
      <div>
        <p>{this.title}</p>
      </div>
    );
  },
});

export default home;
