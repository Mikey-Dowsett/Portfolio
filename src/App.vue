<template>
  <Toast />
  <div class="container">
    <Header></Header>
    <router-view class="content" />
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style>
body {
  margin: 0;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1 0 auto;
}

.footer {
  flex-shrink: 0;
}
</style>
