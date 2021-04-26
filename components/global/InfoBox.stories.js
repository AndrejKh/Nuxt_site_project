import InfoBox from "./InfoBox.vue";

export default {
  title: "InfoBox",
  components: InfoBox,
  argTypes: {
    text: {
      type: "string",
      description: "Normally a slot",
    },
  },
};

export const Main = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<InfoBox v-bind="$props" v-on="$props">{{ $props.text}}</InfoBox>`,
});
