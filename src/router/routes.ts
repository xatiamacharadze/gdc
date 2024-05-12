export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      footer: true,
    },
  },
  {
    path: "/work",
    name: "work",
    component: () => import("@/views/ProjectsView.vue"),
    meta: {
      footer: true,
    },
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("@/views/ResumeView.vue"),
    meta: {
      footer: true,
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
  },
  {
    path: "/project/:id",
    name: "project-details",
    component: () => import("@/views/ProjectDetailsView.vue"),
    meta: {
      footer: true,
    },
  },
];
