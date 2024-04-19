<template>
  <div v-for="game in games" :key="game.id">
    <GameCard
      :title="game.title"
      :src="game.src"
      :desc="game.desc"
      :link="game.link"
      :tags="game.tags"
    />
  </div>
</template>

<script>
import GameCard from "/src/components/GameCard.vue";
import json from "/src/assets/data.json";
export default {
  components: { GameCard },
  data() {
    return {
      games: [],
    };
  },
  mounted() {
    this.games = json.games;
  },
};
</script>

<style></style>
