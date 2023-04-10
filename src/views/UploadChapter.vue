<!-- frontend/src/views/UploadChapter.vue -->

<template>
  <div class="container mx-auto px-4">
    <div class="my-8">
      <h1 class="text-3xl font-bold">Upload Chapter</h1>
    </div>
    <upload-form
      @submit="submitForm"
      :form-data="chapterFields"
      submit-label="Upload Chapter"
    ></upload-form>
  </div>
</template>

<script>
import UploadForm from "@/components/UploadForm.vue";

export default {
  components: {
    UploadForm,
  },
  data() {
    return {
      chapterFields: [
        {
          id: "mangaId",
          label: "Manga ID",
          type: "text",
          placeholder: "Enter Manga ID",
          value: "",
        },
        {
          id: "chapterNumber",
          label: "Chapter Number",
          type: "text",
          placeholder: "Enter Chapter Number",
          value: "",
        },
        {
          id: "content",
          label: "Nội dung",
          type: "textarea",
          placeholder: "Nhập nội dung",
          value: "",
        },
      ],
    };
  },
  methods: {
    async submitForm(event) {
      event.preventDefault();
      try {
        const mangaId = this.chapterFields.find(
          (field) => field.id === "mangaId"
        ).value;
        const chapterNumber = this.chapterFields.find(
          (field) => field.id === "chapterNumber"
        ).value;
        const content = this.chapterFields.find(
          (field) => field.id === "content"
        ).value;

        const response = await fetch(`http://localhost:5000/api/chapters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mangaId,
            chapterNumber,
            content,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to upload chapter");
        }

        this.$router.push({ name: "MangaDetail", params: { id: mangaId } });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
