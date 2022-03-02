<!--
 * @Author: wangrui
 * @Date: 2022-01-19 17:37:11
 * @LastEditors: wangrui
 * @Description:  header
 * @LastEditTime: 2022-03-01 16:27:47
-->
<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()

const count = ref(0)
</script>
<template>
    <div class="header">
        <div class="logo">
            <h1>Logo</h1>
        </div>
        <div class="nav">
            <ul>
                <li><a href="">home</a></li>
                <li><a href="">new</a></li>
                <li><a href="">about</a></li>
                <li><a href="">tools</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;
    justify-content:space-around;
    border: 1px solid black;
    min-width:1200px;
    .logo {
        color: red;
    }
    .nav {
        ul { 
            display: flex;
            li { 
                padding: 12px
            }
        }
    }

}
</style>