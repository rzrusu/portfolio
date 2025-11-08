<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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