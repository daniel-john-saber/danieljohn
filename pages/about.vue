<template>
  <div>
    
      <!-- <section class="hero is-small">
        <div class="hero-body"> -->
    <div class="hero">
      <div class="hero-body">
          <div class="container">
            <h1 class="title is-1">
              About Me
            </h1>
            <h2 class="subtitle pt-6">
              	👋  I'm Daniel Schorin. I'm a Data Science Consultant at <a href="https://home.kpmg/us/en/home/insights/2015/01/data-and-analytics.html">@KPMG</a>
            </h2>
          </div>
          <hr>
          <b-carousel-list
                  v-model="values"
                  :data="items"
                  :arrow="arrow"
                  :arrow-hover="arrowHover"
                  :items-to-list="perList"
                  :repeat="repeat"
                  :has-drag="drag"
                  :has-grayscale="gray"
                  :has-opacity="opacity" />
      </div> 
      <template>
          <b-tabs type="is-toggle" expanded>
              <b-tab-item>
                  <template slot="header">
                      <span class="icon is-small">
                        <font-awesome-icon :icon="['fas', 'atlas']"/>
                      </span>
                        <span>    My Story </span>
                  </template>
                  <template>
                      <section>
                          <b-steps v-model="activeStep">
                              <template v-for="(step, index) in steps">
                                  <b-step-item
                                      v-if="step.displayed"
                                      :key="index"
                                      :label="step.label">
                                      {{ step.content }}
                                  </b-step-item>
                              </template>
                          </b-steps>
                      </section>
                  </template>
                  <card
                      title="Responsive"
                      icon="cellphone-link"
                    >
                      <b class="has-text-grey">
                        Every
                      </b> component is responsive
                </card>

              <!-- LEVEL -->
                <nav class="level">
                  <!-- Left side -->
                  <div class="level-left">
                    <div class="level-item">
                      <p class="subtitle is-5">
                        <strong>123</strong> posts
                      </p>
                       <figure class="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/128x128.png">
                      </figure>
                    </div>
                  </div>

                  <!-- Right side -->
                  <div class="level-right">
                    <p class="level-item">
                      <strong>All</strong>
                      I was 20 when I learned how to snowboard
                    </p>
                    
                  </div>
                </nav>

            <!-- Columns  -->
                <div class="columns ">
                      <div class="column is-half">two-fifths
                        <span class="container"> 
                          <figure class="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/128x128.png">
                          </figure>
                        </span>
                      </div>
                      <div class="column is-half is-centered">two-fifths
                        <h1 class="title">Title</h1>
                        <h2 class="subtitle">Subtitle</h2>
                      </div>
                </div>
              </b-tab-item>
              <!-- New Tab  -->
              <b-tab-item>
                  <template slot="header">
                      <span class="icon is-small">
                        <font-awesome-icon :icon="['fas', 'heart']"/>
                      </span>
                      <span>    My Favorite Things </span>
                  </template>
                  
                  <h1 class="title"> Musicians </h1>
                  <hr>

                  <div class="columns is-mobile is-centered is-multiline"> 
                    
                      <div class="column is-flex is-horizontal-center is-centered">
                        <div class="container is-flex is-horizontal-center">
                          <div class="image is-circle is-128x128">
                            <img class="is-rounded" src="/smino.jpeg">
                          </div>
                          <div class="newline">      
                            <h2 class="subtitle newline"><strong>Smino</strong></h2>
                          </div>
                          <div class="container is-flex is-horizontal-center">      
                            <span class="icon">
                              <font-awesome-icon :icon="['fab', 'spotify']"/>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="column is-flex is-horizontal-center">
                        <div class="image is-128x128 is-flex is-horizontal-center">
                          <img class="is-rounded" src="/tourist.jpg">
                        </div>
                      </div>
                      <div class="column is-flex is-horizontal-center">
                        <div class="image is-128x128 is-flex is-horizontal-center">
                          <img class="is-rounded" src="/ford.jpg">
                        </div>
                      </div>
                  </div>
                  <div class="columns is-centered"> 
                    <div class="box">
                      <div class="column is-flex is-horizontal-center is-newtext">
                        
                        <!-- <h2 class="subtitle"><strong>Smino</strong></h2>
                        <button class="button is-small">
                          <span class="icon">
                            <font-awesome-icon :icon="['fab', 'spotify']"/>
                          </span>
                         <span>Smino</span>
                        </button> -->
                        
                          <div class="media">
                            <div class="media-content is-horizontal-center">
                              <p class="title is-5 is-spaced">
                              <!-- <h2 class="subtitle"><strong>smino</strong></h2> -->
                              smino 
                              </p>
                            </div>
                            <div class="media"> 
                              <span class="icon">
                                <font-awesome-icon :icon="['fab', 'spotify']"/>
                              </span>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div class="column is-flex is-horizontal-center">
                        <h2 class="subtitle">Tourist</h2>
                        <div class="circle"> 
                          
                        </div>
                      </div>
                      <div class="column is-flex is-horizontal-center">
                        <h2 class="subtitle">ford.</h2>
                    </div>
                  </div>
              </b-tab-item>
                  
                                        <!-- </div>
                  </section> -->
                  
            

              <!-- New Tab  -->
              <b-tab-item>
                  <template slot="header">
                      <span class="icon is-small">
                        <font-awesome-icon :icon="['fas', 'microphone']"/>
                      </span>
                        <span>    Talks </span>
                  </template>
              </b-tab-item>
              
              
          </b-tabs>
      </template>
      
      <section class="section is-small pt-6">
        

      </section>
    </div>
   
        <!-- </div>
      </section> -->
    
      
  </div>                
