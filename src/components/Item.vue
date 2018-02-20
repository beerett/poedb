<template>
<div>
  <q-tabs align='justify'>
    <!-- <q-route-tab
    label="All Gems"
    to="/Gems/All"
    exact
    slot="title"    
  /> -->
  <q-route-tab
    label="Uniques for this Base"
    to="/Gems/ActiveSkill"
    exact
    slot="title"    
  />
  <q-route-tab
    label="Mods"
    to="/Gems/SupportSkill"
    exact
    slot="title"
  />
     <q-route-tab
    label="Lab Enchants"
    to="/Gems/VaalSkill"
    exact
    slot="title"
  />
   
</q-tabs>
  <div v-if='itemProp'><pre>{{ itemInfo }}</pre></div>
</div>
</template>
<script>
  var item = ''
  import {
    QTabs,
    QRouteTab
  } from 'quasar'
  export default {
    data () {
      return {
        item: item
      }
    },
    components: {
      QTabs,
      QRouteTab
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