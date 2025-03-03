<template>
  <ClientOnly>
    <div class="flex flex-row space-x-4 pl-4 pt-4 h-fit" v-if="isVisible">
      <OptimizedImage 
        :src="img" 
        :alt="title" 
        class="w-12 h-12 object-cover rounded-lg"
        width="48"
        height="48"
      />
      <div class="w-full h-fit pb-4" :class="{'border-b border-white/20': !isLast}">
          <div class="flex flex-row items-center space-x-2">
              <h1 class="text-lg font-bold font-instrument">{{ title }}</h1>
              <a v-for="link in links" :href="link.url" class="text-sm text-gray-300 font-geist">
                  <Icon :name="link.icon" style="width: 16px; height: 16px;" />
              </a>
          </div>
          <p class="text-sm text-gray-300 font-geist">{{ description }}</p>
      </div>
    </div>
    <div v-else class="flex flex-row space-x-4 pl-4 pt-4 h-fit animate-pulse">
      <div class="w-12 h-12 bg-gray-700 rounded-lg"></div>
      <div class="w-full h-fit pb-4" :class="{'border-b border-white/20': !isLast}">
          <div class="h-6 bg-gray-700 rounded w-1/3 mb-2"></div>
          <div class="h-4 bg-gray-700 rounded w-2/3"></div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    title: String,
    img: String,
    description: String,
    isLast: Boolean,
    links: {
        type: Array,
        default: () => []
    }
});

const isVisible = ref(false);

onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      });
    }, {
      rootMargin: '100px',
    });
    
    // Get the parent element
    const el = document.querySelector('.lazy-project');
    if (el) {
      observer.observe(el);
    } else {
      // If element not found, show content anyway
      isVisible.value = true;
    }
    
    // Cleanup
    return () => {
      observer.disconnect();
    };
  } else {
    // On server, show content
    isVisible.value = true;
  }
});
</script> 