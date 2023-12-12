<template>
  <ul class="steps steps-vertical lg:steps-horizontal w-full">
    <li class="step w-auto"
        v-for="(stepData, index) in props.stepDatas" :key="index"
        :class="{'step-primary': stepData.isActive }">
        {{ stepData.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
export interface StepDatas
{
  order: number,
  name: string,
  isActive: boolean,
}

const props = defineProps<{
  stepDatas: StepDatas[]
}>();

</script>
