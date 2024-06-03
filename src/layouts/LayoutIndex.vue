<!-- 💥 这里是一次性加载 LayoutComponents -->
<template>
  <component :is="LayoutComponents[layout]" />
  <ThemeDrawer />
</template>

<script setup lang="ts" name="layout">
import { computed, type Component } from "vue";
import type { LayoutType } from "@/stores/interface";
import { useGlobalStore } from "@/stores/modules/global";
import ThemeDrawer from "./components/ThemeDrawer/ThemeDrawer.vue";
import LayoutVertical from "./LayoutVertical/LayoutVertical.vue";
import LayoutClassic from "./LayoutClassic/LayoutClassic.vue";
import LayoutTransverse from "./LayoutTransverse/LayoutTransverse.vue";
import LayoutColumns from "./LayoutColumns/LayoutColumns.vue";

const LayoutComponents: Record<LayoutType, Component> = {
  vertical: LayoutVertical,
  classic: LayoutClassic,
  transverse: LayoutTransverse,
  columns: LayoutColumns
};

const globalStore = useGlobalStore();
const layout = computed(() => globalStore.layout);
</script>

<style scoped lang="scss">
.layout {
  min-width: 600px;
}
</style>
