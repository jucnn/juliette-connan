Vue.component("menu-desktop", {
    template: `
    <div id="menu">
        <a href="/"><img src="./assets/img/logo.svg" alt=""></a>
        <nav>
            <ul>
                <li><a id="link-home" href="#" :class="[linkactive == 'home' ? 'active' : '']">home</a></li>
                <li><a id="link-works" href="#works"  :class="[linkactive == 'works' ? 'active' : '']">works</a></li>
                <li><a id="link-about" href="#about"  :class="[linkactive == 'about' ? 'active' : '']">about</a></li>
                <li><a id="link-contact" href="#contact"  :class="[linkactive == 'contact' ? 'active' : '']">contact</a></li>
            </ul>
        </nav>
    </div>
    `,
    props: {
        linkactive: String,
    }
});