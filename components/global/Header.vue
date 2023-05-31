<template>
  <header class="header">
    <div class="header-container">
      <div class="header-logo">
        <img src="img/logo.png" alt="Logo" />
      </div>
      <div class="header-menu">
        <nav>
          <ul class="header-menu-list">
            <li><NuxtLink to="/">Featured Work</NuxtLink></li>
            <li><a href="https://behance.net/brandondithberry" target="_blank">Design</a></li>
            <li><NuxtLink to="music">Music</NuxtLink></li>
            <li><NuxtLink to="about">About</NuxtLink></li>
            <li><a href="https://linkedin.com/in/brandondithberry" target="_blank">LinkedIn</a></li>
          </ul>
        </nav>
      </div>
      <div class="header-cta">
        <!-- Google Calendar Appointment Scheduling begin -->
        <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
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
  @apply py-6 bg-white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
}

.header-container {
  @apply container mx-auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-menu {
  @apply flex place-content-center items-center;
}

.header-menu-list {
  @apply flex space-x-8;
}

.header-logo img {
  width: 100%;
  height: 50px;
}
</style>
