import { Component, Vue } from 'vue-property-decorator';

@Component({
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s — COVID19',
  },
})
export default class App extends Vue {}
