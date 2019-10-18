<template>
  <div
    :style="styleObject"
    v-html="block.text"
    :class="classObject" />
    
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
        width: `${this.block.width}%`
      }
    },
    classObject() {
      if(this.block.caption) return 'text--caption'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
