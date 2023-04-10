<!-- frontend/src/components/ChapterList.vue -->
<template>
  <div class="w-full">
    <ul class="space-y-2">
      <li
        v-for="(chapter, index) in chapters"
        :key="chapter._id"
        class="bg-white p-4 rounded-lg shadow-md"
      >
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-xl font-extrabold">
              Chương {{ chapter.chapterNumber }}
            </h3>
            <p class="text-sm text-gray-500 font-extrabold">
              {{ chapter.title }}
            </p>
          </div>
          <router-link
            :to="`/mangas/${chapter.manga}/chapters/${chapter._id}`"
            class="text-blue-500 font-extrabold hover:text-blue-700"
            >Đọc</router-link
          >
          <button
            class="bg-red-500 text-white font-semibold py-1 px-2 rounded ml-4 hover:bg-red-700"
            @click="deleteChapter(chapter._id)"
          >
            Xóa
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    chapters: {
      type: Array,
      required: true,
    },
  },
  methods: {
    async deleteChapter(chapterId) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/chapters/${chapterId}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete chapter");
        }

        // Remove chapter from the list
        this.chapters = this.chapters.filter(
          (chapter) => chapter._id !== chapterId
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
