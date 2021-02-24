var routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/project", name: "Project", component: Project },
];

var router = new VueRouter({
  routes: routes,
  base: "/",
});

var app = new Vue({
  el: "#app",
  router: router,
});
