<template>
  <Menubar
    :model="links"
    id="desktop-nav"
    style="margin: 0; border: none; border-radius: 0px"
  >
    <template #start>
      <div style="display: flex; margin-right: 20px">
        <Avatar
          image="/public/mainmug.jpg"
          shape="circle"
          size="large"
          style="margin: auto 10px"
          id="avatar"
        ></Avatar>
        <h2>Mikey Dowsett</h2>
      </div>
    </template>
    <template #item="item">
      <router-link :to="{ name: item.label }">
        <Button :label="item.label" text></Button>
      </router-link>
    </template>

    <template #end>
      <div id="socials">
        <Button icon="pi pi-envelope" text></Button>
        <Button icon="pi pi-github" @click="openGithub" text></Button>
        <Button icon="pi pi-linkedin" @click="openLinkedin" text></Button>
      </div>
    </template>
  </Menubar>

  <Menubar
    :model="links"
    id="mobile-nav"
    style="margin: 0; border: none; border-radius: 0px"
  >
    <template #item="item">
      <router-link :to="{ name: item.label }">
        <Button :label="item.label" text></Button>
      </router-link>
    </template>
    <template #end>
      <h3>Mikey Dowsett</h3>
    </template>
  </Menubar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          label: "Home",
          route: "/",
        },
        {
          label: "Games",
          route: "/games",
        },
        {
          label: "About",
          route: "/about",
        },
      ],
    };
  },
  methods: {
    openGithub() {
      window.open("https://github.com/Mikey-Dowsett", "_blank");
    },
    openLinkedin() {
      window.open("https://www.linkedin.com/in/mikey-dowsett/", "_blank");
    },
  },
};
</script>

<style scoped>
#avatar {
  display: none;
}
#top {
  display: flex;
  margin: 10px;
}
#top h2 {
  margin: auto 10px;
}
#top Button {
  margin: auto 5px auto auto;
}
#bottom {
  display: flex;
  background-color: #222;
}
#desktop-nav {
  display: none;
}
#socials {
  display: none;
}
a.router-link-exact-active Button {
  font-weight: bold;
}
@media only screen and (min-width: 768px) {
  #mobile-nav {
    display: none;
  }
  #desktop-nav {
    display: flex;
    margin: auto auto auto 5px;
  }
  #avatar {
    display: block;
  }
  #socials {
    display: block;
    margin: auto 10px auto auto;
  }
}
</style>
