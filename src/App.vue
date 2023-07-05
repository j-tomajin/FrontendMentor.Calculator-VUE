<script>
  import Calculator from './components/Calculator.vue';
  import CalcHeader from './components/CalcHeader.vue';
  
  export default {
    name: "App",
    components: { Calculator, CalcHeader },
  }
</script>

<template>
  <CalcHeader title="calc" />
  <main>
    <Calculator />
  </main>
</template>

<style lang="scss" scoped>
  @use './assets/scss/utilities/' as *;
  
</style>