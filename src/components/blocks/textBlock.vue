<template>
  <div
    :style="styleObject"
    v-html="block.text" />
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    styleObject() {
      if(!this.block.width) this.block.width = 100
      return {
        width: `${this.block.width}vw`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
