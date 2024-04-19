<template>
  <Card id="card">
    <template #title>
      <div id="header">
        <h1>About Me</h1>
      </div>
    </template>
    <template #content>
      <Divider></Divider>
      <p class="m-0">
        Hi, I’m Mikey Dowsett, a self-taught game developer and a computer
        information systems student from New Zealand. I was born in Auckland,
        New Zealand, and I grew up in the United States. Some of my hobbies
        include reading books, playing video games, and rock climbing. I love
        exploring new destinations and immersing myself in the diverse culture,
        cuisine, and scenery of different places. One of the most memorable
        places I’ve visited while backpacking around Europe is the Park of the
        Aqueducts in Rome, where I was able to walk under the incredible
        Aqueducts the Roman's built so long ago. I’m currently studying computer
        information systems at college to enhance my technical and business
        skills. I enjoy making different kinds of games every time to challenge
        myself and learn new skills. I love coding, designing, and testing my
        games until they are perfect. I’m always looking for new opportunities
        to improve my game development skills and share my work with others.
      </p>
      <Divider></Divider>
    </template>
    <template #footer>
      <Image
        src="/gallery/gymbro.jpg"
        class="footer"
        :width="imageWidth"
      />
      <Image
        src="/gallery/tpose.jpg"
        class="footer"
        :width="imageWidth"
      />
      <Image
        src="/gallery/sketchy.jpg"
        class="footer"
        :width="imageWidth"
      />
    </template>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      imageWidth: 500,
    };
  },
  mounted() {
    let windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      this.imageWidth = windowWidth / 2;
    }
  },
};
</script>

<style scoped>
#card {
  width: 92.5%;
  margin: 25px auto;
  text-align: center;
}
#header {
  display: flex;
  margin-top: 15px;
}
#header Avatar {
  margin: auto 0;
}
h1 {
  text-align: left;
  margin: auto 15px;
}
p {
  text-align: left;
}
.footer {
  size: 50px;
}
@media only screen and (min-width: 768px) {
  .footer {
    margin: 15px 15px;
  }
}
</style>
