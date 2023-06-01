<template>
  <main>
    <section class="hero-banner">
      <h1 class="hero-text">Hi, I'm Brandon Dith-Berry</h1>
      <h3>
        <a class="underline" href="https://zeni.ai" target="_blank">Zeni</a> RevOps Manager, Freelance Marketing
        Specialist & Music Producer/Songwriter
      </h3>
    </section>
    <section class="portfolio">
      <div class="grid">
        <div class="grid-item">
          <div class="item item-1">
            <a href="https://thegaragerentals.com" target="_blank">
              <h4 class="caption">The Garage Rentals Website →</h4>
            </a>
          </div>
        </div>
        <div class="grid-item">
          <div class="item item-2">
            <a href="https://applepierepair.com" target="_blank">
              <h4 class="caption">Apple Pie Repair Website →</h4>
            </a>
          </div>
          <div class="item item-3">
            <a href="https://genpluswv.com" target="_blank">
              <h4 class="caption">Generators Plus Website →</h4>
            </a>
          </div>
        </div>
        <div class="grid-item">
          <div class="item item-4">
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
          <div class="item item-5">
            <a
              href="https://www.behance.net/gallery/106024503/Cornerstone-Maine-Brand-Identity-Design-Website"
              target="_blank"
            >
              <h4 class="caption">Cornerstone Brand Design →</h4>
            </a>
          </div>
        </div>
        <div class="grid-item">
          <div class="item item-6">
            <a href="https://zealhouse.church" target="_blank">
              <h4 class="caption">ZEALHOUSE Logo Design →</h4>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
.hero-banner {
  @apply py-28 px-6 flex flex-col items-center justify-center text-center;
}

.hero-text {
  @apply text-6xl;
  line-height: 125%;
}

h3 {
  line-height: 150%;
}

.portfolio {
  .grid {
    @apply grid-cols-1 md:grid-cols-2;
    display: grid;

    .grid-item {
      height: 50rem;
    }

    a {
      @apply absolute text-white w-full h-full p-8;
      left: 0;
      top: 0;
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
      height: 100%;
    }

    .item-2 {
      background-image: url(./static/img/desk.jpg);
      height: 50%;
    }

    .item-3 {
      background-image: url(./static/img/genplus.jpg);
      height: 50%;
    }

    .item-4 {
      @apply flex flex-col px-[12%] bg-gray-200 text-black place-content-center;
      height: 50%;

      h4 {
        font-size: 1.4rem;
        line-height: 150%;
      }

      p {
        @apply font-semibold pt-4;
        font-size: 1.25rem;
      }
    }
    .item-5 {
      background-image: url(./static/img/cornerstone.jpg);
      height: 50%;
    }
    .item-6 {
      background-image: url(./static/img/zealhouse.jpg);
      height: 100%;
    }
  }
}
</style>
