<!-- frontend/src/views/ReadChapter.vue -->
<template>
  <div class="container mx-auto px-4">
    <div class="my-8">
      <h1 class="text-3xl font-bold">Chương {{ chapter.chapterNumber }}</h1>
    </div>
    <div>
      <p class="text-xl font-extrabold whitespace-pre-wrap">
        {{ chapter.content }}
      </p>
    </div>
    <div class="flex justify-between mt-8">
      <button
        @click="navigateChapter(-1)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Lùi lại
      </button>
      <button
        @click="navigateChapter(1)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Tiến lên
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapter: {
        chapterNumber: "",
        content: "",
      },
    };
  },
  watch: {
    "$route.params.chapterId": {
      async handler() {
        await this.fetchChapter();
      },
      immediate: true,
    },
  },
  methods: {
    async fetchChapter() {
      try {
        const chapterId = this.$route.params.chapterId;
        const response = await fetch(
          `http://localhost:5000/api/chapters/${chapterId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch chapter");
        }
        const chapterData = await response.json();
        this.chapter = {
          chapterNumber: chapterData.chapterNumber,
          content: chapterData.content,
        };
      } catch (error) {
        console.error(error);
      }
    },
    async navigateChapter(direction) {
      try {
        const chapterId = this.$route.params.chapterId; // Make sure you get the correct chapter ID from the route params
        const response = await fetch(
          `http://localhost:5000/api/chapters/${chapterId}/navigate?direction=${direction}`
        );
        if (!response.ok) {
          throw new Error("Failed to navigate chapter");
        }
        const nextChapter = await response.json();
        this.$router.push({
          name: "ReadChapter",
          params: { id: nextChapter.manga, chapterId: nextChapter._id },
        }); // Replace the ID accordingly
      } catch (error) {
        console.error("Error:", error.message);
      }
    },
  },
};
</script>
