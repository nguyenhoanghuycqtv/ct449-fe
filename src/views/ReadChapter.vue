<!-- frontend/src/views/ReadChapter.vue -->
<template>
  <div class="container mx-auto px-4">
    <div class="my-8">
      <h1 class="text-3xl font-bold">Chương {{ chapter.chapterNumber }}</h1>
    </div>
    <div>
      <p class="text-2xl font-extrabold">{{ chapter.content }}</p>
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
  async created() {
    await this.fetchChapter();
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
  },
};
</script>
