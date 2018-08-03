<template>
  <div class="page" v-if="loaded">
    <aside>
      <img :src="event.fields.image.fields.file.url" alt="" class="image">
    </aside>
    <main>
      <h1>{{event.fields.name}}</h1>
      <h2>{{event.fields.startTime |  moment(`hh:mma`)}} - {{event.fields.endTime | moment(`hh:mma`)}}</h2>
      <p class="date">{{event.fields.startTime |   moment("MMMM Do YYYY")}}</p>
      <div class="description">{{event.fields.description}}</div>
      <div class="tickets" v-if="event.fields.ticketUrl">
        <a class="btn" :href="event.fields.ticketUrl">
          <span>Buy Advanced Tickets</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="1" transform="translate(0.5 0.5)"><circle fill="none" stroke-miterlimit="10" cx="12" cy="12" r="11"></circle> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="12" y1="5" x2="12" y2="19"></line> <path data-color="color-2" fill="none" stroke-miterlimit="10" d=" M15.375,7.219c-1.621-0.891-6.727-1.556-6.727,1.513c0,3.674,6.484,2.377,6.484,5.619S10.918,17.349,8,16.296"></path></g></svg>
        </a>
      </div>
      <form class="form" id="rsvp">
        <header>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="1" transform="translate(0.5 0.5)"><line data-color="color-2" fill="none" stroke-miterlimit="10" x1="12" y1="7" x2="12" y2="17"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="17" y1="12" x2="7" y2="12"></line> <circle fill="none" stroke-miterlimit="10" cx="12" cy="12" r="11"></circle></g></svg>
          <h2>RSVP</h2>
        </header>
        <div class="row">
          <div class="form-group">
            <label for="first_name">First</label>
            <input type="text" id="first_name" placeholder="first name" autofocus>
          </div>
          <div class="form-group">
            <label for="last_name">Last</label>
            <input type="text" id="last_name" placeholder="last name">
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" placeholder="email address">
        </div>
        <button class="btn">
          <span>Send</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="1" transform="translate(0.5 0.5)"><line data-cap="butt" data-color="color-2" fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12" stroke-linecap="butt"></line> <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline></g></svg>
        </button>
        <p class="errors">{{form_errors}}</p>
      </form>
      <p class="facebook">
        <a :href="event.fields.facebookUrl">Facebook</a>
        <a href="https://www.instagram.com/softleatherclub/">Instagram</a>
      </p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'event',
  data: function () {
    return {
      form: false,
      loaded: false,
      form_errors: '',
      event: {
        fields: {}
      }
    }
  },
  created () {
    if (this.$route.hash === '#rsvp') this.form = true
  },
  mounted () {
    this.$contentful.getEntries({
      content_type: 'event',
      'fields.slug[in]': this.$route.params.slug
    }).then((res) => {
      this.event = res.items[0]
      this.loaded = true
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style lang="scss" scoped>
  .page {
    /*padding: 0 1rem 1rem;*/
    animation: fade-in 600ms ease forwards;
    opacity: 0;
    display: flex;
    flex-wrap: wrap;
    /*max-width: 100%;*/

    aside {
      margin: 1rem;
      flex: 1 1 20rem;
      /*max-width: 30rem;*/
      img {
        max-height: 20rem;
        width: 100%;
        margin-bottom: 0;
        object-fit: cover;
        @media (min-width: 720px) {
          max-height: none;
        }
      }
    }
    main {
      margin: 1rem;
      flex: 1 1 auto;
    }

    @media (min-width: 720px) {
      aside {
        flex: 0 1 20rem;
      }
      main {
        flex: 1 1 34rem;
      }
    }

    .btn {
      font-size: 1rem;
      display: inline-flex;
      align-items: center;
      font-weight: 400;
      line-height: 1.5;
      font-style: normal;
      border-radius: 4px;
      span {
        display: inline-flex;
        padding-top: 0.05em;
      }
      svg {
        flex: 1 1 auto;
        stroke: tomato;
        margin-left: 1rem;
        margin-top: -0.125em;
      }
    }

    h1 {
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      /*letter-spacing: 0.2em;*/
    }

    h2 {
      font-weight: 400;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    .date {
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-weight: 500;
    }

    .description {
      margin: 2rem 0;
      letter-spacing: 0.1em;
      max-width: 30rem;
    }

    .facebook {
      text-transform: uppercase;
      font-size: 80%;
      letter-spacing: 0.2em;
      margin-bottom: 1rem;
      a {
        margin-right: 1.25rem;
        color: #fff;
        text-decoration: line-through;
      }
    }

    .row {
     // display: flex;
     // margin-left: -1rem;
     // margin-right: -1rem;
     // > * {
     //   flex: 1 1 auto;
     //   padding-left: 1rem;
     //   padding-right: 1rem;
     // }
    }

    .form {
      margin: 4rem 0 4rem;

      header {
        margin: 4rem 0 3rem;
        display: flex;
        /*justify-content: space-between;*/
        align-items: center;
        border-top: 1px solid rgba(white, 0.75);
        padding-top: 1.5rem;
        h2 {
          font-weight: 200;
          margin: 0;
          font-size: 150%;
          line-height: 1;
          color: rgba(white,0.9);
        }
        svg {
          flex: 0 1 auto;
          margin-right: 1rem;
          stroke: white;
          margin-top: -0.2em;
        }
      }

      .errors {
        margin-top: 2rem;
        &:before {
          content: '\00a0';
          width: 0;
        }
      }

      h2 {
        font-size: 1.5rem;
        font-weight: 300;
        color: #fff;
        letter-spacing: 0.2em;

        @media (min-width: 720px) {
          margin: 2rem 0;
          font-size: 1.5rem;
        }
      }
      label {
        display: none;
      }
      .btn {
        margin-top: 1rem;
      }
    }
  }

</style>
