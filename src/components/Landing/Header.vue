<template>
  <div class="hero">
    <Navbar />
    <div class="hero__text-box">
      <h1>See the beauty in Africa</h1>
      <router-link to="#" class="btn">Explore</router-link>
      <router-link to="#" class="btn btn-full">Get in touch</router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Landing/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
$color-black: #000;
$color-white: #fff;
$color-dark-grey: #777;

.hero {
  width: 100%;
  background-image: linear-gradient(
      rgba($color-black, 0.4),
      rgba($color-black, 0.7)
    ),
    url(../../assets/hero-image.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-attachment: fixed;
  color: $color-white;
  position: relative;
  margin-bottom: 3rem;

  &__text-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    text-transform: uppercase;
    width: 100vw;
    letter-spacing: 1.2rem;
    display: inline-block;
    padding: 3rem;
    font-weight: 300;
    font-size: 5rem;
  }
}
</style>
