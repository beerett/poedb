<template>
<div>
  <div v-if='itemProp'>{{ itemInfo }}</div>
</div>
</template>
<script>
  var item = ''
  export default {
    data () {
      return {
        item: item
      }
    },
    watch: {
      '$route' (to, from) {
        this.updateRoute()
      }
    },
    props: ['itemProp'],
    computed: {
      itemInfo () {
        return this.itemProp[this.item]
      }
    },
    mounted () {
      this.updateRoute()
    },
    methods: {
      async updateRoute () {
        try {
          this.item = this.$route.params.item
        }
        catch (e) {
          this.errors.push(e)
        }
      }
    }
  }
</script>
<style lang='stylus'>
</style>