<template>
  <div class="brand">
    <router-link to="/" exact>
      <logo/>
      <h1>SOFT LEATHER</h1>
      <div class="hr">
        <hr>
      </div>
    </router-link>
  </div>
</template>

<script>
import Logo from '../components/svg/logo'

export default {
  name: 'Brand',
  components: {
    'logo': Logo
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/base";
  .brand {
    padding: 2rem 1rem 3rem;
  }
  a {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #fff;
    &:hover {
      color: tomato;
      h1 {
        /*letter-spacing: 0.5em;*/
      }
      svg {
        /*fill: tomato;*/
        /*transform: translateX(0.25rem);*/
      }
      hr {
        /*border-color: tomato;*/
      }
    }
  }
  h1 {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0.3em;
    line-height: 1;
    transition: all 300ms ease;
  }
  .hr {
    width: 100%;
  }
  hr {
    border: none;
    margin-top: 1rem;
    width: 2.5rem;
    border-top: 1px solid #fff;
  }
  svg {
    flex: 1 1 auto;
    max-width: 2.5rem;
    fill: #fff;
    margin-right: 1.5rem;
    transition: all 300ms ease;
  }
</style>
