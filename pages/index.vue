<template>
  <main>
    <section id="intro">
      <h2 class="text-6xl">I AM A</h2>
      <h1><text-cycler class="text-7xl font-normal" :items="items" /></h1>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
#intro {
  @apply flex w-full h-screen place-content-center place-items-center flex-col;

  h1,
  h4 {
    @apply block;
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
        'Business Consultant',
        'Marketing Specialist',
      ],
    }
  },
  components: {
    textCycler,
  },
}
</script>