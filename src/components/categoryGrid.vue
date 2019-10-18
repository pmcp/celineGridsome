<template>
  <main class="grid__wrapper cf ph4-m ph5-l mw9 w-100 center">
    <ul>
      <li
        v-for="edge in gridItems"
        :key="edge.node.id"
        class="font-gridItem ttu flex w-33 justify-center items-center tc">
          <a :href="edge.node.linkedArticle.slug">
            <span v-if="edge.node.titleInGrid">{{edge.node.titleInGrid }}</span>
            <!-- <span v-if="edge.node.titleInGrid" v-bind:html="edge.node.titleInGrid"></span> -->
            <span v-else> {{ edge.node.name }}</span>
          </a>
        </li>
    </ul>
  </main>
</template>
<script>
export default {
  props: {
    gridItems: {
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  margin: 10px auto;
  width: 100%;
  list-style-type: none;
  display: table; /* to contain floats */
}

li {
  font-weight: 400;
  min-height: 10rem;
  margin-top: -1px;
  margin-left: -1px;
  border: 1px solid #000;
  float: left;
  white-space: pre;
}


</style>