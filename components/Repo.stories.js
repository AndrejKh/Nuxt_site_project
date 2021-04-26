import Repo from "./Repo.vue";
export default {
  title: "Repo",
  component: Repo,
};

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Repo               
    v-bind="$props" v-on="$props"    />
    `,
  components: { Repo },
});
