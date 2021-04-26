import Skeleton from "./Skeleton.vue";

export default {
  title: "Skeleton",
  component: Skeleton,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["repository", "image"],
      },
    },
  },
};

export const Repository = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  template: `<Skeleton v-bind="$props" v-on="$props"/>`,
});
