<template>
  <section class="hero is-default">
    <div class="hero-body">
      <div class="container">

        <div class="columns is-vcentered is-centered">
          <div class="column is-5 ">
            <!-- <div class="container"> -->
              <div class="card is-project-card">
                <div class="card-image">
                    <figure class="image is-4by3 is-project-image">
                        <a><img class="is-project-card" src="~/assets/projects/dj.png"></a>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <a class="text_project ml-0">danieljohn.me</a>
                        <p class="is-subtitle">this site!</p>
                        <div class=" is-multi-tag" >
                            <div class="funtag" style="margin-bottom: 10px;">
                              <b-tag rounded class="funtag" style="position: absolute; top: 0;"><b>website</b></b-tag>
                              <b-tag rounded class="funtag" style="position: absolute; top: 0; margin-left:55px"><b>vue.js</b></b-tag>
                            </div>
                            
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <div class="column is-5">
              <div class="card is-project-card">
                <div class="card-image">
                    <figure class="image  is-4by3">
                        <a href="/projects/secret"><img class="is-project-card" src="~/assets/projects/secret.png"></a>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <a class="text_project" href="/projects/secret">secret</a>
                        <p class="is-subtitle">???</p>
                        <div class="field is-grouped multibutton" >
                           <div class=" is-multi-tag" >
                            <div class="funtag" style="margin-bottom: 10px;">
                              <b-tag rounded class="funtag" style="position: absolute; top: 0;"><b>web app</b></b-tag>
                              <b-tag rounded class="funtag" style="position: absolute; top: 0;margin-left:55px"><b>vue.js</b></b-tag>
                              <!-- <b-tag rounded class="funtag" style="position: absolute; top: 0; margin-left:65px;"><b>python</b></b-tag> -->
                            </div>
                          </div>
                            
                        </div>
                    </div>
                </div>
              </div>
              </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
  </section>
</template>
<script>
export default {
  layout: 'default'
}
</script>
<style scoped lang="scss">
  
  
  .is-project-card { 
    width: 90%;

    /* height: auto; */
  }
  .is-project-card:hover { 
    transform:scale(1.03);
    filter:blur(0px);
    opacity:1;
    box-shadow:0 8px 20px 0px rgba(0,0,0,0.125);
    /* height: auto; */
  }
  .card-image { 
    transform:scale(0.97);
  }
  .is-subtitle { 
    // margin-left: -47%;
    font-size: 18px;
    margin-top: -5px;
  }
.text_project {
  transition: background-size .4s ease;
  background: linear-gradient(to bottom, transparent 62%, #d37766 0) center left/00% 30% no-repeat;
  font-family: 'Helvetica Neue', sans-serif; 
  font-size: 35px; 
  font-weight: bold; 
  letter-spacing: -1px; 
  line-height: 0; 
  text-align: left; 
  width: 200px;
  padding-top: -200px;
  height: 47px;
  color: #28292b;
  cursor: pointer;
    letter-spacing: .1rem;
    // margin-left: -43%;
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
    padding: 0px;
    box-shadow: 0 0 90px 10px rgba(255, 255, 255, 0.15);
  }
}

.is-multi-tag {
  z-index:0;
  position: absolute;
  bottom:2.25rem;
  left:5.45rem;
  // border-radius:100%;
  // width:0rem;
  // height:0rem;
  // transform: translate(-50%, -50%);
  // transition: .25s cubic-bezier(0.25, 0, 0, 1);
  .funtag {
      // z-index: 6;
      display: grid;
      place-items: center;
      position: absolute;
      // background-color:rgb(243, 128, 128);
      // transform: translate(-50%, -50%);
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
              right:25%;
          }
      }
      &:first-child:nth-last-child(2),
      &:first-child:nth-last-child(2) ~ * { //If there are 2 children
          &:nth-child(1) {
              // right:37.5%;
              right:25%;
              // bottom:18.75%;

          }
          &:nth-child(2) {
              // right:1%;
              left:-50px;
          }
      }
      &:first-child:nth-last-child(3),
      &:first-child:nth-last-child(3) ~ * { //If there are 3 children
          &:nth-child(1) {
              left:50%;
          }
          &:nth-child(2) {
              left:25%;
          }
          &:nth-child(3) {
              left:15.625%;
          }
      }
      &:first-child:nth-last-child(4), //If there are 4 children, if first child is also 4th item from bottom get self, and
      &:first-child:nth-last-child(4) ~ * { //If there are 4 children, if first child is also 4th item from bottom get siblings
          &:nth-child(1) {
              left:62.5%;
              bottom:18.75%;
          }
          &:nth-child(2) {
              left:37.5%;
              bottom:18.75%;
          }
          &:nth-child(3) {
              left:18.75%;
              bottom:37.5%;
          }
          &:nth-child(4) {
              left:18.75%;
              bottom:62.5%;
          }
      }
  }
  }
</style>