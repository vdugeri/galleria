<template>
  <div class="photos">
    <Photo v-for="photo in photos" :key="photo.id" photo="photo" />
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
