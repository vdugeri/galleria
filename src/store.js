import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import photo from "@/assets/photos-1.jpg";

export default new Vuex.Store({
  state: {
    photos: [
      { id: 1, src: photo },
      { id: 2, src: "./src/assets/photos-2.jpg" },
      { id: 3, src: "./src/assets/photos-3.jpg" },
      { id: 4, src: "./src/assets/photos-4.jpg" },
      { id: 5, src: "./src/assets/photos-5.jpg" },
      { id: 6, src: "./src/assets/photos-6.jpg" },
      { id: 7, src: "./src/assets/photos-7.jpg" },
      { id: 8, src: "./src/assets/photos-8.jpg" },
      { id: 9, src: "./src/assets/photos-9.jpg" },
      { id: 10, src: "./src/assets/photos-10.jpg" }
    ]
  },
  mutations: {},
  actions: {}
});
