import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import image1 from "@/assets/photos-1.jpg";
import image2 from "@/assets/photos-2.jpg";
import image3 from "@/assets/photos-3.jpg";
import image4 from "@/assets/photos-4.jpg";
import image5 from "@/assets/photos-5.jpg";
import image6 from "@/assets/photos-6.jpg";
import image7 from "@/assets/photos-7.jpg";
import image8 from "@/assets/photos-8.jpg";
import image9 from "@/assets/photos-9.jpg";
import image10 from "@/assets/photos-10.jpg";

import member1 from "@/assets/team-members/member-1.jpg";
import member2 from "@/assets/team-members/member-2.jpg";
import member3 from "@/assets/team-members/member-3.jpg";

export default new Vuex.Store({
  state: {
    photos: [
      { id: 1, src: image1 },
      { id: 2, src: image2 },
      { id: 3, src: image3 },
      { id: 4, src: image4 },
      { id: 5, src: image5 },
      { id: 6, src: image6 },
      { id: 7, src: image7 },
      { id: 8, src: image8 },
      { id: 9, src: image9 },
      { id: 10, src: image10 }
    ],

    members: [
      { id: 1, src: member1 },
      { id: 2, src: member2 },
      { id: 3, src: member3 }
    ]
  },
  mutations: {},
  actions: {}
});
