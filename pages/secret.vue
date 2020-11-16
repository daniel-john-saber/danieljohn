<template>
  <div>
    <div class="columns"  style="margin-top: 70px;">
      <div class="column is-6"  style="margin-left: 0; margin-right: auto;">
        <div class="container">
          <div class="content">
            <a class="text_secret twitter-share-button is-white-text" href="https://twitter.com/intent/tweet?text=@danieljohn__%20what%20is%20cashboard?">i'm building something</a> 
            <div>
              <i></i><i></i>
            </div>
            <h2 class="subtitle" style="width: 900px">
              Want to be the first to hear about it?
            </h2>
            <div class="columns">
              <div class="column is-12">
                <form>
                  <b-field>
                    <input class="input is-primary" type="email" placeholder="email">
                      <input v-if="isSubmit == false" type="submit" v-on:click="submitted" style="margin-left:20px;" class="button is-success" value='enter'/>
                      
                      <button v-if="isSubmit == true" style="margin-left:20px;" class="button is-success is-outlined">
                        <span class="icon is-small">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-Success"></use>
                          </svg>
                        </span>
                          Woot!</button>
                  </b-field>
                </form>
                <div v-if="isSubmit">Let's ride!</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import * as THREE from "three";
import PinkButton from '~/components/PinkButton'
import { Icon } from 'ant-design-vue'
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2197972_2s0bhj6h68g.js', 
})
export default {
  layout: 'secretlayout',
  head: {
    script: [
      { src: 'vanta/three.min.js' },
      { src: 'vanta/vanta.globe.min.js' },
    ]
  },
  data () { 
    return { 
      isSubmit: false
    }
  },
  methods: { 
    submitted () { 
      this.isSubmit = true
    }
  },
  components: {
    PinkButton
  },
  async mounted() {
    this.isSubmit = false
    // window is only avaiable on browser
    if (process.browser) {
      window.THREE = THREE;
      const { default: GLOBE } = await import("@/static/vanta/vanta.globe.min.js");
     VANTA.GLOBE({
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 800.00,
      minWidth: 400.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xffe100,
      color2: 0x1fc0c0,
      size: 0.70,
      backgroundColor: 0x9d9dc5
    })
    }
  }
}
</script>

<style lang="scss">
.is-secret-title { 
  color: rgb(17, 17, 17);
  font-size: 80px;
  font-weight: 500px;
}
.is-card-background { 
background: rgba(255, 255, 255, 0.05) 81%;
}
.is-background-container { 
  height: 3em;
  background-size: auto;

}
.is-large-title { 
  font-size: 200
}
.article { 
  margin-bottom: -30px;
}
h3 { 
  font-size: 26px;
  padding-top: 20px;
  margin-bottom: -10px;
}
p { 
  font-size: 17px;

}
br { 
  padding-top: 30px;
}
.line{
  margin: 0 auto;
  width: 95%;
  height: -40px;
  border-bottom: 1px solid black;
  position: relative;
  padding-left: 70px 0;
  margin-top: 20px;
  margin-bottom: 20px;
}
i {
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 30px;
    left: 210px;
    background: url(http://i.imgur.com/lOBxb.png);
    -webkit-animation: barrelRoll 2s infinite linear;
    -webkit-animation-play-state: paused;
}
i:last-of-type {
    top: 32;
    left: 237px;
    -webkit-animation-name: invertBarrelRoll;
}

div:hover > i {
    -webkit-animation-play-state: running;
}

@-webkit-keyframes barrelRoll {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}

@-webkit-keyframes invertBarrelRoll {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(-360deg); }
}

.text_secret {
  transition: background-size .4s ease;
  background: linear-gradient(to bottom, transparent 62%, #d37766 0) center left/00% 30% no-repeat;
  font-family: 'Helvetica Neue', sans-serif; 
  font-size: 135px; 
  font-weight: bold; 
  letter-spacing: -1px; 
  line-height: 1; 
  text-align: center; 
  width: 200px;
  height: 47px;
  color: #28292b;
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




        
