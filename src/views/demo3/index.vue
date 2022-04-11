<!--
 * @Author: wangrui
 * @Date: 2022-04-01 09:50:21
 * @LastEditors: wangrui
 * @Description: 
 * @LastEditTime: 2022-04-06 11:41:23
-->
<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <component-a v-for="(item, key) in title" :key="key" :post="item" @enlarge-text="postFontSize += $event">
      <template #todo="{ todo }">
        <div v-if="todo.title == 'aa'">新名字🤔</div>
      </template>
    </component-a>
    <br />
    <hr style="filter: alpha(opacity=100, finishopacity=0, style=2)" color="#987cb9" SIZE="10" />
    <alert-box :user="user">
      错误信息
      <template v-slot:user="slotProps">
        {{ slotProps.user.age }}
        <!-- <p>Here's some contact info</p> -->
      </template>
    </alert-box>

    <br />
    <hr style="filter: alpha(opacity=100, finishopacity=0, style=2)" color="#987cb9" SIZE="10" />

    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <transition name="fade">
      <component :is="templateName"></component>
    </transition>

    <br />
    <div :title="title">标题信息</div>
    <br />
    <hr style="filter: alpha(opacity=100, finishopacity=0, style=2)" color="#987cb9" SIZE="10" />

    <git-root />
    <br />
    <hr style="filter: alpha(opacity=100, finishopacity=0, style=2)" color="#987cb9" SIZE="10" />
    <my-directive />
  </div>
</template>

<script>
let a = {
  undefined: 1,
}
console.log(a.undefined)
export default {
  data() {
    return {
      title: [
        {
          title: "aa",
          content: "内容",
        },
        {
          title: "bb",
          content: "内容",
        },
        {
          title: "b ccb",
          content: "内容",
        },
      ],
      postFontSize: 1,
      user: {
        name: "章三",
        age: 18,
      },
      currentTab: "Home",
      tabs: ["Home", "Posts", "Archive"],
    }
  },
  computed: {
    templateName: function () {
      return "tab-" + this.currentTab.toLowerCase()
    },
  },
  components: {
    "component-a": {
      props: ["post"],
      template: `<div>
       <h3>{{ post.title }}</h3>
          <button @click="$emit('enlarge-text',0.3)">
       点击放大
      </button>
      <slot name="todo" v-bind:todo="post">
      <!-- 后备内容 -->
      {{ post.content }}
    </slot>
       </div>
       `,
    },
    "alert-box": {
      props: ["user"],
      template: `
        <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
        <slot name="user" :user="user"> {{user.name}}</slot>

        </div>
        `,
    },
    "tab-home": {
      template: "<div>Home component</div>",
    },
    "tab-posts": {
      template: "<div>Posts component</div>",
    },
    "tab-archive": {
      template: "<div>Archive component</div>",
    },
    "git-root": {
      methods: {
        getRoot: function () {
          console.log("root-----", this.$root)
          console.log("parent-----", this.$parent)
        },
      },

      template: "<div><button @click='getRoot'>获取root</button></div>",
    },
    "my-directive": {
      directives: {
        focus: {
          inserted: function (el) {
            console.log("---")
            el.focus()
          },
        },
      },
      template: `
         <input v-focus />
      `,
    },
  },
}
</script>

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
