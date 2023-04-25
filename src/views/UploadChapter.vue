<!-- UploadChapter.vue -->
<template>
  <div class="container mx-auto px-4">
    <h1 class="text-2xl font-bold mb-6">Upload a New Chapter</h1>
    <upload-form :form-data="formData" submit-label="Upload Chapter" @submit="submitForm"></upload-form>
  </div>
</template>

<script>
import axios from 'axios';
import UploadForm from '@/components/UploadForm.vue';

export default {
  components: {
    UploadForm,
  },
  data() {
    return {
      formData: [
        {
          id: 'mangaId',
          label: 'Manga',
          type: 'select',
          value: '',
          options: [],
          placeholder: 'Select a Manga',
        },
        {
          id: 'chapterNumber',
          label: 'Chapter Number',
          type: 'number',
          value: '',
          placeholder: 'Enter the chapter number',
        },
        {
          id: 'chapterContent',
          label: 'Chapter Content',
          type: 'textarea',
          value: '',
          placeholder: 'Enter the chapter content',
        },
      ],
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:5000/api/mangas');
      this.formData[0].options = response.data.map(manga => ({
        label: manga.title,
        value: manga._id,
      }));
    } catch (error) {
      console.error('Error fetching mangas:', error);
    }
  },
  methods: {
    submitForm(formData) {
      const chapterData = {
        mangaId: formData.find(field => field.id === 'mangaId').value,
        chapterNumber: formData.find(field => field.id === 'chapterNumber').value,
        content: formData.find(field => field.id === 'chapterContent').value,
      };

      // Gửi dữ liệu chương đến API của bạn để lưu vào cơ sở dữ liệu
      axios
        .post('http://localhost:5000/api/chapters', chapterData)
        .then(response => {
          console.log('Chapter uploaded:', response.data);
        })
        .catch(error => {
          console.error('Error uploading chapter:', error);
        });
    },
  },
};
</script>
