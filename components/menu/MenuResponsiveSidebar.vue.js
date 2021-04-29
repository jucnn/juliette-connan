Vue.component("menu-responsive-sidebar", {
  template: `
    <div id="menu-responsive_sidebar">
        <div @click="$emit('click')" class="menu-responsive_close">
        <svg xmlns="http://www.w3.org/2000/svg" width="23.58" height="23.58" viewBox="0 0 23.58 23.58">
        <g id="Groupe_28" data-name="Groupe 28" transform="translate(-1199.732 -53.232)">
          <line id="Ligne_31" data-name="Ligne 31" y1="20.045" x2="20.045" transform="translate(1201.5 55)" fill="none" stroke="#ffde07" stroke-width="5"/>
          <line id="Ligne_32" data-name="Ligne 32" x2="20.045" y2="20.045" transform="translate(1201.5 55)" fill="none" stroke="#ffde07" stroke-width="5"/>
        </g>
      </svg>
      
        </div>
        <div class="menu-responsive_links">
            <a href="#home" @click="$emit('click')"><span>.</span> home</a>
            <a href="#works" @click="$emit('click')"><span>.</span> works</a>   
            <a href="#about" @click="$emit('click')"><span>.</span> about</a>
            <a href="#contact" @click="$emit('click')"><span>.</span> contact</a>
        </div>
    </div>
    `,
  mounted() {
    anime({
      targets: "#menu-responsive_sidebar",
      translateX: ["100%", 0],
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 400,
    });
  },
});
