<template>
    <section>
        <h2>Hi, I am Ine and I am a</h2>
        <!-- <canvas ref="canvas1"></canvas> -->
        <spline-viewer url="https://prod.spline.design/bcYNZoMaVIqXegVi/scene.splinecode"></spline-viewer>
        <h2>and</h2>
        <!-- <canvas ref="canvas2"></canvas> -->
        <spline-viewer url="https://prod.spline.design/kC1DEEAecMcVL4Kl/scene.splinecode"></spline-viewer>
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

  spline-viewer {
    max-width: 75vw;
    max-height: 14rem;
    height: 14rem;
    margin: -1rem auto;
    position: relative;
  }

  spline-viewer:last-of-type {
    max-height: 20rem;
    height: 20rem;
    margin-top: -5rem;
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