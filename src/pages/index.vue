<template>

  <main class="cf pa3 pa4-m pa5-l mw9 w-100 center">
    <div class="flex flex-wrap">
      <div
        v-for="edge in $page.categories.edges"
        :key="edge.node.id"
      >
        <h2>{{ edge.node }}</h2>
        <a :href="edge.node.linkedArticle.slug">{{ edge.node.name }}</a>
      </div>
    </div>
  </main>
</template>
<page-query>
query Categories {
  categories: allCategories {
    edges {
      node {
        id
        name
        slug
        linkedArticle {
        	slug
      	}
      }
    }
  }
}
</page-query>

<style lang="scss">
@import "~tachyons";
</style>
