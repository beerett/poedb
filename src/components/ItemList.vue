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
    label="1H"
    to="/Gems/ActiveSkill"
    exact
    slot="title"    
  />
  <q-route-tab
    label="2H"
    to="/Gems/SupportSkill"
    exact
    slot="title"
  />
     <q-route-tab
    label="Chest"
    to="/Gems/VaalSkill"
    exact
    slot="title"
  />
   
</q-tabs>
  </div>
</template>

<script>
  import {
    QTabs,
    QRouteTab
  } from 'quasar'
  export default {
    components: {
      QTabs,
      QRouteTab
    },
    data () {
      return {}
    }
  }
</script>

<style>
</style>
