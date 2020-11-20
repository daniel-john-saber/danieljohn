import Vue from 'vue';
import VueGtag from 'vue-gtag';
export default ({ app }) => {
  Vue.use(VueGtag, {
      config: { id: 'G-QKG0B0RH4K' },
      appName: 'danieljohn',
      pageTrackerScreenviewEnabled: true
  }, app.router)
}
