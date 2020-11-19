<template>    
  <div>
    <div v-if="!$device.isDesktop" class="carotainer is-interest-container cont-float">
      <figure class="image is-160x160" style="z-index:1;">
        <img src="~/assets/interests/ducks.png">
      </figure>
      <div class="is-text-interest-position" style="z-index:1;">
        <a class="text_interest">{{ title }}</a> 
      </div>
      <div class="multi-button">
        <!-- <div class=""> -->
          <svg class="icon funbutton" aria-hidden="true">
            <use xlink:href="#icon-spotify"></use>
          </svg>
          <svg class="icon funbutton" aria-hidden="true">
            <use xlink::href="icon"></use>
          </svg>
        <!-- </div> -->
      </div>
    </div>
    <!-- <div v-else class=" carotainer-mobile is-interest-container cont-float">
      <figure class="image is-160x160" style="z-index:1;">
        <img src="~/assets/interests/ducks.png">
      </figure>
      <div class="is-text-interest-position" style="z-index:1;">
        <a class="text_interest">{{ title }}</a> 
      </div>
      <div class="multi-button">
          <svg class="icon funbutton" aria-hidden="true">
            <use xlink:href="#icon-spotify"></use>
          </svg>
          <svg class="icon funbutton" aria-hidden="true">
            <use xlink::href="icon"></use>
          </svg>
      </div>
    </div> -->
  </div>
</template>
               

<script>
import { Icon } from 'ant-design-vue'
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2197972_6hkz6cbpgbd.js', 
})
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
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
    },
    data() {
      return {
          isActive: false
      }
  },
  },
}
</script>

<style lang="scss">

.is-text-interest-position {
  position: absolute;
  top: 40%;
  right: -25%;
  text-align: right; 
  // float: right;

}
.text_interest {
  transition: background-size .4s ease;
  background: linear-gradient(to bottom, transparent 62%, #d37766 0) center left/00% 30% no-repeat;
  font-family: 'Helvetica Neue', sans-serif; 
  font-size: 40px; 
  font-weight: bold; 
  letter-spacing: -1px; 
  line-height: 1; 
  text-align: right; 
  width: 200px;
  height: 200px;
  // margin-top: 50px;
  color: #5386eb;
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

.is-h {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: bold;
  font-size: 40px;
  color: #35495e;
  letter-spacing: -1px;
  padding-bottom: 0px;
  padding-top: 20px;
}

// # card
.is-interest-container { 
  float: left;
  width: 100%;
  height: auto;
}
.carotainer {
  display: flex;
  height: auto;
  width: 200px;
  // margin-left: -100px;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  margin-right: 50px
}

// .carotainer:not(:first-child) {
//     margin-left: 0px;
// }

.carotainer:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}
.carotainer:hover {
  transform: translateX(20px);
  width: 120px;
  transition: 0.4s ease-out;
}
.carotainer:hover ~.card {
  position: relative;
  left: 500em;
  transition: 0.4s ease-out;
}

.cont-float {
    // --background:#FFFFFF;
    // --text:black;
    position: relative;
    height:12rem;
    box-shadow:0 0 2rem -1rem rgba(0,0,0,.05);
    .multi-button {
        z-index:0;
        position: absolute;
        top:1.25rem;
        left:1.25rem;
        border-radius:100%;
        width:0rem;
        height:0rem;
        transform: translate(-50%, -50%);
        transition: .25s cubic-bezier(0.25, 0, 0, 1);
        .funbutton {
            z-index: -1;
            display: grid;
            place-items: center;
            position: absolute;
            width:2em;
            height:2rem;
            border:none;
            border-radius:100%;
            background:var(--background);
            color:var(--text);
            transform: translate(-50%, -50%);
            cursor: pointer;
            transition: .25s cubic-bezier(0.25, 0, 0, 1);
            box-shadow:0 0 0rem -.25rem var(--background);
            &:hover {
                background:var(--text);
                color:var(--background);
                box-shadow:0 0 1rem -.25rem var(--background);
            }
            &:first-child:nth-last-child(1),
            &:first-child:nth-last-child(1) ~ * { //If there is 1 child
                &:nth-child(1) {
                    left:25%;
                    top:25%;
                }
            }
            &:first-child:nth-last-child(2),
            &:first-child:nth-last-child(2) ~ * { //If there are 2 children
                &:nth-child(1) {
                    left:37.5%;
                    top:18.75%;
                }
                &:nth-child(2) {
                    left:18.75%;
                    top:37.5%;
                }
            }
            &:first-child:nth-last-child(3),
            &:first-child:nth-last-child(3) ~ * { //If there are 3 children
                &:nth-child(1) {
                    left:50%;
                    top:15.625%;
                }
                &:nth-child(2) {
                    left:25%;
                    top:25%;
                }
                &:nth-child(3) {
                    left:15.625%;
                    top:50%;
                }
            }
            &:first-child:nth-last-child(4), //If there are 4 children, if first child is also 4th item from bottom get self, and
            &:first-child:nth-last-child(4) ~ * { //If there are 4 children, if first child is also 4th item from bottom get siblings
                &:nth-child(1) {
                    left:62.5%;
                    top:18.75%;
                }
                &:nth-child(2) {
                    left:37.5%;
                    top:18.75%;
                }
                &:nth-child(3) {
                    left:18.75%;
                    top:37.5%;
                }
                &:nth-child(4) {
                    left:18.75%;
                    top:62.5%;
                }
            }
        }
    }
    .container {
        position: absolute;
        width:100%;
        height:100%;
        border-radius:1rem;
        background:var(--background);
        color:var(--text);
    }
    &:hover .multi-button, .multi-button:focus-within { //Hover or a button inside is focused
        width:10rem;
        height:10rem;
    }
}

</style>





        
