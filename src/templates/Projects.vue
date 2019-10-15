<template>
  <section
    class="article-layout__section"
  >
    <article-section
      v-for="(section, key) in $page.projects.layout"
      :key="key"
      :settings="section.settings"
      :blocks="section.children"
      class="article-layout__block"
    />
  </section>
</template>

<page-query>
query projects($id: ID!) {
  projects(id: $id) {
    title
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
          image {
            styles {
              path
            }
            
          }
        }
      }
    }
  }
}
</page-query>

<script>
import articleSection from '~/components/articleSection.vue'

export default {
  components: {
    articleSection: articleSection
  }
}
</script>
<style lang="scss" scoped>
.article {
  &-layout {
    &__section {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
    }
    &__block {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
    }
  }
}
</style>
