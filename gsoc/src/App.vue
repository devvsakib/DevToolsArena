<template>
  <div>
    <sugarizer-header></sugarizer-header>
    <h1>Welcome to Sugarizer VueJS Core!</h1>
    <p>This is the first screen of the project.</p>
    <sugarizer-footer></sugarizer-footer>
  </div>
</template>

<script>
import SugarizerHeader from '@/components/SugarizerHeader.vue'
import SugarizerFooter from '@/components/SugarizerFooter.vue'

export default {
  name: 'App',
  components: {
    SugarizerHeader,
    SugarizerFooter
  }
}
</script>
