<script setup>
import { ref, watchEffect } from 'vue'

const tab = ref('projects')

import ProjectCard from 'components/ProjectCard.vue'
import json from 'src/assets/data.json'

const projects = ref([])

watchEffect(() => {
  switch (tab.value) {
    case 'games':
      projects.value = json.games
      break
    case 'projects':
      projects.value = json.projects
      break
    default:
      projects.value = []
      break
  }
})
</script>

<template>
  <div id="hero">
    <img class="bg_image" src="/images/aquaducts.jpg" />
    <q-card id="hero_intro">
      <q-card-section class="banner">
        <q-avatar size="100px">
          <img src="/images/mainmug.jpg" />
        </q-avatar>
        <h1>I'm Mikey Dowsett</h1>
      </q-card-section>

      <q-card-section class="socials">
        <q-btn
          icon="fa-brands fa-github"
          round
          color="white"
          outline
          href="https://github.com/Mikey-Dowsett"
          target="_blank"
        />
        <q-btn
          icon="fa-brands fa-linkedin"
          round
          color="white"
          outline
          href="https://www.linkedin.com/in/mikey-dowsett"
          target="_blank"
        />
        <q-btn
          icon="fa-brands fa-bluesky"
          round
          color="white"
          outline
          href="https://bsky.app/profile/mikeydowsett.bsky.social"
          target="_blank"
        />
        <q-btn
          icon="fa-brands fa-itch-io"
          round
          color="white"
          outline
          href="https://campfire-games.itch.io/"
          target="_blank"
        />
      </q-card-section>
    </q-card>
  </div>

  <div class="info">
    <q-expansion-item default-opened>
      <template v-slot:header>
        <q-item-section>
          <h4 style="margin: 0.5rem 0">About Me</h4>
        </q-item-section>
      </template>
      <p>
        I'm Mikey Dowsett, a self-taught game developer and software engineer studying Computer
        Science, currently working as a research assistant with a focus on AI and machine learning.
        I enjoy building projects ranging from games to practical software tools, and my work spans
        everything from training multi-head neural networks to designing LLM pipelines. My focus is
        on solving problems through technology and learning continuously. In my free time I also
        enjoy rock climbing, camping, and playing video games.
      </p>
      <p>You can download my resume here.</p>
      <q-btn label="Resume" href="resume.pdf" target="_blank" color="negative" />
    </q-expansion-item>
  </div>

  <div>
    <q-tabs
      v-model="tab"
      inline-label
      no-caps
      active-color="positive"
      indicator-color="transparent"
      align="justify"
    >
      <q-tab name="projects" icon="fa-solid fa-code" label="Projects" />
      <q-tab name="games" icon="fa-solid fa-gamepad" label="Games" />
    </q-tabs>

    <q-tab-panels v-model="tab">
      <q-tab-panel name="projects">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :src="project.src"
          :desc="project.desc"
          :link="project.link"
          :highlight="project.highlight"
          :tags="project.tags"
          :git="project.github"
          :demo="project.demo"
        />
      </q-tab-panel>
      <q-tab-panel name="games">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :src="project.src"
          :desc="project.desc"
          :link="project.link"
          :highlight="project.highlight"
          :tags="project.tags"
          :armor="project.armor"
          :itch="project.itch"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>

  <q-page-scroller position="bottom-right" :scroll-offset="350" :offset="[25, 25]">
    <q-btn fab icon="keyboard_arrow_up" color="negative" />
  </q-page-scroller>
</template>

<style scoped>
#hero {
  position: relative; /* makes this the positioning context */
  width: 100%;
  padding-top: 0;
  margin-top: 0;
}

.bg_image {
  width: 100%;
  display: block; /* removes extra space below img */
}
#hero_intro {
  position: absolute; /* sits on top of the image */
  top: 50%; /* vertical center relative to hero */
  left: 50%; /* horizontal center */
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;
  background: rgba(28, 28, 31, 0.85); /* optional overlay */
  color: var(--q-light);
}

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner .q-avatar {
  margin-right: 2rem;
}
.banner .q-avatar img {
  object-fit: contain; /* or 'cover' if you want cropping */
  width: 100%;
  height: 100%;
}

.socials {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.info {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 2rem auto;
  max-width: 900px;
}

.info .q-expansion-item {
  width: 100%;
  border: 2px solid var(--q-positive);
  border-radius: 25px;
  padding: 1rem;
}

#gallery {
  width: 75%;
  margin: 25px auto;
}
#gallery h1 {
  font-size: xx-large;
  font-weight: bold;
}
.carousel {
  height: 500px;
}
@media only screen and (max-width: 1100px) {
  #hero_intro {
    width: 95%; /* almost full width */
    padding: 15px;
    font-size: 0.9rem; /* scale text slightly smaller */
    left: 50%;
  }

  #hero_intro h1 {
    font-size: 2rem;
    margin-bottom: 8px;
    margin-top: 0;
  }

  .bg_image {
    object-fit: cover; /* keeps image nicely cropped */
    height: 50vh; /* limit height so hero section isn’t massive */
  }

  .banner {
    display: block;
  }
  .banner .q-avatar {
    margin-right: 0;
    margin-top: 1rem;
  }

  .info .q-expansion-item {
    width: 90%;
  }

  #gallery {
    width: 90%;
    margin: 25px auto;
  }
}
</style>
