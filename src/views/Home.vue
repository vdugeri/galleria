<template>
  <div>
    <Header />
    <About />
    <Photos />
    <BookSession />
    <Services />
    <Team />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/views/About.vue";
import Photos from "@/components/Photos.vue";
import BookSession from "@/components/BookSession.vue";
import Services from "@/components/Services";
import Team from "@/components/Team";

export default {
  components: {
    Header,
    About,
    Photos,
    BookSession,
    Services,
    Team
  }
};
</script>
