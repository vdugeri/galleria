<template>
  <div>
    <Header />
    <About />
    <Photos />
    <BookSession />
    <Services />
    <Team />
    <Stats />
    <Testimonial />
    <Footer />
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
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    About,
    Photos,
    BookSession,
    Services,
    Team,
    Stats,
    Testimonial,
    Footer
  }
};
</script>
