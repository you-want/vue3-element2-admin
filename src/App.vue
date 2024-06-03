<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'

</script>

<template>
  <el-config-provider :size="'small'" :z-index="3000" :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
