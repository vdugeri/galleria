<template>
  <div>
    <Header />
    <About />
    <Photos />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/views/About.vue";
import Photos from "@/components/Photos.vue";

export default {
  components: {
    Header,
    About,
    Photos
  }
};
</script>
