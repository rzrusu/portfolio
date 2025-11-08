<script setup>
import { computed } from 'vue'

const route = useRoute()

const { data: project } = await useAsyncData(
  `freelance-${route.params.slug}`,
  () => queryContent(`/freelance/${route.params.slug}`).findOne()
)

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Freelance project not found'
  })
}

const title = computed(() => project.value?.title ?? 'Freelance project')
const description = computed(
  () =>
    project.value?.excerpt ??
    project.value?.description ??
    'Case study from freelance portfolio.'
)

useSeoMeta({
  title: () => `${title.value} · Freelance Project`,
  description: () => description.value,
  ogTitle: () => `${title.value} · Freelance Project`,
  ogDescription: () => description.value,
  ogImage: () => project.value?.heroImage ?? project.value?.thumbnail ?? null,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <article class="space-y-10">
    <NuxtLink
      to="/"
      class="inline-flex items-center gap-2 text-sm font-geist text-gray-300 hover:text-white transition-colors"
    >
      <Icon name="uil:arrow-left" class="w-4 h-4" />
      back to home
    </NuxtLink>

    <header class="space-y-6">
      <div class="space-y-2">
        <p class="text-xs uppercase tracking-[0.3em] text-blue-400 font-geist">
          freelance project
        </p>
        <h1 class="text-3xl sm:text-4xl font-bold font-instrument text-white">
          {{ project.title }}
        </h1>
        <p v-if="description" class="text-base text-gray-300 font-geist leading-relaxed">
          {{ description }}
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-3 text-xs font-geist uppercase tracking-wider text-gray-300">
        <span v-if="project.year" class="border border-white/10 rounded-full px-3 py-1">
          {{ project.year }}
        </span>
        <span v-for="service in project.services ?? []" :key="service" class="border border-white/10 rounded-full px-3 py-1">
          {{ service }}
        </span>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <a
          v-if="project.externalUrl"
          :href="project.externalUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/50 text-blue-300 font-geist text-sm hover:bg-blue-500/20 transition-colors"
        >
          View live project
          <Icon name="uil:external-link-alt" class="w-4 h-4" />
        </a>
        <p v-if="project.role" class="text-sm text-gray-400 font-geist">
          Role: <span class="text-gray-200">{{ project.role }}</span>
        </p>
      </div>
    </header>

    <div v-if="project.heroImage" class="overflow-hidden rounded-lg border border-white/10">
      <NuxtImg :src="project.heroImage" :alt="project.title" class="w-full object-cover" />
    </div>

    <div class="prose prose-invert max-w-none font-geist leading-relaxed">
      <ContentRenderer :value="project" class="space-y-6" />
    </div>
  </article>
</template>

