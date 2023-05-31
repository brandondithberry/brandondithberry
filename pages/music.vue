<template>
  <main>
    <section class="hero-banner">
      <h1 class="hero-text">Music Producer / Songwriter</h1>
      <h3>for <a href="https://zealhouse.church" target="_blank">ZEALHOUSE Worship</a> & solo as Bravier</h3>
    </section>
    <section class="spotify">
      <div class="container">
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/artist/5nJDjIy1Ge6CrUl7THNjyN?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
    <section class="music-video">
      <div class="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/IUrvnLDrrf0"
          title="Space | Zealhouse Worship"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
.hero-banner {
  @apply py-28 flex flex-col items-center justify-center;
}

.hero-text {
  @apply text-6xl;
}

.spotify {
  @apply flex flex-col place-content-center items-center pb-20;
  .container {
    @apply flex max-w-screen-md m-auto;
  }
}

.music-video {
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cta {
  @apply flex flex-col text-center py-28 w-full h-full place-content-center items-center;

  .container {
    @apply max-w-screen-sm;
  }

  h4 {
    @apply pb-8;
  }
}
</style>
