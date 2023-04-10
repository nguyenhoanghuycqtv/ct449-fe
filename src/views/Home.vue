<!-- frontend/src/views/Home.vue -->

<template>
  <div class="container mx-auto px-4">
    <div class="my-8">
      <h1 class="text-3xl font-extrabold">Danh sách truyện</h1>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <manga-card
        v-for="manga in mangas"
        :key="manga._id"
        :manga="manga"
      ></manga-card>
    </div>
  </div>
</template>

<script>
import MangaCard from "@/components/MangaCard.vue";

export default {
  components: {
    MangaCard,
  },
  data() {
    return {
      mangas: [],
    };
  },
  async created() {
    await this.fetchMangas();
  },
  methods: {
    async fetchMangas() {
      try {
        const response = await fetch("http://localhost:5000/api/mangas");
        if (!response.ok) {
          throw new Error("Failed to fetch mangas");
        }
        this.mangas = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
