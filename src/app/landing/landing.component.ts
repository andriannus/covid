import {
  computed,
  defineComponent,
  onMounted,
  reactive,
} from '@vue/composition-api';

import { FetchCountriesResponse, LandingState } from './landing.model';

import AppBottomBar from '@/app/shared/components/bottom-bar/bottom-bar.component.vue';
import AppCard from '@/app/shared/components/card/card.component.vue';
import AppContent from '@/app/shared/components/content/content.component.vue';
import AppLoader from '@/app/shared/components/loader/loader.component.vue';
import AppPage from '@/app/shared/components/page/page.component.vue';
import AppTopBar from '@/app/shared/components/top-bar/top-bar.component.vue';
import { useApiInvoker } from '@/app/shared/services/api-invoker';
import {
  formatDate,
  LONG_DATE_TIME_FORMAT,
  numberSeparator,
} from '@/app/shared/utils/transform';

export default defineComponent({
  name: 'Landing',

  metaInfo: {
    title: 'Beranda',
  },

  components: {
    AppBottomBar,
    AppCard,
    AppContent,
    AppLoader,
    AppPage,
    AppTopBar,
  },

  setup() {
    const { apiInvoker } = useApiInvoker({});

    const state = reactive<LandingState>({
      confirmed: 0,
      deaths: 0,
      isLoading: false,
      lastUpdate: '',
      recovered: 0,
    });

    const confirmed = computed(() => numberSeparator(state.confirmed));
    const deaths = computed(() => numberSeparator(state.deaths));
    const lastUpdate = computed(() =>
      formatDate(state.lastUpdate, LONG_DATE_TIME_FORMAT),
    );
    const recovered = computed(() => numberSeparator(state.recovered));

    onMounted(() => {
      fetchCovidData();
    });

    const fetchCovidData = async (): Promise<void> => {
      state.isLoading = true;

      try {
        const { data: Data } = await apiInvoker.get<FetchCountriesResponse>(
          '/countries/ID',
        );

        state.confirmed = Data.confirmed.value;
        state.deaths = Data.deaths.value;
        state.lastUpdate = Data.lastUpdate;
        state.recovered = Data.recovered.value;
      } catch {
        // To be continue;
      } finally {
        state.isLoading = false;
      }
    };

    return {
      confirmed,
      deaths,
      lastUpdate,
      recovered,
      state,
    };
  },
});
