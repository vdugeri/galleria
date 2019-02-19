<template>
  <div>
    <Header />
    <About />
    <Photos />
    <BookSession />
    <Services />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/views/About.vue";
import Photos from "@/components/Photos.vue";
import BookSession from "@/components/BookSession.vue";
import Services from "@/components/Services";

export default {
  components: {
    Header,
    About,
    Photos,
    BookSession,
    Services
  }
};
</script>
