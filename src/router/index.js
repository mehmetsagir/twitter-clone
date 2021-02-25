import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/explore",
    name: "explore",
    component: () => import("@/views/Explore")
  },
  {
    path: "/notifications",
    name: "notifications",
    component: () => import("@/views/Notifications")
  },
  {
    path: "/messages",
    name: "messages",
    component: () => import("@/views/Messages")
  },
  {
    path: "/bookmarks",
    name: "bookmarks",
    component: () => import("@/views/Bookmarks")
  },
  {
    path: "/lists",
    name: "lists",
    component: () => import("@/views/Lists")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/Profile")
  },
  {
    path: "*",
    redirect: "home"
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
