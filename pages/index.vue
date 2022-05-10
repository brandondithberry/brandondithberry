<template>
  <main>
    <section id="intro">
      <div class="box">
        <h1><b>Hi, I'm Brandon Dith-Berry</b></h1>
        <h1><a href="https://www.origin63.com/" target="_blank">Senior HubSpot Consultant</a> • Front-End Developer • <a href="https://www.youtube.com/watch?v=IUrvnLDrrf0" target="_blank">Ark Creative Songwriter</a> • Alesian Apparel Founder • Husband & Father</h1>
      </div>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
main {
  scroll-snap-type: y mandatory;
}

#intro {
  @apply flex w-full h-[100vh] place-content-center place-items-center flex-col p-5 text-center z-30;
  scroll-snap-align: start;

  .box {
    @apply flex max-w-[1100px] flex-col place-content-center place-items-center;
  }

  h1 {
    opacity: 0;
    animation: fadeIn 1s ease 1s forwards;
  }

  .down {
    @apply absolute bottom-10 px-2 text-gray-900 border-2 border-gray-900 rounded-full;
    opacity: 0;
    animation: fadeIn 1s ease 2s forwards;

    span {
      @apply block text-[2rem];
      transform: translateY(20%);
      animation: bounce 4s ease 4s alternate-reverse infinite;
    }
  }
}

#story {
  @apply flex w-full h-auto place-content-center place-items-center flex-col text-center py-28 px-10;
  scroll-snap-align: start;

  p {
    @apply text-lg max-w-xl pb-8;
  }

  .buttons {
    @apply flex w-full max-w-xl place-content-center place-items-center gap-6;

    .btn {
      @apply w-1/2;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        'Business Consultant',
        'Front-End Developer',
        'Ark Creative Songwriter',
        'Husband & Father'
      ],
    }
  },
}
</script>