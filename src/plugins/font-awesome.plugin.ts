import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faInfoCircle);

Vue.component('app-icon', FontAwesomeIcon);
