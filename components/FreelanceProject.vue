
<template>
  <NuxtLink :to="projectPath" class="group border border-white/20 rounded-lg overflow-hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
    <img
      :src="img"
      :alt="title"
      class="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
    >
    <div class="p-4 space-y-2">
      <div class="flex items-center justify-between gap-3">
        <span class="text-lg font-bold font-instrument text-gray-100 group-hover:text-white transition-colors">{{ title }}</span>
        <Icon name="uil:arrow-right" class="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
      </div>
      <p class="text-sm text-gray-300 font-geist">{{ description }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  }
})

const projectPath = computed(() => `/freelance/${props.slug}`)
</script>
