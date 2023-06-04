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
        <!-- Google Calendar Appointment Scheduling begin -->
        <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
        <script>
          ;(function () {
            var target = document.currentScript
            window.addEventListener('load', function () {
              calendar.schedulingButton.load({
                url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3nI0ryGoKuNTMJaq4MRPeN-ctCA-yz07boQCl5FiDm2CaJlLHi-n1KoIfH-9H6X3YcubilgpCh?gv=true',
                color: '#000000',
                label: 'Book A Call',
                target,
              })
            })
          })()
        </script>
        <!-- end Google Calendar Appointment Scheduling -->
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
