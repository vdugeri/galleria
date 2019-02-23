<template>
  <div class="session">
    <span>Need a photo session?</span>
    <h1>We are beauty hunters</h1>
    <router-link to="/" class="btn btn-ghost">Get in touch</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$color-dark-grey: #373b44;
$color-white: #fff;

.session {
  background-color: $color-dark-grey;
  width: 100%;
  height: 28rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;

  span {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 300;
    padding-top: 2rem;
    padding-bottom: 1rem;
    color: $color-white;
    letter-spacing: 0.5rem;
  }

  h1 {
    font-size: 4rem;
    text-transform: uppercase;
    color: $color-white;
    font-weight: 700;
    letter-spacing: 0.5rem;
  }

  .btn {
    width: 22rem;
    align-self: center;
    margin-top: 4rem;
    border: 1px solid $color-white;
    color: $color-white;
  }
}
</style>
