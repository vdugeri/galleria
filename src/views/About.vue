<template>
  <section class="about" id="about">
    <h1>JB</h1>
    <h2>Creative</h2>
    <h2>Agency</h2>
    <p class="clearfix">
      We are a Digital Creative Agency on a mission to show the best of Africa.
      We create joyful digital experiences that connects the hearts of our
      viewers to Africa, bringing you home to where life first began.
    </p>
    <router-link to="#" class="btn btn-ghost">Get in touch</router-link>
  </section>
</template>

<style lang="scss">
$color-dark-grey: #777;

.about {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.2rem;
    display: block;

    &:not(:first-of-type)::after {
      content: " ";
      height: 2px;
      width: 100px;
      margin: 30px auto 0 auto;
      background-color: $color-dark-grey;
      display: block;
    }
  }

  p {
    font-size: 1.8rem;
    line-height: 3rem;
    font-weight: 400;
    width: 40%;
    margin: 4rem 0;
  }
}
</style>
