
<template>
    <div class="border border-white/20 rounded-lg">
        <a :href="link" target="_blank">
            <img :src="img" :alt="title" class="h-36 w-full object-cover rounded-t-lg">
        </a>  
        <div class="p-4">
            <a :href="link" target="_blank" class="text-lg font-bold font-instrument text-gray-100 hover:text-white transition-all">{{ title }}</a>
            <p class="text-sm text-gray-300 font-geist">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    img: String,
    description: String,
    link: String,
})
</script>
