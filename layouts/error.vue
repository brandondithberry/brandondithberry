<template>
  <main>
    <section class="flex flex-col place-content-center items-center py-28 px-6">
      <template v-if="error.statusCode === 404">
        <h1>😱 Oops! You discovered a broken link.</h1>
        <h3>Psst, this is a 400 error by the way.</h3>
      </template>
      <template v-else>
        <h1 class="title">😱 Oops! You discovered a broken link.</h1>
      </template>
      <nav class="mt-12" aria-label="go to home">
        <NuxtLink to="/" class="btn">Go Back</NuxtLink>
      </nav>
    </section>
  </main>
</template>

<script>
export default {
  name: 'error',
  props: ['error'],
}
</script>
