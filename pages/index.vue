<template>
  <main>
    <section id="intro">
      <div class="box">
        <h1><b>Hi, I'm Brandon Dith-Berry</b></h1>
        <h1>
          <span v-for="item in items" :key="item">{{ item }} · </span>
        </h1>
      </div>
      <a href="#story" class="down"><span>•</span></a>
    </section>
    <section id="story">
      <p>
        I’m what some would call...a unicorn. What’s a “unicorn” you might ask? According to Webster’s Dictionary
        definition: <i>something unusual, rare, or unique.</i><br /><br />I was hired by a creative agency right out of
        high school, worked as a crisis stablization counselor for a time, become the Senior IT Engineer at a large
        manufacturing corporation, ran the marketing for a well known health bread company, lead the production team for
        a mobile church, and now I'm a DevOps/RevOps developer and technologist at one of the top RevOps companies in
        the nation...all without a degree.<br /><br />How did I get here? What's my work like? Am I just a "Jack of all
        trades, master of none"?
      </p>
      <div class="buttons">
        <a href="#experience" class="btn">View Work</a>
        <a href="#experience" class="btn">View Experience</a>
      </div>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
main {
  scroll-snap-type: y mandatory;
}

#intro {
  @apply flex w-full h-[100vh] place-content-center place-items-center flex-col p-5 text-center z-30;
  scroll-snap-align: start;

  .box {
    @apply flex max-w-[1100px] flex-col place-content-center place-items-center;
  }

  h1 {
    opacity: 0;
    animation: fadeIn 1s ease 1s forwards;
  }

  .down {
    @apply absolute bottom-10 px-2 text-gray-900 border-2 border-gray-900 rounded-full;
    opacity: 0;
    animation: fadeIn 1s ease 2s forwards;

    span {
      @apply block text-[2rem];
      transform: translateY(20%);
      animation: bounce 4s ease 4s alternate-reverse infinite;
    }
  }
}

#story {
  @apply flex w-full h-auto place-content-center place-items-center flex-col text-center py-28 px-10;
  scroll-snap-align: start;

  p {
    @apply text-lg max-w-xl pb-8;
  }

  .buttons {
    @apply flex w-full max-w-xl place-content-center place-items-center gap-6;

    .btn {
      @apply w-1/2;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        'Front-End Developer',
        'UX Designer',
        'Data Analyst',
        'DevOps Engineer',
        'Marketing Specialist',
        'Storyteller',
        'Songwriter',
      ],
    }
  },
}
</script>