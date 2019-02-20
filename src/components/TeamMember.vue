<template>
  <section class="team">
    <img :src="photo" alt="team member" />
    <div class="team__social">
      <a href="#">
        <i class="ion-logo-twitter icon--large"></i>
      </a>
      <a href="#">
        <i class="ion-logo-facebook icon--large"></i>
      </a>
      <a href="#">
        <i class="ion-logo-linkedin icon--large"></i>
      </a>
      <a href="#">
        <i class="ion-logo-instagram icon--large"></i>
      </a>
    </div>
    <div class="team__member-description">
      <h2>{{ name }}</h2>
      <h3>Photographer</h3>
    </div>
  </section>
</template>

<script>
export default {
  props: ["photo", "name"]
};
</script>

<style lang="scss">
$color-black: #000;
$color-white: #fff;
.team {
  position: relative;

  img {
    width: auto;
    height: 35rem;
  }
  &__social {
    position: absolute;
    top: 1rem;
    left: 5rem;
    color: $color-white;
    margin-top: 0.8rem;
    margin-left: -2rem;

    a:link,
    a:visited {
      text-decoration: none;
      color: $color-white;
    }
  }

  .icon--large {
    margin-right: 1.5rem;
    font-size: 2rem;
  }

  &__member-description {
    position: absolute;
    top: 70%;
    left: 15%;
    color: $color-white;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;

      &::after {
        content: " ";
        width: 2rem;
        height: 2px;
        background-color: $color-white;
        margin: 0 auto 0 0.4rem;
        display: block;
      }
    }

    h3 {
      margin-left: -1.5rem;
      margin-top: 0.5rem;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
}
</style>
