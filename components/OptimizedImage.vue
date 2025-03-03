<template>
  <div class="optimized-image-container">
    <NuxtImg
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :placeholder="placeholder"
      :loading="loading"
      :class="imgClass"
      :sizes="sizes"
      :quality="quality"
      :format="format"
      :fit="fit"
      :provider="provider"
    />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  width: {
    type: [Number, String],
    default: undefined
  },
  height: {
    type: [Number, String],
    default: undefined
  },
  placeholder: {
    type: [Boolean, String],
    default: true
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  imgClass: {
    type: String,
    default: ''
  },
  sizes: {
    type: String,
    default: 'xs:100vw sm:100vw md:50vw lg:400px xl:400px'
  },
  quality: {
    type: [Number, String],
    default: 80
  },
  format: {
    type: String,
    default: 'webp'
  },
  fit: {
    type: String,
    default: 'cover'
  },
  provider: {
    type: String,
    default: undefined
  }
})
</script>

<style scoped>
.optimized-image-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}
</style> 