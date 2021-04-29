Vue.component("project-popup", {
  template: `
      <section class="project" v-if="project">
      <div class="project-transition">
      <div class="project-transition_layer project-transition--yellow"></div>
      <div class="project-transition_layer project-transition--black"></div>
      </div>
      <div class="project-container container-fluid">
        <div class="project-close">
          <a @click="close()">
            <img src="./assets/img/icons/cross.svg" />
          </a>
        </div>
     
        <div class="project-infos_container row">
          <div class="project-infos col-12 col-xl-5">
            <h1 class="col-12 col-sm-8">{{project.name}}</h1>
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
        <a class="project-navigation_link" @click="$emit('previous', project.id)">Previous</a>
        <a class="project-navigation_link" @click="$emit('next', project.id)">Next</a>
      </div>
      </div>
    </section>
    
    `,
  data() {
    return {
      mainDuration: 800,
      easing: "easeOutExpo",
    };
  },
  props: {
    project: Object,
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
          keyframes: [
            { translateY: ["100%", 0] },
            { translateY: [0, "-100%"] },
          ],
        })
        .add(
          {
            targets: ".project-transition--black",
            keyframes: [
              { translateY: ["100%", 0] },
              { translateY: [0, "-100%"] },
            ],
          },
          "-= 400"
        )
        .add(
          {
            targets: ".project-container",
            opacity: [0, 1],
          },
          "-=" + this.mainDuration
        )
        .add(
          {
            targets: ".project-imgs",
            translateY: ["100%", "4%"],
            duration: 1200,
          },
          "-=" + this.mainDuration
        );
    },
    async close() {
      var animation = anime
        .timeline({
          easing: this.easing,
          duration: this.mainDuration,
        })
        .add({
          targets: ".project-imgs",
          translateY: ["4%", "30%"],
          opacity: [1, 0],
        })
        .add(
          {
            targets: ".project-container",
            opacity: [1, 0],
          },
          "-=" + this.mainDuration
        )
        .add(
          {
            targets: ".project-transition--yellow",
            keyframes: [
              { translateY: ["-100%", 0] },
              { translateY: [0, "100%"] },
            ],
          },
          "-= 500" 
        )
        .add(
          {
            targets: ".project-transition--black",
            keyframes: [
              { translateY: ["-100%", 0] },
              { translateY: [0, "100%"] },
            ],
          },
          "-= 400"
        );
      animation.play;
      animation.finished.then(() => {
        this.projectPopup = false;
        this.$emit("close");
      });
    },
    /*   }, */
  },
  async mounted() {
    this.transition();
  },
});
