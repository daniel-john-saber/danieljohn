<template>
    <b-carousel :indicator-inside="false">
        <b-carousel-item v-for="(item, i) in 6" :key="i">
            <span class="image">
              <img :src="getImgUrl(i)">
            </span>
        </b-carousel-item>
        <template slot="indicators" slot-scope="props">
            <span class="al image">
                <img :src="getImgUrl(props.i)" :title="props.i">
            </span>
        </template>
    </b-carousel>
</template>

<script>
export default {
    methods: {
      getImgUrl(value) {
          return '~/assets/pics/{value}'
      }
    }
}
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}