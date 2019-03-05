import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home")
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/Admin")
    },
    {
      path: "/admin/wildlife",
      name: "wildlife",
      component: () => import("@/components/Admin/Photography/Wildlife")
    },
    {
      path: "/admin/people",
      name: "people",
      component: () => import("@/components/Admin/Photography/People")
    },
    {
      path: "/admin/nature",
      name: "nature",
      component: () => import("@/components/Admin/Photography/Nature")
    },
    {
      path: "/admin/fashion",
      name: "fashion",
      component: () => import("@/components/Admin/Photography/Fashion")
    },
    {
      path: "/admin/banners",
      name: "banners",
      component: () => import("@/components/Admin/Graphics/Banners")
    },
    {
      path: "/admin/cards",
      name: "cards",
      component: () => import("@/components/Admin/Graphics/Cards")
    },
    {
      path: "/admin/flyers",
      name: "flyers",
      component: () => import("@/components/Admin/Graphics/Flyers")
    },
    {
      path: "/admin/weddings",
      name: "weddings",
      component: () => import("@/components/Admin/Videography/Weddings")
    },
    {
      path: "/admin/events",
      name: "events",
      component: () => import("@/components/Admin/Videography/Events")
    },
    {
      path: "/admin/musicals",
      name: "musicals",
      component: () => import("@/components/Admin/Videography/Musicals")
    }
  ]
});
