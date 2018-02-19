<template>
 <q-layout
      ref="layout"
      view="hHh Lpr fFf"
      :left-style="poeStyle"
      :left-class="poeClass"
      :header-class="poeClass"
      >
  <div slot='header'>
    <div class='row justify-start items-center'>
       <img class='headerImage' src='statics/ninjalogoheader.png' />
      <span class='headerText text-thin'>POE DB</span>
        <router-link to='/'>Home</router-link>
         <a href='#/ItemBases'>Item Bases</a>
         <a href='#'>Uniques</a>
         <a href='#'>Builds</a>
         <a href='#/Gems'>Gems</a>
         <a href='#'>Flasks</a>
         <a href='#'>Maps</a>
         <a href='#'>Recipes</a>
       <q-icon color="white" name="home" />
       <q-icon color="white" name="search" />
       <q-icon color="white" name="fiber_new" />
       <q-icon color="white" name="build" />
    </div>
  </div>
   
    <div v-if="pageDetection()" slot='left'>
      <router-view name='leftSide'></router-view>

    </div>
    <router-view></router-view> 
     
  </q-layout>
</template>
<script>
  import {
    QLayout,
    QIcon
  } from 'quasar'
  export default {
    name: 'MainIndex',
    data () {
      return {
      }
    },
    components: {
      QLayout,
      QIcon
    },
    methods: {
      pageDetection (page) {
        console.log(this.$route.name)
        if (this.$route.name.includes('Gems')) {
          return false
        }
        return true
      }
    },
    computed: {
      poeStyle: function () {
        return {
          'width': '140px'
        }
      },
      poeClass: function () {
        return {
          'bg-light': true
        }
      }
    }
  }
</script>
<style lang="stylus">
  @import '~variables'
  .headerText
    font-size 2em
    margin-right 20px
  .headerImage
    width  150px
    height 62px
    padding 5px
  header .q-icon
    margin-left 10px
    font-size 24px
  header a
    line-height 70px
    border 0
    color #404040
    display inline-block
    text-decoration none
    padding: 0 15px
    transition all .2s
  header a.current
    background-color $faded
    cursor default
  header a:hover:not(.current)
    color black
    background-color $primary
  .bg-poe
    background $light
</style>
