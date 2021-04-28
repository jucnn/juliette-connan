const Home = {
    template: `
    <div>
    <section id="home">
      <div class="home_container">
        <div class="home_presentation">
          <p>Hi!</p>
          <p>
            <img
              class="home_presentation-detail"
              src="./assets/img/icons/detail-title-red.svg"
            />
  
            I’m Juliette,<br />a front-end developer based in Paris<span
              class="home_presentation-dot"
              >.</span
            >
          </p>
        </div>
        <div class="home_resume">
          <p>download my <a href="" target="_blank">resume</a></p>
        </div>
      </div>
      <div class="home_discover">
        <p class="highlight">Discover my work</p>
        <img src="./assets/img/icons/arrow.svg" />
      </div>
    </section>
    <section id="works">
      <img src="./assets/img/icons/detail-title-yellow.svg" />
      <h1>Works</h1>
      <div class="works-container" :key="">
        <works-card v-for="project in projects"
        :title="project.name"
        :image="project.image"
        :category="project.category"
        :slug="project.slug"
        url="/"></works-card>
      </div>
    </section>
    <section id="about">
      <img src="./assets/img/icons/detail-title-blue.svg" />
      <h1>About</h1>
  
      <h3><img src="./assets/img/icons/detail-wave-blue.svg" /> experience</h3>
      <div class="experiences-container">
        <div class="experiences_item">
          <p class="highlight">
            Front end<br />
            developer
          </p>
          <p>Vmed agency - Paris</p>
          <p>2018 - now</p>
        </div>
        <div class="experiences_item">
          <p class="highlight">
            Developer web<br />
            master degree
          </p>
          <p>ECV Digital - Paris</p>
          <p>2019 - now</p>
        </div>
        <div class="experiences_item">
          <p class="highlight">UX Degree</p>
          <p>Sup de Création - Paris</p>
          <p>2018 - 2019</p>
        </div>
        <div class="experiences_item">
          <p class="highlight">
            Web Development<br />
            intense formation
          </p>
          <p>INSEEC Digital - Paris</p>
          <p>2018 (6 weeks)</p>
        </div>
        <div class="experiences_item">
          <p class="highlight">Au Pair</p>
          <p>London</p>
          <p>2017 - 2018</p>
        </div>
        <div class="experiences_item">
          <p class="highlight">
            Communication<br />
            Degree
          </p>
          <p>University Of Rennes</p>
          <p>2014 - 2017</p>
        </div>
      </div>
      <h3><img src="./assets/img/icons/detail-wave-blue.svg" /> skills</h3>
      <div class="skills-container">
        <div class="skills_item">
          <p><img src="./assets/img/logos/html5.png" alt="" /></p>
          <p class="highlight">html 5</p>
        </div>
        <div class="skills_item">
          <p><img src="./assets/img/logos/css3.png" alt="" /></p>
          <p class="highlight">css 3</p>
        </div>
        <div class="skills_item">
          <p><img src="./assets/img/logos/sass.png" alt="" /></p>
          <p class="highlight">sass</p>
        </div>
        <div class="skills_item">
          <p><img src="./assets/img/logos/javascript.png" alt="" /></p>
          <p class="highlight">js es6</p>
        </div>
        <div class="skills_item">
          <p><img src="./assets/img/logos/vuejs.png" alt="" /></p>
          <p class="highlight">vuejs</p>
        </div>
        <div class="skills_item">
          <p><img src="./assets/img/logos/github.png" alt="" /></p>
          <p class="highlight">github</p>
        </div>
        <div class="skills_item">
          <p><img src="./assets/img/logos/nodejs.png" alt="" /></p>
          <p class="highlight">nodejs</p>
        </div>
        <div class="skills_item">
          <p><img src="./assets/img/logos/mongodb.png" alt="" /></p>
          <p class="highlight">mongodb</p>
        </div>
        <div class="skills_item">
          <p><img src="./assets/img/logos/adobexd.png" alt="" /></p>
          <p class="highlight">adobe xd</p>
        </div>
        <div class="skills_item">
          <p><img src="./assets/img/logos/html5.png" alt="" /></p>
          <p class="highlight">ux sensitive</p>
        </div>
      </div>
    </section>
    <section id="contact">
      <img src="./assets/img/icons/detail-title-green.svg" />
      <h1>Contact</h1>
      <div class="contact_content">
        <div class="contact_email">
          <p class="highlight">Need my email ?</p>
          <a href="">juliettecnn[a]gmail.com</a>
        </div>
        <div class="contact_networks">
          <p class="highlight">Or see me there</p>
          <div>
            <a href="">linkedIn</a>
            <a href="">github</a>
          </div>
        </div>
      </div>
    </section>
  </div>
  
    `,
    data() {
      return {
        projects: null,
      };
    },
    async mounted() {
      await axios
        .get("./assets/json/projects.json")
        .then(
          (response) =>
            this.projects = response.data
        );
    },
  } 