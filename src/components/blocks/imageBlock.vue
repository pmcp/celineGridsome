<template>
  <div
    :style="styleObject"
    class="imageContainer" >
    
    <img
      v-if="block.image !== null"
      :src="'http://celinedscms.friendlyinter.net/storage/uploads/' + block.image.path"
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
        width: `${this.block.width}%`
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
