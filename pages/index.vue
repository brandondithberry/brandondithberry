<template>
  <main>
    <section class="hero-banner">
      <h1 class="hero-text">Hi, I'm Brandon Dith-Berry</h1>
      <h3>
        <a class="underline" href="https://zeni.ai" target="_blank">Zeni</a> RevOps Manager, Freelance Marketing
        Specialist & Music Producer/Songwriter
      </h3>
      <div class="btns">
        <NuxtLink class="btn" to="music">View Music</NuxtLink>
        <NuxtLink class="btn" to="about">Learn More</NuxtLink>
      </div>
    </section>
    <section class="portfolio">
      <div class="grid">
        <div class="grid-item">
          <a href="https://thegaragerentals.com" target="_blank">
            <div class="item item-bolt">
              <h4 class="caption">The Garage Rentals Website →</h4>
            </div>
          </a>
        </div>
        <div class="grid-item">
          <a href="https://applepierepair.com" target="_blank">
            <div class="item item-desk">
              <h4 class="caption">Apple Pie Repair Website →</h4>
            </div>
          </a>
          <a href="https://genpluswv.com" target="_blank">
            <div class="item item-genplus">
              <h4 class="caption">Generators Plus Website →</h4>
            </div>
          </a>
        </div>
        <div class="grid-item">
          <div class="item item-quote">
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
          <a
            href="https://www.behance.net/gallery/106024503/Cornerstone-Maine-Brand-Identity-Design-Website"
            target="_blank"
          >
            <div class="item item-cornerstone">
              <h4 class="caption">Cornerstone Brand Design →</h4>
            </div>
          </a>
        </div>
        <div class="grid-item">
          <a href="https://zealhouse.church" target="_blank">
            <div class="item item-zealhouse">
              <h4 class="caption">ZEALHOUSE Logo Design →</h4>
            </div>
          </a>
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
  h4 {
    @apply text-white;
  }

  .grid {
    @apply flex flex-wrap;
  }

  .grid-item {
    @apply w-full md:w-1/2;
    height: 50rem;
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

  .item-bolt {
    background-image: url(./static/img/bolt.jpg);
    height: 100%;
  }

  .item-desk {
    background-image: url(./static/img/desk.jpg);
    height: 50%;
  }

  .item-genplus {
    background-image: url(./static/img/genplus.jpg);
    height: 50%;
  }

  .item-quote {
    @apply flex flex-col px-[12%] bg-gray-200 text-black place-content-center;
    height: 50%;

    h4 {
      @apply text-black !important;
      font-size: 1.4rem;
      line-height: 150%;
    }

    p {
      @apply font-semibold pt-4;
      font-size: 1.25rem;
    }
  }

  .item-cornerstone {
    background-image: url(./static/img/cornerstone.jpg);
    height: 50%;
  }

  .item-zealhouse {
    background-image: url(./static/img/zealhouse.jpg);
    height: 100%;
  }
}
</style>
