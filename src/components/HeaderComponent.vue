<script setup lang="ts">
</script>

<template>
  <q-header>
    <q-toolbar class="toolbar">
      <div class="me">
        <q-avatar>
          <img src="/images/mainmug.jpg" />
        </q-avatar>
        <q-toolbar-title>Mikey Dowsett</q-toolbar-title>
      </div>

      <div class="links">
        <router-link :to="{name: 'Home'}">
          <q-btn flat color="positive">Home</q-btn>
        </router-link>
        <router-link :to="{name: 'Projects'}">
          <q-btn flat color="positive">Projects</q-btn>
        </router-link>
        <router-link :to="{name: 'About'}">
          <q-btn flat color="positive">About</q-btn>
        </router-link>
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
}
.me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1rem;
}
</style>
