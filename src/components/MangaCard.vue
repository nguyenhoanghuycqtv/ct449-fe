<!-- frontend/src/components/MangaCard.vue -->

<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
  >
    <img
      :src="manga.coverImage"
      :alt="manga.title"
      class="w-full object-cover object-center"
    />
    <div class="p-4">
      <h2 class="text-lg font-extrabold mb-2">{{ manga.title }}</h2>
      <p class="text-sm font-extrabold text-gray-500 mb-4">
        {{ manga.author }}
      </p>
      <router-link
        :to="{ name: 'MangaDetail', params: { id: manga._id } }"
        class="inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-extrabold hover:bg-blue-600 transition-colors duration-300"
      >
        Xem chi tiết
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    manga: {
      type: Object,
      required: true,
    },
  },
};
</script>
