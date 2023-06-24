<template>
  <v-img
    src="../assets/NewBg.jpg"
    backgound-size="cover"
    width="120rem"
    height="61rem"
    content="center"
  />
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    time() {
      return new Date().toISOString().substr(0, 15);
    },
  },
};
</script>
