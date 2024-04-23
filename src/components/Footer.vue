<template>
  <Menubar id="menu">
    <template #end>
      <div id="socials">
        <router-link :to="{ name: 'Contact' }"
          ><Button icon="pi pi-envelope" text></Button
        ></router-link>
        <Button icon="pi pi-github" @click="openGithub" text></Button>
        <Button icon="pi pi-linkedin" @click="openLinkedin" text></Button>
      </div>
    </template>
  </Menubar>
</template>

<script>
export default {};
</script>

<style scoped>
#menu {
  margin: 0;
}
</style>
