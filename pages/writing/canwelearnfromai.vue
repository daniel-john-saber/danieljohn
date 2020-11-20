<template>
  <div>
    <div class="columns is-vcentered">
       <div class="column is-8 is-centered"  style="margin-left: auto; margin-right: auto;">
          <div class="container is-one-half">
            <div id="background" class="is-background-container"/>
            <section class="hero is-one-half" >
              <div  class="hero-body">
                <vanta/>

                <div class="container" style="margin-top:12%">
                  <h1 class="title is-1 ">
                    Learning From Machines
                  </h1>
                  <h2 class="subtitle" style="width: 900px">
                    Perspectives on AI and other technological accelerators 
                  </h2>
                </div>
              </div>
            </section>
            <section class="hero is-full">
              <article  class="hero-body article content">
                <h3 style="margin-top: -10px">Forgotten History</h3>
                <p> Few inventions throughout human history can be categorized as fundamental innovations. Technologies that drastically change the course of human history mark inflection points of our development as a species.</p><p>Around 6,000 years ago, collective human knowledge existed within the fabric of people’s memories. Truths were exchanged in person, unlocked through speech, spread through trade and travel. Words iterated thousands of years ago are still preserved and heard today. Nonetheless, the vast majority of human history is unknown. Without a way to physically store information, generations of knowledge has been lost or transmuted.</p>
                <h3>The Inflection Point</h3>
                <p>When the Sumerians of Mesopotamia first scratched symbols onto clay tablets 5,000 years ago, they were simultaneously marking a definitive junction in human development. Scholars refer to this moment as the line between what we call history and prehistory. For the first time, human knowledge existed in physical form.</p><p>The eventual development of the printing press allowed writing to be directly duplicated and mass produced. Books became a centralization of knowledge, thus allowing information to be categorized and iterated upon. From writing grew science, philosophy, and hundreds of other academic disciplines. As the printing press was developed and intercontinental trade progressed, regional knowledge collectives were morphed into a worldwide collective of knowledge. Humans, for the first time, could efficiently transmit and store information. </p>
                <h3>The wheels spin ever faster</h3>
                <p>Writing enormously sped up the timeline of human invention. Building blocks of technologies could be documented, shared, and even collaborated on by dozens or even hundreds of people. Soon humans were creating all sorts of machines that automated tasks, increased productivity, and allowed for speedier transportation.</p><p>In the 1900’s, humans created the most audacious invention yet: the computer. It was the first device that could assist with information-processing — an invention with a memory itself. As computers got cheaper and more powerful, mathematicians and scientists got a crazy idea: what if they could get processors to reason and think themselves? It turns out that by implementing mathematical algorithms on state-of-the-art computer systems, machines can inhale massive amounts of data and make decisions on it. At the turn of the 21st century, artificial intelligence (AI) was born.</p><p>AI has the capability to be the biggest catalyst of human progress since our development of speech or writing. It also has the potential to end us all. Which outcome we get depends on how we develop AI, and how we learn from it.</p>
                <h3>Made in our image, but we have much to learn</h3>
                <p>Artificial intelligence was created by attempting to mimic the patterns in which humans thought. Like our brains, computer algorithm systems intake information through strings of neurons that communicate with each other to pass information along whether or not the input data satisfies certain criteria. The major difference between the human brain and an artificial neural network is how that information is transmitted.</p><p>Humans evolved for survival, not rationality. That's why we feel fear when we see something scary and suddenly get hungry driving by a Mcdonalds. These evolutionary neurological conditions have evolved us to use heuristics to make decisions. Heuristics are mental shortcuts that allow us to consolidate the mass of information we experience. Unfortunately, our heuristics are oftentimes wrong or misguided.</p><p>In his book Thinking Fast and Slow, Daniel Kahnemann suggests an antidote. By actively working to understand our biases, we can suppress erroneous intuition and incorporate objective data to make better decisions. This is what machines do. Artificial neural networks make decisions based on statistics, they construct probability distributions and weigh the likelihood of the desired outcome. Annie Duke, author of Thinking in Bets, asserts that life is a game of poker, not chess. We live better lives by taking better bets, and to take better bets, we must strive to calibrate our beliefs and predictions about the future to more accurately represent the world.
                <h3>Perspective is the achilles heel</h3>
                <p>The problem with AI’s statistical decision making is that it’s only as good as its training. A neural network that is shown a million pictures of a black cats will be great at recognizing black cats. But if you show it a tabby cat, it'll have no idea what it's looking at. AI is dominated by its context. While humans do have greater general reasoning abilities than current AI systems, humans too are dominated by our context. Our political ideologies are almost entirely shaped by our families, communities, and close friends. The role of our environment can explain nearly all of our behaviors as humans. This is an important distinction for AI development. A future, sentient AI will not necessarily be good or bad, but shaped by its programming background. We’ve already seen adverse side effects from bias programmed into artificial intelligence, from Amazon’s sexist job screening AI to a racist crime-reporting system. As we continue to build AI systems, we need to understand what prejudices are being programmed into these platforms and how we can negate and prevent those effects. Maybe then, by helping AI eliminate prejudices, we can identify and possibly eliminate our own.</p>
                <h3>Constructing a complementary existence</h3>
                <p>While we can’t edit or change our own human evolutionary background, we can change and control the context and inputs to any artificial neural network. It’s possible, and imperative, to create AI designed to foster harmonious interactions between people. In fact, artificial neural networks have already been implemented in ways that assist human group work, cooperation, and communication. In a Yale research study, AI and human players worked together in a complex online game in groups. The AI was programmed to occasionally mess up, then fess up and apologize for the mistake. In these situations, groups were able to solve the game’s problems quicker, especially for more complex tasks. Groups with these bots improved their median performance by 55.6%. In social situations where it may be frowned upon to admit mistakes or communicate transparently, AI can help eliminate social boundaries and augment our interactions. When implemented correctly, AI makes us more human. And the more human we become, perhaps the more nuanced computing systems we’ll be able to create. Potentially, even, to the degree that artifice and artificial will no longer apply, leaving us with a machine intelligence which is parallel, complementary, and supportive to ours.</p>
              </article>
            </section>
            <section> 
              <div class="line"/>
            </section>
            <section class="hero is-full">
              <div class="hero-body">
                <a class="text is-font twitter-share-button" href="https://twitter.com/intent/tweet?url=http://danieljohn.me/writing/canwelearnfromai">What did you think of this article? I'd love your feedback!</a> 
                  <!-- <pink-button
                      link="https://twitter.com/danieljohn___"
                      icon="#icon-14"
                    /> -->
              </div>
            </section>
        </div>
       </div>
    </div>
    <!-- <div class="container"> -->
    
   
  </div>
