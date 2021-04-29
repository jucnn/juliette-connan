Vue.component("works-card", {
  template: `
    <div class="works-card_container col-12 col-md-6">
      <div class="works-card">
          <img class="works-card_img" :src="image" />
          <div class="works-card_description">
              <p class="works-card_category"><img src="./assets/img/icons/detail-wave-yellow.svg"/>{{category}}</p>
              <p class="highlight">{{title}}</p>
              <a @click="$emit('click', slug)">learn more</a>
          </div>
      </div>
    </div>
    `,
  props: ["title", "slug", "category", "url", "image"],
});
