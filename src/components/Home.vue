<template>
    <section>
        <div>
            <h2>Hi, I am Ine and I am a</h2>
            <!-- <canvas ref="canvas1"></canvas> -->
            <spline-viewer url="https://prod.spline.design/bcYNZoMaVIqXegVi/scene.splinecode"></spline-viewer>
            <h2>Designer</h2>
            <h2>and</h2>
            <!-- <canvas ref="canvas2"></canvas> -->
            <spline-viewer url="https://prod.spline.design/kC1DEEAecMcVL4Kl/scene.splinecode"></spline-viewer>
            <h2><span>&#60;</span>Developer<span>/&#62;</span></h2>
        </div>
    </section>
</template>

<style scoped>
  section {
    min-height: calc(100dvh - 8dvh);
  }

  div {
    min-height: calc(100dvh - 10em);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div::before {
    content: '';

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background: 
    radial-gradient(circle at 10% 10%, rgba(228, 23, 169, 1) 0%, rgba(228, 23, 169, 0) 6rem), 
    radial-gradient(circle at 40% 90%, rgba(42, 255, 96, 1) 0%, rgba(42, 255, 96, 0) 6rem),
    radial-gradient(circle at 90% 40%, rgba(0, 244, 254, 1) 0%, rgba(0, 244, 254, 0) 6rem);
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin: 3cqi 0;
    padding: 0;
    text-align: center;
  }

  h2:nth-of-type(2),
  h2:nth-of-type(4) {
    margin: 0;
    font-size: 16cqi;
  }

  h2:nth-of-type(2) {
    /* background: linear-gradient(90deg, #E417A9, #AC95FF, #00F4FE, #2AFF60, #FFF200, #FF8612);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent; */

    font-family: 'Lobster Two', cursive;
    font-weight: 400;
    color: var(--code-purple);
  }

  h2:nth-of-type(4) {
    font-weight: 600;
    color: var(--code-red);
  }

  h2:nth-of-type(4) span {
    color: var(--code-blue);
  }

  spline-viewer {
    max-width: 65cqi;
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

  @container section (min-width: 38em) {
    div::before {
        z-index: 4;

        background: 
        radial-gradient(circle at 10% 15%, rgba(228, 23, 169, 1) 0%, rgba(228, 23, 169, 0) 6rem), 
        radial-gradient(circle at 80% 15%, rgba(162, 112, 233, 1) 0%, rgba(162, 112, 233, 0) 6rem),
        radial-gradient(circle at 20% 50%, rgba(0, 244, 254, 1) 0%, rgba(0, 244, 254, 0) 6rem),
        radial-gradient(circle at 5% 99%, rgba(42, 255, 96, 1) 0%, rgba(42, 255, 96, 0) 6rem),
        radial-gradient(circle at 95% 60%, rgba(255, 242, 0, 1) 0%, rgba(255, 242, 0, 0) 6rem),
        radial-gradient(circle at 65% 90%, rgba(255, 134, 18, 1) 0%, rgba(255, 134, 18, 0) 6rem)
    }

    spline-viewer {
        max-width: 100cqi;
        display: block;
    }

    h2:nth-of-type(even) {
        display: none;
    }
  }

  @container section (min-width: 71em) {
    spline-viewer {
        max-width: 55cqi;
    }
  }
</style>