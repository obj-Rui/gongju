/*
 * @Author: wangrui
 * @Date: 2022-01-20 10:30:25
 * @LastEditors: wangrui
 * @Description: 
 * @LastEditTime: 2022-01-20 11:26:04
 */
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: "home",
            component: () => import('../layout/index.vue'), // 这是路由的籁加载，也可以其他方式
            children: [
               {
                path:'/home',
                component: () => import('../views/home/index')
               }
            ]
        }
    ]
})

export default router;

