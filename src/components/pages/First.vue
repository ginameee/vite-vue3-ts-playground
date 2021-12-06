<template>
  <h1>First Page</h1>
</template>
<script setup lang="ts">
import useAppData from "../../hooks/useAppData";

const { asistData, appData } = useAppData();

const props = defineProps({
  initialData: Object,
});

console.log("First Page: appData", appData);
console.log("First Page: assistData", asistData);
console.log("First Page: initialData", props.initialData);
</script>
