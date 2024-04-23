<template>
  <div v-for="project in projects" :key="project.id">
    <ProjectCard
      :title="project.title"
      :src="project.src"
      :desc="project.desc"
      :link="project.link"
      :tags="project.tags"
      :buttontext="buttontext"
    />
  </div>
</template>

<script>
import ProjectCard from "/src/components/ProjectCard.vue";
import json from "/src/assets/data.json";
export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [],
      buttontext: "",
    };
  },
  methods: {
    loadPage() {
      switch (this.$route.name) {
        case "Games":
          this.projects = json.games;
          this.buttontext = "Play Game";
          break;
        case "Projects":
          this.projects = json.projects;
          this.buttontext = "View Project";
          break;
      }
    },
  },
  mounted() {
    this.loadPage();
  },
  updated() {
    this.loadPage();
  },
};
</script>

<style></style>
