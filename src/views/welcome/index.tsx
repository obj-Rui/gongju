/*
 * @Author: wangrui
 * @Date: 2022-03-23 10:08:29
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-03-23 17:33:17
 */
import { defineComponent ,ref} from "vue"
import './index.scss'
const welcome = defineComponent({
  data(){
    return {
      isShow: true,
    }
  },
  mounted() {
    window.localStorage.setItem('isFirst', 'N')
    let div5:any =[].slice.call(document.getElementsByClassName("div5"));
    const star = 3.2;
    for (let i in div5) {
      const num = Number(i)
      console.log(i)
      console.log(star + num/ 10)
       div5[i].style.animationDelay = Number(star + num/ 10) + "s";
    }
    const that = this;
    div5[div5.length -1].addEventListener('webkitAnimationEnd',function () {
      console.log("动画结束")
      that.isShow = false;
      setTimeout(() => {
        that.$router.push('./home')
      }, 1000);
    })

  },
  render() {
    let isShow = this.isShow
    return (
      <div class={isShow?'container show':'container'}>
        <div class="item">
          <div class="div1"></div>
          <div class="div2"></div>
          <div class="div3"></div>
          <div class="div4"></div>
          <div class="div5"></div>
        </div>
        <div class="item">
          <div class="div1"></div>
          <div class="div2"></div>
          <div class="div3"></div>
          <div class="div4"></div>
          <div class="div5"></div>
        </div>
        <div class="item">
          <div class="div1">大</div>
          <div class="div2">大</div>
          <div class="div3">大</div>
          <div class="div4">大</div>
          <div class="div5">大</div>
        </div>
        <div class="item">
          <div class="div1">家</div>
          <div class="div2">家</div>
          <div class="div3">家</div>
          <div class="div4">家</div>
          <div class="div5">家</div>
        </div>
        <div class="item">
          <div class="div1">好</div>
          <div class="div2">好</div>
          <div class="div3">好</div>
          <div class="div4">好</div>
          <div class="div5">好</div>
        </div>
        <div class="item">
          <div class="div1"></div>
          <div class="div2">这</div>
          <div class="div3">这</div>
          <div class="div4">这</div>
          <div class="div5">这</div>
        </div>
        <div class="item">
          <div class="div1"></div>
          <div class="div2"></div>
          <div class="div3">是</div>
          <div class="div4">是</div>
          <div class="div5">是</div>
        </div>
        <div class="item">
          <div class="div1"></div>
          <div class="div2"></div>
          <div class="div3"></div>
          <div class="div4">网</div>
          <div class="div5">网</div>
        </div>
        <div class="item">
          <div class="div1"></div>
          <div class="div2"></div>
          <div class="div3"></div>
          <div class="div4">能</div>
          <div class="div5">能</div>
        </div>
        <div class="item">
          <div class="div1"></div>
          <div class="div2"></div>
          <div class="div3"></div>
          <div class="div4">工</div>
          <div class="div5">工</div>
        </div>
        <div class="item">
          <div class="div1"></div>
          <div class="div2"></div>
          <div class="div3"></div>
          <div class="div4">具</div>
          <div class="div5">具</div>
        </div>
        <div class="item">
          <div class="div1"></div>
          <div class="div2"></div>
          <div class="div3"></div>
          <div class="div4"></div>
          <div class="div5"></div>
        </div>
      </div>
    )
  },
})

export default welcome