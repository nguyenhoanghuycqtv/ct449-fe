<!-- frontend/src/views/UploadManga.vue -->

<template>
  <div class="container mx-auto px-4">
    <div class="my-8">
      <h1 class="text-3xl font-bold">Upload Manga</h1>
    </div>
    <upload-form
      @submit="submitForm"
      :form-data="mangaFields"
      submit-label="Upload Manga"
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
      mangaFields: [
        {
          id: "title",
          label: "Title",
          type: "text",
          placeholder: "Enter Title",
          value: "",
        },
        {
          id: "description",
          label: "Description",
          type: "textarea",
          placeholder: "Enter Description",
          value: "",
        },
        {
          id: "coverImage",
          label: "Cover Image URL",
          type: "text",
          placeholder: "Enter Cover Image URL",
          value: "",
        },
        {
          id: "author",
          label: "Author",
          type: "text",
          placeholder: "Enter Author",
          value: "",
        },
        {
          id: "status",
          label: "Status",
          type: "select",
          options: [
            { label: "Ongoing", value: "ongoing" },
            { label: "Completed", value: "completed" },
          ],
          value: "",
        },
      ],
    };
  },
  methods: {
    async submitForm() {
      try {
        const title = this.mangaFields.find(
          (field) => field.id === "title"
        ).value;
        const description = this.mangaFields.find(
          (field) => field.id === "description"
        ).value;
        const coverImage = this.mangaFields.find(
          (field) => field.id === "coverImage"
        ).value;
        const author = this.mangaFields.find(
          (field) => field.id === "author"
        ).value;
        const status = this.mangaFields.find(
          (field) => field.id === "status"
        ).value;

        const response = await fetch("http://localhost:5000/api/mangas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            coverImage,
            author,
            status,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to upload manga");
        }

        this.$router.push({ name: "Home" });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
