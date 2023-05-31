<template>
  <header class="header">
    <div class="header-container">
      <div class="header-menu header-menu--left">
        <nav>
          <ul class="header-menu-list">
            <li><a href="/">Work</a></li>
            <li><a href="https://open.spotify.com/artist/5nJDjIy1Ge6CrUl7THNjyN" target="_blank">Music</a></li>
          </ul>
        </nav>
      </div>
      <div class="header-logo">
        <img src="img/logo.png" alt="Logo" />
      </div>
      <div class="header-menu header-menu--right">
        <nav>
          <ul class="header-menu-list">
            <li><a href="#">About</a></li>
            <li><a href="https://calendar.app.google/eAkxP4BTiRYuW8db6" target="_blank">Book A Call</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  @apply py-4;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
}

.header-container {
  @apply container mx-auto flex items-center;
}

.header-menu {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.header-menu--left {
  @apply pr-10;
  justify-content: flex-end;
}

.header-menu--right {
  @apply pl-10;
  justify-content: flex-start;
}

.header-menu-list {
  @apply flex space-x-8;
}

.header-logo img {
  width: 100%;
  height: 50px;
}
</style>
