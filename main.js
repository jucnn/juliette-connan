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
      projectDisplayed: {},
      mainDuration: 600,
      easing: "easeOutExpo",
      menuResponsiveDisplayed: false,
      menuLinkActive: "home",
      windowTop: 0,
      homePosition: null,
      worksPosition: null, 
      aboutPosition: null, 
      contactPosition: null, 
    };
  },
  router: router,
  methods: {
    showProject(value) {
      this.projectDisplayed = this.projects.find(
        (project) => project.slug == value
      );
      this.projectPopup = true;
    },
    homeTransition() {
      anime({
        targets: "section",
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 600,
      });
    },
    closeProject() {
      this.projectPopup = false;
      this.homeTransition();
    },
    async navigationBetweenProjects(value) {
      document.querySelector(".project-container").scrollTop = 0;

      const tloptions = {
        easing: "easeOutQuad",
        duration: 600,
      };
      var disappearAnimation = anime
        .timeline({
          easing: tloptions.easing,
          duration: tloptions.duration,
        })
        .add({
          targets: ".project-infos_container",
          opacity: [1, 0],
          translateY: [0, 20],
        });
      var appearAnimation = anime
        .timeline({
          easing: tloptions.easing,
          duration: tloptions.duration,
        })
        .add({
          targets: ".project-infos_container",
          opacity: [0, 1],
          translateY: [20, 0],
        });
      await disappearAnimation.play;
      switch (value) {
        case "next":
          if (this.projectDisplayed.id < this.projects.length) {
            this.projectDisplayed = this.projects.find(
              (project) => project.id == this.projectDisplayed.id + 1
            );
          } else {
            this.projectDisplayed = this.projects.find(
              (project) => project.id == 1
            );
          }

          break;
        case "previous":
          if (this.projectDisplayed.id > 1) {
            this.projectDisplayed = this.projects.find(
              (project) => project.id == this.projectDisplayed.id - 1
            );
          } else {
            this.projects.length;
            this.projectDisplayed = this.projects.find(
              (project) => project.id == this.projects.length
            );
          }

        default:
          break;
      }
      disappearAnimation.finished.then(() => {
        appearAnimation.play;
      });
    },
    openMenu() {
      this.menuResponsiveDisplayed = true;
    },
    closeMenu() {
      var menuCloseTransition = anime({
        targets: "#menu-responsive_sidebar",
        translateX: [0, "100%"],
        opacity: [1, 0],
        easing: "easeInOutSine",
        duration: 400,
      });
      menuCloseTransition.play;
      menuCloseTransition.finished.then(() => {
        this.menuResponsiveDisplayed = false;
      });
    },
    onScroll(e) {
      //TODO: Dynamise menu 
      this.windowTop = window.pageYOffset;
      if(this.windowTop < 400) {
        this.menuLinkActive = "home"
      } else if(this.windowTop > 400 && this.windowTop < 1700) {
        this.menuLinkActive = "about"
      } else if(this.windowTop > 1700 && this.windowTop < 3300) {
        this.menuLinkActive = "works"
      } else {
        this.menuLinkActive = "contact"
      }
    },
    calcPosOfSection() {
      this.homePosition = this.$refs["section_home"].getBoundingClientRect().y;
      this.worksPosition = this.$refs["section_works"].getBoundingClientRect().y;
      this.aboutPosition = this.$refs["section_works"].getBoundingClientRect().y;
      this.contactPosition = this.$refs["section_contact"].getBoundingClientRect().y;

    }
  },
  async mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.calcPosOfSection();
    this.homeTransition();
    await axios
      .get("./assets/json/projects.json")
      .then((response) => (this.projects = response.data));
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
});
