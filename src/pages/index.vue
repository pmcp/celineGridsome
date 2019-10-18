<template>
  <div>
    
    <main-header
      :title="$page.globals.edges[0].node.title"
      :subtitle="$page.globals.edges[0].node.subtitle">
    </main-header>
    <category-grid :grid-items="$page.categories.edges"></category-grid>
  </div>
</template>

<page-query>
query {
  categories: allCategories {
    edges {
      node {
        id
        name
        slug
        titleInGrid
        linkedArticle {
        	slug
      	}
      }
    }
  },
  globals: allGlobals {
    edges {
      node {
        id
        title
        subtitle
      }
    }
  }
}
</page-query>


<script>
import mainHeader from "~/components/mainHeader.vue";
import categoryGrid from "~/components/categoryGrid.vue";
export default {
  components: {
    mainHeader: mainHeader,
    categoryGrid: categoryGrid
  }
};
</script>

<style lang="scss">
</style>
