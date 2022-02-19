<template>
  <header>
    <nav>
      <ul>
        <li><a href="/work">Work</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/connect">Connect</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="postcss" scoped>
header {
  @apply flex w-full h-auto place-content-center place-items-center p-5 bottom-0 lg:top-0;

  nav ul {
    @apply flex w-full place-content-center gap-28;

    li {
      @apply text-center text-2xl;

      a {
        @apply text-gray-800 pb-2;
      }

      a:hover {
        @apply border-b-2 border-gray-800;
      }
    }
  }
}
</style>
