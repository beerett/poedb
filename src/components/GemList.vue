<template>
<div class='self-center'><!--
  <q-toolbar>Active Skill<img src='statics/gems/skill/Animate_Weapon_inventory_icon.png' />
  
  
  Support Gems
  <img src='statics/gems/support/Added_Fire_Damage_Support_inventory_icon.png' /><br>
  Vaal Skill
  <img src='statics/gems/vaal/Vaal_Power_Siphon_inventory_icon.png' />
 </q-toolbar> -->
  
  <q-tabs align='justify'>
    <!-- <q-route-tab
    label="All Gems"
    to="/Gems/All"
    exact
    slot="title"    
  /> -->
  <q-route-tab
    label="Active Skills"
    to="/Gems/ActiveSkill"
    exact
    slot="title"    
  />
  <q-route-tab
    label="Support Gems"
    to="/Gems/SupportSkill"
    exact
    slot="title"
  />
     <q-route-tab
    label="Vaal Gems"
    to=""
    exact
    slot="title"
  />
   
</q-tabs>
  <router-view :gemList='gemList' :greenData='greenData' :redData='redData' :blueData='blueData'>
  
  </router-view>
  
  <router-view name='active' :gemList='gemList'></router-view>
  <router-view name='support' :gemList='gemList'></router-view>
  </div>
</template>

<script>
  var gemList
  var greenData
  var redData
  var blueData
  var gemType = ''
  var errorList = []
  import {
    QLayout,
    QIcon,
    QRouteTab,
    QToolbar,
    QTabs
  } from 'quasar'
  export default {
    name: 'Index',
    data () {
      return {
        gemType: gemType,
        gemList: gemList,
        errorList: errorList,
        redData: redData,
        greenData: greenData,
        blueData: blueData
      }
    },
    components: {
      QLayout,
      QIcon,
      QRouteTab,
      QToolbar,
      QTabs
    },
    mounted () {
      this.loadGems(this.$route.name)
    },
    watch: {
      '$route' (to, from) {
        this.loadGems(to.name)
      }
    },
    methods: {
      async loadGems (gem) {
        try {
          this.gemType = gem
          const response = await this.axios.get('http://localhost/getGems.php?gemType=' + this.gemType)
          this.gemList = response.data
          this.greenData = response.data[1]['green']
          this.redData = response.data[2]['red']
          this.blueData = response.data[0]['blue']
        }
        catch (e) {
          this.errorList.push(e)
        }
      }
    }
  }
</script>

<style lang='stylus'>
  
</style>
