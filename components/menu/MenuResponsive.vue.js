Vue.component("menu-responsive", {
  template: `
    <div id="menu-responsive" class="container">
        <div class="row justify-content-between align-items-center">
            <div>
                <a href="/"><img src="./assets/img/logo-responsive.png" alt=""></a>
            </div>
            <div @click="$emit('click')">
                <div class="menu-responsive_btn">
                    <span></span>
                    <span></span>    
                    <span></span>    
                    <span></span>    
                    <span></span>    
                    <span></span>    
                    <span></span>    
                    <span></span>    
                    <span></span>    
                </div>
             </div>
        </div>
      
    </div>
    `,
});
