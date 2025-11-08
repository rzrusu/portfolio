<template>
  <div class="border border-white/20 rounded-lg p-8 space-y-6 w-full">
    <div class="text-white text-left space-y-4">
      <p class="text-xs uppercase tracking-[0.3em] text-blue-400 font-geist">
        {{ category }}
      </p>
      <h1 class="text-3xl sm:text-4xl font-bold font-instrument">
        {{ title }}
      </h1>
      <p v-if="description && description.trim()" class="text-sm text-[#CCCCCC] font-geist max-w-2xl">
        {{ description }}
      </p>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-3 pt-4">
      <div class="flex flex-wrap items-center gap-3">
        <a
          v-if="externalUrl"
          :href="externalUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/50 text-blue-300 font-geist text-sm hover:bg-blue-500/20 transition-colors"
        >
          View live project
          <Icon name="uil:external-link-alt" class="w-4 h-4" />
        </a>
        <p v-if="role" class="text-sm text-gray-400 font-geist">
          Role: <span class="text-gray-200">{{ role }}</span>
        </p>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <span v-if="year" class="border border-white/20 rounded-full px-4 py-2 text-xs font-geist uppercase tracking-wider text-gray-300">
          {{ year }}
        </span>
        <span v-for="service in services ?? []" :key="service" class="border border-white/20 rounded-full px-4 py-2 text-xs font-geist uppercase tracking-wider text-gray-300">
          {{ service }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: 'freelance project'
  },
  year: {
    type: String,
    default: ''
  },
  services: {
    type: Array,
    default: () => []
  },
  externalUrl: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    default: ''
  }
})
</script>

