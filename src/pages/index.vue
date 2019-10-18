<template>

  <main class="cf pa3 pa4-m pa5-l mw9 w-100 center">
    <div class="flex flex-wrap justify-center">
      <div
        v-for="edge in $page.categories.edges"
        :key="edge.node.id"
        class="outline w-25 pa3 mr2 mb2 tc flex justify-center items-center"
      >
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

</style>
