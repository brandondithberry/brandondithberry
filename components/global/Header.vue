<template>
  <header>
    <nav>
      <ul>
        <li><a href="/work">Work</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="email:brandondithberry@gmail.com">Connect</a></li>
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
  @apply absolute place-content-center place-items-center p-5 w-full;

  nav {
    @apply flex text-center place-content-center place-items-stretch w-full;
  }

  nav ul {
    @apply flex w-full text-center text-lg place-items-stretch;

    li {
      @apply w-1/3 text-2xl;
    }
  }
}
</style>