</template>

<script>
import Card from '~/components/Card'

export default {
    components: {
      Card
    },
    data() {
        return {
            // tab control 
            activeTab: 0,
            showMusic: true,
            showBooks: false,
            multiline: true,

            arrow: true,
            arrowHover: true,
            drag: true,
            gray: false,
            opacity: false,
            values: 1,
            perList: 1,
            repeat: false,
            items: [
                {
                    title: 'Slide 1',
                    image: '/0.jpg'
                },
                {
                    title: 'Slide 1',
                    image: '/1.jpg'
                },
                {
                    title: 'Slide 2',
                    image: '/2.jpg'
                },
                {
                    title: 'Slide 3',
                    image: '/3.jpg'
                },
                {
                    title: 'Slide 3',
                    image: '/4.jpg'
                },
                {
                    title: 'Slide 4',
                    image: '/5.jpg'
                },
                {
                    title: 'Slide 6',
                    image: '/6.jpg'
                },
                {
                    title: 'Slide 7',
                    image: '/7.jpg'
                },
                {
                    title: 'Slide 7',
                    image: '/8.jpg'
                },
                {
                    title: 'Slide 4',
                    image: '/9.jpg'
                },
                {
                    title: 'Slide 6',
                    image: '/10.jpg'
                },
                {
                    title: 'Slide 7',
                    image: '/11.jpg'
                },
                {
                    title: 'Slide 6',
                    image: '/12.jpg'
                },
                {
                    title: 'Slide 7',
                    image: '/13.jpg'
                },
                {
                    title: 'Slide 6',
                    image: '/14.jpg'
                },
                {
                    title: 'Slide 7',
                    image: '/15.jpg'
                },
            ]
        }
        
    }, 
    computed: {
              baseSteps() {
                  return [
                      {
                          label: 'Early Years',
                          content: 'Pictures: Lorem ipsum dolor sit amet.',
                          displayed: true,
                      },
                      {
                          label: 'College',
                          content: 'Music: Lorem ipsum dolor sit amet.',
                          displayed: this.showMusic,
                      },
                      {
                          label: 'Now',
                          content: 'Videos: Lorem ipsum dolor sit amet.',
                          displayed: true,
                      }
                  ]
              },
              steps() {
                  const steps = [...this.baseSteps]
                  return steps
              },
              musicians() {
                  return [
                      {
                          name: 'Smino',
                          img_path: '/smino.jpg',
                          displayed: true,
                      },
                      {
                          name: 'Tourist',
                          img_path: 'tourist.jpg',
                          displayed: true,
                      },
                      {
                          name: 'ford.',
                          img_path: 'ford.jpg',
                          displayed: true,
                      }
                  ]
              },
    }
}
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.is-horizontal-center {
  justify-content: center;
}
.is-newtext{
  display:flex;
  flex-direction:column;
}
.circle {
    /* border: solid 1px #555; */
    border-radius: 50%;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    color: #4a4a4a;
    display: block;
    padding: 3rem;
}
.newline {
    display: block;
}

.is-circle:hover { 
    /* display: block; */
    width: 150px;
    height: 150px;
    margin: 1em auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-border-radius: 99em;
    -moz-border-radius: 99em;
    border-radius: 99em;
    border: 5px solid #eee;
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
}
</style>

