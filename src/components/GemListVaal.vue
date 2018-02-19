<template>
  <div>
  <div v-if='gemList'>Vaal Gems ( {{ gemList.length }} )
    <div v-for="(gem, index) in gemList" :id="gem._id">
  {{ gem._Name }}
  </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'VaalSkill'
    }
  },
  props: [ 'gemList' ]
}
</script>

<style>
</style>
