import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Card',

  setup(_, { slots }) {
    const hasCardFooter = computed(() => !!slots.cardFooter);
    const hasCardHeader = computed(() => !!slots.cardHeader);

    return {
      hasCardFooter,
      hasCardHeader,
    };
  },
});
