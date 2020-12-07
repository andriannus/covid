import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Content',

  props: {
    className: {
      type: String,
      default: '',
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    hasTopBar: {
      type: Boolean,
      default: true,
    },
    padding: {
      type: String,
      default: '',
    },
  },

  setup(props, { slots }) {
    const hasContentFooter = computed(() => !!slots.contentFooter);
    const hasContentHeader = computed(() => !!slots.contentHeader);

    const contentClassNames = computed(() => {
      return [
        {
          'Content--hasTopBar': props.hasTopBar,
        },
        !!props.className && props.className,
        'Content Flex Flex-column JustifyContent-spaceBetween',
      ];
    });

    const contentBodyClassNames = computed(() => {
      return [
        {
          [`Padding-${props.padding}`]: !!props.padding,
        },
        {
          'PaddingTop-base': !props.padding,
        },
        {
          'PaddingBottom-base': !props.padding,
        },
        'Content-body',
      ];
    });

    const contentHeaderClassNames = computed(() => {
      return [
        {
          [`PaddingRight-${props.padding}`]: !!props.padding,
        },
        {
          [`PaddingTop-${props.padding}`]: !!props.padding,
        },
        {
          [`PaddingLeft-${props.padding}`]: !!props.padding,
        },
        'Content-header',
      ];
    });

    const contentFooterClassNames = computed(() => {
      return [
        {
          [`PaddingRight-${props.padding}`]: !!props.padding,
        },
        {
          [`PaddingBottom-${props.padding}`]: !!props.padding,
        },
        {
          [`PaddingLeft-${props.padding}`]: !!props.padding,
        },
        'Content-footer',
      ];
    });

    return {
      contentBodyClassNames,
      contentClassNames,
      contentHeaderClassNames,
      contentFooterClassNames,
      hasContentFooter,
      hasContentHeader,
    };
  },
});
