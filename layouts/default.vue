<template>
  <div class="max-w-full lg:max-w-3xl mx-auto py-24 px-4 lg:px-0 overflow-x-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-6 gap-12">
      <div class="col-span-6 lg:col-span-2 text-white">
        <UserBar />
      </div>
      <div class="col-span-6 lg:col-span-4 text-white space-y-8">
        <slot />
      </div>
    </div>
  </div>
</template>

