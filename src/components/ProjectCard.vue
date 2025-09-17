<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps(
  ["title", "src", "desc", "link", "highlight",
    "tags", "git", "demo", "itch", "armor"]
)

const tagArray = ref(props.tags.split(','));
const imageWidth = ref(500);

onMounted(() => {
  tagArray.value = props.tags.split(",");
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    const el = document.getElementById("game-card-body");
    if (el) {
      imageWidth.value = el.getBoundingClientRect().width;
    }
  }
});
</script>

<template>
  <q-card class="card" :class="{ highlighted: highlight}">
    <q-card-section class="header">
      <h1>{{ title }}</h1>
    </q-card-section>

    <q-card-section class="content">
      <div class="game_card">
        <img :src="src" :width="imageWidth" :alt="src" />
        <div>
          <q-expansion-item class="mobile_description" label="Description">
            <p>{{ desc }}</p>
          </q-expansion-item>
          <p class="desktop_description">{{ desc }}</p>

          <q-btn v-if="git" icon="fa-brands fa-github" label="Github" :href="git" target="_blank" rounded />
          <q-btn v-if="demo" icon="fa-solid fa-laptop-code" label="Demo" :href="demo" target="_blank" rounded />
          <q-btn v-if="armor" icon="fa-solid fa-shield-halved" label="ArmorGames" :href="armor" target="_blank" rounded />
          <q-btn v-if="itch" icon="fa-brands fa-itch-io" label="Itch.io" :href="itch" target="_blank" rounded />
        </div>
      </div>
    </q-card-section>

    <q-card-section class="chips">
      <q-chip v-for="(tag, i) in tagArray" :key="i" :label="tag"
      color="negative"/>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.card {
  width: 90%;
  max-width: 900px;
  margin-bottom: 4rem;
}

.header h1 {
  text-align: center;
  margin: 1rem 1rem;
  font-size: 2rem;
  font-weight: bold;
}

.game_card {
  margin: 1rem;
  display: flex;
  align-items: center;
  gap: 20px;
}

.game_card img {
  max-width: 100%;
  border-radius: 25px;
  border: 2px solid var(--q-light);
}

.game_card div {
  flex: 1;
}

.chips {
  margin: 1rem;
  pointer-events: none;
}

.mobile_description {
  display: none;
}

.desktop_description {
  display: block;
}

.q-btn {
  margin-right: 1rem;
}

.highlighted {
  position: relative;
  overflow: hidden;
}

.highlighted::before {
  content: "";
  position: absolute;
  inset: 0;
  background: conic-gradient(
    var(--q-negative) 0deg 90deg,
    var(--q-positive),
    var(--q-positive),
    var(--q-negative)
  );
}

@media only screen and (max-width: 768px) {
  .card {
    width: 100%;
  }

  .game_card {
    flex-direction: column;
    align-items: center;
  }
  .game_card div {
    width: 100%;
    margin: 0 0 1rem 0;
  }
  .mobile_description {
    display: block;
  }
  .desktop_description {
    display: none;
  }
}
</style>
