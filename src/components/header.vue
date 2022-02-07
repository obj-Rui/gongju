<!--
 * @Author: wangrui
 * @Date: 2022-01-19 17:37:11
 * @LastEditors: wangrui
 * @Description:  header
 * @LastEditTime: 2022-01-20 11:32:48
-->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>
<template>
    <div class="header">
        <div class="logo">
            <h1>Logo</h1>
        </div>
        <div>
            <ul>
                <li><a href="">home</a></li>
                <li><a href="">new</a></li>
                <li><a href="">about</a></li>
                <li><a href="">tools</a></li>
            </ul>
        </div>
    </div>
</template>

<style type="sass">
.header {
    display: flex;
    border: 1px solid black;
    .logo {
        
    }
}
</style>