<template>
  <ul class="steps steps-vertical lg:steps-horizontal w-full">
    <li class="step w-auto"
        v-for="stepData in props.stepDatas" :key="stepData.id"
        :class="{'step-primary': stepData.isActive }">
        {{ stepData.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
export interface StepObject
{
  id: number,
  name: string,
  isActive: boolean
}

const props = defineProps({
  stepDatas: {
    type: Array as () => StepObject[],
    default: () => [],
  },
});

</script>
