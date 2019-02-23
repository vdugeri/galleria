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
import Header from "@/components/Landing/Header";
import About from "@/views/About";
import Photos from "@/components/Landing/Photos";
import BookSession from "@/components/Landing/BookSession";
import Services from "@/components/Landing/Services";
import Team from "@/components/Landing/Team";
import Stats from "@/components/Landing/Stats";
import Testimonial from "@/components/Landing/Testimonial";
import Footer from "@/components/Landing/Footer";

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
