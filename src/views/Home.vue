<template>
  <div id="hero">
    <img src="/images/aquaducts.jpg" />
    <Card id="herointro">
      <template #content>
        <h1>I'm Mikey Dowsett</h1>
        <p>Welcome to my portfolio!</p>
      </template>
    </Card>
  </div>

  <div id="gallery">
    <Card>
      <template #header>
        <div style="display: flex">
          <h1 style="margin: 20px 0 auto 30px">My Games</h1>
          <router-link
            :to="{ name: 'Games' }"
            style="margin: 20px 30px auto auto"
          >
            <Button label="View All" rounded></Button>
          </router-link>
        </div>
      </template>
      <template #content>
        <Galleria
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="5"
          :circular="true"
          :showItemNavigators="true"
          :showItemNavigatorsOnHover="true"
          :showIndicators="true"
          :showThumbnails="false"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item.src"
              style="width: 100%; display: block"
            />
          </template>
        </Galleria>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      responsiveOptions: [
        {
          breakpoint: "991px",
          numVisible: 4,
        },
        {
          breakpoint: "767px",
          numVisible: 3,
        },
        {
          breakpoint: "575px",
          numVisible: 1,
        },
      ],
    };
  },
  mounted() {
    this.importGifs();
  },
  methods: {
    importGifs() {
      this.images.push({
        src: "/videos/bouncyball.gif",
      });
      this.images.push({
        src: "/videos/fightforearth.gif",
      });
      this.images.push({
        src: "/videos/thedrillers.gif",
      });
      this.images.push({ src: "/videos/mahara.gif" });
    },
  },
};
</script>

<style scoped>
#hero {
  width: 100%;
}
#herointro {
  width: 90%;
  margin: 25px auto;
  text-align: center;
}
#hero img {
  width: 100%;
}
#gallery {
  width: 90%;
  margin: 25px auto;
}
#gallery h1 {
  font-size: x-large;
}
@media only screen and (min-width: 768px) {
  #herointro {
    margin: auto;
    position: absolute;
    width: 25%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #hero img {
    width: 100%;
  }
  #gallery {
    width: 75%;
    margin: 25px auto;
  }
}
</style>
