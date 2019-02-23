<template>
  <section class="section-stats">
    <div class="stats">
      <h2>Photographers</h2>
      <span class="stats--number">120</span>
    </div>
    <div class="stats">
      <h2>Projects Done</h2>
      <span class="stats--number">194</span>
    </div>
    <div class="stats">
      <h2>Followers</h2>
      <span class="stats--number">1573</span>
    </div>
    <div class="stats">
      <h2>Happy Customers</h2>
      <span class="stats--number">201</span>
    </div>
  </section>
</template>

<style lang="scss">
$color-grey: #fafafa;
$color-secondary: #786eb3;

.section-stats {
  background-color: $color-grey;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 18rem;

  .stats {
    padding: 4rem 6rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 400;
      text-transform: uppercase;
    }

    &--number {
      font-size: 6rem;
      font-weight: 100;
      color: $color-secondary;
    }
  }
}
</style>
