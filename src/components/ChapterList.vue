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
            <h3 class="text-xl font-extrabold">Chương {{ chapter.chapterNumber }}</h3>
            <p class="text-sm text-gray-500 font-extrabold">
              {{ chapter.title }}
            </p>
          </div>
          <router-link
            :to="`/mangas/${chapter.manga}/chapters/${chapter._id}`"
            class="text-blue-500 font-extrabold hover:text-blue-700"
            >Đọc</router-link
          >
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
};
</script>
