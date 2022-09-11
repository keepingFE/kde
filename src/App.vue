<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const store = sessionStorage.getItem("webStore");
    if (store) {
      this.$store.replaceState(
        Object.assign({}, this.$store.state, JSON.parse(store))
      );
    }
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("webStore", JSON.stringify(this.$store.state));
    });
  },
};
</script>
