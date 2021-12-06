<template>
  <h1>First Page</h1>
</template>
<script setup lang="ts">
import { getCurrentInstance } from "@vue/runtime-core";

const instance = getCurrentInstance();
const props = defineProps({
  initialData: Object,
});

console.log(
  "First Page: globalProperties",
  instance?.appContext.config.globalProperties
);
console.log("First Page: props", props.initialData);
</script>
