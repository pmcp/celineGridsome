<template>
  <div>
    <main-header
      :title="''"
    >
    </main-header>
    <main class="article__layout">
      <article-section
        v-for="(section, key) in project.layout"
        :key="key"
        :settings="section.settings"
        :blocks="section.children"
        class="article__block"
      />
    </main>
  </div>
</template>

<script>
import mainHeader from "~/components/mainHeader.vue";
import articleSection from '~/components/articleSection.vue'

export default {
  components: {
    mainHeader: mainHeader,
    articleSection: articleSection
  },
  data() {
    return {
      project: {}
    }
  },
  mounted: function() {
    window.addEventListener('message', this.handlePreviewEntry)
  },
  methods: {
    handlePreviewEntry(event) {
      console.log(event)
      this.project = event.data.entry
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  &__layout {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
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
