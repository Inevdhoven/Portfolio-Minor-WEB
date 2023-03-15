<script setup>
import { onMounted, ref } from 'vue'
import { Application } from '@splinetool/runtime';

// const canvas1 = ref(null);
// const canvas2 = ref(null);

// onMounted(() => {
//   const app1 = new Application(canvas1.value);
//   app1.load('https://prod.spline.design/bcYNZoMaVIqXegVi/scene.splinecode');
//   const app2 = new Application(canvas2.value);
//   app2.load('https://prod.spline.design/kC1DEEAecMcVL4Kl/scene.splinecode');
// });

</script>

<template>
  <section>
    <h2>Hi, I am Ine and I am a</h2>
    <!-- <canvas ref="canvas1"></canvas> -->
    <h2>and</h2>
    <!-- <canvas ref="canvas2"></canvas> -->
  </section>
</template>

<style scoped>
  section {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  canvas {
    max-width: 75vw;
    max-height: 14rem;
    margin: -1rem auto;
    position: relative;
  }

  canvas:last-of-type {
    max-height: 290px;
    margin-top: -3rem;
  }

  canvas::before {
    content: '';
    width: 10rem;
    height: 2.5rem;
    background: hsl(0, 0%, 14%);
    position: absolute;
    right: 0;
    bottom: 1rem;
    z-index: 3;
  }
</style>
