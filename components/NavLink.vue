<template>
  <li class="mr-3">
    <NuxtLink
      v-bind="$attrs"
      class="
        inline-block
        text-gray-300
        font-normal
        py-2
        px-4
        no-underline
        hover:text-gray-200 hover:text-underline
      "
      :to="to"
      
      ><slot
    /></NuxtLink>
  </li>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
