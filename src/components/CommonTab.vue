<template lang="">
    <div class="tags">
        <el-tag :key="tag.name"
        v-for="(tag,index) in tags" 
        :closable="tag.name !== 'home'"
        :disable-transiton="false"
        :effect="route.name === tag.name ? 'dark':'plain' " 
        @click="changeMenu(tag)"
        @close="handelClose(tag,index)">{{tag.label}}</el-tag>
    </div>
</template>
<script setup>
import { reactive,onMounted,getCurrentInstance } from 'vue';
import { useStore } from '../store';
import { useRouter,useRoute } from 'vue-router';

const store = useStore()
const router = useRouter()
const route = useRoute()
const { proxy } = getCurrentInstance()
const tags = store.tabsList
const changeMenu = (item) => {
    router.push({
        name: item.name
    })
    store.selectMenu(item)
}
const handelClose = (item,index) => {
    let length = tags.length - 1
    store.closeTag(item)
    if(item.name !== route.name) {
        return
    }
    if(index === length){
        router.push({
            name: tags[index-1].name
        })

    }
    else {
        router.push({
            name: tags[index].name
        })

    }
}
</script>
<style lang="less">
.tags {
    padding: 20px;
    width: 100%;
    .el-tag {
        cursor: pointer;
        margin-right: 15px;
    }
}
</style>
