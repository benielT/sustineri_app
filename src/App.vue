<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  data() {
    return {
      width: 1920,
      height: 1080,
    }
  },

  mounted() {
    const maintainAspectRatio = () => {
      const designResolution = {
        x: parseInt(this.width),
        y: parseInt(this.height),
      }
      const designAspectRatio = designResolution.x / designResolution.y

      const currentResolution = {
        x: window.innerWidth,
        y: window.innerHeight,
      }
      const currentAspectRatio = currentResolution.x / currentResolution.y

      const isCurrentAspectRatioGreater =
        currentAspectRatio >= designAspectRatio

      const scale = {
        x:
          (isCurrentAspectRatioGreater
            ? currentResolution.y * designAspectRatio
            : currentResolution.x) / designResolution.x,
        y:
          (isCurrentAspectRatioGreater
            ? currentResolution.y
            : currentResolution.x / designAspectRatio) /
          designResolution.y,
      }

      // center
      const top = (currentResolution.y - this.height) / 2
      const left = (currentResolution.x - this.width) / 2

      const app = document.getElementById('app')
      app.style.width = `${this.width}px`
      app.style.height = `${this.height}px`
      app.style.marginTop = `${top}px`
      app.style.marginLeft = `${left}px`
      app.style.transform = `scale(${scale.x}, ${scale.y})`
    }

    window.addEventListener('load', maintainAspectRatio)
    window.addEventListener('resize', maintainAspectRatio)
  },
}
</script>

<style>
@font-face {
  font-family: 'Bebas Neue-Regular';
  src: url("@/assets/fonts/BebasNeue-Regular.ttf");
}

@font-face {
  font-family: 'Oswald-Light';
  src: url('@/assets/fonts/Oswald-Light.ttf');
}

@font-face {
  font-family: 'Oswald-Regular';
  src: url('@/assets/fonts/Oswald-Regular.ttf');
}

button {
  cursor: pointer;
}
</style>
