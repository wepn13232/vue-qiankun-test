<template>
  <div class="about">
    <h1>This is an about page</h1>
      <div @click="toPage1">去Page1</div>
  </div>
</template>


<script>
export default {
    name: "About",
    methods: {
        toPage1() {
            this.$router.push("/about/page1?id=123123&js=2233")
        }
    },
};
</script>

<style scoped lang="scss">

</style>
