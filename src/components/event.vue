<template>
  <article>
    <div class="date" :style="{backgroundImage: `url(${event.fields.image.fields.file.url})`}">
      <div>
        <h1>{{event.fields.startTime | moment(`DD`)}}</h1>
        <h5>{{event.fields.startTime | moment(`MMM`)}}</h5>
      </div>
    </div>
    <div class="content">
      <img :src="event.fields.image.fields.file.url" alt="">
      <h2>{{event.fields.name}}</h2>
      <h5>{{event.fields.startTime |  moment(`hh:mm a`)}} - {{event.fields.endTime | moment(`hh:mm a`)}}</h5>
      <p class="venue">{{event.fields.venue}}</p>
      <div class="description">{{concat}}</div>
      <div class="links">
        <router-link :to="`event/${event.fields.slug}`">INFO</router-link>
        <router-link :to="`event/${event.fields.slug}#rsvp`">RSVP</router-link>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'event',
  props: {
    event: Object
  },
  data: function () {
    return {}
  },
  computed: {
    concat: function () {
      let concat
      if (this.event.fields.description) concat = this.event.fields.description.substring(0, 80) + '...'
      return concat
    }
  }
}
</script>

<style lang="scss" scoped>
  article {
    max-width: 60rem;
    color: #fff;
    margin: 0 auto 3rem;

    @media (min-width: 720px){
      display: flex;
    }

    h2 {
      font-weight: 400;
      margin-bottom: 1rem;
    }

    img {
      display: none;
    }

    a {
      color: tomato;
      text-decoration: none;
    }

    h5 {
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 0;
    }

    .date {
      position: relative;
      flex: 0 0 28rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 1rem;
      font-family: 'Roboto Mono', monospace;
      background-blend-mode: screen;
      background-color: black;
      background-position: center;
      background-size: cover;
      font-weight: 400;

      @media (min-width: 720px){
        padding-top: 15rem;
      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        background: rgba(black,0.5);
      }

      > div {
        position: relative;
        z-index: 10;
      }

      h1 {
        font-weight: 100;
        font-size: 2rem;
        line-height: 1;
        text-align: right;
        @media (min-width: 720px){
          text-align: left;
          font-size: 3rem;
        }
      }
      h5 {
        font-weight: 100;
        font-size: 1rem;
        line-height: 1;
        text-transform: uppercase;
        text-align: right;

        @media (min-width: 720px){
          text-align: left;
          font-size: 2rem;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      padding: 1rem 1rem 2rem;
      @media (min-width: 720px){
        padding: 2rem;
      }
    }

    .links {
      display: flex;
      justify-content: space-between;
      margin: 1.5rem 0 0;
      padding-top: 1.5rem;
      font-size: 1rem;
      letter-spacing: 0.2em;
      border-top: 1px solid rgba(white,0.2);
      a {
        display: inline-block;
      }
    }

    .description {
      flex: 1 1 auto;
      margin: 2rem 0;
    }

    .venue {
      margin: 1rem 0 0;
    }

  }
</style>
