<template>
  <div>
    <Header />
    <About />
    <Photos />
    <BookSession />
    <Services />
    <Team />
    <Stats />
  </div>
</template>

<script>
import Header from "@/components/Header";
import About from "@/views/About";
import Photos from "@/components/Photos";
import BookSession from "@/components/BookSession";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Stats from "@/components/Stats";

export default {
  components: {
    Header,
    About,
    Photos,
    BookSession,
    Services,
    Team,
    Stats
  }
};
</script>
