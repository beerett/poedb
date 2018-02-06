<template>
 <q-layout
      ref="layout"
      view="hHh Lpr fFf"
      :left-style="drawerStyle"
      :header-class="drawerClass"
      >
  <div slot='header'>
    <div class='row justify-start items-center'>
       <img class='headerImage' src='statics/ninjalogoheader.png' />
      <span class='headerText text-thin text-white'>POE Ninja</span>
         <router-link to='/'>Home</router-link>
         <a class='current' href='#/Equipment'>Item Bases</a>
         <a href='#'>Uniques</a>
         <a href='#'>Builds</a>
         <a href='#'>Gems</a>
         <a href='#'>Flasks</a>
         <a href='#'>Jewels</a>
         <a href='#'>Maps</a>
         <a href='#'>Recipes</a>
       <q-icon color="white" name="home" />
       <q-icon color="white" name="search" />
       <q-icon color="white" name="fiber_new" />
       <q-icon color="white" name="build" />
    </div>
  </div>
    
<div slot="left">
     <q-list highlight link>
        <q-list-header>Weapons</q-list-header>
        <q-item link highlight to='/Equipment/One Hand Weapon'>
           <q-item-main>
             <q-item-tile color='primary'>1H Weapon</q-item-tile>
           </q-item-main>
        </q-item>
       <q-item link highlight to='/Equipment/Two Hand Weapon'>
           <q-item-main>
              <q-item-tile color='primary'>
                2H Weapon
              </q-item-tile>
           </q-item-main>
        </q-item>
        <q-list-header>Armor</q-list-header>
        <q-item to='/Equipment/Body Armour'>
           <q-item-main>
              <q-item-tile color='primary'>Body Armour
              </q-item-tile>
           </q-item-main>
        </q-item>
        <q-item to='/Equipment/Boots'>
           <q-item-main>
              <q-item-tile color='primary'>
                Boots
              </q-item-tile>
           </q-item-main>
        </q-item>
        <q-item to='/Equipment/Gloves'>
           <q-item-main>
              <q-item-tile color='primary'>
               Gloves
              </q-item-tile>
           </q-item-main>
        </q-item>
        <q-item to='/Equipment/Helmet'>
           <q-item-main>
              <q-item-tile color='primary'>
                 Helmets
              </q-item-tile>
           </q-item-main>
        </q-item>
        <q-item to='/Equipment/Shield'>
           <q-item-main>
              <q-item-tile color='primary'>
                Shields
              </q-item-tile>
           </q-item-main>
        </q-item>
        <q-list-header>Accessories</q-list-header>
       <q-item to='/Equipment/Amulet'>
           <q-item-main>
              <q-item-tile color='primary'>
                Amulets
              </q-item-tile>
           </q-item-main>
        </q-item>
       <q-item to='/Equipment/Ring'>
           <q-item-main>
              <q-item-tile color='primary'>
                Rings
              </q-item-tile>
           </q-item-main>
        </q-item>
     </q-list>
  </div>
 
  
  <router-view></router-view>
  </q-layout>
</template>

<script>
  import {
    QIcon,
    QItem,
    QList,
    QItemMain,
    QItemTile,
    QLayout,
    QListHeader
  } from 'quasar'
  export default {
    name: 'Equipment-List',
    data () {
      return {
      }
    },
    components: {
      QIcon,
      QItem,
      QList,
      QItemMain,
      QItemTile,
      QLayout,
      QListHeader
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
    color #B0BED1
    display inline-block
    text-decoration none
    padding: 0 15px
    transition all .2s
  header a.current
    background-color $faded
    cursor default
    color white
  header a:hover:not(.current)
    color white
    background-color $faded
</style>