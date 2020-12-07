import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faExclamation,
  faHome,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faExclamation, faHome, faInfoCircle);

Vue.component('app-icon', FontAwesomeIcon);
