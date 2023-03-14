<script setup>
import { ref } from 'vue'

import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/kC1DEEAecMcVL4Kl/scene.splinecode');


// defineProps<{ msg: string }>()

const count = ref(0)

</script>

<template>
  <section>
    <h2>Hi, I am Ine and I am a</h2>
    <!-- <spline-viewer url="https://prod.spline.design/bcYNZoMaVIqXegVi/scene.splinecode"></spline-viewer>
    <h2>and</h2>
    <spline-viewer url="https://prod.spline.design/kC1DEEAecMcVL4Kl/scene.splinecode"></spline-viewer> -->
  </section>

  <!-- <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
section {
  padding: 3rem 0;
}

h2 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
  padding: 0;
  text-align: center;
}

spline-viewer {
  width: 75vw;
  height: 230px;
  margin: -1rem auto;
  position: relative;
}

spline-viewer:last-of-type {
  height: 290px;
  margin-top: -3rem;
}

spline-viewer::before {
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
