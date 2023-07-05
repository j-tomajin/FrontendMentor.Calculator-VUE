<script>
  export default {
    name: 'CalcHeader',
    props: {
      title: {
        type: String,
        default: 'This is header'
      }
    }
  }
</script>

<template>
  <header>
    <h1 class="header">{{ title }}</h1>
  </header>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .header {
    color: var(--clr-text-light);
  }
</style>