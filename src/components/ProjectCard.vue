<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps([
  'title',
  'src',
  'desc',
  'link',
  'highlight',
  'tags',
  'git',
  'demo',
  'itch',
  'armor',
])

const tagArray = ref(props.tags.split(','))
const imageWidth = ref(500)

onMounted(() => {
  tagArray.value = props.tags.split(',')
  const windowWidth = window.innerWidth

  if (windowWidth < 768) {
    const el = document.getElementById('game-card-body')
    if (el) {
      imageWidth.value = el.getBoundingClientRect().width
    }
  }
})
</script>

<template>
  <q-card class="card" :class="{ highlighted: highlight }">
    <div v-if="highlight" class="featured-badge q--avoid-card-border">
      <q-icon name="fa-solid fa-star" size="9px" />
      Featured
    </div>

    <q-card-section class="header">
      <h1 :class="{ 'gradient-title': highlight }">{{ title }}</h1>
    </q-card-section>

    <q-card-section class="content">
      <div class="game_card">
        <img :src="src" :width="imageWidth" :alt="src" />
        <div class="card-details">
          <q-expansion-item class="mobile_description" label="Description">
            <p>{{ desc }}</p>
          </q-expansion-item>
          <p class="desktop_description">{{ desc }}</p>

          <div class="btn-row">
            <q-btn
              v-if="git"
              icon="fa-brands fa-github"
              label="Github"
              :href="git"
              target="_blank"
              rounded
            />
            <q-btn
              v-if="demo"
              icon="fa-solid fa-laptop-code"
              label="Demo"
              :href="demo"
              target="_blank"
              rounded
            />
            <q-btn
              v-if="armor"
              icon="fa-solid fa-shield-halved"
              label="ArmorGames"
              :href="armor"
              target="_blank"
              rounded
            />
            <q-btn
              v-if="itch"
              icon="fa-brands fa-itch-io"
              label="Itch.io"
              :href="itch"
              target="_blank"
              rounded
            />
          </div>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="chips">
      <q-chip v-for="(tag, i) in tagArray" :key="i" :label="tag" color="negative" />
    </q-card-section>
  </q-card>
</template>

<style scoped>
.card {
  width: 90%;
  max-width: 900px;
  margin-bottom: 4rem;
  position: relative;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.header {
  padding-bottom: 0;
}

.header h1 {
  text-align: center;
  margin: 0.75rem 1rem 0.5rem;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.featured-badge {
  text-align: center;
  gap: 5px;
  background: linear-gradient(135deg, var(--q-negative), var(--q-positive));
  color: var(--q-light);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 20px 20px 0px 0px;
  z-index: 2;
}

.game_card {
  margin: 0.5rem 1rem 1rem;
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.game_card img {
  max-width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(240, 228, 225, 0.15);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
}

.card-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.desktop_description {
  display: block;
  line-height: 1.65;
  color: rgba(240, 228, 225, 0.8);
  margin: 0;
}

.mobile_description {
  display: none;
}

.btn-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chips {
  padding: 0 1.5rem 1.25rem;
  pointer-events: none;
}

/* Highlighted card */
.highlighted {
  border: 2px solid transparent !important;
  background-image:
    linear-gradient(var(--q-dark), var(--q-dark)),
    linear-gradient(135deg, var(--q-negative) 0%, var(--q-info) 50%, var(--q-positive) 100%);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  box-shadow:
    0 0 28px rgba(158, 85, 94, 0.2),
    0 0 56px rgba(69, 133, 117, 0.1),
    0 10px 36px rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 768px) {
  .card {
    width: 100%;
  }

  .game_card {
    flex-direction: column;
    align-items: center;
    margin: 0.5rem 0.75rem 1rem;
  }

  .card-details {
    width: 100%;
  }

  .mobile_description {
    width: 100%;
    display: block;
  }

  .desktop_description {
    display: none;
  }
}
</style>
