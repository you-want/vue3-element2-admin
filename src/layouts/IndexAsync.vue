<!-- 💥 这里是异步加载 LayoutComponents -->
<template>
  <suspense>
    <template #default>
      <component :is="LayoutComponents[layout]" />
    </template>
    <template #fallback>
      <LoadingIndex />
    </template>
  </suspense>
  <ThemeDrawer />
</template>

<script setup lang="ts" name="layoutAsync">
import { computed, defineAsyncComponent, type Component } from "vue";
import type { LayoutType } from "@/stores/interface";
import { useGlobalStore } from "@/stores/modules/global";
import ThemeDrawer from "./components/ThemeDrawer/ThemeDrawer.vue";

const LayoutComponents: Record<LayoutType, Component> = {
  vertical: defineAsyncComponent(() => import("./LayoutVertical/LayoutVertical.vue")),
  classic: defineAsyncComponent(() => import("./LayoutClassic/LayoutClassic.vue")),
  transverse: defineAsyncComponent(() => import("./LayoutTransverse/LayoutTransverse.vue")),
  columns: defineAsyncComponent(() => import("./LayoutColumns/LayoutColumns.vue"))
};

const globalStore = useGlobalStore();
const layout = computed(() => globalStore.layout);
</script>

<style scoped lang="scss">
.layout {
  min-width: 600px;
}
</style>
