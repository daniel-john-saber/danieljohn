<template>
<div clas="columns is-mobile is-multiline'">
    <div class="column" style="overflow: auto;">
      <div @mouseover="hover = true" @mouseleave="hover = false" class="container write-block is-small">
        
        <article class="media">
          <figure class="media-left" style="margin-top: auto;">
            <p class="image is-64x64">
              <svg class="iconi" aria-hidden="true">
                <use xlink:href="#icon-ALGORITHM"></use>
              </svg>
            </p>
          </figure>
          <my-icon/>
          <div class="media-content">
            <div class="content is-left" > 
                <a class="text is-font mr-5" href="/writing/canwelearnfromai" style="margin-bottom:-55%; margin-right:-55%;">
                Learning From Machines</a> 
                <span class="container">
                  <svg class="icon is-small" aria-hidden="true">
                    <use xlink:href="#icon-calender"></use>
                  </svg>
                  <small style="margin-top: -80px">11/14/2020</small>
                </span>
                
                <!-- <div clas="columns is-mobile is-multiline'">
                 <div class="column" > -->

                    <p class="is-subtitle is-multiline">
                      Perspectives on AI and technological accelerators
                    </p>
                 <!-- </div>
                </div> -->
            </div>
            <nav class="level is-mobile is-higher">
              <div class="level-left">
                <a class="level-item">                       
                  <span class="icon is-small"><i class="fas fa-reply"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav>
          </div>
          <span v-if="hover">
            <div class="back is-background-container">
        
            <div class="media-right is-higher">
              <a class="twitter-share-button" href="https://twitter.com/intent/tweet?url=http://localhost:54083/writing/canwelearnfromai" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-14"></use>
                </svg>
              </a>
            </div>
            </div>
        </span>
        </article>
      </div>
    </div>
</div>
</template>
<script>
import { Icon } from 'ant-design-vue'
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2197972_is1hveuufj7.js', 
})

export default {
  data() {
    return {
      hover: false,
    };
  },
  head: {
    script: [
      { src: 'vanta/three.min.js' },
      { src: 'vanta/vanta.fog.min.js' },
    ]
  },
  async mounted() {
    if (process.browser) {
      window.THREE = THREE;
      const { default: FOG } = await import("@/static/vanta/vanta.fog.min.js");
      VANTA.FOG({
        el: '.back',
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xededed,
        midtoneColor: 0xffffff,
        lowlightColor: 0x8c76f5,
      })
    }
  }
}
</script>

<style lang="scss" scoped >
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&display=swap');
  .text {
    transition: background-size .4s ease;
    background: linear-gradient(to bottom, transparent 62%, #d37766 0) center center/0% 75% no-repeat;
    // font-family: 'Montserrat', sans-serif; 
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1.33rem;
    font-weight: 00px;
    color: #35495e;
    cursor: pointer;
      
      letter-spacing: -.1rem;
      // font-family:  'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      // 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      margin-right: 10px;
    &:hover {
      background-size: 100% 100%;
      color: rgba(250, 250, 240, 0.7);
    }
    &:active {
      background-size: 80% 100%;
    }
    &-container {
      z-index: 1;
      color: rgba(179, 190, 219, 0.7);
      position: relative;
      background-color: #fff;
      padding: 60px;
      box-shadow: 0 0 90px 10px rgba(255, 255, 255, 0.15);
    }
  }
  .is-subtitle {
    margin-top: -2px;
    white-space: wrap;
    text-overflow: wrap;
  }
  body {
    background: rgb(121, 175, 211);
    font-family: 'Ubuntu', sans-serif;
    color: #2a2a2a;
  }
  .write-block { 
    border-radius: 15px;
    padding: 20px;
    width: auto;
    height: auto;
    border: 2px solid #adbef5;
    margin-top: 20px;
    text-overflow: wrap;
}

.icony {
  width: 3em; height: 3em;
  vertical-align: -20000em;
  fill: currentColor;
  overflow: hidden;
  margin-left: 10px
 }
.iconi {
 width: 3em; height: 3em;
 vertical-align: 60px;
 fill: currentColor;
 overflow: hidden;
 margin-top: -0px;
 margin-left: 6px
 }
 .is-font { 
   font-family: 'Montserrat', sans-serif;
 }
 .art-but { 
   background-color: transparent;
 }
 .is-date-text { 
   letter-spacing: 2px;
   padding-left: 5px;
   font-family: 'Chakra Petch', sans-serif;
 }

.write-block::after {
  //content: '\201D';
  position: absolute;
  bottom: -10%;
  right: 5%;
  font-size: 120px;
  opacity: 0.2;
  background: transparent;
  filter: invert(1);
  pointer-events: none;
}
.write-block:hover {
  color: #24096e;
  box-shadow: 20px 50px 100px rgba(0, 0, 0, 0.5);
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  transition: all 0.5s ease-in;
  pointer-events: none;
  width: 100%;
  height: 200%;
  overflow: hidden;
}

.write-block:hover,
.write-block:hover~.bg {
background: hsla(9, 81%, 61%, 1);
background: linear-gradient(45deg, #bbc4e9 90%, #94a5e6 96%);
background: -moz-linear-gradient(45deg, #bbc4e9 90%, hsla(224, 100%, 50%, 0.7) 15%);
background: -webkit-linear-gradient(45deg, #bbc4e9 90%, hsla(224, 100%, 50%, 0.7) 15%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#bbc4e9", endColorstr="#0043FF", GradientType=1 );// .box.box2:hover~.bg {
}

 </style>
