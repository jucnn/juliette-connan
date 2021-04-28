Vue.component("works-card", {
  template: `
    <div class="works-card">
        <img class="works-card_img" :src="image" />
        <div class="works-card_description">
            <p class="works-card_category"><img src="./assets/img/icons/detail-wave-yellow.svg"/>{{category}}</p>
            <p class="highlight">{{title}}</p>
            <router-link :to="{ name: 'Project', params: { slug: slug }}">learn more</router-link>
        </div>
    </div>
    `,
  props: ["title", "slug", "category", "url", "image"],
});
