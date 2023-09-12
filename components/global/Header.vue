<template>
  <header class="header">
    <div class="header-container">
      <div class="header-logo">
        <NuxtLink to="/"><img src="img/logo.png" alt="Logo" /></NuxtLink>
      </div>
      <div class="header-menu">
        <nav>
          <ul class="header-menu-list">
            <li><NuxtLink to="/">Work</NuxtLink></li>
            <li><NuxtLink to="music">Music</NuxtLink></li>
            <li><NuxtLink to="about">About</NuxtLink></li>
            <li><a href="https://linkedin.com/in/brandondithberry" target="_blank">LinkedIn</a></li>
          </ul>
        </nav>
      </div>
      <div class="header-cta">
        <a class="btn" href="https://internal.zeni.ai/meetings/bdb/ext-30" target="_blank">Book a Call</a>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  @apply p-4 text-xl;

  .header-container {
    @apply flex max-w-screen-lg place-content-between place-items-stretch mx-auto;
  }

  .header-logo {
    @apply flex;

    img {
      width: 70px;
      height: auto;
    }
  }

  .header-menu {
    display: none;
    place-content: center;
    align-items: center;

    .header-menu-list {
      display: flex;

      li:not(:last-child) {
        margin-right: 3rem;
      }
    }
  }

  .header-cta {
    @apply flex text-lg;
  }

  @media (min-width: 768px) {
    .header-menu {
      display: flex;
    }
  }
}
</style>
