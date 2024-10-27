<template>
    <el-menu
        :style="{width: isCollapse ? '64px' : '230px'}"
        active-text-color="#ffd04b" background-color="#545c64" class="aside-container" 
        text-color="#fff" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse"
        :default-active = "active"
        >
        <p class="logo-lg">{{ isCollapse ? 'DIDI' : 'DD陪诊' }}</p>
        <TreeMenu :index="1" :menuData="menuData" />
    </el-menu>
</template>
<script setup>
import TreeMenu from './treeMenu.vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()


const router = useRouter()
// const menuData = reactive(router.options.routes[0].children)

const menuData = computed(() => store.state.menu.routerList)
const isCollapse = computed(() => store.state.menu.isCollapse)
const active = computed(() => store.state.menu.menuActive)
// console.log(menuData)
const handleOpen = () => { }
const handleClose = () => { }
</script>

<style lang="less" scoped>
.aside-container {
    height: 100%;

    .logo-lg {
        font-size: 20px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: #fff;
    }
}
</style>