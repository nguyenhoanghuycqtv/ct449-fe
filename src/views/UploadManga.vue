<!-- frontend/src/views/UploadManga.vue -->

<template>
  <div class="container mx-auto px-4">
    <div class="my-8">
      <h1 class="text-3xl font-bold">Upload Truyện</h1>
    </div>
    <upload-form
      @submit="submitForm"
      :form-data="mangaFields"
      submit-label="Upload Truyện"
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
          label: "Tên Truyện",
          type: "text",
          placeholder: "Nhập Tên Truyện",
          value: "",
        },
        {
          id: "description",
          label: "Mô Tả",
          type: "textarea",
          placeholder: "Nhập Mô Tả",
          value: "",
        },
        {
          id: "coverImage",
          label: "Ảnh Bìa",
          type: "text",
          placeholder: "Nhập Ảnh Bìa",
          value: "",
        },
        {
          id: "author",
          label: "Tác Giả",
          type: "text",
          placeholder: "Nhập Tác Giả",
          value: "",
        },
        {
          id: "status",
          label: "Trạng Thái",
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
