<template>
  <div class="article__wrapper">
    <main-header
      :title="$page.globals.edges[0].node.title"
    >
    </main-header>
    <!-- <category-grid :grid-items="$page.projects.category"></category-grid> -->
    <main class="article__layout">
      <article-section
        v-for="(section, key) in $page.projects.layout"
        :key="key"
        :settings="section.settings"
        :blocks="section.children"
        class="article__block"
      />
    </main>
  </div>
</template>

<page-query>
query projects($id: ID!) {
  projects(id: $id) {
    title
    category {
      slug
    }
    layout {
      component
      settings {
        width
        height
      }
      children {
        component
        settings {
          width
          text
          height
          caption
          image {
            path
            styles {
              path
            }
            
          }
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
import articleSection from "~/components/articleSection.vue";

export default {
  components: {
    mainHeader: mainHeader,
    categoryGrid: categoryGrid,
    articleSection: articleSection
  }
};
</script>
<style lang="scss" scoped>
.article {
  &__wrapper {
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  &__layout {
    width: 50%;
    min-width: 500px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  &__block {
    height: -moz-available;          /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    width: fill-available;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
