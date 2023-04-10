<template>
  <div class="container mx-auto px-4">
    <div class="my-8">
      <h1 class="text-4xl font-extrabold">{{ manga.title }}</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="w-full h-auto">
        <img
          :src="manga.coverImage"
          :alt="manga.title"
          class="shadow-lg rounded-md"
        />
      </div>
      <div>
        <h2 class="text-2xl font-extrabold mb-4">Thông tin truyện</h2>
        <p class="mb-4 text-lg font-extrabold">
          <strong class="font-extrabold">Tác giả:</strong> {{ manga.author }}
        </p>
        <p class="mb-4 text-lg font-extrabold whitespace-pre-wrap">
          {{ manga.description }}
        </p>
        <div class="bg-white p-6 shadow-lg rounded-md">
          <h3 class="text-xl font-extrabold mb-4">Danh sách chương</h3>
          <chapter-list :chapters="chapters"></chapter-list>
          <button
            class="bg-red-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-red-700"
            @click="deleteManga"
          >
            Xóa truyện
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChapterList from "@/components/ChapterList.vue";

export default {
  components: {
    ChapterList,
  },
  data() {
    return {
      manga: {
        title: "",
        cover: "",
        author: "",
      },
      chapters: [],
    };
  },
  async created() {
    await this.fetchMangaDetail();
    await this.fetchChapters();
  },
  methods: {
    async fetchMangaDetail() {
      try {
        const mangaId = this.$route.params.id;
        const response = await fetch(
          `http://localhost:5000/api/mangas/${mangaId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch manga details");
        }
        this.manga = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    async fetchChapters() {
      try {
        const mangaId = this.$route.params.id;
        const response = await fetch(
          `http://localhost:5000/api/manga/${mangaId}/chapters`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch chapters");
        }
        this.chapters = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    async deleteManga() {
      try {
        const mangaId = this.$route.params.id;
        const response = await fetch(
          `http://localhost:5000/api/mangas/${mangaId}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete manga");
        }

        // Redirect to the home page after successful deletion
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.error(error);
      }
    },
  },
  watch: {
    chapters: {
      deep: true,
      handler() {
        this.fetchChapters();
      },
    },
  },
};
</script>
