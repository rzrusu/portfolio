<template>
  <div class="border border-white/20 rounded-lg relative pt-20 space-y-12">
    <div class="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <img src="~/assets/avatar.png" alt="logo" class="w-24 h-24 rounded-full">
    </div>
    <div class="text-white text-center space-y-2">
        <h1 class="text-2xl font-bold font-instrument">Rusu Răzvan</h1>
        <p class="text-sm text-[#CCCCCC] font-geist">Web Dev & Designer</p>
    </div>

    <div class="grid grid-cols-4 border-t border-white/20">
        <a href="https://github.com/rzrusu" class="w-full h-16 border-r border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
            <img src="~/assets/icons/github.svg" alt="icon" class="w-8 h-8">
        </a>
        <a href="#" class="w-full h-16 border-r border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
            <img src="~/assets/icons/linkedin.svg" alt="icon" class="w-8 h-8">
        </a>
        <a href="mailto:rzrusu03@gmail.com" class="w-full h-16 border-r border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
            <img src="~/assets/icons/email.svg" alt="icon" class="w-8 h-8">
        </a>
        <a href="#" class="w-full h-16 hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
            <img src="~/assets/icons/discord.svg" alt="icon" class="w-8 h-8">
        </a>
    </div>
  </div>
  <div class="border rounded-lg border-white/20 p-4 flex items-center justify-between mt-4">
            <a class="text-sm text-gray-300 font-geist hover:text-white transition-all" href="https://www.behance.net/rzrusu">View my CV</a>
            <Icon name="uil:arrow-right" class="w-4 h-4" />
  </div>
</template>


