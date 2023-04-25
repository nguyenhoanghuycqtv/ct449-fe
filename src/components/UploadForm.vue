<!-- UploadForm.vue -->
<template>
  <form @submit.prevent="$emit('submit', formData)" class="space-y-4">
    <div v-for="(field, index) in formData" :key="index">
      <label :for="field.id" class="block mb-1">{{ field.label }}</label>
      <input
        v-if="field.type !== 'textarea' && field.type !== 'select'"
        :id="field.id"
        v-model="field.value"
        :type="field.type"
        class="w-full px-3 py-2 border border-gray-300 rounded"
        :placeholder="field.placeholder"
      />
      <select
        v-if="field.type === 'select'"
        :id="field.id"
        v-model="field.value"
        class="w-full px-3 py-2 border border-gray-300 rounded"
      >
        <option
          v-for="(option, optionIndex) in field.options"
          :key="optionIndex"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <textarea
        v-if="field.type === 'textarea'"
        :id="field.id"
        v-model="field.value"
        class="w-full px-3 py-2 border border-gray-300 rounded"
        :placeholder="field.placeholder"
        rows="5"
      ></textarea>
    </div>
    <div>
      <button
        type="submit"
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {{ submitLabel }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    formData: {
      type: Array,
      required: true,
    },
    submitLabel: {
      type: String,
      required: true,
    },
  },
};
</script>
