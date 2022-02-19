<template>
  <span v-text="currentText"></span>
</template>
<script>
export default {
  name: 'text-cycler',
  data() {
    setInterval(() => {
      this.currentIndex = ++this.currentIndex % this.items.length
    }, this.delay)
    return { currentIndex: 0 }
  },
  computed: {
    currentText() {
      if (!this.stop) {
        return this.items[this.currentIndex]
      }
    },
  },
  props: {
    items: {
      default: ['No items passed to text-cycler. The items prop was null or undefined'],
    },
    delay: {
      default: 1500,
    },
    stop: {
      default: false,
    },
  },
}
</script>