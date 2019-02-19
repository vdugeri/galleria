<template>
  <div class="navbar">
    <div class="navbar__left">
      <router-link to="/" class="nav-item">
        <h1>JB</h1>
      </router-link>
    </div>
    <div class="navbar__right">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/" class="nav-item">Photo</router-link>
      <router-link to="/" class="nav-item">Journal</router-link>
      <a href="#about" class="nav-item">About</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$color-dark-grey: #777;
$color-dark-grey-2: #555;
$color-primary: #7a9cc6;

.navbar {
  display: flex;
  justify-content: space-between;
  height: 12rem;

  h1 {
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    margin-left: 2rem;
    display: inline-block;
  }
}

.nav-item:link,
.nav-item:visited {
  display: inline-block;
  padding: 2rem;
  text-decoration: none;
  font-weight: 300;
  font-size: 2rem;
  color: $color-dark-grey;
}

.nav-item:active,
.nav-item:hover {
  color: $color-dark-grey-2;
  border-bottom: 4px solid $color-primary;
}
</style>
