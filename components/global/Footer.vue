<template>
  <footer class="footer">
    <section class="cta">
      <div class="container">
        <h2>Have a project in mind?</h2>
        <h4>
          I'd love to chat and hear more about it. Use the button below to schedule a 30-minute discovery. I look
          forward to meeting you!
        </h4>
        <!-- Google Calendar Appointment Scheduling begin -->
        <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
        <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
        <script>
          ;(function () {
            var target = document.currentScript
            window.addEventListener('load', function () {
              calendar.schedulingButton.load({
                url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3nI0ryGoKuNTMJaq4MRPeN-ctCA-yz07boQCl5FiDm2CaJlLHi-n1KoIfH-9H6X3YcubilgpCh?gv=true',
                color: '#ffffff',
                label: 'Book A Call',
                target,
              })
            })
          })()
        </script>
        <!-- end Google Calendar Appointment Scheduling -->
      </div>
    </section>
    <div class="container mx-auto">
      <p class="text-center text-gray-500">
        © 2023 Brandon Dith-Berry. All rights reserved. |
        <a href="https://linkedin.com/in/brandondithberry" target="_blank">Connect on LinkedIn</a>
      </p>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.footer {
  @apply py-8 bg-black text-white;

  .cta {
    @apply flex flex-col text-center py-28 w-full h-full place-content-center items-center;

    .container {
      @apply max-w-screen-sm;
    }

    h4 {
      @apply pb-8;
    }
  }

  p,
  a {
    @apply text-white !important;
  }
}
</style>
