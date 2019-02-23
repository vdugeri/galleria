<template>
  <div class="navbar">
    <div class="navbar__left">
      <router-link to="/" class="nav-item">
        <span>JB</span>
      </router-link>
    </div>
    <div class="navbar__right">
      <router-link to="/" class="nav-item">Home</router-link>
      <a href="#photos" class="nav-item">Photos</a>
      <a href="#services" class="nav-item">Services</a>
      <a href="#about" class="nav-item">About</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$color-dark-grey: #373b44;
$color-dark-grey-2: #555;
$color-white: #fff;
$color-primary: #7a9cc6;

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  &__left {
    width: 40%;
    display: flex;
    justify-content: flex-start;
  }

  &__right {
    width: 40%;
  }
  span {
    font-weight: 400;
    font-size: 4rem;
    letter-spacing: 0.2rem;
    margin-left: 2rem;
    display: inline-block;
    margin-top: -2rem;
  }
}

.nav-item:link,
.nav-item:visited {
  display: inline-block;
  padding: 1rem 3rem;
  text-decoration: none;
  font-weight: 300;
  font-size: 1.8rem;
  color: $color-white;
  text-transform: uppercase;
  margin-top: 2rem;
}

.nav-item:active,
.nav-item:hover {
  border-bottom: 2px solid $color-primary;
}
</style>
