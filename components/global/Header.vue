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
  @apply fixed flex w-full h-16 justify-center justify-items-center bg-gray-200 border-t-2 border-gray-900 z-50 opacity-0 p-4 bottom-0 lg:top-0 bg-gray-200 border-b-2;
  animation: fadeIn 1s ease 2.5s forwards;

  nav ul {
    @apply flex w-full place-content-center gap-20;

    li {
      @apply text-center text-xl;

      a {
        @apply text-gray-900;
      }

      a:hover {
        @apply text-gray-400;
      }
    }
  }
}
</style>
