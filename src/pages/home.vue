<template>
  <section v-if="loaded" class="page">
    <event v-for="(event, index) in events" :key="index" :event="event"/>
  </section>
</template>

<script>
import Event from '../components/event'

export default {
  name: 'index',
  components: {
    'event': Event
  },
  data: function () {
    return {
      title: 'Soft Leather',
      sub_title: 'come tight leave loose',
      loaded: false,
      events: []
    }
  },
  mounted () {
    this.$contentful.getEntries({
      content_type: 'event',
      order: 'fields.startTime',
      'fields.startTime[gte]': new Date()
    }).then((res) => {
      this.events = res.items
      this.loaded = true
    }).catch((error) => {
      console.log(error)
      this.events = 'error'
    })
  }
}
</script>

<style lang="scss" scoped>
  .page {
    animation: fade-in 600ms ease forwards;
    opacity: 0;
  }
</style>
