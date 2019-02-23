<template>
  <section class="sidenav">
    <div class="sidenav__header">
      <img :src="image" alt="profile image" />
    </div>
    <div class="sidenav__body">
      <ul>
        <li>
          <a href="#/admin">Dashboard</a>
        </li>
        <li>
          <a href="#">Wildlife</a>
        </li>
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Fashion</a>
        </li>
        <li>
          <a href="#">Nature</a>
        </li>
        <li>
          <a href="#">Stuff</a>
        </li>
      </ul>
    </div>
    <div class="sidenav__footer"></div>
  </section>
</template>

<script>
export default {
  computed: {
    image() {
      return this.$store.state.profileImage;
    }
  }
};
</script>

<style lang="scss">
$color-secondary: #93cce0;
$color-white: #fff;
$color-black: #000;

@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.sidenav {
  width: 12%;
  height: 100vh;
  justify-content: center;
  background-color: $color-secondary;
  position: relative;

  &__header {
    padding: 2rem 0;
    height: 20%;
    img {
      height: 8rem;
      width: auto;
      margin-left: -2.5rem;
      border-radius: 50%;
      border: 2px solid $color-white;
    }
  }

  &__body {
    padding: 2rem 0;
    ul {
      list-style: none;
      font-weight: 300;
      text-transform: uppercase;
      margin-left: -2.5rem;

      li {
        padding-bottom: 5rem;
        letter-spacing: 0.2rem;
        align-self: center;
        text-align: center;
      }
    }

    a {
      &:link,
      &:visited {
        text-decoration: none;
        font-size: 1.6rem;
        color: $color-white;
      }

      &:hover {
        color: rgba($color-black, 1);
      }
    }
  }

  &__footer {
    height: 5%;
    width: 100%;
    background-color: rgba($color-black, 0.5);
    position: absolute;
    top: 95%;
    left: 0;
  }
}
</style>
