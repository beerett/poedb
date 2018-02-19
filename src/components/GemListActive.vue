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
    // (optional) Display refresh button
    // refresh: true,
    // (optional)
    // Styling the body of the data table;
    // "minHeight", "maxHeight" or "height" are important
    responsive: false,
    bodyStyle: {
      maxHeight: '500px'
    },
    // (optional) By default, Data Table is responsive,
    // but you can disable this by setting the property to "false"
    messages: {
      noData: '<i>warning</i> No data available to show.',
      noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
    }
    // (optional) Override default labels. Useful for I18n.
  }
  var blueConfig = {
    rowHeight: '30px',
    title: 'Intellect Gems',
    // (optional) Display refresh button
    // refresh: true,
    // (optional)
    // Styling the body of the data table;
    // "minHeight", "maxHeight" or "height" are important
    responsive: false,
    bodyStyle: {
      maxHeight: '500px'
    },
    // (optional) By default, Data Table is responsive,
    // but you can disable this by setting the property to "false"
    messages: {
      noData: '<i>warning</i> No data available to show.',
      noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
    },
    // (optional) Override default labels. Useful for I18n.
    labels: {
      columns: 'Columnsss',
      allCols: 'All Cols',
      rows: 'Rooows',
      selected: {
        singular: 'item selected.',
        plural: 'items selected.'
      },
      clear: 'clear',
      search: 'Search',
      all: 'All'
    }
  }
  var greenConfig = {
    rowHeight: '30px',
    title: 'Dexterity Gems',
    // (optional) Display refresh button
    // refresh: true,
    // (optional)
    // Styling the body of the data table;
    // "minHeight", "maxHeight" or "height" are important
    responsive: false,
    bodyStyle: {
      maxHeight: '500px'
    },
    // (optional) By default, Data Table is responsive,
    // but you can disable this by setting the property to "false"
    messages: {
      noData: '<i>warning</i> No data available to show.',
      noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
    },
    // (optional) Override default labels. Useful for I18n.
    labels: {
      columns: 'Columnsss',
      allCols: 'All Cols',
      rows: 'Rooows',
      selected: {
        singular: 'item selected.',
        plural: 'items selected.'
      },
      clear: 'clear',
      search: 'Search',
      all: 'All'
    }
  }
  
  var redColumns = [
    {
      label: 'Name',
      field: '_Name',
      width: '150px',
      filter: true,
      sort: true
    },
    {
      label: 'Int',
      field: '1',
      width: '60px',
      style: {color: 'blue', textAlign: 'center'},
      sort: true
    },
    {
      label: 'Dex',
      field: '2',
      width: '65px',
      style: {color: 'green', textAlign: 'center'},
      sort: true
    },
    {
      label: 'Lvl',
      field: 'lvl',
      widht: '50px',
      sort: true,
      style: {textAlign: 'center'}
    }
  ]
  var blueColumns = [
    {
      label: 'Name',
      field: '_Name',
      width: '150px',
      filter: true,
      sort: true
    },
    {
      label: 'Str',
      field: '1',
      width: '60px',
      style: {color: 'red', textAlign: 'center'},
      sort: true
    },
    {
      label: 'Dex',
      field: '2',
      width: '65px',
      style: {color: 'green', textAlign: 'center'},
      sort: true
    },
    {
      label: 'Lvl',
      field: 'lvl',
      widht: '50px',
      sort: true,
      style: {textAlign: 'center'}
    }
  ]
  var greenColumns = [
    {
      label: 'Name',
      field: '_Name',
      width: '150px',
      filter: true,
      sort: true
    },
    {
      label: 'Str',
      field: '1',
      width: '60px',
      style: {color: 'red', textAlign: 'center'},
      sort: true
    },
    {
      label: 'Int',
      field: '2',
      width: '60px',
      style: {color: 'blue', textAlign: 'center'},
      sort: true
    },
    {
      label: 'Lvl',
      field: 'lvl',
      widht: '50px',
      sort: true,
      style: {textAlign: 'center'}
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
    methods: {
      buildGemTable () {
        // redData = gemData['red']
        /* for (let index = 0; index < this.gemList.length; index++) {
          if (typeof this.gemList[index]['geminfo']['static']['requirements'] === 'undefined') {
            this.gemData.push({ '_Name': this.gemList[index]['_Name'], '1': '', '2': '', 'lvl': this.gemList[index]['geminfo']['per_level']['1']['requirements'][0]['values'][0] })
          }
          else {
            let newRow = []
            newRow[0] = this.gemList[index]['_Name']
            newRow[3] = this.gemList[index]['geminfo']['per_level']['1']['requirements'][0]['values'][0]
            if (typeof this.gemList[index]['geminfo']['per_level']['1']['requirements'] === 'undefined') return
            let reqs = this.gemList[index]['geminfo']['static']['requirements'][0]['text'].split(',')
            let total = reqs.length
            var cur = 0
            while (cur < total) {
              // var str = reqs[cur]
              // reqs[cur] = str.replace(cur, this.gemList[index]['geminfo']['per_level']['1']['requirements'][0]['values'][cur])
              newRow[cur+1] = this.gemList[index]['geminfo']['per_level']['1']['requirements'][0]['values'][cur]
              cur++
              //  this.gemList[index]['geminfo']['per_level']['1']['requirements'][0]['values'][cur]
              //  '_Name': this.gemList[index]['_Name'], 'int': '' , str: '', 'lvl': this.gemList[index]['geminfo']['per_level']['1']['requirements'][0]['values'][0]
            }
            console.log(newRow)
            this.gemData.push({'_Name': newRow[0], '1': newRow[1], '2': newRow[2], 'lvl': newRow[3]})
          }
        } */
      },
      gemReq (index) {
        /*  if (typeof this.gemList[index]['geminfo']['static']['requirements'] === 'undefined') {
          this.gemData.push({ '_Name': this.gemList[index]['_Name'], '1': '', '2': '', 'lvl': this.gemList[index]['geminfo']['per_level']['1']['requirements'][0]['values'][0] })
          return 'No requirements'
        }
        else {
          if (typeof this.gemList[index]['geminfo']['per_level']['1']['requirements'] === 'undefined') return
          let reqs = this.gemList[index]['geminfo']['static']['requirements'][0]['text'].split(',')
          let total = reqs.length
          var cur = 0
          while (cur < total) {
            var str = reqs[cur]
            reqs[cur] = str.replace(cur, this.gemList[index]['geminfo']['per_level']['1']['requirements'][0]['values'][cur])
            cur++
          }
          return reqs
        }
        //  ['geminfo']['static']['requirements'][0]['text'] */
      }
    },
    props: [ 'gemList', 'greenData', 'redData', 'blueData' ]
  }
</script>
<style lang='stylus'>
  @import '~variables'
  .q-data-table
    margin  15px
    min-width 330px
  .q-data-table-toolbar.upper-toolbar .q-select
    display none
  .plus
    font-size 1.2em
</style>
