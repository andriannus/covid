import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Card',

  props: {
    borderless: {
      type: Boolean,
      default: false,
    },
    radiusless: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { slots }) {
    const hasCardFooter = computed(() => !!slots.cardFooter);
    const hasCardHeader = computed(() => !!slots.cardHeader);

    const cardClassNames = computed(() => {
      return [
        {
          'Card--borderless': props.borderless,
        },
        {
          'Card--radiusless': props.radiusless,
        },
        'Card',
      ];
    });

    return {
      cardClassNames,
      hasCardFooter,
      hasCardHeader,
    };
  },
});
