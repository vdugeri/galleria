<template>
  <section class="testimonial">
    <blockquote>
      <p>
        I'm as proud of many of the things we haven't done as I am of the things
        we have done.
      </p>
      <cite>Verem Dugeri, CEO</cite>
    </blockquote>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
$color-white: #fff;
$color-tertiary: #93cce0;
$color-dark-grey: #373b44;

.testimonial {
  background-color: $color-tertiary;
  height: 30rem;

  blockquote {
    line-height: 145%;
    padding: 2%;
    color: $color-dark-grey;
    position: relative;
    padding-top: 12rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    p {
      font-size: 3rem;
      font-weight: 100;
      text-align: center;
      display: block;
      margin-bottom: 3rem;

      &::after {
        content: " ";
        display: block;
        width: 2rem;
        height: 2px;
        margin: 3rem auto 0.2rem auto;
        background-color: $color-white;
      }
    }

    cite {
      font-size: 1.5rem;
      font-weight: 100;
      font-style: normal;
    }

    &::before {
      content: "\201C";
      font-size: 8rem;
      display: block;
      position: absolute;
      top: 9rem;
      left: 50%;
    }
  }
}
</style>
