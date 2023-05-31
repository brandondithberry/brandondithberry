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
    <section class="cta">
      <div class="container">
        <h2>Have a project in mind?</h2>
        <h4>
          I'd love to chat and hear more about it. Use the button below to schedule a 30-minute discovery. I look
          forward to meeting you!
        </h4>
        <!-- Google Calendar Appointment Scheduling begin -->
        <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
        <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
        <script>
          ;(function () {
            var target = document.currentScript
            window.addEventListener('load', function () {
              calendar.schedulingButton.load({
                url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3nI0ryGoKuNTMJaq4MRPeN-ctCA-yz07boQCl5FiDm2CaJlLHi-n1KoIfH-9H6X3YcubilgpCh?gv=true',
                color: '#000000',
                label: 'Book A Call',
                target,
              })
            })
          })()
        </script>
        <!-- end Google Calendar Appointment Scheduling -->
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
