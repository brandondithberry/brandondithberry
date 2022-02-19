<template>
  <span v-text="currentText"></span>
</template>
<script>
export default {
  name: 'text-cycler',
  data() {
    const self = this
    setInterval(() => {
      self.currentIndex = ++self.currentIndex % self.items.length
    }, self.delay)
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
      default: 2000,
    },
    stop: {
      default: false,
    },
  },
}
</script>