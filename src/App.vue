<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700");
$color-dark-grey: #777;
$color-white: #fff;
$color-black: #000;

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: $color-dark-grey;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
}

html {
  font-size: 62.5%;
}
#app {
  text-align: center;
}

.btn:link,
.btn:visited,
input[type="submit"] {
  font-weight: 300;
  font-size: 2rem;
  padding: 10px 30px;
  text-decoration: none;
  display: inline-block;
  border-radius: 3px;
  color: $color-white;
  border: 1px solid $color-white;
  margin-right: 3rem;
  text-transform: uppercase;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 4rem 5rem rgba($color-black, 0.4);
  }

  &:active {
    box-shadow: none;
  }
}

.btn-full:link,
.btn-full:visited {
  background-color: $color-white;
  color: $color-dark-grey;
}

.btn-ghost:link,
.btn-ghost:visited {
  border: 1px solid $color-black;
  color: $color-dark-grey;
}

.clearfix {
  zoom: 1;
}

.clearfix::after {
  content: ".";
  height: 0;
  display: block;
  clear: both;
  visibility: hidden;
}
</style>
