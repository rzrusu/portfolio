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
        <a href="https://linkedin.com/in/rusu-razvan" class="w-full h-16 border-r border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
            <img src="~/assets/icons/linkedin.svg" alt="icon" class="w-8 h-8">
        </a>
        <a href="mailto:rzrusu03@gmail.com" class="w-full h-16 border-r border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
            <img src="~/assets/icons/email.svg" alt="icon" class="w-8 h-8">
        </a>
        <div class="tooltip-container w-full h-16 hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
            <a href="#" class="relative">
                <img src="~/assets/icons/discord.svg" alt="icon" class="w-8 h-8">
                <span class="tooltip">rusuu</span>
            </a>
        </div>
    </div>
  </div>
  <div class="border rounded-lg border-white/20 p-4 flex items-center justify-between mt-4">
            <a class="text-sm text-gray-300 font-geist hover:text-white transition-all" href="https://www.behance.net/rzrusu">View my CV</a>
            <Icon name="uil:arrow-right" class="w-4 h-4" />
  </div>
</template>

<style scoped>
.tooltip-container {
  position: relative;
}

.tooltip {
  visibility: hidden;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 10;
}

.tooltip::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent rgba(0, 0, 0, 0.8) transparent;
}

.tooltip-container a:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
</style>


