<!--
<template>
    <section class="section">
        <div class="container">
            <h1 class="title">
                Hello World
            </h1>
            <p class="subtitle">
                My first website with <strong>Bulma</strong>!
            </p>
        </div>
  </section>
</template> -->

<template>
    <section class="hero is-small is-default has-background-light-grey">
      <div class="hero-body">
        <div id="is-one-half" class="container has-text-centered">
            <div class="columns is-8">
                <div class="column">
                    <div class="card is-4by3">
                        <div class="card-image is-small">
                            <figure class="image" width="100" height="100">
                                <img src="~/assets/posts/post1.png" alt="Image" >
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 no-padding">Machine Learning for Self Optimization</p>
                                    <p class="subtitle is-6"> How we can change our most ingrained behaviors by taking inspiration from linear algebra</p>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="column">
                    <div class="card is-4by3">
                        <div class="card-image">
                            <figure class="image" width="100" height="100">
                                <img src="~/assets/productionize.jpg" alt="Image" >
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 no-padding">Productionizing Machine Learning and Deeping Learning Models</p>
                                    <p class="subtitle is-6">You have a high performing model and you want to implement it into an application. Here's how.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
      </div>
    </section>
</template>
<script> 
</script>
    export default {
        name: 'About',
    }
</script> 
<style scoped>

</style>