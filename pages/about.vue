<template>
  <main>
    <section class="hero-banner">
      <div class="hero-text">
        <h1 class="font-semibold">About Me</h1>
        <h3 class="hero-title">
          Hi, my name's Brandon Dith-Berry. I'm a first-generation Cambodian-American, originally from Southern Maine,
          currently living near Houston, Texas.
        </h3>
      </div>
    </section>
    <section class="more">
      <div class="container">
        <p>
          I started developing websites in high school. One of my clients during that time was a creative agency. They
          liked my work so much that they hired me when I gradutated. For that reason I never went to university and
          have been self taught ever since.<br /><br />Life in Maine was difficult. It's very expensive to live there
          and I needed to provide for my baby and my wife. I took a job in Texas as a Senior IT Engineer at a $100M
          trailer manufacturing company. That's where I got my feet wet in revenue operations and CRM implementation
          with HubSpot.<br /><br />Because of my HubSpot knowledge and technical development capabilities, I was hired
          as one of the first RevOps Developers at RevPartners, an Elite HubSpot Partner Agency. That's a long way of
          saying they were and still are one of the best in the business. I was responsible for spearheading complex
          technical solutions for common business operations challenges by building advanced automations.<br /><br />A
          rival agency poached me and hired me as a Senior Consultant where I helped startups to corportations implement
          revenue operations using HubSpot. That actually didn't go too well and I within 7 months I left to join where
          I am now, as the Manager of Revenue Operations at Zeni.<br /><br />I now live in Conroe, TX with my wife and 2
          girls and another little one on the way. I still provide freelance marketing services on the side and I write
          and produce music with my church, ZEALHOUSE. I also produce and write my own music under the moniker
          Bravier.<br /><br />I love meeting new people and collaborating to make visions come to life. Solving complex
          challenges has been my forte for many years. I've enjoyed this journey and I can't wait to see what we can do
          together!
        </p>
      </div>
    </section>
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
                color: '#000000',
                label: 'Book A Call',
                target,
              })
            })
          })()
        </script>
        <!-- end Google Calendar Appointment Scheduling -->
      </div>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
.hero-banner {
  @apply py-28 flex flex-col items-center justify-center text-center;

  .hero-text {
    @apply max-w-screen-md;
  }

  .hero-title {
    @apply text-4xl;
  }
}

.more {
  @apply flex flex-col place-content-center items-center;

  .container {
    @apply max-w-screen-sm text-center;

    p {
      font-size: 1.2rem;
    }
  }
}

.cta {
  @apply flex flex-col text-center py-28 w-full h-full place-content-center items-center;

  .container {
    @apply max-w-screen-sm;
  }

  h4 {
    @apply pb-8;
  }
}
</style>
