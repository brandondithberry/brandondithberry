<template>
  <main>
    <section class="hero-banner">
      <h1 class="hero-text">Hi, I'm Brandon Dith-Berry</h1>
      <h3>
        <a class="underline" href="https://zeni.ai" target="_blank">zeni</a> revops manager, freelance marketing
        specialist & music producer/songwriter
      </h3>
    </section>
    <section class="portfolio-grid" id="work">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="item item-1 h-[50rem]">
          <a href="https://thegaragerentals.com" target="_blank">
            <h4 class="caption">the garage rentals website →</h4>
          </a>
        </div>
        <div class="grid">
          <div class="item item-2">
            <a href="https://applepierepair.com" target="_blank">
              <h4 class="caption">apple pie repair website →</h4>
            </a>
          </div>
          <div class="item item-3">
            <a href="https://genpluswv.com" target="_blank">
              <h4 class="caption">generators plus website →</h4>
            </a>
          </div>
        </div>
        <div class="grid">
          <div class="quote">
            <blockquote>
              <h4>
                "We have had nothing but the very best experiences with Brandon. He has built a few sites for us, and
                he's always been on top of it."
              </h4>
            </blockquote>
            <figcaption>
              <p>Steve Giralt, Owner</p>
              <img src="img/thegaragelogo.png" alt="The Garage Logo" width="120" />
            </figcaption>
          </div>
          <div class="item item-4">
            <a
              href="https://www.behance.net/gallery/106024503/Cornerstone-Maine-Brand-Identity-Design-Website"
              target="_blank"
            >
              <h4 class="caption">cornerstone brand design →</h4>
            </a>
          </div>
        </div>
        <div class="item item-5 h-[50rem]">
          <a href="https://zealhouse.church" target="_blank">
            <h4 class="caption">zealhouse logo design →</h4>
          </a>
        </div>
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

.portfolio-grid {
  @apply text-white;

  a {
    @apply absolute text-white w-full h-full;
  }

  .item {
    @apply p-6 saturate-0;
    background-size: cover;
    background-position: center center;
    transition: filter 0.4s ease;
  }

  .item:hover {
    @apply saturate-100;
  }

  .item-1 {
    background-image: url(./static/img/bolt.jpg);
  }

  .item-2 {
    background-image: url(./static/img/desk.jpg);
  }

  .item-3 {
    background-image: url(./static/img/genplus.jpg);
  }

  .item-4 {
    background-image: url(./static/img/cornerstone.jpg);
  }

  .item-5 {
    background-image: url(./static/img/zealhouse.jpg);
  }
}

.quote {
  @apply flex flex-col px-[12%] bg-gray-200 text-black place-content-center;

  h4 {
    font-size: 1.4rem;
    line-height: 150%;
  }

  p {
    @apply font-semibold pt-4;
    font-size: 1.25rem;
  }
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
