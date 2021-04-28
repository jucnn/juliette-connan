var Project = {
  template:
    `
    <section class="project">
    <img src="./assets/img/icons/detail-title-yellow.svg" />
    <h1>{{project.name}}</h1>
    <p class="project-description">{{project.description}}</p>
    <p v-if="project.projectURL">Can be seen <a :href="project.projectURL" target="_blank">here</a></p>
    <div>
      <div>
        <h3>Category : {{project.category}}</h3>
      </div>
      <div>
        <h3>What I've done</h3>
        <div v-for="done in project.done" :key="done">
          <p>{{done}}</p>
        </div>
      </div>
    </div>
  </section>
  
  `,
  data() {
    return {
      project: null,
    };
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
  },
};
