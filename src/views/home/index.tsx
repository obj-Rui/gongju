/*
 * @Author: wangrui
 * @Date: 2022-01-20 11:18:46
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-03-28 14:14:51
 */
import { defineComponent, ref } from "vue"
import { DATA } from "../../utils/data.js"
import Scrollbar from "smooth-scrollbar"
import { gsap, Power1 } from "gsap"
import { ModalPlugin } from "../../plugins/scroll-disable.js"
import "./index.scss"

const constants = {
  SIZES: {
    MENU: {
      X: 20,
      Y: 50,
    },
  },
}

const home = defineComponent<any>({
  setup() {
    const title = ref("ceshihahhaha")
    return {
      title,
    }
  },
  mounted() {
    const content: any = document.querySelector(".content")
    const scrollBar = document.querySelector(".scrollbar")
    const navContainer = [].slice.call(document.querySelectorAll(".nav > li"))
    const scrollMenu = document.querySelector(".scroll-menu")
    const side: any = document.querySelector(".side")
    Scrollbar.use(ModalPlugin)
    const verticalScrollbar = Scrollbar.init(content, {
      damping: 0.05,
      delegateTo: document,
      alwaysShowTracks: false,
    })
    verticalScrollbar.setPosition(0, 0)
    verticalScrollbar.track.yAxis.element.remove()
    verticalScrollbar.track.xAxis.element.remove()
    verticalScrollbar.updatePluginOptions("modal", { open: true })
    verticalScrollbar.addListener(({ offset }) => {
      const { clientHeight, scrollHeight } = verticalScrollbar.containerEl
      const progress = Number.parseInt(((offset.y / (scrollHeight - clientHeight)) * 360).toFixed(0), 10)
      const rotatePercentage = ((progress * (333 - 225)) / 360 + 225).toFixed(0)

      gsap.to(scrollBar, {
        transform: `rotate(${rotatePercentage}deg)`,
      })
    })
    // 初始化菜单
    const initMenu = () => {
      const { X, Y } = constants.SIZES.MENU

      gsap.to(scrollMenu, {
        delay: 0.8,
        autoAlpha: 1,
        ease: Power1.easeOut,
      })
      navContainer.forEach((navItem: any, index) => {
        const tl = gsap.timeline()

        tl.to(navItem, {
          transform: `translate( -${X * index}px, ${Y * index}px)`,
          duration: 0,
        })
          .to(navItem, {
            stagger: 0.2,
            delay: 0.8,
            autoAlpha: 1,
            ease: Power1.easeOut,
          })
          .then(() => verticalScrollbar.updatePluginOptions("modal", { open: false })) // 设置位置 (0,0)
        // 给菜单添加点击事件
        navItem.addEventListener("click", () => {
          const scrollContent = [].slice.call(document.querySelector(".scroll-content")?.querySelectorAll(".item"))
          // console.log(scrollContent)
          const scrollItem: any = scrollContent.find(({ dataset }: any) => dataset.id === navItem.dataset.id)

          onMenuSelect(navItem)
          verticalScrollbar.scrollIntoView(scrollItem, {
            onlyScrollIfNeeded: true,
          })
        })
      })

      onMenuSelect(navContainer[0])
    }

    const onMenuSelect = (selectedItem: any) => {
      const { X, Y } = constants.SIZES.MENU
      toggleActive(selectedItem)

      for (const [i, navItem] of navContainer.entries()) {
        const id = Number.parseInt(selectedItem.dataset.id, 10)
        const index = i + 1

        const currentItemYPos: any = gsap.getProperty(navItem, "translateY")
        const selectedItemYPos: any = gsap.getProperty(selectedItem, "translateY")

        const translateSteps = selectedItemYPos / Y
        const translateValue = translateSteps * Y

        gsap.to(navItem, {
          transform: `translate(
              ${index < id ? -(X * (id - index)) : X * (id - index)}px, 
              ${currentItemYPos - translateValue}px
            )`,
          duration: 0.8,
          ease: Power1.easeOut,
        })
      }
    }

    const toggleActive = (item: any) => {
      navContainer.forEach((n: any) => {
        if (n.dataset.id === item.dataset.id) {
          item.classList.add("active")
        } else {
          n.classList.remove("active")
        }
      })
    }
    // 创建下拉列表
    const generateList = () => {
      const scrollContent: any = document.querySelector(".scroll-content")

      DATA.forEach((item) => scrollContent.appendChild(createItem(item)))

      scrollContent.classList.add(DATA.length % 2 === 0 ? "even" : "odd")

      if (scrollContent.children.length === DATA.length) {
        gsap.to(scrollContent, {
          autoAlpha: 1,
          delay: 1,
        })
      }
    }
    // 创建dom
    const createItem = (item: any) => {
      const itemContainer = document.createElement("div")
      const heading = document.createElement("div")
      const title = document.createElement("div")
      const order = document.createElement("span")
      const picture = document.createElement("div")
      // const a = (
      //   <div class="item">
      //     <div class="heading">
      //       <div class="title"></div>
      //       <div class="order"></div>
      //     </div>
      //     <div class="picture">
      //       <img src="" alt="tupian"></img>
      //     </div>
      //   </div>
      // )
      itemContainer.classList.add("item")
      heading.classList.add("heading")
      title.classList.add("title")
      order.classList.add("order")
      picture.classList.add("picture")

      if (item.imgUrl) {
        const img = document.createElement("img")
        img.src = item.imgUrl
        picture.appendChild(img)
      }

      title.textContent = item.title
      order.textContent = item.id

      heading.appendChild(title)
      heading.appendChild(order)
      itemContainer.appendChild(heading)
      itemContainer.appendChild(picture)

      if (item.hasOwnProperty("navId")) {
        itemContainer.setAttribute("data-id", item.navId)
      }

      return itemContainer
    }

    const animateList = () => {
      gsap.to(side.children, {
        stagger: 0.15,
        delay: 1,
        y: 0,
        autoAlpha: 1,
      })
    }

    initMenu()
    generateList()
    animateList()

    let options = {
      root: verticalScrollbar.containerEl,
      rootMargin: "0px",
      threshold: 0.5,
    }

    let observer = new IntersectionObserver((entries, _) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          const selection = navContainer.find(({ dataset }: any) => dataset.id === entry.target.dataset.id)

          if (Boolean(selection)) {
            onMenuSelect(selection)
          }
        }
      })
    }, options)

    verticalScrollbar.containerEl.querySelectorAll(".item").forEach((p) => {
      observer.observe(p)
    })
    // })
  },
  methods: {
    toTooL: () => {
      console.log("tool")
      document.querySelector(".main")
    },
  },
  render() {
    console.log(this)
    return (
      <div class="main scale">
        <div class="scroll-menu">
          <div class="circle-1"></div>
          <div class="circle-2"></div>
          <div class="circle-2-overlay"></div>
          <div class="scrollbar"></div>
          <div class="overlay"></div>
        </div>
        <nav>
          <ul class="nav">
            <li data-id="1">
              <a>首页·1</a>
            </li>
            <li data-id="2">
              <a>官网·2</a>
            </li>
            <li data-id="3">
              <a>官网·3</a>
            </li>
            <li data-id="4">
              <a>官网·4</a>
            </li>
            <li data-id="5">
              <a>官网·5</a>
            </li>
          </ul>
        </nav>
        <div class="side">
          <h1>WNGJ(网能工具)</h1>
          <div class="text">
            <div class="line"></div>
            <p>一个现在还没有工具的网站💪</p>
          </div>
          <div class="button" onClick={this.toTooL}>
            {" "}
            button{" "}
          </div>
          <h4 class="author">
            {/* <p>xiaodi.obj</p> */}
            <p>
              <a href="https://beian.miit.gov.cn/">蜀ICP备2021028125号-1</a>
            </p>
          </h4>
        </div>
        <section class="content"></section>
      </div>
    )
  },
})

export default home
