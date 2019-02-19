<template>
  <div class="photos">
    <Photo v-for="photo in photos" :key="photo.id" :photo="photo.src" />
  </div>
</template>

<script>
import Photo from "@/components/Photo.vue";
export default {
  components: {
    Photo
  },

  computed: {
    photos() {
      return this.$store.state.photos;
    }
  }
};
</script>

<style lang="scss">
.photos {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 7rem 0;
  padding: 1rem;
}
</style>
