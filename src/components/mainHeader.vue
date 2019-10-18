<template>
  <header class="tc mt5 flex flex-column justify-between h5">
    <h1>
      {{ title }}
    </h1>
    <p class="font-tagline">{{ subtitle }}</p>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  }
}
</script>
