var routes = [{ path: "/", name: "Home", component: Home }];

var router = new VueRouter({
  routes: routes,
  base: "/",
});

var app = new Vue({
  el: "#app",
  data() {
    return {
      projects: null,
      projectPopup: false,
      projectClicked: {},
    };
  },
  router: router,
  methods: {
    showProject(value) {
      this.projectClicked = this.projects.find(
        (project) => project.slug == value
      );
      this.projectPopup = true;
    },
    closeProject() {
      console.log(('hey'));
      this.projectPopup = false;
    },
  },
  async mounted() {
    await axios
      .get("./assets/json/projects.json")
      .then((response) => (this.projects = response.data));
  },
});
