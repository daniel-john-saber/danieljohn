<template>
  <div >
    <section class="hero" >
      <div class="hero-head">
        <div class="container has-shadow">
         <!-- mobile nav -->
          
          <nav v-if="!isMobile()" class="navbar   cl-effect-6" role="navigation" aria-label="main navigation">
            <div class="container" style="width: auto;">
              <!-- <div class="column is-2" style="margin-bottom: 10px"> -->
                <div class="navbar-brand">
                    <img
                        src="~assets/logo-mobile.png"
                        alt="peak"
                        width="110"
                        class="is-pad-left"
                        
                    >
                  <a role="button" class="navbar-burger is-right" aria-label="menu" data-target="navMenu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                <!-- </div> -->
              </div>
              <div class="level navbar-menu" id="navMenu">
                <div class="navbar-end" style="margin-top: 3px">
                  <div class="columns is-mobile">
                    <div class="column">
                      <a class="navbar-item is-tab is-nav-text" href="/">Home</a>
                    </div>
                    <div class="column">
                      <a class="navbar-item is-tab is-nav-text" href="/writing/canwelearnfromai">Writing</a>
                    </div>
                    <div class="column">
                      <a class="navbar-item is-tab is-nav-text" href="/projects">Projects</a>
                    </div>
                    <div class="column">
                      <a class="navbar-item is-tab is-nav-text" href="/about">About</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <!-- Desktop nav -->
          <nav v-if="isMobile()" class="navbar   cl-effect-6" role="navigation" aria-label="main navigation">
            <div class="container" style="width: auto;">
              <!-- <div class="column is-2" style="margin-bottom: 10px"> -->
                <div class="navbar-brand">
                    <img
                        src="~assets/logo-mobile.png"
                        alt="peak"
                        width="110"
                        class="is-pad-left"
                        
                    >
                  <a role="button" class="navbar-burger" aria-label="menu" data-target="navMenu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                <!-- </div> -->
              </div>
              <div class="level navbar-menu" id="navMenu">
                <div class="navbar-end" style="margin-top: 3px">
                  <div class="columns is-mobile">
                    <div class="column">
                      <a class="navbar-item is-tab is-nav-text" href="/">Home</a>
                    </div>
                    <div class="column">
                      <a class="navbar-item is-tab is-nav-text" href="/writing/canwelearnfromai">Writing</a>
                    </div>
                    <div class="column">
                      <a class="navbar-item is-tab is-nav-text" href="/projects">Projects</a>
                       <!-- @click="isActive = !isActive" :disabled="isActive" -->
                    </div>
                    <div class="column">
                      <a class="navbar-item is-tab is-nav-text" href="/about">About</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
    <!-- <section v-if="isActive"> 
      <div class="columns">
        <div class="column is-6" style="margin-left: 900px;">

          <message v-model="isActive" aria-close-label="Close message" style="margin-left: -250px; margin-right: auto;">
              <a class="texti" href="/projects/secret">coming soon</a> 
          </message>
        </div>
      </div>
    </section> -->

    <section class="main-content columns">
      <div class="container column is-10" >
        <nuxt />
      </div>
    </section> 
  </div>
</template>
<script>
if (process.browser) {
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  });
}

// import mobile from "~/mixins/mobile.js";
export default {
  // mixins: [mobile],
  data() {
      return {
          isActive: false
      }
  },
  methods: {
    isMobile() {
      if (process.browser) {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      }
    }
  },
  computed: { 

  }

}
</script>
<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.is-nav-text { 
  letter-spacing: 3px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


.cl-effect-6 a {
  margin: 0 10px;
  padding: 10px 20px;
}

.cl-effect-6 a::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #2C2C54;
  content: '';
  -webkit-transition: top 0.3s;
  -moz-transition: top 0.3s;
  transition: top 0.3s;
}

.cl-effect-6 a::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background: #2C2C54;
  content: '';
  -webkit-transition: height 0.3s;
  -moz-transition: height 0.3s;
  transition: height 0.3s;
}

.cl-effect-6 a:hover::before {
  top: 100%;
  opacity: 1;
}

.cl-effect-6 a:hover::after {
  height: 100%;
} 
.has-shadow {
  padding: 8px 15px;
} 
#backy { 
  background-color: #193c6d;
  filter: progid:DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#faf7f0', endColorstr='#f0e1b9');
  background-image: url(//img.alicdn.com/tps/TB1d.u8MXXXXXXuXFXXXXXXXXXX-1900-790.jpg);
  background-size: 100%;
  background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0, #faf7f0), color-stop(100%, #f0e1b9));
  background-image: -webkit-linear-gradient(135deg, #faf7f0, #f0e1b9);
  background-image: -moz-linear-gradient(45deg, #faf7f0, #f0e1b9);
  background-image: -ms-linear-gradient(45deg, #faf7f0 0, #f0e1b9 100%);
  background-image: -o-linear-gradient(45deg, #faf7f0, #f0e1b9);
  background-image: linear-gradient(135deg, #faf7f0, #f0e1b9);
  text-align: center;
  margin: 0px;
  overflow: hidden;
}
.is-pad-left { 
  padding-left: 10px;
}


.texti {
  transition: background-size .4s ease;
  background: linear-gradient(to bottom, transparent 62%, #d37766 0) center left/00% 30% no-repeat;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;

  font-size: 1.33rem;
  font-weight: 000;
  letter-spacing: 3px;
  margin-left: 400px;
  width: 200px;
  height: 47px;
  color: #909ca8;
  cursor: pointer;   
    letter-spacing: .1rem;
    margin-right: 10px;
  &:hover {
    background-size: 100% 100%;
    color: rgba(70, 118, 250, 0.7);
  }
  &:active {
    background-size: 80% 100%;
  }
  &-container {
    z-index: 1;
    color: rgba(110, 151, 255, 0.7);
    position: relative;
    background-color: #fff;
    padding: 60px;
    box-shadow: 0 0 90px 10px rgba(255, 255, 255, 0.15);
  }
}
</style>
