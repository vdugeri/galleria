<template>
  <section class="services" id="services">
    <div class="services__service">
      <i class="ion-ios-camera icon-large" />
      <h2>Home Photography</h2>
      <p>
        Often searching out the graphical symetry in chaos, while stil
        maintaining the personality and emotion of the subject
      </p>
    </div>
    <div class="services__service">
      <i class="ion-ios-paw icon-large" />
      <h2>Wildlife Photography</h2>
      <p>
        We capture the best of nature in environments that have never been
        explored, opening doors to exhilarating natural experiences
      </p>
    </div>
    <div class="services__service">
      <i class="ion-logo-youtube icon-large" />
      <h2>Video Archives</h2>
      <p>
        We make recordings of your child as they grow, keeping a documentary of
        events that give them a peep into their childhood even as adults.
      </p>
    </div>
    <div class="services__service">
      <i class="ion-ios-desktop icon-large" />
      <h2>Branding</h2>
      <p>
        We give your brand a distinct identity, taking it apart from crowd and
        make your products visible wherever they are
      </p>
    </div>
    <div class="services__service">
      <i class="ion-ios-chatboxes icon-large" />
      <h2>Consulting</h2>
      <p>
        If you have digital problems, we are the wizards. Reach out to us for
        advice on digital designs, photography, movie making and video editing.
      </p>
    </div>
    <div class="services__service">
      <i class="ion-ios-color-palette icon-large" />
      <h2>Graphics Design</h2>
      <p>
        Nothing adds color to and event like a well designed card. Meet us for
        your spectacular desings for all sorts of cards and banners.
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
  background-color: #fafafa;
  padding: 5rem 1rem;

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
