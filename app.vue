<template>
  <div class="max-w-full lg:max-w-3xl mx-auto py-24 px-4 lg:px-0 overflow-x-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-6 gap-12">
      <div class="col-span-6 lg:col-span-2 text-white">
        <UserBar />
      </div>
      <div class="col-span-6 lg:col-span-4 text-white space-y-8">
        <div class="space-y-4">
          <h1 class="text-2xl font-bold font-instrument">featured projects</h1>
          <div class="border border-white/20 rounded-lg w-full">
            <Project title="My Football Career" img="/logos/mfc-logo.png" description="Mobile football career simulation game, in development" :isLast="false" :links="[{ icon: 'uil:link', url: 'https://footballcareer.app' }]" />
            <!-- <Project title="updateharbor.com" img="/logos/uh-logo.png" description="Open-source static release notes" :isLast="false" :links="[{ icon: 'uil:github', url: 'https://github.com/updateharbor/updateharbor' }]" /> -->
            <Project title="gitreleasenotes.io" img="/logos/grn-logo.png" description="Generate release notes from GitHub commit history" :isLast="true" :links="[{ icon: 'uil:link', url: 'https://gitreleasenotes.com' }]" />
            <!-- <Project title="myspecs.io" img="/logos/ms-logo.png" description="Your computer's social media profile" :isLast="true" :links="[{ icon: 'uil:link', url: 'https://myspecs.io' }]" /> -->
          </div>
        </div>
        <div class="space-y-4">
          <h1 class="text-2xl font-bold font-instrument">featured freelance work</h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FreelanceProject title="Sparked Host" img="/sparked.webp" description="Website Design" link="https://sparkedhost.com" />
            <FreelanceProject title="EasyMinecraftHosting" img="/emh.webp" description="Website Design" link="https://easyminecrafthosting.com" />
            <FreelanceProject title="Modern Hosting" img="/modern.webp" description="Website Design" link="https://modernhosting.com" />
            <FreelanceProject title="Data Wagon" img="/datawagon.webp" description="Website Design" link="https://datawagon.com" />
          </div>
          <div class="border rounded-lg border-white/20 p-4 flex items-center justify-between">
            <a class="text-sm text-gray-300 font-geist hover:text-white transition-all" href="https://www.behance.net/rzrusu">View all my work on Behance</a>
            <Icon name="uil:arrow-right" class="w-4 h-4" />
          </div>
        </div>
        <div class="space-y-4">
          <h1 class="text-2xl font-bold font-instrument">connect with me</h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="spotify-button border rounded-lg border-white/20 p-4 flex items-center justify-between hover:border-green-500 hover:bg-green-500/10 transition-all">
              <a class="text-sm text-gray-300 font-geist hover:text-white transition-all flex items-center gap-3" href="https://open.spotify.com/user/iwkw0teuznz322vtae4pulfnc" target="_blank">
                <Icon name="uil:music" class="w-5 h-5 text-green-500" />
                see what I'm listening to
              </a>
              <Icon name="uil:external-link-alt" class="w-4 h-4" />
            </div>
            <div class="discord-button border rounded-lg border-white/20 p-4 flex items-center justify-between hover:border-indigo-500 hover:bg-indigo-500/10 transition-all">
              <div class="tooltip-container">
                <div class="text-sm text-gray-300 font-geist hover:text-white transition-all flex items-center gap-3 relative cursor-pointer">
                  <Icon name="uil:discord" class="w-5 h-5 text-indigo-500" />
                  let's chat
                  <span class="tooltip">rusuu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h1 class="text-2xl font-bold font-instrument">other projects</h1>
          <div class="border border-white/20 rounded-lg w-full">
            <Project title="Sound Bubbles" img="/logos/sb-logo.png" description="Visualize artist albums in an interactive way" :isLast="false" :links="[{ icon: 'uil:github', url: 'https://github.com/rzrusu/songbubbles' }]" />
            <Project title="Singleplayer Roleplay UCP" img="/logos/sprp-logo.png" description="Multiplayer game user control panel" :isLast="true" :links="[{ icon: 'uil:github', url: 'https://github.com/rzrusu/SPRP-UCP' }]" />
          </div>
        </div>
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"> 
          <p class="text-sm text-gray-400 font-instrument">This portfolio is open source. <a href="https://github.com/rzrusu/portfolio" class="text-blue-500 hover:text-blue-600 transition-all">View the source code</a></p>
          <p class="text-sm text-gray-400 font-instrument">© <a href="https://github.com/rzrusu" class="underline">rzrusu</a> 2025</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
  body {
    background-color: #07090E;
    background-image: url('~/assets/backgrounds/bg.png');
    background-repeat: no-repeat;
    background-position: top center;
    background-attachment: fixed;
    background-size: contain;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

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

  .tooltip-container a:hover .tooltip,
  .tooltip-container div:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
</style>