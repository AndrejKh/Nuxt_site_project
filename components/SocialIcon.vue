<template>
  <a :href="to" class="w-6 mx-1"> <slot /> </a>
</template>
<script>
export default {
  props: ["to"],
};
</script>
