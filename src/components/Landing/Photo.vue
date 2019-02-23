<template>
  <img :src="photo" alt="photo" />
</template>

<script>
export default {
  props: ["photo"]
};
</script>
<style lang="scss">
img {
  width: auto;
  height: 30rem;
  margin: 1rem;
  transition: transform 1s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