</template>

<script>
import * as THREE from "three";
import PinkButton from '~/components/PinkButton'

export default {
  head: {
    script: [
      { src: 'vanta/three.min.js' },
      { src: 'vanta/vanta.dots.min.js' },
    ]
  },
  components: {
    PinkButton
  },
  async mounted() {
    // window is only avaiable on browser
    if (process.browser) {
      window.THREE = THREE;
      const { default: DOTS } = await import("@/static/vanta/vanta.dots.min.js");
      VANTA.DOTS({
        el: '#background',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 300.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xfaf6eb,
        color2: 0x6978,
        backgroundColor: 0xade1ff,
        size: 6.10,
        spacing: 16.00
      })
    }
  }
}
// export default {
//   components: {
//     Vanta
//   },
//   data () {
//     return {
//     }
//   }
// }
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
// .article { 
//   font-family: 'Mukta', sans-serif;
// }
.is-background-container { 
  height: 3em;
}
.is-large-title { 
  font-size: 200
}
.article { 
  // font-size: 500px;
  // font-weight: 900;
  margin-bottom: -30px;
}
h3 { 
  font-size: 26px;
  // font-weight: 200;
  padding-top: 20px;
  margin-bottom: -10px;
}
p { 
  font-size: 17px;
  // padding-top: 10px;

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

.text {
  transition: background-size .4s ease;
  background: linear-gradient(to bottom, transparent 62%, #d37766 0) center center/0% 75% no-repeat;
  // font-family: 'Montserrat', sans-serif; 
  font-size: 1.33rem;
  font-weight: 00px;
  // color: rgba(0, 68, 255, 0.7);
  color: #35495e;
  // padding: 0 6px 2px 6px;
  cursor: pointer;
    
    letter-spacing: -.1rem;
    font-family:  'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    margin-right: 10px;
  &:hover {
    background-size: 100% 100%;
    color: rgba(17, 0, 252, 0.7);
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
</style>