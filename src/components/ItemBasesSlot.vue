<template>
  <div class='row'>
    <div v-if="slot" class='items  col-xs-12 col-sm-4 col-md-3'>
      <q-input 
               v-model='filterText'
               :after="[ { icon: 'search' } ]"
               placeholder='Filter Items..' />
      <ul>
        <li v-for='(item,index) in filteredItems' :key='index' @click="loadItem(index)" class='item'>
          {{ item.name }}
          <span v-if='!socketWeight'><span v-if="item.tags.includes('int_armour')">
        <q-icon color='blue' name="fiber_manual_record" size="12px" />
          </span>
          <span v-if="item.tags.includes('str_int_armour')">
         <q-icon color='red' name="fiber_manual_record" size="12px" />
            <q-icon color='blue' name="fiber_manual_record" size="12px" />
          </span>
          <span v-if="item.tags.includes('dex_armour')">
        <q-icon color='green' name="fiber_manual_record" size="12px" />
          </span>
          <span v-if="item.tags.includes('str_armour')">
        <q-icon color='red' name="fiber_manual_record" size="12px" />
          </span>
          <span v-if="item.tags.includes('str_dex_int_armour')">
        <q-icon color='blue' name="fiber_manual_record" size="12px" />
            <q-icon color='red' name="fiber_manual_record" size="12px" />
            <q-icon color='green' name="fiber_manual_record" size="12px" />
          </span>
           <span v-if="item.tags.includes('dex_int_armour')">
        <q-icon color='blue' name="fiber_manual_record" size="12px" />
         <q-icon color='green' name="fiber_manual_record" size="12px" />
          </span>
          <span v-if="item.tags.includes('str_dex_armour')">
        <q-icon color='red' name="fiber_manual_record" size="12px" />
         <q-icon color='green' name="fiber_manual_record" size="12px" />
          </span>
          </span>
        </li>
      </ul>
    </div>
    <div class='col-xs-12 col-sm-8 col-md-9'>
      <router-view name="inner" :itemProp="items"></router-view>
    </div>
  </div>
</template>

<script>
  var items
  var socketWeight = false
  const slot = ''
  var filterText = ''
  import axios from 'axios'
  import {
    QIcon,
    QInput,
    QList,
    QListHeader,
    QItem,
    QCard,
    QCardSeparator,
    QCardMain,
    QCardTitle,
    QScrollArea
  } from 'quasar'
  export default {
    name: 'ItemBasesSlot',
    data () {
      return {
        items: items,
        slot: slot,
        filterText: filterText,
        socketWeight: socketWeight
      }
    },
    components: {
      QIcon,
      QInput,
      QList,
      QListHeader,
      QItem,
      QCard,
      QCardSeparator,
      QCardMain,
      QCardTitle,
      QScrollArea
    },
    watch: {
      '$route' (to, from) {
        this.updateRoute()
      }
    },
    computed: {
      itemLink (num) {
        return this.$route.path
      },
      filteredItems () {
        var self = this
        if (this.filterText === '') return this.items
        return this.items.filter(function (item) {
          return item.name.indexOf(self.filterText) > -1
        })
      }
    },
    mounted () {
      this.updateRoute()
    },
    methods: {
      loadItem (index) {
        var current = index
        this.$router.push({ name: 'ItemBases.Item', params: { item: current } })
      },
      async updateRoute () {
        try {
          this.slot = this.$route.params.slot
          const response = await axios.get(`http://localhost/getBases.php?slot=` + this.slot)
          this.items = response.data
        }
        catch (e) {
          this.errors.push(e)
        }
      }
    }
  }
</script>

<style lang="stylus">
  .statreq 
    float:right
  .list
    padding:8px
  ul
    margin:0px 
    padding:0px
  .items
    height:calc(100vh - 70px)
    overflow-y:scroll
    padding-right:7px
    padding-left:10px
  .item
    cursor: pointer
    border: 1px solid #404040
    padding: 5px
    margin:1px
    list-style-type: none
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
  li span 
    float right
</style>