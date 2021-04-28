var routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/project-:slug", name: "Project", component: Project, props: true },
];

var router = new VueRouter({
  routes: routes,
  base: "/",
});

var app = new Vue({
  el: "#app",
  router: router,
});
