<template>
  <section class="services">
    <div class="services__service">
      <i class="ion-ios-camera icon-large" />
      <h2>Photography</h2>
      <p>
        Often searching out the graphical symetry in chaos, while stil
        maintaining the personality and emotion of the subject
      </p>
    </div>
    <div class="services__service">
      <i class="ion-ios-bookmark icon-large" />
      <h2>Branding</h2>
      <p>
        Often searching out the graphical symetry in chaos, while stil
        maintaining the personality and emotion of the subject
      </p>
    </div>
    <div class="services__service">
      <i class="ion-logo-youtube icon-large" />
      <h2>Movies</h2>
      <p>
        Often searching out the graphical symetry in chaos, while stil
        maintaining the personality and emotion of the subject
      </p>
    </div>
    <div class="services__service">
      <i class="ion-ios-pie icon-large" />
      <h2>Marketing</h2>
      <p>
        Often searching out the graphical symetry in chaos, while stil
        maintaining the personality and emotion of the subject
      </p>
    </div>
    <div class="services__service">
      <i class="ion-ios-chatboxes icon-large" />
      <h2>Consulting</h2>
      <p>
        Often searching out the graphical symetry in chaos, while stil
        maintaining the personality and emotion of the subject
      </p>
    </div>
    <div class="services__service">
      <i class="ion-ios-cut icon-large" />
      <h2>Editing</h2>
      <p>
        Often searching out the graphical symetry in chaos, while stil
        maintaining the personality and emotion of the subject
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
$color-dark-grey: #373b44;
$color-light-blue: #a7d0df;

.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 8rem;

  &__service {
    width: 33%;
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    margin-bottom: 3rem;

    .icon-large {
      font-size: 5rem;
      color: $color-light-blue;
    }

    h2 {
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.5rem;
      color: $color-dark-grey;
      padding: 1.5rem;
    }

    p {
      text-align: center;
      font-size: 1.5rem;
      line-height: 2.5rem;
      font-weight: 400;
      width: 60%;
      margin-bottom: 3rem;
    }
  }
  &__marketing {
    width: 33%;
  }
  &__consulting {
    width: 33%;
  }
}
</style>
