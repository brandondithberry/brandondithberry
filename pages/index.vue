<template>
  <main>
    <section id="intro">
      <h2 class="text-6xl">I AM A</h2>
      <h1><text-cycler class="text-7xl font-normal" :items="items" /></h1>
      <div class="buttons">
        <a href="/" class="btn">View Work</a>
        <a href="/" class="btn">View Experience</a>
      </div>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
#intro {
  @apply flex w-full h-screen place-content-center place-items-center flex-col p-5 text-center;

  .buttons {
    @apply flex mt-10 gap-5;
  }
}
</style>

<script>
import textCycler from '~/components/text-cycler.vue'
export default {
  data() {
    return {
      items: [
        'Front-End Developer',
        'UX Designer',
        'Data Analyst',
        'DevOps Engineer',
        'Marketing Specialist',
        'Storyteller',
        'Songwriter',
      ],
    }
  },
  components: {
    textCycler,
  },
}
</script>