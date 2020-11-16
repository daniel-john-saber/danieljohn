<template>
    <div class="card large">
        <div class="card-image">
            <figure class="image">
                <img :src="picture" alt="Image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4 no-padding">{{ title }}</p>
                    <p class="subtitle is-6"> {{ subtitle }} </p>
                </div>
            </div>
            <div class="content">
                {{ content }}
                <div class="background-icon"><span class="icon-twitter"></span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      required: false
    }
  }
}
</script>