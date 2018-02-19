<template>
 
<div>
     <q-list highlight link>
        <q-list-header>Weapons</q-list-header>
        <q-item link highlight to='/ItemBases/One Hand Weapon'>
           <q-item-main>
             <q-item-tile color='primary'>1H Weapon</q-item-tile>
           </q-item-main>
        </q-item>
       <q-item link highlight to='/ItemBases/Two Hand Weapon'>
           <q-item-main>
              <q-item-tile color='primary'>
                2H Weapon
              </q-item-tile>
           </q-item-main>
        </q-item>
        <q-list-header>Armor</q-list-header>
        <q-item to='/ItemBases/Body Armour'>
           <q-item-main>
              <q-item-tile color='primary'>Body Armour
              </q-item-tile>
           </q-item-main>
        </q-item>
        <q-item to='/ItemBases/Boots'>
           <q-item-main>
              <q-item-tile color='primary'>
                Boots
              </q-item-tile>
           </q-item-main>
        </q-item>
        <q-item to='/ItemBases/Gloves'>
           <q-item-main>
              <q-item-tile color='primary'>
               Gloves
              </q-item-tile>
           </q-item-main>
        </q-item>
        <q-item to='/ItemBases/Helmet'>
           <q-item-main>
              <q-item-tile color='primary'>
                 Helmets
              </q-item-tile>
           </q-item-main>
        </q-item>
        <q-item to='/ItemBases/Shield'>
           <q-item-main>
              <q-item-tile color='primary'>
                Shields
              </q-item-tile>
           </q-item-main>
        </q-item>
        <q-list-header>Accessories</q-list-header>
       <q-item to='/ItemBases/Quiver'>
           <q-item-main>
              <q-item-tile color='primary'>
                Quiver
              </q-item-tile>
           </q-item-main>
        </q-item>
       <q-item to='/ItemBases/Belt'>
           <q-item-main>
              <q-item-tile color='primary'>
                Belts
              </q-item-tile>
           </q-item-main>
        </q-item>
       <q-item to='/ItemBases/Amulet'>
           <q-item-main>
              <q-item-tile color='primary'>
                Amulets
              </q-item-tile>
           </q-item-main>
        </q-item>
       <q-item to='/ItemBases/Ring'>
           <q-item-main>
              <q-item-tile color='primary'>
                Rings
              </q-item-tile>
           </q-item-main>
        </q-item>
     </q-list>
  </div>
</template>

<script>
  import {
    QIcon,
    QItem,
    QList,
    QItemMain,
    QItemTile,
    QListHeader
  } from 'quasar'
  export default {
    name: 'ItemBasesList',
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
      QListHeader
    }
  }
</script>

<style lang="stylus">
  @import '~variables'
</style>