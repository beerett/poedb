<template>
  <div class='row'>
    
<div class='col'><q-data-table
                  :data="greenData"
                  :config="greenConfig"
                  :columns="greenColumns"
                  >
       
        <template slot="col-2" scope="cell">
          <span v-if='cell.data' class="">
            <i class="plus material-icons">add_circle</i>
          </span>
        </template>
        <template slot="col-1" scope="cell">
          <span v-if='cell.data' class="">
            <i class="plus material-icons">add_circle</i>
          </span>
        </template>
       
</q-data-table></div>
      <div v-if='gemList' class='col'>
        <q-data-table
                  :data="redData"
                  :config="redConfig"
                  :columns="redColumns"
                  >
        
        <template slot="col-2" scope="cell">
          <span v-if='cell.data' class="">
            <i class="plus material-icons">add_circle</i>
          </span>
        </template>
        <template slot="col-1" scope="cell">
          <span v-if='cell.data' class="">
            <i class="plus material-icons">add_circle</i>
          </span>
        </template>
        
      </q-data-table>
      </div>
    <div class='col'>
      <q-data-table
                  :data="blueData"
                  :config="blueConfig"
                  :columns="blueColumns"
                  >
        
        <template slot="col-2" scope="cell">
          <span v-if='cell.data' class="">
            <i class="plus material-icons">add_circle</i>
          </span>
        </template>
      <template slot="col-1" scope="cell">
          <span v-if='cell.data' class="">
            <i class="plus material-icons">add_circle</i>
          </span>
        </template>
        
      </q-data-table>
      </div>
      </div>

</template>

<script>
  
  var gemData = []
  var redConfig = {
    rowHeight: '30px',
    title: 'Strength Gems',
    responsive: true,
    bodyStyle: {
      maxHeight: '500px'
    },
    messages: {
      noData: '<i>warning</i> No data available to show.',
      noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
    }
  }
  var blueConfig = {
    rowHeight: '30px',
    title: 'Intellect Gems',
    responsive: true,
    bodyStyle: {
      maxHeight: '500px'
    },
    messages: {
      noData: '<i>warning</i> No data available to show.',
      noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
    }
  }
  var greenConfig = {
    rowHeight: '30px',
    title: 'Dexterity Gems',
    responsive: true,
    bodyStyle: {
      maxHeight: '500px'
    },
    messages: {
      noData: '<i>warning</i> No data available to show.',
      noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
    }
  }
  
  var redColumns = [
    {
      label: 'Name',
      field: '_Name',
      width: '130px',
      filter: true,
      sort: true
    },
    {
      label: 'Int',
      field: '1',
      width: '45px',
      style: {color: 'blue', textAlign: 'center'},
      sort: true
    },
    {
      label: 'Dex',
      field: '2',
      width: '45px',
      style: {color: 'green', textAlign: 'center'},
      sort: true
    },
    {
      label: 'Lvl',
      field: 'lvl',
      width: '35px',
      sort: true
    }
  ]
  var blueColumns = [
    {
      label: 'Name',
      field: '_Name',
      width: '130px',
      filter: true,
      sort: true
    },
    {
      label: 'Str',
      field: '1',
      width: '45px',
      style: {color: 'red', textAlign: 'center'},
      sort: true
    },
    {
      label: 'Dex',
      field: '2',
      width: '45px',
      style: {color: 'green', textAlign: 'center'},
      sort: true
    },
    {
      label: 'Lvl',
      field: 'lvl',
      width: '35px',
      sort: true,
      style: {textAlign: 'right'}
    }
  ]
  var greenColumns = [
    {
      label: 'Name',
      field: '_Name',
      width: '130px',
      filter: true,
      sort: true
    },
    {
      label: 'Str',
      field: '1',
      width: '45px',
      style: {color: 'red', textAlign: 'center'},
      sort: true
    },
    {
      label: 'Int',
      field: '2',
      width: '45px',
      style: {color: 'blue', textAlign: 'center'},
      sort: true
    },
    {
      label: 'Lvl',
      field: 'lvl',
      width: '35px',
      sort: true,
      style: {textAlign: 'right'}
    }
  ]
  import {
    QDataTable,
    QBtn
  } from 'quasar'
  export default {
    components: {
      QDataTable,
      QBtn
    },
    data () {
      return {
        name: 'ActiveSkill',
        redColumns: redColumns,
        blueColumns: blueColumns,
        greenColumns: greenColumns,
        redConfig: redConfig,
        blueConfig: blueConfig,
        greenConfig: greenConfig,
        gemData: gemData
      }
    },
    props: [ 'gemList', 'greenData', 'redData', 'blueData' ]
  }
</script>
<style lang='stylus'>
  @import '~variables'
  .q-data-table
    margin  5px
    min-width 330px
  .q-data-table-toolbar.upper-toolbar .q-select
    display none
  .q-data-table table td
    text-overflow: 'fade'
  .q-data-table table th
    text-overflow: 'fade'
  .plus
    font-size 1.2em
</style>
