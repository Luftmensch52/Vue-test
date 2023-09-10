<template lang="">
    <el-aside :width="store.isCollapse?'180px':'64px'">
        <el-menu class="el-menu-vertical-demo" background-color="#ccc" text-color="#fff" :collapse="!store.isCollapse" :collapse-transition="false">
        <h3 v-show="store.isCollapse">后台管理</h3>
        <h3 v-show="!store.isCollapse">后台</h3>
            <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.path" @click="clickMenu(item)">
                <component :is="item.icon" class="icons"></component>
                <span>{{item.label}}</span>
            </el-menu-item>
            <el-sub-menu :index="item.label" v-for="item in hasChildren()" :key="item.path">
                <template #title>
                    <component :is="item.icon" class="icons"></component>
                    <span>{{item.label}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
                        <component :is="subItem.icon" class="icons"></component>
                        <span>{{subItem.label}}</span>
                    </el-menu-item>
                </el-menu-item-group>

            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>

<script setup>

import { useStore } from '../store';
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const list = [
    {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'user',
        url: 'UserManage/UserManage'
    },
    {
        label: '其他',
        icon: 'location',
        path: '/other',
        children: [{
            path: '/page1',
            name: 'page1',
            label: '页面1',
            icon: 'setting',
            url: 'Other/PageOne'
        },
        {
            path: '/page2',
            name: 'page2',
            label: '页面2',
            icon: 'setting',
            url: 'Other/PageTwo'
        }
        ]
    }
]
const noChildren = () => {
    return asyncList.filter((item) => {
        return !item.children
    })
}

const hasChildren = () => {
    return asyncList.filter((item) => {
        return item.children
    })
}

const clickMenu = (item) => {
    router.push({
        name: item.name
    })
    store.selectMenu(item)
}

const asyncList = store.menu

</script>

<style lang="less" scoped>
.icons {
    height: 18px;
    width: 18px;
}

.el-menu {
    border-right: 0;

    h3 {
        line-height: 48px;
        color: #fff;
        text-align: center;
    }
}
</style>
