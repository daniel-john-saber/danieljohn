<template>
  <a class="button is-large is-white is-pinkbut is-rounded" :href="link">
    <span class="icon is-small" style="height: 2.2x; width: 2.2px; margin-left: -13px; padding: 20px;">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="icon" :v-if="tab == true" target="_blank"></use>
        <use :xlink:href="icon" :v-if="tab == false"></use>

      </svg>

    </span>
    <span class="has-letter-spacing">{{ title }}</span>
  </a>
<!-- <a class="button is-large button is-outlined" href="/blog"> -->

</template>
<script>
import { Icon } from 'ant-design-vue'
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2197972_is1hveuufj7.js', 
})
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    icon: {
      // type: String,
      required: true
    },
    tab: {
      required: false
    }
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
  .is-pinkbut { 
    position: relative;
    margin: auto;
    padding: 10px 22px;
    // padding-left: 30px;
    transition: all .2s ease;
    &:before { 
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      border-radius: 28px;
      background: rgba(#d3d3d3,.5); 
      // 5b6ba9
      width: 56px;
      height: 56px;
      transition: all .3s ease;
    }
    span {
      position: relative;
      letter-spacing: 1.2px;
      padding-left: 10px;
      font-size: 22px;
      // line-height: 18px;
      // font-weight: 900;
      // letter-spacing: .25em;
      // text-transform: uppercase;
      vertical-align: middle;
    }
    &:hover {
      &:before {
        width: 100%;
        background: rgba(#FFAB9D,1);
      }
      svg {
        transform: translateX(0);
      }
    &:active {
      transform: scale(.96);
    }
  }
}
</style>
