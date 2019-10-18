<template>
  <div
    :style="styleObject"
    class="imageContainer" >
    
    <img
      v-if="block.image !== null"
      :src="block.image.styles[0].path"
      class="image--basic">
  </div>
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
        width: `${this.block.width}vw`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.image {
  &--basic {
    width: 100%;
    height: auto;
    // object-fit: contain;
    // object-position: top;
  }
}
</style>
