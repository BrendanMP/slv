<template>
  <div id="app">
    <Brand/>
    <router-view/>
  </div>
</template>

<script>
import Brand from './components/brand'

export default {
  name: 'App',
  components: {
    'Brand': Brand
  }
}
</script>

<style lang="scss">
  @import "./assets/base";

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    background: lighten($black, 8%);
    font-size: 16px;
    @media (min-width: 720px) {
      font-size: calc(10px + 0.5vw);
    }
    @media (min-width: 1640px) {
      font-size: calc(9px + 0.5vw);
    }
  }

  body {
    height: 100%;
    font-family: 'Libre Franklin', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fafafa;
  }

  a {
    color: tomato;
    text-decoration: none;
  }

  h1 {
    font-weight: 400;
  }

  #app {
    height: 100%;
    max-width: 60rem;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 2rem;
    label {
      display: block;
      font-size: 80%;
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-weight: 400;
      letter-spacing: 0.5em;
      opacity: 0.7;
    }
    input {
      display: block;
      font-size: 0.8rem;
      padding: 0.75rem;
      letter-spacing: 0.2em;
      border: none;
      border-bottom: 1px solid rgba(white,0.5);
      border-left: 1px solid rgba(white,0.5);
      background: none;
      font-family: 'Libre Franklin', sans-serif;
      font-weight: 500;
      width: 100%;
      color: #fff;

      &:focus {
        outline: none;
        border-color: tomato;
      }

      &::placeholder {
        text-transform: uppercase;
        font-weight: 500;
        color: rgba(white,0.5);
        opacity: 1; /* Firefox */
      }
    }
  }

  .btn {
    display: inline-block;
    padding: 0.5em 0.75em;
    font-size: 1rem;
    color: tomato;
    font-weight: 300;
    border: 1px solid tomato;
    background: transparent;
    letter-spacing: 0.2em;
    font-style: italic;
    text-transform: uppercase;
  }

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

</style>
