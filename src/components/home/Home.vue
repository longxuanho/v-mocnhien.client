<template>
  <div class="hello">
    <mn-hero></mn-hero>
    <mn-secondary></mn-secondary>
  </div>
</template>

<script>
import Hero from './Hero';
import Secondary from './Secondary';

export default {
  name: 'home',
  data() {
    return {
      msg: process.env.API_ENDPOINT
    }
  },
  created() {
  },
  components: {
    mnHero: Hero,
    mnSecondary: Secondary
  }
}
</script>

<style lang="scss" scoped>
</style>
