<template>
  <div class="max-w-3xl mx-auto py-24">
    <div class="grid grid-cols-6 gap-12">
      <div class="col-span-2 text-white">
        <UserBar />
      </div>
      <div class="col-span-4 text-white">
        <div class="space-y-4">
          <h1 class="text-2xl font-bold font-instrument">currently working on</h1>
          <div class="border border-white/20 rounded-lg">
            <Project title="updateharbor.com" img="/logos/uh-logo.png" description="Open-source static release notes" :isLast="false" :links="[{ icon: 'uil:github', url: 'https://github.com/updateharbor/updateharbor' }]" />
            <Project title="swiftlogs.io" img="/logos/sl-logo.png" description="Generate release notes from GitHub commit history" :isLast="false" :links="[{ icon: 'uil:link', url: 'https://swiftlogs.io' }]" />
            <Project title="myspecs.io" img="/logos/ms-logo.png" description="Your computer's social media profile" :isLast="true" :links="[{ icon: 'uil:link', url: 'https://myspecs.io' }]" />
          </div>
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
  }
</style>