<template>
  <Card id="card">
    <template #title>
      <h1>{{ title }}</h1>
    </template>
    <template #content>
      <Divider />
      <div id="game-card-body">
        <Image :src="src" :width="imageWidth"></Image>
        <div>
          <Accordion id="mobileDesc">
            <AccordionTab header="Description">
              <p>{{ desc }}</p>
            </AccordionTab>
          </Accordion>
          <p id="desktopDesc">{{ desc }}</p>
          <Button :label="buttontext" @click="openGame" rounded></Button>
        </div>
      </div>
    </template>
    <template #footer>
      <Tag
        v-for="(item, index) in tagArray"
        :key="index"
        style="margin-right: 10px; margin-bottom: 10px"
        rounded
        severity="info"
        >{{ item }}</Tag
      >
    </template>
  </Card>
</template>

<script>
export default {
  props: ["title", "src", "desc", "link", "tags", "buttontext"],
  data() {
    return {
      tagArray: [],
      imageWidth: 500,
    };
  },
  methods: {
    openGame() {
      window.open(this.link, "_blank");
    },
  },
  mounted() {
    this.tagArray = this.tags.split(",");
    let windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      this.imageWidth = document
        .getElementById("game-card-body")
        .getBoundingClientRect().width;
    }
  },
};
</script>

<style scoped>
#card {
  width: 90%;
  margin: 25px auto;
}
h1 {
  margin-top: -5px;
  margin-bottom: -15px;
}
#mobileDesc {
  display: block;
  margin: 15px auto;
}
#desktopDesc {
  display: none;
}
@media only screen and (min-width: 768px) {
  #mobileDesc {
    display: none;
  }
  #desktopDesc {
    display: block;
  }
  #card {
    width: 75%;
  }
  #game-card-body {
    display: flex;
    margin-bottom: -20px;
  }
  #game-card-body div {
    width: 50%;
    margin: auto 20px;
  }
}
</style>
