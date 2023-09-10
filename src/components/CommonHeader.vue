<template lang="">
  <el-header>
    <div class="l-content">
      <el-button
        size="small"
        plain
        @click="store.updateIsCollapse"
      >
        <el-icon :size="20">
          <Menu />
        </el-icon>
      </el-button>
      <el-breadcrumb
        separator="/"
        class="bread"
      >
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="current.path"
          v-if="current"
          >{{ current.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img
            class="user"
            :src="getImgSrc('user')"
            alt=""
          />
          <!-- <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon> -->
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="handleLoginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";

const store = useStore();
const getImgSrc = (user) => {
  //vite中的
  //console.log(new URL(`../assets/${user}.svg`, import.meta.url))
  return new URL(`../assets/${user}.svg`, import.meta.url).href;
};
const router = useRouter();
const current = computed(() => {
  return store.currentMenu;
});
const handleLoginOut = (params) => {
  store.cleanMenu();
  router.push({
    name: "login",
  });
};
</script>

<style lang="less">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #333;
}

.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

.l-content {
  display: flex;
  align-items: center;
  justify-content: center;

  .el-button {
    margin-right: 20px;
  }

  h3 {
    color: #fff;
  }
}

.bread span {
  color: #fff !important;
  cursor: pointer !important;
}
</style>
