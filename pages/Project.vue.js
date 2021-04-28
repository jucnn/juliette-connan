/* var Project = {
  template: `
    <section class="project" v-if="project">
    <div class="project-transition">
    <div class="project-transition_layer project-transition--yellow"></div>
    <div class="project-transition_layer project-transition--black"></div>
    </div>
    <div class="project-container container-fluid">
      <div class="project-close">
        <a @click="close">
          <img src="./assets/img/icons/cross.svg" />
        </a>
      </div>
   
      <div class="row">
        <div class="project-infos col-12 col-xl-5">
          <h1 class="col-12 col-sm-6">{{project.name}}</h1>
          <p class="project-description">{{project.description}}</p>
          <div class="project-details">
            <div v-if="project.projectURL">
              <p>
                <span class="highlight">Website :</span>
                <a :href="project.projectURL" target="_blank"
                  >{{project.projectURL}}</a
                >
              </p>
            </div>
            <div>
              <h3 class="highlight">What I've used</h3>
              <div v-for="used in project.used" :key="used">
                <p>{{used}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="project-imgs col-12 col-xl-7">
          <div v-for="(img, index) in project.imgs" :key="index">
            <img :src="img" />
          </div>
        </div>
      </div>
      <div class="project-navigation">
      <a class="project-navigation_link">Previous</a>
      <a class="project-navigation_link">Next</a>
    </div>
    </div>
  </section>
  </transition>

  
  `,
  data() {
    return {
      project: null,
      mainDuration: 600,
      easing: "easeOutExpo"
    };
  },
  methods: {
    transition() {
      anime
        .timeline({
          easing: this.easing,
          duration: this.mainDuration,
        })
        .add({
          targets: ".project-transition--yellow",
          translateY: ["100%", 0],
        })
        .add(
          {
            targets: ".project-transition--black",
            translateY: ["100%", 0],
          },
          "-= 300"
        )
        .add({
          targets: ".project-transition--yellow",
          height: 0,
        }, "-=" + this.mainDuration)
        .add({
          targets: ".project-transition--black",
          height: 0,
        }, "-= 300")
        .add({
          targets: ".project-container",
          opacity: [0,1],
        }, "-=" + this.mainDuration)
        .add({
          targets: ".project-imgs",
          translateY: ["100%", 0],
          duration: 1200,
        }, "-=" + this.mainDuration);
    },
    test() {
      anime.timeline({
        easing: this.easing,
        duration: this.mainDuration,
      }).add({
        targets: ".project-imgs",
        translateY: [0, "-100%"],
        duration: 1200,
      });
    },
     close() {
      

      this.$router.push('/')
    }
  },
  async mounted() {
    await axios
      .get("./assets/json/projects.json")
      .then(
        (response) =>
          (this.project = response.data.filter(
            (project) => project.slug == this.$route.params.slug
          )[0])
      );

    this.transition();
  },
 
};
 */