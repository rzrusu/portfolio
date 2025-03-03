<template>
  <div class="flex flex-row space-x-4 pl-4 pt-4 h-fit">
    <img :src="img" alt="project image" class="w-12 h-12 object-cover rounded-lg">
    <div class="w-full h-fit pb-4" :class="{'border-b border-white/20': !isLast}">
        <div class="flex flex-row items-center space-x-2">
            <a :href="links[0].url" class="text-lg font-bold font-instrument">{{ title }}</a>
            <a v-for="link in links" :href="link.url" class="text-sm text-gray-300 font-geist">
                <Icon :name="link.icon" style="width: 16px; height: 16px;" />
            </a>
        </div>
        <p class="text-sm text-gray-300 font-geist">{{ description }}</p>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
    title: String,
    img: String,
    description: String,
    isLast: Boolean,
    links: {
        type: Array,
        default: () => []
    }
})
</script>




