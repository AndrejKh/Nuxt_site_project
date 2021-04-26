import NavLink from "./NavLink.vue";

export default {
  title: "NavLink",
  components: NavLink,
  argTypes: {
    text: {
      type: "string",
      description: "Normally a slot",
      default:"Home"
    },
  },
};

export const Main = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `        <ul
  class="list-reset flex justify-between flex-1 md:flex-none items-center"
  v-bind="$props" v-on="$props"
>
<NavLink>{{ $props.text}}</NavLink></ul>`,
});
