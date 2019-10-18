<template>
  <div :style="styleObject" />
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
      return {
        height: this.block.height + 'vw',
        width: '100%'
      }
    }
  }
}
</script>
