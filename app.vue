<template>
  <div>
    <button class="btn btn-primary">
      Click me
    </button>
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts" setup>
const year: number = 2022
const title: string = `${year} iThome 鐵人賽`
</script>
